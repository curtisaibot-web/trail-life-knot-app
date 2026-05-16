import React, { useState } from 'react';

const MOCK_MISSIONS = [
    {
        id: 1, title: 'Operation Bowline Blitz', description: 'Every member of the troop must master the Bowline by Friday.',
        type: 'collective', status: 'active', deadline: '2026-05-23',
        requirement: { knot: 'Bowline', target: 8, current: 5 },
        reward: { xp: 100, badge: 'Bowline Battalion' },
        participants: [
            { name: 'Sam', completed: true }, { name: 'Jake', completed: true }, { name: 'Eli', completed: true },
            { name: 'Noah', completed: true }, { name: 'Liam', completed: true }, { name: 'Ben', completed: false },
            { name: 'Cole', completed: false }, { name: 'Max', completed: false },
        ],
    },
    {
        id: 2, title: 'The XP Mountain', description: 'Earn 2,000 total XP as a troop this week.',
        type: 'cumulative', status: 'active', deadline: '2026-05-22',
        requirement: { metric: 'Total XP', target: 2000, current: 1340 },
        reward: { xp: 150, badge: 'Mountain Movers' },
        participants: [
            { name: 'Sam', contributed: 320 }, { name: 'Jake', contributed: 280 }, { name: 'Eli', contributed: 210 },
            { name: 'Noah', contributed: 190 }, { name: 'Liam', contributed: 150 }, { name: 'Ben', contributed: 100 },
            { name: 'Cole', contributed: 55 }, { name: 'Max', contributed: 35 },
        ],
    },
    {
        id: 3, title: 'Streak Squad', description: 'All 8 troop members must have an active streak at the same time.',
        type: 'simultaneous', status: 'active', deadline: '2026-05-25',
        requirement: { metric: 'Active Streaks', target: 8, current: 6 },
        reward: { xp: 200, badge: 'Streak Squad' },
        participants: [
            { name: 'Sam', hasStreak: true }, { name: 'Jake', hasStreak: true }, { name: 'Eli', hasStreak: true },
            { name: 'Noah', hasStreak: true }, { name: 'Liam', hasStreak: true }, { name: 'Ben', hasStreak: true },
            { name: 'Cole', hasStreak: false }, { name: 'Max', hasStreak: false },
        ],
    },
    {
        id: 4, title: 'Weather Warriors', description: 'Complete the Weather Scenario Engine for all 5 conditions.',
        type: 'collective', status: 'completed', deadline: '2026-05-15',
        requirement: { metric: 'Scenarios Completed', target: 5, current: 5 },
        reward: { xp: 125, badge: 'Weather Warriors' },
        participants: [],
    },
];

const TroopMissionBoard = ({ troopId = 1 }) => {
    const [missions] = useState(MOCK_MISSIONS);
    const [selectedMission, setSelectedMission] = useState(null);
    const [filter, setFilter] = useState('active');

    const filtered = missions.filter(m => m.status === filter);

    const getProgress = (mission) => {
        const current = mission.requirement.current;
        const target = mission.requirement.target;
        return Math.min(100, Math.round((current / target) * 100));
    };

    const getDaysLeft = (deadline) => {
        const diff = new Date(deadline) - new Date();
        return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
    };

    const getMissionTypeIcon = (type) => {
        switch (type) {
            case 'collective': return '🎯';
            case 'cumulative': return '📊';
            case 'simultaneous': return '⚡';
            default: return '🏕️';
        }
    };

    return (
        <div className="space-y-5">
            {/* Header */}
            <div className="bg-forest-pine rounded-card p-5">
                <p className="text-xs font-mono text-cream-white opacity-70">Troop 117</p>
                <h2 className="text-2xl font-display text-cream-white mt-1">Mission Board</h2>
                <p className="text-sm font-body text-cream-white opacity-80 mt-1">Work together. Earn together.</p>
            </div>

            {/* Filter */}
            <div className="flex bg-parchment rounded-button p-1 gap-1">
                {['active', 'completed'].map(f => (
                    <button key={f} onClick={() => setFilter(f)}
                        className={`flex-1 py-2 rounded-button text-xs font-display capitalize transition-all ${filter === f ? 'bg-forest-pine text-cream-white shadow-button' : 'text-bark-gray'}`}>
                        {f} ({missions.filter(m => m.status === f).length})
                    </button>
                ))}
            </div>

            {/* Mission Cards */}
            <div className="space-y-3">
                {filtered.map(mission => (
                    <button
                        key={mission.id}
                        onClick={() => setSelectedMission(mission)}
                        className="w-full bg-cream-white rounded-card shadow-knot-card p-4 text-left hover:shadow-card transition-all"
                    >
                        <div className="flex items-start gap-3">
                            <span className="text-3xl">{getMissionTypeIcon(mission.type)}</span>
                            <div className="flex-1">
                                <div className="flex items-center justify-between">
                                    <p className="font-display text-forest-pine">{mission.title}</p>
                                    {mission.status === 'active' && (
                                        <span className="text-xs font-mono text-campfire-orange">{getDaysLeft(mission.deadline)}d left</span>
                                    )}
                                </div>
                                <p className="text-xs font-body text-bark-gray mt-0.5">{mission.description}</p>

                                {/* Progress Bar */}
                                <div className="mt-2">
                                    <div className="flex justify-between text-[10px] font-mono text-bark-gray mb-0.5">
                                        <span>{mission.requirement.current}/{mission.requirement.target}</span>
                                        <span>{getProgress(mission)}%</span>
                                    </div>
                                    <div className="bg-parchment rounded-full h-2">
                                        <div className={`h-2 rounded-full transition-all ${mission.status === 'completed' ? 'bg-sage-green' : 'bg-campfire-orange'}`}
                                            style={{ width: `${getProgress(mission)}%` }} />
                                    </div>
                                </div>

                                {/* Reward Preview */}
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="text-xs font-mono text-xp-gold">+{mission.reward.xp} XP</span>
                                    <span className="text-xs font-mono bg-forest-pine bg-opacity-10 text-forest-pine px-2 py-0.5 rounded-chip">{mission.reward.badge}</span>
                                </div>
                            </div>
                        </div>
                    </button>
                ))}
            </div>

            {/* Mission Detail Modal */}
            {selectedMission && (
                <div className="fixed inset-0 bg-charcoal bg-opacity-50 z-50 flex items-end justify-center" onClick={() => setSelectedMission(null)}>
                    <div className="bg-cream-white rounded-t-card w-full max-w-lg max-h-[80vh] overflow-y-auto p-5 space-y-4 animate-slide-up" onClick={e => e.stopPropagation()}>
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-display text-forest-pine">{selectedMission.title}</h3>
                            <button onClick={() => setSelectedMission(null)} className="text-bark-gray text-xl">✕</button>
                        </div>
                        <p className="text-sm font-body text-bark-gray">{selectedMission.description}</p>

                        {/* Participants */}
                        {selectedMission.participants.length > 0 && (
                            <div>
                                <h4 className="text-sm font-display text-forest-pine mb-2">Troop Progress</h4>
                                <div className="space-y-1.5">
                                    {selectedMission.participants.map((p, i) => (
                                        <div key={i} className="flex items-center justify-between bg-parchment rounded-badge p-2">
                                            <span className="text-sm font-body text-charcoal">{p.name}</span>
                                            {p.completed !== undefined && (
                                                <span className={`text-xs font-mono ${p.completed ? 'text-sage-green' : 'text-bark-gray'}`}>
                                                    {p.completed ? '✅ Done' : '🔄 In Progress'}
                                                </span>
                                            )}
                                            {p.contributed !== undefined && (
                                                <span className="text-xs font-mono text-campfire-orange">+{p.contributed} XP</span>
                                            )}
                                            {p.hasStreak !== undefined && (
                                                <span className={`text-xs font-mono ${p.hasStreak ? 'text-campfire-orange' : 'text-bark-gray'}`}>
                                                    {p.hasStreak ? '🔥 Active' : '❄️ No Streak'}
                                                </span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TroopMissionBoard;
