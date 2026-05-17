const express = require('express');
const router = express.Router();
// Assuming a db module exists: const db = require('../models/db');

// Middleware to check if user is a Troop Leader
const isTroopLeader = (req, res, next) => {
    // Mock implementation
    const userRole = req.headers['x-user-role']; // In reality, extract from JWT
    if (userRole === 'Troop_Leader' || userRole === 'Admin') {
        next();
    } else {
        res.status(403).json({ error: 'Access denied. Troop Leader role required.' });
    }
};

// POST: Submit a new knot attempt (photo/video)
router.post('/submit', async (req, res) => {
    try {
        const { userId, knotId, mediaUrl } = req.body;
        
        // 1. Insert into knot_attempts table
        /*
        const result = await db.query(
            `INSERT INTO knot_attempts (user_id, knot_id, media_url, status) 
             VALUES ($1, $2, $3, 'Pending_AI') RETURNING id`,
            [userId, knotId, mediaUrl]
        );
        const attemptId = result.rows[0].id;
        */
        const attemptId = Math.floor(Math.random() * 1000); // Mock ID

        // 2. Trigger async AI analysis (e.g., via message queue or direct API call)
        // triggerAIAnalysis(attemptId, mediaUrl);

        res.status(201).json({ 
            message: 'Attempt submitted successfully for AI analysis.',
            attemptId: attemptId,
            status: 'Pending_AI'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error during submission' });
    }
});

// POST: Webhook for AI Analysis Results
router.post('/webhook/ai-result', async (req, res) => {
    try {
        const { attemptId, confidenceScore, feedbackText } = req.body;
        
        let newStatus = 'Pending_Human';
        
        // Auto-reject if AI is highly confident it's wrong
        if (confidenceScore < 0.3) {
            newStatus = 'Rejected';
        }
        // Auto-approve if AI is extremely confident (optional, depending on strictness)
        // else if (confidenceScore > 0.95) { newStatus = 'Approved'; }

        /*
        await db.query(
            `UPDATE knot_attempts 
             SET ai_confidence_score = $1, ai_feedback_text = $2, status = $3 
             WHERE id = $4`,
            [confidenceScore, feedbackText, newStatus, attemptId]
        );
        */

        res.status(200).json({ message: 'AI result processed', newStatus });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error processing AI webhook' });
    }
});

// GET: Troop Leader Dashboard - Get pending verifications
router.get('/pending', isTroopLeader, async (req, res) => {
    try {
        const troopId = req.query.troopId;
        
        /*
        const result = await db.query(
            `SELECT * FROM pending_troop_verifications WHERE troop_id = $1`,
            [troopId]
        );
        res.json(result.rows);
        */
        
        // Mock data
        res.json([
            { attempt_id: 101, scout_name: 'AlexM', knot_name: 'Bowline', ai_confidence_score: 0.85, status: 'Pending_Human' },
            { attempt_id: 102, scout_name: 'SamT', knot_name: 'Square Knot', ai_confidence_score: 0.60, status: 'Pending_Human' }
        ]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error fetching pending queue' });
    }
});

// POST: Troop Leader approves/rejects an attempt
router.post('/review', isTroopLeader, async (req, res) => {
    try {
        const { attemptId, decision, feedbackText, leaderId } = req.body; // decision: 'Approved' or 'Rejected'
        
        /*
        await db.query(
            `UPDATE knot_attempts 
             SET status = $1, human_feedback_text = $2, reviewed_by = $3, reviewed_at = CURRENT_TIMESTAMP 
             WHERE id = $4`,
            [decision, feedbackText, leaderId, attemptId]
        );
        
        // If approved, update user_knot_progress and grant XP
        if (decision === 'Approved') {
            // ... logic to update mastery_status to 'Mastered' and add XP
        }
        */

        res.status(200).json({ message: `Attempt ${decision.toLowerCase()} successfully.` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error during review' });
    }
});

// POST: Scout's Honor Self-Verification
router.post('/scouts-honor', async (req, res) => {
    try {
        const { userId, knotSlug, verificationType, checklist, photoIncluded, timestamp } = req.body;

        // In production: insert into scouts_honor_verifications table
        /*
        const knotResult = await req.db.query('SELECT id FROM knots WHERE slug = $1', [knotSlug]);
        const knotId = knotResult.rows[0]?.id;

        await req.db.query(
            `INSERT INTO scouts_honor_verifications (user_id, knot_id, checklist, photo_included, verified_at)
             VALUES ($1, $2, $3, $4, $5)`,
            [userId, knotId, JSON.stringify(checklist), photoIncluded, timestamp]
        );

        // Update user_knot_progress with 'scouts_honor' verification type
        await req.db.query(
            `INSERT INTO user_knot_progress (user_id, knot_id, mastery_level, verification_type, updated_at)
             VALUES ($1, $2, 'mastered', 'scouts_honor', NOW())
             ON CONFLICT (user_id, knot_id)
             DO UPDATE SET mastery_level = 'mastered', verification_type = 'scouts_honor', updated_at = NOW()`,
            [userId, knotId]
        );

        // Award 15 XP (less than leader-verified 25 XP)
        await req.db.query('UPDATE users SET total_xp = total_xp + 15 WHERE id = $1', [userId]);
        */

        res.status(201).json({
            message: 'Scout\'s Honor verification recorded.',
            verificationType: 'scouts_honor',
            badgeColor: 'blue',
            xpAwarded: 15,
        });
    } catch (error) {
        console.error('Error processing Scout\'s Honor verification:', error);
        res.status(500).json({ error: 'Server error during Scout\'s Honor verification' });
    }
});

module.exports = router;
