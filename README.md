# Trail Knotz (Knot Mastery) 🪢

A comprehensive knot-tying educational app designed specifically for Trail Life USA Navigators and Adventurers. The app teaches scouts how to tie knots using 3D animations, gamification, AR, multi-language voice narration, and a robust verification system.

## Project Overview

**Trail Knotz** (also known as Knot Mastery) is built around the "Mastery Loop" educational framework:
1. **Learn**: 3D visualizer, voice narration, AR placement, Knot of the Week.
2. **Practice**: Scenario finder, knot chains, weather scenarios, Knot Radio.
3. **Test**: Knot duels, daily challenges, AI verification, Scout's Honor.
4. **Master**: Badges, streaks, achievement wall, field reports.

This repository serves as the comprehensive codebase archive and reference architecture. The project is actively being assembled using Lovable.dev (via the separate `knot-mastery` repository) using the React/Tailwind components and backend structures defined here.

## Tech Stack

### Frontend
- **React** (v18+)
- **Tailwind CSS** (Campy UI Kit: Forest Pine, Parchment, Campfire Orange, Earthy Gold)
- **React Router DOM**
- **Vite / Create React App**

### Backend
- **Node.js & Express**
- **PostgreSQL** (pg pool)
- **Socket.io** (WebSockets for real-time leaderboards and Knot Duels)
- **Nodemailer & Node-cron** (for weekly Field Reports)

### Integrations & Advanced Features
- **Unity 3D / AR Foundation**: Catmull-Rom spline engine for rope rendering
- **ElevenLabs API**: Multi-language voice narration
- **Web-Push**: Push notifications

## Core Features (40+ Components)

### 1. Learning & Practice
- **Skill Lab (KnotSlider & KnotViewer)**: 3D rotatable knot animations with left-handed mode.
- **Rope Types Library**: Educational guide on different rope materials and their uses.
- **Knot Chains**: Learn how knots combine to form complex systems.
- **Voice Narration**: Step-by-step audio guides in multiple languages/accents.
- **Knot Radio**: Ambient background audio (campfire, rain, forest) for focused practice.

### 2. Gamification & Progression
- **Progress Tree**: Dynamic SVG tree that grows as the scout earns XP.
- **Streak Tracker**: Tracks consecutive days of practice with streak freezes.
- **Trail Tokens**: Virtual currency economy for cosmetic upgrades (no pay-to-win).
- **Achievement Wall & Badge System**: Visual representation of mastery.
- **Daily Challenge**: A new knot challenge every day for bonus XP.

### 3. Community & Multiplayer
- **Buddy System**: Paired learning where scouts track progress and earn shared bonuses.
- **Troop Leaderboard**: Real-time ranking within the scout's troop.
- **Troop Mission Board**: Collaborative goals set by the Troop Leader.
- **Knot Duel Arena**: Real-time competitive knot tying via WebSockets.
- **Knot of the Week**: Community spotlight on exceptional knot tying.

### 4. Verification & Reporting
- **Verification Portal**: Camera-based submission for AI or Leader review.
- **Scout's Honor**: Self-verification system (awards a Blue Badge instead of Gold).
- **Knot Fails**: Common mistakes gallery showing anti-patterns to accelerate learning.
- **Field Report**: Automated weekly email sent to parents summarizing progress.
- **Admin Dashboard**: Troop Leader portal for reviewing verifications.
- **Parent Portal**: View-only access for parents to monitor their scout.

## Setup Instructions

### Prerequisites
- Node.js (v18+)
- PostgreSQL (v14+)
- npm or yarn

### 1. Database Setup
```bash
# Create database
createdb trailknotz

# Run schema files
psql -d trailknotz -f backend/models/database.sql
psql -d trailknotz -f backend/models/database_updates.sql
psql -d trailknotz -f backend/models/database_updates_v2.sql
```

### 2. Backend Setup
```bash
cd backend
npm install
# Create a .env file based on environment variables below
npm run dev
```

**Backend Environment Variables (`backend/.env`):**
```env
PORT=5000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=trailknotz
DB_USER=your_user
DB_PASSWORD=your_password
JWT_SECRET=your_jwt_secret
FRONTEND_URL=http://localhost:3000
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=reports@knotmastery.app
SMTP_PASS=your_smtp_password
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm start
```

## Documentation & Specs

- `SCREEN_WALKTHROUGH.md`: Detailed user journey from splash screen to mastery.
- `LOVABLE_MASTER_REBUILD_PROMPT.md`: Master prompt for Lovable.dev generation.
- `specs/KNOT_TOPOLOGY_MATH.md`: Mathematical control point matrices for Unity 3D rendering.
- `specs/3D_ASSET_SPEC.md`: Requirements for 3D modeling the rope and textures.
- `specs/AI_TRAINING_PLAN.md`: Blueprint for the computer vision knot recognition model.

## Design System (Campy UI Kit)

The app uses a custom "Campy" design system to evoke an outdoor, adventurous feel:
- **Forest Pine** (`#2D4A3E`): Primary brand color, headers, primary buttons.
- **Parchment** (`#F9F7F2`): Main background color, paper-like texture.
- **Campfire Orange** (`#E87A5D`): Accents, active states, streaks, warnings.
- **Earthy Gold** (`#D4AF37`): Leader-verified badges, Trail Tokens, premium elements.
- **Charcoal** (`#2A2A2A`): Primary text color.

## License

Copyright © 2026 Trail Knotz. All rights reserved.
