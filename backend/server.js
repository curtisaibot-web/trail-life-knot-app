// ─────────────────────────────────────────────
// Trail Knotz — Master Backend Server
// ─────────────────────────────────────────────
const express = require('express');
const cors = require('cors');
const http = require('http');
const { Pool } = require('pg');
const { initializeSocket } = require('./socket');

// Route Modules
const authRoutes = require('./routes/auth');
const leaderboardRoutes = require('./routes/leaderboard');
const verificationRoutes = require('./routes/verification');
const buddySystemRoutes = require('./routes/buddySystem');
const fieldReportRoutes = require('./routes/fieldReport');

// Services
const { NotificationService } = require('./services/notifications');
const { sendAllScheduledReports } = require('./services/fieldReport');

// ─────────────────────────────────────────────
// Database Connection Pool
// ─────────────────────────────────────────────
const pool = new Pool({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME || 'trailknotz',
    user: process.env.DB_USER || 'trailknotz_admin',
    password: process.env.DB_PASSWORD || 'your_password_here',
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});

pool.query('SELECT NOW()')
    .then(() => console.log('[DB] PostgreSQL connected successfully'))
    .catch(err => console.warn('[DB] PostgreSQL not available, running in demo mode:', err.message));

// ─────────────────────────────────────────────
// Express App Setup
// ─────────────────────────────────────────────
const app = express();
const server = http.createServer(app);

// Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Attach database pool to request object and app-level pool
app.set('pool', pool);
app.use((req, res, next) => {
    req.db = pool;
    next();
});

// Request logging
app.use((req, res, next) => {
    const start = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`[API] ${req.method} ${req.path} → ${res.statusCode} (${duration}ms)`);
    });
    next();
});

// ─────────────────────────────────────────────
// API Routes
// ─────────────────────────────────────────────

// Health Check
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        service: 'Trail Knotz API',
        version: '1.0.0',
        timestamp: new Date().toISOString(),
    });
});

// Auth Routes (login, register, profile)
app.use('/api/auth', authRoutes);

// Leaderboard Routes (troop rankings, XP)
app.use('/api/leaderboard', leaderboardRoutes);

// Verification Routes (submit, review, approve/reject, scouts-honor)
app.use('/api/verification', verificationRoutes);

// Buddy System Routes (pairing, search, encouragement)
app.use('/api/buddy-system', buddySystemRoutes);

// Field Report Routes (parent email settings, preview, send)
app.use('/api/field-report', fieldReportRoutes);

// ─────────────────────────────────────────────
// Knot Data Routes
// ─────────────────────────────────────────────
app.get('/api/knots', async (req, res) => {
    try {
        const { program, category, difficulty } = req.query;
        let query = 'SELECT * FROM knots WHERE 1=1';
        const params = [];

        if (program) {
            params.push(program);
            query += ` AND program = $${params.length}`;
        }
        if (category) {
            params.push(category);
            query += ` AND category = $${params.length}`;
        }
        if (difficulty) {
            params.push(parseInt(difficulty));
            query += ` AND difficulty_level = $${params.length}`;
        }

        query += ' ORDER BY difficulty_level ASC, name ASC';
        const result = await req.db.query(query, params);
        res.json({ knots: result.rows });
    } catch (err) {
        console.error('[API] Error fetching knots:', err.message);
        res.json({ knots: getStaticKnots(), source: 'static' });
    }
});

app.get('/api/knots/:id', async (req, res) => {
    try {
        const result = await req.db.query('SELECT * FROM knots WHERE id = $1', [req.params.id]);
        if (result.rows.length === 0) return res.status(404).json({ error: 'Knot not found' });
        res.json({ knot: result.rows[0] });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ─────────────────────────────────────────────
// User Progress Routes
// ─────────────────────────────────────────────
app.get('/api/progress/:userId', async (req, res) => {
    try {
        const result = await req.db.query(`
            SELECT ukp.*, k.name as knot_name, k.category, k.difficulty_level
            FROM user_knot_progress ukp
            JOIN knots k ON ukp.knot_id = k.id
            WHERE ukp.user_id = $1
            ORDER BY ukp.updated_at DESC
        `, [req.params.userId]);
        res.json({ progress: result.rows });
    } catch (err) {
        res.json({ progress: [], source: 'demo' });
    }
});

app.post('/api/progress/:userId/update', async (req, res) => {
    try {
        const { knot_id, status, xp_earned } = req.body;
        const userId = req.params.userId;

        const result = await req.db.query(`
            INSERT INTO user_knot_progress (user_id, knot_id, status, xp_earned, updated_at)
            VALUES ($1, $2, $3, $4, NOW())
            ON CONFLICT (user_id, knot_id)
            DO UPDATE SET status = $3, xp_earned = user_knot_progress.xp_earned + $4, updated_at = NOW()
            RETURNING *
        `, [userId, knot_id, status, xp_earned]);

        await req.db.query(`
            UPDATE users SET total_xp = total_xp + $1 WHERE id = $2
        `, [xp_earned, userId]);

        res.json({ progress: result.rows[0] });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ─────────────────────────────────────────────
// Streak Routes
// ─────────────────────────────────────────────
app.get('/api/streaks/:userId', async (req, res) => {
    try {
        const result = await req.db.query(`
            SELECT * FROM user_streaks WHERE user_id = $1
        `, [req.params.userId]);

        if (result.rows.length === 0) {
            return res.json({ streak: { current_streak: 0, longest_streak: 0, streak_freezes: 3 } });
        }
        res.json({ streak: result.rows[0] });
    } catch (err) {
        res.json({ streak: { current_streak: 0, longest_streak: 0, streak_freezes: 3 }, source: 'demo' });
    }
});

app.post('/api/streaks/:userId/checkin', async (req, res) => {
    try {
        const userId = req.params.userId;
        const today = new Date().toISOString().split('T')[0];

        const result = await req.db.query(`
            INSERT INTO user_streaks (user_id, current_streak, longest_streak, last_activity_date)
            VALUES ($1, 1, 1, $2)
            ON CONFLICT (user_id)
            DO UPDATE SET
                current_streak = CASE
                    WHEN user_streaks.last_activity_date = ($2::date - interval '1 day')::date
                    THEN user_streaks.current_streak + 1
                    WHEN user_streaks.last_activity_date = $2::date
                    THEN user_streaks.current_streak
                    ELSE 1
                END,
                longest_streak = GREATEST(user_streaks.longest_streak, user_streaks.current_streak + 1),
                last_activity_date = $2
            RETURNING *
        `, [userId, today]);

        res.json({ streak: result.rows[0] });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ─────────────────────────────────────────────
// Daily Challenge Routes
// ─────────────────────────────────────────────
app.get('/api/daily-challenge', async (req, res) => {
    try {
        const today = new Date();
        const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();

        const result = await req.db.query(`
            SELECT * FROM knots ORDER BY id OFFSET ($1 % (SELECT COUNT(*) FROM knots)) LIMIT 1
        `, [seed]);

        res.json({
            challenge: result.rows[0],
            date: today.toISOString().split('T')[0],
            bonus_xp: 50,
        });
    } catch (err) {
        res.json({
            challenge: { id: 1, name: 'Bowline', difficulty_level: 2 },
            date: new Date().toISOString().split('T')[0],
            bonus_xp: 50,
            source: 'static',
        });
    }
});

// ─────────────────────────────────────────────
// Troop & Mission Routes
// ─────────────────────────────────────────────
app.get('/api/troops/:troopId', async (req, res) => {
    try {
        const result = await req.db.query(`
            SELECT t.*, COUNT(u.id) as member_count, SUM(u.total_xp) as total_troop_xp
            FROM troops t
            LEFT JOIN users u ON u.troop_id = t.id
            WHERE t.id = $1
            GROUP BY t.id
        `, [req.params.troopId]);
        res.json({ troop: result.rows[0] || {} });
    } catch (err) {
        res.json({ troop: { id: 1, name: 'Demo Troop', member_count: 5 }, source: 'demo' });
    }
});

app.get('/api/troops/:troopId/missions', async (req, res) => {
    try {
        const result = await req.db.query(`
            SELECT * FROM troop_missions
            WHERE troop_id = $1 AND status != 'expired'
            ORDER BY created_at DESC
        `, [req.params.troopId]);
        res.json({ missions: result.rows });
    } catch (err) {
        res.json({ missions: [], source: 'demo' });
    }
});

// ─────────────────────────────────────────────
// Badge & Achievement Routes
// ─────────────────────────────────────────────
app.get('/api/badges/:userId', async (req, res) => {
    try {
        const result = await req.db.query(`
            SELECT b.*, ub.earned_at
            FROM badges b
            LEFT JOIN user_badges ub ON ub.badge_id = b.id AND ub.user_id = $1
            ORDER BY b.category, b.tier
        `, [req.params.userId]);
        res.json({ badges: result.rows });
    } catch (err) {
        res.json({ badges: [], source: 'demo' });
    }
});

app.get('/api/achievements/:userId', async (req, res) => {
    try {
        const result = await req.db.query(`
            SELECT a.*, ua.unlocked_at
            FROM achievements a
            LEFT JOIN user_achievements ua ON ua.achievement_id = a.id AND ua.user_id = $1
            ORDER BY a.category, a.xp_required
        `, [req.params.userId]);
        res.json({ achievements: result.rows });
    } catch (err) {
        res.json({ achievements: [], source: 'demo' });
    }
});

// ─────────────────────────────────────────────
// Journal Routes
// ─────────────────────────────────────────────
app.get('/api/journal/:userId', async (req, res) => {
    try {
        const result = await req.db.query(`
            SELECT je.*, k.name as knot_name
            FROM journal_entries je
            LEFT JOIN knots k ON je.knot_id = k.id
            WHERE je.user_id = $1
            ORDER BY je.created_at DESC
        `, [req.params.userId]);
        res.json({ entries: result.rows });
    } catch (err) {
        res.json({ entries: [], source: 'demo' });
    }
});

app.post('/api/journal/:userId', async (req, res) => {
    try {
        const { knot_id, mood, difficulty_rating, notes, practice_duration } = req.body;
        const result = await req.db.query(`
            INSERT INTO journal_entries (user_id, knot_id, mood, difficulty_rating, notes, practice_duration)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *
        `, [req.params.userId, knot_id, mood, difficulty_rating, notes, practice_duration]);
        res.json({ entry: result.rows[0] });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ─────────────────────────────────────────────
// Weather Scenario Route
// ─────────────────────────────────────────────
app.get('/api/weather-scenarios', async (req, res) => {
    const { condition } = req.query;
    const scenarios = {
        rain: ['Taut-Line Hitch', 'Bowline', 'Clove Hitch'],
        wind: ['Bowline', 'Two Half Hitches', 'Timber Hitch'],
        snow: ['Square Knot', 'Sheet Bend', 'Bowline'],
        clear: ['Daisy Chain', 'Figure Eight', 'Square Knot'],
    };
    res.json({
        condition: condition || 'clear',
        recommended_knots: scenarios[condition] || scenarios.clear,
    });
});

// ─────────────────────────────────────────────
// Static Knot Data (Demo Fallback)
// ─────────────────────────────────────────────
function getStaticKnots() {
    return [
        { id: 1, name: 'Square Knot', category: 'binding', difficulty_level: 1, program: 'navigator', description: 'A binding knot used to secure a rope around an object.' },
        { id: 2, name: 'Bowline', category: 'loop', difficulty_level: 2, program: 'navigator', description: 'Creates a fixed loop at the end of a rope.' },
        { id: 3, name: 'Clove Hitch', category: 'hitch', difficulty_level: 2, program: 'navigator', description: 'A hitch used to secure a rope to a post.' },
        { id: 4, name: 'Two Half Hitches', category: 'hitch', difficulty_level: 1, program: 'navigator', description: 'Two overhand knots tied around a post.' },
        { id: 5, name: 'Taut-Line Hitch', category: 'hitch', difficulty_level: 3, program: 'navigator', description: 'An adjustable loop knot for tensioning.' },
        { id: 6, name: 'Timber Hitch', category: 'hitch', difficulty_level: 1, program: 'navigator', description: 'Used for dragging or hoisting logs.' },
        { id: 7, name: 'Figure Eight', category: 'stopper', difficulty_level: 1, program: 'adventurer', description: 'A stopper knot to prevent rope from slipping.' },
        { id: 8, name: 'Sheet Bend', category: 'bend', difficulty_level: 2, program: 'adventurer', description: 'Joins two ropes of different diameters.' },
        { id: 9, name: 'Daisy Chain', category: 'decorative', difficulty_level: 2, program: 'adventurer', description: 'Shortens a rope for storage.' },
        { id: 10, name: 'Trucker\'s Hitch', category: 'hitch', difficulty_level: 4, program: 'adventurer', description: 'Creates a mechanical advantage for tensioning.' },
        { id: 11, name: 'Prusik Knot', category: 'friction', difficulty_level: 4, program: 'adventurer', description: 'A friction hitch for climbing.' },
        { id: 12, name: 'Alpine Butterfly', category: 'loop', difficulty_level: 3, program: 'adventurer', description: 'A mid-line loop knot for climbing.' },
    ];
}

// ─────────────────────────────────────────────
// Initialize WebSocket (Socket.io)
// ─────────────────────────────────────────────
initializeSocket(server, pool);

// ─────────────────────────────────────────────
// Error Handling
// ─────────────────────────────────────────────
app.use((err, req, res, next) => {
    console.error('[ERROR]', err.stack);
    res.status(500).json({ error: 'Internal server error', message: err.message });
});

app.use((req, res) => {
    res.status(404).json({ error: 'Route not found', path: req.path });
});

// ─────────────────────────────────────────────
// Start Server
// ─────────────────────────────────────────────
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`
    ┌─────────────────────────────────────┐
    │   🪢  Trail Knotz API Server        │
    │   Port: ${PORT}                        │
    │   Mode: ${process.env.NODE_ENV || 'development'}              │
    │   WebSocket: Enabled                │
    │   Database: PostgreSQL              │
    └─────────────────────────────────────┘
    `);
});

module.exports = { app, server, pool };
