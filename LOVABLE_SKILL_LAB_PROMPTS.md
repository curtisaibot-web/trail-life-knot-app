# Lovable.dev Prompts: 5-Tier Skill Lab & Navigation

Copy and paste these prompts sequentially into your Lovable.dev project to rebuild the Skill Lab to support the new 114-knot curriculum.

## Prompt 1: 5-Tier Navigation Header

```text
Update the SkillLab component to support a 5-tier curriculum navigation system.

Requirements:
1. Replace the current toggle (Navigator/Adventurer) with a horizontal scrolling pill-menu at the top of the screen.
2. The pills should be: "Navigator" (ages 11-13), "Adventurer" (ages 14-17), "Ranger" (advanced), "Woodsman" (senior), and "Expert" (master).
3. Use the Campy UI kit styling for the active pill: `bg-brand-orange text-white font-bold shadow-md`.
4. Inactive pills should be: `bg-white text-gray-600 border border-gray-200`.
5. Add a "Lock" icon next to the text for Ranger, Woodsman, and Expert tiers to indicate they require unlocking via XP (use lucide-react Lock icon).
6. When a locked tier is clicked, show a Campy UI toast notification: "Unlock [Tier] by earning [X] more XP!" instead of switching tabs.
7. Ensure the pill menu is swipeable on mobile devices with `overflow-x-auto hide-scrollbar`.
```

## Prompt 2: Knot Category Filtering

```text
Add a category filter system directly below the 5-tier navigation in the SkillLab component.

Requirements:
1. Add a secondary row of smaller, subtle filter chips: "All", "Hitch", "Loop", "Bend", "Binding", "Stopper", "Decorative", "Lashing", "Splice".
2. Styling for active category: `bg-brand-forest text-white text-sm`.
3. Styling for inactive categories: `bg-gray-100 text-gray-500 text-sm hover:bg-gray-200`.
4. The knot list below should instantly filter based on the selected tier AND the selected category.
5. If a category yields no results in the current tier (e.g., "Lashing" in the "Navigator" tier), display an empty state component: an illustration of an empty backpack with the text "No knots found in this category for this tier. Try exploring higher ranks!"
```

## Prompt 3: Infinite Scroll & Virtualization for 114 Knots

```text
Optimize the knot list rendering in the SkillLab to handle 114 knots smoothly.

Requirements:
1. The current list renders all knots at once. Refactor the grid to use a virtualized list or infinite scrolling approach.
2. If using standard React, implement a "Load More" button or IntersectionObserver to load 12 knots at a time.
3. Update the KnotCard component to be more compact. Instead of a large hero image, use a horizontal layout:
   - Left: Small 3D thumbnail or icon (64x64px, rounded-lg, bg-gray-100)
   - Middle: Knot Name (font-bold text-brand-forest), Difficulty badge, and Category tag
   - Right: XP Value (text-brand-orange font-bold) and an arrow icon indicating it's clickable.
4. Add a search bar at the very top (above the tier navigation) with a magnifying glass icon. Searching should filter across ALL unlocked tiers instantly.
```

## Prompt 4: The 114-Knot Detail View (Slider)

```text
Update the KnotSlider component to handle the expanded data structure of the 114-knot registry.

Requirements:
1. The slider must now gracefully handle knots that have up to 8 steps (previously max was 5).
2. Add a "Prerequisites" section at the bottom of the knot detail view. If a knot requires knowing another knot first (e.g., Double Sheet Bend requires Sheet Bend), display it here as a clickable link.
3. Add a "Campfire Story" button next to the "3D View" button. Clicking it should open a modal or bottom sheet displaying the `story` text from the database, styled like an old piece of parchment paper (`bg-amber-50 text-amber-900 font-serif`).
4. Ensure the XP reward popup at the end of the slider dynamically pulls the `xp_value` from the registry rather than a hardcoded number.
```
