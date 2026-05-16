# LOVABLE MASTER REBUILD PROMPT
## Trail Knotz / Knot Mastery — Complete App Assembly

> **Instructions:** Copy and paste this entire prompt into Lovable to assemble the complete Knot Mastery application with all 20+ features, the "Campy" aesthetic, and the full Mastery Loop.

---

## THE MASTER PROMPT

```
Build me a complete mobile-first web application called "Trail Knotz" — a gamified knot-tying mastery platform for Trail Life USA scouts (Navigators ages 11-13 and Adventurers ages 14-17).

## 1. GLOBAL DESIGN SYSTEM ("Campy Adventure Kit")

Apply these design tokens globally across every screen:

### Colors:
- Primary Background: #F9F7F2 (Parchment)
- Card Background: #FFFFFF (Cream White)
- Primary Action: #2D4A3E (Forest Pine)
- Accent/Highlights: #E87A5D (Campfire Orange)
- Text Primary: #1A1A1A (Charcoal)
- Text Secondary: #6B7280 (Bark Gray)
- Success: #22C55E (Trail Green)
- Warning: #F59E0B (Amber)
- Error: #C41E3A (Trail Red)

### Typography:
- Headings: Bold slab-serif font (Arvo or Rockwell), tracking tight
- Body: Clean sans-serif (Inter or system), leading relaxed
- Data/Labels: Monospace (Space Mono), uppercase, small

### Components:
- Cards: White, 24px border radius, subtle shadow (0 2px 8px rgba(0,0,0,0.06))
- Buttons: Pill-shaped (9999px radius), Forest Pine bg with white text for primary, Campfire Orange for CTAs
- Input Fields: Parchment bg, 12px radius, 1px transparent border that turns Forest Pine on focus
- Bottom Nav: White bg, 5 tabs with line icons, active tab shows Campfire Orange dot indicator

## 2. APP STRUCTURE & NAVIGATION

### Authentication Flow:
- Login/Register screen with "Campy" card styling
- Google and Apple social login buttons
- Email/password form with "Trail Name" field on signup
- Demo bypass mode for prototyping (any email/password works)

### Onboarding (First-Time Only):
- 5-step tutorial carousel:
  1. "Welcome to the Trail" — app overview
  2. "Choose Your Path" — Navigator or Adventurer program selection
  3. "Left or Right?" — handedness selection (affects all 3D animations)
  4. "Join Your Troop" — troop code entry
  5. "Your First Knot" — guided Square Knot tutorial

### Bottom Navigation (5 Tabs):
1. **Field Kit** (Dashboard) — Progress Tree, Streak Tracker, Daily Challenge, Quick Actions grid
2. **Skill Lab** — 3D Knot Viewer with scrubbing slider, voice narration, left-handed toggle
3. **Scenarios** — Scenario Finder search + Weather Scenario Engine
4. **Troop** — Real-time Leaderboard + Mission Board + Knot Duel access
5. **Settings** — Language, voice, notifications, display, accessibility, data management

## 3. CORE FEATURES (Build All)

### 3A. Dashboard (Field Kit Tab)
- **Streak Tracker**: 7-day mini calendar showing completed days. Current streak count with fire icon. "Streak Freeze" button that costs 50 acorns.
- **Daily Challenge**: Card showing today's knot challenge with timer, difficulty badge, and 50 bonus XP reward.
- **Progress Tree**: Dynamic SVG illustration of an oak tree. Tree grows from sapling (0 XP) to full oak (10,000 XP). Leaves appear at milestones. Small badge icons hang from branches.
- **Quick Actions Grid**: 2x2 grid of cards linking to Achievements, Journal, Campfire Stories, and Rope Calculator.

### 3B. Skill Lab Tab
- **Knot Slider**: Full-width scrubbing slider (0% to 100%) that controls the knot-tying animation progress. Shows step labels at key positions. "Trace Path" toggle that leaves a glowing trail behind the rope's path.
- **Left-Handed Mode**: Toggle that mirrors the entire viewport horizontally.
- **Color Mode Selector**: Dropdown to switch between "Natural Rope," "High Contrast" (red/blue dual color), and "X-Ray" (transparent with skeleton path).
- **Voice Narration**: Play/pause button with language selector (English, Spanish, French, Chinese, German) and accent selector (American, British, Scottish, Indian).
- **Action Buttons**: "Compare Knots" and "Verify My Knot" at the bottom.

### 3C. Scenario Finder Tab
- **Search Bar**: "What are you trying to do?" with Campy styling.
- **Filter Chips**: Camping, Sailing, Climbing, Fishing, Survival, Decorative.
- **Results**: Cards showing recommended knots with match percentage and difficulty.
- **Weather Engine**: Detects weather condition and recommends appropriate knots. Shows weather icon and condition name.

### 3D. Troop Tab
- **Real-Time Leaderboard**: Shows top 10 troop members ranked by XP. Live update banner when someone earns XP. Toggle between "This Week," "This Month," and "All Time."
- **Troop Mission Board**: Active collaborative missions with progress bars. Mission types: Collective (everyone contributes), Cumulative (total adds up), Simultaneous (everyone at once).
- **Knot Duel**: 1v1 real-time competition. Countdown timer, side-by-side progress, winner announcement with confetti animation.

### 3E. Verification Portal
- Camera interface to photograph a real-world knot.
- "AI Scanning" animation (pulsing green circle).
- Result screen showing "Approved" (confetti + XP) or "Needs Review" (sent to Troop Leader queue).
- Troop Leader review queue in Admin Dashboard.

### 3F. Badge & Medal System
- Gold, Silver, Bronze medals per knot category.
- Animated unlock sequence when earned.
- Medal showcase on user profile.

### 3G. Knot Journal
- Personal practice log with date, knot practiced, mood selector (5 emojis), difficulty rating (1-5 stars), and free-text reflection notes.
- Practice duration timer.
- Filterable by date range and knot.

### 3H. Campfire Story Mode
- Narrative cards telling the history and origin of each knot.
- "Did You Know?" facts with vintage illustration style.
- Unlockable stories as user progresses.

### 3I. Rope Calculator
- Input: scenario type, load weight, rope diameter.
- Output: recommended rope length, safety factor, and knot suggestion.
- Visual diagram showing the calculation.

### 3J. Knot Comparison Tool
- Side-by-side view of any two knots.
- Comparison bars for: Strength, Speed to Tie, Ease of Untying, Reliability, Versatility.
- "Best For" tags showing recommended use cases.

### 3K. Achievement Wall
- 20 achievements across 5 categories: Mastery, Dedication, Social, Explorer, Special.
- Visual trophy showcase with locked/unlocked states.
- Progress indicators showing how close to next achievement.

### 3L. Parent Portal
- Read-only view of child's progress.
- Streak history, knots mastered, badges earned.
- Weekly summary email opt-in.

### 3M. Admin Dashboard (Troop Leaders Only)
- Verification review queue with approve/reject buttons.
- Troop member list with XP and progress overview.
- Mission creation and management.
- Analytics: most practiced knots, average completion time, troop engagement score.

### 3N. Accessibility Engine
- Screen reader support with ARIA labels.
- High contrast mode toggle.
- Reduced motion mode.
- Font size scaling (Small, Medium, Large, Extra Large).
- Keyboard navigation support.

### 3O. Push Notifications
- Streak reminder (daily at user's preferred time).
- Duel invitation alerts.
- Verification result notifications.
- New mission announcements.
- Achievement unlock celebrations.

## 4. DATABASE SCHEMA (Supabase/PostgreSQL)

Create these tables:
- **users**: id, email, display_name, role (scout/leader/parent), handedness, program (navigator/adventurer), troop_id, total_xp, created_at
- **troops**: id, name, code, leader_id, created_at
- **knots**: id, name, category, difficulty_level, program, description, steps_json, control_points_json
- **user_knot_progress**: user_id, knot_id, status (new/practicing/mastered), xp_earned, attempts, updated_at
- **user_streaks**: user_id, current_streak, longest_streak, last_activity_date, streak_freezes
- **knot_attempts**: id, user_id, knot_id, photo_url, ai_confidence, status (pending/approved/rejected), reviewer_id, reviewed_at
- **troop_missions**: id, troop_id, title, description, type, target_value, current_value, status, expires_at
- **badges**: id, name, category, tier (bronze/silver/gold), description, icon
- **user_badges**: user_id, badge_id, earned_at
- **journal_entries**: id, user_id, knot_id, mood, difficulty_rating, notes, practice_duration, created_at
- **achievements**: id, name, category, description, xp_required, icon
- **user_achievements**: user_id, achievement_id, unlocked_at

## 5. KNOT DATA (Seed These)

### Navigator Program (6 Core Knots):
1. Square Knot — Binding — Difficulty 1
2. Bowline — Loop — Difficulty 2
3. Clove Hitch — Hitch — Difficulty 2
4. Two Half Hitches — Hitch — Difficulty 1
5. Taut-Line Hitch — Hitch — Difficulty 3
6. Timber Hitch — Hitch — Difficulty 1

### Adventurer Program (6 Advanced Knots):
7. Figure Eight — Stopper — Difficulty 1
8. Sheet Bend — Bend — Difficulty 2
9. Daisy Chain — Decorative — Difficulty 2
10. Trucker's Hitch — Hitch — Difficulty 4
11. Prusik Knot — Friction — Difficulty 4
12. Alpine Butterfly — Loop — Difficulty 3

## 6. VIBE CHECK

The app should feel like opening a premium piece of outdoor gear. It should be warm, inviting, and professional — never childish, never corporate. Think "Patagonia meets Duolingo." Every interaction should feel rewarding. Every screen should make the user want to tie one more knot.
```

---

## FOLLOW-UP REFINEMENT PROMPTS

After the Master Prompt builds the initial app, use these to polish:

### Polish Prompt 1: Animation & Micro-interactions
```
Add smooth page transitions between all screens (slide-in from right for forward navigation, slide-out to right for back). Add a subtle "bounce" animation when XP is earned. Add a confetti burst animation when a badge is unlocked. Add a gentle pulse animation on the Daily Challenge card to draw attention.
```

### Polish Prompt 2: The "Trace Path" Visual
```
In the Skill Lab's Knot Slider, when the user enables "Trace Path" mode, the rope should leave a glowing gradient trail behind it as it moves through the knot. The trail should fade from Campfire Orange at the leading edge to transparent at the tail. The trail should persist even when the slider is paused, showing the complete path the rope has taken so far.
```

### Polish Prompt 3: Haptic & Sound
```
Add haptic feedback (navigator.vibrate) on mobile devices for: button presses (10ms), correct knot verification (pattern: 50, 50, 100), badge unlock (pattern: 100, 50, 100, 50, 200), and streak milestone (long 300ms). Add a subtle "click" sound effect for button presses and a "whoosh" for page transitions. All sounds should be toggleable in Settings.
```

### Polish Prompt 4: Offline Mode
```
Implement a service worker that caches all static assets, the knot registry data, and the user's progress data for offline use. When offline, show a subtle "Offline Mode" banner at the top of the screen. Queue any actions (journal entries, streak check-ins) and sync them when connectivity returns. The Skill Lab should work fully offline with cached 3D data.
```
