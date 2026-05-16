import React, { useState, useEffect } from 'react';

const KnotDuelArena = ({ userId = 1, username = 'CurtisA' }) => {
    const [duelState, setDuelState] = useState('lobby'); // lobby | matching | countdown | active | result
    const [opponent, setOpponent] = useState(null);
    const [countdown, setCountdown] = useState(3);
    const [timer, setTimer] = useState(60);
    const [myProgress, setMyProgress] = useState(0);
    const [opponentProgress, setOpponentProgress] = useState(0);
    const [knotChallenge, setKnotChallenge] = useState({ name: 'Bowline', steps: 5 });
    const [result, setResult] = useState(null);

    const startMatchmaking = () => {
        setDuelState('matching');
        // Simulate finding an opponent after 2 seconds
        setTimeout(() => {
            setOpponent({ id: 2, username: 'SamT', rank: 'Navigator', xp: 720 });
            setDuelState('countdown');
        }, 2000);
    };

    // Countdown timer
    useEffect(() => {
        if (duelState === 'countdown' && countdown > 0) {
            const t = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(t);
        }
        if (duelState === 'countdown' && countdown === 0) {
            setDuelState('active');
            setTimer(60);
        }
    }, [duelState, countdown]);

    // Game timer
    useEffect(() => {
        if (duelState === 'active' && timer > 0) {
            const t = setTimeout(() => setTimer(timer - 1), 1000);
            // Simulate opponent progress
            if (timer % 3 === 0) {
                setOpponentProgress(prev => Math.min(100, prev + Math.floor(Math.random() * 15) + 5));
            }
            return () => clearTimeout(t);
        }
        if (duelState === 'active' && timer === 0) {
            endDuel();
        }
    }, [duelState, timer]);

    // Check for win condition
    useEffect(() => {
        if (myProgress >= 100 && duelState === 'active') endDuel();
        if (opponentProgress >= 100 && duelState === 'active') endDuel();
    }, [myProgress, opponentProgress]);

    const completeStep = () => {
        setMyProgress(prev => Math.min(100, prev + (100 / knotChallenge.steps)));
    };

    const endDuel = () => {
        const won = myProgress >= opponentProgress;
        setResult({
            won,
            myScore: myProgress,
            opponentScore: opponentProgress,
            xpEarned: won ? 75 : 15,
        });
        setDuelState('result');
    };

    return (
        <div className="space-y-5">
            {/* Lobby */}
            {duelState === 'lobby' && (
                <div className="bg-cream-white rounded-card shadow-card p-6 text-center space-y-4">
                    <span className="text-6xl block">⚔️</span>
                    <h2 className="text-3xl font-display text-forest-pine">Knot Duel</h2>
                    <p className="text-sm font-body text-bark-gray">Challenge another Trailman to a real-time knot-tying race!</p>
                    <div className="bg-parchment rounded-badge p-3">
                        <p className="text-xs font-mono text-bark-gray">Today's Duel Knot</p>
                        <p className="text-lg font-display text-forest-pine">🪢 {knotChallenge.name}</p>
                    </div>
                    <button onClick={startMatchmaking} className="w-full bg-campfire-gradient text-cream-white font-display font-bold py-4 rounded-button shadow-button text-lg">
                        Find Opponent
                    </button>
                </div>
            )}

            {/* Matchmaking */}
            {duelState === 'matching' && (
                <div className="bg-cream-white rounded-card shadow-card p-8 text-center space-y-4">
                    <div className="w-16 h-16 border-4 border-forest-pine border-t-campfire-orange rounded-full animate-spin mx-auto"></div>
                    <p className="font-display text-forest-pine text-lg">Finding a worthy opponent...</p>
                    <p className="text-xs font-body text-bark-gray">Searching across all troops</p>
                </div>
            )}

            {/* Countdown */}
            {duelState === 'countdown' && (
                <div className="bg-charcoal rounded-card p-8 text-center space-y-4">
                    <div className="flex items-center justify-around">
                        <div>
                            <p className="text-3xl">🫵</p>
                            <p className="font-display text-cream-white">{username}</p>
                        </div>
                        <p className="text-4xl font-display text-campfire-orange">VS</p>
                        <div>
                            <p className="text-3xl">🤠</p>
                            <p className="font-display text-cream-white">{opponent?.username}</p>
                        </div>
                    </div>
                    <p className="text-8xl font-display text-campfire-orange animate-streak-pulse">{countdown}</p>
                    <p className="text-sm font-body text-cream-white opacity-70">Get your rope ready!</p>
                </div>
            )}

            {/* Active Duel */}
            {duelState === 'active' && (
                <div className="space-y-4">
                    {/* Timer */}
                    <div className={`text-center py-2 rounded-card ${timer <= 10 ? 'bg-trail-red animate-streak-pulse' : 'bg-forest-pine'}`}>
                        <p className="text-3xl font-display text-cream-white">{timer}s</p>
                    </div>

                    {/* Progress Comparison */}
                    <div className="bg-cream-white rounded-card shadow-card p-4 space-y-3">
                        {/* My Progress */}
                        <div>
                            <div className="flex justify-between text-xs font-body mb-1">
                                <span className="text-forest-pine font-bold">You ({username})</span>
                                <span className="font-mono text-campfire-orange">{Math.round(myProgress)}%</span>
                            </div>
                            <div className="w-full bg-parchment rounded-full h-4">
                                <div className="bg-forest-pine h-4 rounded-full transition-all duration-300" style={{ width: `${myProgress}%` }} />
                            </div>
                        </div>
                        {/* Opponent Progress */}
                        <div>
                            <div className="flex justify-between text-xs font-body mb-1">
                                <span className="text-trail-red font-bold">{opponent?.username}</span>
                                <span className="font-mono text-bark-gray">{Math.round(opponentProgress)}%</span>
                            </div>
                            <div className="w-full bg-parchment rounded-full h-4">
                                <div className="bg-trail-red h-4 rounded-full transition-all duration-300" style={{ width: `${opponentProgress}%` }} />
                            </div>
                        </div>
                    </div>

                    {/* Action Button */}
                    <button onClick={completeStep} className="w-full bg-campfire-gradient text-cream-white font-display font-bold py-5 rounded-button shadow-button text-xl active:scale-95 transition-transform">
                        Complete Next Step!
                    </button>
                </div>
            )}

            {/* Result */}
            {duelState === 'result' && result && (
                <div className="bg-cream-white rounded-card shadow-card-hover p-6 text-center space-y-4 animate-slide-up">
                    <span className="text-6xl block">{result.won ? '🏆' : '💪'}</span>
                    <h3 className="text-3xl font-display text-forest-pine">{result.won ? 'Victory!' : 'Good Fight!'}</h3>
                    <div className="flex justify-around">
                        <div>
                            <p className="font-display text-forest-pine">{username}</p>
                            <p className="text-2xl font-mono text-campfire-orange">{Math.round(result.myScore)}%</p>
                        </div>
                        <div>
                            <p className="font-display text-bark-gray">{opponent?.username}</p>
                            <p className="text-2xl font-mono text-bark-gray">{Math.round(result.opponentScore)}%</p>
                        </div>
                    </div>
                    <div className="bg-parchment rounded-badge p-3">
                        <p className="font-display text-campfire-orange text-lg">+{result.xpEarned} XP</p>
                    </div>
                    <button onClick={() => { setDuelState('lobby'); setMyProgress(0); setOpponentProgress(0); setCountdown(3); }} className="w-full bg-forest-pine text-cream-white font-display font-bold py-3 rounded-button shadow-button">
                        Play Again
                    </button>
                </div>
            )}
        </div>
    );
};

export default KnotDuelArena;
