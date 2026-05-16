/**
 * Haptic Feedback Manager for Trail Knotz
 * 
 * Provides tactile feedback on mobile devices for key interactions:
 * - Knot step completion
 * - Badge earned
 * - Streak milestone
 * - Duel victory
 * - Verification approved
 * 
 * Uses the Vibration API (Web) and falls back gracefully on unsupported devices.
 */

const HapticPatterns = {
    // Light tap for UI interactions
    tap: [10],
    
    // Double tap for step completion
    stepComplete: [15, 50, 15],
    
    // Satisfying "click" for knot completion
    knotMastered: [20, 30, 20, 30, 40, 50, 60],
    
    // Celebration pattern for badge earned
    badgeEarned: [30, 50, 30, 50, 30, 100, 60, 100, 60],
    
    // Streak milestone (feels like a drumroll)
    streakMilestone: [10, 20, 10, 20, 10, 20, 10, 20, 50, 80],
    
    // Victory fanfare for duel win
    duelVictory: [50, 50, 50, 50, 50, 100, 100, 200],
    
    // Gentle pulse for verification approved
    verificationApproved: [30, 80, 30, 80, 60],
    
    // Error/rejection feedback
    error: [100, 50, 100],
    
    // Slider scrubbing (called repeatedly)
    scrubTick: [5],
    
    // AR placement confirmation
    arPlaced: [20, 40, 60],
};

class HapticFeedbackManager {
    constructor() {
        this.isSupported = 'vibrate' in navigator;
        this.isEnabled = true;
        this.intensity = 1.0; // 0.0 to 1.0
    }

    /**
     * Enable or disable haptic feedback globally
     */
    setEnabled(enabled) {
        this.isEnabled = enabled;
    }

    /**
     * Set intensity multiplier (0.0 = off, 1.0 = full)
     */
    setIntensity(intensity) {
        this.intensity = Math.max(0, Math.min(1, intensity));
    }

    /**
     * Trigger a haptic pattern
     * @param {string} patternName - Name of the pattern from HapticPatterns
     */
    trigger(patternName) {
        if (!this.isSupported || !this.isEnabled || this.intensity === 0) return;

        const pattern = HapticPatterns[patternName];
        if (!pattern) {
            console.warn(`[Haptic] Unknown pattern: ${patternName}`);
            return;
        }

        // Apply intensity scaling to vibration durations
        const scaledPattern = pattern.map(duration => Math.round(duration * this.intensity));
        
        try {
            navigator.vibrate(scaledPattern);
        } catch (e) {
            console.warn('[Haptic] Vibration failed:', e);
        }
    }

    /**
     * Trigger a custom vibration pattern
     * @param {number[]} pattern - Array of vibration/pause durations in ms
     */
    triggerCustom(pattern) {
        if (!this.isSupported || !this.isEnabled) return;
        
        try {
            const scaledPattern = pattern.map(d => Math.round(d * this.intensity));
            navigator.vibrate(scaledPattern);
        } catch (e) {
            console.warn('[Haptic] Custom vibration failed:', e);
        }
    }

    /**
     * Stop any ongoing vibration
     */
    cancel() {
        if (this.isSupported) {
            navigator.vibrate(0);
        }
    }

    /**
     * Check if haptic feedback is available on this device
     */
    checkSupport() {
        return {
            supported: this.isSupported,
            enabled: this.isEnabled,
            intensity: this.intensity,
        };
    }
}

// Singleton instance
const haptics = new HapticFeedbackManager();

// Convenience exports
export const triggerHaptic = (pattern) => haptics.trigger(pattern);
export const setHapticEnabled = (enabled) => haptics.setEnabled(enabled);
export const setHapticIntensity = (intensity) => haptics.setIntensity(intensity);
export const cancelHaptic = () => haptics.cancel();
export const checkHapticSupport = () => haptics.checkSupport();

export default haptics;
