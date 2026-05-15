import React, { useState } from 'react';

const StreakTracker = ({ currentStreak = 7, longestStreak = 14, freezeCount = 2, lastActivity = '2026-05-15' }) => {
  const [showFreezeConfirm, setShowFreezeConfirm] = useState(false);

  const today = new Date().toISOString().split('T')[0];
  const isActiveToday = lastActivity === today;

  // Generate last 7 days for the mini calendar
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    return d.toISOString().split('T')[0];
  });

  const getStreakMedal = (streak) => {
    if (streak >= 30) return { icon: '🥇', label: 'Gold', color: 'text-xp-gold' };
    if (streak >= 14) return { icon: '🥈', label: 'Silver', color: 'text-silver-badge' };
    if (streak >= 7)  return { icon: '🥉', label: 'Bronze', color: 'text-bronze-badge' };
    return { icon: '🔥', label: 'Building', color: 'text-streak-fire' };
  };

  const medal = getStreakMedal(currentStreak);

  return (
    <div className="bg-cream-white rounded-card shadow-card p-6 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-display text-forest-pine">Daily Streak</h3>
        <span className={`text-2xl font-display font-bold ${medal.color} animate-streak-pulse`}>
          {medal.icon} {currentStreak} Days
        </span>
      </div>

      {/* 7-Day Mini Calendar */}
      <div className="grid grid-cols-7 gap-1">
        {last7Days.map((day, i) => {
          const isToday = day === today;
          const isActive = day <= lastActivity; // Simplified: mark all days up to last activity
          const dayLabel = new Date(day).toLocaleDateString('en-US', { weekday: 'short' }).charAt(0);
          return (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="text-xs font-mono text-bark-gray">{dayLabel}</span>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                isToday && isActiveToday
                  ? 'bg-campfire-orange text-cream-white shadow-button'
                  : isActive
                  ? 'bg-forest-pine text-cream-white'
                  : 'bg-parchment text-bark-gray'
              }`}>
                {isActive ? '✓' : new Date(day).getDate()}
              </div>
            </div>
          );
        })}
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-3 text-center">
        <div className="bg-parchment rounded-badge p-3">
          <p className="text-2xl font-display text-forest-pine">{currentStreak}</p>
          <p className="text-xs font-body text-bark-gray">Current</p>
        </div>
        <div className="bg-parchment rounded-badge p-3">
          <p className="text-2xl font-display text-xp-gold">{longestStreak}</p>
          <p className="text-xs font-body text-bark-gray">Best</p>
        </div>
        <div className="bg-parchment rounded-badge p-3">
          <p className="text-2xl font-display text-campfire-orange">{freezeCount}</p>
          <p className="text-xs font-body text-bark-gray">Freezes</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-2">
        {!isActiveToday && (
          <button className="w-full bg-campfire-gradient text-cream-white font-display font-bold py-3 rounded-button shadow-button hover:opacity-90 transition-all">
            🔥 Continue Streak Today
          </button>
        )}
        {freezeCount > 0 && !isActiveToday && (
          <button
            onClick={() => setShowFreezeConfirm(true)}
            className="w-full bg-parchment text-forest-pine font-body font-semibold py-3 rounded-button border-2 border-forest-pine hover:bg-forest-pine hover:text-cream-white transition-all"
          >
            🧊 Use Streak Freeze ({freezeCount} remaining)
          </button>
        )}
      </div>

      {/* Freeze Confirmation Modal */}
      {showFreezeConfirm && (
        <div className="fixed inset-0 bg-charcoal bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-cream-white rounded-card shadow-card-hover p-8 max-w-sm mx-4 text-center animate-badge-pop">
            <p className="text-4xl mb-4">🧊</p>
            <h4 className="text-xl font-display text-forest-pine mb-2">Use a Streak Freeze?</h4>
            <p className="text-sm font-body text-bark-gray mb-6">This will protect your {currentStreak}-day streak for today. You have {freezeCount} freezes left.</p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowFreezeConfirm(false)}
                className="flex-1 bg-parchment text-forest-pine font-body font-semibold py-3 rounded-button border-2 border-forest-pine"
              >
                Cancel
              </button>
              <button
                onClick={() => { /* API call to use freeze */ setShowFreezeConfirm(false); }}
                className="flex-1 bg-forest-pine text-cream-white font-body font-semibold py-3 rounded-button shadow-button"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StreakTracker;
