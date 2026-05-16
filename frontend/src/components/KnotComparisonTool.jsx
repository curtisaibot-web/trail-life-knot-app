import React, { useState } from 'react';

const KNOT_DATA = {
    'Bowline': { strength: 60, ease: 3, speed: 3, reliability: 5, wetPerformance: 5, untieEase: 5, category: 'Loop', uses: ['Rescue', 'Sailing', 'Climbing'], funFact: 'Called the "King of Knots" — used by sailors for over 500 years.' },
    'Square Knot': { strength: 45, ease: 5, speed: 5, reliability: 3, wetPerformance: 2, untieEase: 4, category: 'Binding', uses: ['First Aid', 'Packages', 'Bandages'], funFact: 'Also called a "Reef Knot" — used to reef sails since ancient Egypt.' },
    'Clove Hitch': { strength: 60, ease: 4, speed: 5, reliability: 3, wetPerformance: 3, untieEase: 5, category: 'Hitch', uses: ['Lashing', 'Pioneering', 'Quick Tie'], funFact: 'Can be tied with one hand — a critical skill in emergencies.' },
    'Taut-Line Hitch': { strength: 65, ease: 3, speed: 3, reliability: 4, wetPerformance: 4, untieEase: 4, category: 'Hitch', uses: ['Tent Lines', 'Adjustable Loops', 'Tarps'], funFact: 'The only common knot that slides to adjust tension but holds under load.' },
    'Figure Eight': { strength: 75, ease: 5, speed: 5, reliability: 5, wetPerformance: 4, untieEase: 3, category: 'Stopper', uses: ['Climbing', 'Sailing', 'Rescue'], funFact: 'Preferred by climbers because it\'s easy to inspect visually.' },
    'Sheet Bend': { strength: 55, ease: 3, speed: 4, reliability: 4, wetPerformance: 3, untieEase: 4, category: 'Bend', uses: ['Joining Ropes', 'Nets', 'Flags'], funFact: 'One of the oldest known knots — found in Finnish fishing nets from 7000 BC.' },
    'Timber Hitch': { strength: 70, ease: 5, speed: 5, reliability: 4, wetPerformance: 4, untieEase: 5, category: 'Hitch', uses: ['Dragging Logs', 'Hoisting', 'Towing'], funFact: 'Tightens under load and releases instantly when slack — perfect for logging.' },
    'Two Half Hitches': { strength: 60, ease: 4, speed: 4, reliability: 4, wetPerformance: 3, untieEase: 4, category: 'Hitch', uses: ['Bear Bags', 'Mooring', 'General Purpose'], funFact: 'Essentially a clove hitch tied around the standing part of the rope.' },
    'Daisy Chain': { strength: 20, ease: 4, speed: 3, reliability: 2, wetPerformance: 3, untieEase: 5, category: 'Decorative', uses: ['Rope Storage', 'Shortening', 'Organization'], funFact: 'Reduces rope length to about 1/3 — perfect for keeping your pack tidy.' },
};

const ATTRIBUTES = [
    { key: 'strength', label: 'Strength', unit: '%', max: 100 },
    { key: 'ease', label: 'Ease of Tying', unit: '/5', max: 5 },
    { key: 'speed', label: 'Speed to Tie', unit: '/5', max: 5 },
    { key: 'reliability', label: 'Reliability', unit: '/5', max: 5 },
    { key: 'wetPerformance', label: 'Wet Performance', unit: '/5', max: 5 },
    { key: 'untieEase', label: 'Ease of Untying', unit: '/5', max: 5 },
];

const KnotComparisonTool = () => {
    const [knotA, setKnotA] = useState('Bowline');
    const [knotB, setKnotB] = useState('Clove Hitch');
    const knotNames = Object.keys(KNOT_DATA);

    const dataA = KNOT_DATA[knotA];
    const dataB = KNOT_DATA[knotB];

    const getBarWidth = (value, max) => `${(value / max) * 100}%`;
    const getWinner = (attr) => {
        const a = dataA[attr.key];
        const b = dataB[attr.key];
        if (a > b) return 'A';
        if (b > a) return 'B';
        return 'tie';
    };

    const totalScoreA = ATTRIBUTES.reduce((sum, attr) => sum + (attr.max === 100 ? dataA[attr.key] / 20 : dataA[attr.key]), 0);
    const totalScoreB = ATTRIBUTES.reduce((sum, attr) => sum + (attr.max === 100 ? dataB[attr.key] / 20 : dataB[attr.key]), 0);

    return (
        <div className="space-y-5">
            {/* Header */}
            <div className="text-center">
                <h2 className="text-2xl font-display text-forest-pine">Knot vs. Knot</h2>
                <p className="text-sm font-body text-bark-gray">Compare knots side by side</p>
            </div>

            {/* Selectors */}
            <div className="grid grid-cols-2 gap-3">
                <div className="bg-cream-white rounded-card shadow-card p-3">
                    <label className="text-xs font-display text-forest-pine block mb-1">Knot A</label>
                    <select value={knotA} onChange={e => setKnotA(e.target.value)}
                        className="w-full bg-parchment rounded-badge p-2 text-sm font-body text-charcoal outline-none">
                        {knotNames.map(k => <option key={k} value={k}>{k}</option>)}
                    </select>
                    <div className="mt-2 text-center">
                        <span className="text-xs font-mono bg-forest-pine text-cream-white px-2 py-0.5 rounded-chip">{dataA.category}</span>
                    </div>
                </div>
                <div className="bg-cream-white rounded-card shadow-card p-3">
                    <label className="text-xs font-display text-campfire-orange block mb-1">Knot B</label>
                    <select value={knotB} onChange={e => setKnotB(e.target.value)}
                        className="w-full bg-parchment rounded-badge p-2 text-sm font-body text-charcoal outline-none">
                        {knotNames.map(k => <option key={k} value={k}>{k}</option>)}
                    </select>
                    <div className="mt-2 text-center">
                        <span className="text-xs font-mono bg-campfire-orange text-cream-white px-2 py-0.5 rounded-chip">{dataB.category}</span>
                    </div>
                </div>
            </div>

            {/* Attribute Comparison Bars */}
            <div className="bg-cream-white rounded-card shadow-card p-4 space-y-3">
                {ATTRIBUTES.map(attr => {
                    const winner = getWinner(attr);
                    return (
                        <div key={attr.key}>
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-xs font-body text-bark-gray">{attr.label}</span>
                                <span className="text-[10px] font-mono text-bark-gray">
                                    {dataA[attr.key]}{attr.unit} vs {dataB[attr.key]}{attr.unit}
                                </span>
                            </div>
                            <div className="flex gap-1 h-4">
                                <div className="flex-1 bg-parchment rounded-l-full overflow-hidden flex justify-end">
                                    <div className={`h-full rounded-l-full transition-all ${winner === 'A' ? 'bg-forest-pine' : 'bg-forest-pine opacity-40'}`}
                                        style={{ width: getBarWidth(dataA[attr.key], attr.max) }} />
                                </div>
                                <div className="flex-1 bg-parchment rounded-r-full overflow-hidden">
                                    <div className={`h-full rounded-r-full transition-all ${winner === 'B' ? 'bg-campfire-orange' : 'bg-campfire-orange opacity-40'}`}
                                        style={{ width: getBarWidth(dataB[attr.key], attr.max) }} />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Overall Score */}
            <div className="grid grid-cols-2 gap-3">
                <div className={`rounded-card p-4 text-center ${totalScoreA >= totalScoreB ? 'bg-forest-pine text-cream-white' : 'bg-parchment text-bark-gray'}`}>
                    <p className="text-xs font-mono opacity-70">Overall Score</p>
                    <p className="text-3xl font-display">{totalScoreA.toFixed(1)}</p>
                    <p className="text-sm font-display">{knotA}</p>
                    {totalScoreA > totalScoreB && <span className="text-xs">🏆 Winner</span>}
                </div>
                <div className={`rounded-card p-4 text-center ${totalScoreB >= totalScoreA ? 'bg-campfire-orange text-cream-white' : 'bg-parchment text-bark-gray'}`}>
                    <p className="text-xs font-mono opacity-70">Overall Score</p>
                    <p className="text-3xl font-display">{totalScoreB.toFixed(1)}</p>
                    <p className="text-sm font-display">{knotB}</p>
                    {totalScoreB > totalScoreA && <span className="text-xs">🏆 Winner</span>}
                </div>
            </div>

            {/* Fun Facts */}
            <div className="grid grid-cols-2 gap-3">
                <div className="bg-cream-white rounded-card shadow-knot-card p-3">
                    <p className="text-xs font-display text-forest-pine mb-1">Did you know?</p>
                    <p className="text-xs font-body text-bark-gray italic">{dataA.funFact}</p>
                </div>
                <div className="bg-cream-white rounded-card shadow-knot-card p-3">
                    <p className="text-xs font-display text-campfire-orange mb-1">Did you know?</p>
                    <p className="text-xs font-body text-bark-gray italic">{dataB.funFact}</p>
                </div>
            </div>

            {/* Use Cases */}
            <div className="bg-cream-white rounded-card shadow-card p-4">
                <h4 className="font-display text-forest-pine text-sm mb-2">Best Used For</h4>
                <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                        {dataA.uses.map((use, i) => (
                            <span key={i} className="block text-xs font-body bg-forest-pine bg-opacity-10 text-forest-pine px-2 py-1 rounded-chip">▸ {use}</span>
                        ))}
                    </div>
                    <div className="space-y-1">
                        {dataB.uses.map((use, i) => (
                            <span key={i} className="block text-xs font-body bg-campfire-orange bg-opacity-10 text-campfire-orange px-2 py-1 rounded-chip">▸ {use}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KnotComparisonTool;
