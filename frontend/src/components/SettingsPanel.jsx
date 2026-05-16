import React, { useState } from 'react';

const SettingsPanel = ({ userId = 1, onLogout }) => {
    const [settings, setSettings] = useState({
        // Profile
        displayName: 'Sam',
        email: 'sam@example.com',
        troopNumber: '117',
        program: 'navigator',

        // Preferences
        handedness: 'right',
        ropeColor: 'natural',
        language: 'en',
        voiceAccent: 'american',

        // Notifications
        streakReminders: true,
        dailyChallenges: true,
        troopMissions: true,
        duelInvitations: true,
        verificationResults: true,
        leaderboardChanges: false,

        // Display
        darkMode: false,
        highContrast: false,
        reduceMotion: false,
        fontSize: 'medium',

        // Data
        offlineMode: true,
        autoDownload3D: true,
        dataSaver: false,
    });

    const updateSetting = (key, value) => {
        setSettings(prev => ({ ...prev, [key]: value }));
    };

    const Section = ({ title, children }) => (
        <div className="bg-cream-white rounded-card shadow-card p-4 space-y-3">
            <h3 className="font-display text-forest-pine text-sm border-b border-parchment pb-2">{title}</h3>
            {children}
        </div>
    );

    const Toggle = ({ label, description, settingKey }) => (
        <div className="flex items-center justify-between">
            <div>
                <p className="text-sm font-body text-charcoal">{label}</p>
                {description && <p className="text-xs font-mono text-bark-gray">{description}</p>}
            </div>
            <button
                onClick={() => updateSetting(settingKey, !settings[settingKey])}
                className={`w-11 h-6 rounded-full relative transition-colors ${settings[settingKey] ? 'bg-forest-pine' : 'bg-bark-gray bg-opacity-30'}`}
            >
                <div className={`absolute top-0.5 w-5 h-5 bg-cream-white rounded-full shadow-sm transition-transform ${settings[settingKey] ? 'right-0.5' : 'left-0.5'}`} />
            </button>
        </div>
    );

    const OptionGroup = ({ label, options, settingKey }) => (
        <div>
            <p className="text-sm font-body text-charcoal mb-1.5">{label}</p>
            <div className="flex flex-wrap gap-1.5">
                {options.map(opt => (
                    <button key={opt.value} onClick={() => updateSetting(settingKey, opt.value)}
                        className={`px-3 py-1.5 rounded-chip text-xs font-body transition-all ${
                            settings[settingKey] === opt.value ? 'bg-forest-pine text-cream-white' : 'bg-parchment text-bark-gray'
                        }`}>
                        {opt.label}
                    </button>
                ))}
            </div>
        </div>
    );

    return (
        <div className="space-y-5">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-display text-forest-pine">Settings</h2>
                <span className="text-xs font-mono text-bark-gray">v1.0.0</span>
            </div>

            {/* Profile */}
            <Section title="Profile">
                <div className="flex items-center gap-3 bg-parchment rounded-badge p-3">
                    <div className="w-12 h-12 bg-forest-pine rounded-full flex items-center justify-center text-cream-white font-display text-lg">
                        {settings.displayName.charAt(0)}
                    </div>
                    <div>
                        <p className="font-display text-forest-pine">{settings.displayName}</p>
                        <p className="text-xs font-mono text-bark-gray">Troop {settings.troopNumber} | {settings.program === 'navigator' ? 'Navigator' : 'Adventurer'}</p>
                    </div>
                </div>
            </Section>

            {/* Knot Preferences */}
            <Section title="Knot Preferences">
                <OptionGroup label="Dominant Hand" settingKey="handedness" options={[
                    { value: 'right', label: '🤚 Right-Handed' },
                    { value: 'left', label: '🖐️ Left-Handed' },
                ]} />
                <OptionGroup label="Default Rope Color" settingKey="ropeColor" options={[
                    { value: 'natural', label: '🟤 Natural' },
                    { value: 'red', label: '🔴 Red' },
                    { value: 'blue', label: '🔵 Blue' },
                    { value: 'green', label: '🟢 Green' },
                    { value: 'dual', label: '🔴🔵 Dual-Color' },
                ]} />
            </Section>

            {/* Language & Voice */}
            <Section title="Language & Voice">
                <OptionGroup label="App Language" settingKey="language" options={[
                    { value: 'en', label: '🇺🇸 English' },
                    { value: 'es', label: '🇪🇸 Spanish' },
                    { value: 'fr', label: '🇫🇷 French' },
                    { value: 'de', label: '🇩🇪 German' },
                    { value: 'zh', label: '🇨🇳 Chinese' },
                ]} />
                <OptionGroup label="Voice Accent" settingKey="voiceAccent" options={[
                    { value: 'american', label: '🇺🇸 American' },
                    { value: 'british', label: '🇬🇧 British' },
                    { value: 'scottish', label: '🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scottish' },
                    { value: 'indian', label: '🇮🇳 Indian' },
                ]} />
            </Section>

            {/* Notifications */}
            <Section title="Notifications">
                <Toggle label="Streak Reminders" description="Daily reminder to keep your streak alive" settingKey="streakReminders" />
                <Toggle label="Daily Challenges" description="Alert when a new challenge is available" settingKey="dailyChallenges" />
                <Toggle label="Troop Missions" description="Updates on troop mission progress" settingKey="troopMissions" />
                <Toggle label="Duel Invitations" description="When someone challenges you" settingKey="duelInvitations" />
                <Toggle label="Verification Results" description="When your knot is reviewed" settingKey="verificationResults" />
                <Toggle label="Leaderboard Changes" description="When your rank changes" settingKey="leaderboardChanges" />
            </Section>

            {/* Display */}
            <Section title="Display & Accessibility">
                <Toggle label="Dark Mode" description="Easier on the eyes at night" settingKey="darkMode" />
                <Toggle label="High Contrast" description="Increase visibility of UI elements" settingKey="highContrast" />
                <Toggle label="Reduce Motion" description="Minimize animations" settingKey="reduceMotion" />
                <OptionGroup label="Text Size" settingKey="fontSize" options={[
                    { value: 'small', label: 'Small' },
                    { value: 'medium', label: 'Medium' },
                    { value: 'large', label: 'Large' },
                    { value: 'xlarge', label: 'Extra Large' },
                ]} />
            </Section>

            {/* Data & Storage */}
            <Section title="Data & Storage">
                <Toggle label="Offline Mode" description="Cache knots for use without internet" settingKey="offlineMode" />
                <Toggle label="Auto-Download 3D Models" description="Download new knot models on Wi-Fi" settingKey="autoDownload3D" />
                <Toggle label="Data Saver" description="Reduce image and model quality" settingKey="dataSaver" />
                <button className="w-full bg-parchment text-bark-gray font-body text-sm py-2 rounded-badge">
                    Clear Cache (42 MB)
                </button>
            </Section>

            {/* Account Actions */}
            <Section title="Account">
                <button className="w-full bg-parchment text-charcoal font-body text-sm py-3 rounded-badge hover:bg-bark-gray hover:bg-opacity-20 transition-all">
                    Export My Data
                </button>
                <button
                    onClick={onLogout}
                    className="w-full bg-trail-red text-cream-white font-display font-bold py-3 rounded-button shadow-button"
                >
                    Sign Out
                </button>
            </Section>

            {/* Footer */}
            <div className="text-center py-4 space-y-1">
                <p className="text-xs font-mono text-bark-gray">Trail Knotz v1.0.0</p>
                <p className="text-xs font-mono text-bark-gray">Built with ❤️ for Trail Life USA</p>
                <div className="flex justify-center gap-4 mt-2">
                    <button className="text-xs font-body text-forest-pine underline">Privacy Policy</button>
                    <button className="text-xs font-body text-forest-pine underline">Terms of Service</button>
                    <button className="text-xs font-body text-forest-pine underline">Support</button>
                </div>
            </div>
        </div>
    );
};

export default SettingsPanel;
