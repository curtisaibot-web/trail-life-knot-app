# Trail Knotz: Full-Stack Technical Requirements & Master Roadmap

This document outlines the technical architecture, addictive mechanics, and a multi-phase development roadmap for the Trail Knotz app.

---

## 1. Technical Architecture (The "Stack")

To build a high-performance, cross-platform app with 3D/AR capabilities, the following stack is recommended:

### **Frontend (Mobile App)**
- **Framework:** **Unity** (Recommended for its superior 3D/AR engine and cross-platform deployment) or **Flutter** (if using a specialized 3D plugin like `flutter_gl`).
- **Styling:** For the web-based components (like the dashboard or admin portal), **Tailwind CSS** is the standard for rapid, responsive UI development.
- **AR Framework:** **Unity AR Foundation** (integrating ARKit and ARCore).

### **Backend & Data**
- **Server:** **Node.js** with **Express** or **FastAPI** (Python).
- **Database:** **PostgreSQL** (Relational data for users, troops, and scores) + **Redis** (for real-time leaderboards and streak tracking).
- **Authentication:** **Manus-Oauth** or **Firebase Auth** for secure, social-linked logins.
- **Storage:** **AWS S3** for hosting 3D assets and audio files (pre-recorded ElevenLabs clips).

### **AI & Specialized Integrations**
- **Voice:** **ElevenLabs API** for multi-language/accent narration.
- **Vision:** **TensorFlow Lite** or **CoreML** for on-device knot recognition (AI verification).
- **Automation:** **n8n** for backend workflows (e.g., sending badge notifications to Trail Guides).

---

## 2. The "Addictive" Engine: 10 High-Engagement Features

To hold attention and drive daily usage, Trail Knotz will incorporate these psychological triggers:

1.  **The "Daily Knot" Challenge:** A unique knot is featured each day. Completing it grants a 2x XP bonus.
2.  **Streak Protection (The "Token" Economy):** Users earn "Acorns" (tokens) for streaks. These can be spent on "Streak Freezes" or cosmetic rope skins.
3.  **Troop Missions:** Collaborative goals where an entire troop must tie 500 knots collectively to unlock a "Golden Trestle" badge.
4.  **Haptic Feedback "Clicks":** Subtle vibrations when a knot is tightened correctly, providing tactile satisfaction.
5.  **Interactive Progress Tree:** A visual forest that grows as the user masters knots. Navigators start with a sapling; Adventurers have a towering oak.
6.  **"Knot Duel" (Local Multiplayer):** Two Trailmen can use their phones to see who can identify or tie a knot faster in a head-to-head AR battle.
7.  **Hidden "Easter Egg" Knots:** Discovering rare knots in the AR world (e.g., finding a "Monkey's Fist" near a virtual river).
8.  **Patrol Leaderboards:** Smaller, more intimate leaderboards for specific patrols within a troop.
9.  **Voice-Guided "Zen" Mode:** A calm, ambient mode for practicing knots with nature sounds and slow-motion visuals.
10. **Digital Merit Sash:** A customizable profile page where earned badges are displayed in a high-quality, "old-school" aesthetic.

---

## 3. Master Project Roadmap (Inception to Launch)

| Phase | Milestone | Key Activities | Timeframe |
| :--- | :--- | :--- | :--- |
| **1. Inception** | **The Blueprint** | Finalize PRD, brand identity, and technical stack selection. | Weeks 1-2 |
| **2. Design** | **The Visual Soul** | Create the "woodsy" UI in Framer; prototype the "Trace Path" visual. | Weeks 3-5 |
| **3. Prototyping** | **The First Knot** | Build a functional MVP with 1 knot (Bowline) in Unity with AR. | Weeks 6-8 |
| **4. Development** | **The Core 6** | Animate all Navigator knots; implement the backend and streaks. | Weeks 9-14 |
| **5. Alpha Test** | **The Troop Trial** | Beta test with a local Trail Life troop; gather feedback on UI/UX. | Weeks 15-17 |
| **6. Production** | **The Full Forest** | Add Adventurer knots, voice narration, and AI recognition. | Weeks 18-22 |
| **7. Launch** | **The Trailhead** | Official release on App Store/Google Play; troop onboarding. | Week 24 |

---

## 4. Next Steps for Implementation

1.  **Technical Deep-Dive:** Finalize the choice between Unity and Flutter.
2.  **Asset Sourcing:** Begin the search for a 3D artist specialized in curve-based animation.
3.  **Stakeholder Pitch:** Use the "Curtis Pitch Translator" (if available) to prepare a presentation for Trail Life USA leadership.
