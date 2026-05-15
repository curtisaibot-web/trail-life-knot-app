import React from 'react';

const ProgressTree = ({ totalXp, currentRank }) => {
  // Determine growth stage based on XP (Max 1000 for Oak)
  const growthPercentage = Math.min(100, (totalXp / 1000) * 100);
  
  // Campy color palette references
  const colors = {
    trunk: '#5C4033', // earthy-brown
    leaves: '#2D4A3E', // forest-pine
    accent: '#E87A5D', // campfire-orange
    bg: '#F9F7F2' // parchment
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-[24px] shadow-card p-8 text-center relative overflow-hidden">
      {/* Background subtle texture */}
      <div className="absolute inset-0 opacity-5 bg-[url('/assets/textures/canvas-texture.png')] pointer-events-none"></div>
      
      <h3 className="text-2xl font-display text-forest-pine mb-2">The Mastery Tree</h3>
      <p className="text-sm text-bark-gray mb-8 font-body">Rank: <span className="font-bold text-campfire-orange">{currentRank}</span></p>

      {/* SVG Tree Illustration */}
      <div className="relative h-64 flex items-end justify-center mb-6">
        <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
          {/* Base/Ground */}
          <path d="M20 180 Q 100 160 180 180" stroke={colors.leaves} strokeWidth="4" fill="none" opacity="0.3" />
          
          {/* Dynamic Trunk - Height based on XP */}
          <g style={{ transform: `scaleY(${Math.max(0.2, growthPercentage / 100)})`, transformOrigin: 'bottom' }} className="transition-transform duration-1000 ease-out">
            <path d="M90 180 C 90 100 80 50 100 20 C 120 50 110 100 110 180 Z" fill={colors.trunk} />
            
            {/* Dynamic Canopy - Opacity and Scale based on XP */}
            <g style={{ opacity: Math.max(0, (growthPercentage - 20) / 80), transform: `scale(${Math.max(0, (growthPercentage - 20) / 80)})`, transformOrigin: 'center 60px' }} className="transition-all duration-1000 delay-300">
              <circle cx="100" cy="60" r="50" fill={colors.leaves} />
              <circle cx="60" cy="80" r="35" fill={colors.leaves} opacity="0.9" />
              <circle cx="140" cy="80" r="35" fill={colors.leaves} opacity="0.9" />
              <circle cx="80" cy="40" r="30" fill={colors.leaves} opacity="0.8" />
              <circle cx="120" cy="40" r="30" fill={colors.leaves} opacity="0.8" />
              
              {/* Badges/Fruits (appear at high XP) */}
              {growthPercentage > 80 && (
                <g className="animate-badge-pop">
                  <circle cx="70" cy="70" r="8" fill={colors.accent} />
                  <circle cx="130" cy="60" r="8" fill={colors.accent} />
                  <circle cx="100" cy="30" r="8" fill={colors.accent} />
                </g>
              )}
            </g>
          </g>
        </svg>
      </div>

      {/* XP Bar */}
      <div className="w-full bg-parchment rounded-full h-4 mb-2 overflow-hidden shadow-inset-field">
        <div 
          className="bg-campfire-gradient h-4 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${growthPercentage}%` }}
        ></div>
      </div>
      <div className="flex justify-between text-xs font-mono font-bold text-forest-pine">
        <span>{totalXp} XP</span>
        <span>1000 XP (Oak)</span>
      </div>
    </div>
  );
};

export default ProgressTree;
