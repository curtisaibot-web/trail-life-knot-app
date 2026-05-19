-- ─────────────────────────────────────────────
-- Trail Knotz: Knot Stories Content
-- ─────────────────────────────────────────────
-- This script populates the `story` column in the `knots` table.
-- These stories are used in the "Campfire Story Mode" feature to provide
-- historical context, mnemonic devices, and real-world survival scenarios
-- for each knot, making them easier to remember for scouts.

-- Ensure the column exists
ALTER TABLE knots ADD COLUMN IF NOT EXISTS story TEXT;

-- 1. The Bowline
UPDATE knots SET story = 
'The Bowline is often called the "King of Knots." Legend has it that sailors in the 16th century used this knot to secure the square sails of their massive galleons. The mnemonic "The rabbit comes out of the hole, goes around the tree, and back down the hole" was invented by early scoutmasters to teach young sailors. In a survival situation, the Bowline is a lifesaver because it creates a fixed loop that will never tighten or slip, no matter how much weight is pulled against it. If you ever need to haul someone out of a ditch, this is the knot you tie around their waist.'
WHERE name = 'Bowline';

-- 2. The Square Knot (Reef Knot)
UPDATE knots SET story = 
'Known to sailors as the Reef Knot, the Square Knot has been used for thousands of years. It was famously used by ancient Greeks and Romans to tie bandages, as it lies flat and doesn''t press uncomfortably into a wound. "Right over left, left over right" is the rhythm of this knot. It is perfect for tying two ropes of the same thickness together, like tying up a bundle of firewood or securing a bandage. But beware: it is a binding knot, not a load-bearing one. Never trust your life to a Square Knot!'
WHERE name = 'Square Knot';

-- 3. The Clove Hitch
UPDATE knots SET story = 
'The Clove Hitch is the pioneer''s best friend. When the early frontiersmen were building temporary shelters, they needed a knot that could be tied incredibly fast around a post or a tree. The Clove Hitch can actually be tied with one hand if you know the trick! It is considered a "binding hitch," meaning it holds well when there is constant tension on both sides of the rope. It is the starting point for almost all lashing projects, like building a pioneering tower or a camp table.'
WHERE name = 'Clove Hitch';

-- 4. The Taut-Line Hitch
UPDATE knots SET story = 
'Imagine setting up your tent as a storm rolls in. The wind is howling, and your tent lines are sagging. You don''t have time to untie and retie everything. Enter the Taut-Line Hitch. This ingenious knot was developed by campers and mountaineers because it grips the rope when under tension, but slides freely when the tension is removed. It allows you to adjust the length of a line without untying the knot. It is the absolute perfect knot for securing tent guy lines and rain flies.'
WHERE name = 'Taut-Line Hitch';

-- 5. The Figure Eight (Flemish Knot)
UPDATE knots SET story = 
'The Figure Eight is a "stopper knot." In the days of tall ships, a rope slipping through a pulley block could mean disaster. Sailors tied the Figure Eight at the end of their ropes because it is bulky enough to stop the rope from sliding through a hole, but unlike a simple overhand knot, it won''t jam so tightly that you can''t untie it later. Today, rock climbers use a variation of this knot (the Figure Eight Follow-Through) to secure their harnesses because it is incredibly strong and easy to inspect at a glance.'
WHERE name = 'Figure Eight';

-- 6. The Sheet Bend
UPDATE knots SET story = 
'What do you do when your rope isn''t long enough, and the only other rope you have is much thinner? A Square Knot will slip and fail. You need the Sheet Bend. The name comes from sailing, where the ropes used to trim the sails were called "sheets." The Sheet Bend is specifically designed to join two ropes of different diameters securely. The thicker rope forms a simple "J" shape (the bight), and the thinner rope weaves through and around it, using friction to lock everything in place.'
WHERE name = 'Sheet Bend';

-- 7. Two Half Hitches
UPDATE knots SET story = 
'Sometimes, simplicity is the ultimate sophistication. Two Half Hitches is exactly what it sounds like: tying the same simple overhand loop twice around a post. It is the quickest way to tie a boat to a dock or a horse to a rail. While it might not be as adjustable as a Taut-Line or as secure as a Bowline, its speed and reliability make it a staple in every scout''s toolkit. If you need to secure a load to the roof of a car quickly, finish your tie-down with Two Half Hitches.'
WHERE name = 'Two Half Hitches';

-- 8. The Timber Hitch
UPDATE knots SET story = 
'Deep in the logging camps of the 19th century, lumberjacks needed a way to drag massive fallen trees through the mud. They couldn''t use complex knots because the mud and tension would jam them permanently. They invented the Timber Hitch. By wrapping the rope around the log and twisting it back on itself, the knot uses the friction of the wood to hold tight. The harder the horse pulled, the tighter the knot gripped. Yet, the moment the tension stopped, the knot practically fell apart on its own, saving the lumberjacks precious time.'
WHERE name = 'Timber Hitch';

-- 9. The Trucker''s Hitch
UPDATE knots SET story = 
'Before the invention of ratcheting tie-down straps, truckers and cargo haulers had a serious problem: how do you get a rope tight enough to hold down heavy cargo on a bouncing truck bed? The Trucker''s Hitch is less of a single knot and more of a mechanical pulley system made entirely of rope. By creating a loop in the middle of the line and passing the tail through it, you create a 3-to-1 mechanical advantage. You can pull the rope three times tighter than you could with brute strength alone.'
WHERE name = 'Trucker''s Hitch';

-- 10. The Alpine Butterfly
UPDATE knots SET story = 
'High in the Alps, mountaineers face treacherous crevasses. If three climbers are tied together on a single rope and the middle climber falls, the knot attaching them must be able to take immense strain from both directions without distorting. The Alpine Butterfly was designed for exactly this. It creates a fixed, secure loop in the middle of a rope. It is beautiful to look at, incredibly strong, and unlike other mid-line loops, it remains easy to untie even after bearing the weight of a fallen climber.'
WHERE name = 'Alpine Butterfly';
