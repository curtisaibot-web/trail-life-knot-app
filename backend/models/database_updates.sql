-- ====================================================================
-- IMPROVEMENT #6: Enhance user_knot_progress Schema (Mastery Loop)
-- ====================================================================

-- Create ENUM type for mastery status
CREATE TYPE mastery_status AS ENUM ('New', 'Practicing', 'Mastered');

-- Alter existing table to support the Mastery Loop and Skill Decay
ALTER TABLE user_knot_progress
  DROP COLUMN completed,
  ADD COLUMN status mastery_status DEFAULT 'New',
  ADD COLUMN last_practiced TIMESTAMP,
  ADD COLUMN mastery_score INTEGER DEFAULT 0; -- 0-100 scale based on AI/Human verification

-- ====================================================================
-- IMPROVEMENT #7: Implement Verification Queue Logic
-- ====================================================================

-- Create ENUM for attempt verification status
CREATE TYPE verification_status AS ENUM ('Pending_AI', 'Pending_Human', 'Approved', 'Rejected');

-- Create the Attempts table to store user submissions
CREATE TABLE knot_attempts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  knot_id INTEGER REFERENCES knots(id),
  media_url VARCHAR(512) NOT NULL, -- S3 URL of the uploaded photo/video
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status verification_status DEFAULT 'Pending_AI',
  
  -- AI Pre-Analysis Fields
  ai_confidence_score FLOAT,
  ai_feedback_text TEXT,
  
  -- Human Review Fields
  reviewed_by INTEGER REFERENCES users(id), -- The Troop Leader who reviewed it
  reviewed_at TIMESTAMP,
  human_feedback_text TEXT
);

-- Index for the Troop Leader dashboard (finding pending attempts quickly)
CREATE INDEX idx_knot_attempts_status ON knot_attempts(status);

-- ====================================================================
-- IMPROVEMENT #10: Robust Authentication & Role Management (RBAC)
-- ====================================================================

-- Create ENUM for system roles
CREATE TYPE user_role AS ENUM ('Scout', 'Troop_Leader', 'Admin');

-- Add role to users table
ALTER TABLE users
  ADD COLUMN system_role user_role DEFAULT 'Scout';

-- Create a view for Troop Leaders to see pending verifications in their troop
CREATE VIEW pending_troop_verifications AS
SELECT 
  ka.id AS attempt_id,
  u.username AS scout_name,
  k.name AS knot_name,
  ka.media_url,
  ka.submitted_at,
  ka.ai_confidence_score,
  t.id AS troop_id
FROM knot_attempts ka
JOIN users u ON ka.user_id = u.id
JOIN knots k ON ka.knot_id = k.id
JOIN user_troops ut ON u.id = ut.user_id
JOIN troops t ON ut.troop_id = t.id
WHERE ka.status = 'Pending_Human';
