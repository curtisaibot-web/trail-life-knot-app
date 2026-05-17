import React, { useState, useEffect } from 'react';

/**
 * KnotOfTheWeek - Community Spotlight Feature
 * 
 * Each week, one Trailman's verified knot photo gets featured on the global
 * leaderboard as the "Knot of the Week." Troop Leaders nominate, and the
 * community votes.
 */

const KnotOfTheWeek = ({ userId, userRole }) => {
  const [spotlight, setSpotlight] = useState(null);
  const [nominations, setNominations] = useState([]);
  const [hasVoted, setHasVoted] = useState(false);
  const [voteCount, setVoteCount] = useState({});
  const [activeTab, setActiveTab] = useState('spotlight'); // 'spotlight' | 'nominate' | 'vote'
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCurrentSpotlight();
    fetchNominations();
  }, []);

  const fetchCurrentSpotlight = async () => {
    try {
      const response = await fetch('/api/knot-of-the-week/current');
      const data = await response.json();
      setSpotlight(data);
    } catch (error) {
      console.error('Failed to fetch spotlight:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchNominations = async () => {
    try {
      const response = await fetch('/api/knot-of-the-week/nominations');
      const data = await response.json();
      setNominations(data.nominations || []);
      setVoteCount(data.voteCounts || {});
      setHasVoted(data.userHasVoted || false);
    } catch (error) {
      console.error('Failed to fetch nominations:', error);
    }
  };

  const handleNominate = async (attemptId, reason) => {
    try {
      await fetch('/api/knot-of-the-week/nominate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ attemptId, reason, nominatedBy: userId }),
      });
      fetchNominations();
    } catch (error) {
      console.error('Failed to nominate:', error);
    }
  };

  const handleVote = async (nominationId) => {
    if (hasVoted) return;
    try {
      await fetch('/api/knot-of-the-week/vote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nominationId, voterId: userId }),
      });
      setHasVoted(true);
      fetchNominations();
    } catch (error) {
      console.error('Failed to vote:', error);
    }
  };

  // Calculate the current week number for display
  const getWeekLabel = () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 1);
    const weekNum = Math.ceil(((now - start) / 86400000 + start.getDay() + 1) / 7);
    return `Week ${weekNum}, ${now.getFullYear()}`;
  };

  if (loading) {
    return (
      <div className="bg-parchment rounded-3xl p-6 shadow-md animate-pulse">
        <div className="h-6 bg-forest-pine/20 rounded w-48 mb-4"></div>
        <div className="h-48 bg-forest-pine/10 rounded-2xl"></div>
      </div>
    );
  }

  return (
    <div className="bg-parchment rounded-3xl shadow-md overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-forest-pine to-forest-pine/80 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-parchment font-bold text-xl font-arvo">
              Knot of the Week
            </h2>
            <p className="text-parchment/70 text-sm">{getWeekLabel()}</p>
          </div>
          <div className="bg-campfire-orange rounded-full px-3 py-1">
            <span className="text-white text-xs font-bold">COMMUNITY</span>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b border-forest-pine/10">
        {['spotlight', 'nominate', 'vote'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 text-sm font-semibold capitalize transition-colors ${
              activeTab === tab
                ? 'text-forest-pine border-b-2 border-campfire-orange'
                : 'text-charcoal/50 hover:text-charcoal/70'
            }`}
          >
            {tab === 'spotlight' ? 'This Week' : tab}
          </button>
        ))}
      </div>

      {/* Spotlight Tab */}
      {activeTab === 'spotlight' && spotlight && (
        <div className="p-4">
          <div className="relative rounded-2xl overflow-hidden mb-4">
            <img
              src={spotlight.photoUrl}
              alt={`${spotlight.knotName} by ${spotlight.userName}`}
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white font-bold text-lg">{spotlight.knotName}</p>
              <p className="text-white/80 text-sm">by {spotlight.userName}</p>
            </div>
          </div>
          <div className="bg-forest-pine/5 rounded-xl p-3">
            <p className="text-charcoal/70 text-sm italic">
              "{spotlight.nominationReason}"
            </p>
            <p className="text-forest-pine font-semibold text-xs mt-2">
              — Nominated by {spotlight.nominatedByName}
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
              <span className="text-campfire-orange font-bold text-2xl">
                {spotlight.totalVotes}
              </span>
              <span className="text-charcoal/50 text-sm">community votes</span>
            </div>
            <div className="bg-earthy-gold/20 rounded-full px-3 py-1">
              <span className="text-earthy-gold font-bold text-sm">
                +50 XP Awarded
              </span>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'spotlight' && !spotlight && (
        <div className="p-8 text-center">
          <p className="text-charcoal/50 text-lg">No spotlight this week yet.</p>
          <p className="text-charcoal/30 text-sm mt-2">
            Nominate a Trailman's knot to get started!
          </p>
        </div>
      )}

      {/* Nominate Tab (Leaders Only) */}
      {activeTab === 'nominate' && (
        <div className="p-4">
          {userRole === 'leader' || userRole === 'admin' ? (
            <NominationForm onNominate={handleNominate} />
          ) : (
            <div className="text-center py-8">
              <p className="text-charcoal/50">
                Only Troop Leaders can nominate.
              </p>
              <p className="text-charcoal/30 text-sm mt-2">
                Ask your leader to spotlight your best knot!
              </p>
            </div>
          )}
        </div>
      )}

      {/* Vote Tab */}
      {activeTab === 'vote' && (
        <div className="p-4 space-y-3">
          {nominations.length === 0 ? (
            <p className="text-center text-charcoal/50 py-8">
              No nominations yet this week.
            </p>
          ) : (
            nominations.map((nom) => (
              <div
                key={nom.id}
                className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm"
              >
                <img
                  src={nom.photoUrl}
                  alt={nom.knotName}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <p className="font-semibold text-charcoal">{nom.userName}</p>
                  <p className="text-charcoal/50 text-sm">{nom.knotName}</p>
                </div>
                <div className="text-center">
                  <p className="text-campfire-orange font-bold">
                    {voteCount[nom.id] || 0}
                  </p>
                  <button
                    onClick={() => handleVote(nom.id)}
                    disabled={hasVoted}
                    className={`mt-1 px-3 py-1 rounded-full text-xs font-bold transition-all ${
                      hasVoted
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-campfire-orange text-white hover:bg-campfire-orange/80'
                    }`}
                  >
                    {hasVoted ? 'Voted' : 'Vote'}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

/**
 * NominationForm - Allows Troop Leaders to nominate a verified knot attempt
 */
const NominationForm = ({ onNominate }) => {
  const [attemptId, setAttemptId] = useState('');
  const [reason, setReason] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!attemptId || !reason) return;
    onNominate(attemptId, reason);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="text-4xl mb-2">🎉</div>
        <p className="text-forest-pine font-bold">Nomination Submitted!</p>
        <p className="text-charcoal/50 text-sm mt-1">
          The community will vote this week.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-charcoal font-semibold text-sm mb-1">
          Verified Attempt ID
        </label>
        <input
          type="text"
          value={attemptId}
          onChange={(e) => setAttemptId(e.target.value)}
          placeholder="Enter the attempt ID"
          className="w-full border border-forest-pine/20 rounded-xl px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-campfire-orange"
        />
      </div>
      <div>
        <label className="block text-charcoal font-semibold text-sm mb-1">
          Why this knot deserves the spotlight
        </label>
        <textarea
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="This knot was perfectly tied under pressure during a camping trip..."
          rows={3}
          className="w-full border border-forest-pine/20 rounded-xl px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-campfire-orange resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-forest-pine text-parchment font-bold py-3 rounded-full hover:bg-forest-pine/90 transition-colors"
      >
        Submit Nomination
      </button>
    </form>
  );
};

export default KnotOfTheWeek;
