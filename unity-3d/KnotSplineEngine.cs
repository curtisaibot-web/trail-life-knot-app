using UnityEngine;
using System.Collections.Generic;

namespace TrailKnotz.Engine
{
    /// <summary>
    /// Advanced Catmull-Rom Spline Engine for Knot Mastery
    /// Handles mathematical formulation, left-handed mirroring, and Trace Path logic.
    /// </summary>
    [RequireComponent(typeof(LineRenderer))]
    public class KnotSplineEngine : MonoBehaviour
    {
        [Header("Spline Configuration")]
        [SerializeField] private List<Vector3> controlPoints = new List<Vector3>();
        [SerializeField] [Range(0.01f, 0.5f)] private float resolution = 0.05f;
        [SerializeField] private bool isLooping = false;
        [SerializeField] private bool isLeftHanded = false;

        [Header("Trace Path Settings")]
        [SerializeField] private LineRenderer tracePathRenderer;
        [SerializeField] private Color traceColor = new Color(0.91f, 0.48f, 0.36f, 0.8f); // Campfire Orange
        [SerializeField] [Range(0f, 100f)] private float currentProgress = 100f;
        [SerializeField] private float trailLength = 15f; // Percentage of total length

        private LineRenderer mainRopeRenderer;
        private List<Vector3> cachedSplinePoints = new List<Vector3>();

        private void Awake()
        {
            mainRopeRenderer = GetComponent<LineRenderer>();
            InitializeRenderers();
        }

        private void Start()
        {
            // Load Bowline as default if empty
            if (controlPoints.Count == 0)
            {
                LoadBowlineData();
            }
            RecalculateSpline();
        }

        private void Update()
        {
            UpdateTracePath();
        }

        /// <summary>
        /// Toggles left-handed mode and recalculates the entire spline.
        /// Applies the ML reflection matrix (-x, y, z) to all control points.
        /// </summary>
        public void SetLeftHandedMode(bool leftHanded)
        {
            if (isLeftHanded == leftHanded) return;
            
            isLeftHanded = leftHanded;
            
            // Apply reflection matrix
            for (int i = 0; i < controlPoints.Count; i++)
            {
                Vector3 p = controlPoints[i];
                controlPoints[i] = new Vector3(-p.x, p.y, p.z);
            }
            
            RecalculateSpline();
        }

        /// <summary>
        /// Sets the current progress of the knot tying animation (0-100).
        /// </summary>
        public void SetProgress(float progress)
        {
            currentProgress = Mathf.Clamp(progress, 0f, 100f);
        }

        private void InitializeRenderers()
        {
            mainRopeRenderer.useWorldSpace = false;
            
            if (tracePathRenderer != null)
            {
                tracePathRenderer.useWorldSpace = false;
                tracePathRenderer.startColor = traceColor;
                tracePathRenderer.endColor = new Color(traceColor.r, traceColor.g, traceColor.b, 0f);
            }
        }

        /// <summary>
        /// Recalculates the entire high-resolution spline mesh from the control points.
        /// </summary>
        private void RecalculateSpline()
        {
            cachedSplinePoints.Clear();

            if (controlPoints.Count < 4) return;

            int loops = Mathf.FloorToInt(1f / resolution);

            for (int i = 0; i < controlPoints.Count; i++)
            {
                if ((i == 0 || i == controlPoints.Count - 2 || i == controlPoints.Count - 1) && !isLooping)
                    continue;

                Vector3 p0 = controlPoints[ClampListPos(i - 1)];
                Vector3 p1 = controlPoints[i];
                Vector3 p2 = controlPoints[ClampListPos(i + 1)];
                Vector3 p3 = controlPoints[ClampListPos(i + 2)];

                for (int j = 1; j <= loops; j++)
                {
                    float t = j * resolution;
                    cachedSplinePoints.Add(GetCatmullRomPosition(t, p0, p1, p2, p3));
                }
            }

            // Update Main Rope
            mainRopeRenderer.positionCount = cachedSplinePoints.Count;
            mainRopeRenderer.SetPositions(cachedSplinePoints.ToArray());
        }

        /// <summary>
        /// Updates the Trace Path renderer based on the current progress slider.
        /// Creates the "glowing tail" effect.
        /// </summary>
        private void UpdateTracePath()
        {
            if (tracePathRenderer == null || cachedSplinePoints.Count == 0) return;

            int totalPoints = cachedSplinePoints.Count;
            int currentEndIndex = Mathf.FloorToInt((currentProgress / 100f) * (totalPoints - 1));
            
            // Calculate how many points the trail should cover
            int trailPointCount = Mathf.FloorToInt((trailLength / 100f) * totalPoints);
            int currentStartIndex = Mathf.Max(0, currentEndIndex - trailPointCount);

            // Hide main rope beyond progress
            mainRopeRenderer.positionCount = currentEndIndex + 1;

            // Render Trace Path
            int traceLength = currentEndIndex - currentStartIndex + 1;
            if (traceLength > 0)
            {
                tracePathRenderer.positionCount = traceLength;
                Vector3[] tracePoints = new Vector3[traceLength];
                
                // Copy points in reverse order so startColor (solid) is at the leading edge
                for (int i = 0; i < traceLength; i++)
                {
                    tracePoints[i] = cachedSplinePoints[currentEndIndex - i];
                }
                
                tracePathRenderer.SetPositions(tracePoints);
            }
            else
            {
                tracePathRenderer.positionCount = 0;
            }
        }

        /// <summary>
        /// Calculates the position on a Catmull-Rom spline given parameter t (0-1).
        /// </summary>
        private Vector3 GetCatmullRomPosition(float t, Vector3 p0, Vector3 p1, Vector3 p2, Vector3 p3)
        {
            Vector3 a = 2f * p1;
            Vector3 b = p2 - p0;
            Vector3 c = 2f * p0 - 5f * p1 + 4f * p2 - p3;
            Vector3 d = -p0 + 3f * p1 - 3f * p2 + p3;

            return 0.5f * (a + (b * t) + (c * t * t) + (d * t * t * t));
        }

        private int ClampListPos(int pos)
        {
            if (pos < 0) pos = controlPoints.Count - 1;
            if (pos > controlPoints.Count) pos = 1;
            else if (pos > controlPoints.Count - 1) pos = 0;
            return pos;
        }

        /// <summary>
        /// Loads the mathematical control points for the Bowline knot.
        /// </summary>
        private void LoadBowlineData()
        {
            controlPoints = new List<Vector3>
            {
                new Vector3(0.00f, -1.00f, 0.00f),
                new Vector3(0.00f, -0.50f, 0.00f),
                new Vector3(0.00f, 0.00f, 0.00f),
                new Vector3(0.20f, 0.20f, 0.20f),
                new Vector3(0.00f, 0.40f, 0.00f),
                new Vector3(-0.20f, 0.20f, -0.20f),
                new Vector3(0.00f, 0.00f, 0.00f),
                new Vector3(0.00f, -0.80f, 0.50f),
                new Vector3(0.00f, -0.10f, 0.10f),
                new Vector3(-0.10f, 0.50f, -0.10f),
                new Vector3(0.10f, 0.50f, 0.10f),
                new Vector3(0.00f, -0.10f, -0.10f),
                new Vector3(0.00f, -0.50f, 0.20f)
            };
        }
    }
}
