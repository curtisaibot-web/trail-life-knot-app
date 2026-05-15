import React, { useState } from 'react';

const VerificationPortal = ({ knotName = 'Bowline', knotId = 1, userId = 1 }) => {
  const [stage, setStage] = useState('idle'); // idle | capturing | uploading | pending | result
  const [captureMode, setCaptureMode] = useState('photo'); // photo | video
  const [previewUrl, setPreviewUrl] = useState(null);
  const [aiResult, setAiResult] = useState(null);

  const handleFileCapture = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
      setStage('captured');
    }
  };

  const handleSubmit = async () => {
    setStage('uploading');
    // Simulate upload and AI analysis delay
    setTimeout(() => {
      setStage('pending');
      // Simulate AI result after 3 seconds
      setTimeout(() => {
        setAiResult({
          confidence: 0.87,
          status: 'Approved',
          feedback: 'Great work! The loop is correctly formed and the working end is properly secured. The tail length looks good.'
        });
        setStage('result');
      }, 3000);
    }, 1500);
  };

  const handleReset = () => {
    setStage('idle');
    setPreviewUrl(null);
    setAiResult(null);
  };

  return (
    <div className="bg-cream-white rounded-card shadow-card p-6 space-y-5">
      <div className="text-center">
        <h3 className="text-2xl font-display text-forest-pine mb-1">Verify Your Knot</h3>
        <p className="text-sm font-body text-bark-gray">Prove you've mastered the <span className="font-bold text-campfire-orange">{knotName}</span></p>
      </div>

      {/* Stage: Idle */}
      {stage === 'idle' && (
        <div className="space-y-4">
          {/* Capture Mode Toggle */}
          <div className="flex bg-parchment rounded-button p-1">
            <button
              onClick={() => setCaptureMode('photo')}
              className={`flex-1 py-2 rounded-button text-sm font-body font-semibold transition-all ${captureMode === 'photo' ? 'bg-forest-pine text-cream-white shadow-button' : 'text-bark-gray'}`}
            >
              📸 Photo
            </button>
            <button
              onClick={() => setCaptureMode('video')}
              className={`flex-1 py-2 rounded-button text-sm font-body font-semibold transition-all ${captureMode === 'video' ? 'bg-forest-pine text-cream-white shadow-button' : 'text-bark-gray'}`}
            >
              🎥 Video
            </button>
          </div>

          {/* Instructions */}
          <div className="bg-parchment rounded-badge p-4 space-y-2">
            <p className="font-display text-forest-pine text-sm font-bold">📋 Tips for a good submission:</p>
            <ul className="text-xs font-body text-bark-gray space-y-1">
              <li>• Use good lighting — natural light works best</li>
              <li>• Hold the knot against a plain background</li>
              <li>• Show the full knot including both rope ends</li>
              {captureMode === 'video' && <li>• Slowly rotate the knot to show all sides (5-10 sec)</li>}
            </ul>
          </div>

          {/* Capture Button */}
          <label className="block">
            <input
              type="file"
              accept={captureMode === 'photo' ? 'image/*' : 'video/*'}
              capture="environment"
              onChange={handleFileCapture}
              className="hidden"
            />
            <div className="w-full bg-campfire-gradient text-cream-white font-display font-bold py-4 rounded-button shadow-button text-center cursor-pointer hover:opacity-90 transition-all">
              {captureMode === 'photo' ? '📸 Take Photo' : '🎥 Record Video'}
            </div>
          </label>

          <label className="block">
            <input type="file" accept={captureMode === 'photo' ? 'image/*' : 'video/*'} onChange={handleFileCapture} className="hidden" />
            <div className="w-full bg-parchment text-forest-pine font-body font-semibold py-3 rounded-button border-2 border-forest-pine text-center cursor-pointer hover:bg-forest-pine hover:text-cream-white transition-all text-sm">
              📁 Upload from Library
            </div>
          </label>
        </div>
      )}

      {/* Stage: Captured - Preview */}
      {stage === 'captured' && previewUrl && (
        <div className="space-y-4">
          <div className="rounded-card overflow-hidden bg-charcoal">
            {captureMode === 'photo'
              ? <img src={previewUrl} alt="Knot preview" className="w-full object-cover max-h-64" />
              : <video src={previewUrl} controls className="w-full max-h-64" />
            }
          </div>
          <div className="flex gap-3">
            <button onClick={handleReset} className="flex-1 bg-parchment text-forest-pine font-body font-semibold py-3 rounded-button border-2 border-forest-pine">
              Retake
            </button>
            <button onClick={handleSubmit} className="flex-1 bg-campfire-gradient text-cream-white font-display font-bold py-3 rounded-button shadow-button">
              Submit for Review
            </button>
          </div>
        </div>
      )}

      {/* Stage: Uploading */}
      {stage === 'uploading' && (
        <div className="text-center py-8 space-y-4">
          <div className="w-16 h-16 border-4 border-forest-pine border-t-campfire-orange rounded-full animate-spin mx-auto"></div>
          <p className="font-body text-bark-gray">Uploading your submission...</p>
        </div>
      )}

      {/* Stage: Pending AI Analysis */}
      {stage === 'pending' && (
        <div className="text-center py-8 space-y-4">
          <p className="text-5xl animate-streak-pulse">🤖</p>
          <p className="font-display text-forest-pine text-lg">AI Analysis in Progress</p>
          <p className="font-body text-bark-gray text-sm">Our AI is checking your knot. This usually takes a few seconds.</p>
          <div className="w-full bg-parchment rounded-full h-2 overflow-hidden">
            <div className="bg-campfire-gradient h-2 rounded-full animate-pulse" style={{ width: '70%' }}></div>
          </div>
        </div>
      )}

      {/* Stage: Result */}
      {stage === 'result' && aiResult && (
        <div className="space-y-4 animate-slide-up">
          <div className={`rounded-card p-5 text-center ${aiResult.status === 'Approved' ? 'bg-sage-green bg-opacity-20 border-2 border-sage-green' : 'bg-trail-red bg-opacity-10 border-2 border-trail-red'}`}>
            <p className="text-5xl mb-2">{aiResult.status === 'Approved' ? '✅' : '❌'}</p>
            <p className="font-display text-2xl text-forest-pine">{aiResult.status === 'Approved' ? 'Knot Verified!' : 'Not Quite Right'}</p>
            <p className="font-mono text-xs text-bark-gray mt-1">AI Confidence: {Math.round(aiResult.confidence * 100)}%</p>
          </div>
          <div className="bg-parchment rounded-badge p-4">
            <p className="font-display text-forest-pine text-sm font-bold mb-2">📝 Feedback</p>
            <p className="font-body text-charcoal text-sm">{aiResult.feedback}</p>
          </div>
          {aiResult.status === 'Approved' ? (
            <div className="text-center">
              <p className="font-body text-bark-gray text-xs mb-3">Your Troop Leader will be notified to confirm your mastery.</p>
              <button onClick={handleReset} className="bg-forest-pine text-cream-white font-display font-bold py-3 px-8 rounded-button shadow-button">
                🎉 Awesome!
              </button>
            </div>
          ) : (
            <button onClick={handleReset} className="w-full bg-campfire-gradient text-cream-white font-display font-bold py-3 rounded-button shadow-button">
              Try Again
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default VerificationPortal;
