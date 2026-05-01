import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import KnotViewer from './components/KnotViewer';
import Leaderboard from './components/Leaderboard';
import Navigation from './components/Navigation';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [userRank, setUserRank] = useState('Navigator');
  const [userXP, setUserXP] = useState(1250);
  const [streak, setStreak] = useState(7);

  return (
    <div className="min-h-screen bg-forest-gradient text-white">
      {/* Header */}
      <header className="bg-trail-red bg-opacity-90 shadow-lg p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold font-serif">Trail Knotz</h1>
          <div className="flex gap-6 text-sm">
            <div className="text-center">
              <p className="text-xs text-gray-200">Rank</p>
              <p className="font-bold">{userRank}</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-200">XP</p>
              <p className="font-bold">{userXP}</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-200">Streak</p>
              <p className="font-bold text-yellow-300">🔥 {streak}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6">
        {currentPage === 'dashboard' && <Dashboard setCurrentPage={setCurrentPage} />}
        {currentPage === 'knot-viewer' && <KnotViewer setCurrentPage={setCurrentPage} />}
        {currentPage === 'leaderboard' && <Leaderboard />}
      </main>

      {/* Navigation */}
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
