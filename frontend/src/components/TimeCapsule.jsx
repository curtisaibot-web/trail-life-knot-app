import React, { useState, useEffect } from 'react';

/**
 * TimeCapsule - Record Your First Attempt
 * 
 * When a scout first attempts a knot, the app records their time and photo.
 * Months later, when they've mastered it, the app shows a "Then vs. Now"
 * comparison, creating an emotional connection to their growth.
 */

const TimeCapsule = ({ userId }) => {
  const [capsules, setCapsules] = useState([]);
  const [selectedCapsule, setSelectedCapsule] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showUnlockAnimation, setShowUnlockAnimation] = useState(false);

  useEffect(() => {
    fetchTimeCapsules();
  }, [userId]);

  const fetchTimeCapsules = async () => {
    try {
      const response = await fetch(`/api/time-capsules/${userId}`);
      const data = await response.json();
      setCapsules(data.capsules || []);
    } catch (error) {
      console.error('Failed to fetch time capsules:', error);
      // Fallback demo data
      setCapsules(DEMO_CAPSULES);
    } finally {
      setLoading(false);
    }
  };

  const getTimeSince = (dateString) => {
    const then = new Date(dateString);
    const now = new Date();
    const days = Math.floor((now - then) / (1000 * 60 * 60 * 24));
    if (days < 7) return `${days} days ago`;
    if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
    if (days < 365) return `${Math.floor(days / 30)} months ago`;
    return `${Math.floor(days / 365)} years ago`;
  };

  const getImprovementPercent = (firstTime, bestTime) => {
    if (!firstTime || !bestTime) return 0;
    return Math.round(((firstTime - bestTime) / firstTime) * 100);
  };

  const handleUnlock = (capsule) => {
    setSelectedCapsule(capsule);
    setShowUnlockAnimation(true);
    setTimeout(() => setShowUnlockAnimation(false), 2000);
  };

  if (loading) {
    return (
      <div className="bg-parchment rounded-3xl p-6 shadow-md animate-pulse">
        <div className="h-6 bg-forest-pine/20 rounded w-48 mb-4"></div>
        <div className="h-32 bg-forest-pine/10 rounded-2xl"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-parchment">
      {/* Header */}
      <div className="bg-gradient-to-r from-forest-pine to-forest-pine/80 p-6">
        <h1 className="text-parchment font-bold text-2xl font-arvo">Time Capsule</h1>
        <p className="text-parchment/70 text-sm mt-1">
          See how far you've come. Every master was once a beginner.
        </p>
      </div>

      {/* Stats Summary */}
      <div className="p-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-xl p-3 text-center">
            <p className="text-campfire-orange font-bold text-2xl">
              {capsules.length}
            </p>
            <p className="text-charcoal/40 text-xs">Capsules</p>
          </div>
          <div className="bg-white rounded-xl p-3 text-center">
            <p className="text-forest-pine font-bold text-2xl">
              {capsules.filter((c) => c.status === 'mastered').length}
            </p>
            <p className="text-charcoal/40 text-xs">Mastered</p>
          </div>
          <div className="bg-white rounded-xl p-3 text-center">
            <p className="text-earthy-gold font-bold text-2xl">
              {capsules.filter((c) => c.status === 'unlocked').length}
            </p>
            <p className="text-charcoal/40 text-xs">Unlocked</p>
          </div>
        </div>
      </div>

      {/* Capsule List */}
      <div className="px-4 space-y-3 pb-24">
        {capsules.map((capsule) => {
          const improvement = getImprovementPercent(
            capsule.firstAttemptTime,
            capsule.bestTime
          );
          const isUnlockable = capsule.status === 'mastered' && !capsule.unlocked;

          return (
            <div
              key={capsule.id}
              className={`bg-white rounded-2xl overflow-hidden shadow-sm ${
                isUnlockable ? 'ring-2 ring-earthy-gold' : ''
              }`}
            >
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-charcoal text-lg">{capsule.knotName}</h3>
                    <p className="text-charcoal/40 text-xs">
                      First attempt: {getTimeSince(capsule.firstAttemptDate)}
                    </p>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      capsule.status === 'mastered'
                        ? 'bg-forest-pine/10 text-forest-pine'
                        : capsule.status === 'practicing'
                        ? 'bg-earthy-gold/10 text-earthy-gold'
                        : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    {capsule.status === 'mastered' ? 'Mastered' : 'In Progress'}
                  </div>
                </div>

                {/* Then vs Now Comparison */}
                {capsule.unlocked ? (
                  <div>
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      {/* THEN */}
                      <div className="bg-campfire-orange/5 rounded-xl p-3">
                        <p className="text-campfire-orange font-bold text-xs mb-2">THEN</p>
                        {capsule.firstAttemptPhoto && (
                          <img
                            src={capsule.firstAttemptPhoto}
                            alt="First attempt"
                            className="w-full h-24 object-cover rounded-lg mb-2"
                          />
                        )}
                        <p className="text-charcoal/60 text-sm">
                          Time: <span className="font-bold">{capsule.firstAttemptTime}s</span>
                        </p>
                        <p className="text-charcoal/60 text-sm">
                          Attempts: <span className="font-bold">{capsule.firstAttemptCount}</span>
                        </p>
                      </div>

                      {/* NOW */}
                      <div className="bg-forest-pine/5 rounded-xl p-3">
                        <p className="text-forest-pine font-bold text-xs mb-2">NOW</p>
                        {capsule.masteredPhoto && (
                          <img
                            src={capsule.masteredPhoto}
                            alt="Mastered attempt"
                            className="w-full h-24 object-cover rounded-lg mb-2"
                          />
                        )}
                        <p className="text-charcoal/60 text-sm">
                          Time: <span className="font-bold">{capsule.bestTime}s</span>
                        </p>
                        <p className="text-charcoal/60 text-sm">
                          Total: <span className="font-bold">{capsule.totalAttempts} practices</span>
                        </p>
                      </div>
                    </div>

                    {/* Improvement Bar */}
                    <div className="bg-forest-pine/5 rounded-xl p-3">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-charcoal/60 text-xs">Improvement</p>
                        <p className="text-forest-pine font-bold text-sm">{improvement}% faster</p>
                      </div>
                      <div className="bg-forest-pine/10 rounded-full h-3 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-campfire-orange to-forest-pine h-full rounded-full transition-all duration-1000"
                          style={{ width: `${improvement}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ) : isUnlockable ? (
                  <button
                    onClick={() => handleUnlock(capsule)}
                    className="w-full bg-gradient-to-r from-earthy-gold to-campfire-orange text-white font-bold py-4 rounded-xl text-center hover:opacity-90 transition-opacity"
                  >
                    Unlock Your Time Capsule
                  </button>
                ) : (
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <p className="text-charcoal/30 text-sm">
                      Master this knot to unlock your Time Capsule
                    </p>
                    <div className="mt-2 bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-earthy-gold h-full rounded-full"
                        style={{
                          width: `${capsule.status === 'practicing' ? 50 : 10}%`,
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Unlock Animation Overlay */}
      {showUnlockAnimation && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
          <div className="text-center animate-bounce">
            <div className="text-8xl mb-4">🔓</div>
            <h2 className="text-white font-bold text-2xl font-arvo">
              Time Capsule Unlocked!
            </h2>
            <p className="text-white/70 mt-2">
              See how far you've come with the {selectedCapsule?.knotName}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

// Demo data for development
const DEMO_CAPSULES = [
  {
    id: 1,
    knotName: 'Bowline',
    knotSlug: 'bowline',
    firstAttemptDate: '2025-09-15',
    firstAttemptTime: 45,
    firstAttemptCount: 7,
    firstAttemptPhoto: null,
    bestTime: 12,
    totalAttempts: 84,
    masteredPhoto: null,
    status: 'mastered',
    unlocked: true,
  },
  {
    id: 2,
    knotName: 'Square Knot',
    knotSlug: 'square-knot',
    firstAttemptDate: '2025-10-01',
    firstAttemptTime: 30,
    firstAttemptCount: 3,
    firstAttemptPhoto: null,
    bestTime: 8,
    totalAttempts: 45,
    masteredPhoto: null,
    status: 'mastered',
    unlocked: false,
  },
  {
    id: 3,
    knotName: 'Taut-Line Hitch',
    knotSlug: 'taut-line-hitch',
    firstAttemptDate: '2025-11-10',
    firstAttemptTime: 60,
    firstAttemptCount: 12,
    firstAttemptPhoto: null,
    bestTime: null,
    totalAttempts: 20,
    masteredPhoto: null,
    status: 'practicing',
    unlocked: false,
  },
];

export default TimeCapsule;
