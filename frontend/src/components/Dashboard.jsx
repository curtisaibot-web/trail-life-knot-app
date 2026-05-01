import React from 'react';

function Dashboard({ setCurrentPage }) {
  const knots = [
    { id: 1, name: 'Bowline', difficulty: 'Beginner', completed: true, xp: 100 },
    { id: 2, name: 'Square Knot', difficulty: 'Beginner', completed: true, xp: 100 },
    { id: 3, name: 'Clove Hitch', difficulty: 'Intermediate', completed: false, xp: 150 },
    { id: 4, name: 'Taut-Line Hitch', difficulty: 'Intermediate', completed: false, xp: 150 },
    { id: 5, name: 'Timber Hitch', difficulty: 'Beginner', completed: true, xp: 100 },
    { id: 6, name: 'Two Half Hitches', difficulty: 'Beginner', completed: true, xp: 100 },
  ];

  return (
    <div className="space-y-8">
      {/* Progress Tree Section */}
      <section className="bg-parchment bg-opacity-10 border-2 border-earthy-brown rounded-lg p-8 backdrop-blur-sm">
        <h2 className="text-2xl font-bold font-serif text-trail-red mb-6">Your Progress Tree</h2>
        
        <div className="flex justify-center items-end gap-12 mb-8">
          {/* Sapling (Navigator) */}
          <div className="text-center">
            <div className="w-24 h-32 bg-gradient-to-b from-green-400 to-green-600 rounded-full mx-auto mb-2 flex items-end justify-center">
              <div className="text-4xl">🌱</div>
            </div>
            <p className="font-bold text-trail-blue">Navigator</p>
            <p className="text-xs text-gray-300">4/6 Knots</p>
          </div>

          {/* Growth Arrow */}
          <div className="text-4xl text-trail-red animate-pulse">→</div>

          {/* Oak Tree (Adventurer - Locked) */}
          <div className="text-center opacity-50">
            <div className="w-24 h-32 bg-gradient-to-b from-green-600 to-green-800 rounded-full mx-auto mb-2 flex items-end justify-center">
              <div className="text-4xl">🌳</div>
            </div>
            <p className="font-bold text-gray-400">Adventurer</p>
            <p className="text-xs text-gray-400">Locked</p>
          </div>
        </div>

        <div className="bg-trail-red bg-opacity-20 border border-trail-red rounded p-4 text-center">
          <p className="text-sm">Complete 2 more Navigator knots to unlock Adventurer rank!</p>
        </div>
      </section>

      {/* Knots Grid */}
      <section>
        <h2 className="text-2xl font-bold font-serif text-trail-red mb-6">Navigator Knots</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {knots.map((knot) => (
            <div
              key={knot.id}
              className={`rounded-lg p-6 cursor-pointer transition-all transform hover:scale-105 ${
                knot.completed
                  ? 'bg-trail-blue bg-opacity-30 border-2 border-trail-blue'
                  : 'bg-earthy-brown bg-opacity-20 border-2 border-earthy-brown'
              }`}
              onClick={() => setCurrentPage('knot-viewer')}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold font-serif">{knot.name}</h3>
                {knot.completed && <span className="text-2xl">✅</span>}
              </div>
              
              <p className="text-sm text-gray-300 mb-2">Difficulty: {knot.difficulty}</p>
              <p className="text-sm text-yellow-300 font-bold">+{knot.xp} XP</p>
              
              <button className="mt-4 w-full bg-trail-red hover:bg-trail-red hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded transition-all">
                {knot.completed ? 'Review' : 'Learn'}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Daily Challenge */}
      <section className="bg-campfire bg-opacity-20 border-2 border-campfire rounded-lg p-8">
        <h2 className="text-2xl font-bold font-serif text-trail-red mb-4">🎯 Daily Challenge</h2>
        <div className="bg-black bg-opacity-30 rounded p-6">
          <p className="text-lg font-bold mb-2">Today's Knot: Bowline</p>
          <p className="text-sm text-gray-300 mb-4">Tie it correctly to earn 2x XP!</p>
          <button className="bg-trail-red hover:bg-trail-red hover:bg-opacity-80 text-white font-bold py-2 px-6 rounded transition-all">
            Start Challenge
          </button>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
