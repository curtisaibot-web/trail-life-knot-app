# Trail Knotz: AI Training Data Pipeline Blueprint

To achieve the 95%+ accuracy required for automated knot verification, we must build a robust computer vision model (e.g., YOLOv8 or a custom ResNet architecture). The biggest hurdle in training this model is acquiring a diverse, high-quality dataset of knots tied in various environments, lighting conditions, and rope types.

This document outlines the pipeline for collecting, cleaning, labeling, and training the AI model using the Trail Knotz app ecosystem itself.

## 1. The Data Collection Strategy (Crowdsourcing)

Instead of manually tying and photographing 10,000 knots in a lab, we will use the app's existing user base (the scouts) to generate the training data organically.

### Phase 1: "Leader-Verified" Data Harvesting
1. The scout submits a knot photo via the `VerificationPortal.jsx`.
2. The photo is routed to the Troop Leader for manual review (`AdminDashboard.jsx`).
3. If the Leader clicks **"Approve"**, the photo is tagged in the database as a **Verified Positive** example of that specific knot.
4. If the Leader clicks **"Reject"**, the photo is tagged as a **Verified Negative** (an anti-pattern or failed attempt).

### Phase 2: "Knot of the Week" High-Quality Harvesting
Photos nominated for the "Knot of the Week" are typically well-lit and clearly framed. These serve as our "Gold Standard" baseline images for the model.

## 2. Data Storage & Anonymization Pipeline

Privacy is critical, especially when dealing with youth organizations like Trail Life USA.

**The Ingestion Flow:**
1. **Upload:** Image is uploaded to an S3 bucket (or Supabase Storage) under a `raw_submissions/` folder.
2. **EXIF Stripping:** A serverless function (AWS Lambda / Supabase Edge Function) immediately strips all EXIF data (GPS location, device info) from the image.
3. **Face Blurring (Optional but recommended):** Run a lightweight Haar Cascade or MTCNN model to detect and blur any human faces in the background of the knot photo.
4. **Move to Staging:** The clean image is moved to the `training_staging/` bucket.

## 3. Data Labeling & Augmentation

Once we have a staging bucket full of anonymized, leader-verified images, we prepare them for the neural network.

### Bounding Box Annotation
For object detection models like YOLO, we need bounding boxes around the knot itself, ignoring the loose ends of the rope.
- **Initial:** Use a service like Roboflow or Scale AI to manually draw bounding boxes on the first 1,000 images.
- **Automated:** Train a "weak" model on those 1,000 images to auto-annotate the next 10,000. Human reviewers only need to correct the weak model's mistakes.

### Synthetic Augmentation
To make the model resilient to outdoor conditions, we artificially multiply our dataset using the following augmentations:
- **Lighting Shifts:** +/- 30% brightness (simulating campfire light vs. midday sun).
- **Rotation & Cropping:** Random rotations between -45 and +45 degrees.
- **Noise Injection:** Adding slight Gaussian noise to simulate low-light smartphone cameras.
- **Background Replacement:** (Advanced) Using segmentation to cut out the knot and place it on different backgrounds (grass, mud, picnic tables).

## 4. Model Training & Deployment Architecture

### The Model Choice
- **Primary Architecture:** YOLOv8 (You Only Look Once). It is highly optimized for edge devices and real-time inference, which is crucial if we eventually want to do AR-based live verification.
- **Classification Head:** The model must output both the **Bounding Box** (where is the knot?) and the **Class** (is it a Bowline, Square Knot, or Clove Hitch?).

### Training Loop
1. Export the augmented dataset from Roboflow to a GPU-enabled training environment (e.g., AWS SageMaker or Google Colab Pro).
2. Train the model over 100-200 epochs.
3. Evaluate against a holdout validation set (images the model has never seen).
4. Target Metric: **mAP (Mean Average Precision) > 0.90**.

### Deployment via Webhook
Once the model is trained, it is exported as an ONNX or TensorFlow Lite file and hosted on a dedicated inference server (e.g., an AWS EC2 instance running a FastAPI Python app).

**Integration with the Node.js Backend:**
1. Scout submits photo to `backend/routes/verification.js`.
2. Node.js backend forwards the image URL to the Python Inference Server.
3. Python server runs the YOLO model and returns JSON:
   ```json
   {
     "detected_knot": "Bowline",
     "confidence_score": 0.92,
     "bounding_box": [120, 45, 300, 250]
   }
   ```
4. Node.js backend receives the score. If `confidence_score > 0.85`, it auto-approves. Otherwise, it routes to the Troop Leader for human review.

## 5. The Feedback Loop (Continuous Learning)

The AI will never be perfect on day one. We must build a feedback loop:
1. If the AI auto-rejects a knot, but the scout appeals and the Troop Leader later approves it, the AI was wrong (False Negative).
2. This specific image is flagged and automatically added to the next month's training dataset with a higher weight to teach the model its mistake.
3. Retrain the model quarterly to continuously improve accuracy.
