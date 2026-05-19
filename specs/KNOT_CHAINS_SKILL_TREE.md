# Knot Chains: The 114-Knot Skill Tree

This document defines the prerequisites and unlock paths for the entire 114-knot curriculum in Trail Knotz.

## The Concept
"Knot Chains" gamifies the learning process. Instead of overwhelming a scout with 114 knots at once, knots are organized into logical progression trees. Learning a foundational knot unlocks the next, more complex knot in that family.

## Data Structure Update
To implement this, the `knotRegistry.js` needs a `prerequisites` array for each knot, containing the IDs of the knots that must be mastered first.

```javascript
{
  id: 66,
  name: "Double Sheet Bend",
  program: "Ranger",
  prerequisites: [8] // ID 8 is the standard Sheet Bend
}
```

## The 6 Major Knot Chains

### 1. The Bowline Chain (Loops)
The Bowline is the king of loops. Mastering it unlocks an entire family of rescue and mountaineering knots.
*   **Overhand Knot** (ID: 13) -> Unlocks ->
*   **Bowline** (ID: 2) -> Unlocks ->
    *   **Bowline on a Bight** (ID: 26) -> Unlocks -> **Spanish Bowline** (ID: 41)
    *   **Water Bowline** (ID: 28)
    *   **Yosemite Bowline** (ID: 42)
    *   **French Bowline** (ID: 27) -> Unlocks -> **Portuguese Bowline** (ID: 43)

### 2. The Figure Eight Chain (Stoppers & Climbing)
The Figure Eight is the foundation of rock climbing tie-ins and bulky stoppers.
*   **Figure Eight** (ID: 7) -> Unlocks ->
    *   **Figure Eight on a Bight** (ID: 30) -> Unlocks -> **Figure Eight Follow-Through** (ID: 44) -> Unlocks -> **Double Figure Eight** (ID: 45)
    *   **Stevedore Knot** (ID: 76)
    *   **Oysterman's Stopper** (ID: 80)

### 3. The Hitch Chain (Tension & Securing)
Hitches are for tying to objects. They progress from simple wraps to complex friction hitches.
*   **Half Hitch** (ID: 18) -> Unlocks ->
    *   **Two Half Hitches** (ID: 4) -> Unlocks -> **Taut-Line Hitch** (ID: 5) -> Unlocks -> **Farrimond Friction Hitch** (ID: 23)
    *   **Clove Hitch** (ID: 3) -> Unlocks -> **Constrictor Knot** (ID: 69) -> Unlocks -> **Boa Knot** (ID: 70)
    *   **Cow Hitch** (ID: 15) -> Unlocks -> **Prusik Knot** (ID: 11) -> Unlocks -> **Klemheist Knot** (ID: 25) & **Blake's Hitch** (ID: 24)

### 4. The Bend Chain (Joining Ropes)
Bends are for tying two ropes together. They progress based on the similarity of the ropes.
*   **Square Knot** (ID: 1) -> Unlocks -> **Surgeon's Knot** (ID: 68)
*   **Sheet Bend** (ID: 8) -> Unlocks ->
    *   **Double Sheet Bend** (ID: 66)
    *   **Carrick Bend** (ID: 47) -> Unlocks -> **Carrick Mat** (ID: 87) & **Diamond Knot** (ID: 85)
*   **Double Overhand Knot** (ID: 78) -> Unlocks -> **Double Fisherman's Knot** (ID: 48) -> Unlocks -> **Zeppelin Bend** (ID: 49)

### 5. The Pioneering Chain (Lashings)
Lashings are the ultimate test of a scout's ropework, used to build camp structures.
*   **Timber Hitch** (ID: 6) & **Clove Hitch** (ID: 3) -> Unlocks ->
    *   **Square Lashing** (ID: 92) -> Unlocks -> **Japanese Square Lashing** (ID: 98) & **Continuous Lashing** (ID: 97)
    *   **Diagonal Lashing** (ID: 93)
    *   **Round Lashing** (ID: 94) -> Unlocks -> **Shear Lashing** (ID: 95)
    *   **Tripod Lashing** (ID: 96)

### 6. The Splicing & Decorative Chain (Mastery)
The final tier of ropework involves unlaying the rope or weaving complex patterns.
*   **Crown Knot** (ID: 81) & **Wall Knot** (ID: 82) -> Unlocks ->
    *   **Wall and Crown** (ID: 83)
    *   **Crown Sinnet** (ID: 108)
    *   **Wall Sinnet** (ID: 109)
    *   **Back Splice** (ID: 105)
*   **Short Splice** (ID: 103) -> Unlocks -> **Eye Splice** (ID: 102) -> Unlocks -> **Long Splice** (ID: 104)

## Implementation in the UI
In the Lovable.dev app, the "Knot Chains" view will be a D3.js or React Flow directed acyclic graph (DAG). 
- Nodes are knots.
- Edges are the prerequisites.
- Locked knots are greyed out with a padlock icon.
- Unlocked but unmastered knots are pulsing blue.
- Mastered knots are solid green with a checkmark.
