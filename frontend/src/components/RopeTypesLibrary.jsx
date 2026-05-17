import React, { useState } from 'react';

/**
 * RopeTypesLibrary - Material Encyclopedia
 * 
 * A searchable encyclopedia of rope materials with real-world recommendations
 * for each knot. When a scout selects a knot, the app tells them which rope
 * works best and which to avoid.
 */

const ROPE_TYPES = [
  {
    id: 'paracord',
    name: 'Paracord (550)',
    category: 'Synthetic',
    diameter: '4mm (5/32")',
    breakingStrength: '550 lbs',
    material: 'Nylon',
    texture: 'Smooth, slightly slippery',
    weather: 'Excellent — UV resistant, waterproof',
    stretch: '30% before breaking',
    color: '#2D5A27',
    bestFor: ['Bowline', 'Figure Eight', 'Square Knot', 'Clove Hitch'],
    avoidFor: ['Taut-Line Hitch (slips under load)', 'Timber Hitch (too smooth)'],
    pros: [
      'Lightweight and compact',
      'Inner strands can be used separately',
      'Available in many colors',
      'Rot and mildew resistant',
    ],
    cons: [
      'Can be slippery for friction-dependent knots',
      'Melts when exposed to flame',
      'Stretches significantly under load',
    ],
    trailTip: 'Always carry at least 50 feet. The inner 7 strands can be pulled out for fishing line, sewing thread, or dental floss in emergencies.',
  },
  {
    id: 'manila',
    name: 'Manila Rope',
    category: 'Natural',
    diameter: '6-12mm (1/4" - 1/2")',
    breakingStrength: '540-2,380 lbs',
    material: 'Abaca plant fiber',
    texture: 'Rough, excellent grip',
    weather: 'Fair — degrades with moisture over time',
    stretch: '8-10%',
    color: '#C4A35A',
    bestFor: ['Taut-Line Hitch', 'Timber Hitch', 'Two Half Hitches', 'All friction knots'],
    avoidFor: ['Long-term outdoor use (rots)', 'Wet environments'],
    pros: [
      'Excellent grip — holds knots securely',
      'Traditional "scout rope" feel',
      'Biodegradable and eco-friendly',
      'Low stretch for reliable tension',
    ],
    cons: [
      'Rots when wet if not dried properly',
      'Heavier than synthetic alternatives',
      'Can cause splinters when worn',
      'Weakens with UV exposure over time',
    ],
    trailTip: 'The classic scout rope. Perfect for learning because its rough texture holds knots firmly. Always dry it after use to prevent rot.',
  },
  {
    id: 'nylon-braided',
    name: 'Braided Nylon',
    category: 'Synthetic',
    diameter: '3-12mm (1/8" - 1/2")',
    breakingStrength: '80-6,500 lbs',
    material: 'Nylon (polyamide)',
    texture: 'Smooth, round profile',
    weather: 'Excellent — UV and water resistant',
    stretch: '15-28%',
    color: '#E8E8E8',
    bestFor: ['Bowline', 'Figure Eight', 'Sheet Bend', 'Anchor hitches'],
    avoidFor: ['Taut-Line Hitch (too slippery)', 'Friction-dependent knots'],
    pros: [
      'Very strong for its weight',
      'Absorbs shock loads well',
      'Resistant to abrasion',
      'Easy to splice',
    ],
    cons: [
      'Slippery — some knots may slip',
      'Absorbs water (weakens 10-15% when wet)',
      'More expensive than polypropylene',
    ],
    trailTip: 'Great all-purpose rope. The stretch makes it ideal for anchoring because it absorbs sudden wind gusts without snapping.',
  },
  {
    id: 'polypropylene',
    name: 'Polypropylene',
    category: 'Synthetic',
    diameter: '3-12mm',
    breakingStrength: '80-3,800 lbs',
    material: 'Polypropylene',
    texture: 'Very smooth, waxy feel',
    weather: 'Good — floats on water, UV degrades',
    stretch: '10-20%',
    color: '#FFD700',
    bestFor: ['Water rescue (floats)', 'Temporary lashing', 'Clotheslines'],
    avoidFor: ['Almost all knots (extremely slippery)', 'Load-bearing applications', 'Climbing'],
    pros: [
      'Floats on water',
      'Lightweight and inexpensive',
      'Does not absorb water',
      'Chemical resistant',
    ],
    cons: [
      'Extremely slippery — knots untie easily',
      'Degrades quickly in sunlight',
      'Low melting point',
      'Weakest common rope type',
    ],
    trailTip: 'AVOID for knot practice. This rope is the #1 reason scouts think they "can\'t tie knots." It\'s too slippery. Only use for water activities where floating matters.',
  },
  {
    id: 'cotton',
    name: 'Cotton Rope',
    category: 'Natural',
    diameter: '3-12mm',
    breakingStrength: '200-1,200 lbs',
    material: 'Cotton fiber',
    texture: 'Soft, very comfortable',
    weather: 'Poor — absorbs water, mildews',
    stretch: '3-5%',
    color: '#F5F0E1',
    bestFor: ['Practice and learning', 'Decorative knots', 'Daisy Chain', 'Indoor use'],
    avoidFor: ['Outdoor load-bearing', 'Wet environments', 'Critical applications'],
    pros: [
      'Softest rope — no hand irritation',
      'Holds knots extremely well',
      'Easy to dye custom colors',
      'Perfect for beginners',
    ],
    cons: [
      'Weakest common rope type',
      'Rots and mildews when wet',
      'Shrinks when wet',
      'Not suitable for critical loads',
    ],
    trailTip: 'THE BEST rope for learning knots. Its soft texture and excellent grip make every knot easier to tie and inspect. Buy a 25-foot length for practice.',
  },
  {
    id: 'dyneema',
    name: 'Dyneema / Spectra (UHMWPE)',
    category: 'High-Performance',
    diameter: '2-8mm',
    breakingStrength: '1,500-12,000 lbs',
    material: 'Ultra-high-molecular-weight polyethylene',
    texture: 'Very smooth, slick',
    weather: 'Outstanding — virtually indestructible',
    stretch: '< 1%',
    color: '#A0A0A0',
    bestFor: ['Spliced connections', 'Hammock ridgelines', 'Bear bag hangs'],
    avoidFor: ['ALL traditional knots (too slippery)', 'Friction hitches', 'Beginners'],
    pros: [
      'Strongest rope per weight in existence',
      'Zero stretch for precise tensioning',
      'Floats on water',
      'UV and chemical resistant',
    ],
    cons: [
      'Extremely slippery — knots WILL fail',
      'Very expensive',
      'Low melting point (friction danger)',
      'Must be spliced, not knotted',
    ],
    trailTip: 'Advanced material only. Do NOT use for knot practice. This rope is designed to be spliced, not knotted. Knots in Dyneema can slip under load and cause serious injury.',
  },
];

const RopeTypesLibrary = () => {
  const [selectedRope, setSelectedRope] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const categories = ['all', 'Natural', 'Synthetic', 'High-Performance'];

  const filteredRopes = ROPE_TYPES.filter((rope) => {
    const matchesSearch =
      rope.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rope.material.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      filterCategory === 'all' || rope.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-parchment">
      {/* Header */}
      <div className="bg-gradient-to-r from-forest-pine to-forest-pine/80 p-6">
        <h1 className="text-parchment font-bold text-2xl font-arvo">
          Rope Types Library
        </h1>
        <p className="text-parchment/70 text-sm mt-1">
          Know your materials. Choose the right rope for every knot.
        </p>
      </div>

      {/* Search & Filter */}
      <div className="p-4 space-y-3">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search rope types..."
          className="w-full bg-white border border-forest-pine/20 rounded-xl px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-campfire-orange"
        />
        <div className="flex gap-2 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
                filterCategory === cat
                  ? 'bg-forest-pine text-parchment'
                  : 'bg-white text-charcoal/60 border border-forest-pine/20'
              }`}
            >
              {cat === 'all' ? 'All Types' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Rope Cards */}
      <div className="px-4 space-y-3">
        {filteredRopes.map((rope) => (
          <button
            key={rope.id}
            onClick={() => setSelectedRope(rope)}
            className="w-full bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow text-left"
          >
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full border-4"
                style={{ borderColor: rope.color, backgroundColor: `${rope.color}20` }}
              />
              <div className="flex-1">
                <h3 className="font-bold text-charcoal">{rope.name}</h3>
                <p className="text-charcoal/50 text-sm">{rope.category} — {rope.material}</p>
              </div>
              <div className="text-right">
                <p className="text-forest-pine font-bold text-sm">{rope.breakingStrength}</p>
                <p className="text-charcoal/40 text-xs">{rope.diameter}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Rope Detail Modal */}
      {selectedRope && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-parchment w-full rounded-t-3xl max-h-[85vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-parchment p-4 border-b border-forest-pine/10 flex items-center justify-between">
              <h2 className="font-bold text-xl text-charcoal font-arvo">
                {selectedRope.name}
              </h2>
              <button
                onClick={() => setSelectedRope(null)}
                className="w-8 h-8 rounded-full bg-forest-pine/10 flex items-center justify-center text-charcoal"
              >
                X
              </button>
            </div>

            <div className="p-4 space-y-4">
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Diameter', value: selectedRope.diameter },
                  { label: 'Strength', value: selectedRope.breakingStrength },
                  { label: 'Stretch', value: selectedRope.stretch },
                  { label: 'Weather', value: selectedRope.weather },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white rounded-xl p-3">
                    <p className="text-charcoal/40 text-xs">{stat.label}</p>
                    <p className="text-charcoal font-semibold text-sm">{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* Best For */}
              <div className="bg-forest-pine/5 rounded-xl p-4">
                <h3 className="text-forest-pine font-bold text-sm mb-2">Best For These Knots</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedRope.bestFor.map((knot) => (
                    <span
                      key={knot}
                      className="bg-forest-pine/10 text-forest-pine px-3 py-1 rounded-full text-xs font-semibold"
                    >
                      {knot}
                    </span>
                  ))}
                </div>
              </div>

              {/* Avoid For */}
              <div className="bg-campfire-orange/5 rounded-xl p-4">
                <h3 className="text-campfire-orange font-bold text-sm mb-2">Avoid For These Knots</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedRope.avoidFor.map((knot) => (
                    <span
                      key={knot}
                      className="bg-campfire-orange/10 text-campfire-orange px-3 py-1 rounded-full text-xs font-semibold"
                    >
                      {knot}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pros & Cons */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white rounded-xl p-3">
                  <h4 className="text-forest-pine font-bold text-xs mb-2">PROS</h4>
                  {selectedRope.pros.map((pro, i) => (
                    <p key={i} className="text-charcoal/70 text-xs mb-1">+ {pro}</p>
                  ))}
                </div>
                <div className="bg-white rounded-xl p-3">
                  <h4 className="text-campfire-orange font-bold text-xs mb-2">CONS</h4>
                  {selectedRope.cons.map((con, i) => (
                    <p key={i} className="text-charcoal/70 text-xs mb-1">- {con}</p>
                  ))}
                </div>
              </div>

              {/* Trail Tip */}
              <div className="bg-earthy-gold/10 border border-earthy-gold/30 rounded-xl p-4">
                <h3 className="text-earthy-gold font-bold text-sm mb-1">Trail Tip</h3>
                <p className="text-charcoal/70 text-sm">{selectedRope.trailTip}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RopeTypesLibrary;
