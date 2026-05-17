import React, { useState, useEffect } from 'react';

/**
 * BuddySystem - Paired Learning
 * 
 * Two scouts partner as "Knot Buddies." They can see each other's progress,
 * send encouragement, and earn bonus XP when both complete the same knot
 * within 24 hours. Builds accountability and community.
 * 
 * Backend routes: /api/buddy-system/
 */

const BuddySystem = ({ userId, userName }) => {
  const [view, setView] = useState('main'); // 'main' | 'find' | 'requests' | 'buddy-detail'
  const [buddy, setBuddy] = useState(null);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searching, setSearching] = useState(false);
  const [sharedKnots, setSharedKnots] = useState([]);
  const [encouragements, setEncouragements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBuddyData();
  }, [userId]);

  const fetchBuddyData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/buddy-system/${userId}`);
      if (response.ok) {
        const data = await response.json();
        setBuddy(data.buddy);
        setPendingRequests(data.pendingRequests || []);
        setSharedKnots(data.sharedKnots || []);
        setEncouragements(data.encouragements || []);
      }
    } catch (error) {
      console.error('Failed to fetch buddy data:', error);
      // Fallback demo data
      setBuddy({
        id: 'buddy-123',
        name: 'Jake T.',
        avatar: '🤠',
        troopId: 'troop-42',
        troopName: 'Troop 42',
        streak: 12,
        xp: 1450,
        knotsMastered: 8,
        lastActive: '2026-05-17T10:30:00Z',
        joinedBuddyDate: '2026-04-20',
      });
      setSharedKnots([
        { knotSlug: 'bowline', knotName: 'Bowline', userCompleted: true, buddyCompleted: true, bonusEarned: true, completedWithin24h: true },
        { knotSlug: 'square-knot', knotName: 'Square Knot', userCompleted: true, buddyCompleted: true, bonusEarned: true, completedWithin24h: true },
        { knotSlug: 'clove-hitch', knotName: 'Clove Hitch', userCompleted: true, buddyCompleted: false, bonusEarned: false, completedWithin24h: false },
        { knotSlug: 'figure-eight', knotName: 'Figure Eight', userCompleted: false, buddyCompleted: true, bonusEarned: false, completedWithin24h: false },
        { knotSlug: 'taut-line', knotName: 'Taut-Line Hitch', userCompleted: false, buddyCompleted: false, bonusEarned: false, completedWithin24h: false },
      ]);
      setEncouragements([
        { id: 1, from: 'Jake T.', message: 'Great job on the Bowline! 🎉', timestamp: '2026-05-16T14:00:00Z' },
        { id: 2, from: 'You', message: 'You got this! Try the Clove Hitch next! 💪', timestamp: '2026-05-16T15:30:00Z' },
      ]);
      setPendingRequests([
        { id: 'req-1', fromName: 'Sarah M.', fromAvatar: '🏕️', troopName: 'Troop 17', timestamp: '2026-05-17T08:00:00Z' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    setSearching(true);
    try {
      const response = await fetch(`/api/buddy-system/search?q=${encodeURIComponent(searchQuery)}`);
      if (response.ok) {
        const data = await response.json();
        setSearchResults(data.results || []);
      }
    } catch (error) {
      // Demo search results
      setSearchResults([
        { id: 'user-456', name: 'Emma R.', avatar: '🌲', troopName: 'Troop 23', knotsMastered: 5, xp: 820 },
        { id: 'user-789', name: 'Liam K.', avatar: '🏔️', troopName: 'Troop 42', knotsMastered: 11, xp: 2100 },
      ]);
    } finally {
      setSearching(false);
    }
  };

  const handleSendRequest = async (targetUserId) => {
    try {
      await fetch('/api/buddy-system/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fromUserId: userId, toUserId: targetUserId }),
      });
      setSearchResults((prev) =>
        prev.map((r) => (r.id === targetUserId ? { ...r, requestSent: true } : r))
      );
    } catch (error) {
      console.error('Failed to send buddy request:', error);
    }
  };

  const handleRespondRequest = async (requestId, accept) => {
    try {
      await fetch(`/api/buddy-system/request/${requestId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ accept }),
      });
      setPendingRequests((prev) => prev.filter((r) => r.id !== requestId));
      if (accept) fetchBuddyData();
    } catch (error) {
      console.error('Failed to respond to buddy request:', error);
    }
  };

  const handleSendEncouragement = async (message) => {
    if (!buddy || !message.trim()) return;
    try {
      await fetch('/api/buddy-system/encourage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fromUserId: userId, toUserId: buddy.id, message }),
      });
      setEncouragements((prev) => [
        ...prev,
        { id: Date.now(), from: 'You', message, timestamp: new Date().toISOString() },
      ]);
    } catch (error) {
      console.error('Failed to send encouragement:', error);
    }
  };

  const QUICK_MESSAGES = [
    '🎉 Great job!',
    '💪 You got this!',
    '🔥 Keep the streak alive!',
    '🪢 Try the next knot!',
    '⭐ Almost there!',
    '🏆 Race you to Gold!',
  ];

  const getTimeSince = (dateStr) => {
    const diff = Date.now() - new Date(dateStr).getTime();
    const hours = Math.floor(diff / 3600000);
    if (hours < 1) return 'Just now';
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-parchment flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-4 border-forest-pine border-t-transparent rounded-full mx-auto mb-3"></div>
          <p className="text-charcoal/50 text-sm">Loading Buddy System...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-parchment">
      {/* Header */}
      <div className="bg-gradient-to-r from-forest-pine to-forest-pine/80 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-parchment font-bold text-2xl font-arvo">Buddy System</h1>
            <p className="text-parchment/70 text-sm mt-1">
              Learn together. Grow together.
            </p>
          </div>
          {pendingRequests.length > 0 && (
            <button
              onClick={() => setView('requests')}
              className="relative bg-parchment/20 rounded-full p-2"
            >
              <span className="text-xl">📬</span>
              <span className="absolute -top-1 -right-1 bg-campfire-orange text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {pendingRequests.length}
              </span>
            </button>
          )}
        </div>
      </div>

      {/* Main View - Has Buddy */}
      {view === 'main' && buddy && (
        <div className="p-4 space-y-4">
          {/* Buddy Card */}
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-forest-pine/10 flex items-center justify-center text-3xl">
                {buddy.avatar}
              </div>
              <div className="flex-1">
                <h2 className="font-bold text-charcoal text-lg">{buddy.name}</h2>
                <p className="text-charcoal/40 text-sm">{buddy.troopName}</p>
                <p className="text-charcoal/30 text-xs">
                  Buddies since {new Date(buddy.joinedBuddyDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </p>
              </div>
              <div className="text-right">
                <p className="text-forest-pine font-bold text-sm">{buddy.xp} XP</p>
                <p className="text-campfire-orange text-xs">🔥 {buddy.streak} day streak</p>
              </div>
            </div>

            {/* Buddy Stats */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-forest-pine/5 rounded-xl p-3 text-center">
                <p className="text-forest-pine font-bold text-lg">{buddy.knotsMastered}</p>
                <p className="text-charcoal/40 text-xs">Knots Mastered</p>
              </div>
              <div className="bg-campfire-orange/5 rounded-xl p-3 text-center">
                <p className="text-campfire-orange font-bold text-lg">{buddy.streak}</p>
                <p className="text-charcoal/40 text-xs">Day Streak</p>
              </div>
              <div className="bg-earthy-gold/5 rounded-xl p-3 text-center">
                <p className="text-earthy-gold font-bold text-lg">
                  {sharedKnots.filter((k) => k.bonusEarned).length}
                </p>
                <p className="text-charcoal/40 text-xs">Buddy Bonuses</p>
              </div>
            </div>
          </div>

          {/* Shared Knot Progress */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h3 className="font-bold text-charcoal mb-3">Shared Knot Progress</h3>
            <p className="text-charcoal/40 text-xs mb-3">
              Complete the same knot within 24 hours to earn a <span className="text-earthy-gold font-bold">+20 Buddy Bonus XP</span>!
            </p>
            <div className="space-y-2">
              {sharedKnots.map((knot) => (
                <div
                  key={knot.knotSlug}
                  className={`flex items-center gap-3 p-3 rounded-xl ${
                    knot.bonusEarned
                      ? 'bg-earthy-gold/5 border border-earthy-gold/20'
                      : 'bg-gray-50'
                  }`}
                >
                  <div className="flex-1">
                    <p className="font-semibold text-charcoal text-sm">{knot.knotName}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {/* User status */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${
                        knot.userCompleted
                          ? 'bg-forest-pine text-white'
                          : 'bg-gray-200 text-gray-400'
                      }`}
                    >
                      {knot.userCompleted ? '✓' : '—'}
                    </div>
                    {/* Connection line */}
                    <div className={`w-4 h-0.5 ${knot.bonusEarned ? 'bg-earthy-gold' : 'bg-gray-300'}`}></div>
                    {/* Buddy status */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${
                        knot.buddyCompleted
                          ? 'bg-forest-pine text-white'
                          : 'bg-gray-200 text-gray-400'
                      }`}
                    >
                      {knot.buddyCompleted ? '✓' : '—'}
                    </div>
                    {/* Bonus indicator */}
                    {knot.bonusEarned && (
                      <span className="text-earthy-gold text-xs font-bold ml-1">+20</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Encouragement Feed */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h3 className="font-bold text-charcoal mb-3">Encouragement</h3>
            <div className="space-y-2 mb-3 max-h-40 overflow-y-auto">
              {encouragements.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.from === 'You' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`px-3 py-2 rounded-2xl max-w-[80%] ${
                      msg.from === 'You'
                        ? 'bg-forest-pine text-parchment'
                        : 'bg-gray-100 text-charcoal'
                    }`}
                  >
                    <p className="text-sm">{msg.message}</p>
                    <p className={`text-xs mt-1 ${msg.from === 'You' ? 'text-parchment/50' : 'text-charcoal/30'}`}>
                      {getTimeSince(msg.timestamp)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Messages */}
            <div className="flex flex-wrap gap-2">
              {QUICK_MESSAGES.map((msg, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendEncouragement(msg)}
                  className="bg-forest-pine/5 text-forest-pine px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-forest-pine/10 transition-colors"
                >
                  {msg}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main View - No Buddy */}
      {view === 'main' && !buddy && (
        <div className="p-4">
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <div className="w-20 h-20 rounded-full bg-forest-pine/10 mx-auto mb-4 flex items-center justify-center">
              <span className="text-4xl">🤝</span>
            </div>
            <h2 className="font-bold text-charcoal text-xl font-arvo mb-2">
              Find a Knot Buddy
            </h2>
            <p className="text-charcoal/50 text-sm mb-6">
              Partner with another scout to learn together. You'll see each
              other's progress, send encouragement, and earn bonus XP when
              you both master the same knot within 24 hours!
            </p>

            <div className="bg-forest-pine/5 rounded-xl p-4 mb-6 text-left">
              <h3 className="font-bold text-forest-pine text-sm mb-2">Buddy Benefits</h3>
              <ul className="space-y-2 text-charcoal/60 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-earthy-gold">⭐</span>
                  +20 Bonus XP when both complete a knot within 24h
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-earthy-gold">⭐</span>
                  See each other's progress in real-time
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-earthy-gold">⭐</span>
                  Send encouragement messages
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-earthy-gold">⭐</span>
                  +20 Trail Tokens when your buddy masters a knot
                </li>
              </ul>
            </div>

            <button
              onClick={() => setView('find')}
              className="w-full bg-forest-pine text-parchment font-bold py-3 rounded-full hover:bg-forest-pine/90 transition-colors"
            >
              Find a Buddy
            </button>
          </div>
        </div>
      )}

      {/* Find Buddy View */}
      {view === 'find' && (
        <div className="p-4 space-y-4">
          <button
            onClick={() => setView('main')}
            className="text-forest-pine text-sm font-semibold"
          >
            ← Back
          </button>

          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h3 className="font-bold text-charcoal mb-3">Search for a Buddy</h3>
            <div className="flex gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="Search by name or troop..."
                className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-forest-pine/30"
              />
              <button
                onClick={handleSearch}
                disabled={searching}
                className="bg-forest-pine text-parchment px-4 py-3 rounded-xl font-semibold text-sm"
              >
                {searching ? '...' : 'Search'}
              </button>
            </div>
          </div>

          {/* Search Results */}
          {searchResults.length > 0 && (
            <div className="space-y-2">
              {searchResults.map((user) => (
                <div
                  key={user.id}
                  className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-3"
                >
                  <div className="w-12 h-12 rounded-full bg-forest-pine/10 flex items-center justify-center text-xl">
                    {user.avatar}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-charcoal text-sm">{user.name}</p>
                    <p className="text-charcoal/40 text-xs">{user.troopName}</p>
                    <p className="text-charcoal/30 text-xs">
                      {user.knotsMastered} knots mastered · {user.xp} XP
                    </p>
                  </div>
                  <button
                    onClick={() => handleSendRequest(user.id)}
                    disabled={user.requestSent}
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      user.requestSent
                        ? 'bg-gray-100 text-gray-400'
                        : 'bg-forest-pine text-parchment'
                    }`}
                  >
                    {user.requestSent ? 'Sent!' : 'Add Buddy'}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Pending Requests View */}
      {view === 'requests' && (
        <div className="p-4 space-y-4">
          <button
            onClick={() => setView('main')}
            className="text-forest-pine text-sm font-semibold"
          >
            ← Back
          </button>

          <h3 className="font-bold text-charcoal text-lg">Buddy Requests</h3>

          {pendingRequests.length === 0 ? (
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <p className="text-charcoal/40 text-sm">No pending requests.</p>
            </div>
          ) : (
            <div className="space-y-2">
              {pendingRequests.map((req) => (
                <div
                  key={req.id}
                  className="bg-white rounded-2xl p-4 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-forest-pine/10 flex items-center justify-center text-xl">
                      {req.fromAvatar}
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-charcoal">{req.fromName}</p>
                      <p className="text-charcoal/40 text-xs">{req.troopName}</p>
                      <p className="text-charcoal/30 text-xs">
                        {getTimeSince(req.timestamp)}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleRespondRequest(req.id, true)}
                      className="flex-1 bg-forest-pine text-parchment font-bold py-2 rounded-full text-sm"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleRespondRequest(req.id, false)}
                      className="flex-1 bg-gray-100 text-charcoal/40 font-bold py-2 rounded-full text-sm"
                    >
                      Decline
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BuddySystem;
