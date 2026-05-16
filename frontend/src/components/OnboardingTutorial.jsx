import React, { useState } from 'react';

const ONBOARDING_STEPS = [
    {
        id: 1,
        title: 'Welcome to Trail Knotz',
        subtitle: 'Your journey to knot mastery starts here',
        description: 'Trail Knotz teaches you every knot a Trail Life Navigator and Adventurer needs to know — with 3D animations, real-world scenarios, and hands-on verification.',
        illustration: '🏕️',
        bgColor: 'bg-forest-pine',
    },
    {
        id: 2,
        title: 'Learn in 3D',
        subtitle: 'See every twist and turn',
        description: 'Our 3D Skill Lab lets you rotate, zoom, and scrub through each knot step by step. Toggle left-handed mode, change rope colors, and follow the glowing Trace Path.',
        illustration: '🪢',
        bgColor: 'bg-charcoal',
    },
    {
        id: 3,
        title: 'Practice & Verify',
        subtitle: 'Prove you can do it for real',
        description: 'Tie the knot with real rope, take a photo, and submit it for verification. Your Troop Leader or our AI will confirm your mastery.',
        illustration: '📸',
        bgColor: 'bg-forest-pine',
    },
    {
        id: 4,
        title: 'Compete & Earn',
        subtitle: 'Streaks, XP, and Troop Leaderboards',
        description: 'Build daily streaks, earn XP for every knot you master, and climb the Troop Leaderboard. Challenge friends to Knot Duels and complete Troop Missions together.',
        illustration: '🏆',
        bgColor: 'bg-charcoal',
    },
    {
        id: 5,
        title: 'Choose Your Path',
        subtitle: 'Tell us about yourself',
        description: null, // This step has a form instead
        illustration: '🧭',
        bgColor: 'bg-forest-pine',
        isForm: true,
    },
];

const OnboardingTutorial = ({ onComplete }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [profile, setProfile] = useState({
        displayName: '',
        handedness: 'right',
        program: 'navigator',
        troopNumber: '',
    });

    const step = ONBOARDING_STEPS[currentStep];
    const isLastStep = currentStep === ONBOARDING_STEPS.length - 1;
    const isFirstStep = currentStep === 0;

    const handleNext = () => {
        if (isLastStep) {
            // Save profile and complete onboarding
            localStorage.setItem('trailknotz_onboarded', 'true');
            localStorage.setItem('trailknotz_profile', JSON.stringify(profile));
            onComplete?.(profile);
        } else {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleSkip = () => {
        localStorage.setItem('trailknotz_onboarded', 'true');
        onComplete?.({});
    };

    return (
        <div className={`fixed inset-0 z-50 ${step.bgColor} flex flex-col transition-colors duration-500`}>
            {/* Skip Button */}
            {!isLastStep && (
                <div className="flex justify-end p-4">
                    <button onClick={handleSkip} className="text-cream-white text-xs font-mono opacity-60 hover:opacity-100">
                        Skip
                    </button>
                </div>
            )}

            {/* Content */}
            <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
                {/* Illustration */}
                <div className="text-8xl mb-6 animate-bounce-slow">{step.illustration}</div>

                {/* Title */}
                <h2 className="text-3xl font-display text-cream-white">{step.title}</h2>
                <p className="text-sm font-body text-campfire-orange mt-2">{step.subtitle}</p>

                {/* Description or Form */}
                {step.description && (
                    <p className="text-sm font-body text-cream-white opacity-80 mt-4 max-w-sm leading-relaxed">
                        {step.description}
                    </p>
                )}

                {step.isForm && (
                    <div className="w-full max-w-sm mt-6 space-y-4 text-left">
                        {/* Display Name */}
                        <div>
                            <label className="text-xs font-display text-cream-white">Trail Name</label>
                            <input
                                type="text" value={profile.displayName}
                                onChange={e => setProfile({ ...profile, displayName: e.target.value })}
                                placeholder="What should we call you?"
                                className="w-full mt-1 p-3 bg-cream-white bg-opacity-10 rounded-badge text-sm font-body text-cream-white placeholder-cream-white placeholder-opacity-40 border border-cream-white border-opacity-20 outline-none focus:border-campfire-orange"
                            />
                        </div>

                        {/* Handedness */}
                        <div>
                            <label className="text-xs font-display text-cream-white">Which hand do you tie with?</label>
                            <div className="flex gap-2 mt-1">
                                {[{ key: 'right', label: '🤚 Right' }, { key: 'left', label: '🖐️ Left' }].map(h => (
                                    <button key={h.key} onClick={() => setProfile({ ...profile, handedness: h.key })}
                                        className={`flex-1 py-3 rounded-badge text-sm font-body transition-all ${
                                            profile.handedness === h.key
                                                ? 'bg-campfire-orange text-cream-white'
                                                : 'bg-cream-white bg-opacity-10 text-cream-white border border-cream-white border-opacity-20'
                                        }`}>
                                        {h.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Program */}
                        <div>
                            <label className="text-xs font-display text-cream-white">Your Program</label>
                            <div className="flex gap-2 mt-1">
                                {[{ key: 'navigator', label: '🧭 Navigator' }, { key: 'adventurer', label: '⛰️ Adventurer' }].map(p => (
                                    <button key={p.key} onClick={() => setProfile({ ...profile, program: p.key })}
                                        className={`flex-1 py-3 rounded-badge text-sm font-body transition-all ${
                                            profile.program === p.key
                                                ? 'bg-campfire-orange text-cream-white'
                                                : 'bg-cream-white bg-opacity-10 text-cream-white border border-cream-white border-opacity-20'
                                        }`}>
                                        {p.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Troop Number */}
                        <div>
                            <label className="text-xs font-display text-cream-white">Troop Number (optional)</label>
                            <input
                                type="text" value={profile.troopNumber}
                                onChange={e => setProfile({ ...profile, troopNumber: e.target.value })}
                                placeholder="e.g., 117"
                                className="w-full mt-1 p-3 bg-cream-white bg-opacity-10 rounded-badge text-sm font-body text-cream-white placeholder-cream-white placeholder-opacity-40 border border-cream-white border-opacity-20 outline-none focus:border-campfire-orange"
                            />
                        </div>
                    </div>
                )}
            </div>

            {/* Bottom Navigation */}
            <div className="p-6 space-y-3">
                {/* Progress Dots */}
                <div className="flex justify-center gap-2">
                    {ONBOARDING_STEPS.map((_, i) => (
                        <div key={i} className={`h-2 rounded-full transition-all ${
                            i === currentStep ? 'w-6 bg-campfire-orange' : 'w-2 bg-cream-white opacity-30'
                        }`} />
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                    {!isFirstStep && (
                        <button onClick={() => setCurrentStep(currentStep - 1)}
                            className="px-6 py-3 bg-cream-white bg-opacity-10 text-cream-white font-body rounded-button text-sm border border-cream-white border-opacity-20">
                            Back
                        </button>
                    )}
                    <button onClick={handleNext}
                        className="flex-1 bg-campfire-orange text-cream-white font-display font-bold py-3 rounded-button shadow-button text-base">
                        {isLastStep ? 'Start My Journey' : 'Next'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OnboardingTutorial;
