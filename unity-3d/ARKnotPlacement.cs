using UnityEngine;
using UnityEngine.XR.ARFoundation;
using UnityEngine.XR.ARSubsystems;

/// <summary>
/// ARKnotPlacement - Handles AR visualization of knots in the real world
/// Allows users to place and interact with 3D knots on surfaces
/// </summary>
public class ARKnotPlacement : MonoBehaviour
{
    [SerializeField] private ARRaycastManager raycastManager;
    [SerializeField] private GameObject knotPrefab;
    [SerializeField] private float knotScale = 0.5f;

    private GameObject placedKnot;
    private bool isKnotPlaced = false;
    private static List<ARRaycastHit> hits = new List<ARRaycastHit>();

    private void Update()
    {
        // Handle touch input for AR placement
        if (Input.touchCount > 0)
        {
            Touch touch = Input.GetTouch(0);

            if (touch.phase == TouchPhase.Began)
            {
                HandleARPlacement(touch.position);
            }
        }
    }

    /// <summary>
    /// Handle AR placement of knot on detected surface
    /// </summary>
    private void HandleARPlacement(Vector2 touchPosition)
    {
        if (raycastManager.Raycast(touchPosition, hits, TrackableType.PlaneWithinPolygon))
        {
            Pose hitPose = hits[0].pose;

            if (!isKnotPlaced)
            {
                // Place new knot
                placedKnot = Instantiate(knotPrefab, hitPose.position, hitPose.rotation);
                placedKnot.transform.localScale = Vector3.one * knotScale;
                isKnotPlaced = true;
            }
            else
            {
                // Move existing knot
                placedKnot.transform.position = hitPose.position;
                placedKnot.transform.rotation = hitPose.rotation;
            }
        }
    }

    /// <summary>
    /// Rotate the placed knot with gesture
    /// </summary>
    public void RotatePlacedKnot(float angle)
    {
        if (isKnotPlaced && placedKnot != null)
        {
            placedKnot.transform.Rotate(0, angle, 0, Space.Self);
        }
    }

    /// <summary>
    /// Scale the placed knot
    /// </summary>
    public void ScalePlacedKnot(float scale)
    {
        if (isKnotPlaced && placedKnot != null)
        {
            placedKnot.transform.localScale = Vector3.one * scale;
        }
    }

    /// <summary>
    /// Remove the placed knot
    /// </summary>
    public void RemovePlacedKnot()
    {
        if (isKnotPlaced && placedKnot != null)
        {
            Destroy(placedKnot);
            isKnotPlaced = false;
        }
    }

    /// <summary>
    /// Capture screenshot of the AR knot
    /// </summary>
    public void CaptureARScreenshot(string filename)
    {
        ScreenCapture.CaptureScreenshot(filename);
    }
}
