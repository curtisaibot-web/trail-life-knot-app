/**
 * Buddy System API Routes
 * 
 * Handles buddy pairing, search, requests, encouragement, and
 * shared knot progress tracking.
 */

const express = require('express');
const router = express.Router();

/**
 * GET /api/buddy-system/:userId
 * Get buddy data for a user (current buddy, pending requests, shared progress)
 */
router.get('/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const pool = req.app.get('pool');

    // Get current buddy
    const buddyResult = await pool.query(
      `SELECT bp.*, 
              u.username as buddy_name, u.avatar as buddy_avatar, 
              u.current_streak as buddy_streak, u.xp as buddy_xp,
              t.name as troop_name,
              (SELECT COUNT(*) FROM user_knot_progress WHERE user_id = bp.buddy_id AND mastery_level = 'mastered') as knots_mastered
       FROM buddy_pairs bp
       JOIN users u ON u.id = bp.buddy_id
       LEFT JOIN troops t ON t.id = u.troop_id
       WHERE bp.user_id = $1 AND bp.status = 'active'
       LIMIT 1`,
      [userId]
    );

    // Get pending requests
    const requestsResult = await pool.query(
      `SELECT br.id, br.from_user_id, br.created_at,
              u.username as from_name, u.avatar as from_avatar,
              t.name as troop_name
       FROM buddy_requests br
       JOIN users u ON u.id = br.from_user_id
       LEFT JOIN troops t ON t.id = u.troop_id
       WHERE br.to_user_id = $1 AND br.status = 'pending'
       ORDER BY br.created_at DESC`,
      [userId]
    );

    // Get shared knot progress (if buddy exists)
    let sharedKnots = [];
    let encouragements = [];

    if (buddyResult.rows.length > 0) {
      const buddyId = buddyResult.rows[0].buddy_id;

      // Get all knots and check completion for both users
      const knotsResult = await pool.query(
        `SELECT k.slug as knot_slug, k.name as knot_name,
                (SELECT mastery_level FROM user_knot_progress WHERE user_id = $1 AND knot_id = k.id) as user_level,
                (SELECT mastery_level FROM user_knot_progress WHERE user_id = $2 AND knot_id = k.id) as buddy_level,
                (SELECT updated_at FROM user_knot_progress WHERE user_id = $1 AND knot_id = k.id AND mastery_level = 'mastered') as user_completed_at,
                (SELECT updated_at FROM user_knot_progress WHERE user_id = $2 AND knot_id = k.id AND mastery_level = 'mastered') as buddy_completed_at
         FROM knots k
         ORDER BY k.difficulty_level ASC`,
        [userId, buddyId]
      );

      sharedKnots = knotsResult.rows.map((row) => {
        const userCompleted = row.user_level === 'mastered';
        const buddyCompleted = row.buddy_level === 'mastered';
        let completedWithin24h = false;
        let bonusEarned = false;

        if (userCompleted && buddyCompleted && row.user_completed_at && row.buddy_completed_at) {
          const diff = Math.abs(
            new Date(row.user_completed_at) - new Date(row.buddy_completed_at)
          );
          completedWithin24h = diff <= 24 * 60 * 60 * 1000;
          bonusEarned = completedWithin24h;
        }

        return {
          knotSlug: row.knot_slug,
          knotName: row.knot_name,
          userCompleted,
          buddyCompleted,
          completedWithin24h,
          bonusEarned,
        };
      });

      // Get encouragement messages
      const msgResult = await pool.query(
        `SELECT be.id, be.message, be.created_at,
                CASE WHEN be.from_user_id = $1 THEN 'You' ELSE u.username END as from_name
         FROM buddy_encouragements be
         JOIN users u ON u.id = be.from_user_id
         WHERE (be.from_user_id = $1 AND be.to_user_id = $2)
            OR (be.from_user_id = $2 AND be.to_user_id = $1)
         ORDER BY be.created_at ASC
         LIMIT 50`,
        [userId, buddyId]
      );

      encouragements = msgResult.rows.map((row) => ({
        id: row.id,
        from: row.from_name,
        message: row.message,
        timestamp: row.created_at,
      }));
    }

    const buddy = buddyResult.rows[0]
      ? {
          id: buddyResult.rows[0].buddy_id,
          name: buddyResult.rows[0].buddy_name,
          avatar: buddyResult.rows[0].buddy_avatar || '🤠',
          troopName: buddyResult.rows[0].troop_name || 'Unknown Troop',
          streak: buddyResult.rows[0].buddy_streak || 0,
          xp: buddyResult.rows[0].buddy_xp || 0,
          knotsMastered: parseInt(buddyResult.rows[0].knots_mastered) || 0,
          lastActive: buddyResult.rows[0].last_active,
          joinedBuddyDate: buddyResult.rows[0].created_at,
        }
      : null;

    res.json({
      buddy,
      pendingRequests: requestsResult.rows.map((r) => ({
        id: r.id,
        fromName: r.from_name,
        fromAvatar: r.from_avatar || '🏕️',
        troopName: r.troop_name || 'Unknown Troop',
        timestamp: r.created_at,
      })),
      sharedKnots,
      encouragements,
    });
  } catch (error) {
    console.error('Error fetching buddy data:', error);
    res.status(500).json({ error: 'Failed to fetch buddy data' });
  }
});

/**
 * GET /api/buddy-system/search?q=query
 * Search for potential buddies by name or troop
 */
router.get('/search', async (req, res) => {
  const { q } = req.query;
  const userId = req.query.userId;

  try {
    const pool = req.app.get('pool');

    const result = await pool.query(
      `SELECT u.id, u.username as name, u.avatar, 
              t.name as troop_name, u.xp,
              (SELECT COUNT(*) FROM user_knot_progress WHERE user_id = u.id AND mastery_level = 'mastered') as knots_mastered
       FROM users u
       LEFT JOIN troops t ON t.id = u.troop_id
       WHERE (u.username ILIKE $1 OR t.name ILIKE $1)
         AND u.id != $2
         AND u.id NOT IN (SELECT buddy_id FROM buddy_pairs WHERE user_id = $2 AND status = 'active')
       LIMIT 10`,
      [`%${q}%`, userId]
    );

    res.json({
      results: result.rows.map((r) => ({
        id: r.id,
        name: r.name,
        avatar: r.avatar || '🌲',
        troopName: r.troop_name || 'Unknown Troop',
        knotsMastered: parseInt(r.knots_mastered) || 0,
        xp: r.xp || 0,
      })),
    });
  } catch (error) {
    console.error('Error searching for buddies:', error);
    res.status(500).json({ error: 'Search failed' });
  }
});

/**
 * POST /api/buddy-system/request
 * Send a buddy request
 */
router.post('/request', async (req, res) => {
  const { fromUserId, toUserId } = req.body;

  try {
    const pool = req.app.get('pool');

    // Check for existing request
    const existing = await pool.query(
      `SELECT id FROM buddy_requests 
       WHERE from_user_id = $1 AND to_user_id = $2 AND status = 'pending'`,
      [fromUserId, toUserId]
    );

    if (existing.rows.length > 0) {
      return res.status(409).json({ error: 'Request already sent' });
    }

    await pool.query(
      `INSERT INTO buddy_requests (from_user_id, to_user_id, status, created_at)
       VALUES ($1, $2, 'pending', NOW())`,
      [fromUserId, toUserId]
    );

    res.json({ success: true });
  } catch (error) {
    console.error('Error sending buddy request:', error);
    res.status(500).json({ error: 'Failed to send request' });
  }
});

/**
 * PUT /api/buddy-system/request/:requestId
 * Accept or decline a buddy request
 */
router.put('/request/:requestId', async (req, res) => {
  const { requestId } = req.params;
  const { accept } = req.body;

  try {
    const pool = req.app.get('pool');

    // Get the request
    const reqResult = await pool.query(
      `SELECT * FROM buddy_requests WHERE id = $1 AND status = 'pending'`,
      [requestId]
    );

    if (reqResult.rows.length === 0) {
      return res.status(404).json({ error: 'Request not found' });
    }

    const request = reqResult.rows[0];

    if (accept) {
      // Create buddy pair (bidirectional)
      await pool.query(
        `INSERT INTO buddy_pairs (user_id, buddy_id, status, created_at)
         VALUES ($1, $2, 'active', NOW()), ($2, $1, 'active', NOW())`,
        [request.from_user_id, request.to_user_id]
      );

      // Update request status
      await pool.query(
        `UPDATE buddy_requests SET status = 'accepted' WHERE id = $1`,
        [requestId]
      );
    } else {
      await pool.query(
        `UPDATE buddy_requests SET status = 'declined' WHERE id = $1`,
        [requestId]
      );
    }

    res.json({ success: true });
  } catch (error) {
    console.error('Error responding to buddy request:', error);
    res.status(500).json({ error: 'Failed to respond to request' });
  }
});

/**
 * POST /api/buddy-system/encourage
 * Send an encouragement message to buddy
 */
router.post('/encourage', async (req, res) => {
  const { fromUserId, toUserId, message } = req.body;

  try {
    const pool = req.app.get('pool');

    await pool.query(
      `INSERT INTO buddy_encouragements (from_user_id, to_user_id, message, created_at)
       VALUES ($1, $2, $3, NOW())`,
      [fromUserId, toUserId, message]
    );

    res.json({ success: true });
  } catch (error) {
    console.error('Error sending encouragement:', error);
    res.status(500).json({ error: 'Failed to send encouragement' });
  }
});

module.exports = router;
