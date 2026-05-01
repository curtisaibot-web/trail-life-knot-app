using UnityEngine;
using System.Collections.Generic;

/// <summary>
/// KnotVisualizer - Main controller for 3D knot visualization and animation
/// Handles rope rendering, trace path animation, and user interactions
/// </summary>
public class KnotVisualizer : MonoBehaviour
{
    [SerializeField] private LineRenderer ropeLineRenderer;
    [SerializeField] private LineRenderer tracePathRenderer;
    [SerializeField] private float animationDuration = 5f;
    [SerializeField] private bool isLeftHanded = false;
    [SerializeField] private RopeColorMode ropeColorMode = RopeColorMode.SingleColor;

    private float currentAnimationTime = 0f;
    private bool isAnimationPlaying = false;
    private List<Vector3> ropeControlPoints = new List<Vector3>();
    private List<Vector3> tracePathPoints = new List<Vector3>();

    public enum RopeColorMode { SingleColor, DualColor, HighContrast }

    private void Start()
    {
        InitializeRope();
    }

    private void Update()
    {
        if (isAnimationPlaying)
        {
            UpdateAnimation();
        }
    }

    /// <summary>
    /// Initialize the rope mesh and control points
    /// </summary>
    private void InitializeRope()
    {
        // Load knot data from backend or local assets
        ropeControlPoints = GenerateKnotControlPoints("Bowline");
        
        // Set up line renderers
        ropeLineRenderer.positionCount = ropeControlPoints.Count;
        ropeLineRenderer.SetPositions(ropeControlPoints.ToArray());

        // Initialize trace path renderer
        tracePathRenderer.startColor = new Color(1f, 1f, 0f, 0.8f); // Yellow with transparency
        tracePathRenderer.endColor = new Color(1f, 1f, 0f, 0.2f);
        tracePathRenderer.startWidth = 0.05f;
        tracePathRenderer.endWidth = 0.02f;
    }

    /// <summary>
    /// Generate control points for a specific knot
    /// In production, this would load from a 3D asset or database
    /// </summary>
    private List<Vector3> GenerateKnotControlPoints(string knotName)
    {
        List<Vector3> points = new List<Vector3>();

        // Example: Bowline knot control points
        if (knotName == "Bowline")
        {
            points.Add(new Vector3(0, 0, 0));      // Start
            points.Add(new Vector3(1, 0, 0));      // First segment
            points.Add(new Vector3(1, 1, 0));      // Loop up
            points.Add(new Vector3(0, 1, 0));      // Loop back
            points.Add(new Vector3(-0.5f, 0.5f, 0)); // Wrap around
            points.Add(new Vector3(0, 0.5f, 0));   // Final tuck
            points.Add(new Vector3(0.5f, 0, 0));   // End
        }

        return points;
    }

    /// <summary>
    /// Update animation based on playback slider
    /// </summary>
    public void SetAnimationProgress(float progress)
    {
        // Progress is 0-1
        currentAnimationTime = progress * animationDuration;
        UpdateAnimation();
    }

    private void UpdateAnimation()
    {
        // Interpolate rope position based on current time
        List<Vector3> animatedPoints = InterpolateRopePoints(currentAnimationTime);
        ropeLineRenderer.SetPositions(animatedPoints.ToArray());

        // Update trace path
        UpdateTracePath(animatedPoints);

        // Apply left-handed mirroring if enabled
        if (isLeftHanded)
        {
            MirrorRopePoints(animatedPoints);
        }
    }

    /// <summary>
    /// Interpolate rope points based on animation time
    /// </summary>
    private List<Vector3> InterpolateRopePoints(float time)
    {
        List<Vector3> interpolatedPoints = new List<Vector3>();
        float t = time / animationDuration;

        foreach (Vector3 point in ropeControlPoints)
        {
            // Simple linear interpolation (in production, use Bezier curves)
            Vector3 interpolated = Vector3.Lerp(Vector3.zero, point, t);
            interpolatedPoints.Add(interpolated);
        }

        return interpolatedPoints;
    }

    /// <summary>
    /// Update the trace path visualization
    /// Leaves a glowing trail showing the rope's journey
    /// </summary>
    private void UpdateTracePath(List<Vector3> currentPoints)
    {
        tracePathPoints.AddRange(currentPoints);

        // Limit trace path length for performance
        if (tracePathPoints.Count > 500)
        {
            tracePathPoints.RemoveRange(0, 100);
        }

        tracePathRenderer.positionCount = tracePathPoints.Count;
        tracePathRenderer.SetPositions(tracePathPoints.ToArray());
    }

    /// <summary>
    /// Mirror rope points for left-handed mode
    /// </summary>
    private void MirrorRopePoints(List<Vector3> points)
    {
        for (int i = 0; i < points.Count; i++)
        {
            points[i] = new Vector3(-points[i].x, points[i].y, points[i].z);
        }
    }

    /// <summary>
    /// Apply rope color based on selected mode
    /// </summary>
    public void SetRopeColor(RopeColorMode mode)
    {
        ropeColorMode = mode;

        switch (mode)
        {
            case RopeColorMode.SingleColor:
                ropeLineRenderer.startColor = new Color(0.2f, 0.4f, 0.8f); // Blue
                ropeLineRenderer.endColor = new Color(0.2f, 0.4f, 0.8f);
                break;

            case RopeColorMode.DualColor:
                ropeLineRenderer.startColor = new Color(0.2f, 0.4f, 0.8f); // Blue
                ropeLineRenderer.endColor = new Color(0.8f, 0.2f, 0.2f);   // Red
                break;

            case RopeColorMode.HighContrast:
                ropeLineRenderer.startColor = new Color(0, 0, 0);          // Black
                ropeLineRenderer.endColor = new Color(1, 1, 1);            // White
                break;
        }
    }

    /// <summary>
    /// Play/Pause animation
    /// </summary>
    public void PlayAnimation()
    {
        isAnimationPlaying = true;
    }

    public void PauseAnimation()
    {
        isAnimationPlaying = false;
    }

    public void ResetAnimation()
    {
        currentAnimationTime = 0f;
        tracePathPoints.Clear();
        tracePathRenderer.positionCount = 0;
    }

    /// <summary>
    /// Handle rotation input (for 3D interaction)
    /// </summary>
    public void RotateKnot(float deltaX, float deltaY)
    {
        transform.Rotate(deltaY, deltaX, 0, Space.Self);
    }

    /// <summary>
    /// Handle zoom input
    /// </summary>
    public void ZoomKnot(float zoomDelta)
    {
        Camera.main.fieldOfView -= zoomDelta;
        Camera.main.fieldOfView = Mathf.Clamp(Camera.main.fieldOfView, 10f, 60f);
    }

    /// <summary>
    /// Toggle left-handed mode
    /// </summary>
    public void SetLeftHanded(bool leftHanded)
    {
        isLeftHanded = leftHanded;
    }
}
