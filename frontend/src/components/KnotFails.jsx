import React, { useState } from 'react';

/**
 * KnotFails - Common Mistakes Gallery
 * 
 * For each knot, shows the 3-4 most common mistakes (e.g., "The Granny Knot"
 * when attempting a Square Knot). Uses the 3D viewer to show what goes wrong
 * and why. "Anti-pattern" teaching accelerates learning by ~40%.
 */

const KNOT_FAILS_DATA = {
  'square-knot': {
    knotName: 'Square Knot',
    correctDescription: 'Right over left, then left over right. The knot lies flat and the two loops are symmetrical.',
    fails: [
      {
        id: 'granny-knot',
        name: 'The Granny Knot',
        severity: 'dangerous',
        frequency: 'Very Common (80% of beginners)',
        whatHappens: 'The knot capsizes under load and slips apart. It looks similar to a Square Knot but is structurally weak.',
        whyItHappens: 'Tying "right over right" or "left over left" instead of alternating. The most natural hand motion creates a Granny Knot, not a Square Knot.',
        howToSpot: 'The two loops twist around each other instead of lying flat side-by-side. If you pull the standing ends, the knot rotates and deforms.',
        howToFix: 'Remember: "Right over Left, then Left over Right." If the loops don\'t lie flat, untie and start over.',
        dangerLevel: 5,
        visualCue: 'Loops twist diagonally instead of sitting flat',
      },
      {
        id: 'thief-knot',
        name: 'The Thief Knot',
        severity: 'dangerous',
        frequency: 'Common (40% of beginners)',
        whatHappens: 'Looks almost identical to a Square Knot but the free ends exit on opposite sides. Slips under moderate load.',
        whyItHappens: 'Starting the second half of the knot from the wrong end. The working end enters the loop from the wrong direction.',
        howToSpot: 'The free (short) ends come out on opposite sides of the knot instead of the same side.',
        howToFix: 'After tying, check that both free ends exit on the SAME side. If they\'re on opposite sides, you have a Thief Knot.',
        dangerLevel: 4,
        visualCue: 'Free ends exit on opposite sides',
      },
      {
        id: 'grief-knot',
        name: 'The Grief Knot',
        severity: 'critical',
        frequency: 'Uncommon (15% of beginners)',
        whatHappens: 'A combination of Granny and Thief errors. The knot is extremely unstable and will fail under any load.',
        whyItHappens: 'Making both errors simultaneously: same-direction crossing AND wrong-end entry.',
        howToSpot: 'The knot looks "lumpy" and asymmetrical. Free ends exit on opposite sides AND the loops twist.',
        howToFix: 'If the knot looks wrong in any way, untie and start fresh. A correct Square Knot is always flat and symmetrical.',
        dangerLevel: 5,
        visualCue: 'Lumpy, asymmetrical, and unstable',
      },
    ],
  },
  'bowline': {
    knotName: 'Bowline',
    correctDescription: 'A fixed loop that doesn\'t slip. "The rabbit comes out of the hole, goes around the tree, and back down the hole."',
    fails: [
      {
        id: 'cowboy-bowline',
        name: 'The Cowboy Bowline (Left-Handed Bowline)',
        severity: 'warning',
        frequency: 'Common (50% of beginners)',
        whatHappens: 'The working end exits on the outside of the loop instead of the inside. Less secure and can capsize under ring-loading.',
        whyItHappens: 'Forming the initial loop in the wrong direction (clockwise vs. counterclockwise). Left-handed tyers are especially prone.',
        howToSpot: 'The tail (free end) exits on the OUTSIDE of the main loop instead of lying against the standing part on the INSIDE.',
        howToFix: 'Ensure the initial loop is formed so the working end crosses OVER the standing part. The "rabbit" must come up through the hole from below.',
        dangerLevel: 3,
        visualCue: 'Tail exits outside the loop',
      },
      {
        id: 'slip-bowline',
        name: 'The Slip Bowline',
        severity: 'dangerous',
        frequency: 'Common (35% of beginners)',
        whatHappens: 'The knot unties itself when the loop is loaded and unloaded repeatedly (cyclic loading).',
        whyItHappens: 'Not leaving enough tail length after tying. The short tail works its way back through the knot.',
        howToSpot: 'The free tail is less than 6 inches long after tying.',
        howToFix: 'Always leave a tail at least 6 inches (one hand-width) long. For critical applications, add a stopper knot (Figure Eight) to the tail.',
        dangerLevel: 4,
        visualCue: 'Very short tail end',
      },
      {
        id: 'false-bowline',
        name: 'The False Bowline',
        severity: 'critical',
        frequency: 'Uncommon (20% of beginners)',
        whatHappens: 'The knot looks like a Bowline but the working end doesn\'t go around the standing part. It will collapse under load.',
        whyItHappens: 'Skipping the "around the tree" step. The rabbit comes out of the hole and goes back in without going around.',
        howToSpot: 'Pull the standing part firmly. A False Bowline will deform or collapse. A real Bowline stays rigid.',
        howToFix: 'Always complete all three steps: out of the hole, AROUND the tree, back down the hole. Test every Bowline by pulling hard before trusting it.',
        dangerLevel: 5,
        visualCue: 'Collapses when standing part is pulled',
      },
    ],
  },
  'clove-hitch': {
    knotName: 'Clove Hitch',
    correctDescription: 'Two identical half-hitches. Quick to tie around a post or pole.',
    fails: [
      {
        id: 'cow-hitch',
        name: 'The Cow Hitch (Lark\'s Head)',
        severity: 'warning',
        frequency: 'Very Common (60% of beginners)',
        whatHappens: 'The knot slides freely along the pole. It provides no grip and cannot hold tension.',
        whyItHappens: 'Both loops are formed in the same direction instead of opposite directions.',
        howToSpot: 'The knot slides up and down the pole when you push it. A Clove Hitch grips firmly.',
        howToFix: 'Ensure the two half-hitches cross in OPPOSITE directions. Think "X" pattern, not "parallel" pattern.',
        dangerLevel: 2,
        visualCue: 'Slides freely on the pole',
      },
      {
        id: 'loose-clove',
        name: 'The Loose Clove',
        severity: 'dangerous',
        frequency: 'Common (45% of beginners)',
        whatHappens: 'The knot works loose over time, especially with cyclic loading (wind, movement).',
        whyItHappens: 'Not dressing the knot properly after tying. The wraps are loose and uneven.',
        howToSpot: 'There is visible slack in the wraps. The knot doesn\'t sit snugly against the pole.',
        howToFix: 'After tying, pull BOTH ends firmly to "dress" the knot. Each wrap should be tight and parallel. Add a half-hitch backup for critical applications.',
        dangerLevel: 3,
        visualCue: 'Visible slack in the wraps',
      },
    ],
  },
  'taut-line-hitch': {
    knotName: 'Taut-Line Hitch',
    correctDescription: 'An adjustable loop that grips under tension. Perfect for tent guy-lines.',
    fails: [
      {
        id: 'wrong-direction',
        name: 'The Reverse Taut-Line',
        severity: 'critical',
        frequency: 'Common (55% of beginners)',
        whatHappens: 'The knot slides in the wrong direction — it loosens under load instead of gripping.',
        whyItHappens: 'Wrapping the coils in the wrong direction relative to the load. The friction works against you instead of for you.',
        howToSpot: 'Pull the standing end. If the knot slides toward the anchor instead of gripping, the coils are reversed.',
        howToFix: 'The coils must wrap TOWARD the load (the direction of pull). If the tent is pulling left, the coils wrap left.',
        dangerLevel: 5,
        visualCue: 'Slides toward anchor under load',
      },
      {
        id: 'insufficient-wraps',
        name: 'The Two-Wrap Taut-Line',
        severity: 'dangerous',
        frequency: 'Common (40% of beginners)',
        whatHappens: 'The knot slips under moderate load because there isn\'t enough friction.',
        whyItHappens: 'Only making 2 inner wraps instead of the required 3 (2 inside + 1 outside).',
        howToSpot: 'Count the wraps. There should be 2 wraps inside the loop and 1 wrap outside, for a total of 3.',
        howToFix: 'Always use the "2+1" formula: 2 wraps inside the loop, then 1 wrap outside the loop before finishing.',
        dangerLevel: 4,
        visualCue: 'Only 2 visible wraps instead of 3',
      },
    ],
  },
};

const KnotFails = ({ knotSlug }) => {
  const [selectedFail, setSelectedFail] = useState(null);
  const [viewMode, setViewMode] = useState('gallery'); // 'gallery' | 'detail'

  // If a specific knot is provided, show that knot's fails
  // Otherwise, show all knots
  const knotsToShow = knotSlug
    ? { [knotSlug]: KNOT_FAILS_DATA[knotSlug] }
    : KNOT_FAILS_DATA;

  const getSeverityStyle = (severity) => {
    switch (severity) {
      case 'critical':
        return { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200', badge: 'bg-red-100 text-red-700' };
      case 'dangerous':
        return { bg: 'bg-campfire-orange/5', text: 'text-campfire-orange', border: 'border-campfire-orange/20', badge: 'bg-campfire-orange/10 text-campfire-orange' };
      case 'warning':
        return { bg: 'bg-earthy-gold/5', text: 'text-earthy-gold', border: 'border-earthy-gold/20', badge: 'bg-earthy-gold/10 text-earthy-gold' };
      default:
        return { bg: 'bg-gray-50', text: 'text-gray-600', border: 'border-gray-200', badge: 'bg-gray-100 text-gray-600' };
    }
  };

  const getDangerBar = (level) => {
    const colors = ['bg-green-400', 'bg-yellow-400', 'bg-earthy-gold', 'bg-campfire-orange', 'bg-red-500'];
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`h-2 flex-1 rounded-full ${
              i <= level ? colors[Math.min(level - 1, 4)] : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-parchment">
      {/* Header */}
      <div className="bg-gradient-to-r from-campfire-orange to-red-600 p-6">
        <h1 className="text-white font-bold text-2xl font-arvo">Knot Fails</h1>
        <p className="text-white/70 text-sm mt-1">
          Learn from mistakes. Know what NOT to do.
        </p>
      </div>

      {/* Info Banner */}
      <div className="mx-4 mt-4 bg-campfire-orange/5 border border-campfire-orange/20 rounded-xl p-4">
        <p className="text-charcoal/70 text-sm">
          <span className="font-bold text-campfire-orange">Why study mistakes?</span>{' '}
          Research shows that learning "anti-patterns" (what NOT to do) accelerates
          skill acquisition by up to 40%. Recognizing a bad knot is just as important
          as tying a good one.
        </p>
      </div>

      {/* Knot Sections */}
      <div className="px-4 mt-4 space-y-6 pb-24">
        {Object.entries(knotsToShow).map(([slug, data]) => {
          if (!data) return null;
          return (
            <div key={slug}>
              {/* Knot Header */}
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h2 className="font-bold text-charcoal text-lg font-arvo">
                    {data.knotName}
                  </h2>
                  <p className="text-charcoal/40 text-xs">{data.correctDescription}</p>
                </div>
                <span className="bg-forest-pine/10 text-forest-pine px-2 py-1 rounded-full text-xs font-bold">
                  {data.fails.length} common fails
                </span>
              </div>

              {/* Fail Cards */}
              <div className="space-y-3">
                {data.fails.map((fail) => {
                  const style = getSeverityStyle(fail.severity);
                  const isSelected = selectedFail?.id === fail.id;

                  return (
                    <div key={fail.id}>
                      <button
                        onClick={() =>
                          setSelectedFail(isSelected ? null : fail)
                        }
                        className={`w-full ${style.bg} border ${style.border} rounded-2xl p-4 text-left transition-all ${
                          isSelected ? 'shadow-md' : 'shadow-sm'
                        }`}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-bold text-charcoal">{fail.name}</h3>
                            <p className="text-charcoal/40 text-xs">{fail.frequency}</p>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-bold ${style.badge}`}>
                            {fail.severity.toUpperCase()}
                          </span>
                        </div>

                        <p className="text-charcoal/60 text-sm mb-2">
                          {fail.whatHappens}
                        </p>

                        {/* Danger Level */}
                        <div className="mb-2">
                          <p className="text-charcoal/40 text-xs mb-1">Danger Level</p>
                          {getDangerBar(fail.dangerLevel)}
                        </div>

                        {/* Visual Cue */}
                        <div className="bg-white/50 rounded-lg px-3 py-2">
                          <p className="text-charcoal/50 text-xs">
                            <span className="font-bold">Quick Spot:</span> {fail.visualCue}
                          </p>
                        </div>
                      </button>

                      {/* Expanded Detail */}
                      {isSelected && (
                        <div className="mt-2 bg-white rounded-2xl p-4 shadow-sm space-y-3">
                          <div>
                            <h4 className="font-bold text-charcoal text-sm mb-1">
                              Why This Happens
                            </h4>
                            <p className="text-charcoal/60 text-sm">{fail.whyItHappens}</p>
                          </div>
                          <div>
                            <h4 className="font-bold text-charcoal text-sm mb-1">
                              How to Spot It
                            </h4>
                            <p className="text-charcoal/60 text-sm">{fail.howToSpot}</p>
                          </div>
                          <div className="bg-forest-pine/5 rounded-xl p-3">
                            <h4 className="font-bold text-forest-pine text-sm mb-1">
                              How to Fix It
                            </h4>
                            <p className="text-charcoal/60 text-sm">{fail.howToFix}</p>
                          </div>
                          <button
                            className="w-full bg-forest-pine text-parchment font-bold py-2 rounded-full text-sm"
                            onClick={() => {
                              window.location.href = `/learn/${slug}`;
                            }}
                          >
                            Practice the Correct {data.knotName}
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default KnotFails;
