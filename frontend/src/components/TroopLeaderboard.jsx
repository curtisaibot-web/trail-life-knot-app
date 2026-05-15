import React, { useState, useEffect, useRef } from 'react';
// import { io } from 'socket.io-client';

// Mock socket for prototype (replace with real socket.io-client in production)
const mockSocket = {
    on: (event, cb) => {
        if (event === 'xp_updated') {
            // Simulate a live XP update every 8 seconds for demo purposes
            setInterval(() => {
                cb({
                    userId: 2,
                    newTotalXp: Math.floor(Math.random() * 200) + 700,
                    message: 'earned XP for mastering the Clove Hitch!',
                    timestamp: new Date().toISOString()
                });
            }, 8000);
        }
    },
    emit: () => {},
    disconnect: () => {}
};

const RANK_MEDALS = {
    1: { icon: '🥇', color: 'text-xp-gold', bg: 'bg-xp-gold bg-opacity-10 border-xp-gold' },
    2: { icon: '🥈', color: 'text-silver-badge', bg: 'bg-silver-badge bg-opacity-10 border-silver-badge' },
    3: { icon: '🥉', color: 'text-bronze-badge', bg: 'bg-bronze-badge bg-opacity-10 border-bronze-badge' },
};

const PROGRAM_BADGES = {
    'Adventurer': { icon: '⛰️', color: 'bg-campfire-orange text-cream-white' },
    'Navigator':  { icon: '🧭', color: 'bg-forest-pine text-cream-white' },
    'Scout':      { icon: '🌿', color: 'bg-sage-green text-cream-white' },
};

const TroopLeaderboard = ({ troopId = 1, currentUserId = 1 }) => {
    const [entries, setEntries] = useState([
        { id: 1, username: 'CurtisA', rank: 'Adventurer', total_xp: 850, current_streak: 14 },
        { id: 2, username: 'SamT',    rank: 'Navigator',  total_xp: 720, current_streak: 5  },
        { id: 3, username: 'AlexM',   rank: 'Navigator',  total_xp: 650, current_streak: 2  },
        { id: 4, username: 'JohnD',   rank: 'Adventurer', total_xp: 500, current_streak: 0  },
    ]);
    const [liveEvent, setLiveEvent] = useState(null);
    const [activeTab, setActiveTab] = useState('troop'); // troop | global
    const socketRef = useRef(null);

    useEffect(() => {
        // Connect to WebSocket server
        // socketRef.current = io(process.env.REACT_APP_API_URL);
        socketRef.current = mockSocket;

        // Join the troop-specific room
        socketRef.current.emit('join_troop_room', troopId);

        // Listen for live XP updates
        socketRef.current.on('xp_updated', (data) => {
            // Update the specific user's XP in the leaderboard
            setEntries(prev => {
                const updated = prev.map(entry =>
                    entry.id === data.userId
                        ? { ...entry, total_xp: data.newTotalXp }
                        : entry
                );
                // Re-sort by XP descending
                return [...updated].sort((a, b) => b.total_xp - a.total_xp);
            });

            // Show the live event banner
            setLiveEvent(data);
            setTimeout(() => setLiveEvent(null), 4000);
        });

        return () => {
            if (socketRef.current) socketRef.current.disconnect();
        };
    }, [troopId]);

    const sortedEntries = [...entries].sort((a, b) => b.total_xp - a.total_xp);

    return (
        <div className="space-y-5 animate-fade-in">
            {/* Header */}
            <div className="text-center">
                <h2 className="text-3xl font-display text-forest-pine mb-1">Troop Board</h2>
                <p className="text-sm font-body text-bark-gray">Live rankings update in real-time</p>
            </div>

            {/* Live Event Banner */}
            {liveEvent && (
                <div className="bg-campfire-gradient text-cream-white rounded-card p-4 flex items-center gap-3 animate-slide-down shadow-button">
                    <span className="text-2xl animate-streak-pulse">⚡</span>
                    <div>
                        <p className="font-display font-bold text-sm">Live Update!</p>
                        <p className="font-body text-xs opacity-90">
                            {sortedEntries.find(e => e.id === liveEvent.userId)?.username} {liveEvent.message}
                        </p>
                    </div>
                </div>
            )}

            {/* Tab Toggle */}
            <div className="flex bg-parchment rounded-button p-1">
                <button
                    onClick={() => setActiveTab('troop')}
                    className={`flex-1 py-2 rounded-button text-sm font-body font-semibold transition-all ${activeTab === 'troop' ? 'bg-forest-pine text-cream-white shadow-button' : 'text-bark-gray'}`}
                >
                    🏕️ My Troop
                </button>
                <button
                    onClick={() => setActiveTab('global')}
                    className={`flex-1 py-2 rounded-button text-sm font-body font-semibold transition-all ${activeTab === 'global' ? 'bg-forest-pine text-cream-white shadow-button' : 'text-bark-gray'}`}
                >
                    🌍 All Troops
                </button>
            </div>

            {/* Leaderboard Entries */}
            <div className="space-y-3">
                {sortedEntries.map((entry, index) => {
                    const position = index + 1;
                    const medal = RANK_MEDALS[position];
                    const badge = PROGRAM_BADGES[entry.rank] || PROGRAM_BADGES['Scout'];
                    const isCurrentUser = entry.id === currentUserId;

                    return (
                        <div
                            key={entry.id}
                            className={`rounded-card p-4 flex items-center gap-4 transition-all duration-500 ${
                                isCurrentUser
                                    ? 'bg-forest-pine text-cream-white shadow-card-hover scale-[1.02]'
                                    : medal
                                    ? `bg-cream-white border-2 ${medal.bg} shadow-card`
                                    : 'bg-cream-white shadow-knot-card'
                            }`}
                        >
                            {/* Position */}
                            <div className="w-10 text-center">
                                {medal
                                    ? <span className="text-2xl">{medal.icon}</span>
                                    : <span className={`text-lg font-display font-bold ${isCurrentUser ? 'text-cream-white' : 'text-bark-gray'}`}>#{position}</span>
                                }
                            </div>

                            {/* Avatar & Name */}
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <p className={`font-display font-bold text-base ${isCurrentUser ? 'text-cream-white' : 'text-charcoal'}`}>
                                        {entry.username} {isCurrentUser && '(You)'}
                                    </p>
                                    <span className={`text-xs px-2 py-0.5 rounded-chip font-mono ${badge.color}`}>
                                        {badge.icon} {entry.rank}
                                    </span>
                                </div>
                                {/* XP Progress Bar */}
                                <div className={`w-full rounded-full h-2 ${isCurrentUser ? 'bg-forest-pine-dark' : 'bg-parchment'}`}>
                                    <div
                                        className={`h-2 rounded-full transition-all duration-700 ${isCurrentUser ? 'bg-campfire-orange' : 'bg-forest-pine'}`}
                                        style={{ width: `${Math.min(100, (entry.total_xp / 1000) * 100)}%` }}
                                    />
                                </div>
                            </div>

                            {/* XP & Streak */}
                            <div className="text-right">
                                <p className={`font-display font-bold text-lg ${isCurrentUser ? 'text-campfire-orange' : 'text-forest-pine'}`}>
                                    {entry.total_xp.toLocaleString()}
                                </p>
                                <p className={`text-xs font-mono ${isCurrentUser ? 'text-cream-white opacity-80' : 'text-bark-gray'}`}>
                                    🔥 {entry.current_streak}d
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Footer Note */}
            <p className="text-center text-xs font-body text-bark-gray">
                🔴 Live — Rankings update instantly when knots are verified
            </p>
        </div>
    );
};

export default TroopLeaderboard;
