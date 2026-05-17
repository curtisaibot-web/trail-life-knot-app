/**
 * Field Report Email Service
 * 
 * Generates and sends weekly progress emails to parents/guardians.
 * Runs on a cron schedule (Sundays at 9am) and can also be triggered
 * manually for test emails.
 * 
 * Uses nodemailer for email delivery.
 * Stores settings and history in PostgreSQL.
 */

const nodemailer = require('nodemailer');

// Email transporter (configure with your SMTP provider)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

/**
 * Generate the HTML email template for a Field Report
 */
function generateReportHTML(data) {
  const {
    parentName,
    scoutName,
    weekOf,
    stats,
    knotsCompleted,
    nextKnots,
    encouragement,
    includeDetails,
    includeEncouragement,
  } = data;

  const progressPercent = Math.round(
    (stats.totalKnotsMastered / stats.totalKnotsAvailable) * 100
  );

  const knotsListHTML = knotsCompleted
    .map(
      (k) =>
        `<tr>
          <td style="padding: 8px 12px; border-bottom: 1px solid #eee; font-size: 14px; color: #333;">${k.name}</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #eee; font-size: 14px; color: #666;">${k.date}</td>
          <td style="padding: 8px 12px; border-bottom: 1px solid #eee; font-size: 14px; color: ${k.badge === 'gold' ? '#D4AF37' : '#3B82F6'};">
            ${k.badge === 'gold' ? '🥇 Leader Verified' : '🤝 Scout\'s Honor'}
          </td>
        </tr>`
    )
    .join('');

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${scoutName}'s Knot Report</title>
</head>
<body style="margin: 0; padding: 0; background-color: #F9F7F2; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
    <!-- Header -->
    <tr>
      <td style="background: linear-gradient(135deg, #2D4A3E, #3D5A4E); padding: 30px; text-align: center;">
        <h1 style="color: #F9F7F2; font-size: 24px; margin: 0;">🪢 Knot Mastery</h1>
        <p style="color: rgba(249,247,242,0.7); font-size: 14px; margin: 8px 0 0;">Weekly Field Report</p>
      </td>
    </tr>

    <!-- Greeting -->
    <tr>
      <td style="padding: 24px 30px 0;">
        <p style="font-size: 16px; color: #333; margin: 0;">Hi ${parentName || 'there'},</p>
        <p style="font-size: 14px; color: #666; margin: 8px 0 0;">
          Here's <strong>${scoutName}</strong>'s knot-tying progress for the week of <strong>${weekOf}</strong>:
        </p>
      </td>
    </tr>

    <!-- Stats Grid -->
    <tr>
      <td style="padding: 20px 30px;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td width="25%" style="text-align: center; padding: 12px;">
              <div style="background-color: #f0fdf4; border-radius: 12px; padding: 16px;">
                <p style="font-size: 28px; font-weight: bold; color: #2D4A3E; margin: 0;">${stats.knotsMasteredThisWeek}</p>
                <p style="font-size: 11px; color: #666; margin: 4px 0 0;">New Knots</p>
              </div>
            </td>
            <td width="25%" style="text-align: center; padding: 12px;">
              <div style="background-color: #fff7ed; border-radius: 12px; padding: 16px;">
                <p style="font-size: 28px; font-weight: bold; color: #E87A5D; margin: 0;">${stats.currentStreak}</p>
                <p style="font-size: 11px; color: #666; margin: 4px 0 0;">Day Streak</p>
              </div>
            </td>
            <td width="25%" style="text-align: center; padding: 12px;">
              <div style="background-color: #fffbeb; border-radius: 12px; padding: 16px;">
                <p style="font-size: 28px; font-weight: bold; color: #D4AF37; margin: 0;">${stats.xpEarnedThisWeek}</p>
                <p style="font-size: 11px; color: #666; margin: 4px 0 0;">XP Earned</p>
              </div>
            </td>
            <td width="25%" style="text-align: center; padding: 12px;">
              <div style="background-color: #eff6ff; border-radius: 12px; padding: 16px;">
                <p style="font-size: 28px; font-weight: bold; color: #3B82F6; margin: 0;">${stats.practiceMinutes}</p>
                <p style="font-size: 11px; color: #666; margin: 4px 0 0;">Minutes</p>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    ${includeDetails && knotsCompleted.length > 0 ? `
    <!-- Knots Completed -->
    <tr>
      <td style="padding: 0 30px 20px;">
        <h3 style="font-size: 16px; color: #333; margin: 0 0 12px;">Knots Completed This Week</h3>
        <table width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #eee; border-radius: 8px; overflow: hidden;">
          <tr style="background-color: #f9f9f9;">
            <th style="padding: 8px 12px; text-align: left; font-size: 12px; color: #666; font-weight: 600;">Knot</th>
            <th style="padding: 8px 12px; text-align: left; font-size: 12px; color: #666; font-weight: 600;">Date</th>
            <th style="padding: 8px 12px; text-align: left; font-size: 12px; color: #666; font-weight: 600;">Verification</th>
          </tr>
          ${knotsListHTML}
        </table>
      </td>
    </tr>
    ` : ''}

    ${includeDetails && nextKnots.length > 0 ? `
    <!-- Next Knots -->
    <tr>
      <td style="padding: 0 30px 20px;">
        <p style="font-size: 14px; color: #666; margin: 0;">
          <strong style="color: #333;">Up Next:</strong> ${nextKnots.join(', ')}
        </p>
      </td>
    </tr>
    ` : ''}

    <!-- Progress Bar -->
    <tr>
      <td style="padding: 0 30px 20px;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
          <span style="font-size: 12px; color: #666;">Overall Progress</span>
          <span style="font-size: 12px; color: #666;">${stats.totalKnotsMastered}/${stats.totalKnotsAvailable} knots (${progressPercent}%)</span>
        </div>
        <div style="background-color: #e5e7eb; border-radius: 999px; height: 10px; overflow: hidden;">
          <div style="background-color: #2D4A3E; height: 100%; width: ${progressPercent}%; border-radius: 999px;"></div>
        </div>
      </td>
    </tr>

    ${includeEncouragement && encouragement ? `
    <!-- Encouragement -->
    <tr>
      <td style="padding: 0 30px 20px;">
        <div style="background-color: #f0fdf4; border-left: 4px solid #2D4A3E; border-radius: 0 8px 8px 0; padding: 16px;">
          <p style="font-size: 14px; color: #2D4A3E; margin: 0; font-style: italic;">
            ${encouragement}
          </p>
        </div>
      </td>
    </tr>
    ` : ''}

    <!-- Footer -->
    <tr>
      <td style="background-color: #f9f9f9; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
        <p style="font-size: 12px; color: #999; margin: 0;">
          This report was automatically generated by Knot Mastery.
        </p>
        <p style="font-size: 12px; color: #999; margin: 4px 0 0;">
          <a href="#" style="color: #2D4A3E;">Manage email preferences</a> · 
          <a href="#" style="color: #2D4A3E;">Unsubscribe</a>
        </p>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/**
 * Fetch a scout's weekly stats from the database
 */
async function getWeeklyStats(pool, userId) {
  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);

  try {
    // Get total knots mastered
    const masteredResult = await pool.query(
      `SELECT COUNT(*) as total FROM user_knot_progress 
       WHERE user_id = $1 AND mastery_level = 'mastered'`,
      [userId]
    );

    // Get knots mastered this week
    const weekMasteredResult = await pool.query(
      `SELECT k.name, ukp.updated_at, ukp.verification_type
       FROM user_knot_progress ukp
       JOIN knots k ON k.id = ukp.knot_id
       WHERE ukp.user_id = $1 
         AND ukp.mastery_level = 'mastered'
         AND ukp.updated_at >= $2
       ORDER BY ukp.updated_at DESC`,
      [userId, weekAgo.toISOString()]
    );

    // Get user streak and XP
    const userResult = await pool.query(
      `SELECT username, current_streak, longest_streak, xp FROM users WHERE id = $1`,
      [userId]
    );

    // Get XP earned this week
    const xpResult = await pool.query(
      `SELECT COALESCE(SUM(xp_earned), 0) as weekly_xp
       FROM knot_attempts
       WHERE user_id = $1 AND attempted_at >= $2`,
      [userId, weekAgo.toISOString()]
    );

    // Get total available knots
    const totalKnotsResult = await pool.query(
      `SELECT COUNT(*) as total FROM knots`
    );

    // Get next recommended knots
    const nextKnotsResult = await pool.query(
      `SELECT k.name FROM knots k
       WHERE k.id NOT IN (
         SELECT knot_id FROM user_knot_progress 
         WHERE user_id = $1 AND mastery_level = 'mastered'
       )
       ORDER BY k.difficulty_level ASC
       LIMIT 3`,
      [userId]
    );

    const user = userResult.rows[0] || {};
    const totalMastered = parseInt(masteredResult.rows[0]?.total || 0);
    const totalAvailable = parseInt(totalKnotsResult.rows[0]?.total || 15);

    return {
      scoutName: user.username || 'Scout',
      stats: {
        knotsMasteredThisWeek: weekMasteredResult.rows.length,
        totalKnotsMastered: totalMastered,
        totalKnotsAvailable: totalAvailable,
        currentStreak: user.current_streak || 0,
        longestStreak: user.longest_streak || 0,
        xpEarnedThisWeek: parseInt(xpResult.rows[0]?.weekly_xp || 0),
        totalXp: user.xp || 0,
        practiceMinutes: Math.round((weekMasteredResult.rows.length * 15 + parseInt(xpResult.rows[0]?.weekly_xp || 0) / 5)),
        badgeProgress: Math.round((totalMastered / totalAvailable) * 100),
      },
      knotsCompleted: weekMasteredResult.rows.map((row) => ({
        name: row.name,
        date: new Date(row.updated_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        badge: row.verification_type === 'leader' ? 'gold' : 'scouts_honor',
      })),
      nextKnots: nextKnotsResult.rows.map((r) => r.name),
    };
  } catch (error) {
    console.error('Error fetching weekly stats:', error);
    throw error;
  }
}

/**
 * Generate an encouragement message based on stats
 */
function generateEncouragement(scoutName, stats) {
  const messages = [];

  if (stats.currentStreak >= 14) {
    messages.push(
      `${scoutName} has an incredible ${stats.currentStreak}-day streak! That's serious dedication. They're building habits that will last a lifetime.`
    );
  } else if (stats.currentStreak >= 7) {
    messages.push(
      `${scoutName} is on a ${stats.currentStreak}-day streak! Encourage them to keep going — consistency is the key to mastery.`
    );
  } else if (stats.currentStreak >= 3) {
    messages.push(
      `${scoutName} has been practicing for ${stats.currentStreak} days in a row. A great start — see if they can reach a 7-day streak!`
    );
  }

  if (stats.badgeProgress >= 75) {
    messages.push(
      `They're ${stats.badgeProgress}% of the way to mastering all core knots! The finish line is in sight.`
    );
  } else if (stats.badgeProgress >= 50) {
    messages.push(
      `They've passed the halfway mark with ${stats.totalKnotsMastered} knots mastered. Great progress!`
    );
  }

  if (stats.knotsMasteredThisWeek >= 3) {
    messages.push(
      `An outstanding week with ${stats.knotsMasteredThisWeek} new knots mastered! ${scoutName} is really hitting their stride.`
    );
  } else if (stats.knotsMasteredThisWeek >= 1) {
    messages.push(
      `${scoutName} mastered ${stats.knotsMasteredThisWeek} new knot${stats.knotsMasteredThisWeek > 1 ? 's' : ''} this week. Every knot learned is a step toward becoming a true trail expert.`
    );
  }

  return messages.join(' ') || `${scoutName} is making progress on their knot-tying journey. Encourage them to practice a little each day!`;
}

/**
 * Send a Field Report email
 */
async function sendFieldReport(pool, userId) {
  try {
    // Get user's field report settings
    const settingsResult = await pool.query(
      `SELECT * FROM field_report_settings WHERE user_id = $1`,
      [userId]
    );

    if (!settingsResult.rows[0] || !settingsResult.rows[0].enabled) {
      return { sent: false, reason: 'Field reports disabled' };
    }

    const reportSettings = settingsResult.rows[0];

    // Get weekly stats
    const weeklyData = await getWeeklyStats(pool, userId);

    // Generate encouragement
    const encouragement = generateEncouragement(
      weeklyData.scoutName,
      weeklyData.stats
    );

    // Calculate week range
    const now = new Date();
    const weekStart = new Date(now);
    weekStart.setDate(weekStart.getDate() - 7);
    const weekOf = `${weekStart.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;

    // Generate HTML
    const html = generateReportHTML({
      parentName: reportSettings.parent_name,
      scoutName: weeklyData.scoutName,
      weekOf,
      stats: weeklyData.stats,
      knotsCompleted: weeklyData.knotsCompleted,
      nextKnots: weeklyData.nextKnots,
      encouragement,
      includeDetails: reportSettings.include_details,
      includeEncouragement: reportSettings.include_encouragement,
    });

    // Send email
    const info = await transporter.sendMail({
      from: `"Knot Mastery" <${process.env.SMTP_USER || 'reports@knotmastery.app'}>`,
      to: reportSettings.parent_email,
      subject: `${weeklyData.scoutName}'s Weekly Knot Report — ${weekOf}`,
      html,
    });

    // Log to history
    await pool.query(
      `INSERT INTO field_report_history (user_id, recipient_email, sent_at, message_id)
       VALUES ($1, $2, NOW(), $3)`,
      [userId, reportSettings.parent_email, info.messageId]
    );

    return { sent: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending field report:', error);
    throw error;
  }
}

/**
 * Send all scheduled field reports (called by cron)
 */
async function sendAllScheduledReports(pool) {
  const dayOfWeek = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();

  try {
    // Get all users with enabled field reports for today
    const usersResult = await pool.query(
      `SELECT user_id FROM field_report_settings 
       WHERE enabled = true AND day_of_week = $1`,
      [dayOfWeek]
    );

    const results = [];
    for (const row of usersResult.rows) {
      try {
        const result = await sendFieldReport(pool, row.user_id);
        results.push({ userId: row.user_id, ...result });
      } catch (error) {
        results.push({ userId: row.user_id, sent: false, error: error.message });
      }
    }

    console.log(`Field Reports sent: ${results.filter((r) => r.sent).length}/${results.length}`);
    return results;
  } catch (error) {
    console.error('Error sending scheduled reports:', error);
    throw error;
  }
}

module.exports = {
  generateReportHTML,
  getWeeklyStats,
  generateEncouragement,
  sendFieldReport,
  sendAllScheduledReports,
};
