# Knot IQ - System Architecture Extraction

## SYSTEM_MAP

### 1. Screen List
*   **Launch/Splash Screen:** Brand identity and initial asset loading.
*   **Main Dashboard:** Category grid (Camping, Bushcraft, etc.) and "Recently Viewed" horizontal scroller.
*   **Knot Library/Search:** List view with search bar and filter chips (category, difficulty).
*   **3D Knot Viewer:** The core interactive screen with the 3D viewport and playback HUD.
*   **Knot Detail Panel:** Text-based content (Description, Pros/Cons, Use Cases).
*   **Custom Lists/Favorites:** User-generated collections of knots.
*   **Settings/Customization:** Left-handed toggle, rope color selection, and download manager.
*   **Video Tutorial Gallery:** Integrated web-view or native player for YouTube content.

### 2. Logic Engines
*   **3D Rendering Engine:** Likely Unity-based, handling real-time mesh deformation and spatial rotation.
*   **Animation Controller:** Maps the "Playthrough Slider" (0-100%) to specific frames or spline points of the knot animation.
*   **Search & Filter Engine:** Local database query logic for metadata (name, tags, difficulty).
*   **Asset Download Manager:** Handles the "Manual 3D Downloads" to manage device storage.
*   **User Preference Manager:** Persists settings like Left-Handed mode and favorite lists locally.

### 3. Data Models
*   **Knot Object:**
    *   `id`: Unique identifier
    *   `name`: String
    *   `category`: Enum/Array
    *   `difficulty`: Enum (Beginner, Intermediate, Advanced)
    *   `description`: Text
    *   `pros_cons`: Object/Array
    *   `use_cases`: Array
    *   `3d_asset_url`: String (path to local/remote bundle)
    *   `video_url`: String
*   **User Profile (Local):**
    *   `favorites`: Array of Knot IDs
    *   `recent_viewed`: Array of Knot IDs
    *   `settings`: { `left_handed`: Boolean, `rope_color`: String }
*   **Category Model:**
    *   `id`: Unique identifier
    *   `name`: String
    *   `icon`: Asset reference

### 4. User Flows
*   **Learning Flow:** Home → Category Select → Knot Select → 3D Interaction → Detail Review.
*   **Reference Flow:** Search → Knot Select → 3D Viewer (scrub to specific step).
*   **Customization Flow:** Settings → Toggle Left-Handed → Return to Viewer (mirrored view).
*   **Storage Flow:** Knot Detail → "Download 3D" → Progress Indicator → Offline Ready.
