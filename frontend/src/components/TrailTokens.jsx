import React, { useState, useEffect } from 'react';

/**
 * TrailTokens - Virtual Currency Economy
 * 
 * Scouts earn "Trail Tokens" through streaks, challenges, and troop missions.
 * Tokens can be spent on cosmetic upgrades: custom rope colors in the 3D viewer,
 * new tree species for the Progress Tree, or unlocking "Legendary Knot" stories.
 */

const SHOP_ITEMS = [
  // Rope Colors
  {
    id: 'rope-gold',
    name: 'Golden Rope',
    description: 'A shimmering gold rope for the 3D Skill Lab viewer.',
    category: 'Rope Colors',
    price: 50,
    icon: '🪢',
    rarity: 'common',
    type: 'rope_color',
    value: '#D4AF37',
  },
  {
    id: 'rope-crimson',
    name: 'Crimson Rope',
    description: 'Deep red rope that stands out in any knot.',
    category: 'Rope Colors',
    price: 75,
    icon: '🪢',
    rarity: 'uncommon',
    type: 'rope_color',
    value: '#DC143C',
  },
  {
    id: 'rope-midnight',
    name: 'Midnight Blue Rope',
    description: 'A dark, mysterious rope for night-time practice.',
    category: 'Rope Colors',
    price: 100,
    icon: '🪢',
    rarity: 'rare',
    type: 'rope_color',
    value: '#191970',
  },
  {
    id: 'rope-rainbow',
    name: 'Rainbow Rope',
    description: 'A multicolor rope that shifts hue along its length.',
    category: 'Rope Colors',
    price: 250,
    icon: '🌈',
    rarity: 'legendary',
    type: 'rope_color',
    value: 'rainbow',
  },
  // Tree Species
  {
    id: 'tree-pine',
    name: 'Pine Tree',
    description: 'Replace your Progress Tree with a tall, noble pine.',
    category: 'Tree Species',
    price: 150,
    icon: '🌲',
    rarity: 'uncommon',
    type: 'tree_species',
    value: 'pine',
  },
  {
    id: 'tree-cherry',
    name: 'Cherry Blossom',
    description: 'A beautiful cherry blossom tree with pink petals.',
    category: 'Tree Species',
    price: 200,
    icon: '🌸',
    rarity: 'rare',
    type: 'tree_species',
    value: 'cherry',
  },
  {
    id: 'tree-redwood',
    name: 'Giant Redwood',
    description: 'The mightiest tree in the forest. A true legend.',
    category: 'Tree Species',
    price: 500,
    icon: '🌳',
    rarity: 'legendary',
    type: 'tree_species',
    value: 'redwood',
  },
  // Legendary Stories
  {
    id: 'story-bowline-history',
    name: 'The Bowline\'s Secret',
    description: 'Unlock the legendary history of the "King of Knots."',
    category: 'Legendary Stories',
    price: 100,
    icon: '📜',
    rarity: 'rare',
    type: 'story_unlock',
    value: 'bowline-legend',
  },
  {
    id: 'story-sailors-knots',
    name: 'Sailors of the Seven Seas',
    description: 'The untold story of how knots shaped naval history.',
    category: 'Legendary Stories',
    price: 150,
    icon: '⚓',
    rarity: 'rare',
    type: 'story_unlock',
    value: 'sailors-legend',
  },
  // Streak Shields
  {
    id: 'streak-shield-1',
    name: 'Streak Shield (1 Day)',
    description: 'Protect your streak for 1 day if you miss practice.',
    category: 'Power-Ups',
    price: 30,
    icon: '🛡️',
    rarity: 'common',
    type: 'streak_shield',
    value: 1,
  },
  {
    id: 'streak-shield-3',
    name: 'Streak Shield (3 Days)',
    description: 'Protect your streak for 3 days. Perfect for camping trips!',
    category: 'Power-Ups',
    price: 75,
    icon: '🛡️',
    rarity: 'uncommon',
    type: 'streak_shield',
    value: 3,
  },
  // XP Boosters
  {
    id: 'xp-boost-2x',
    name: '2x XP Boost (1 Hour)',
    description: 'Double your XP earnings for the next hour.',
    category: 'Power-Ups',
    price: 60,
    icon: '⚡',
    rarity: 'uncommon',
    type: 'xp_boost',
    value: { multiplier: 2, duration: 3600 },
  },
];

const EARNING_METHODS = [
  { action: 'Complete a daily challenge', tokens: 10, icon: '📅' },
  { action: 'Maintain a 7-day streak', tokens: 25, icon: '🔥' },
  { action: 'Master a new knot (Gold)', tokens: 50, icon: '🥇' },
  { action: 'Win a Knot Duel', tokens: 15, icon: '⚔️' },
  { action: 'Complete a Troop Mission', tokens: 30, icon: '🎯' },
  { action: 'Write a Knot Journal entry', tokens: 5, icon: '📓' },
  { action: 'Help a Buddy master a knot', tokens: 20, icon: '🤝' },
  { action: 'Unlock a Time Capsule', tokens: 10, icon: '🔓' },
];

const TrailTokens = ({ userId }) => {
  const [balance, setBalance] = useState(385);
  const [ownedItems, setOwnedItems] = useState(['rope-gold', 'streak-shield-1']);
  const [activeCategory, setActiveCategory] = useState('all');
  const [showPurchaseModal, setShowPurchaseModal] = useState(null);
  const [showEarningGuide, setShowEarningGuide] = useState(false);
  const [transactionHistory, setTransactionHistory] = useState([
    { type: 'earn', amount: 50, reason: 'Mastered Bowline', date: '2026-05-15' },
    { type: 'earn', amount: 25, reason: '7-day streak bonus', date: '2026-05-14' },
    { type: 'spend', amount: -50, reason: 'Purchased Golden Rope', date: '2026-05-13' },
    { type: 'earn', amount: 10, reason: 'Daily challenge', date: '2026-05-13' },
  ]);

  const categories = ['all', ...new Set(SHOP_ITEMS.map((i) => i.category))];

  const filteredItems = SHOP_ITEMS.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  const getRarityStyle = (rarity) => {
    switch (rarity) {
      case 'legendary':
        return { bg: 'bg-gradient-to-r from-yellow-100 to-amber-100', border: 'border-amber-300', text: 'text-amber-700' };
      case 'rare':
        return { bg: 'bg-gradient-to-r from-purple-50 to-indigo-50', border: 'border-purple-300', text: 'text-purple-700' };
      case 'uncommon':
        return { bg: 'bg-gradient-to-r from-blue-50 to-cyan-50', border: 'border-blue-300', text: 'text-blue-700' };
      default:
        return { bg: 'bg-white', border: 'border-gray-200', text: 'text-gray-600' };
    }
  };

  const handlePurchase = (item) => {
    if (balance < item.price || ownedItems.includes(item.id)) return;

    setBalance((prev) => prev - item.price);
    setOwnedItems((prev) => [...prev, item.id]);
    setTransactionHistory((prev) => [
      { type: 'spend', amount: -item.price, reason: `Purchased ${item.name}`, date: new Date().toISOString().split('T')[0] },
      ...prev,
    ]);
    setShowPurchaseModal(null);
  };

  return (
    <div className="min-h-screen bg-parchment">
      {/* Header with Balance */}
      <div className="bg-gradient-to-r from-earthy-gold to-amber-500 p-6">
        <h1 className="text-white font-bold text-2xl font-arvo">Trail Tokens</h1>
        <div className="mt-3 flex items-center gap-3">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-3">
            <p className="text-white/70 text-xs">Your Balance</p>
            <p className="text-white font-bold text-3xl">{balance}</p>
          </div>
          <button
            onClick={() => setShowEarningGuide(!showEarningGuide)}
            className="bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-3 text-white text-sm"
          >
            How to Earn
          </button>
        </div>
      </div>

      {/* Earning Guide (Collapsible) */}
      {showEarningGuide && (
        <div className="mx-4 mt-4 bg-earthy-gold/5 border border-earthy-gold/20 rounded-2xl p-4">
          <h3 className="font-bold text-charcoal text-sm mb-3">Ways to Earn Trail Tokens</h3>
          <div className="space-y-2">
            {EARNING_METHODS.map((method, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span>{method.icon}</span>
                  <p className="text-charcoal/70 text-sm">{method.action}</p>
                </div>
                <span className="text-earthy-gold font-bold text-sm">+{method.tokens}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Category Filters */}
      <div className="p-4">
        <div className="flex gap-2 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
                activeCategory === cat
                  ? 'bg-forest-pine text-parchment'
                  : 'bg-white text-charcoal/60 border border-forest-pine/20'
              }`}
            >
              {cat === 'all' ? 'All Items' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Shop Grid */}
      <div className="px-4 grid grid-cols-2 gap-3 pb-24">
        {filteredItems.map((item) => {
          const style = getRarityStyle(item.rarity);
          const isOwned = ownedItems.includes(item.id);
          const canAfford = balance >= item.price;

          return (
            <button
              key={item.id}
              onClick={() => !isOwned && setShowPurchaseModal(item)}
              className={`${style.bg} border ${style.border} rounded-2xl p-4 text-left transition-all ${
                isOwned ? 'opacity-60' : 'hover:shadow-md'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-3xl">{item.icon}</span>
                <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${style.text} bg-white/50`}>
                  {item.rarity}
                </span>
              </div>
              <h3 className="font-bold text-charcoal text-sm">{item.name}</h3>
              <p className="text-charcoal/40 text-xs mt-1 line-clamp-2">
                {item.description}
              </p>
              <div className="mt-3 flex items-center justify-between">
                {isOwned ? (
                  <span className="text-forest-pine font-bold text-xs">Owned</span>
                ) : (
                  <span
                    className={`font-bold text-sm ${
                      canAfford ? 'text-earthy-gold' : 'text-red-400'
                    }`}
                  >
                    {item.price} Tokens
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Transaction History */}
      <div className="px-4 pb-24">
        <h3 className="font-bold text-charcoal mb-3">Recent Transactions</h3>
        <div className="space-y-2">
          {transactionHistory.slice(0, 10).map((tx, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-3 flex items-center justify-between"
            >
              <div>
                <p className="text-charcoal text-sm">{tx.reason}</p>
                <p className="text-charcoal/30 text-xs">{tx.date}</p>
              </div>
              <span
                className={`font-bold text-sm ${
                  tx.type === 'earn' ? 'text-forest-pine' : 'text-campfire-orange'
                }`}
              >
                {tx.type === 'earn' ? '+' : ''}{tx.amount}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Purchase Modal */}
      {showPurchaseModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-end justify-center">
          <div className="bg-parchment rounded-t-3xl w-full max-w-md p-6">
            <div className="text-center mb-4">
              <span className="text-5xl">{showPurchaseModal.icon}</span>
              <h3 className="font-bold text-charcoal text-xl mt-2 font-arvo">
                {showPurchaseModal.name}
              </h3>
              <p className="text-charcoal/50 text-sm mt-1">
                {showPurchaseModal.description}
              </p>
            </div>

            <div className="bg-white rounded-xl p-4 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-charcoal/60 text-sm">Price</span>
                <span className="text-earthy-gold font-bold text-lg">
                  {showPurchaseModal.price} Tokens
                </span>
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-charcoal/60 text-sm">Your Balance</span>
                <span className="text-charcoal font-bold text-lg">{balance} Tokens</span>
              </div>
              <hr className="my-2" />
              <div className="flex items-center justify-between">
                <span className="text-charcoal/60 text-sm">After Purchase</span>
                <span
                  className={`font-bold text-lg ${
                    balance - showPurchaseModal.price >= 0
                      ? 'text-forest-pine'
                      : 'text-red-500'
                  }`}
                >
                  {balance - showPurchaseModal.price} Tokens
                </span>
              </div>
            </div>

            <button
              onClick={() => handlePurchase(showPurchaseModal)}
              disabled={balance < showPurchaseModal.price}
              className={`w-full font-bold py-4 rounded-full mb-2 ${
                balance >= showPurchaseModal.price
                  ? 'bg-earthy-gold text-white'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {balance >= showPurchaseModal.price
                ? 'Purchase'
                : 'Not Enough Tokens'}
            </button>
            <button
              onClick={() => setShowPurchaseModal(null)}
              className="w-full text-charcoal/40 text-sm py-2"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrailTokens;
