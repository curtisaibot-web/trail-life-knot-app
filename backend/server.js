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
// Static Knot Data (Demo Fallback) — 114 Knots
// Synced with frontend/src/data/knotRegistry.js
// ─────────────────────────────────────────────
function getStaticKnots() {
    return [
        // ── Navigator (Core 6) ──
        { id: 1,  name: 'Square Knot',              category: 'binding',    difficulty_level: 1, program: 'navigator',  description: 'A binding knot used to secure a rope around an object.' },
        { id: 2,  name: 'Bowline',                  category: 'loop',       difficulty_level: 2, program: 'navigator',  description: 'Creates a fixed loop at the end of a rope.' },
        { id: 3,  name: 'Clove Hitch',              category: 'hitch',      difficulty_level: 2, program: 'navigator',  description: 'A hitch used to secure a rope to a post.' },
        { id: 4,  name: 'Two Half Hitches',         category: 'hitch',      difficulty_level: 1, program: 'navigator',  description: 'Two overhand knots tied around a post.' },
        { id: 5,  name: 'Taut-Line Hitch',          category: 'hitch',      difficulty_level: 3, program: 'navigator',  description: 'An adjustable loop knot for tensioning.' },
        { id: 6,  name: 'Timber Hitch',             category: 'hitch',      difficulty_level: 1, program: 'navigator',  description: 'Used for dragging or hoisting logs.' },
        // ── Navigator (Extended) ──
        { id: 7,  name: 'Figure Eight',             category: 'stopper',    difficulty_level: 1, program: 'navigator',  description: 'A stopper knot to prevent rope from slipping.' },
        { id: 8,  name: 'Sheet Bend',               category: 'bend',       difficulty_level: 2, program: 'navigator',  description: 'Joins two ropes of different diameters.' },
        { id: 9,  name: 'Daisy Chain',              category: 'decorative', difficulty_level: 2, program: 'navigator',  description: 'Shortens a rope for storage.' },
        { id: 10, name: 'Overhand Knot',            category: 'stopper',    difficulty_level: 1, program: 'navigator',  description: 'The simplest knot, used as a stopper or base for other knots.' },
        { id: 11, name: 'Reef Knot',                category: 'binding',    difficulty_level: 1, program: 'navigator',  description: 'A binding knot, also known as the Square Knot, used to tie bandages.' },
        { id: 12, name: 'Cow Hitch',                category: 'hitch',      difficulty_level: 1, program: 'navigator',  description: 'Also called the Lark's Head; used to attach a rope to a ring.' },
        { id: 13, name: 'Girth Hitch',              category: 'hitch',      difficulty_level: 1, program: 'navigator',  description: 'Used to attach a sling to a harness or anchor.' },
        { id: 14, name: 'Pile Hitch',               category: 'hitch',      difficulty_level: 1, program: 'navigator',  description: 'A quick hitch for tying to a post.' },
        { id: 15, name: 'Half Hitch',               category: 'hitch',      difficulty_level: 1, program: 'navigator',  description: 'The first part of many hitches; a simple loop over a post.' },
        // ── Adventurer ──
        { id: 16, name: 'Trucker\'s Hitch',         category: 'hitch',      difficulty_level: 4, program: 'adventurer', description: 'Creates a mechanical advantage for tensioning loads.' },
        { id: 17, name: 'Prusik Knot',              category: 'friction',   difficulty_level: 4, program: 'adventurer', description: 'A friction hitch for climbing and rescue.' },
        { id: 18, name: 'Alpine Butterfly',         category: 'loop',       difficulty_level: 3, program: 'adventurer', description: 'A mid-line loop knot for climbing.' },
        { id: 19, name: 'Rolling Hitch',            category: 'hitch',      difficulty_level: 3, program: 'adventurer', description: 'Attaches a rope to another taut rope or pole at an angle.' },
        { id: 20, name: 'Cleat Hitch',              category: 'hitch',      difficulty_level: 2, program: 'adventurer', description: 'Used to secure a rope to a cleat on a boat or dock.' },
        { id: 21, name: 'Marlinspike Hitch',        category: 'hitch',      difficulty_level: 2, program: 'adventurer', description: 'A temporary knot used to attach a spike to a rope.' },
        { id: 22, name: "Midshipman's Hitch",       category: 'hitch',      difficulty_level: 3, program: 'adventurer', description: 'An adjustable loop, similar to the Taut-Line Hitch.' },
        { id: 23, name: 'Farrimond Friction Hitch', category: 'hitch',      difficulty_level: 3, program: 'adventurer', description: 'A quick-release adjustable hitch for tent ridgelines.' },
        { id: 24, name: 'Barrel Hitch',             category: 'hitch',      difficulty_level: 2, program: 'adventurer', description: 'Used to lift barrels, buckets, and cylindrical objects.' },
        { id: 25, name: 'Buntline Hitch',           category: 'hitch',      difficulty_level: 2, program: 'adventurer', description: 'A very secure hitch for attaching a rope to a ring.' },
        { id: 26, name: "Highwayman's Hitch",       category: 'hitch',      difficulty_level: 2, program: 'adventurer', description: 'A quick-release hitch used for temporary hitching.' },
        { id: 27, name: 'Icicle Hitch',             category: 'hitch',      difficulty_level: 3, program: 'adventurer', description: 'A friction hitch that grips a smooth, tapered surface.' },
        { id: 28, name: 'Killick Hitch',            category: 'hitch',      difficulty_level: 2, program: 'adventurer', description: 'Used to drag logs or stones; a Timber Hitch with a Half Hitch.' },
        { id: 29, name: 'Knute Hitch',              category: 'hitch',      difficulty_level: 1, program: 'adventurer', description: 'A quick hitch for attaching a lanyard to a tool.' },
        { id: 30, name: 'Magnus Hitch',             category: 'hitch',      difficulty_level: 3, program: 'adventurer', description: 'A variation of the Rolling Hitch for smooth poles.' },
        { id: 31, name: 'Ossel Hitch',              category: 'hitch',      difficulty_level: 2, program: 'adventurer', description: 'A fishing knot used to attach a hook to a line.' },
        { id: 32, name: 'Tensionless Hitch',        category: 'hitch',      difficulty_level: 2, program: 'adventurer', description: 'A simple wrap used to anchor a rope to a tree for rappelling.' },
        { id: 33, name: "Blake's Hitch",            category: 'friction',   difficulty_level: 4, program: 'adventurer', description: 'A friction hitch used by arborists for tree climbing.' },
        { id: 34, name: 'Distel Hitch',             category: 'friction',   difficulty_level: 4, program: 'adventurer', description: 'A friction hitch for arborist work, similar to the Prusik.' },
        { id: 35, name: 'Klemheist Knot',           category: 'friction',   difficulty_level: 3, program: 'adventurer', description: 'A friction hitch that works with webbing as well as cord.' },
        { id: 36, name: 'Valdotain Tresse',         category: 'friction',   difficulty_level: 4, program: 'adventurer', description: 'An advanced friction hitch for technical climbing.' },
        { id: 37, name: 'Schwabisch Hitch',         category: 'friction',   difficulty_level: 4, program: 'adventurer', description: 'A friction hitch used in rope access and arborist work.' },
        { id: 38, name: 'Bowline on a Bight',       category: 'loop',       difficulty_level: 3, program: 'adventurer', description: 'Creates two fixed loops in the middle of a rope.' },
        { id: 39, name: 'French Bowline',           category: 'loop',       difficulty_level: 3, program: 'adventurer', description: 'A rescue bowline with two adjustable loops.' },
        { id: 40, name: 'Water Bowline',            category: 'loop',       difficulty_level: 3, program: 'adventurer', description: 'A Bowline with an extra half hitch for use in wet conditions.' },
        // ── Ranger ──
        { id: 41, name: 'Spanish Bowline',          category: 'loop',       difficulty_level: 4, program: 'ranger',     description: 'A rescue knot that creates two independent loops.' },
        { id: 42, name: 'Portuguese Bowline',       category: 'loop',       difficulty_level: 4, program: 'ranger',     description: 'A bowline with two adjustable loops for rescue work.' },
        { id: 43, name: 'Yosemite Bowline',         category: 'loop',       difficulty_level: 4, program: 'ranger',     description: 'A reinforced Bowline used in climbing.' },
        { id: 44, name: 'Directional Figure Eight', category: 'loop',       difficulty_level: 3, program: 'ranger',     description: 'A Figure Eight tied so the loop points in a specific direction.' },
        { id: 45, name: 'Figure Eight on a Bight',  category: 'loop',       difficulty_level: 2, program: 'ranger',     description: 'A Figure Eight loop tied in the middle of a rope.' },
        { id: 46, name: 'Figure Eight Follow-Through', category: 'loop',    difficulty_level: 3, program: 'ranger',     description: 'A Figure Eight tied around an anchor by retracing the path.' },
        { id: 47, name: 'Artillery Loop',           category: 'loop',       difficulty_level: 4, program: 'ranger',     description: 'A mid-line loop knot that can take a load from any direction.' },
        { id: 48, name: "Farmer's Loop",            category: 'loop',       difficulty_level: 3, program: 'ranger',     description: 'A simple mid-line loop tied without access to the ends.' },
        { id: 49, name: 'Honda Knot',               category: 'loop',       difficulty_level: 3, program: 'ranger',     description: 'The loop used to form a lasso.' },
        { id: 50, name: 'Manharness Knot',          category: 'loop',       difficulty_level: 3, program: 'ranger',     description: 'A mid-line loop used to harness a person for hauling.' },
        { id: 51, name: 'Perfection Loop',          category: 'loop',       difficulty_level: 3, program: 'ranger',     description: 'A small, strong loop used in fishing for attaching lures.' },
        { id: 52, name: "Surgeon's Loop",           category: 'loop',       difficulty_level: 2, program: 'ranger',     description: 'A quick loop knot used in fishing and surgery.' },
        { id: 53, name: "Angler's Loop",            category: 'loop',       difficulty_level: 2, program: 'ranger',     description: 'A permanent loop for fishing lines.' },
        { id: 54, name: 'Bimini Twist',             category: 'loop',       difficulty_level: 4, program: 'ranger',     description: 'A 100% strength loop knot used in offshore fishing.' },
        { id: 55, name: 'Dropper Loop',             category: 'loop',       difficulty_level: 3, program: 'ranger',     description: 'A loop tied in the middle of a fishing line for attaching extra hooks.' },
        { id: 56, name: 'Non-Slip Mono',            category: 'loop',       difficulty_level: 3, program: 'ranger',     description: 'A strong loop knot for monofilament fishing line.' },
        { id: 57, name: 'Carrick Bend',             category: 'bend',       difficulty_level: 3, program: 'ranger',     description: 'A strong bend for joining two large ropes.' },
        { id: 58, name: 'Double Sheet Bend',        category: 'bend',       difficulty_level: 2, program: 'ranger',     description: 'A more secure version of the Sheet Bend for very unequal ropes.' },
        { id: 59, name: 'Water Knot',               category: 'bend',       difficulty_level: 2, program: 'ranger',     description: 'Used to join two ends of webbing or tape.' },
        { id: 60, name: "Double Fisherman's Knot",  category: 'bend',       difficulty_level: 3, program: 'ranger',     description: 'A very secure bend for joining two ropes of similar diameter.' },
        { id: 61, name: "Ashley's Bend",            category: 'bend',       difficulty_level: 3, program: 'ranger',     description: 'A secure bend invented by Clifford Ashley.' },
        { id: 62, name: "Hunter's Bend",            category: 'bend',       difficulty_level: 3, program: 'ranger',     description: 'A strong, symmetric bend for joining two ropes.' },
        { id: 63, name: 'Zeppelin Bend',            category: 'bend',       difficulty_level: 3, program: 'ranger',     description: 'An extremely secure bend, originally used for mooring airships.' },
        { id: 64, name: 'Blood Knot',               category: 'bend',       difficulty_level: 3, program: 'ranger',     description: 'A fishing knot used to join two lines of similar diameter.' },
        { id: 65, name: 'Nail Knot',                category: 'bend',       difficulty_level: 3, program: 'ranger',     description: 'A fishing knot used to attach a leader to a fly line.' },
        { id: 66, name: 'Albright Knot',            category: 'bend',       difficulty_level: 3, program: 'ranger',     description: 'A fishing knot for joining lines of very different diameters.' },
        { id: 67, name: "Surgeon's Knot",           category: 'bend',       difficulty_level: 2, program: 'ranger',     description: 'A reliable bend for joining fishing lines.' },
        { id: 68, name: "Weaver's Knot",            category: 'bend',       difficulty_level: 2, program: 'ranger',     description: 'A quick bend for joining thread or thin cord.' },
        { id: 69, name: 'Vice Versa Bend',          category: 'bend',       difficulty_level: 3, program: 'ranger',     description: 'A symmetric bend that works well with slippery ropes.' },
        { id: 70, name: 'Simple Simon Under',       category: 'bend',       difficulty_level: 2, program: 'ranger',     description: 'A bend for slippery synthetic ropes.' },
        // ── Woodsman ──
        { id: 71, name: 'Simple Simon Over',        category: 'bend',       difficulty_level: 2, program: 'woodsman',  description: 'A variation of the Simple Simon Under bend.' },
        { id: 72, name: 'Double Overhand Knot',     category: 'stopper',    difficulty_level: 1, program: 'woodsman',  description: 'A larger stopper knot, more secure than the Overhand.' },
        { id: 73, name: 'Stevedore Knot',           category: 'stopper',    difficulty_level: 2, program: 'woodsman',  description: 'A large stopper knot used by dock workers.' },
        { id: 74, name: "Ashley's Stopper Knot",    category: 'stopper',    difficulty_level: 2, program: 'woodsman',  description: 'A large, secure stopper knot invented by Clifford Ashley.' },
        { id: 75, name: "Monkey's Fist",            category: 'stopper',    difficulty_level: 4, program: 'woodsman',  description: 'A decorative stopper knot used as a weight on a heaving line.' },
        { id: 76, name: 'Heaving Line Knot',        category: 'stopper',    difficulty_level: 3, program: 'woodsman',  description: 'A weighted knot tied at the end of a heaving line.' },
        { id: 77, name: "Oysterman's Stopper",      category: 'stopper',    difficulty_level: 2, program: 'woodsman',  description: 'A stopper knot that is easy to untie after loading.' },
        { id: 78, name: 'Matthew Walker Knot',      category: 'stopper',    difficulty_level: 4, program: 'woodsman',  description: 'A decorative multi-strand stopper knot.' },
        { id: 79, name: 'Wall Knot',                category: 'stopper',    difficulty_level: 3, program: 'woodsman',  description: 'A multi-strand knot used as the base for decorative ropework.' },
        { id: 80, name: 'Crown Knot',               category: 'stopper',    difficulty_level: 3, program: 'woodsman',  description: 'A multi-strand knot used to finish the end of a rope.' },
        { id: 81, name: 'Constrictor Knot',         category: 'binding',    difficulty_level: 2, program: 'woodsman',  description: 'A very secure binding knot, difficult to untie under load.' },
        { id: 82, name: 'Double Constrictor Knot',  category: 'binding',    difficulty_level: 3, program: 'woodsman',  description: 'An even more secure version of the Constrictor Knot.' },
        { id: 83, name: 'Boa Knot',                 category: 'binding',    difficulty_level: 3, program: 'woodsman',  description: 'A binding knot that is more secure than the Constrictor.' },
        { id: 84, name: 'Strangle Knot',            category: 'binding',    difficulty_level: 2, program: 'woodsman',  description: 'A binding knot used to close the neck of a bag.' },
        { id: 85, name: 'Packer\'s Knot',           category: 'binding',    difficulty_level: 2, program: 'woodsman',  description: 'A binding knot used to secure packages and bales.' },
        { id: 86, name: "Miller's Knot",            category: 'binding',    difficulty_level: 2, program: 'woodsman',  description: 'A binding knot used to close grain sacks.' },
        { id: 87, name: 'Thief Knot',               category: 'binding',    difficulty_level: 2, program: 'woodsman',  description: 'A knot that looks like a Square Knot but is structurally different.' },
        { id: 88, name: 'Granny Knot',              category: 'binding',    difficulty_level: 1, program: 'woodsman',  description: 'A common but unreliable variant of the Square Knot.' },
        { id: 89, name: 'Grief Knot',               category: 'binding',    difficulty_level: 2, program: 'woodsman',  description: 'A combination of Thief and Granny knots; used to demonstrate bad knots.' },
        { id: 90, name: 'Reef Knot (Binding)',      category: 'binding',    difficulty_level: 1, program: 'woodsman',  description: 'The classic Reef Knot used for securing bandages and sails.' },
        // ── Expert ──
        { id: 91, name: 'Square Lashing',           category: 'lashing',    difficulty_level: 3, program: 'expert',    description: 'Binds two poles together at a 90-degree angle.' },
        { id: 92, name: 'Diagonal Lashing',         category: 'lashing',    difficulty_level: 3, program: 'expert',    description: 'Secures diagonal braces to hold a structure rigid.' },
        { id: 93, name: 'Shear Lashing',            category: 'lashing',    difficulty_level: 3, program: 'expert',    description: 'Joins two poles with other ends apart as shear legs.' },
        { id: 94, name: 'Round Lashing',            category: 'lashing',    difficulty_level: 2, program: 'expert',    description: 'Securely binds two poles together to extend their length.' },
        { id: 95, name: 'Tripod Lashing',           category: 'lashing',    difficulty_level: 3, program: 'expert',    description: 'Joins three poles to one another for use as a tripod.' },
        { id: 96, name: 'Floor Lashing',            category: 'lashing',    difficulty_level: 3, program: 'expert',    description: 'Used to create a floor from multiple poles.' },
        { id: 97, name: 'Japanese Mark II Square Lashing', category: 'lashing', difficulty_level: 4, program: 'expert', description: 'An advanced square lashing for heavy-duty pioneering.' },
        { id: 98, name: 'Common Whipping',          category: 'seizing',    difficulty_level: 2, program: 'expert',    description: 'A classic, simple whipping to prevent rope ends from fraying.' },
        { id: 99, name: "Sailmaker's Whipping",     category: 'seizing',    difficulty_level: 3, program: 'expert',    description: 'A very secure whipping sewn through the rope strands.' },
        { id: 100, name: 'West Country Whipping',   category: 'seizing',    difficulty_level: 2, program: 'expert',    description: 'A simple whipping tied with alternating half knots.' },
        { id: 101, name: 'Eye Splice',              category: 'splice',     difficulty_level: 4, program: 'expert',    description: 'A permanent loop spliced into the end of a rope.' },
        { id: 102, name: 'Short Splice',            category: 'splice',     difficulty_level: 4, program: 'expert',    description: 'A permanent join between two ropes of the same diameter.' },
        { id: 103, name: 'Long Splice',             category: 'splice',     difficulty_level: 5, program: 'expert',    description: 'A join that maintains the rope\'s original diameter throughout.' },
        { id: 104, name: 'Back Splice',             category: 'splice',     difficulty_level: 3, program: 'expert',    description: 'A permanent stopper created by splicing the rope back on itself.' },
        { id: 105, name: "Turk's Head",             category: 'decorative', difficulty_level: 4, program: 'expert',    description: 'A decorative knot that forms a woven ring or bracelet.' },
        { id: 106, name: 'Carrick Mat',             category: 'decorative', difficulty_level: 4, program: 'expert',    description: 'A flat decorative mat made from a Carrick Bend pattern.' },
        { id: 107, name: 'Ocean Plait Mat',         category: 'decorative', difficulty_level: 4, program: 'expert',    description: 'A flat, woven decorative mat.' },
        { id: 108, name: 'Lanyard Knot',            category: 'decorative', difficulty_level: 3, program: 'expert',    description: 'A knot used to create a lanyard for tools and whistles.' },
        { id: 109, name: 'Diamond Knot',            category: 'decorative', difficulty_level: 4, program: 'expert',    description: 'A decorative knot used in lanyards and bracelets.' },
        { id: 110, name: 'Crown Sinnet',            category: 'decorative', difficulty_level: 4, program: 'expert',    description: 'A multi-strand braid using Crown Knots.' },
        { id: 111, name: 'Wall Sinnet',             category: 'decorative', difficulty_level: 4, program: 'expert',    description: 'A multi-strand braid using Wall Knots.' },
        { id: 112, name: 'Sheepshank',              category: 'utility',    difficulty_level: 2, program: 'expert',    description: 'Used to shorten a rope without cutting it (unreliable under load).' },
        { id: 113, name: "Cat's Paw",              category: 'hitch',      difficulty_level: 3, program: 'expert',    description: 'A hitch used to attach a rope to a hook.' },
        { id: 114, name: 'Draw Hitch',              category: 'hitch',      difficulty_level: 2, program: 'expert',    description: 'A quick-release hitch for temporary hitching.' },
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
