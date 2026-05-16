import React, { useState } from 'react';

const KNOT_ROPE_FACTORS = {
    'Square Knot': { factor: 1.3, description: 'Joining two ropes of equal diameter' },
    'Bowline': { factor: 1.4, description: 'Fixed loop at the end of a rope' },
    'Clove Hitch': { factor: 1.2, description: 'Securing rope to a pole or post' },
    'Taut-Line Hitch': { factor: 1.35, description: 'Adjustable loop for tent guy lines' },
    'Figure Eight': { factor: 1.25, description: 'Stopper knot to prevent rope from slipping' },
    'Sheet Bend': { factor: 1.3, description: 'Joining two ropes of different diameters' },
    'Timber Hitch': { factor: 1.15, description: 'Dragging or hoisting logs' },
    'Two Half Hitches': { factor: 1.25, description: 'Securing rope to a ring or post' },
    'Daisy Chain': { factor: 0.35, description: 'Shortening rope for storage (reduces length to ~35%)' },
    'Trucker\'s Hitch': { factor: 1.5, description: 'Mechanical advantage for securing loads' },
};

const SCENARIOS = [
    { name: 'Bear Bag Hang', baseLength: 50, knots: ['Bowline', 'Two Half Hitches'], description: 'Hanging food 12ft high, 6ft from trunk' },
    { name: 'Tent Guy Lines (4)', baseLength: 24, knots: ['Taut-Line Hitch'], description: '4 guy lines at 6ft each' },
    { name: 'Tarp Ridgeline', baseLength: 15, knots: ['Bowline', 'Trucker\'s Hitch'], description: '12ft ridgeline between two trees' },
    { name: 'Clothesline', baseLength: 20, knots: ['Clove Hitch', 'Taut-Line Hitch'], description: '15ft line between two posts' },
    { name: 'Lashing (Square)', baseLength: 12, knots: ['Clove Hitch'], description: 'Joining two poles at right angles' },
];

const RopeCalculator = () => {
    const [mode, setMode] = useState('knot'); // knot | scenario | custom
    const [selectedKnot, setSelectedKnot] = useState('Bowline');
    const [ropeLength, setRopeLength] = useState(10);
    const [ropeDiameter, setRopeDiameter] = useState(0.375); // inches
    const [selectedScenario, setSelectedScenario] = useState(null);

    // Calculate rope consumed by a knot
    const knotConsumption = (knotName, diameter) => {
        const factor = KNOT_ROPE_FACTORS[knotName]?.factor || 1.2;
        // Rope consumed by knot = factor * diameter * 12 (convert to inches for display)
        return Math.round(factor * diameter * 12 * 10) / 10; // inches consumed
    };

    // Calculate usable rope after knot
    const usableLength = (totalFeet, knotName, diameter) => {
        const consumed = knotConsumption(knotName, diameter) / 12; // convert inches to feet
        return Math.max(0, Math.round((totalFeet - consumed) * 10) / 10);
    };

    // Calculate scenario total
    const scenarioTotal = (scenario) => {
        let total = scenario.baseLength;
        scenario.knots.forEach(knot => {
            total += knotConsumption(knot, ropeDiameter) / 12;
        });
        return Math.ceil(total);
    };

    return (
        <div className="space-y-5">
            {/* Header */}
            <div className="text-center">
                <h2 className="text-2xl font-display text-forest-pine">Rope Calculator</h2>
                <p className="text-sm font-body text-bark-gray">Know exactly how much rope you need</p>
            </div>

            {/* Mode Selector */}
            <div className="flex bg-parchment rounded-button p-1 gap-1">
                {[
                    { key: 'knot', label: 'By Knot' },
                    { key: 'scenario', label: 'By Scenario' },
                    { key: 'custom', label: 'Custom' },
                ].map(m => (
                    <button key={m.key} onClick={() => setMode(m.key)}
                        className={`flex-1 py-2 rounded-button text-xs font-display transition-all ${mode === m.key ? 'bg-forest-pine text-cream-white shadow-button' : 'text-bark-gray'}`}>
                        {m.label}
                    </button>
                ))}
            </div>

            {/* Rope Diameter Input */}
            <div className="bg-cream-white rounded-card shadow-card p-4">
                <label className="text-xs font-display text-forest-pine">Rope Diameter</label>
                <div className="flex gap-2 mt-2">
                    {[{ val: 0.25, label: '1/4"' }, { val: 0.375, label: '3/8"' }, { val: 0.5, label: '1/2"' }, { val: 0.625, label: '5/8"' }].map(d => (
                        <button key={d.val} onClick={() => setRopeDiameter(d.val)}
                            className={`flex-1 py-2 rounded-badge text-xs font-mono ${ropeDiameter === d.val ? 'bg-forest-pine text-cream-white' : 'bg-parchment text-bark-gray'}`}>
                            {d.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Mode: By Knot */}
            {mode === 'knot' && (
                <div className="space-y-3">
                    {/* Knot Selector */}
                    <div className="bg-cream-white rounded-card shadow-card p-4">
                        <label className="text-xs font-display text-forest-pine">Select Knot</label>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {Object.keys(KNOT_ROPE_FACTORS).map(knot => (
                                <button key={knot} onClick={() => setSelectedKnot(knot)}
                                    className={`px-3 py-1.5 rounded-chip text-xs font-body ${selectedKnot === knot ? 'bg-forest-pine text-cream-white' : 'bg-parchment text-bark-gray'}`}>
                                    {knot}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Rope Length */}
                    <div className="bg-cream-white rounded-card shadow-card p-4">
                        <label className="text-xs font-display text-forest-pine">Total Rope Length: {ropeLength} ft</label>
                        <input type="range" min="1" max="100" value={ropeLength} onChange={e => setRopeLength(parseInt(e.target.value))}
                            className="w-full mt-2 accent-forest-pine" />
                    </div>

                    {/* Result */}
                    <div className="bg-forest-pine rounded-card p-5 text-center">
                        <p className="text-xs font-mono text-cream-white opacity-70">Rope consumed by {selectedKnot}</p>
                        <p className="text-3xl font-display text-campfire-orange mt-1">{knotConsumption(selectedKnot, ropeDiameter)}"</p>
                        <div className="mt-3 pt-3 border-t border-cream-white border-opacity-20">
                            <p className="text-xs font-mono text-cream-white opacity-70">Usable rope remaining</p>
                            <p className="text-2xl font-display text-cream-white">{usableLength(ropeLength, selectedKnot, ropeDiameter)} ft</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Mode: By Scenario */}
            {mode === 'scenario' && (
                <div className="space-y-3">
                    {SCENARIOS.map((scenario, i) => (
                        <button key={i} onClick={() => setSelectedScenario(selectedScenario === i ? null : i)}
                            className="w-full bg-cream-white rounded-card shadow-knot-card p-4 text-left hover:shadow-card transition-all">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-display text-forest-pine">{scenario.name}</p>
                                    <p className="text-xs font-body text-bark-gray">{scenario.description}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xl font-display text-campfire-orange">{scenarioTotal(scenario)} ft</p>
                                    <p className="text-[10px] font-mono text-bark-gray">recommended</p>
                                </div>
                            </div>
                            {selectedScenario === i && (
                                <div className="mt-3 pt-3 border-t border-parchment space-y-1">
                                    <p className="text-xs font-mono text-bark-gray">Base length: {scenario.baseLength} ft</p>
                                    {scenario.knots.map((knot, j) => (
                                        <p key={j} className="text-xs font-mono text-bark-gray">
                                            + {knot}: {knotConsumption(knot, ropeDiameter)}" consumed
                                        </p>
                                    ))}
                                    <p className="text-xs font-display text-forest-pine mt-1">
                                        Tip: Always add 10-15% extra for safety!
                                    </p>
                                </div>
                            )}
                        </button>
                    ))}
                </div>
            )}

            {/* Mode: Custom */}
            {mode === 'custom' && (
                <div className="bg-cream-white rounded-card shadow-card p-4 text-center">
                    <span className="text-4xl block mb-2">🧮</span>
                    <p className="text-sm font-body text-bark-gray">Custom rope calculator coming soon!</p>
                    <p className="text-xs font-mono text-bark-gray mt-1">Build your own scenario with multiple knots and lengths.</p>
                </div>
            )}
        </div>
    );
};

export default RopeCalculator;
