const express = require('express');
const router = express.Router();
// Assuming a db module exists: const db = require('../models/db');
// const socket = require('../socket');

// GET: Fetch the current leaderboard for a specific troop
router.get('/troop/:troopId', async (req, res) => {
    try {
        const { troopId } = req.params;
        
        /*
        const result = await db.query(
            `SELECT u.id, u.username, u.rank, 
                    COALESCE(SUM(ukp.mastery_score), 0) as total_xp,
                    MAX(s.current_streak) as current_streak
             FROM users u
             JOIN user_troops ut ON u.id = ut.user_id
             LEFT JOIN user_knot_progress ukp ON u.id = ukp.user_id AND ukp.status = 'Mastered'
             LEFT JOIN streaks s ON u.id = s.user_id
             WHERE ut.troop_id = $1
             GROUP BY u.id
             ORDER BY total_xp DESC
             LIMIT 50`,
            [troopId]
        );
        res.json(result.rows);
        */
        
        // Mock Data for the prototype
        const mockLeaderboard = [
            { id: 1, username: 'CurtisA', rank: 'Adventurer', total_xp: 850, current_streak: 14 },
            { id: 2, username: 'SamT', rank: 'Navigator', total_xp: 720, current_streak: 5 },
            { id: 3, username: 'AlexM', rank: 'Navigator', total_xp: 650, current_streak: 2 },
            { id: 4, username: 'JohnD', rank: 'Adventurer', total_xp: 500, current_streak: 0 },
        ];
        
        res.json(mockLeaderboard);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error fetching leaderboard' });
    }
});

// POST: Simulate an XP gain (For testing the WebSocket)
router.post('/simulate-xp', async (req, res) => {
    try {
        const { troopId, userId, knotName, xpGained } = req.body;
        
        // In a real scenario, this would happen inside the verification review route
        // when a Troop Leader approves a knot attempt.
        
        // Simulate fetching the new total XP from DB
        const newTotalXp = 850 + xpGained; // Mock calculation
        
        // Broadcast the event to the troop room via Socket.io
        // socket.broadcastXpUpdate(troopId, userId, newTotalXp, knotName);
        
        res.status(200).json({ 
            message: 'XP simulated and broadcasted via WebSocket',
            newTotalXp
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error simulating XP' });
    }
});

module.exports = router;
