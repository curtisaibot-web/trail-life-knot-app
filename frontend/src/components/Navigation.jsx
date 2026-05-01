import React from 'react';

function Navigation({ currentPage, setCurrentPage }) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '🏠' },
    { id: 'knot-viewer', label: 'Learn', icon: '📚' },
    { id: 'leaderboard', label: 'Leaderboard', icon: '🏆' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-trail-red bg-opacity-95 border-t-2 border-trail-red shadow-2xl">
      <div className="max-w-7xl mx-auto flex justify-around items-center">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={`flex-1 py-4 px-6 text-center font-bold transition-all ${
              currentPage === item.id
                ? 'bg-trail-blue text-white border-b-4 border-yellow-300'
                : 'text-white hover:bg-trail-red hover:bg-opacity-80'
            }`}
          >
            <div className="text-2xl mb-1">{item.icon}</div>
            <div className="text-xs">{item.label}</div>
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Navigation;
