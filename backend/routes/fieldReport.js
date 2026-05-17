/**
 * Field Report API Routes
 * 
 * Handles settings management, email preview, test sending,
 * and report history for the weekly parent email feature.
 */

const express = require('express');
const router = express.Router();
const { generateReportHTML, getWeeklyStats, generateEncouragement, sendFieldReport } = require('../services/fieldReport');

/**
 * GET /api/field-report/settings/:userId
 * Get field report settings for a user
 */
router.get('/settings/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const pool = req.app.get('pool');

    const result = await pool.query(
      `SELECT * FROM field_report_settings WHERE user_id = $1`,
      [userId]
    );

    if (result.rows.length === 0) {
      return res.json({
        enabled: false,
        parentEmail: '',
        parentName: '',
        frequency: 'weekly',
        dayOfWeek: 'sunday',
        includeDetails: true,
        includeEncouragement: true,
        includePhotos: false,
      });
    }

    const settings = result.rows[0];
    res.json({
      enabled: settings.enabled,
      parentEmail: settings.parent_email,
      parentName: settings.parent_name,
      frequency: settings.frequency,
      dayOfWeek: settings.day_of_week,
      includeDetails: settings.include_details,
      includeEncouragement: settings.include_encouragement,
      includePhotos: settings.include_photos,
    });
  } catch (error) {
    console.error('Error fetching field report settings:', error);
    res.status(500).json({ error: 'Failed to fetch settings' });
  }
});

/**
 * PUT /api/field-report/settings/:userId
 * Update field report settings
 */
router.put('/settings/:userId', async (req, res) => {
  const { userId } = req.params;
  const {
    enabled,
    parentEmail,
    parentName,
    frequency,
    dayOfWeek,
    includeDetails,
    includeEncouragement,
    includePhotos,
  } = req.body;

  try {
    const pool = req.app.get('pool');

    await pool.query(
      `INSERT INTO field_report_settings 
       (user_id, enabled, parent_email, parent_name, frequency, day_of_week, 
        include_details, include_encouragement, include_photos, updated_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, NOW())
       ON CONFLICT (user_id) 
       DO UPDATE SET 
         enabled = $2, parent_email = $3, parent_name = $4, frequency = $5,
         day_of_week = $6, include_details = $7, include_encouragement = $8,
         include_photos = $9, updated_at = NOW()`,
      [userId, enabled, parentEmail, parentName, frequency, dayOfWeek,
       includeDetails, includeEncouragement, includePhotos]
    );

    res.json({ success: true });
  } catch (error) {
    console.error('Error saving field report settings:', error);
    res.status(500).json({ error: 'Failed to save settings' });
  }
});

/**
 * GET /api/field-report/preview/:userId
 * Get a preview of the next field report
 */
router.get('/preview/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const pool = req.app.get('pool');

    const weeklyData = await getWeeklyStats(pool, userId);
    const encouragement = generateEncouragement(weeklyData.scoutName, weeklyData.stats);

    const now = new Date();
    const weekStart = new Date(now);
    weekStart.setDate(weekStart.getDate() - 7);
    const weekOf = `${weekStart.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;

    res.json({
      scoutName: weeklyData.scoutName,
      weekOf,
      stats: weeklyData.stats,
      knotsCompleted: weeklyData.knotsCompleted,
      nextKnots: weeklyData.nextKnots,
      encouragement,
    });
  } catch (error) {
    console.error('Error generating preview:', error);
    res.status(500).json({ error: 'Failed to generate preview' });
  }
});

/**
 * POST /api/field-report/send-test/:userId
 * Send a test field report email
 */
router.post('/send-test/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const pool = req.app.get('pool');
    const result = await sendFieldReport(pool, userId);
    res.json(result);
  } catch (error) {
    console.error('Error sending test report:', error);
    res.status(500).json({ error: 'Failed to send test report' });
  }
});

/**
 * GET /api/field-report/history/:userId
 * Get field report send history
 */
router.get('/history/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const pool = req.app.get('pool');

    const result = await pool.query(
      `SELECT id, recipient_email, sent_at, opened
       FROM field_report_history
       WHERE user_id = $1
       ORDER BY sent_at DESC
       LIMIT 20`,
      [userId]
    );

    res.json({
      reports: result.rows.map((r) => ({
        id: r.id,
        recipientEmail: r.recipient_email,
        sentDate: r.sent_at,
        opened: r.opened || false,
      })),
    });
  } catch (error) {
    console.error('Error fetching report history:', error);
    res.status(500).json({ error: 'Failed to fetch history' });
  }
});

module.exports = router;
