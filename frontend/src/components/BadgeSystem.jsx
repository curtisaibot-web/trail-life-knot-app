import React, { useState } from 'react';

const BADGES = [
    { id: 1, name: 'First Knot',       icon: '🪢', tier: 'bronze', xp_required: 50,   description: 'Tie your very first knot.' },
    { id: 2, name: 'Streak Starter',    icon: '🔥', tier: 'bronze', xp_required: 0,    description: 'Complete a 3-day streak.' },
    { id: 3, name: 'Navigator Ready',   icon: '🧭', tier: 'silver', xp_required: 300,  description: 'Master all 6 Navigator knots.' },
    { id: 4, name: 'Speed Demon',       icon: '⚡', tier: 'silver', xp_required: 0,    description: 'Complete a Speed Tie challenge under 30 seconds.' },
    { id: 5, name: 'Ambidextrous',      icon: '🫲', tier: 'silver', xp_required: 0,    description: 'Tie 5 knots in Left-Handed mode.' },
    { id: 6, name: 'Adventurer Elite',  icon: '⛰️', tier: 'gold',   xp_required: 800,  description: 'Master all Adventurer-level knots.' },
    { id: 7, name: 'Troop Champion',    icon: '🏆', tier: 'gold',   xp_required: 0,    description: 'Reach #1 on your Troop Leaderboard.' },
    { id: 8, name: 'Streak Legend',     icon: '💎', tier: 'gold',   xp_required: 0,    description: 'Maintain a 30-day streak.' },
    { id: 9, name: 'Knot Scholar',      icon: '📚', tier: 'gold',   xp_required: 0,    description: 'Complete all Campfire Story lessons.' },
    { id: 10, name: 'Trail Master',     icon: '🌟', tier: 'platinum', xp_required: 1500, description: 'Earn every other badge. The ultimate achievement.' },
];

const TIER_STYLES = {
    bronze:   { bg: 'bg-bronze-badge bg-opacity-15', border: 'border-bronze-badge', text: 'text-bronze-badge', label: 'Bronze' },
    silver:   { bg: 'bg-silver-badge bg-opacity-15', border: 'border-silver-badge', text: 'text-silver-badge', label: 'Silver' },
    gold:     { bg: 'bg-xp-gold bg-opacity-15',      border: 'border-xp-gold',      text: 'text-xp-gold',      label: 'Gold' },
    platinum: { bg: 'bg-forest-pine bg-opacity-15',   border: 'border-forest-pine',  text: 'text-forest-pine',  label: 'Platinum' },
};

const BadgeSystem = ({ userXp = 450, earnedBadgeIds = [1, 2, 3] }) => {
    const [selectedBadge, setSelectedBadge] = useState(null);
    const [filterTier, setFilterTier] = useState('all');

    const filteredBadges = filterTier === 'all' 
        ? BADGES 
        : BADGES.filter(b => b.tier === filterTier);

    const earnedCount = earnedBadgeIds.length;
    const totalCount = BADGES.length;

    return (
        <div className="space-y-5">
            {/* Header */}
            <div className="text-center">
                <h2 className="text-3xl font-display text-forest-pine">Badge Wall</h2>
                <p className="text-sm font-body text-bark-gray">{earnedCount} of {totalCount} badges earned</p>
                {/* Progress Bar */}
                <div className="w-full bg-parchment rounded-full h-3 mt-3">
                    <div
                        className="bg-campfire-gradient h-3 rounded-full transition-all duration-700"
                        style={{ width: `${(earnedCount / totalCount) * 100}%` }}
                    />
                </div>
            </div>

            {/* Tier Filter */}
            <div className="flex gap-2 overflow-x-auto pb-1">
                {['all', 'bronze', 'silver', 'gold', 'platinum'].map(tier => (
                    <button
                        key={tier}
                        onClick={() => setFilterTier(tier)}
                        className={`flex-shrink-0 px-3 py-1.5 rounded-chip text-xs font-body capitalize transition-all ${
                            filterTier === tier ? 'bg-forest-pine text-cream-white' : 'bg-parchment text-bark-gray'
                        }`}
                    >
                        {tier === 'all' ? 'All Badges' : TIER_STYLES[tier]?.label || tier}
                    </button>
                ))}
            </div>

            {/* Badge Grid */}
            <div className="grid grid-cols-3 gap-3">
                {filteredBadges.map(badge => {
                    const isEarned = earnedBadgeIds.includes(badge.id);
                    const tierStyle = TIER_STYLES[badge.tier];

                    return (
                        <button
                            key={badge.id}
                            onClick={() => setSelectedBadge(badge)}
                            className={`relative p-4 rounded-card text-center transition-all ${
                                isEarned
                                    ? `${tierStyle.bg} border-2 ${tierStyle.border} shadow-card hover:shadow-card-hover`
                                    : 'bg-parchment border-2 border-transparent opacity-40 grayscale'
                            }`}
                        >
                            <span className="text-3xl block mb-1">{badge.icon}</span>
                            <p className={`text-xs font-display ${isEarned ? tierStyle.text : 'text-bark-gray'}`}>
                                {badge.name}
                            </p>
                            {isEarned && (
                                <span className="absolute -top-1 -right-1 text-sm">✅</span>
                            )}
                        </button>
                    );
                })}
            </div>

            {/* Badge Detail Modal */}
            {selectedBadge && (
                <div className="fixed inset-0 bg-charcoal bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedBadge(null)}>
                    <div className="bg-cream-white rounded-card p-6 max-w-sm w-full shadow-card-hover animate-slide-up" onClick={e => e.stopPropagation()}>
                        <div className="text-center space-y-3">
                            <span className="text-6xl block">{selectedBadge.icon}</span>
                            <h3 className="text-2xl font-display text-forest-pine">{selectedBadge.name}</h3>
                            <span className={`inline-block px-3 py-1 rounded-chip text-xs font-mono ${TIER_STYLES[selectedBadge.tier].bg} ${TIER_STYLES[selectedBadge.tier].text} border ${TIER_STYLES[selectedBadge.tier].border}`}>
                                {TIER_STYLES[selectedBadge.tier].label} Tier
                            </span>
                            <p className="text-sm font-body text-bark-gray">{selectedBadge.description}</p>
                            {selectedBadge.xp_required > 0 && (
                                <div className="bg-parchment rounded-badge p-3">
                                    <p className="text-xs font-mono text-bark-gray">XP Required: {selectedBadge.xp_required}</p>
                                    <div className="w-full bg-cream-white rounded-full h-2 mt-1">
                                        <div
                                            className="bg-campfire-gradient h-2 rounded-full"
                                            style={{ width: `${Math.min(100, (userXp / selectedBadge.xp_required) * 100)}%` }}
                                        />
                                    </div>
                                </div>
                            )}
                            <button
                                onClick={() => setSelectedBadge(null)}
                                className="w-full bg-forest-pine text-cream-white font-display font-bold py-3 rounded-button shadow-button mt-3"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BadgeSystem;
