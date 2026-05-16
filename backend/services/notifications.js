/**
 * Push Notification Service for Trail Knotz
 * 
 * Handles scheduling and sending push notifications for:
 * - Streak reminders (don't lose your streak!)
 * - Daily challenge alerts
 * - Troop mission updates
 * - Verification results
 * - Duel invitations
 * - Achievement unlocks
 * - Leaderboard changes
 */

const webpush = require('web-push');

// VAPID keys should be set in environment variables
const VAPID_PUBLIC_KEY = process.env.VAPID_PUBLIC_KEY || 'YOUR_VAPID_PUBLIC_KEY';
const VAPID_PRIVATE_KEY = process.env.VAPID_PRIVATE_KEY || 'YOUR_VAPID_PRIVATE_KEY';

webpush.setVapidDetails(
    'mailto:admin@trailknotz.com',
    VAPID_PUBLIC_KEY,
    VAPID_PRIVATE_KEY
);

// Notification Templates
const NOTIFICATION_TEMPLATES = {
    streak_reminder: {
        title: 'Don\'t Break Your Streak! 🔥',
        body: 'You haven\'t practiced today. Your {{streak_count}}-day streak is on the line!',
        icon: '/icons/streak-fire.png',
        badge: '/icons/badge-knot.png',
        tag: 'streak-reminder',
        actions: [
            { action: 'practice', title: 'Practice Now' },
            { action: 'freeze', title: 'Use Streak Freeze' },
        ],
    },
    daily_challenge: {
        title: 'New Daily Challenge! 🎯',
        body: 'Today\'s challenge: {{challenge_name}}. Can you master it?',
        icon: '/icons/challenge.png',
        badge: '/icons/badge-knot.png',
        tag: 'daily-challenge',
        actions: [
            { action: 'start', title: 'Start Challenge' },
        ],
    },
    mission_update: {
        title: 'Troop Mission Update 🏕️',
        body: '{{troop_name}} is {{progress}}% done with "{{mission_name}}"! Keep going!',
        icon: '/icons/mission.png',
        badge: '/icons/badge-knot.png',
        tag: 'mission-update',
    },
    verification_result: {
        title: 'Knot Verified! ✅',
        body: 'Your {{knot_name}} has been {{result}} by {{reviewer_name}}.',
        icon: '/icons/verified.png',
        badge: '/icons/badge-knot.png',
        tag: 'verification',
        actions: [
            { action: 'view', title: 'View Details' },
        ],
    },
    duel_invitation: {
        title: 'Knot Duel Challenge! ⚔️',
        body: '{{challenger_name}} has challenged you to a {{knot_name}} duel!',
        icon: '/icons/duel.png',
        badge: '/icons/badge-knot.png',
        tag: 'duel',
        requireInteraction: true,
        actions: [
            { action: 'accept', title: 'Accept' },
            { action: 'decline', title: 'Decline' },
        ],
    },
    achievement_unlocked: {
        title: 'Achievement Unlocked! 🏆',
        body: 'You earned "{{achievement_name}}" — +{{xp_reward}} XP!',
        icon: '/icons/achievement.png',
        badge: '/icons/badge-knot.png',
        tag: 'achievement',
    },
    leaderboard_change: {
        title: 'Leaderboard Shake-Up! 📊',
        body: 'You\'ve moved to #{{new_rank}} in {{troop_name}}!',
        icon: '/icons/leaderboard.png',
        badge: '/icons/badge-knot.png',
        tag: 'leaderboard',
    },
};

class NotificationService {
    constructor(db) {
        this.db = db;
    }

    /**
     * Register a push subscription for a user
     */
    async registerSubscription(userId, subscription) {
        const query = `
            INSERT INTO push_subscriptions (user_id, endpoint, p256dh_key, auth_key, created_at)
            VALUES ($1, $2, $3, $4, NOW())
            ON CONFLICT (user_id, endpoint) DO UPDATE SET
                p256dh_key = $3, auth_key = $4, updated_at = NOW()
        `;
        await this.db.query(query, [
            userId,
            subscription.endpoint,
            subscription.keys.p256dh,
            subscription.keys.auth,
        ]);
    }

    /**
     * Remove a push subscription
     */
    async removeSubscription(userId, endpoint) {
        await this.db.query(
            'DELETE FROM push_subscriptions WHERE user_id = $1 AND endpoint = $2',
            [userId, endpoint]
        );
    }

    /**
     * Send a notification to a specific user
     */
    async sendToUser(userId, templateKey, variables = {}) {
        const template = NOTIFICATION_TEMPLATES[templateKey];
        if (!template) throw new Error(`Unknown notification template: ${templateKey}`);

        // Interpolate variables into template
        const notification = this._interpolate(template, variables);

        // Get all subscriptions for this user
        const result = await this.db.query(
            'SELECT endpoint, p256dh_key, auth_key FROM push_subscriptions WHERE user_id = $1',
            [userId]
        );

        const sendPromises = result.rows.map(sub => {
            const pushSubscription = {
                endpoint: sub.endpoint,
                keys: { p256dh: sub.p256dh_key, auth: sub.auth_key },
            };
            return webpush.sendNotification(pushSubscription, JSON.stringify(notification))
                .catch(err => {
                    if (err.statusCode === 410) {
                        // Subscription expired, remove it
                        this.removeSubscription(userId, sub.endpoint);
                    }
                    console.error(`[Notification] Failed to send to user ${userId}:`, err.message);
                });
        });

        await Promise.allSettled(sendPromises);

        // Log notification
        await this.db.query(
            'INSERT INTO notification_log (user_id, template_key, variables, sent_at) VALUES ($1, $2, $3, NOW())',
            [userId, templateKey, JSON.stringify(variables)]
        );
    }

    /**
     * Send a notification to all members of a troop
     */
    async sendToTroop(troopId, templateKey, variables = {}) {
        const result = await this.db.query(
            'SELECT id FROM users WHERE troop_id = $1 AND notifications_enabled = true',
            [troopId]
        );

        const sendPromises = result.rows.map(user =>
            this.sendToUser(user.id, templateKey, variables)
        );

        await Promise.allSettled(sendPromises);
    }

    /**
     * Schedule streak reminders (run daily at 7 PM local time)
     */
    async sendStreakReminders() {
        const result = await this.db.query(`
            SELECT u.id, u.display_name, s.current_streak
            FROM users u
            JOIN streaks s ON u.id = s.user_id
            WHERE s.current_streak > 0
            AND s.last_practice_date < CURRENT_DATE
            AND u.notifications_enabled = true
        `);

        for (const user of result.rows) {
            await this.sendToUser(user.id, 'streak_reminder', {
                streak_count: user.current_streak,
            });
        }

        console.log(`[Notification] Sent ${result.rows.length} streak reminders`);
    }

    /**
     * Send daily challenge notification (run daily at 8 AM)
     */
    async sendDailyChallengeAlert(challengeName) {
        const result = await this.db.query(
            'SELECT id FROM users WHERE notifications_enabled = true'
        );

        for (const user of result.rows) {
            await this.sendToUser(user.id, 'daily_challenge', {
                challenge_name: challengeName,
            });
        }

        console.log(`[Notification] Sent daily challenge alert to ${result.rows.length} users`);
    }

    /**
     * Interpolate variables into a notification template
     */
    _interpolate(template, variables) {
        const interpolated = {};
        for (const [key, value] of Object.entries(template)) {
            if (typeof value === 'string') {
                interpolated[key] = value.replace(/\{\{(\w+)\}\}/g, (match, varName) => {
                    return variables[varName] !== undefined ? variables[varName] : match;
                });
            } else {
                interpolated[key] = value;
            }
        }
        return interpolated;
    }
}

module.exports = NotificationService;
