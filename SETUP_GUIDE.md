# Trail Knotz - Setup & Development Guide

## Project Overview

Trail Knotz is a comprehensive knot-tying educational app for Trail Life USA Navigators and Adventurers. It combines 3D visualization, gamification, AR integration, and multi-language support to create an engaging learning experience.

---

## Technology Stack

| Component | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | React + Tailwind CSS | Web dashboard and admin panel |
| **Mobile App** | Unity + C# | 3D knot visualization and AR |
| **Backend** | Node.js + Express | REST API and business logic |
| **Database** | PostgreSQL | User data, knot progress, streaks |
| **Cache** | Redis | Real-time leaderboards and streaks |
| **AR Framework** | Unity AR Foundation | Cross-platform AR (ARKit/ARCore) |
| **Voice** | ElevenLabs API | Multi-language narration |

---

## Project Structure

```
trail-life-knot-app/
├── frontend/                    # React web dashboard
│   ├── src/
│   │   ├── components/         # React components
│   │   ├── App.jsx             # Main app component
│   │   └── index.jsx           # Entry point
│   ├── package.json
│   └── tailwind.config.js
├── backend/                     # Node.js API server
│   ├── server.js               # Express server setup
│   ├── routes/                 # API endpoints
│   ├── models/                 # Database schema
│   └── package.json
├── unity-3d/                    # Unity project files
│   ├── KnotVisualizer.cs       # Main 3D visualization
│   ├── ARKnotPlacement.cs      # AR integration
│   └── Assets/                 # 3D models, animations, prefabs
├── docs/                        # Documentation
│   ├── README.md
│   ├── TECHNICAL_ROADMAP.md
│   └── API_SCHEMA.md
└── PROJECT_STRUCTURE.md
```

---

## Installation & Setup

### Prerequisites

- **Node.js** (v16+)
- **npm** or **yarn**
- **PostgreSQL** (v12+)
- **Redis** (optional, for production)
- **Unity** (2021.3 LTS or later)
- **Git**

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

The frontend will run on `http://localhost:3000`.

### Backend Setup

```bash
cd backend
npm install

# Create .env file
echo "DATABASE_URL=postgresql://user:password@localhost:5432/trail_knotz" > .env
echo "REDIS_URL=redis://localhost:6379" >> .env
echo "JWT_SECRET=your_secret_key" >> .env

# Initialize database
psql -U postgres -d trail_knotz -f models/database.sql

# Start server
npm run dev
```

The backend will run on `http://localhost:5000`.

### Unity Setup

1. Open Unity Hub and create a new project (3D, URP)
2. Import AR Foundation from the Asset Store
3. Copy the C# scripts from `unity-3d/` into your `Assets/Scripts/` folder
4. Configure AR settings:
   - **iOS:** Enable ARKit in Player Settings
   - **Android:** Enable ARCore in Player Settings
5. Build and test on a physical device

---

## API Endpoints (Backend)

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Users
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user profile
- `GET /api/users/:id/knots` - Get user's knot progress

### Knots
- `GET /api/knots` - Get all knots
- `GET /api/knots/:id` - Get specific knot
- `POST /api/knots/:id/complete` - Mark knot as complete

### Streaks
- `GET /api/streaks/:userId` - Get user's streak info
- `POST /api/streaks/:userId/freeze` - Use a freeze token

### Leaderboard
- `GET /api/leaderboard/troops` - Get troop rankings
- `GET /api/leaderboard/individuals` - Get individual rankings

---

## Database Schema

Key tables:
- **users** - User accounts and profile data
- **troops** - Trail Life troop information
- **knots** - Knot definitions and metadata
- **user_knot_progress** - User's completion status for each knot
- **streaks** - Daily streak tracking
- **badges** - Achievement badges
- **user_badges** - User's earned badges

See `backend/models/database.sql` for full schema.

---

## Development Workflow

### Adding a New Knot

1. **Define the knot** in the database:
   ```sql
   INSERT INTO knots (name, description, difficulty, xp_reward)
   VALUES ('Clove Hitch', 'A versatile hitch...', 'Intermediate', 150);
   ```

2. **Create 3D model** in Blender:
   - Use Bézier curves for the rope
   - Export as `.fbx`
   - Import into Unity

3. **Animate the knot** using the `KnotVisualizer.cs` script

4. **Add to frontend** by updating the knot list in `Dashboard.jsx`

### Adding a New Feature

1. Create a feature branch: `git checkout -b feature/new-feature`
2. Implement the feature across frontend/backend/unity
3. Test thoroughly
4. Submit a pull request

---

## Environment Variables

Create a `.env` file in the backend directory:

```
DATABASE_URL=postgresql://user:password@localhost:5432/trail_knotz
REDIS_URL=redis://localhost:6379
JWT_SECRET=your_super_secret_key
ELEVENLABS_API_KEY=your_elevenlabs_key
NODE_ENV=development
PORT=5000
```

---

## Testing

### Frontend
```bash
cd frontend
npm test
```

### Backend
```bash
cd backend
npm test
```

---

## Deployment

### Frontend (Vercel)
```bash
npm run build
vercel deploy
```

### Backend (Heroku)
```bash
heroku create trail-knotz-api
git push heroku main
```

### Mobile (App Store & Google Play)
1. Build in Unity: `File > Build Settings > Build`
2. Follow platform-specific submission guidelines

---

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## Support & Contact

For questions or issues, please open a GitHub issue or contact the Trail Knotz team.

---

## License

Trail Knotz is developed for Trail Life USA. All rights reserved.
