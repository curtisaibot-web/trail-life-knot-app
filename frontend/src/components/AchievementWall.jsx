import React, { useState } from 'react';

const ACHIEVEMENTS = [
    // Knot Mastery
    { id: 1, title: 'First Knot', description: 'Master your first knot', icon: '🪢', category: 'Mastery', xpReward: 50, unlocked: true, unlockedDate: '2026-05-10' },
    { id: 2, title: 'Knot Apprentice', description: 'Master 3 different knots', icon: '🎓', category: 'Mastery', xpReward: 100, unlocked: true, unlockedDate: '2026-05-13' },
    { id: 3, title: 'Knot Expert', description: 'Master 6 different knots', icon: '🏅', category: 'Mastery', xpReward: 250, unlocked: false },
    { id: 4, title: 'Knot Master', description: 'Master all Navigator knots', icon: '👑', category: 'Mastery', xpReward: 500, unlocked: false },
    { id: 5, title: 'Grand Master', description: 'Master every knot in the app', icon: '🏆', category: 'Mastery', xpReward: 1000, unlocked: false },

    // Streaks
    { id: 6, title: 'Getting Started', description: '3-day practice streak', icon: '🔥', category: 'Streaks', xpReward: 30, unlocked: true, unlockedDate: '2026-05-12' },
    { id: 7, title: 'On Fire', description: '7-day practice streak', icon: '💥', category: 'Streaks', xpReward: 75, unlocked: true, unlockedDate: '2026-05-16' },
    { id: 8, title: 'Unstoppable', description: '30-day practice streak', icon: '⚡', category: 'Streaks', xpReward: 300, unlocked: false },
    { id: 9, title: 'Trail Legend', description: '100-day practice streak', icon: '🌟', category: 'Streaks', xpReward: 1000, unlocked: false },

    // Social
    { id: 10, title: 'Team Player', description: 'Join a troop', icon: '🤝', category: 'Social', xpReward: 25, unlocked: true, unlockedDate: '2026-05-10' },
    { id: 11, title: 'Duel Winner', description: 'Win your first Knot Duel', icon: '⚔️', category: 'Social', xpReward: 75, unlocked: false },
    { id: 12, title: 'Troop Champion', description: 'Reach #1 on your troop leaderboard', icon: '🥇', category: 'Social', xpReward: 200, unlocked: false },
    { id: 13, title: 'Mentor', description: 'Help 5 troop members verify knots', icon: '🧑‍🏫', category: 'Social', xpReward: 150, unlocked: false },

    // Exploration
    { id: 14, title: 'Storyteller', description: 'Complete all Campfire Stories', icon: '📖', category: 'Exploration', xpReward: 100, unlocked: false },
    { id: 15, title: 'Weather Ready', description: 'Practice knots for all 5 weather conditions', icon: '🌦️', category: 'Exploration', xpReward: 100, unlocked: false },
    { id: 16, title: 'AR Explorer', description: 'Place a knot in AR for the first time', icon: '📱', category: 'Exploration', xpReward: 50, unlocked: false },
    { id: 17, title: 'Journal Keeper', description: 'Write 10 journal entries', icon: '📓', category: 'Exploration', xpReward: 75, unlocked: false },

    // Verification
    { id: 18, title: 'Real Deal', description: 'Get your first knot verified in real life', icon: '✅', category: 'Verification', xpReward: 100, unlocked: false },
    { id: 19, title: 'Field Tested', description: 'Verify 5 knots with photos', icon: '📸', category: 'Verification', xpReward: 200, unlocked: false },
    { id: 20, title: 'Certified Trailman', description: 'Complete all verifications for Navigator rank', icon: '🎖️', category: 'Verification', xpReward: 500, unlocked: false },
];

const CATEGORIES = ['All', 'Mastery', 'Streaks', 'Social', 'Exploration', 'Verification'];

const AchievementWall = ({ userId = 1 }) => {
    const [filter, setFilter] = useState('All');
    const [selectedAchievement, setSelectedAchievement] = useState(null);

    const filtered = filter === 'All' ? ACHIEVEMENTS : ACHIEVEMENTS.filter(a => a.category === filter);
    const unlockedCount = ACHIEVEMENTS.filter(a => a.unlocked).length;
    const totalXPEarned = ACHIEVEMENTS.filter(a => a.unlocked).reduce((sum, a) => sum + a.xpReward, 0);

    return (
        <div className="space-y-5">
            {/* Header */}
            <div className="bg-forest-pine rounded-card p-5 text-center">
                <h2 className="text-2xl font-display text-cream-white">Achievement Wall</h2>
                <div className="flex justify-center gap-6 mt-3">
                    <div>
                        <p className="text-2xl font-display text-campfire-orange">{unlockedCount}/{ACHIEVEMENTS.length}</p>
                        <p className="text-xs font-mono text-cream-white opacity-70">Unlocked</p>
                    </div>
                    <div>
                        <p className="text-2xl font-display text-xp-gold">{totalXPEarned}</p>
                        <p className="text-xs font-mono text-cream-white opacity-70">XP Earned</p>
                    </div>
                </div>
                {/* Progress Bar */}
                <div className="mt-3 bg-cream-white bg-opacity-20 rounded-full h-2">
                    <div className="bg-campfire-orange h-2 rounded-full transition-all" style={{ width: `${(unlockedCount / ACHIEVEMENTS.length) * 100}%` }} />
                </div>
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-1">
                {CATEGORIES.map(cat => (
                    <button key={cat} onClick={() => setFilter(cat)}
                        className={`flex-shrink-0 px-3 py-1.5 rounded-chip text-xs font-body ${filter === cat ? 'bg-forest-pine text-cream-white' : 'bg-parchment text-bark-gray'}`}>
                        {cat}
                    </button>
                ))}
            </div>

            {/* Achievement Grid */}
            <div className="grid grid-cols-3 gap-3">
                {filtered.map(achievement => (
                    <button
                        key={achievement.id}
                        onClick={() => setSelectedAchievement(achievement)}
                        className={`rounded-card p-3 text-center transition-all ${
                            achievement.unlocked
                                ? 'bg-cream-white shadow-card hover:shadow-button'
                                : 'bg-parchment opacity-50'
                        }`}
                    >
                        <span className={`text-3xl block ${!achievement.unlocked ? 'grayscale' : ''}`}>{achievement.icon}</span>
                        <p className={`text-[10px] font-display mt-1 ${achievement.unlocked ? 'text-forest-pine' : 'text-bark-gray'}`}>
                            {achievement.title}
                        </p>
                        {achievement.unlocked && (
                            <span className="text-[9px] font-mono text-campfire-orange">+{achievement.xpReward} XP</span>
                        )}
                    </button>
                ))}
            </div>

            {/* Achievement Detail Modal */}
            {selectedAchievement && (
                <div className="fixed inset-0 bg-charcoal bg-opacity-50 z-50 flex items-center justify-center p-6" onClick={() => setSelectedAchievement(null)}>
                    <div className="bg-cream-white rounded-card shadow-card p-6 max-w-sm w-full text-center space-y-3 animate-scale-in" onClick={e => e.stopPropagation()}>
                        <span className={`text-6xl block ${!selectedAchievement.unlocked ? 'grayscale' : ''}`}>{selectedAchievement.icon}</span>
                        <h3 className="text-xl font-display text-forest-pine">{selectedAchievement.title}</h3>
                        <p className="text-sm font-body text-bark-gray">{selectedAchievement.description}</p>
                        <div className="bg-parchment rounded-badge p-3">
                            <p className="text-xs font-mono text-bark-gray">Reward</p>
                            <p className="text-xl font-display text-campfire-orange">+{selectedAchievement.xpReward} XP</p>
                        </div>
                        {selectedAchievement.unlocked ? (
                            <p className="text-xs font-mono text-sage-green">Unlocked on {selectedAchievement.unlockedDate}</p>
                        ) : (
                            <p className="text-xs font-mono text-bark-gray">🔒 Keep practicing to unlock!</p>
                        )}
                        <button onClick={() => setSelectedAchievement(null)} className="bg-forest-pine text-cream-white font-display font-bold px-6 py-2 rounded-button shadow-button text-sm">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AchievementWall;
