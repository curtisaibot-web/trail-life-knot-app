# Asset Bridge & Extraction Workflow: From Knot IQ to Knot Mastery

This guide provides the technical steps to extract assets from the Knot IQ app and bridge them into your **Knot Mastery** prototype for rapid development.

## 1. The Extraction Toolkit
You will need a Windows or Mac environment to run these forensic tools:
*   **AssetStudio (GitHub):** The primary tool for exploring and exporting Unity assets.
*   **APKTool (for Android):** To decompress the `.apk` file.
*   **7-Zip:** To extract the contents of the `.ipa` (iOS) or `.apk` file.

## 2. Step-by-Step Extraction Workflow

### **Step A: Obtaining the Source Files**
1.  Obtain the `.apk` file for Knot IQ (e.g., via a backup tool on an Android device).
2.  Right-click the `.apk` and select **7-Zip > Extract to "KnotIQ/"**.

### **Step B: Locating the 3D Data**
1.  Navigate to `KnotIQ/assets/bin/Data/`.
2.  Look for files named `sharedassets0.assets`, `sharedassets1.assets`, etc. These contain the 3D meshes and textures.
3.  If the app uses "Manual Downloads," look in the `KnotIQ/assets/bin/Data/StreamingAssets/` folder for `.bundle` files.

### **Step C: Exporting with AssetStudio**
1.  Open **AssetStudio**.
2.  Go to **File > Load Folder** and select the `KnotIQ/` directory.
3.  Switch to the **Asset List** tab.
4.  Filter by **Type: Mesh** to find the rope models.
5.  Filter by **Type: Texture2D** to find the rope and UI textures.
6.  Select the desired assets and go to **Export > Selected Assets**.

## 3. The "Bridge" to Knot Mastery

Once you have the `.obj` or `.fbx` files, follow these steps to integrate them into your prototype:

### **1. Mesh Alignment**
*   Extracted meshes often have weird rotations. Import them into **Blender** first.
*   Ensure the "Standing End" of the rope is at the **(0,0,0)** coordinate.
*   Export as a clean `.fbx`.

### **2. Material Mapping**
*   Create a new **Standard Material** in Unity.
*   Assign the extracted `Albedo` and `Normal` maps to the material.
*   Apply this material to the extracted mesh.

### **3. Linking to the Logic**
*   Attach the `KnotVisualizer.cs` script (from your GitHub repo) to the imported mesh.
*   The script will now use the "Secret Sauce" logic to animate the extracted model.

## 4. Prototype Organization
Organize your project as follows to make the future "Skin Swap" easy:
*   `Assets/Prototype/Extracted/` - Store all Knot IQ assets here.
*   `Assets/KnotMastery/Original/` - This folder stays empty until you hire your artist.

**When you're ready to launch, you simply delete the `Extracted/` folder and update the references to point to `Original/`.**

---

**Author:** Manus AI
**Date:** May 1, 2026
