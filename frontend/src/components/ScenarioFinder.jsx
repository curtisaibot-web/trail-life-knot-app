import React, { useState } from 'react';

const scenarios = [
  { id: 1, problem: 'Secure a tent line to a stake', knot: 'Taut-Line Hitch', category: 'Camping', icon: '⛺' },
  { id: 2, problem: 'Tie two ropes of equal size together', knot: 'Square Knot', category: 'General', icon: '🪢' },
  { id: 3, problem: 'Create a secure loop at the end of a rope', knot: 'Bowline', category: 'Rescue', icon: '🔁' },
  { id: 4, problem: 'Attach a rope to a post or rail', knot: 'Clove Hitch', category: 'Camping', icon: '🪵' },
  { id: 5, problem: 'Stop a rope from slipping through a hole', knot: 'Figure Eight', category: 'Climbing', icon: '🧗' },
  { id: 6, problem: 'Shorten a rope without cutting it', knot: 'Daisy Chain', category: 'Storage', icon: '🌼' },
  { id: 7, problem: 'Tie a rope to a ring or hook', knot: 'Two Half Hitches', category: 'Sailing', icon: '⚓' },
  { id: 8, problem: 'Drag a log or heavy object', knot: 'Timber Hitch', category: 'Pioneering', icon: '🌲' },
  { id: 9, problem: 'Join two ropes of different sizes', knot: 'Sheet Bend', category: 'General', icon: '🔗' },
  { id: 10, problem: 'Create a loop that tightens under load', knot: 'Running Bowline', category: 'Rescue', icon: '🎯' },
];

const categories = ['All', 'Camping', 'General', 'Rescue', 'Climbing', 'Sailing', 'Pioneering', 'Storage'];

const ScenarioFinder = ({ onSelectKnot }) => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = scenarios.filter(s => {
    const matchesSearch = s.problem.toLowerCase().includes(search.toLowerCase()) ||
                          s.knot.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || s.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-display text-forest-pine mb-2">Scenario Finder</h2>
        <p className="text-bark-gray font-body text-sm">What do you need to do in the field?</p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-bark-gray text-xl">🔍</span>
        <input
          type="text"
          placeholder="e.g., 'secure a tent line'..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-4 rounded-button border-2 border-parchment bg-cream-white font-body text-charcoal shadow-inset-field focus:outline-none focus:border-forest-pine transition-all"
        />
      </div>

      {/* Category Filter Chips */}
      <div className="flex flex-wrap gap-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-chip font-body text-sm font-semibold transition-all ${
              activeCategory === cat
                ? 'bg-forest-pine text-cream-white shadow-button'
                : 'bg-parchment text-forest-pine border border-forest-pine hover:bg-forest-pine hover:text-cream-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results */}
      <div className="space-y-3">
        {filtered.length === 0 ? (
          <div className="text-center py-12 text-bark-gray font-body">
            <p className="text-4xl mb-3">🔎</p>
            <p>No scenarios found. Try a different search.</p>
          </div>
        ) : (
          filtered.map(scenario => (
            <div
              key={scenario.id}
              onClick={() => onSelectKnot && onSelectKnot(scenario.knot)}
              className="bg-cream-white rounded-card shadow-knot-card p-5 flex items-center gap-4 cursor-pointer hover:shadow-card-hover transition-all hover:-translate-y-1 group"
            >
              <span className="text-3xl">{scenario.icon}</span>
              <div className="flex-1">
                <p className="font-body text-charcoal text-sm mb-1">{scenario.problem}</p>
                <p className="font-display text-forest-pine font-bold text-lg">{scenario.knot}</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="bg-parchment text-bark-gray text-xs font-mono px-2 py-1 rounded-chip">{scenario.category}</span>
                <span className="text-campfire-orange text-xl group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ScenarioFinder;
