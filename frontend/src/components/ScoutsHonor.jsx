import React, { useState } from 'react';

/**
 * ScoutsHonor - Self-Verification Mode
 * 
 * For troops without active digital leaders, allows scouts to self-verify
 * with a "Scout's Honor" pledge. The knot gets logged with a different
 * badge color (blue instead of gold) to distinguish from leader-verified.
 */

const ScoutsHonor = ({ userId, knotSlug, knotName, onVerified }) => {
  const [step, setStep] = useState('intro'); // 'intro' | 'checklist' | 'pledge' | 'confirmed'
  const [checklist, setChecklist] = useState({
    tiedCorrectly: false,
    testedLoad: false,
    matchesReference: false,
    canRetie: false,
  });
  const [pledgeSigned, setPledgeSigned] = useState(false);
  const [photoTaken, setPhotoTaken] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const allChecked = Object.values(checklist).every(Boolean);

  const handleChecklistToggle = (key) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubmit = async () => {
    if (!pledgeSigned || !allChecked) return;
    setSubmitting(true);

    try {
      const response = await fetch('/api/verification/scouts-honor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId,
          knotSlug,
          verificationType: 'scouts_honor',
          checklist,
          photoIncluded: photoTaken,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setStep('confirmed');
        if (onVerified) onVerified({ type: 'scouts_honor', knotSlug });
      }
    } catch (error) {
      console.error('Failed to submit Scout\'s Honor verification:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const CHECKLIST_ITEMS = [
    {
      key: 'tiedCorrectly',
      label: 'I tied this knot correctly',
      description: 'The knot matches the reference image in the Skill Lab.',
    },
    {
      key: 'testedLoad',
      label: 'I tested it under load',
      description: 'I pulled on both ends firmly and the knot held without slipping.',
    },
    {
      key: 'matchesReference',
      label: 'It matches the reference',
      description: 'I compared my knot to the 3D model and it looks correct from all angles.',
    },
    {
      key: 'canRetie',
      label: 'I can tie it again from memory',
      description: 'I untied the knot and successfully retied it without looking at instructions.',
    },
  ];

  return (
    <div className="bg-parchment rounded-3xl shadow-md overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-600 p-4">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 rounded-full p-2">
            <span className="text-2xl">🤝</span>
          </div>
          <div>
            <h2 className="text-white font-bold text-lg font-arvo">Scout's Honor</h2>
            <p className="text-white/70 text-sm">Self-Verification for {knotName}</p>
          </div>
        </div>
      </div>

      {/* Intro Step */}
      {step === 'intro' && (
        <div className="p-6">
          <div className="bg-blue-50 rounded-xl p-4 mb-4">
            <h3 className="text-blue-800 font-bold text-sm mb-2">How Scout's Honor Works</h3>
            <p className="text-blue-700/70 text-sm">
              When your Troop Leader isn't available to verify your knot in-app,
              you can use the Scout's Honor system. You'll complete a self-check
              and sign a pledge. Your knot will be logged with a{' '}
              <span className="font-bold text-blue-700">blue badge</span> instead
              of the standard gold, showing it was self-verified.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-white rounded-xl p-3 text-center">
              <div className="w-10 h-10 rounded-full bg-earthy-gold/20 mx-auto mb-2 flex items-center justify-center">
                <span className="text-earthy-gold font-bold text-sm">🥇</span>
              </div>
              <p className="text-charcoal/60 text-xs">Leader Verified</p>
              <p className="text-earthy-gold font-bold text-xs">Gold Badge</p>
            </div>
            <div className="bg-white rounded-xl p-3 text-center">
              <div className="w-10 h-10 rounded-full bg-blue-100 mx-auto mb-2 flex items-center justify-center">
                <span className="text-blue-600 font-bold text-sm">🤝</span>
              </div>
              <p className="text-charcoal/60 text-xs">Scout's Honor</p>
              <p className="text-blue-600 font-bold text-xs">Blue Badge</p>
            </div>
          </div>

          <p className="text-charcoal/40 text-xs text-center mb-4">
            A Troop Leader can upgrade your blue badge to gold at any time.
          </p>

          <button
            onClick={() => setStep('checklist')}
            className="w-full bg-blue-700 text-white font-bold py-3 rounded-full hover:bg-blue-600 transition-colors"
          >
            Begin Self-Verification
          </button>
        </div>
      )}

      {/* Checklist Step */}
      {step === 'checklist' && (
        <div className="p-6">
          <h3 className="font-bold text-charcoal mb-4">Verification Checklist</h3>
          <div className="space-y-3">
            {CHECKLIST_ITEMS.map((item) => (
              <button
                key={item.key}
                onClick={() => handleChecklistToggle(item.key)}
                className={`w-full flex items-start gap-3 p-3 rounded-xl text-left transition-all ${
                  checklist[item.key]
                    ? 'bg-blue-50 border-2 border-blue-300'
                    : 'bg-white border-2 border-transparent'
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    checklist[item.key]
                      ? 'bg-blue-600 text-white'
                      : 'border-2 border-gray-300'
                  }`}
                >
                  {checklist[item.key] && '✓'}
                </div>
                <div>
                  <p className="font-semibold text-charcoal text-sm">{item.label}</p>
                  <p className="text-charcoal/50 text-xs mt-0.5">{item.description}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Optional Photo */}
          <div className="mt-4 bg-white rounded-xl p-3">
            <button
              onClick={() => setPhotoTaken(!photoTaken)}
              className={`w-full flex items-center gap-3 ${
                photoTaken ? 'text-blue-600' : 'text-charcoal/40'
              }`}
            >
              <div
                className={`w-6 h-6 rounded-md flex items-center justify-center ${
                  photoTaken ? 'bg-blue-600 text-white' : 'border-2 border-gray-300'
                }`}
              >
                {photoTaken && '✓'}
              </div>
              <div className="text-left">
                <p className="font-semibold text-sm">Include a photo (optional)</p>
                <p className="text-xs opacity-60">
                  Helps your leader upgrade to gold faster
                </p>
              </div>
            </button>
          </div>

          <button
            onClick={() => allChecked && setStep('pledge')}
            disabled={!allChecked}
            className={`w-full mt-4 font-bold py-3 rounded-full transition-colors ${
              allChecked
                ? 'bg-blue-700 text-white hover:bg-blue-600'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {allChecked ? 'Proceed to Pledge' : `Complete all ${CHECKLIST_ITEMS.length} items`}
          </button>
        </div>
      )}

      {/* Pledge Step */}
      {step === 'pledge' && (
        <div className="p-6">
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-4">
            <h3 className="text-blue-800 font-bold text-center text-lg mb-4 font-arvo">
              The Scout's Honor Pledge
            </h3>
            <p className="text-blue-700/80 text-sm text-center leading-relaxed italic">
              "On my honor, I affirm that I have tied the{' '}
              <span className="font-bold not-italic">{knotName}</span> correctly,
              tested it under load, and can reproduce it from memory. I understand
              that this self-verification carries the weight of my word, and I
              take responsibility for the accuracy of this claim."
            </p>
          </div>

          <button
            onClick={() => {
              setPledgeSigned(true);
              handleSubmit();
            }}
            disabled={submitting}
            className={`w-full font-bold py-4 rounded-full transition-colors ${
              submitting
                ? 'bg-gray-300 text-gray-500'
                : 'bg-blue-700 text-white hover:bg-blue-600'
            }`}
          >
            {submitting ? 'Submitting...' : 'I Pledge My Honor'}
          </button>

          <button
            onClick={() => setStep('checklist')}
            className="w-full mt-2 text-charcoal/40 text-sm py-2"
          >
            Go Back
          </button>
        </div>
      )}

      {/* Confirmed Step */}
      {step === 'confirmed' && (
        <div className="p-6 text-center">
          <div className="w-20 h-20 rounded-full bg-blue-100 mx-auto mb-4 flex items-center justify-center">
            <span className="text-4xl">🤝</span>
          </div>
          <h3 className="font-bold text-charcoal text-xl font-arvo mb-2">
            Verified on Scout's Honor
          </h3>
          <p className="text-charcoal/50 text-sm mb-4">
            Your <span className="font-bold">{knotName}</span> has been logged with
            a <span className="text-blue-600 font-bold">Blue Badge</span>.
          </p>
          <div className="bg-blue-50 rounded-xl p-3 mb-4">
            <p className="text-blue-700/70 text-xs">
              Your Troop Leader can upgrade this to a Gold Badge at any time
              by reviewing your submission in the Admin Dashboard.
            </p>
          </div>
          <div className="bg-forest-pine/5 rounded-xl p-3">
            <p className="text-forest-pine font-bold text-sm">+15 XP Earned</p>
            <p className="text-charcoal/40 text-xs">
              (Leader-verified knots earn +25 XP)
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScoutsHonor;
