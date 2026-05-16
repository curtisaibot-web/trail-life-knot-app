import React, { useState, useEffect } from 'react';

const WEATHER_SCENARIOS = {
    rain: {
        icon: '🌧️', label: 'Rainy', color: 'bg-blue-500',
        description: 'Wet conditions make ropes slippery. You need knots that hold under wet tension.',
        knots: [
            { name: 'Bowline', reason: 'Holds firm even when wet and is easy to untie after being loaded.' },
            { name: 'Figure Eight', reason: 'Jams less than other stopper knots when rope is swollen from water.' },
            { name: 'Double Fisherman\'s', reason: 'Extremely secure for joining wet ropes.' },
        ],
        tips: ['Use thicker rope in wet conditions.', 'Dry your ropes after use to prevent mildew.', 'Avoid cotton rope in rain—it shrinks and weakens.'],
    },
    wind: {
        icon: '💨', label: 'Windy', color: 'bg-teal-500',
        description: 'High winds put lateral stress on shelters and guy lines. Adjustable knots are critical.',
        knots: [
            { name: 'Taut-Line Hitch', reason: 'Adjustable tension is essential when wind changes direction.' },
            { name: 'Trucker\'s Hitch', reason: 'Creates a 3:1 mechanical advantage for securing loads against wind.' },
            { name: 'Clove Hitch', reason: 'Quick to tie for temporary wind breaks and tarps.' },
        ],
        tips: ['Double-check all guy lines before a storm.', 'Use stakes at 45-degree angles for maximum holding power.', 'Consider using paracord for lightweight wind resistance.'],
    },
    cold: {
        icon: '❄️', label: 'Cold/Snow', color: 'bg-indigo-400',
        description: 'Cold fingers make fine motor skills difficult. You need knots that are simple to tie with gloves.',
        knots: [
            { name: 'Square Knot', reason: 'Simple enough to tie with thick gloves.' },
            { name: 'Bowline', reason: 'Can be tied one-handed if your other hand is in a pocket.' },
            { name: 'Clove Hitch', reason: 'Fast to tie around poles even with numb fingers.' },
        ],
        tips: ['Practice tying knots with gloves on!', 'Use larger diameter rope in cold weather for easier grip.', 'Keep a pre-tied loop on your pack for emergencies.'],
    },
    hot: {
        icon: '☀️', label: 'Hot/Sunny', color: 'bg-amber-500',
        description: 'Heat and UV degrade synthetic ropes. Shade structures and proper storage are key.',
        knots: [
            { name: 'Taut-Line Hitch', reason: 'Perfect for shade tarps that need periodic adjustment.' },
            { name: 'Timber Hitch', reason: 'Great for dragging logs to build a shade shelter.' },
            { name: 'Sheet Bend', reason: 'Join two tarps together for a larger shade area.' },
        ],
        tips: ['Store ropes out of direct sunlight when not in use.', 'Nylon rope loses up to 15% strength in prolonged UV exposure.', 'Hydrate while you practice!'],
    },
    night: {
        icon: '🌙', label: 'Night/Dark', color: 'bg-slate-700',
        description: 'When you can\'t see, you need to tie by feel alone. Muscle memory is everything.',
        knots: [
            { name: 'Bowline', reason: 'The "rabbit" mnemonic makes it possible to tie entirely by feel.' },
            { name: 'Square Knot', reason: 'The simplest knot to verify by touch—feel for the symmetry.' },
            { name: 'Two Half Hitches', reason: 'Easy to tie around a tree in the dark for a bear bag.' },
        ],
        tips: ['Practice blindfolded to build muscle memory.', 'Use reflective paracord for nighttime visibility.', 'Always know where your rope is before it gets dark.'],
    },
};

const WeatherScenarioEngine = () => {
    const [selectedWeather, setSelectedWeather] = useState(null);
    const [currentWeather, setCurrentWeather] = useState(null);
    const [expandedKnot, setExpandedKnot] = useState(null);

    // Simulate fetching current weather (in production, use a weather API)
    useEffect(() => {
        const hour = new Date().getHours();
        if (hour >= 21 || hour < 6) setCurrentWeather('night');
        else if (hour >= 11 && hour < 16) setCurrentWeather('hot');
        else setCurrentWeather('wind');
    }, []);

    const activeScenario = selectedWeather ? WEATHER_SCENARIOS[selectedWeather] : null;

    return (
        <div className="space-y-5">
            {/* Header */}
            <div className="text-center">
                <h2 className="text-2xl font-display text-forest-pine">Weather Knot Guide</h2>
                <p className="text-sm font-body text-bark-gray">The right knot for the right conditions</p>
            </div>

            {/* Current Weather Suggestion */}
            {currentWeather && !selectedWeather && (
                <button
                    onClick={() => setSelectedWeather(currentWeather)}
                    className="w-full bg-campfire-gradient rounded-card p-4 text-left"
                >
                    <p className="text-xs font-mono text-cream-white opacity-70">Suggested for right now</p>
                    <div className="flex items-center gap-3 mt-1">
                        <span className="text-4xl">{WEATHER_SCENARIOS[currentWeather].icon}</span>
                        <div>
                            <p className="font-display text-cream-white text-lg">{WEATHER_SCENARIOS[currentWeather].label} Conditions</p>
                            <p className="text-xs font-body text-cream-white opacity-80">Tap to see recommended knots</p>
                        </div>
                    </div>
                </button>
            )}

            {/* Weather Selector Grid */}
            <div className="grid grid-cols-5 gap-2">
                {Object.entries(WEATHER_SCENARIOS).map(([key, scenario]) => (
                    <button
                        key={key}
                        onClick={() => setSelectedWeather(key)}
                        className={`p-3 rounded-card text-center transition-all ${
                            selectedWeather === key
                                ? 'bg-forest-pine text-cream-white shadow-card'
                                : 'bg-cream-white shadow-knot-card text-charcoal hover:shadow-card'
                        }`}
                    >
                        <span className="text-2xl block">{scenario.icon}</span>
                        <p className="text-[10px] font-body mt-1">{scenario.label}</p>
                    </button>
                ))}
            </div>

            {/* Scenario Detail */}
            {activeScenario && (
                <div className="space-y-4 animate-fade-in">
                    {/* Description */}
                    <div className="bg-cream-white rounded-card shadow-card p-4">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-4xl">{activeScenario.icon}</span>
                            <h3 className="text-xl font-display text-forest-pine">{activeScenario.label} Conditions</h3>
                        </div>
                        <p className="text-sm font-body text-bark-gray">{activeScenario.description}</p>
                    </div>

                    {/* Recommended Knots */}
                    <div className="space-y-2">
                        <h4 className="font-display text-forest-pine text-sm">Recommended Knots</h4>
                        {activeScenario.knots.map((knot, i) => (
                            <button
                                key={i}
                                onClick={() => setExpandedKnot(expandedKnot === i ? null : i)}
                                className="w-full bg-cream-white rounded-card shadow-knot-card p-4 text-left transition-all hover:shadow-card"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="text-lg font-display text-forest-pine">🪢</span>
                                        <p className="font-display text-forest-pine">{knot.name}</p>
                                    </div>
                                    <span className="text-xs text-bark-gray">{expandedKnot === i ? '▲' : '▼'}</span>
                                </div>
                                {expandedKnot === i && (
                                    <p className="text-sm font-body text-bark-gray mt-2 border-t border-parchment pt-2">{knot.reason}</p>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Pro Tips */}
                    <div className="bg-parchment rounded-card p-4">
                        <h4 className="font-display text-forest-pine text-sm mb-2">Pro Tips</h4>
                        {activeScenario.tips.map((tip, i) => (
                            <div key={i} className="flex items-start gap-2 mb-1.5">
                                <span className="text-campfire-orange text-xs mt-0.5">▸</span>
                                <p className="text-xs font-body text-charcoal">{tip}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default WeatherScenarioEngine;
