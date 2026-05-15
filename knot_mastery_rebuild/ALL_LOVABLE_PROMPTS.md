# The Ultimate "Knot Mastery" Lovable Prompts

Use these precise prompts in Lovable.dev to implement the 15 code improvements without writing code manually.

## Frontend (React/Tailwind) Prompts

**1. The "Campy" Design System**
> "Update the global Tailwind configuration and design tokens to use the 'Campy' aesthetic. Set the primary background to 'Parchment' (#F9F7F2), primary buttons to 'Forest Pine' (#2D4A3E), and highlights to 'Campfire Orange' (#E87A5D). Ensure all cards use a 24px border radius and a subtle soft shadow."

**2. Dynamic Progress Tree**
> "Replace the static emoji tree on the Dashboard with a custom `<ProgressTree />` component. It should render a clean, vector-style SVG tree illustration. The tree's height and the number of leaves/badges should dynamically scale based on a `totalXp` prop passed to the component."

**3. Refine the KnotViewer Slider**
> "Redesign the HTML range slider in the KnotViewer component. It should look like a thick, rounded bar. Use the 'Forest Pine' color for the track and 'Campfire Orange' for the thumb handle. Add a secondary, semi-transparent track underneath it to represent 'Ghost Mode' (ideal pacing)."

**4. Implement Scenario-Based Routing**
> "Create a new `<ScenarioFinder />` component. It should have a large, friendly search bar (e.g., 'What do you need to do?'). Below it, add filter chips for categories like 'Camping', 'Sailing', and 'Climbing'. When a user selects a scenario, it should route them to the specific knot card that solves that problem."

**5. Offline-First Architecture (PWA)**
> "Configure the React application as a Progressive Web App (PWA). Add a Service Worker that caches the main application shell, the JSON instruction data, and the core SVG assets so the app remains functional when the user is offline."

## Backend (Database/Logic) Prompts

**6. Enhance the Progress Schema**
> "Update the database schema for user knot progress. Replace the simple 'completed' boolean with a 'mastery_status' ENUM containing 'New', 'Practicing', and 'Mastered'. Add a 'last_practiced' timestamp field to track skill decay."

**7. Implement the Verification Queue**
> "Create a new database table called 'knot_attempts' to store user submissions. It needs fields for user_id, knot_id, media_url (for the photo/video), and a 'status' ENUM ('Pending_AI', 'Pending_Human', 'Approved', 'Rejected')."

**8. Real-Time Leaderboard Updates**
> "Set up a WebSocket connection (e.g., Socket.io) on the Node.js backend. When a user earns XP or completes a knot, the server should broadcast an event to instantly update the Leaderboard component for all connected clients without requiring a page refresh."

**9. AI Pre-Analysis Webhook**
> "Create a new Express POST route at `/api/verification/webhook`. This endpoint should accept JSON data containing an 'attempt_id', an 'ai_confidence_score', and 'feedback_text'. It should update the corresponding record in the 'knot_attempts' table."

**10. Robust Authentication & RBAC**
> "Implement Role-Based Access Control (RBAC) in the backend. Add a 'system_role' ENUM to the users table ('Scout', 'Troop_Leader', 'Admin'). Create middleware that restricts access to the human verification queue API routes so only users with the 'Troop_Leader' role can approve attempts."

## Unity 3D & AR Prompts (If Lovable supports Unity integration, or for a Unity Developer)

**11. Spline-Based Animation**
> "Refactor the KnotVisualizer C# script to use a Catmull-Rom spline algorithm instead of linear interpolation between Vector3 points. Ensure the rope mesh deforms smoothly along the cubic polynomial curve."

**12. Dynamic Trace Path Generation**
> "Update the Trace Path logic in the KnotSplineEngine. Instead of static colors, dynamically calculate the trailing segment by rendering the spline from `max(0, currentProgress - trailLength)` to `currentProgress`, ensuring the glowing trail follows the active end."

**13. Optimize Asset Loading (Addressables)**
> "Configure the Unity project to use the Addressables system for all 3D knot models. The app should only download the specific `.fbx` file for a knot when the user selects it, rather than bundling all 185 knots in the initial app build."

**14. Enhance Left-Handed Mirroring**
> "Update the left-handed toggle logic in the C# engine. Apply a reflection matrix `(-x, y, z)` to all control points before evaluating the spline, ensuring the entire 3D mesh and animation path are perfectly mirrored across the YZ plane."

**15. AR Anchor Persistence**
> "Implement AR Foundation's ARAnchorManager. When a user places a knot on a physical surface, save the anchor's spatial data to local storage. When the app reopens, attempt to reload the anchor so the knot appears in the same physical location."
