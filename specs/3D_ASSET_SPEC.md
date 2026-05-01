# 3D Asset Specification: Knot Models for Trail Knotz

This document outlines the technical and artistic requirements for 3D knot models to be used in the Trail Knotz application. The goal is to provide artists with clear guidelines for creating assets that integrate seamlessly with the Unity engine and support the unique features of the app, such as the "Trace Path" animation, left-handed mirroring, and AR placement.

## 1. General Requirements

*   **File Format:** `.fbx` (preferred) or `.obj` with accompanying `.mtl` for basic material properties.
*   **Scale:** Models should be built to a realistic scale, assuming a rope diameter of approximately 0.5 to 1.0 inches (1.27 to 2.54 cm) for a typical Trail Life rope. The overall knot size should be proportional to this diameter.
*   **Origin:** The pivot point (origin) of each knot model should be at the base or a logical starting point of the knot, facilitating easy placement and rotation in Unity.
*   **Polycount:** Optimize for mobile performance. Aim for a low-to-medium polycount (e.g., 5,000-15,000 triangles per knot) while maintaining smooth curves. Use subdivision surfaces sparingly and only where necessary for visual fidelity.
*   **Naming Convention:** Use clear, descriptive names for meshes and materials (e.g., `KnotName_RopeMesh`, `KnotName_Material`).

## 2. Rope Geometry & Texture

*   **Procedural Generation (Preferred):** Artists should aim to create the rope geometry using **Bézier curves** or similar spline-based modeling techniques. This allows for smooth, editable paths and facilitates the "Trace Path" animation by providing a clear underlying curve for the rope to follow.
*   **UV Mapping:** Clean, non-overlapping UV maps are essential for applying seamless rope textures. A simple cylindrical or planar projection along the rope's length is often sufficient.
*   **Textures:**
    *   **PBR Workflow:** Use a Physically Based Rendering (PBR) workflow (Albedo, Normal, Roughness, Metallic/Specular, Ambient Occlusion maps).
    *   **Resolution:** Aim for 1024x1024 or 2048x2048 for rope textures, optimized for mobile.
    *   **Style:** Realistic rope texture, showing slight fraying or weave, but not overly distracting. The app will dynamically color the rope, so the base texture should be neutral.

## 3. Animation Requirements (for "Trace Path" and "Scrubbing")

This is the most critical aspect. Instead of pre-baked vertex animations, the animation should be driven by **curve data** or **control points** that Unity can interpret.

*   **Curve-Based Animation:** The ideal approach is to provide a sequence of Bézier curves or a series of control points that define the rope's path as it forms the knot. The `KnotVisualizer.cs` script will then dynamically generate the rope mesh along this path and animate its growth.
*   **Keyframes for Control Points:** If direct curve export is not feasible, provide keyframes for the transformation (position, rotation) of a series of "segments" or "control points" that make up the rope. The animation should progress from the start of the knot to its completion.
*   **Trace Path Integration:** The animation data must clearly define the "head" of the rope as it moves, allowing the `tracePathRenderer` in Unity to follow and draw the glowing trail.
*   **Left-Handed Mirroring:** The models should be designed symmetrically or with a clear axis of mirroring (e.g., along the Y-axis) to allow the Unity script to dynamically flip the animation for left-handed users without requiring separate assets.

## 4. Exploded View Support

*   **Clear Component Separation:** Ensure that the different loops and strands of the knot are distinct enough in the model to allow for a programmatic "exploded view" where parts can be slightly separated to reveal the underlying structure.
*   **No Intersecting Geometry:** Avoid self-intersecting geometry in the final tied state, as this can cause visual artifacts during the exploded view.

## 5. Deliverables

For each knot (e.g., Bowline, Square Knot, Clove Hitch):

*   **3D Model File:** `KnotName.fbx` (or `.obj` + `.mtl`)
*   **Texture Maps:** Albedo, Normal, Roughness, Metallic/Specular, AO (PNG or TGA format)
*   **Animation Data:** A clear description or export of the curve/control point data that defines the knot-tying animation sequence.
*   **Reference Images:** Screenshots of the knot at various stages of tying, including the final form.

## 6. Example Knot: Bowline

*(This section would include specific reference images and a detailed breakdown of the Bowline's curve data or control point animation sequence.)*

---

**Author:** Manus AI
**Date:** April 30, 2026
