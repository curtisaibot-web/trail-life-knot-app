# KNOT MASTERY - Lovable Build Output

## 1. PAGE STRUCTURE
*   **Index / Onboarding:** Welcome screen, rank selection (Navigator/Adventurer), and hand-preference setup.
*   **Dashboard:** Main hub featuring "The Progress Tree," current Streak, and "Next Knot to Master."
*   **Scenario Finder (Use-Case Engine):** Searchable list of real-world problems (e.g., "Camping," "Rescue") that filters knots.
*   **Knot Library:** Searchable grid/list of all knots with status indicators (New, Practicing, Mastered).
*   **Skill Lab (3D Viewer):** The core learning screen with 3D viewport, playback HUD, and "Ghost Mode" toggle.
*   **Drill Center:** Interface for timed practices and "Blackout" challenges.
*   **Verification Portal:** Camera interface for taking photos/videos of tied knots for AI/Leader review.
*   **Troop Leaderboard:** Social screen showing troop rankings and individual XP.
*   **Profile / Armory:** User stats, earned badges, and custom knot collections.

## 2. DATABASE SCHEMA (PostgreSQL / Supabase)

### Table: `knots`
*   `id`: uuid (PK)
*   `name`: text
*   `category`: text[]
*   `difficulty`: text (Beginner, Intermediate, Advanced)
*   `description`: text
*   `instructions`: jsonb (step-by-step text)
*   `use_cases`: text[]
*   `3d_model_url`: text
*   `xp_value`: int

### Table: `users`
*   `id`: uuid (PK)
*   `username`: text
*   `rank`: text (Beginner, Outdoorsman, etc.)
*   `total_xp`: int
*   `streak_count`: int
*   `hand_preference`: text (Left, Right)
*   `avatar_url`: text

### Table: `user_knot_progress`
*   `id`: uuid (PK)
*   `user_id`: uuid (FK)
*   `knot_id`: uuid (FK)
*   `status`: text (New, Practicing, Mastered)
*   `best_time`: float
*   `times_practiced`: int
*   `last_practiced`: timestamp

### Table: `attempts` (For Verification)
*   `id`: uuid (PK)
*   `user_id`: uuid (FK)
*   `knot_id`: uuid (FK)
*   `media_url`: text (Photo/Video of the knot)
*   `is_verified`: boolean
*   `verified_at`: timestamp

### Table: `challenges`
*   `id`: uuid (PK)
*   `title`: text
*   `description`: text
*   `required_knots`: uuid[]
*   `xp_reward`: int

## 3. CORE FEATURES & LOGIC

### **Knot Recommendation Engine**
*   **Logic:** Query `knots` table where `use_cases` contains user-selected keywords. Rank results by `difficulty` matching user's current `rank`.

### **Practice Tracker**
*   **Logic:** On "Start Practice," initialize a timer. On "Complete," update `user_knot_progress` (increment `times_practiced`, update `last_practiced`, and update `best_time` if new record is set).

### **Mastery Tracker**
*   **Logic:** A knot is marked "Mastered" only after `status` in `user_knot_progress` is updated via the `attempts` verification logic.

## 4. MVP vs V2 FEATURES

### **MVP (Build First)**
*   Core 3D Viewer (Web-based placeholder for Unity).
*   Knot Library with basic search/filter.
*   User Dashboard with Streak and XP.
*   Scenario Finder (Basic keywords).
*   Simple Practice Timer.

### **V2 (Future Updates)**
*   Full Unity 3D/AR Integration.
*   AI Camera Verification.
*   Real-time Troop Duels.
*   Multi-language Voice Narration (ElevenLabs).
*   The "Progress Tree" visual growth system.
