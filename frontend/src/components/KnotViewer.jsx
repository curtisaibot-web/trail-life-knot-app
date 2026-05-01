import React, { useState } from 'react';

function KnotViewer({ setCurrentPage }) {
  const [playbackSpeed, setPlaybackSpeed] = useState(50);
  const [isLeftHanded, setIsLeftHanded] = useState(false);
  const [ropeColor, setRopeColor] = useState('single');
  const [isPlaying, setIsPlaying] = useState(false);

  const knot = {
    name: 'Bowline',
    description: 'A loop knot that creates a fixed loop at the end of a rope.',
    uses: ['Rescue', 'Sailing', 'Rock Climbing'],
    difficulty: 'Beginner',
    steps: [
      'Create a small loop (the "rabbit hole")',
      'Pass the rope end through the loop',
      'Wrap around the standing line',
      'Pass back through the loop',
      'Tighten securely',
    ],
  };

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <button
        onClick={() => setCurrentPage('dashboard')}
        className="text-trail-red hover:text-trail-red hover:underline font-bold"
      >
        ← Back to Dashboard
      </button>

      {/* Knot Header */}
      <div className="bg-parchment bg-opacity-10 border-2 border-trail-blue rounded-lg p-6">
        <h1 className="text-4xl font-bold font-serif text-trail-red mb-2">{knot.name}</h1>
        <p className="text-gray-300 mb-4">{knot.description}</p>
        <div className="flex gap-4 flex-wrap">
          {knot.uses.map((use) => (
            <span key={use} className="bg-trail-blue bg-opacity-30 px-3 py-1 rounded text-sm">
              {use}
            </span>
          ))}
        </div>
      </div>

      {/* 3D Viewer Section */}
      <div className="bg-black bg-opacity-40 border-2 border-earthy-brown rounded-lg p-8">
        <h2 className="text-2xl font-bold font-serif text-trail-red mb-4">3D Knot Viewer</h2>
        
        {/* Placeholder for 3D Model */}
        <div className="w-full h-96 bg-gradient-to-b from-gray-800 to-black rounded-lg flex items-center justify-center border-2 border-dashed border-earthy-brown mb-6">
          <div className="text-center">
            <p className="text-4xl mb-2">🪢</p>
            <p className="text-gray-400">3D Knot Model (Unity Integration)</p>
            <p className="text-xs text-gray-500 mt-2">Rotate • Zoom • Trace Path</p>
          </div>
        </div>

        {/* Playback Controls */}
        <div className="bg-trail-red bg-opacity-20 border border-trail-red rounded-lg p-6 mb-6">
          <h3 className="font-bold mb-4 text-trail-red">Playback Controls</h3>
          
          {/* Play/Pause */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-trail-red hover:bg-trail-red hover:bg-opacity-80 text-white font-bold py-2 px-6 rounded transition-all"
            >
              {isPlaying ? '⏸ Pause' : '▶ Play'}
            </button>
            <button className="bg-trail-blue hover:bg-trail-blue hover:bg-opacity-80 text-white font-bold py-2 px-6 rounded transition-all">
              🔄 Reset
            </button>
          </div>

          {/* Scrubber Slider */}
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2">Animation Progress</label>
            <input
              type="range"
              min="0"
              max="100"
              value={playbackSpeed}
              onChange={(e) => setPlaybackSpeed(e.target.value)}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>0%</span>
              <span>{playbackSpeed}%</span>
              <span>100%</span>
            </div>
          </div>

          {/* Speed Control */}
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2">Speed</label>
            <select className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white">
              <option>0.5x (Slow)</option>
              <option selected>1x (Normal)</option>
              <option>1.5x (Fast)</option>
              <option>2x (Very Fast)</option>
            </select>
          </div>
        </div>

        {/* Customization Options */}
        <div className="bg-trail-blue bg-opacity-20 border border-trail-blue rounded-lg p-6">
          <h3 className="font-bold mb-4 text-trail-blue">Customization</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Rope Color */}
            <div>
              <label className="block text-sm font-bold mb-2">Rope Color</label>
              <select
                value={ropeColor}
                onChange={(e) => setRopeColor(e.target.value)}
                className="w-full bg-gray-800 border border-gray-600 rounded px-3 py-2 text-white"
              >
                <option value="single">Single Color (Blue)</option>
                <option value="dual">Dual Color (Blue/Red)</option>
                <option value="contrast">High Contrast (Black/White)</option>
              </select>
            </div>

            {/* Left-Handed Mode */}
            <div>
              <label className="block text-sm font-bold mb-2">Hand Preference</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsLeftHanded(false)}
                  className={`px-4 py-2 rounded font-bold transition-all ${
                    !isLeftHanded
                      ? 'bg-trail-red text-white'
                      : 'bg-gray-700 text-gray-300'
                  }`}
                >
                  Right-Handed
                </button>
                <button
                  onClick={() => setIsLeftHanded(true)}
                  className={`px-4 py-2 rounded font-bold transition-all ${
                    isLeftHanded
                      ? 'bg-trail-red text-white'
                      : 'bg-gray-700 text-gray-300'
                  }`}
                >
                  Left-Handed
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Steps Breakdown */}
      <div className="bg-parchment bg-opacity-10 border-2 border-earthy-brown rounded-lg p-6">
        <h2 className="text-2xl font-bold font-serif text-trail-red mb-4">Step-by-Step Guide</h2>
        <ol className="space-y-3">
          {knot.steps.map((step, index) => (
            <li key={index} className="flex gap-4">
              <span className="bg-trail-red text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                {index + 1}
              </span>
              <p className="text-gray-200 pt-1">{step}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* Test Button */}
      <div className="flex gap-4">
        <button className="flex-1 bg-trail-red hover:bg-trail-red hover:bg-opacity-80 text-white font-bold py-3 px-6 rounded transition-all text-lg">
          📸 Test Your Knot
        </button>
        <button className="flex-1 bg-trail-blue hover:bg-trail-blue hover:bg-opacity-80 text-white font-bold py-3 px-6 rounded transition-all text-lg">
          ✅ Mark as Complete
        </button>
      </div>
    </div>
  );
}

export default KnotViewer;
