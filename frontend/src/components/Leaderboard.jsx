import React from 'react';

function Leaderboard() {
  const troops = [
    { rank: 1, name: 'Troop 42 (Your Troop)', xp: 5420, members: 12, badge: '🥇' },
    { rank: 2, name: 'Troop 15', xp: 5100, members: 10, badge: '🥈' },
    { rank: 3, name: 'Troop 8', xp: 4890, members: 11, badge: '🥉' },
    { rank: 4, name: 'Troop 33', xp: 4650, members: 9, badge: '4️⃣' },
    { rank: 5, name: 'Troop 21', xp: 4320, members: 8, badge: '5️⃣' },
  ];

  const individuals = [
    { rank: 1, name: 'You', xp: 1250, streak: 7, badge: '👑' },
    { rank: 2, name: 'Marcus (Troop 42)', xp: 1180, streak: 5, badge: '🥈' },
    { rank: 3, name: 'Sarah (Troop 42)', xp: 1050, streak: 12, badge: '🥉' },
    { rank: 4, name: 'James (Troop 15)', xp: 980, streak: 3, badge: '4️⃣' },
    { rank: 5, name: 'Alex (Troop 8)', xp: 920, streak: 8, badge: '5️⃣' },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold font-serif text-trail-red">Leaderboards</h1>

      {/* Troop Leaderboard */}
      <section className="bg-parchment bg-opacity-10 border-2 border-trail-blue rounded-lg p-8">
        <h2 className="text-2xl font-bold font-serif text-trail-red mb-6">🏕️ Troop Rankings</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-trail-blue">
                <th className="text-left py-3 px-4 font-bold text-trail-blue">Rank</th>
                <th className="text-left py-3 px-4 font-bold text-trail-blue">Troop Name</th>
                <th className="text-left py-3 px-4 font-bold text-trail-blue">Total XP</th>
                <th className="text-left py-3 px-4 font-bold text-trail-blue">Members</th>
                <th className="text-center py-3 px-4 font-bold text-trail-blue">Badge</th>
              </tr>
            </thead>
            <tbody>
              {troops.map((troop) => (
                <tr
                  key={troop.rank}
                  className={`border-b border-gray-700 hover:bg-trail-blue hover:bg-opacity-10 transition-all ${
                    troop.rank === 1 ? 'bg-trail-red bg-opacity-20' : ''
                  }`}
                >
                  <td className="py-4 px-4 font-bold text-trail-red">{troop.rank}</td>
                  <td className="py-4 px-4">{troop.name}</td>
                  <td className="py-4 px-4 font-bold text-yellow-300">{troop.xp} XP</td>
                  <td className="py-4 px-4">{troop.members} members</td>
                  <td className="py-4 px-4 text-center text-2xl">{troop.badge}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Individual Leaderboard */}
      <section className="bg-parchment bg-opacity-10 border-2 border-trail-blue rounded-lg p-8">
        <h2 className="text-2xl font-bold font-serif text-trail-red mb-6">🏆 Individual Rankings</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-trail-blue">
                <th className="text-left py-3 px-4 font-bold text-trail-blue">Rank</th>
                <th className="text-left py-3 px-4 font-bold text-trail-blue">Trailman</th>
                <th className="text-left py-3 px-4 font-bold text-trail-blue">XP</th>
                <th className="text-left py-3 px-4 font-bold text-trail-blue">Streak</th>
                <th className="text-center py-3 px-4 font-bold text-trail-blue">Badge</th>
              </tr>
            </thead>
            <tbody>
              {individuals.map((person) => (
                <tr
                  key={person.rank}
                  className={`border-b border-gray-700 hover:bg-trail-blue hover:bg-opacity-10 transition-all ${
                    person.rank === 1 ? 'bg-trail-red bg-opacity-20' : ''
                  }`}
                >
                  <td className="py-4 px-4 font-bold text-trail-red">{person.rank}</td>
                  <td className="py-4 px-4">{person.name}</td>
                  <td className="py-4 px-4 font-bold text-yellow-300">{person.xp} XP</td>
                  <td className="py-4 px-4">🔥 {person.streak} days</td>
                  <td className="py-4 px-4 text-center text-2xl">{person.badge}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Stats Summary */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-trail-red bg-opacity-20 border-2 border-trail-red rounded-lg p-6 text-center">
          <p className="text-3xl font-bold text-trail-red">42</p>
          <p className="text-gray-300 text-sm mt-2">Troops Competing</p>
        </div>
        <div className="bg-trail-blue bg-opacity-20 border-2 border-trail-blue rounded-lg p-6 text-center">
          <p className="text-3xl font-bold text-trail-blue">1,247</p>
          <p className="text-gray-300 text-sm mt-2">Total Trailmen</p>
        </div>
        <div className="bg-forest-green bg-opacity-20 border-2 border-forest-green rounded-lg p-6 text-center">
          <p className="text-3xl font-bold text-green-400">15,420</p>
          <p className="text-gray-300 text-sm mt-2">Knots Tied Today</p>
        </div>
        <div className="bg-campfire bg-opacity-20 border-2 border-campfire rounded-lg p-6 text-center">
          <p className="text-3xl font-bold text-campfire">🔥 847</p>
          <p className="text-gray-300 text-sm mt-2">Active Streaks</p>
        </div>
      </section>
    </div>
  );
}

export default Leaderboard;
