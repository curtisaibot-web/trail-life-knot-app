import React, { useState, useCallback } from 'react';

const COLOR_MODES = {
    classic:    { name: 'Classic',    primary: '#8B6914', secondary: '#D4A843', description: 'Natural hemp rope' },
    highContrast: { name: 'High Contrast', primary: '#E63946', secondary: '#457B9D', description: 'Red & Blue for clarity' },
    neon:       { name: 'Neon',       primary: '#00FF88', secondary: '#FF00FF', description: 'Glow-in-the-dark mode' },
    trailLife:  { name: 'Trail Life', primary: '#C41E3A', secondary: '#1B3022', description: 'Official Trail Life colors' },
};

const KnotSlider = ({
    knotName = 'Bowline',
    totalSteps = 100,
    steps = [],
    onStepChange = () => {},
}) => {
    const [progress, setProgress] = useState(0);
    const [isLeftHanded, setIsLeftHanded] = useState(false);
    const [colorMode, setColorMode] = useState('classic');
    const [isAutoPlaying, setIsAutoPlaying] = useState(false);
    const [autoPlaySpeed, setAutoPlaySpeed] = useState(1);
    const [showTracePath, setShowTracePath] = useState(true);
    const [viewAngle, setViewAngle] = useState({ x: 0, y: 0 });

    // Calculate which step the slider is currently on
    const currentStepIndex = Math.floor((progress / 100) * Math.max(steps.length - 1, 1));

    const handleSliderChange = useCallback((e) => {
        const newProgress = parseFloat(e.target.value);
        setProgress(newProgress);
        onStepChange(newProgress);
    }, [onStepChange]);

    const handleAutoPlay = () => {
        if (isAutoPlaying) {
            setIsAutoPlaying(false);
            return;
        }
        setIsAutoPlaying(true);
        let current = progress;
        const interval = setInterval(() => {
            current += 0.5 * autoPlaySpeed;
            if (current >= 100) {
                current = 100;
                clearInterval(interval);
                setIsAutoPlaying(false);
            }
            setProgress(current);
            onStepChange(current);
        }, 50);
    };

    const handleRewind = () => {
        setProgress(0);
        onStepChange(0);
        setIsAutoPlaying(false);
    };

    const stepForward = () => {
        const newProgress = Math.min(100, progress + (100 / totalSteps));
        setProgress(newProgress);
        onStepChange(newProgress);
    };

    const stepBackward = () => {
        const newProgress = Math.max(0, progress - (100 / totalSteps));
        setProgress(newProgress);
        onStepChange(newProgress);
    };

    const colors = COLOR_MODES[colorMode];

    return (
        <div className={`bg-cream-white rounded-card shadow-card p-5 space-y-4 ${isLeftHanded ? 'direction-rtl' : ''}`}>
            {/* Header */}
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-display text-forest-pine">{knotName}</h3>
                <span className="text-xs font-mono bg-parchment text-bark-gray px-2 py-1 rounded-chip">
                    {Math.round(progress)}%
                </span>
            </div>

            {/* 3D Viewport Placeholder */}
            <div
                className="relative w-full h-56 rounded-card overflow-hidden"
                style={{ backgroundColor: '#1a1a2e' }}
            >
                {/* This is where the Unity WebGL or Three.js canvas would be embedded */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <p className="text-4xl mb-2">🪢</p>
                        <p className="text-cream-white font-mono text-xs opacity-70">3D Viewport</p>
                        <p className="text-cream-white font-mono text-[10px] opacity-50">
                            Color: {colors.name} | Mirror: {isLeftHanded ? 'Left' : 'Right'} | Trace: {showTracePath ? 'ON' : 'OFF'}
                        </p>
                    </div>
                </div>

                {/* Trace Path Indicator */}
                {showTracePath && (
                    <div className="absolute bottom-2 left-2 flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: colors.primary }}></div>
                        <span className="text-[10px] text-cream-white font-mono opacity-70">Trace Path Active</span>
                    </div>
                )}

                {/* Rope Color Preview */}
                <div className="absolute top-2 right-2 flex gap-1">
                    <div className="w-4 h-4 rounded-full border border-white border-opacity-30" style={{ backgroundColor: colors.primary }}></div>
                    <div className="w-4 h-4 rounded-full border border-white border-opacity-30" style={{ backgroundColor: colors.secondary }}></div>
                </div>
            </div>

            {/* Main Scrubbing Slider */}
            <div className="space-y-1">
                <input
                    type="range"
                    min="0"
                    max="100"
                    step="0.1"
                    value={progress}
                    onChange={handleSliderChange}
                    className="w-full h-3 rounded-full appearance-none cursor-pointer"
                    style={{
                        background: `linear-gradient(to right, ${colors.primary} 0%, ${colors.primary} ${progress}%, #e5e0d5 ${progress}%, #e5e0d5 100%)`
                    }}
                />
                {/* Step Markers */}
                <div className="flex justify-between px-1">
                    {steps.map((step, i) => (
                        <div
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full transition-all ${
                                i <= currentStepIndex ? 'bg-forest-pine scale-125' : 'bg-bark-gray bg-opacity-30'
                            }`}
                            title={`Step ${step.step}: ${step.instruction}`}
                        />
                    ))}
                </div>
            </div>

            {/* Playback Controls */}
            <div className="flex items-center justify-center gap-3">
                <button onClick={handleRewind} className="w-10 h-10 rounded-full bg-parchment text-forest-pine font-bold hover:bg-forest-pine hover:text-cream-white transition-all">
                    ⏮
                </button>
                <button onClick={stepBackward} className="w-10 h-10 rounded-full bg-parchment text-forest-pine font-bold hover:bg-forest-pine hover:text-cream-white transition-all">
                    ◀
                </button>
                <button onClick={handleAutoPlay} className="w-14 h-14 rounded-full bg-forest-pine text-cream-white font-bold shadow-button hover:opacity-90 transition-all text-xl">
                    {isAutoPlaying ? '⏸' : '▶'}
                </button>
                <button onClick={stepForward} className="w-10 h-10 rounded-full bg-parchment text-forest-pine font-bold hover:bg-forest-pine hover:text-cream-white transition-all">
                    ▶
                </button>
                <button onClick={() => { setProgress(100); onStepChange(100); }} className="w-10 h-10 rounded-full bg-parchment text-forest-pine font-bold hover:bg-forest-pine hover:text-cream-white transition-all">
                    ⏭
                </button>
            </div>

            {/* Speed Control */}
            <div className="flex items-center gap-2">
                <span className="text-xs font-body text-bark-gray">Speed:</span>
                {[0.5, 1, 1.5, 2].map(s => (
                    <button
                        key={s}
                        onClick={() => setAutoPlaySpeed(s)}
                        className={`px-2 py-1 rounded-chip text-xs font-mono transition-all ${
                            autoPlaySpeed === s ? 'bg-campfire-orange text-cream-white' : 'bg-parchment text-bark-gray'
                        }`}
                    >
                        {s}x
                    </button>
                ))}
            </div>

            {/* Current Step Instruction */}
            {steps[currentStepIndex] && (
                <div className="bg-parchment rounded-badge p-3 border-l-4 border-campfire-orange">
                    <span className="text-xs font-mono text-campfire-orange">Step {steps[currentStepIndex].step}</span>
                    <p className="text-sm font-body text-charcoal">{steps[currentStepIndex].instruction}</p>
                </div>
            )}

            {/* Toggle Controls */}
            <div className="grid grid-cols-3 gap-2">
                {/* Left-Handed Toggle */}
                <button
                    onClick={() => setIsLeftHanded(!isLeftHanded)}
                    className={`p-2 rounded-badge text-xs font-body text-center transition-all ${
                        isLeftHanded ? 'bg-forest-pine text-cream-white' : 'bg-parchment text-charcoal'
                    }`}
                >
                    {isLeftHanded ? '🫲 Left' : '🫱 Right'}
                </button>

                {/* Trace Path Toggle */}
                <button
                    onClick={() => setShowTracePath(!showTracePath)}
                    className={`p-2 rounded-badge text-xs font-body text-center transition-all ${
                        showTracePath ? 'bg-campfire-orange text-cream-white' : 'bg-parchment text-charcoal'
                    }`}
                >
                    {showTracePath ? '✨ Trace ON' : '✨ Trace OFF'}
                </button>

                {/* Color Mode Cycle */}
                <button
                    onClick={() => {
                        const modes = Object.keys(COLOR_MODES);
                        const nextIndex = (modes.indexOf(colorMode) + 1) % modes.length;
                        setColorMode(modes[nextIndex]);
                    }}
                    className="p-2 rounded-badge text-xs font-body text-center bg-parchment text-charcoal hover:bg-forest-pine hover:text-cream-white transition-all"
                >
                    🎨 {colors.name}
                </button>
            </div>
        </div>
    );
};

export default KnotSlider;
