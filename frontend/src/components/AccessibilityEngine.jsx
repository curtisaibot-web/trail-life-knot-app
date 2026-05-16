import React, { useState, createContext, useContext } from 'react';

// Accessibility Context for global access
export const AccessibilityContext = createContext();

export const AccessibilityProvider = ({ children }) => {
    const [settings, setSettings] = useState({
        fontSize: 'medium',       // small | medium | large | xlarge
        highContrast: false,
        reduceMotion: false,
        screenReaderMode: false,
        colorBlindMode: 'none',   // none | protanopia | deuteranopia | tritanopia
        hapticFeedback: true,
        voiceGuidance: true,
        leftHanded: false,
        dyslexiaFont: false,
    });

    const updateSetting = (key, value) => {
        setSettings(prev => ({ ...prev, [key]: value }));
    };

    // Generate CSS classes based on accessibility settings
    const getAccessibilityClasses = () => {
        const classes = [];
        if (settings.highContrast) classes.push('high-contrast');
        if (settings.reduceMotion) classes.push('reduce-motion');
        if (settings.dyslexiaFont) classes.push('dyslexia-font');
        if (settings.leftHanded) classes.push('left-handed-layout');
        classes.push(`font-size-${settings.fontSize}`);
        if (settings.colorBlindMode !== 'none') classes.push(`cb-${settings.colorBlindMode}`);
        return classes.join(' ');
    };

    return (
        <AccessibilityContext.Provider value={{ settings, updateSetting, getAccessibilityClasses }}>
            {children}
        </AccessibilityContext.Provider>
    );
};

// Accessibility Settings Panel Component
const AccessibilityPanel = () => {
    const { settings, updateSetting } = useContext(AccessibilityContext);
    const [isOpen, setIsOpen] = useState(false);

    const FONT_SIZES = [
        { key: 'small', label: 'A', size: '14px' },
        { key: 'medium', label: 'A', size: '16px' },
        { key: 'large', label: 'A', size: '20px' },
        { key: 'xlarge', label: 'A', size: '24px' },
    ];

    const COLOR_BLIND_MODES = [
        { key: 'none', label: 'None' },
        { key: 'protanopia', label: 'Red-Blind' },
        { key: 'deuteranopia', label: 'Green-Blind' },
        { key: 'tritanopia', label: 'Blue-Blind' },
    ];

    const ToggleSwitch = ({ label, description, value, onChange }) => (
        <div className="flex items-center justify-between bg-parchment rounded-badge p-3">
            <div>
                <p className="text-sm font-body text-charcoal">{label}</p>
                {description && <p className="text-xs font-mono text-bark-gray">{description}</p>}
            </div>
            <button
                onClick={() => onChange(!value)}
                role="switch"
                aria-checked={value}
                aria-label={label}
                className={`w-12 h-6 rounded-full relative transition-colors ${value ? 'bg-forest-pine' : 'bg-bark-gray bg-opacity-30'}`}
            >
                <div className={`absolute top-0.5 w-5 h-5 bg-cream-white rounded-full shadow-sm transition-transform ${value ? 'right-0.5' : 'left-0.5'}`} />
            </button>
        </div>
    );

    return (
        <>
            {/* Floating Accessibility Button */}
            <button
                onClick={() => setIsOpen(true)}
                aria-label="Open accessibility settings"
                className="fixed bottom-20 right-4 w-12 h-12 bg-forest-pine text-cream-white rounded-full shadow-button flex items-center justify-center text-xl z-40 hover:opacity-90 transition-all"
            >
                ♿
            </button>

            {/* Settings Panel */}
            {isOpen && (
                <div className="fixed inset-0 bg-charcoal bg-opacity-50 z-50 flex items-end justify-center" onClick={() => setIsOpen(false)}>
                    <div
                        className="bg-cream-white rounded-t-card w-full max-w-lg max-h-[80vh] overflow-y-auto p-5 space-y-4 animate-slide-up"
                        onClick={e => e.stopPropagation()}
                        role="dialog"
                        aria-label="Accessibility Settings"
                    >
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-display text-forest-pine">Accessibility</h3>
                            <button onClick={() => setIsOpen(false)} className="text-bark-gray text-xl" aria-label="Close">✕</button>
                        </div>

                        {/* Font Size */}
                        <div>
                            <p className="text-sm font-display text-forest-pine mb-2">Text Size</p>
                            <div className="flex gap-2">
                                {FONT_SIZES.map(fs => (
                                    <button
                                        key={fs.key}
                                        onClick={() => updateSetting('fontSize', fs.key)}
                                        className={`flex-1 py-2 rounded-badge text-center transition-all ${
                                            settings.fontSize === fs.key ? 'bg-forest-pine text-cream-white' : 'bg-parchment text-bark-gray'
                                        }`}
                                        style={{ fontSize: fs.size }}
                                        aria-label={`Font size ${fs.key}`}
                                    >
                                        {fs.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Color Blind Mode */}
                        <div>
                            <p className="text-sm font-display text-forest-pine mb-2">Color Vision</p>
                            <div className="grid grid-cols-2 gap-2">
                                {COLOR_BLIND_MODES.map(mode => (
                                    <button
                                        key={mode.key}
                                        onClick={() => updateSetting('colorBlindMode', mode.key)}
                                        className={`py-2 rounded-badge text-xs font-body transition-all ${
                                            settings.colorBlindMode === mode.key ? 'bg-forest-pine text-cream-white' : 'bg-parchment text-bark-gray'
                                        }`}
                                    >
                                        {mode.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Toggle Settings */}
                        <div className="space-y-2">
                            <ToggleSwitch label="High Contrast" description="Increase border and text contrast" value={settings.highContrast} onChange={v => updateSetting('highContrast', v)} />
                            <ToggleSwitch label="Reduce Motion" description="Minimize animations" value={settings.reduceMotion} onChange={v => updateSetting('reduceMotion', v)} />
                            <ToggleSwitch label="Screen Reader Mode" description="Optimize for assistive technology" value={settings.screenReaderMode} onChange={v => updateSetting('screenReaderMode', v)} />
                            <ToggleSwitch label="Dyslexia-Friendly Font" description="Use OpenDyslexic typeface" value={settings.dyslexiaFont} onChange={v => updateSetting('dyslexiaFont', v)} />
                            <ToggleSwitch label="Haptic Feedback" description="Vibrate on knot completion" value={settings.hapticFeedback} onChange={v => updateSetting('hapticFeedback', v)} />
                            <ToggleSwitch label="Voice Guidance" description="Audio instructions for each step" value={settings.voiceGuidance} onChange={v => updateSetting('voiceGuidance', v)} />
                            <ToggleSwitch label="Left-Handed Layout" description="Mirror the entire UI" value={settings.leftHanded} onChange={v => updateSetting('leftHanded', v)} />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AccessibilityPanel;
