import React, { useState, useEffect } from 'react';

// Layout & Navigation
import Navigation from './components/Navigation';

// Core Screens
import Dashboard from './components/Dashboard';
import KnotSlider from './components/KnotSlider';
import ScenarioFinder from './components/ScenarioFinder';
import TroopLeaderboard from './components/TroopLeaderboard';
import SettingsPanel from './components/SettingsPanel';

// Feature Screens
import KnotComparisonTool from './components/KnotComparisonTool';
import VerificationPortal from './components/VerificationPortal';
import AchievementWall from './components/AchievementWall';
import TroopMissionBoard from './components/TroopMissionBoard';
import KnotDuelArena from './components/KnotDuelArena';
import DailyChallenge from './components/DailyChallenge';
import BadgeSystem from './components/BadgeSystem';
import KnotJournal from './components/KnotJournal';
import CampfireStoryMode from './components/CampfireStoryMode';
import WeatherScenarioEngine from './components/WeatherScenarioEngine';
import RopeCalculator from './components/RopeCalculator';
import ProgressTree from './components/ProgressTree';
import StreakTracker from './components/StreakTracker';
import VoiceNarration from './components/VoiceNarration';

// Admin & Parent
import AdminDashboard from './components/AdminDashboard';
import ParentPortal from './components/ParentPortal';

// Accessibility & Utilities
import AccessibilityEngine from './components/AccessibilityEngine';

// Onboarding
import OnboardingTutorial from './components/OnboardingTutorial';

// Knot Data
import { KNOT_REGISTRY } from './data/knotRegistry';

// ─────────────────────────────────────────────
// Route Configuration
// ─────────────────────────────────────────────
const ROUTES = {
    // Primary Tabs (Bottom Navigation)
    dashboard: { component: 'Dashboard', title: 'Field Kit', icon: '🏕️', isTab: true },
    skillLab: { component: 'SkillLab', title: 'Skill Lab', icon: '🪢', isTab: true },
    scenarios: { component: 'Scenarios', title: 'Scenarios', icon: '🧭', isTab: true },
    troop: { component: 'Troop', title: 'Troop', icon: '👥', isTab: true },
    settings: { component: 'Settings', title: 'Settings', icon: '⚙️', isTab: true },

    // Secondary Screens (Navigated from primary)
    knotDetail: { component: 'KnotDetail', title: 'Knot Detail' },
    knotComparison: { component: 'KnotComparison', title: 'Knot vs. Knot' },
    verification: { component: 'Verification', title: 'Verify Knot' },
    achievements: { component: 'Achievements', title: 'Achievement Wall' },
    missions: { component: 'Missions', title: 'Troop Missions' },
    duel: { component: 'Duel', title: 'Knot Duel' },
    dailyChallenge: { component: 'DailyChallenge', title: 'Daily Challenge' },
    badges: { component: 'Badges', title: 'Badges' },
    journal: { component: 'Journal', title: 'Knot Journal' },
    campfire: { component: 'Campfire', title: 'Campfire Stories' },
    weather: { component: 'Weather', title: 'Weather Scenarios' },
    ropeCalc: { component: 'RopeCalc', title: 'Rope Calculator' },
    progressTree: { component: 'ProgressTree', title: 'Progress Tree' },
    streaks: { component: 'Streaks', title: 'Streak Tracker' },

    // Admin & Parent
    admin: { component: 'Admin', title: 'Leader Dashboard' },
    parent: { component: 'Parent', title: 'Parent Portal' },
};

// ─────────────────────────────────────────────
// App State Management
// ─────────────────────────────────────────────
const useAppState = () => {
    const [user, setUser] = useState(null);
    const [isOnboarded, setIsOnboarded] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('trailknotz_token');
        const onboarded = localStorage.getItem('trailknotz_onboarded');
        const profile = localStorage.getItem('trailknotz_profile');

        if (token) {
            setIsAuthenticated(true);
            if (profile) setUser(JSON.parse(profile));
        }
        if (onboarded === 'true') setIsOnboarded(true);
    }, []);

    const login = (token, userData) => {
        localStorage.setItem('trailknotz_token', token);
        localStorage.setItem('trailknotz_profile', JSON.stringify(userData));
        setIsAuthenticated(true);
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem('trailknotz_token');
        localStorage.removeItem('trailknotz_profile');
        setIsAuthenticated(false);
        setUser(null);
    };

    const completeOnboarding = (profile) => {
        setIsOnboarded(true);
        setUser(prev => ({ ...prev, ...profile }));
    };

    return { user, isOnboarded, isAuthenticated, login, logout, completeOnboarding };
};

// ─────────────────────────────────────────────
// Login Screen
// ─────────────────────────────────────────────
const LoginScreen = ({ onLogin }) => {
    const [mode, setMode] = useState('signin');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const endpoint = mode === 'signin' ? '/api/auth/login' : '/api/auth/register';
            const body = mode === 'signin'
                ? { email, password }
                : { email, password, display_name: displayName };

            const res = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}${endpoint}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Authentication failed');

            onLogin(data.token, data.user);
        } catch (err) {
            setError(err.message);
            // Demo bypass: allow login with any credentials for prototyping
            if (email && password) {
                onLogin('demo-token', { id: 1, display_name: displayName || email.split('@')[0], email, role: 'scout' });
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-parchment flex items-center justify-center p-6">
            <div className="w-full max-w-sm">
                {/* Logo */}
                <div className="text-center mb-8">
                    <span className="text-6xl block mb-3">🪢</span>
                    <h1 className="text-3xl font-display text-forest-pine">Trail Knotz</h1>
                    <p className="text-sm font-body text-bark-gray mt-1">Knot mastery for Navigators & Adventurers</p>
                </div>

                {/* Auth Card */}
                <div className="bg-cream-white rounded-card shadow-card p-6">
                    {/* Mode Toggle */}
                    <div className="flex bg-parchment rounded-button p-1 gap-1 mb-5">
                        {['signin', 'signup'].map(m => (
                            <button key={m} onClick={() => { setMode(m); setError(''); }}
                                className={`flex-1 py-2 rounded-button text-sm font-display capitalize transition-all ${
                                    mode === m ? 'bg-forest-pine text-cream-white shadow-button' : 'text-bark-gray'
                                }`}>
                                {m === 'signin' ? 'Sign In' : 'Sign Up'}
                            </button>
                        ))}
                    </div>

                    {/* Social Login */}
                    <div className="space-y-2 mb-4">
                        <button className="w-full flex items-center justify-center gap-2 bg-parchment py-3 rounded-button text-sm font-body text-charcoal hover:bg-bark-gray hover:bg-opacity-10 transition-all">
                            <span>🔵</span> Continue with Google
                        </button>
                        <button className="w-full flex items-center justify-center gap-2 bg-parchment py-3 rounded-button text-sm font-body text-charcoal hover:bg-bark-gray hover:bg-opacity-10 transition-all">
                            <span>⚫</span> Continue with Apple
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-3 my-4">
                        <div className="flex-1 h-px bg-parchment" />
                        <span className="text-xs font-mono text-bark-gray">OR WITH EMAIL</span>
                        <div className="flex-1 h-px bg-parchment" />
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-3">
                        {mode === 'signup' && (
                            <div>
                                <label className="text-xs font-display text-forest-pine">Trail Name</label>
                                <input type="text" value={displayName} onChange={e => setDisplayName(e.target.value)}
                                    placeholder="What should we call you?"
                                    className="w-full mt-1 p-3 bg-parchment rounded-badge text-sm font-body text-charcoal outline-none border border-transparent focus:border-forest-pine" />
                            </div>
                        )}
                        <div>
                            <label className="text-xs font-display text-forest-pine">Email</label>
                            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
                                placeholder="your@email.com"
                                className="w-full mt-1 p-3 bg-parchment rounded-badge text-sm font-body text-charcoal outline-none border border-transparent focus:border-forest-pine" />
                        </div>
                        <div>
                            <label className="text-xs font-display text-forest-pine">Password</label>
                            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required
                                placeholder="••••••••"
                                className="w-full mt-1 p-3 bg-parchment rounded-badge text-sm font-body text-charcoal outline-none border border-transparent focus:border-forest-pine" />
                        </div>

                        {error && <p className="text-xs font-mono text-trail-red">{error}</p>}

                        <button type="submit" disabled={loading}
                            className="w-full bg-campfire-orange text-cream-white font-display font-bold py-3 rounded-button shadow-button text-base disabled:opacity-50 transition-all">
                            {loading ? 'Loading...' : mode === 'signin' ? 'Sign In' : 'Create Account'}
                        </button>
                    </form>
                </div>

                <p className="text-center text-xs font-mono text-bark-gray mt-4">Built with care for Trail Life USA</p>
            </div>
        </div>
    );
};

// ─────────────────────────────────────────────
// Main App Component
// ─────────────────────────────────────────────
const App = () => {
    const { user, isOnboarded, isAuthenticated, login, logout, completeOnboarding } = useAppState();
    const [currentRoute, setCurrentRoute] = useState('dashboard');
    const [routeParams, setRouteParams] = useState({});
    const [navigationHistory, setNavigationHistory] = useState(['dashboard']);

    const navigate = (route, params = {}) => {
        setNavigationHistory(prev => [...prev, route]);
        setCurrentRoute(route);
        setRouteParams(params);
    };

    const goBack = () => {
        if (navigationHistory.length > 1) {
            const newHistory = [...navigationHistory];
            newHistory.pop();
            const previousRoute = newHistory[newHistory.length - 1];
            setNavigationHistory(newHistory);
            setCurrentRoute(previousRoute);
            setRouteParams({});
        }
    };

    // ─── Auth Gate ───
    if (!isAuthenticated) {
        return <LoginScreen onLogin={login} />;
    }

    // ─── Onboarding Gate ───
    if (!isOnboarded) {
        return <OnboardingTutorial onComplete={completeOnboarding} />;
    }

    // ─── Route Renderer ───
    const renderScreen = () => {
        switch (currentRoute) {
            case 'dashboard':
                return (
                    <div className="space-y-5">
                        <StreakTracker userId={user?.id} />
                        <DailyChallenge onNavigate={navigate} />
                        <Dashboard onNavigate={navigate} />
                        <div className="grid grid-cols-2 gap-3">
                            <button onClick={() => navigate('achievements')} className="bg-cream-white rounded-card shadow-knot-card p-4 text-center">
                                <span className="text-2xl">🏆</span>
                                <p className="text-xs font-display text-forest-pine mt-1">Achievements</p>
                            </button>
                            <button onClick={() => navigate('journal')} className="bg-cream-white rounded-card shadow-knot-card p-4 text-center">
                                <span className="text-2xl">📓</span>
                                <p className="text-xs font-display text-forest-pine mt-1">Journal</p>
                            </button>
                            <button onClick={() => navigate('campfire')} className="bg-cream-white rounded-card shadow-knot-card p-4 text-center">
                                <span className="text-2xl">🔥</span>
                                <p className="text-xs font-display text-forest-pine mt-1">Campfire Stories</p>
                            </button>
                            <button onClick={() => navigate('ropeCalc')} className="bg-cream-white rounded-card shadow-knot-card p-4 text-center">
                                <span className="text-2xl">📏</span>
                                <p className="text-xs font-display text-forest-pine mt-1">Rope Calculator</p>
                            </button>
                        </div>
                    </div>
                );

            case 'skillLab':
                return (
                    <div className="space-y-5">
                        <KnotSlider knotId={routeParams.knotId} handedness={user?.handedness || 'right'} />
                        <VoiceNarration knotId={routeParams.knotId} />
                        <div className="flex gap-2">
                            <button onClick={() => navigate('knotComparison')} className="flex-1 bg-parchment text-forest-pine font-body text-sm py-3 rounded-button">
                                Compare Knots
                            </button>
                            <button onClick={() => navigate('verification', { knotId: routeParams.knotId })} className="flex-1 bg-campfire-orange text-cream-white font-display text-sm py-3 rounded-button shadow-button">
                                Verify My Knot
                            </button>
                        </div>
                    </div>
                );

            case 'scenarios':
                return (
                    <div className="space-y-5">
                        <ScenarioFinder onSelectKnot={(knotId) => navigate('skillLab', { knotId })} />
                        <WeatherScenarioEngine onSelectKnot={(knotId) => navigate('skillLab', { knotId })} />
                    </div>
                );

            case 'troop':
                return (
                    <div className="space-y-5">
                        <TroopLeaderboard troopId={user?.troopId || 1} userId={user?.id} />
                        <TroopMissionBoard troopId={user?.troopId || 1} />
                        <div className="grid grid-cols-2 gap-3">
                            <button onClick={() => navigate('duel')} className="bg-cream-white rounded-card shadow-knot-card p-4 text-center">
                                <span className="text-2xl">⚔️</span>
                                <p className="text-xs font-display text-forest-pine mt-1">Knot Duel</p>
                            </button>
                            <button onClick={() => navigate('missions')} className="bg-cream-white rounded-card shadow-knot-card p-4 text-center">
                                <span className="text-2xl">🎯</span>
                                <p className="text-xs font-display text-forest-pine mt-1">All Missions</p>
                            </button>
                        </div>
                    </div>
                );

            case 'settings':
                return <SettingsPanel userId={user?.id} onLogout={logout} />;

            // Secondary Screens
            case 'knotDetail': return <KnotSlider knotId={routeParams.knotId} handedness={user?.handedness || 'right'} />;
            case 'knotComparison': return <KnotComparisonTool />;
            case 'verification': return <VerificationPortal knotId={routeParams.knotId} userId={user?.id} />;
            case 'achievements': return <AchievementWall userId={user?.id} />;
            case 'missions': return <TroopMissionBoard troopId={user?.troopId || 1} />;
            case 'duel': return <KnotDuelArena userId={user?.id} />;
            case 'dailyChallenge': return <DailyChallenge onNavigate={navigate} />;
            case 'badges': return <BadgeSystem userId={user?.id} />;
            case 'journal': return <KnotJournal userId={user?.id} />;
            case 'campfire': return <CampfireStoryMode />;
            case 'weather': return <WeatherScenarioEngine onSelectKnot={(knotId) => navigate('skillLab', { knotId })} />;
            case 'ropeCalc': return <RopeCalculator />;
            case 'progressTree': return <ProgressTree userId={user?.id} />;
            case 'streaks': return <StreakTracker userId={user?.id} />;
            case 'admin': return <AdminDashboard troopId={user?.troopId || 1} />;
            case 'parent': return <ParentPortal />;

            default: return <Dashboard onNavigate={navigate} />;
        }
    };

    const isSecondaryScreen = !ROUTES[currentRoute]?.isTab;
    const currentTitle = ROUTES[currentRoute]?.title || 'Trail Knotz';

    return (
        <div className="min-h-screen bg-parchment">
            {/* Top Header */}
            <header className="bg-forest-pine px-4 py-3 flex items-center justify-between sticky top-0 z-40">
                <div className="flex items-center gap-3">
                    {isSecondaryScreen && (
                        <button onClick={goBack} className="text-cream-white text-lg">←</button>
                    )}
                    <h1 className="font-display text-cream-white text-lg">{currentTitle}</h1>
                </div>
                <div className="flex items-center gap-3">
                    {user?.role === 'leader' && (
                        <button onClick={() => navigate('admin')} className="text-xs font-mono text-campfire-orange">
                            Leader
                        </button>
                    )}
                    <button onClick={() => navigate('settings')} className="text-cream-white text-lg">⚙️</button>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="px-4 py-5 pb-24">
                <AccessibilityEngine>
                    {renderScreen()}
                </AccessibilityEngine>
            </main>

            {/* Bottom Navigation */}
            <nav className="fixed bottom-0 left-0 right-0 bg-cream-white border-t border-parchment shadow-card z-40">
                <div className="flex justify-around py-2">
                    {Object.entries(ROUTES).filter(([_, r]) => r.isTab).map(([key, route]) => (
                        <button key={key} onClick={() => navigate(key)}
                            className={`flex flex-col items-center py-1 px-3 rounded-badge transition-all ${
                                currentRoute === key ? 'text-forest-pine' : 'text-bark-gray opacity-60'
                            }`}>
                            <span className="text-xl">{route.icon}</span>
                            <span className={`text-[10px] font-mono mt-0.5 ${currentRoute === key ? 'font-bold' : ''}`}>
                                {route.title}
                            </span>
                            {currentRoute === key && <div className="w-1 h-1 bg-campfire-orange rounded-full mt-0.5" />}
                        </button>
                    ))}
                </div>
            </nav>
        </div>
    );
};

export default App;
