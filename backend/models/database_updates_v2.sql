-- ============================================================
-- DATABASE UPDATES V2: Buddy System + Field Report
-- Run after database_updates.sql
-- ============================================================

-- ============================================================
-- BUDDY SYSTEM TABLES
-- ============================================================

-- Buddy pair relationships (bidirectional)
CREATE TABLE IF NOT EXISTS buddy_pairs (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    buddy_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'paused', 'ended')),
    created_at TIMESTAMP DEFAULT NOW(),
    ended_at TIMESTAMP,
    UNIQUE(user_id, buddy_id)
);

-- Buddy requests
CREATE TABLE IF NOT EXISTS buddy_requests (
    id SERIAL PRIMARY KEY,
    from_user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    to_user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'declined', 'expired')),
    created_at TIMESTAMP DEFAULT NOW(),
    responded_at TIMESTAMP
);

-- Encouragement messages between buddies
CREATE TABLE IF NOT EXISTS buddy_encouragements (
    id SERIAL PRIMARY KEY,
    from_user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    to_user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Buddy bonus XP log (when both complete same knot within 24h)
CREATE TABLE IF NOT EXISTS buddy_bonuses (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    buddy_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    knot_id INTEGER NOT NULL REFERENCES knots(id),
    bonus_xp INTEGER DEFAULT 20,
    awarded_at TIMESTAMP DEFAULT NOW()
);

-- Indexes for buddy system
CREATE INDEX IF NOT EXISTS idx_buddy_pairs_user ON buddy_pairs(user_id, status);
CREATE INDEX IF NOT EXISTS idx_buddy_requests_to ON buddy_requests(to_user_id, status);
CREATE INDEX IF NOT EXISTS idx_buddy_encouragements_pair ON buddy_encouragements(from_user_id, to_user_id);

-- ============================================================
-- FIELD REPORT TABLES
-- ============================================================

-- Field report email settings per user
CREATE TABLE IF NOT EXISTS field_report_settings (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE UNIQUE,
    enabled BOOLEAN DEFAULT false,
    parent_email VARCHAR(255),
    parent_name VARCHAR(100),
    frequency VARCHAR(20) DEFAULT 'weekly' CHECK (frequency IN ('weekly', 'biweekly', 'monthly')),
    day_of_week VARCHAR(10) DEFAULT 'sunday',
    include_details BOOLEAN DEFAULT true,
    include_encouragement BOOLEAN DEFAULT true,
    include_photos BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Field report send history
CREATE TABLE IF NOT EXISTS field_report_history (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    recipient_email VARCHAR(255) NOT NULL,
    sent_at TIMESTAMP DEFAULT NOW(),
    message_id VARCHAR(255),
    opened BOOLEAN DEFAULT false,
    opened_at TIMESTAMP
);

-- Index for field report history
CREATE INDEX IF NOT EXISTS idx_field_report_history_user ON field_report_history(user_id);
CREATE INDEX IF NOT EXISTS idx_field_report_settings_schedule ON field_report_settings(enabled, day_of_week);

-- ============================================================
-- TRAIL TOKENS TABLES (supporting TrailTokens.jsx)
-- ============================================================

-- Trail token balances
CREATE TABLE IF NOT EXISTS trail_token_balances (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE UNIQUE,
    balance INTEGER DEFAULT 0,
    lifetime_earned INTEGER DEFAULT 0,
    lifetime_spent INTEGER DEFAULT 0,
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Trail token transactions
CREATE TABLE IF NOT EXISTS trail_token_transactions (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    amount INTEGER NOT NULL,
    transaction_type VARCHAR(20) CHECK (transaction_type IN ('earn', 'spend')),
    reason VARCHAR(255),
    reference_id VARCHAR(100),
    created_at TIMESTAMP DEFAULT NOW()
);

-- Owned shop items
CREATE TABLE IF NOT EXISTS trail_token_inventory (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    item_id VARCHAR(50) NOT NULL,
    purchased_at TIMESTAMP DEFAULT NOW(),
    active BOOLEAN DEFAULT false,
    UNIQUE(user_id, item_id)
);

-- Indexes for trail tokens
CREATE INDEX IF NOT EXISTS idx_trail_token_transactions_user ON trail_token_transactions(user_id);
CREATE INDEX IF NOT EXISTS idx_trail_token_inventory_user ON trail_token_inventory(user_id);

-- ============================================================
-- SCOUTS HONOR VERIFICATION TABLE
-- ============================================================

CREATE TABLE IF NOT EXISTS scouts_honor_verifications (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    knot_id INTEGER NOT NULL REFERENCES knots(id),
    checklist JSONB NOT NULL,
    photo_included BOOLEAN DEFAULT false,
    photo_url VARCHAR(500),
    verified_at TIMESTAMP DEFAULT NOW(),
    upgraded_to_gold BOOLEAN DEFAULT false,
    upgraded_by INTEGER REFERENCES users(id),
    upgraded_at TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_scouts_honor_user ON scouts_honor_verifications(user_id);
