-- Trail Knotz Database Schema

-- Users Table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  rank VARCHAR(50) DEFAULT 'Navigator',
  total_xp INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Troops Table
CREATE TABLE troops (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  location VARCHAR(255),
  leader_id INTEGER REFERENCES users(id),
  total_xp INTEGER DEFAULT 0,
  member_count INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- User Troop Membership
CREATE TABLE user_troops (
  user_id INTEGER REFERENCES users(id),
  troop_id INTEGER REFERENCES troops(id),
  joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id, troop_id)
);

-- Knots Table
CREATE TABLE knots (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  difficulty VARCHAR(50),
  rank_requirement VARCHAR(50),
  xp_reward INTEGER,
  use_cases TEXT[],
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- User Knot Progress
CREATE TABLE user_knot_progress (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  knot_id INTEGER REFERENCES knots(id),
  completed BOOLEAN DEFAULT FALSE,
  attempts INTEGER DEFAULT 0,
  completed_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (user_id, knot_id)
);

-- Streaks Table
CREATE TABLE streaks (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  current_streak INTEGER DEFAULT 0,
  longest_streak INTEGER DEFAULT 0,
  last_activity_date DATE,
  freeze_count INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Badges Table
CREATE TABLE badges (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  icon_url VARCHAR(255),
  requirement_type VARCHAR(50),
  requirement_value INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- User Badges
CREATE TABLE user_badges (
  user_id INTEGER REFERENCES users(id),
  badge_id INTEGER REFERENCES badges(id),
  earned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id, badge_id)
);

-- Leaderboard View (for performance)
CREATE VIEW leaderboard_view AS
SELECT 
  u.id,
  u.username,
  u.rank,
  u.total_xp,
  s.current_streak,
  ROW_NUMBER() OVER (ORDER BY u.total_xp DESC) as rank
FROM users u
LEFT JOIN streaks s ON u.id = s.user_id
ORDER BY u.total_xp DESC;

-- Indexes for Performance
CREATE INDEX idx_users_rank ON users(rank);
CREATE INDEX idx_user_knot_progress_user ON user_knot_progress(user_id);
CREATE INDEX idx_user_knot_progress_knot ON user_knot_progress(knot_id);
CREATE INDEX idx_streaks_user ON streaks(user_id);
CREATE INDEX idx_user_troops_user ON user_troops(user_id);
CREATE INDEX idx_user_troops_troop ON user_troops(troop_id);
