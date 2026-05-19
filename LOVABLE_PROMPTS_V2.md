# Trail Knotz - Lovable.dev Prompts for V2 Features

This document contains copy-paste prompts designed for Lovable.dev to generate the 10 new features for the `knot-mastery` project. They are formatted to enforce the Campy UI design system, Supabase integration, and React Router navigation.

---

## 1. Knot of the Week (`KnotOfTheWeek.jsx`)

**Prompt:**
```text
Create a new page component called "Knot of the Week" (KnotOfTheWeek.jsx) for a scout knot-tying app.
Requirements:
1. Use the "Campy" design system: bg-parchment, text-forest-pine for headers, bg-cream-white for cards, and rounded-card/rounded-button classes.
2. The top section should feature the current "Knot of the Week" winner: A large photo of the knot, the scout's trail name, troop number, and the knot type. Include a prominent "Gold Badge" icon (Earthy Gold color #D4AF37).
3. The bottom section should be "This Week's Nominees" showing 3-4 pending knot submissions. Each should have a thumbnail, scout name, and an "Upvote" button.
4. When the upvote button is clicked, it should toggle an active state (turn Campfire Orange #E87A5D) and increment the vote count locally.
5. Include a "Nominate My Knot" button at the bottom that links to the Verification Portal.
6. Make it fully responsive, using a grid layout on desktop and stack on mobile.
```

## 2. Rope Types Library (`RopeTypesLibrary.jsx`)

**Prompt:**
```text
Create a new page component called "Rope Types Library" (RopeTypesLibrary.jsx).
Requirements:
1. Design: bg-parchment background, text-charcoal for body text.
2. Create a grid of cards, each representing a different rope material: Paracord, Hemp, Nylon, Manila, and Sisal.
3. Each card should have an illustration/icon of the rope texture, the material name, a "Best For" list (e.g., "Camping, Climbing"), and a "Weakness" list (e.g., "Melts under heat, rots if wet").
4. Add a filter bar at the top to filter by use case: "All", "Load Bearing", "Decorative", "Waterproof".
5. Clicking a card should expand it (accordion style) to show a deeper description of how the material behaves when tying knots.
6. Use text-forest-pine for headings and bg-cream-white for the cards with shadow-card.
```

## 3. Knot Chains (`KnotChains.jsx`)

**Prompt:**
```text
Create a new page component called "Knot Chains" (KnotChains.jsx).
Requirements:
1. The goal is to teach scouts how multiple knots combine into a system.
2. Layout: A vertical timeline/stepper UI down the center of the screen.
3. Example Chain: "The Bear Hang". 
   - Step 1: Bowline (to secure the rock bag).
   - Step 2: Clove Hitch (to secure the anchor to a tree).
   - Step 3: Trucker's Hitch (to tension the line).
4. Each step in the timeline should be a clickable card that routes to the specific knot's Skill Lab page.
5. Add a progress indicator. If the user has mastered a knot in the chain (pass in a mock userProgress object), show a green checkmark next to that step.
6. If all knots in a chain are mastered, unlock a "Chain Master" badge at the bottom of the screen.
7. Use the Campy UI kit: Forest Pine for the timeline line, Campfire Orange for active steps.
```

## 4. Time Capsule (`TimeCapsule.jsx`)

**Prompt:**
```text
Create a new page component called "Time Capsule" (TimeCapsule.jsx).
Requirements:
1. This is a nostalgic gallery where scouts can look back at their first knot attempts versus their current mastery.
2. Layout: A split-screen or side-by-side comparison UI.
3. Left side: "Day 1 Attempt" (show a blurry/messy knot photo, date, and low AI score).
4. Right side: "Mastery Attempt" (show a clean knot photo, recent date, and 95%+ AI score).
5. Below the photos, show a "Time to Mastery" stat (e.g., "Mastered in 14 days").
6. Include a "Share to Troop" button that triggers a mock share toast.
7. Design: Give it a slightly sepia/retro filter look using CSS overlays, keeping the main background bg-parchment.
```

## 5. Knot Radio (`KnotRadio.jsx`)

**Prompt:**
```text
Create a persistent floating audio player component called "Knot Radio" (KnotRadio.jsx).
Requirements:
1. This is an ambient noise generator to help scouts focus while practicing.
2. It needs two states: Minimized (a small pill at the bottom of the screen) and Maximized (a modal or bottom sheet).
3. The Maximized state should have 3 audio track options: "Campfire Crackle", "Rain on Tent", and "Deep Forest".
4. Include play/pause controls, a volume slider, and a 15-minute "Practice Timer" countdown.
5. When the timer hits zero, it should play a mock "ding" sound and stop the ambient noise.
6. Design: Dark mode theme for this specific component (bg-forest-pine, text-cream-white) to make it feel like a nighttime camping radio. Use Campfire Orange for the active track highlight.
```

## 6. Scout's Honor (`ScoutsHonor.jsx`)

**Prompt:**
```text
Create a new page component called "Scout's Honor Verification" (ScoutsHonor.jsx).
Requirements:
1. This is an alternative to AI/Leader verification where the scout self-certifies they tied the knot correctly.
2. Design: A solemn, official-looking form. bg-cream-white card on a bg-parchment background.
3. Include a 3-item checklist the scout must physically click:
   - [ ] I tied this knot without looking at the guide.
   - [ ] The knot holds firm under tension.
   - [ ] I have practiced this knot at least 5 times today.
4. Below the checklist, an optional "Attach Photo" upload zone.
5. The submit button should say "On My Honor, I Mastered This" and only become clickable when all 3 checkboxes are checked.
6. When submitted, show a success screen awarding a "Blue Badge" (not a Gold Badge) and 15 XP.
7. Use text-blue-700 for the badge accents to distinguish it from the Earthy Gold leader badges.
```

## 7. Knot Fails (`KnotFails.jsx`)

**Prompt:**
```text
Create a new page component called "Knot Fails Gallery" (KnotFails.jsx).
Requirements:
1. This is an educational anti-pattern gallery showing common mistakes.
2. Create a grid of "Fail Cards". Each card shows a photo of a badly tied knot.
3. The card should have a "What went wrong?" header with a red warning icon (text-trail-red).
4. Below the photo, explain the mistake (e.g., "The rabbit went under the log instead of over it, creating a slip knot instead of a Bowline").
5. Include a "How to fix it" button that expands a section showing the correct routing.
6. Add a "Did you make this mistake?" counter showing how many other scouts struggled with the exact same issue (to normalize failure).
7. Design: Use bg-parchment. The warning elements should use Campfire Orange (#E87A5D).
```

## 8. Trail Tokens (`TrailTokens.jsx`)

**Prompt:**
```text
Create a new page component called "Trail Tokens Store" (TrailTokens.jsx).
Requirements:
1. This is the virtual economy page where scouts spend earned tokens on cosmetics.
2. Top section: "Your Balance" showing a large coin icon and a number (e.g., 450 Tokens).
3. Create a tabbed interface: "App Themes", "Avatar Frames", "3D Rope Skins".
4. Populate the "3D Rope Skins" tab with 3 items: "Neon Paracord (100 Tokens)", "Vintage Hemp (250 Tokens)", "Glowing Quantum Rope (500 Tokens)".
5. Each item needs a "Purchase" button. If the user doesn't have enough tokens, the button should be disabled and grayed out.
6. When purchased, change the button to "Equipped" (bg-forest-pine).
7. Design: Use Earthy Gold (#D4AF37) heavily for the token icons and price tags.
```

## 9. Buddy System (`BuddySystem.jsx`)

**Prompt:**
```text
Create a new page component called "Buddy System" (BuddySystem.jsx).
Requirements:
1. This page manages paired learning between two scouts.
2. If the user has no buddy, show a "Find a Buddy" search bar and a list of "Recommended Scouts in your Troop".
3. If the user has a buddy, show a split dashboard: "You" on the left, "Your Buddy" on the right.
4. Display a shared "Buddy Streak" counter (e.g., "You and Alex have practiced together for 4 days!").
5. Include a "Send Encouragement" button that opens a modal to send pre-written messages ("Great job on the Bowline!", "Let's practice the Clove Hitch today!").
6. Show a "Shared Goal" progress bar: "Both master the Figure Eight to earn 50 Bonus XP".
7. Design: Friendly, collaborative UI. bg-parchment with forest-pine headers.
```

## 10. Field Report (`FieldReport.jsx`)

**Prompt:**
```text
Create a new page component called "Field Report Settings" (FieldReport.jsx).
Requirements:
1. This is where parents/scouts configure the weekly automated progress email.
2. Top section: A toggle switch for "Enable Weekly Parent Emails".
3. Input field for "Parent/Guardian Email Address".
4. Checkboxes for what to include in the report: "XP Gained", "Knots Mastered", "Areas for Improvement", "Troop Leader Feedback".
5. A large "Preview This Week's Report" button.
6. When clicked, open a modal showing a mocked-up HTML email preview. The preview should look like a branded newsletter with a header, a summary of stats, and a "Practice Plan for Next Week".
7. Design: Clean, administrative UI. bg-cream-white card layout. The email preview modal should have a gray background with a white "paper" center to simulate an email client.
```
