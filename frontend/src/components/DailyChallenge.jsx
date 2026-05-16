import React, { useState, useEffect } from 'react';

const CHALLENGE_TYPES = {
    speed_tie:    { icon: '⚡', label: 'Speed Tie',    description: 'Tie the knot as fast as you can!' },
    blind_fold:   { icon: '🙈', label: 'Blind Fold',   description: 'Can you tie it without looking at the guide?' },
    teach_it:     { icon: '🎓', label: 'Teach It',     description: 'Record yourself teaching this knot to earn bonus XP.' },
    scenario:     { icon: '🏕️', label: 'Scenario',     description: 'Use this knot to solve a real-world problem.' },
    mirror_mode:  { icon: '🪞', label: 'Mirror Mode',  description: 'Tie it with your non-dominant hand!' },
};

const DailyChallenge = ({ userId = 1 }) => {
    const [challenge, setChallenge] = useState(null);
    const [timeRemaining, setTimeRemaining] = useState('');
    const [isCompleted, setIsCompleted] = useState(false);
    const [showReward, setShowReward] = useState(false);

    useEffect(() => {
        // Generate a deterministic daily challenge based on the date
        const today = new Date();
        const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
        const types = Object.keys(CHALLENGE_TYPES);
        const knotNames = ['Bowline', 'Square Knot', 'Clove Hitch', 'Taut-Line Hitch', 'Figure Eight'];
        
        const selectedType = types[seed % types.length];
        const selectedKnot = knotNames[seed % knotNames.length];
        const bonusXp = [25, 50, 75, 100][seed % 4];

        setChallenge({
            type: selectedType,
            ...CHALLENGE_TYPES[selectedType],
            knotName: selectedKnot,
            bonusXp: bonusXp,
            date: today.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }),
        });

        // Countdown timer to midnight
        const updateTimer = () => {
            const now = new Date();
            const midnight = new Date(now);
            midnight.setHours(24, 0, 0, 0);
            const diff = midnight - now;
            const hours = Math.floor(diff / 3600000);
            const minutes = Math.floor((diff % 3600000) / 60000);
            const seconds = Math.floor((diff % 60000) / 1000);
            setTimeRemaining(`${hours}h ${minutes}m ${seconds}s`);
        };
        updateTimer();
        const interval = setInterval(updateTimer, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleComplete = () => {
        setIsCompleted(true);
        setShowReward(true);
        setTimeout(() => setShowReward(false), 3000);
    };

    if (!challenge) return null;

    return (
        <div className="bg-cream-white rounded-card shadow-card overflow-hidden">
            {/* Header Banner */}
            <div className="bg-campfire-gradient p-4 text-center">
                <p className="text-xs font-mono text-cream-white opacity-80">{challenge.date}</p>
                <h3 className="text-2xl font-display text-cream-white mt-1">Daily Challenge</h3>
                <p className="text-xs font-body text-cream-white opacity-70 mt-1">New challenge in {timeRemaining}</p>
            </div>

            <div className="p-5 space-y-4">
                {/* Challenge Card */}
                <div className="bg-parchment rounded-card p-4 text-center space-y-2">
                    <span className="text-5xl">{challenge.icon}</span>
                    <h4 className="text-lg font-display text-forest-pine">{challenge.label}</h4>
                    <p className="text-sm font-body text-bark-gray">{challenge.description}</p>
                </div>

                {/* Target Knot */}
                <div className="flex items-center justify-between bg-forest-pine bg-opacity-5 rounded-badge p-3">
                    <div>
                        <p className="text-xs font-mono text-bark-gray">Today's Knot</p>
                        <p className="text-lg font-display text-forest-pine">🪢 {challenge.knotName}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-xs font-mono text-bark-gray">Bonus XP</p>
                        <p className="text-lg font-display text-campfire-orange">+{challenge.bonusXp}</p>
                    </div>
                </div>

                {/* Completion Button */}
                {!isCompleted ? (
                    <button
                        onClick={handleComplete}
                        className="w-full bg-forest-pine text-cream-white font-display font-bold py-4 rounded-button shadow-button hover:opacity-90 transition-all"
                    >
                        Start Challenge
                    </button>
                ) : (
                    <div className="text-center space-y-2">
                        <div className="bg-sage-green bg-opacity-20 rounded-card p-4 border-2 border-sage-green">
                            <p className="text-3xl">🎉</p>
                            <p className="font-display text-forest-pine text-lg">Challenge Complete!</p>
                            <p className="font-mono text-campfire-orange text-sm">+{challenge.bonusXp} XP earned</p>
                        </div>
                        <p className="text-xs font-body text-bark-gray">Come back tomorrow for a new challenge!</p>
                    </div>
                )}
            </div>

            {/* Reward Animation Overlay */}
            {showReward && (
                <div className="fixed inset-0 flex items-center justify-center bg-charcoal bg-opacity-50 z-50 animate-fade-in">
                    <div className="bg-cream-white rounded-card p-8 text-center shadow-card-hover animate-slide-up">
                        <p className="text-6xl mb-3">🏆</p>
                        <p className="text-2xl font-display text-forest-pine">+{challenge.bonusXp} XP</p>
                        <p className="text-sm font-body text-bark-gray mt-2">Your streak continues!</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DailyChallenge;
