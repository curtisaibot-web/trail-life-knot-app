import React, { useState, useRef, useEffect } from 'react';

/**
 * KnotRadio - Ambient Background Audio
 * 
 * While practicing, scouts can turn on "Campfire Sounds," "Forest Rain,"
 * or "River Stream" ambient audio. Creates a calming, immersive environment
 * that makes practice feel less like homework and more like being outdoors.
 */

const AMBIENT_TRACKS = [
  {
    id: 'campfire',
    name: 'Campfire Crackling',
    description: 'Warm, crackling fire with gentle night sounds',
    icon: '🔥',
    category: 'Night Camp',
    audioUrl: '/audio/ambient/campfire.mp3',
    color: '#E87A5D',
    bgGradient: 'from-orange-900/20 to-red-900/20',
  },
  {
    id: 'forest-rain',
    name: 'Forest Rain',
    description: 'Gentle rain falling through a canopy of leaves',
    icon: '🌧️',
    category: 'Forest',
    audioUrl: '/audio/ambient/forest-rain.mp3',
    color: '#2D4A3E',
    bgGradient: 'from-green-900/20 to-teal-900/20',
  },
  {
    id: 'river-stream',
    name: 'River Stream',
    description: 'Babbling brook with birds in the background',
    icon: '🏞️',
    category: 'Water',
    audioUrl: '/audio/ambient/river-stream.mp3',
    color: '#4A90D9',
    bgGradient: 'from-blue-900/20 to-cyan-900/20',
  },
  {
    id: 'mountain-wind',
    name: 'Mountain Wind',
    description: 'High-altitude wind with distant eagle calls',
    icon: '🏔️',
    category: 'Mountain',
    audioUrl: '/audio/ambient/mountain-wind.mp3',
    color: '#8B9DAF',
    bgGradient: 'from-slate-900/20 to-gray-900/20',
  },
  {
    id: 'night-forest',
    name: 'Night Forest',
    description: 'Crickets, owls, and rustling leaves under the stars',
    icon: '🌙',
    category: 'Night Camp',
    audioUrl: '/audio/ambient/night-forest.mp3',
    color: '#1B2838',
    bgGradient: 'from-indigo-900/20 to-purple-900/20',
  },
  {
    id: 'ocean-waves',
    name: 'Ocean Waves',
    description: 'Rhythmic waves crashing on a rocky shore',
    icon: '🌊',
    category: 'Water',
    audioUrl: '/audio/ambient/ocean-waves.mp3',
    color: '#1E6091',
    bgGradient: 'from-blue-800/20 to-blue-900/20',
  },
  {
    id: 'thunderstorm',
    name: 'Distant Thunderstorm',
    description: 'Rolling thunder with heavy rain on a tent',
    icon: '⛈️',
    category: 'Weather',
    audioUrl: '/audio/ambient/thunderstorm.mp3',
    color: '#4A4A6A',
    bgGradient: 'from-gray-800/20 to-indigo-900/20',
  },
  {
    id: 'morning-birds',
    name: 'Morning Birdsong',
    description: 'Dawn chorus of songbirds in a meadow',
    icon: '🐦',
    category: 'Forest',
    audioUrl: '/audio/ambient/morning-birds.mp3',
    color: '#7CB342',
    bgGradient: 'from-green-700/20 to-yellow-800/20',
  },
];

const KnotRadio = ({ isMinimized = false, onToggleMinimize }) => {
  const [activeTrack, setActiveTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [filterCategory, setFilterCategory] = useState('all');
  const [sleepTimer, setSleepTimer] = useState(null);
  const [sleepTimeRemaining, setSleepTimeRemaining] = useState(0);
  const audioRef = useRef(null);
  const timerRef = useRef(null);

  const categories = ['all', ...new Set(AMBIENT_TRACKS.map((t) => t.category))];

  const filteredTracks = AMBIENT_TRACKS.filter(
    (track) => filterCategory === 'all' || track.category === filterCategory
  );

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handlePlay = (track) => {
    // Stop current audio
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    if (activeTrack?.id === track.id && isPlaying) {
      // Toggle off if same track
      setIsPlaying(false);
      setActiveTrack(null);
      return;
    }

    // Create new audio
    const audio = new Audio(track.audioUrl);
    audio.loop = true;
    audio.volume = volume;
    audio.play().catch((err) => {
      console.error('Audio playback failed:', err);
    });

    audioRef.current = audio;
    setActiveTrack(track);
    setIsPlaying(true);
  };

  const handlePause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setActiveTrack(null);
    setIsPlaying(false);
    clearSleepTimer();
  };

  const startSleepTimer = (minutes) => {
    clearSleepTimer();
    setSleepTimer(minutes);
    setSleepTimeRemaining(minutes * 60);

    timerRef.current = setInterval(() => {
      setSleepTimeRemaining((prev) => {
        if (prev <= 1) {
          handleStop();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const clearSleepTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setSleepTimer(null);
    setSleepTimeRemaining(0);
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  // Minimized floating player
  if (isMinimized && activeTrack) {
    return (
      <div className="fixed bottom-20 left-4 right-4 z-40">
        <div
          className={`bg-gradient-to-r ${activeTrack.bgGradient} backdrop-blur-lg bg-white/90 rounded-2xl p-3 shadow-lg border border-forest-pine/10`}
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">{activeTrack.icon}</span>
            <div className="flex-1">
              <p className="text-charcoal font-semibold text-sm">{activeTrack.name}</p>
              {sleepTimer && (
                <p className="text-charcoal/40 text-xs">
                  Sleep in {formatTime(sleepTimeRemaining)}
                </p>
              )}
            </div>
            <button
              onClick={handlePause}
              className="w-10 h-10 rounded-full bg-forest-pine text-parchment flex items-center justify-center"
            >
              {isPlaying ? '⏸' : '▶'}
            </button>
            <button
              onClick={handleStop}
              className="w-10 h-10 rounded-full bg-campfire-orange/20 text-campfire-orange flex items-center justify-center"
            >
              ⏹
            </button>
            {onToggleMinimize && (
              <button
                onClick={onToggleMinimize}
                className="w-10 h-10 rounded-full bg-forest-pine/10 text-forest-pine flex items-center justify-center"
              >
                ↑
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-parchment">
      {/* Header */}
      <div className="bg-gradient-to-r from-forest-pine to-forest-pine/80 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-parchment font-bold text-2xl font-arvo">Knot Radio</h1>
            <p className="text-parchment/70 text-sm mt-1">
              Immersive sounds for focused practice.
            </p>
          </div>
          {activeTrack && onToggleMinimize && (
            <button
              onClick={onToggleMinimize}
              className="bg-parchment/20 text-parchment px-3 py-1 rounded-full text-sm"
            >
              Minimize
            </button>
          )}
        </div>
      </div>

      {/* Now Playing */}
      {activeTrack && (
        <div className={`mx-4 mt-4 bg-gradient-to-r ${activeTrack.bgGradient} bg-white rounded-2xl p-6 shadow-md`}>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{activeTrack.icon}</span>
            <div>
              <h2 className="font-bold text-charcoal text-xl">{activeTrack.name}</h2>
              <p className="text-charcoal/50 text-sm">{activeTrack.description}</p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <button
              onClick={handlePause}
              className="w-14 h-14 rounded-full bg-forest-pine text-parchment flex items-center justify-center text-xl shadow-md"
            >
              {isPlaying ? '⏸' : '▶'}
            </button>
            <button
              onClick={handleStop}
              className="w-10 h-10 rounded-full bg-campfire-orange/20 text-campfire-orange flex items-center justify-center"
            >
              ⏹
            </button>
          </div>

          {/* Volume Slider */}
          <div className="flex items-center gap-3">
            <span className="text-charcoal/40 text-xs">🔈</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="flex-1 accent-forest-pine h-2"
            />
            <span className="text-charcoal/40 text-xs">🔊</span>
          </div>

          {/* Sleep Timer */}
          <div className="mt-4">
            <p className="text-charcoal/50 text-xs mb-2">Sleep Timer</p>
            <div className="flex gap-2">
              {[15, 30, 45, 60].map((mins) => (
                <button
                  key={mins}
                  onClick={() => startSleepTimer(mins)}
                  className={`flex-1 py-2 rounded-full text-xs font-semibold transition-colors ${
                    sleepTimer === mins
                      ? 'bg-forest-pine text-parchment'
                      : 'bg-white/50 text-charcoal/60'
                  }`}
                >
                  {mins}m
                </button>
              ))}
              {sleepTimer && (
                <button
                  onClick={clearSleepTimer}
                  className="px-3 py-2 rounded-full text-xs font-semibold bg-campfire-orange/20 text-campfire-orange"
                >
                  Off
                </button>
              )}
            </div>
            {sleepTimer && (
              <p className="text-center text-charcoal/40 text-xs mt-2">
                Stopping in {formatTime(sleepTimeRemaining)}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Category Filters */}
      <div className="p-4">
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
              {cat === 'all' ? 'All Sounds' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Track Grid */}
      <div className="px-4 grid grid-cols-2 gap-3 pb-24">
        {filteredTracks.map((track) => {
          const isActive = activeTrack?.id === track.id;
          return (
            <button
              key={track.id}
              onClick={() => handlePlay(track)}
              className={`bg-white rounded-2xl p-4 text-left transition-all ${
                isActive
                  ? 'ring-2 ring-campfire-orange shadow-md'
                  : 'shadow-sm hover:shadow-md'
              }`}
            >
              <span className="text-3xl">{track.icon}</span>
              <h3 className="font-bold text-charcoal text-sm mt-2">{track.name}</h3>
              <p className="text-charcoal/40 text-xs mt-1">{track.description}</p>
              {isActive && isPlaying && (
                <div className="mt-2 flex items-center gap-1">
                  <div className="w-1 h-3 bg-campfire-orange rounded-full animate-pulse"></div>
                  <div className="w-1 h-4 bg-campfire-orange rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-1 h-2 bg-campfire-orange rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-1 h-5 bg-campfire-orange rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                  <span className="text-campfire-orange text-xs ml-1">Playing</span>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default KnotRadio;
