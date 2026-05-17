import React, { useState } from 'react';

/**
 * KnotChains - Multi-Knot Sequences
 * 
 * Teaches scouts to combine knots into real-world systems.
 * Example: "Build a Tarp Shelter" requires Taut-Line Hitch + Two Half Hitches + Bowline.
 * Awards bonus XP for completing the entire chain.
 */

const KNOT_CHAINS = [
  {
    id: 'tarp-shelter',
    name: 'Build a Tarp Shelter',
    description: 'Set up a waterproof shelter using a tarp and rope between two trees.',
    difficulty: 'Intermediate',
    estimatedTime: '15 min',
    xpReward: 150,
    bonusXp: 50,
    scenario: 'Camping',
    steps: [
      {
        order: 1,
        knotSlug: 'bowline',
        knotName: 'Bowline',
        purpose: 'Create a fixed loop to anchor the ridgeline to the first tree.',
        instruction: 'Tie a Bowline around the first tree at chest height. This creates a non-slip loop that will hold the ridgeline securely.',
      },
      {
        order: 2,
        knotSlug: 'taut-line-hitch',
        knotName: 'Taut-Line Hitch',
        purpose: 'Tension the ridgeline between the two trees.',
        instruction: 'Run the rope to the second tree and tie a Taut-Line Hitch. This allows you to adjust the tension without untying the knot.',
      },
      {
        order: 3,
        knotSlug: 'two-half-hitches',
        knotName: 'Two Half Hitches',
        purpose: 'Secure the tarp corners to stakes or anchor points.',
        instruction: 'Drape the tarp over the ridgeline. Use Two Half Hitches to tie each corner to a stake or low branch.',
      },
    ],
  },
  {
    id: 'bear-bag-hang',
    name: 'Bear Bag Hang (PCT Method)',
    description: 'Hang your food bag 12+ feet off the ground to protect it from bears.',
    difficulty: 'Advanced',
    estimatedTime: '20 min',
    xpReward: 200,
    bonusXp: 75,
    scenario: 'Backcountry',
    steps: [
      {
        order: 1,
        knotSlug: 'bowline',
        knotName: 'Bowline',
        purpose: 'Attach a rock sack to the throwing line.',
        instruction: 'Tie a Bowline to create a secure loop around a small rock bag. This will be your throwing weight.',
      },
      {
        order: 2,
        knotSlug: 'clove-hitch',
        knotName: 'Clove Hitch',
        purpose: 'Secure the food bag to the hanging line.',
        instruction: 'After throwing the line over a branch (12+ feet high), tie a Clove Hitch to attach your food bag to the line.',
      },
      {
        order: 3,
        knotSlug: 'two-half-hitches',
        knotName: 'Two Half Hitches',
        purpose: 'Lock the line in place at the correct height.',
        instruction: 'Hoist the bag to the desired height and tie Two Half Hitches around the tree trunk to lock it in place.',
      },
    ],
  },
  {
    id: 'flagpole-setup',
    name: 'Flagpole Rope Setup',
    description: 'Rig a rope system to raise and lower a flag on a pole.',
    difficulty: 'Beginner',
    estimatedTime: '10 min',
    xpReward: 100,
    bonusXp: 25,
    scenario: 'Campsite',
    steps: [
      {
        order: 1,
        knotSlug: 'clove-hitch',
        knotName: 'Clove Hitch',
        purpose: 'Attach the halyard to the flag grommets.',
        instruction: 'Use a Clove Hitch to attach the rope to the top grommet of the flag. This allows easy removal later.',
      },
      {
        order: 2,
        knotSlug: 'square-knot',
        knotName: 'Square Knot',
        purpose: 'Secure the bottom grommet to the halyard.',
        instruction: 'Tie a Square Knot to attach the rope to the bottom grommet. Ensure it lies flat and is easy to untie.',
      },
      {
        order: 3,
        knotSlug: 'two-half-hitches',
        knotName: 'Two Half Hitches',
        purpose: 'Cleat the halyard to the pole base.',
        instruction: 'After raising the flag, secure the rope to the cleat or pole base with Two Half Hitches.',
      },
    ],
  },
  {
    id: 'rescue-line',
    name: 'Emergency Rescue Line',
    description: 'Deploy a throwable rescue line for water or cliff rescue scenarios.',
    difficulty: 'Advanced',
    estimatedTime: '10 min',
    xpReward: 250,
    bonusXp: 100,
    scenario: 'Emergency',
    steps: [
      {
        order: 1,
        knotSlug: 'bowline',
        knotName: 'Bowline',
        purpose: 'Create a rescue loop for the victim to grab or step into.',
        instruction: 'Tie a Bowline at the throwing end to create a large, non-slip loop. This is the "rescue loop" the victim will grab.',
      },
      {
        order: 2,
        knotSlug: 'figure-eight',
        knotName: 'Figure Eight',
        purpose: 'Create a stopper knot to prevent the rope from slipping through hands.',
        instruction: 'Tie a Figure Eight knot 3 feet from the rescue loop. This gives the victim a "grip point" to hold onto.',
      },
      {
        order: 3,
        knotSlug: 'two-half-hitches',
        knotName: 'Two Half Hitches',
        purpose: 'Anchor the rescue line to a tree or post.',
        instruction: 'Secure your end of the rope to the nearest solid anchor (tree, post, vehicle) with Two Half Hitches before throwing.',
      },
    ],
  },
  {
    id: 'hammock-setup',
    name: 'Hammock Setup',
    description: 'Hang a hammock between two trees with proper tension and height.',
    difficulty: 'Beginner',
    estimatedTime: '10 min',
    xpReward: 100,
    bonusXp: 25,
    scenario: 'Camping',
    steps: [
      {
        order: 1,
        knotSlug: 'timber-hitch',
        knotName: 'Timber Hitch',
        purpose: 'Wrap the strap around the first tree.',
        instruction: 'Use a Timber Hitch to secure the hammock strap to the first tree at about 5 feet high. The Timber Hitch grips tighter under load.',
      },
      {
        order: 2,
        knotSlug: 'taut-line-hitch',
        knotName: 'Taut-Line Hitch',
        purpose: 'Adjust the tension on the second tree.',
        instruction: 'Attach to the second tree with a Taut-Line Hitch. This lets you fine-tune the hammock sag to a comfortable 30-degree angle.',
      },
    ],
  },
];

const KnotChains = ({ userProgress = {} }) => {
  const [selectedChain, setSelectedChain] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState({});
  const [filterScenario, setFilterScenario] = useState('all');

  const scenarios = ['all', ...new Set(KNOT_CHAINS.map((c) => c.scenario))];

  const filteredChains = KNOT_CHAINS.filter(
    (chain) => filterScenario === 'all' || chain.scenario === filterScenario
  );

  const getChainProgress = (chainId) => {
    const chain = KNOT_CHAINS.find((c) => c.id === chainId);
    if (!chain) return 0;
    const completed = chain.steps.filter(
      (step) => userProgress[step.knotSlug] === 'mastered'
    ).length;
    return Math.round((completed / chain.steps.length) * 100);
  };

  const handleStepComplete = (chainId, stepOrder) => {
    setCompletedSteps((prev) => ({
      ...prev,
      [`${chainId}-${stepOrder}`]: true,
    }));

    const chain = KNOT_CHAINS.find((c) => c.id === chainId);
    if (chain && stepOrder < chain.steps.length) {
      setActiveStep(stepOrder); // Move to next step (0-indexed, so stepOrder = next)
    }
  };

  const isChainComplete = (chainId) => {
    const chain = KNOT_CHAINS.find((c) => c.id === chainId);
    if (!chain) return false;
    return chain.steps.every((step) => completedSteps[`${chainId}-${step.order}`]);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-forest-pine/10 text-forest-pine';
      case 'Intermediate': return 'bg-earthy-gold/10 text-earthy-gold';
      case 'Advanced': return 'bg-campfire-orange/10 text-campfire-orange';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-parchment">
      {/* Header */}
      <div className="bg-gradient-to-r from-forest-pine to-forest-pine/80 p-6">
        <h1 className="text-parchment font-bold text-2xl font-arvo">Knot Chains</h1>
        <p className="text-parchment/70 text-sm mt-1">
          Master real-world knot systems. Combine knots to solve problems.
        </p>
      </div>

      {/* Scenario Filters */}
      <div className="p-4">
        <div className="flex gap-2 overflow-x-auto pb-1">
          {scenarios.map((scenario) => (
            <button
              key={scenario}
              onClick={() => setFilterScenario(scenario)}
              className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
                filterScenario === scenario
                  ? 'bg-forest-pine text-parchment'
                  : 'bg-white text-charcoal/60 border border-forest-pine/20'
              }`}
            >
              {scenario === 'all' ? 'All Scenarios' : scenario}
            </button>
          ))}
        </div>
      </div>

      {/* Chain List or Detail View */}
      {!selectedChain ? (
        <div className="px-4 space-y-3 pb-24">
          {filteredChains.map((chain) => {
            const progress = getChainProgress(chain.id);
            return (
              <button
                key={chain.id}
                onClick={() => {
                  setSelectedChain(chain);
                  setActiveStep(0);
                }}
                className="w-full bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow text-left"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-charcoal text-lg">{chain.name}</h3>
                    <p className="text-charcoal/50 text-sm mt-1">{chain.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(chain.difficulty)}`}>
                    {chain.difficulty}
                  </span>
                  <span className="text-charcoal/40 text-xs">{chain.estimatedTime}</span>
                  <span className="text-charcoal/40 text-xs">{chain.steps.length} knots</span>
                  <span className="text-campfire-orange font-bold text-xs ml-auto">
                    +{chain.xpReward + chain.bonusXp} XP
                  </span>
                </div>
                {/* Progress Bar */}
                <div className="mt-3 bg-forest-pine/10 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-forest-pine h-full rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </button>
            );
          })}
        </div>
      ) : (
        /* Chain Detail View */
        <div className="px-4 pb-24">
          <button
            onClick={() => setSelectedChain(null)}
            className="text-forest-pine font-semibold text-sm mb-4 flex items-center gap-1"
          >
            &larr; Back to Chains
          </button>

          <div className="bg-white rounded-2xl p-4 shadow-sm mb-4">
            <h2 className="font-bold text-xl text-charcoal font-arvo">
              {selectedChain.name}
            </h2>
            <p className="text-charcoal/50 text-sm mt-1">{selectedChain.description}</p>
            <div className="flex items-center gap-3 mt-3">
              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(selectedChain.difficulty)}`}>
                {selectedChain.difficulty}
              </span>
              <span className="text-charcoal/40 text-xs">{selectedChain.estimatedTime}</span>
            </div>
          </div>

          {/* Step-by-Step Chain */}
          <div className="space-y-3">
            {selectedChain.steps.map((step, index) => {
              const isCompleted = completedSteps[`${selectedChain.id}-${step.order}`];
              const isActive = index === activeStep;

              return (
                <div
                  key={step.order}
                  className={`rounded-2xl p-4 transition-all ${
                    isCompleted
                      ? 'bg-forest-pine/10 border-2 border-forest-pine/30'
                      : isActive
                      ? 'bg-white border-2 border-campfire-orange shadow-md'
                      : 'bg-white/50 border-2 border-transparent opacity-60'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {/* Step Number */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                        isCompleted
                          ? 'bg-forest-pine text-parchment'
                          : isActive
                          ? 'bg-campfire-orange text-white'
                          : 'bg-gray-200 text-gray-400'
                      }`}
                    >
                      {isCompleted ? '✓' : step.order}
                    </div>

                    <div className="flex-1">
                      <h3 className="font-bold text-charcoal">{step.knotName}</h3>
                      <p className="text-forest-pine text-sm font-semibold mt-1">
                        {step.purpose}
                      </p>
                      {isActive && (
                        <div className="mt-3">
                          <p className="text-charcoal/70 text-sm">{step.instruction}</p>
                          <div className="flex gap-2 mt-3">
                            <button
                              className="flex-1 bg-forest-pine text-parchment font-bold py-2 rounded-full text-sm"
                              onClick={() => {
                                // Navigate to Skill Lab for this knot
                                window.location.href = `/learn/${step.knotSlug}`;
                              }}
                            >
                              Practice This Knot
                            </button>
                            <button
                              className="flex-1 bg-campfire-orange text-white font-bold py-2 rounded-full text-sm"
                              onClick={() => handleStepComplete(selectedChain.id, step.order)}
                            >
                              Mark Complete
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Chain Complete Banner */}
          {isChainComplete(selectedChain.id) && (
            <div className="mt-4 bg-gradient-to-r from-earthy-gold to-campfire-orange rounded-2xl p-6 text-center">
              <div className="text-4xl mb-2">🏆</div>
              <h3 className="text-white font-bold text-xl">Chain Complete!</h3>
              <p className="text-white/80 text-sm mt-1">
                You earned {selectedChain.xpReward} XP + {selectedChain.bonusXp} Bonus XP
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default KnotChains;
