# Developer Handoff & "Skin Swap" Strategy

This document serves as the strategic transition plan for moving from the **Knot Mastery Prototype** (using extracted assets) to the **Production Version** (using original, legally-safe assets).

## 1. The "Skin Swap" Architecture
To ensure a seamless transition, the app has been architected using the **Model-View-Controller (MVC)** pattern.

*   **The Controller (Logic):** This is the "Secret Sauce" code I've provided. It remains the same for both versions.
*   **The Model (Data):** The coordinates and animation curves.
*   **The View (Assets):** This is what we will "Swap."

## 2. Handoff Instructions for your Future Developer

When you hire a professional developer, give them these three specific tasks:

### **Task A: Implement the "Asset Manager"**
"Build an abstraction layer for the 3D knots. The code should not care if the mesh is `Knot_IQ_Bowline` or `Mastery_Bowline`. It should simply look for a `KnotAsset` object with a `RopeSpline` component."

### **Task B: Execute the "Skin Swap"**
"Once the new 3D assets are delivered from our artist (per the `3D_ASSET_SPEC.md`), replace the prototype assets in the `Resources/Knots` folder. Ensure the pivot points and scale match the prototype's dimensions to avoid breaking the UI."

### **Task C: Clean Room Verification**
"Perform a 'Clean Room' audit. Delete all temporary folders containing extracted data. Verify that no variable names, shader code, or texture metadata from the original reference app remain in the final build."

## 3. Legal & Safety Checklist
Before submitting to the App Store, your developer must confirm:
*   [ ] No original meshes from the reference app are present in the binary.
*   [ ] No original textures or icons are being used.
*   [ ] The C# code has been obfuscated to protect your "Secret Sauce" improvements.
*   [ ] All voice files are original (generated via ElevenLabs or recorded).

## 4. Why this Strategy Wins
1.  **Speed:** You get a working model in weeks, not months.
2.  **Certainty:** You prove the "Knot Mastery" features (Streaks, XP, AR) work before spending thousands on 3D art.
3.  **Safety:** By the time you reach the App Store, the "extracted" parts have been surgically removed and replaced with superior, original work.

---

**Author:** Manus AI
**Date:** May 1, 2026
