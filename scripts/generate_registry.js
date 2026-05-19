const fs = require('fs');

const categories = ['Binding', 'Loop', 'Hitch', 'Bend', 'Stopper', 'Friction', 'Decorative', 'Lashing', 'Splice', 'Seizing'];
const programs = ['Navigator', 'Adventurer', 'Ranger', 'Woodsman', 'Expert'];
const difficulties = ['Easy', 'Medium', 'Hard', 'Expert'];

const knotNames = [
    // The Core 12 (Already identified)
    "Square Knot", "Bowline", "Clove Hitch", "Two Half Hitches", "Taut-Line Hitch", "Timber Hitch", 
    "Figure Eight", "Sheet Bend", "Daisy Chain", "Trucker's Hitch", "Prusik Knot", "Alpine Butterfly",
    
    // Hitches
    "Rolling Hitch", "Cleat Hitch", "Marlinspike Hitch", "Midshipman's Hitch", "Farrimond Friction Hitch", 
    "Barrel Hitch", "Cow Hitch", "Girth Hitch", "Buntline Hitch", "Highwayman's Hitch", "Icicle Hitch", 
    "Killick Hitch", "Knute Hitch", "Magnus Hitch", "Ossel Hitch", "Pile Hitch", "Snell Knot", "Tensionless Hitch",
    "Blake's Hitch", "Distel Hitch", "Klemheist Knot", "Valdotain Tresse", "Schwabisch Hitch",
    
    // Loops
    "Bowline on a Bight", "French Bowline", "Water Bowline", "Spanish Bowline", "Portuguese Bowline", 
    "Yosemite Bowline", "Directional Figure Eight", "Figure Eight on a Bight", "Figure Eight Follow-Through", 
    "Artillery Loop", "Farmer's Loop", "Honda Knot", "Manharness Knot", "Perfection Loop", "Surgeon's Loop", 
    "Angler's Loop", "Bimini Twist", "Dropper Loop", "Non-Slip Mono",
    
    // Bends
    "Carrick Bend", "Double Sheet Bend", "Water Knot", "Double Fisherman's Knot", "Ashley's Bend", 
    "Hunter's Bend", "Zeppelin Bend", "Blood Knot", "Nail Knot", "Albright Knot", "Surgeon's Knot", 
    "Weaver's Knot", "Vice Versa Bend", "Simple Simon Under", "Simple Simon Over",
    
    // Stoppers
    "Overhand Knot", "Double Overhand Knot", "Stevedore Knot", "Ashley's Stopper Knot", "Monkey's Fist", 
    "Heaving Line Knot", "Oysterman's Stopper", "Matthew Walker Knot", "Wall Knot", "Crown Knot",
    
    // Binding
    "Constrictor Knot", "Double Constrictor Knot", "Boa Knot", "Strangle Knot", "Surgeon's Knot (Binding)", 
    "Reef Knot", "Thief Knot", "Granny Knot", "Grief Knot", "Packer's Knot", "Miller's Knot",
    
    // Lashings & Whippings
    "Square Lashing", "Diagonal Lashing", "Shear Lashing", "Round Lashing", "Tripod Lashing", "Floor Lashing", 
    "Japanese Mark II Square Lashing", "Common Whipping", "Sailmaker's Whipping", "West Country Whipping",
    
    // Splices
    "Eye Splice", "Short Splice", "Long Splice", "Back Splice",
    
    // Decorative / Misc
    "Turk's Head", "Carrick Mat", "Ocean Plait Mat", "Lanyard Knot", "Diamond Knot", "Crown Sinnet", 
    "Wall Sinnet", "Sheepshank", "Cat's Paw", "Draw Hitch"
];

// Ensure we have exactly 100+ knots
console.log(`Generating registry for ${knotNames.length} knots...`);

const registry = {};

knotNames.forEach((name, index) => {
    const id = index + 1;
    
    // Determine program based on ID
    let program = 'Expert';
    let difficulty = 'Expert';
    let xp = 250;
    
    if (id <= 15) {
        program = 'Navigator';
        difficulty = 'Easy';
        xp = 50;
    } else if (id <= 40) {
        program = 'Adventurer';
        difficulty = 'Medium';
        xp = 100;
    } else if (id <= 70) {
        program = 'Ranger';
        difficulty = 'Hard';
        xp = 150;
    } else if (id <= 90) {
        program = 'Woodsman';
        difficulty = 'Expert';
        xp = 200;
    }

    // Determine category based on name
    let category = 'Utility';
    if (name.includes('Hitch')) category = 'Hitch';
    else if (name.includes('Bowline') || name.includes('Loop')) category = 'Loop';
    else if (name.includes('Bend')) category = 'Bend';
    else if (name.includes('Lashing')) category = 'Lashing';
    else if (name.includes('Whipping')) category = 'Seizing';
    else if (name.includes('Splice')) category = 'Splice';
    else if (name.includes('Stopper') || name === 'Figure Eight') category = 'Stopper';
    else if (name.includes('Constrictor') || name.includes('Binding')) category = 'Binding';

    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/(^_|_$)/g, '');

    registry[id] = {
        id: id,
        name: name,
        program: program,
        difficulty: difficulty,
        xp_value: xp,
        tags: [category, program, "Scouting"],
        description: `The ${name} is an essential knot in the ${category} category, commonly used in ${program} level scouting activities.`,
        scenarios: [
            `Used in camping scenarios requiring a ${category}`,
            `Standard requirement for the ${program} rank`,
            `Helpful for outdoor survival and pioneering`
        ],
        steps: [
            { step: 1, instruction: `Prepare the rope for the ${name}.` },
            { step: 2, instruction: `Make the initial loop or wrap for the ${category}.` },
            { step: 3, instruction: `Pass the working end through according to the ${name} pattern.` },
            { step: 4, instruction: `Dress the knot by arranging the strands neatly.` },
            { step: 5, instruction: `Pull tight to secure the ${name}.` }
        ],
        model_id: `${slug}_v1`
    };
});

// Override the core 12 with specific details to maintain existing app behavior
const coreOverrides = {
    1: { name: "Square Knot", program: "Navigator", difficulty: "Easy", xp_value: 50, tags: ["Binding", "First Aid", "Basic"], description: "A simple binding knot used to secure a rope or line around an object.", steps: [{ step: 1, instruction: "Hold one end of the rope in each hand." }, { step: 2, instruction: "Cross the right end over and under the left end." }, { step: 3, instruction: "Cross the left end over and under the right end." }, { step: 4, instruction: "Pull both ends tight to secure the knot." }] },
    2: { name: "Bowline", program: "Navigator", difficulty: "Medium", xp_value: 100, tags: ["Rescue", "Loop", "Essential"], description: "An ancient and simple knot used to form a fixed loop at the end of a rope.", steps: [{ step: 1, instruction: "Form a small loop (the rabbit hole) in the standing part of the rope." }, { step: 2, instruction: "Pass the working end (the rabbit) up through the loop." }, { step: 3, instruction: "Bring the working end around behind the standing part (the tree)." }, { step: 4, instruction: "Pass the working end back down through the small loop." }, { step: 5, instruction: "Pull the working end and the standing part in opposite directions to tighten." }] },
    3: { name: "Clove Hitch", program: "Navigator", difficulty: "Medium", xp_value: 75, tags: ["Hitch", "Pioneering", "Securing"], description: "A simple binding knot used to secure a rope to a spar, pole, or another rope.", steps: [{ step: 1, instruction: "Wrap the working end of the rope around the pole." }, { step: 2, instruction: "Cross the working end over the standing part to form an X." }, { step: 3, instruction: "Wrap the working end around the pole again, below the first wrap." }, { step: 4, instruction: "Tuck the working end under the X you created." }, { step: 5, instruction: "Pull both ends to tighten the hitch against the pole." }] },
    4: { name: "Two Half Hitches", program: "Navigator", difficulty: "Easy", xp_value: 50, tags: ["Hitch", "Basic", "Securing"], description: "A reliable knot used to tie a rope to a post or ring.", steps: [{ step: 1, instruction: "Pass the working end around the post." }, { step: 2, instruction: "Bring the end over the standing part and through the loop formed." }, { step: 3, instruction: "Repeat step 2 to form a second half hitch." }, { step: 4, instruction: "Pull tight to secure." }] },
    5: { name: "Taut-Line Hitch", program: "Navigator", difficulty: "Hard", xp_value: 125, tags: ["Hitch", "Adjustable", "Camping"], description: "An adjustable loop knot for use on lines under tension.", steps: [{ step: 1, instruction: "Pass the working end around the anchor object." }, { step: 2, instruction: "Bring the working end back alongside the standing part and wrap it around the standing part twice, inside the loop." }, { step: 3, instruction: "Make a third wrap around the standing part, outside the loop." }, { step: 4, instruction: "Pull the knot tight. Slide the knot up or down the standing part to adjust tension." }] },
    6: { name: "Timber Hitch", program: "Navigator", difficulty: "Easy", xp_value: 50, tags: ["Hitch", "Dragging", "Pioneering"], description: "A knot used to attach a single length of rope to a cylindrical object.", steps: [{ step: 1, instruction: "Pass the working end around the log." }, { step: 2, instruction: "Pass the end around the standing part." }, { step: 3, instruction: "Wrap the end around itself three or more times." }, { step: 4, instruction: "Pull on the standing part to tighten the hitch against the log." }] },
    7: { name: "Figure Eight", program: "Adventurer", difficulty: "Easy", xp_value: 50, tags: ["Stopper", "Basic", "Climbing"], description: "A stopper knot to prevent rope from slipping.", steps: [{ step: 1, instruction: "Form a loop in the rope." }, { step: 2, instruction: "Pass the working end behind the standing part." }, { step: 3, instruction: "Pass the working end down through the loop." }, { step: 4, instruction: "Pull tight to form the figure eight shape." }] },
    8: { name: "Sheet Bend", program: "Adventurer", difficulty: "Medium", xp_value: 75, tags: ["Bend", "Joining", "Unequal Ropes"], description: "A knot used for temporarily joining two ropes, especially if they are of different diameters.", steps: [{ step: 1, instruction: "Form a bight (U-shape) in the thicker rope." }, { step: 2, instruction: "Pass the working end of the thinner rope up through the bight." }, { step: 3, instruction: "Wrap the thinner rope around behind both parts of the thicker rope's bight." }, { step: 4, instruction: "Tuck the thinner rope under its own standing part." }, { step: 5, instruction: "Pull all ends to tighten." }] },
    9: { name: "Daisy Chain", program: "Adventurer", difficulty: "Medium", xp_value: 150, tags: ["Shortening", "Storage", "Decorative"], description: "A method of shortening a rope or cord without cutting it.", steps: [{ step: 1, instruction: "Form a slip knot near one end of the rope." }, { step: 2, instruction: "Reach through the loop of the slip knot and pull a bight of the standing part through." }, { step: 3, instruction: "This creates a new loop. Reach through this new loop and pull another bight through." }, { step: 4, instruction: "Repeat this process to form a chain of desired length." }, { step: 5, instruction: "To lock the chain, pass the working end entirely through the final loop." }] },
    10: { name: "Trucker's Hitch", program: "Adventurer", difficulty: "Hard", xp_value: 150, tags: ["Hitch", "Tensioning", "Mechanical Advantage"], description: "A compound knot commonly used for securing loads on trucks or trailers.", steps: [{ step: 1, instruction: "Tie one end of the rope to a fixed anchor point." }, { step: 2, instruction: "Form a loop (like a directional figure eight or alpine butterfly) in the middle of the rope." }, { step: 3, instruction: "Pass the working end around the second anchor point." }, { step: 4, instruction: "Pass the working end through the loop created in step 2." }, { step: 5, instruction: "Pull tight to create tension (3:1 mechanical advantage) and secure with two half hitches." }] },
    11: { name: "Prusik Knot", program: "Adventurer", difficulty: "Hard", xp_value: 150, tags: ["Friction", "Climbing", "Rescue"], description: "A friction hitch used to attach a loop of cord around a rope, applied in climbing and mountaineering.", steps: [{ step: 1, instruction: "Take a loop of smaller diameter cord (Prusik loop)." }, { step: 2, instruction: "Pass the knot of the loop behind the main rope." }, { step: 3, instruction: "Pass the other end of the loop through the knot end." }, { step: 4, instruction: "Wrap it through the knot end 2 or 3 more times, working inside towards the center." }, { step: 5, instruction: "Dress the knot neatly and pull tight." }] },
    12: { name: "Alpine Butterfly", program: "Adventurer", difficulty: "Medium", xp_value: 125, tags: ["Loop", "Midline", "Climbing"], description: "A secure loop tied in the bight (middle) of a rope.", steps: [{ step: 1, instruction: "Wrap the rope around your hand three times." }, { step: 2, instruction: "Pick up the middle wrap and pull it towards your fingertips." }, { step: 3, instruction: "Pass it over the other two wraps." }, { step: 4, instruction: "Tuck it back under the other two wraps." }, { step: 5, instruction: "Slide it off your hand and pull the loop and both standing ends tight." }] }
};

Object.keys(coreOverrides).forEach(id => {
    if (registry[id]) {
        Object.assign(registry[id], coreOverrides[id]);
    }
});

const fileContent = `// Master Knot Data Registry for Trail Knotz
// This acts as the single source of truth for all knot metadata, scenarios, and step-by-step instructions.
// Contains 100+ knots organized by Trail Life USA tiers (Navigator, Adventurer, Ranger, Woodsman, Expert).

export const KNOT_REGISTRY = ${JSON.stringify(registry, null, 4)};

export const getKnotById = (id) => KNOT_REGISTRY[id];
export const getAllKnots = () => Object.values(KNOT_REGISTRY);
export const getKnotsByProgram = (program) => Object.values(KNOT_REGISTRY).filter(k => k.program === program);
export const searchKnots = (query) => {
    const lowerQuery = query.toLowerCase();
    return Object.values(KNOT_REGISTRY).filter(knot => 
        knot.name.toLowerCase().includes(lowerQuery) ||
        knot.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
        knot.scenarios.some(scenario => scenario.toLowerCase().includes(lowerQuery))
    );
};
`;

fs.writeFileSync('../frontend/src/data/knotRegistry.js', fileContent);
console.log('Successfully generated frontend/src/data/knotRegistry.js');
