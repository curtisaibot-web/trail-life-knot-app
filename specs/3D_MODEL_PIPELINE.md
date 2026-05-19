# 3D Model Pipeline: Trail Knotz 114-Knot Curriculum

This document outlines the architecture and implementation plan for integrating 114 interactive 3D knot models into the Trail Knotz app.

## 1. The Challenge
We have 114 knots, but rendering 114 distinct 3D models natively in the browser via Three.js/React Three Fiber is too heavy for mobile devices and requires massive asset downloads. 

## 2. The Solution: Procedural Generation via Spline Curves
Instead of loading 114 `.gltf` or `.obj` files, we will use **Procedural Tube Geometry** in React Three Fiber. 
A knot is mathematically just a 3D spline (a path of X, Y, Z coordinates). We define the path, and Three.js extrudes a textured tube (rope) along that path.

### Advantages:
- **Zero Asset Size**: A knot is just an array of coordinates (JSON), weighing ~2KB instead of a 2MB 3D model.
- **Dynamic Textures**: We can swap rope textures (paracord, manila, nylon) instantly without changing the model.
- **Animation**: We can animate the drawing of the spline to show the knot tying itself step-by-step.

## 3. Data Structure
Each knot in `knotRegistry.js` will get a `model_id` that maps to a JSON file in a new `frontend/src/data/models/` directory.

Example `models/square_knot.json`:
```json
{
  "id": "square_knot",
  "splines": [
    {
      "color": "#ff5500",
      "texture": "paracord",
      "points": [
        [-10, 0, 0], [-5, 0, 0], [0, 5, 5], [5, 0, 0], [10, 0, 0]
      ]
    },
    {
      "color": "#0055ff",
      "texture": "paracord",
      "points": [
        [-10, 5, 0], [-5, 5, 0], [0, 0, -5], [5, 5, 0], [10, 5, 0]
      ]
    }
  ]
}
```

## 4. Implementation Steps

### Step 1: Add Three.js Dependencies
```bash
npm install three @react-three/fiber @react-three/drei
```

### Step 2: The `KnotViewer3D` Component
Create a reusable component that takes a `model_id` and renders the splines.

```jsx
import React, { useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Tube } from '@react-three/drei';
import * as THREE from 'three';

export function KnotViewer3D({ modelData }) {
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      {modelData.splines.map((spline, index) => {
        const curve = useMemo(() => {
          const vectors = spline.points.map(p => new THREE.Vector3(...p));
          return new THREE.CatmullRomCurve3(vectors);
        }, [spline]);

        return (
          <Tube key={index} args={[curve, 64, 0.5, 8, false]}>
            <meshStandardMaterial color={spline.color} roughness={0.8} />
          </Tube>
        );
      })}
      
      <OrbitControls enableZoom={true} autoRotate={true} />
    </Canvas>
  );
}
```

### Step 3: Acquiring the Coordinates (The Hard Part)
To get the X,Y,Z coordinates for 114 knots, we have two options:
1. **Mathematical Knots**: Many basic knots (trefoil, figure eight) have known parametric equations.
2. **Blender Export Script**: We build the knots in Blender using curves, then run a Python script to export the curve control points to JSON.

### Step 4: The Animation Pipeline (Phase 2)
By controlling the `drawRange` property of the Tube geometry, we can animate the rope tying itself from start to finish, syncing with the step-by-step slider in the UI.

## 5. Model ID Mapping (First 15 Knots)
Update `knotRegistry.js` to include these IDs:
- 1 (Square Knot): `model_id: "square_knot"`
- 2 (Bowline): `model_id: "bowline"`
- 3 (Clove Hitch): `model_id: "clove_hitch"`
- 4 (Two Half Hitches): `model_id: "two_half_hitches"`
- 5 (Taut-Line Hitch): `model_id: "taut_line_hitch"`
- 6 (Timber Hitch): `model_id: "timber_hitch"`
- 7 (Figure Eight): `model_id: "figure_eight"`
- 8 (Sheet Bend): `model_id: "sheet_bend"`
- 9 (Daisy Chain): `model_id: "daisy_chain"`
- 10 (Trucker's Hitch): `model_id: "truckers_hitch"`
- 11 (Prusik Knot): `model_id: "prusik_knot"`
- 12 (Alpine Butterfly): `model_id: "alpine_butterfly"`
- 13 (Overhand Knot): `model_id: "overhand_knot"`
- 14 (Reef Knot): `model_id: "reef_knot"`
- 15 (Cow Hitch): `model_id: "cow_hitch"`
*(Pattern continues for all 114 knots: lowercase, snake_case)*
