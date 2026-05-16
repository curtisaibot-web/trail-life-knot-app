import React, { useState } from 'react';

const MOCK_CHILDREN = [
    {
        id: 1, name: 'Sam', age: 10, program: 'Navigator', xp: 450, streak: 7,
        knotsMastered: ['Square Knot', 'Bowline', 'Clove Hitch'],
        knotsInProgress: ['Taut-Line Hitch'],
        recentActivity: [
            { action: 'Mastered Clove Hitch', time: '2 hours ago', xp: 75 },
            { action: 'Completed Daily Challenge', time: 'Yesterday', xp: 50 },
            { action: 'Started Taut-Line Hitch', time: '2 days ago', xp: 10 },
        ],
        weeklyMinutes: [15, 20, 10, 25, 30, 0, 18],
    },
];

const ParentPortal = ({ parentId = 1 }) => {
    const [children] = useState(MOCK_CHILDREN);
    const [selectedChild, setSelectedChild] = useState(MOCK_CHILDREN[0]);
    const [showTimeLimit, setShowTimeLimit] = useState(false);
    const [dailyLimit, setDailyLimit] = useState(30);

    const totalWeeklyMinutes = selectedChild.weeklyMinutes.reduce((a, b) => a + b, 0);
    const avgDailyMinutes = Math.round(totalWeeklyMinutes / 7);
    const dayLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    return (
        <div className="space-y-5">
            {/* Header */}
            <div className="bg-forest-pine rounded-card p-5">
                <p className="text-xs font-mono text-cream-white opacity-70">Parent Dashboard</p>
                <h2 className="text-2xl font-display text-cream-white mt-1">Family Progress</h2>
            </div>

            {/* Child Selector */}
            {children.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1">
                    {children.map(child => (
                        <button
                            key={child.id}
                            onClick={() => setSelectedChild(child)}
                            className={`flex-shrink-0 px-4 py-2 rounded-button text-sm font-body transition-all ${
                                selectedChild.id === child.id ? 'bg-forest-pine text-cream-white' : 'bg-parchment text-bark-gray'
                            }`}
                        >
                            {child.name}
                        </button>
                    ))}
                </div>
            )}

            {/* Child Overview */}
            <div className="bg-cream-white rounded-card shadow-card p-5 space-y-3">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-xl font-display text-forest-pine">{selectedChild.name}</h3>
                        <p className="text-xs font-body text-bark-gray">Age {selectedChild.age} | {selectedChild.program}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-2xl font-display text-campfire-orange">{selectedChild.xp} XP</p>
                        <p className="text-xs font-mono text-bark-gray">{selectedChild.streak} day streak 🔥</p>
                    </div>
                </div>

                {/* Knot Progress */}
                <div className="grid grid-cols-2 gap-3">
                    <div className="bg-sage-green bg-opacity-10 rounded-badge p-3 text-center">
                        <p className="text-2xl font-display text-forest-pine">{selectedChild.knotsMastered.length}</p>
                        <p className="text-xs font-body text-bark-gray">Knots Mastered</p>
                    </div>
                    <div className="bg-campfire-orange bg-opacity-10 rounded-badge p-3 text-center">
                        <p className="text-2xl font-display text-campfire-orange">{selectedChild.knotsInProgress.length}</p>
                        <p className="text-xs font-body text-bark-gray">In Progress</p>
                    </div>
                </div>
            </div>

            {/* Weekly Activity Chart */}
            <div className="bg-cream-white rounded-card shadow-card p-5">
                <div className="flex items-center justify-between mb-3">
                    <h4 className="font-display text-forest-pine">Weekly Activity</h4>
                    <span className="text-xs font-mono text-bark-gray">{totalWeeklyMinutes} min total</span>
                </div>
                <div className="flex items-end justify-between gap-1 h-24">
                    {selectedChild.weeklyMinutes.map((mins, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center">
                            <div
                                className="w-full rounded-t-sm bg-forest-pine transition-all"
                                style={{ height: `${Math.max(4, (mins / Math.max(...selectedChild.weeklyMinutes)) * 80)}px` }}
                            />
                            <span className="text-[10px] font-mono text-bark-gray mt-1">{dayLabels[i]}</span>
                        </div>
                    ))}
                </div>
                <p className="text-xs font-body text-bark-gray text-center mt-2">Average: {avgDailyMinutes} min/day</p>
            </div>

            {/* Recent Activity */}
            <div className="bg-cream-white rounded-card shadow-card p-5">
                <h4 className="font-display text-forest-pine mb-3">Recent Activity</h4>
                <div className="space-y-2">
                    {selectedChild.recentActivity.map((activity, i) => (
                        <div key={i} className="flex items-center justify-between bg-parchment rounded-badge p-3">
                            <div>
                                <p className="text-sm font-body text-charcoal">{activity.action}</p>
                                <p className="text-xs font-mono text-bark-gray">{activity.time}</p>
                            </div>
                            <span className="text-sm font-display text-campfire-orange">+{activity.xp} XP</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mastered Knots List */}
            <div className="bg-cream-white rounded-card shadow-card p-5">
                <h4 className="font-display text-forest-pine mb-3">Mastered Knots</h4>
                <div className="flex flex-wrap gap-2">
                    {selectedChild.knotsMastered.map((knot, i) => (
                        <span key={i} className="bg-sage-green bg-opacity-15 text-forest-pine text-xs font-body px-3 py-1.5 rounded-chip border border-sage-green">
                            ✅ {knot}
                        </span>
                    ))}
                    {selectedChild.knotsInProgress.map((knot, i) => (
                        <span key={i} className="bg-campfire-orange bg-opacity-15 text-campfire-orange text-xs font-body px-3 py-1.5 rounded-chip border border-campfire-orange">
                            🔄 {knot}
                        </span>
                    ))}
                </div>
            </div>

            {/* Parental Controls */}
            <div className="bg-cream-white rounded-card shadow-card p-5">
                <div className="flex items-center justify-between mb-3">
                    <h4 className="font-display text-forest-pine">Parental Controls</h4>
                </div>
                <div className="space-y-3">
                    {/* Daily Time Limit */}
                    <div className="flex items-center justify-between bg-parchment rounded-badge p-3">
                        <div>
                            <p className="text-sm font-body text-charcoal">Daily Time Limit</p>
                            <p className="text-xs font-mono text-bark-gray">{dailyLimit} minutes/day</p>
                        </div>
                        <button
                            onClick={() => setShowTimeLimit(!showTimeLimit)}
                            className="px-3 py-1 bg-forest-pine text-cream-white text-xs font-body rounded-chip"
                        >
                            Edit
                        </button>
                    </div>
                    {showTimeLimit && (
                        <div className="bg-parchment rounded-badge p-3">
                            <input
                                type="range" min="10" max="120" step="5" value={dailyLimit}
                                onChange={(e) => setDailyLimit(parseInt(e.target.value))}
                                className="w-full accent-forest-pine"
                            />
                            <div className="flex justify-between text-xs font-mono text-bark-gray">
                                <span>10 min</span><span>120 min</span>
                            </div>
                        </div>
                    )}

                    {/* Notifications Toggle */}
                    <div className="flex items-center justify-between bg-parchment rounded-badge p-3">
                        <div>
                            <p className="text-sm font-body text-charcoal">Weekly Progress Email</p>
                            <p className="text-xs font-mono text-bark-gray">Receive a summary every Sunday</p>
                        </div>
                        <div className="w-12 h-6 bg-forest-pine rounded-full relative cursor-pointer">
                            <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-cream-white rounded-full shadow-sm"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParentPortal;
