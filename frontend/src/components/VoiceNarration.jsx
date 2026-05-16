import React, { useState, useRef } from 'react';

const VOICES = {
    american:  { label: 'American',  flag: '🇺🇸', accent: 'Friendly Scout Leader' },
    british:   { label: 'British',   flag: '🇬🇧', accent: 'Classic Explorer' },
    scottish:  { label: 'Scottish',  flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', accent: 'Highland Guide' },
    indian:    { label: 'Indian',    flag: '🇮🇳', accent: 'Wilderness Expert' },
};

const LANGUAGES = {
    en: { label: 'English',  flag: '🇺🇸' },
    es: { label: 'Spanish',  flag: '🇪🇸' },
    fr: { label: 'French',   flag: '🇫🇷' },
    zh: { label: 'Chinese',  flag: '🇨🇳' },
    de: { label: 'German',   flag: '🇩🇪' },
};

const VoiceNarration = ({ knotName = 'Bowline', steps = [] }) => {
    const [selectedVoice, setSelectedVoice] = useState('american');
    const [selectedLang, setSelectedLang] = useState('en');
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [speed, setSpeed] = useState(1.0);
    const audioRef = useRef(null);

    const handlePlay = () => {
        setIsPlaying(true);
        // In production: fetch audio from backend ElevenLabs service
        // const audioUrl = `/api/narration/${knotName}/${selectedLang}/${selectedVoice}/step_${currentStep}`;
        // audioRef.current.src = audioUrl;
        // audioRef.current.playbackRate = speed;
        // audioRef.current.play();

        // Prototype: Use Web Speech API as fallback
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(steps[currentStep]?.instruction || 'No instruction available');
            utterance.rate = speed;
            utterance.onend = () => {
                if (currentStep < steps.length - 1) {
                    setCurrentStep(prev => prev + 1);
                } else {
                    setIsPlaying(false);
                    setCurrentStep(0);
                }
            };
            window.speechSynthesis.speak(utterance);
        }
    };

    const handleStop = () => {
        setIsPlaying(false);
        if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    };

    const handleStepClick = (index) => {
        setCurrentStep(index);
        if (isPlaying) {
            handleStop();
            setTimeout(() => handlePlay(), 100);
        }
    };

    return (
        <div className="bg-cream-white rounded-card shadow-card p-5 space-y-4">
            <audio ref={audioRef} hidden />

            <div className="text-center">
                <h3 className="text-xl font-display text-forest-pine">Voice Guide</h3>
                <p className="text-xs font-body text-bark-gray">Listen to step-by-step instructions for the {knotName}</p>
            </div>

            {/* Voice Selector */}
            <div>
                <p className="text-xs font-display text-forest-pine mb-2">Choose Your Guide</p>
                <div className="grid grid-cols-2 gap-2">
                    {Object.entries(VOICES).map(([key, voice]) => (
                        <button
                            key={key}
                            onClick={() => setSelectedVoice(key)}
                            className={`p-2 rounded-badge text-xs font-body transition-all ${
                                selectedVoice === key
                                    ? 'bg-forest-pine text-cream-white shadow-button'
                                    : 'bg-parchment text-charcoal hover:bg-sage-green hover:bg-opacity-20'
                            }`}
                        >
                            <span className="text-base">{voice.flag}</span> {voice.label}
                            <span className="block text-[10px] opacity-70">{voice.accent}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Language Selector */}
            <div>
                <p className="text-xs font-display text-forest-pine mb-2">Language</p>
                <div className="flex gap-2 overflow-x-auto pb-1">
                    {Object.entries(LANGUAGES).map(([key, lang]) => (
                        <button
                            key={key}
                            onClick={() => setSelectedLang(key)}
                            className={`flex-shrink-0 px-3 py-1.5 rounded-chip text-xs font-body transition-all ${
                                selectedLang === key
                                    ? 'bg-campfire-orange text-cream-white'
                                    : 'bg-parchment text-charcoal'
                            }`}
                        >
                            {lang.flag} {lang.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Speed Control */}
            <div className="flex items-center gap-3">
                <p className="text-xs font-display text-forest-pine">Speed</p>
                <input
                    type="range"
                    min="0.5"
                    max="2.0"
                    step="0.25"
                    value={speed}
                    onChange={(e) => setSpeed(parseFloat(e.target.value))}
                    className="flex-1 accent-campfire-orange"
                />
                <span className="text-xs font-mono text-bark-gray w-10 text-right">{speed}x</span>
            </div>

            {/* Step List */}
            <div className="space-y-2 max-h-48 overflow-y-auto">
                {steps.map((step, index) => (
                    <button
                        key={index}
                        onClick={() => handleStepClick(index)}
                        className={`w-full text-left p-3 rounded-badge transition-all ${
                            currentStep === index && isPlaying
                                ? 'bg-campfire-orange bg-opacity-15 border-l-4 border-campfire-orange'
                                : currentStep === index
                                ? 'bg-forest-pine bg-opacity-10 border-l-4 border-forest-pine'
                                : 'bg-parchment hover:bg-sage-green hover:bg-opacity-10'
                        }`}
                    >
                        <span className="text-xs font-mono text-bark-gray">Step {step.step}</span>
                        <p className="text-sm font-body text-charcoal">{step.instruction}</p>
                    </button>
                ))}
            </div>

            {/* Playback Controls */}
            <div className="flex gap-3">
                {!isPlaying ? (
                    <button onClick={handlePlay} className="flex-1 bg-forest-pine text-cream-white font-display font-bold py-3 rounded-button shadow-button hover:opacity-90 transition-all">
                        ▶️ Play All Steps
                    </button>
                ) : (
                    <button onClick={handleStop} className="flex-1 bg-trail-red text-cream-white font-display font-bold py-3 rounded-button shadow-button hover:opacity-90 transition-all">
                        ⏹️ Stop
                    </button>
                )}
            </div>
        </div>
    );
};

export default VoiceNarration;
