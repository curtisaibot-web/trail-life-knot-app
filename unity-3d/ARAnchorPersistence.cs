using UnityEngine;
using UnityEngine.XR.ARFoundation;
using UnityEngine.XR.ARSubsystems;
using System.Collections.Generic;

namespace TrailKnotz.AR
{
    /// <summary>
    /// Handles placing 3D knots in AR and saving their physical location (anchors) 
    /// so they persist across app sessions.
    /// </summary>
    [RequireComponent(typeof(ARAnchorManager))]
    [RequireComponent(typeof(ARRaycastManager))]
    public class ARAnchorPersistence : MonoBehaviour
    {
        [SerializeField] private GameObject knotPrefab;
        private ARAnchorManager anchorManager;
        private ARRaycastManager raycastManager;
        
        private ARAnchor currentAnchor;
        private GameObject spawnedKnot;

        private const string ANCHOR_PREF_KEY = "TrailKnotz_SavedAnchorID";

        private void Awake()
        {
            anchorManager = GetComponent<ARAnchorManager>();
            raycastManager = GetComponent<ARRaycastManager>();
        }

        private void OnEnable()
        {
            anchorManager.anchorsChanged += OnAnchorsChanged;
        }

        private void OnDisable()
        {
            anchorManager.anchorsChanged -= OnAnchorsChanged;
        }

        private void Start()
        {
            // Attempt to load a previously saved anchor when the app starts
            LoadSavedAnchor();
        }

        private void Update()
        {
            // Handle user tap to place or move the knot
            if (Input.touchCount > 0)
            {
                Touch touch = Input.GetTouch(0);
                if (touch.phase == TouchPhase.Began)
                {
                    PlaceKnotAtTouch(touch.position);
                }
            }
        }

        /// <summary>
        /// Raycasts against physical planes and places the knot.
        /// </summary>
        private void PlaceKnotAtTouch(Vector2 touchPosition)
        {
            List<ARRaycastHit> hits = new List<ARRaycastHit>();
            if (raycastManager.Raycast(touchPosition, hits, TrackableType.PlaneWithinPolygon))
            {
                Pose hitPose = hits[0].pose;

                // Remove existing anchor if there is one
                if (currentAnchor != null)
                {
                    Destroy(currentAnchor.gameObject);
                }

                // Create a new anchor at the hit location
                currentAnchor = anchorManager.AddAnchor(hitPose);
                
                if (currentAnchor != null)
                {
                    // Attach the knot visualizer to the anchor
                    if (spawnedKnot == null)
                    {
                        spawnedKnot = Instantiate(knotPrefab, currentAnchor.transform);
                    }
                    else
                    {
                        spawnedKnot.transform.SetParent(currentAnchor.transform);
                        spawnedKnot.transform.localPosition = Vector3.zero;
                        spawnedKnot.transform.localRotation = Quaternion.identity;
                    }

                    // Save the anchor ID for future sessions
                    // Note: True persistence requires ARCore Cloud Anchors or ARKit Spatial Anchors.
                    // This is a local mock implementation for the prototype.
                    PlayerPrefs.SetString(ANCHOR_PREF_KEY, currentAnchor.trackableId.ToString());
                    PlayerPrefs.Save();
                }
            }
        }

        private void OnAnchorsChanged(ARAnchorsChangedEventArgs eventArgs)
        {
            // Handle anchor updates from the AR subsystem (e.g., if tracking improves)
            foreach (var updatedAnchor in eventArgs.updated)
            {
                if (currentAnchor != null && updatedAnchor.trackableId == currentAnchor.trackableId)
                {
                    // Anchor position was refined by the AR system
                }
            }
        }

        private void LoadSavedAnchor()
        {
            if (PlayerPrefs.HasKey(ANCHOR_PREF_KEY))
            {
                string savedId = PlayerPrefs.GetString(ANCHOR_PREF_KEY);
                Debug.Log($"Attempting to restore anchor: {savedId}");
                // In a production app, you would use XRAnchorStore (ARCore) or WorldMap (ARKit)
                // to deserialize and restore the anchor to the physical world.
            }
        }
    }
}
