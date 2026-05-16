# Trail Knotz — Screen-by-Screen User Journey Walkthrough

## Overview

This document describes the complete user journey through the Trail Knotz application, from the moment a new Trailman downloads the app to the moment he earns his Gold Medal. Every screen, every interaction, and every emotional beat is documented here to serve as a reference for development, testing, and stakeholder presentations.

---

## ACT 1: FIRST CONTACT (Onboarding)

### Screen 1.1 — Splash Screen
The app opens to a full-screen illustration of a forest trail at sunrise. The Trail Knotz logo appears in the center, rendered in a bold slab-serif font that looks branded into wood. Below it, the tagline reads: "Master the Knots. Earn the Badge." The screen fades after 2 seconds into the login page.

### Screen 1.2 — Login / Register
A clean, white card sits on the parchment background. At the top, the Trail Knotz logo anchors the page. Two large pill-shaped buttons offer "Continue with Google" and "Continue with Apple." Below a rope-styled divider, the email and password fields appear in the "Field Kit" style — clean, outlined boxes with subtle labels. A toggle switches between "Sign In" and "Sign Up." On Sign Up, an additional "Trail Name" field appears, which becomes the user's display name on the Leaderboard.

### Screen 1.3 — Onboarding Step 1: "Welcome to the Trail"
A full-width illustration shows a group of Trailmen around a campfire. The heading reads "Welcome to the Trail." The body text explains: "Trail Knotz is your personal guide to mastering every knot a Trailman needs. Learn, practice, and prove your skills." A large "Next" button in Campfire Orange sits at the bottom.

### Screen 1.4 — Onboarding Step 2: "Choose Your Path"
Two large cards appear side by side. The left card shows a compass icon and reads "Navigator (Ages 11-13)" with a subtitle: "6 Core Knots." The right card shows a mountain icon and reads "Adventurer (Ages 14-17)" with a subtitle: "12+ Advanced Knots." The user taps their program. The selected card glows with a Forest Pine border.

### Screen 1.5 — Onboarding Step 3: "Left or Right?"
A simple, friendly screen asks: "Which hand do you tie with?" Two large buttons show a left hand and a right hand. The body text explains: "We'll mirror all our 3D animations to match your dominant hand, so every instruction feels natural." This selection is stored in the user profile and affects the KnotSlider's default orientation.

### Screen 1.6 — Onboarding Step 4: "Join Your Troop"
A text input field asks for a "Troop Code." The body text explains: "Your Troop Leader will give you a code. This connects you to your troop's Leaderboard and Mission Board." A "Skip for Now" link appears below for users who want to explore solo first.

### Screen 1.7 — Onboarding Step 5: "Your First Knot"
A guided mini-tutorial walks the user through tying a Square Knot using the KnotSlider. The slider is pre-loaded with the Square Knot animation. Step-by-step text appears above the slider: "Step 1: Cross the right end over the left..." The user scrubs through the animation manually. When they reach 100%, a celebration animation plays and they earn their first 10 XP. The text reads: "You just tied your first knot! Let's keep going."

---

## ACT 2: THE HOME BASE (Dashboard)

### Screen 2.1 — Dashboard (Field Kit Tab)
This is the "home" screen. The top section shows a greeting: "Good morning, [Trail Name]" with the user's current rank (e.g., "Tenderfoot") and total XP. Below it, four key sections are stacked vertically.

**Section A — Streak Tracker:** A horizontal row of 7 circles representing the last 7 days. Completed days are filled with Forest Pine. Today's circle pulses gently. The current streak count is displayed prominently (e.g., "7-Day Streak!") with a small fire icon. A "Streak Freeze" button appears if the user has acorns to spend.

**Section B — Daily Challenge:** A card with a Campfire Orange accent border shows today's challenge knot. The card displays the knot name, difficulty badge, a countdown timer ("12h 34m remaining"), and the bonus XP reward (50 XP). Tapping the card navigates directly to the Skill Lab with that knot pre-loaded.

**Section C — Progress Tree:** The centerpiece of the Dashboard. A dynamic SVG illustration of an oak tree fills a large card. The tree's visual state reflects the user's total XP. At 0 XP, it is a bare sapling. At 2,500 XP, small leaves appear. At 5,000 XP, the trunk thickens and branches spread. At 7,500 XP, small badge icons hang from the branches. At 10,000 XP, the tree is a full, majestic oak with golden leaves. Below the tree, a progress bar shows "2,450 / 5,000 XP to next stage."

**Section D — Quick Actions Grid:** A 2x2 grid of smaller cards linking to: Achievements (trophy icon), Journal (book icon), Campfire Stories (flame icon), and Rope Calculator (ruler icon).

---

## ACT 3: THE SKILL LAB (Learning)

### Screen 3.1 — Knot Library
A grid of knot cards, each showing the knot name, a small preview illustration, and a difficulty badge (1-5 stars). Cards are organized by program (Navigator / Adventurer). Mastered knots show a gold checkmark overlay. Locked knots (Adventurer knots for Navigator users) are grayed out with a lock icon. Tapping a card opens the Skill Lab for that knot.

### Screen 3.2 — Skill Lab (Knot Detail)
The main learning screen. The top half of the screen is the 3D Viewport — a large, rounded card where the knot animation plays. Below it, the KnotSlider (a full-width scrubbing bar) allows the user to manually control the animation from 0% (straight rope) to 100% (finished knot). Step labels appear at key positions along the slider (e.g., "Cross Over" at 25%, "Loop Through" at 50%, "Pull Tight" at 75%).

**Controls Row:** Below the slider, a row of toggle buttons provides access to the advanced features. "Trace Path" (leaves a glowing trail), "Left-Handed" (mirrors the viewport), "Color Mode" (Natural / High Contrast / X-Ray), and "Voice" (play narration with language/accent selector).

**Action Buttons:** At the bottom, two large buttons: "Compare This Knot" (opens the Comparison Tool) and "Verify My Knot" (opens the camera for the Verification Portal).

### Screen 3.3 — Voice Narration Panel
When the user taps "Voice," a bottom sheet slides up. It shows a play/pause button, a progress bar synced to the KnotSlider, and two dropdown selectors: Language (English, Spanish, French, Chinese, German) and Accent (American, British, Scottish, Indian). The narration describes each step as the user scrubs through the animation: "Now take the working end and pass it up through the loop you just created..."

### Screen 3.4 — Knot Comparison Tool
A split-screen view showing two knots side by side. The user selects the second knot from a dropdown. Below the two viewports, horizontal comparison bars show ratings for Strength, Speed to Tie, Ease of Untying, Reliability, and Versatility. "Best For" tags appear at the bottom (e.g., Bowline: "Rescue, Sailing" vs. Figure Eight: "Climbing, Stopper").

---

## ACT 4: THE REAL WORLD (Scenarios & Verification)

### Screen 4.1 — Scenario Finder
A search bar at the top asks: "What are you trying to do?" Below it, filter chips allow the user to narrow by category: Camping, Sailing, Climbing, Fishing, Survival, Decorative. As the user types (e.g., "secure a tent"), results appear as cards showing the recommended knot, a match percentage, and the difficulty level. Tapping a result navigates to the Skill Lab for that knot.

### Screen 4.2 — Weather Scenario Engine
A card at the top of the Scenario tab shows the current weather condition (detected via the device's location API or manually selected). Based on the condition (Rain, Wind, Snow, Clear), the engine recommends the most appropriate knots. For example, in "Rain," it recommends the Taut-Line Hitch ("adjustable tension for wet ropes") and the Bowline ("won't slip when wet").

### Screen 4.3 — Verification Portal (Camera)
When the user taps "Verify My Knot," the camera opens with a guide overlay showing the expected shape of the knot. The user takes a photo. The screen transitions to an "Analyzing..." state with a pulsing green circle animation. After 2-3 seconds, the result appears. If "Approved," confetti bursts and the user earns the full XP for that knot. If "Needs Review," the photo is sent to the Troop Leader's review queue with a message: "Your Troop Leader will review your knot soon."

---

## ACT 5: THE TRIBE (Social & Competition)

### Screen 5.1 — Troop Leaderboard
A ranked list of troop members showing their Trail Name, avatar, total XP, current streak, and rank badge. The top 3 are highlighted with Gold, Silver, and Bronze styling. A "Live Update" banner flashes at the top when a troop member earns XP in real-time (e.g., "SamT just mastered the Bowline! +100 XP"). Toggle buttons switch between "This Week," "This Month," and "All Time" views.

### Screen 5.2 — Troop Mission Board
A list of active collaborative missions. Each mission card shows the title (e.g., "Operation Ropework: 50 Knots in 7 Days"), the mission type (Collective, Cumulative, or Simultaneous), a progress bar, and the reward. Tapping a mission shows the individual contributions of each troop member.

### Screen 5.3 — Knot Duel Arena
A matchmaking screen where the user can challenge a troop member to a 1v1 knot-tying duel. Once matched, a 3-2-1 countdown begins. Both players see the same knot and race to scrub through the animation. A split-screen shows each player's progress in real-time. The first to reach 100% wins. The winner earns 75 XP and the loser earns 25 XP (participation reward). A "Rematch" button appears on the results screen.

---

## ACT 6: THE JOURNEY (Progress & Reflection)

### Screen 6.1 — Achievement Wall
A visual grid of 20 achievements across 5 categories: Mastery (knots completed), Dedication (streaks), Social (duels won), Explorer (scenarios used), and Special (hidden achievements). Locked achievements are shown as silhouettes. Unlocked achievements glow with a golden border. Tapping an achievement shows its name, description, and the date it was earned.

### Screen 6.2 — Badge Showcase
A dedicated screen showing all earned badges organized by knot category. Each badge has three tiers: Bronze (learned), Silver (practiced 5 times), Gold (verified in real world). An animated unlock sequence plays when a new tier is reached.

### Screen 6.3 — Knot Journal
A chronological feed of journal entries. Each entry shows the date, knot practiced, mood emoji, difficulty rating (stars), practice duration, and the user's reflection notes. A floating "+" button opens the new entry form. Filters allow sorting by date range, knot, or mood.

### Screen 6.4 — Campfire Story Mode
A series of narrative cards, each telling the history and origin of a specific knot. The cards use a vintage illustration style with sepia tones. "Did You Know?" facts are highlighted in Campfire Orange callout boxes. Stories are unlocked progressively as the user masters each knot, creating an incentive to keep learning.

---

## ACT 7: THE SUMMIT (Mastery)

### Screen 7.1 — Gold Medal Ceremony
When a user earns the Gold Medal for all knots in their program, a special full-screen celebration plays. The Progress Tree reaches its final, majestic state. A personalized certificate appears: "This certifies that [Trail Name] of Troop [Number] has achieved Gold Medal Mastery in the [Navigator/Adventurer] Ropework Program." The certificate can be saved as an image or shared. The Troop Leader receives a notification to formally recognize the achievement at the next meeting.

---

## SUPPORTING SCREENS

### Screen S.1 — Settings Panel
Organized into sections: Account (profile, trail name, handedness), Language & Voice (narration language, accent, speed), Notifications (streak reminders, duel invites, mission alerts), Display (dark mode, font size, reduced motion), Accessibility (screen reader, high contrast, keyboard navigation), and Data (clear cache, export progress, delete account).

### Screen S.2 — Parent Portal
A simplified, read-only view of the child's progress. Shows: knots mastered, current streak, badges earned, recent journal entries (without private notes), and a weekly summary. Parents can opt-in to receive a weekly email digest.

### Screen S.3 — Admin Dashboard (Troop Leaders)
A management interface showing: Verification Review Queue (with approve/reject buttons and photo previews), Troop Member List (with XP and progress bars), Mission Creator (set title, type, target, deadline), and Analytics (most practiced knots, average completion time, troop engagement score over time).
