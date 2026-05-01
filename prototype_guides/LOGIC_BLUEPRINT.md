# Prototype Logic Blueprint: The "Secret Sauce" of Knot Interaction

This document reverse-engineers the core interaction logic found in top-tier 3D knot apps like Knot IQ, providing a clean implementation guide for the **Knot Mastery** prototype.

## 1. The Scrubbing Slider Logic (Temporal-Spatial Mapping)

The "magic" of a great knot app is the feeling that the slider is physically pulling the rope. This is achieved through **Normalized Time Mapping**.

### **A. Implementation Logic (Pseudocode)**
```csharp
// The 'Secret Sauce': Mapping a 0.0-1.0 slider value to a spline animation
void UpdateKnotAnimation(float sliderValue) {
    // 1. Calculate the target 'time' in the animation sequence
    float targetTime = sliderValue * totalAnimationDuration;

    // 2. Sample the Spline/Path at that specific time
    // Instead of playing a video, we move the 'head' of the rope mesh
    Vector3 currentHeadPosition = knotSpline.GetPointAtTime(targetTime);

    // 3. Update the LineRenderer or Mesh Generation
    // We only render the portion of the rope from 0 to targetTime
    ropeRenderer.SetDrawRange(0, sliderValue);

    // 4. Update the 'Trace Path' (The glowing trail)
    // The trail opacity is a gradient: 1.0 at the head, 0.0 at the tail
    UpdateTracePathGradient(sliderValue);
}
```

### **B. Why it feels "Real":**
The app doesn't just play a clip; it **re-calculates the rope's geometry** in real-time based on the slider. This allows for the "infinite zoom" and "rotation while scrubbing" that users love.

---

## 2. The Left-Handed Mirroring System

Many apps fail by just "flipping the image." A true knot app must **mirror the coordinate system**.

### **A. The Mirroring Matrix**
To support left-handed users, the app applies a **Scale Matrix** of `(-1, 1, 1)` to the entire 3D Knot Container.

### **B. Implementation Logic**
```csharp
void ToggleLeftHanded(bool isLeft) {
    // We don't change the animation data; we change the VIEW of the data
    if (isLeft) {
        knotContainer.transform.localScale = new Vector3(-1, 1, 1);
        // Reverse the rotation inputs so 'Swipe Left' still feels natural
        inputController.invertX = true;
    } else {
        knotContainer.transform.localScale = new Vector3(1, 1, 1);
        inputController.invertX = false;
    }
}
```

---

## 3. The "Ghost Mode" Practice System

This is the key feature for the **Knot Mastery** redesign—moving from reference to practice.

### **A. Logic Flow**
1.  **Overlay:** Render two versions of the knot. 
    *   `TargetKnot`: Semi-transparent "Ghost" (Blue/White).
    *   `UserKnot`: The interactive rope the user is "pulling."
2.  **The Challenge:** The `TargetKnot` animation plays at a set speed (e.g., 1x). The user must move their slider to match the ghost's position.
3.  **The Accuracy Score:**
    ```csharp
    float delta = Math.Abs(userSliderValue - ghostSliderValue);
    if (delta < 0.05f) {
        // User is "On Track" - Earn XP
        GiveXP(10);
    }
    ```

---

## 4. Summary for Prototype Build
For the working model, focus on the **Normalized Time Mapping**. Once you can move a 3D line based on a slider value, you have 90% of the "feel" of the original app.

**Author:** Manus AI
**Date:** May 1, 2026
