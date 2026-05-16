// Master Knot Data Registry for Trail Knotz
// This acts as the single source of truth for all knot metadata, scenarios, and step-by-step instructions.

export const KNOT_REGISTRY = {
    1: {
        id: 1,
        name: "Bowline",
        program: "Navigator",
        difficulty: "Medium",
        xp_value: 100,
        tags: ["Rescue", "Loop", "Essential"],
        description: "An ancient and simple knot used to form a fixed loop at the end of a rope. It has the virtues of being both easy to tie and untie; most notably, it is easy to untie after being subjected to a load.",
        scenarios: ["Securing a halyard to a sail", "Tying a rescue line around a person", "Creating a fixed loop that won't slip"],
        steps: [
            { step: 1, instruction: "Form a small loop (the rabbit hole) in the standing part of the rope." },
            { step: 2, instruction: "Pass the working end (the rabbit) up through the loop." },
            { step: 3, instruction: "Bring the working end around behind the standing part (the tree)." },
            { step: 4, instruction: "Pass the working end back down through the small loop." },
            { step: 5, instruction: "Pull the working end and the standing part in opposite directions to tighten." }
        ],
        model_id: "bowline_v1", // Maps to Addressables in Unity
    },
    2: {
        id: 2,
        name: "Square Knot",
        program: "Navigator",
        difficulty: "Easy",
        xp_value: 50,
        tags: ["Binding", "First Aid", "Basic"],
        description: "A simple binding knot used to secure a rope or line around an object. It is sometimes also referred to as a reef knot.",
        scenarios: ["Tying bandages in first aid", "Tying shoelaces", "Securing non-critical packages"],
        steps: [
            { step: 1, instruction: "Hold one end of the rope in each hand." },
            { step: 2, instruction: "Cross the right end over and under the left end." },
            { step: 3, instruction: "Cross the left end over and under the right end." },
            { step: 4, instruction: "Pull both ends tight to secure the knot." }
        ],
        model_id: "square_knot_v1",
    },
    3: {
        id: 3,
        name: "Clove Hitch",
        program: "Navigator",
        difficulty: "Medium",
        xp_value: 75,
        tags: ["Hitch", "Pioneering", "Securing"],
        description: "A simple binding knot used to secure a rope to a spar, pole, or another rope. It is often used to start and finish lashings.",
        scenarios: ["Starting a lashing for a pioneering project", "Securing a boat to a piling", "Tying a rope to a tree"],
        steps: [
            { step: 1, instruction: "Wrap the working end of the rope around the pole." },
            { step: 2, instruction: "Cross the working end over the standing part to form an X." },
            { step: 3, instruction: "Wrap the working end around the pole again, below the first wrap." },
            { step: 4, instruction: "Tuck the working end under the X you created." },
            { step: 5, instruction: "Pull both ends to tighten the hitch against the pole." }
        ],
        model_id: "clove_hitch_v1",
    },
    4: {
        id: 4,
        name: "Taut-Line Hitch",
        program: "Navigator",
        difficulty: "Hard",
        xp_value: 125,
        tags: ["Hitch", "Adjustable", "Camping"],
        description: "An adjustable loop knot for use on lines under tension. It is useful when the length of a line will need to be periodically adjusted in order to maintain tension.",
        scenarios: ["Securing tent guy lines", "Creating an adjustable clothesline", "Tying down loads on vehicles"],
        steps: [
            { step: 1, instruction: "Pass the working end around the anchor object (e.g., a tent peg)." },
            { step: 2, instruction: "Bring the working end back alongside the standing part and wrap it around the standing part twice, inside the loop." },
            { step: 3, instruction: "Make a third wrap around the standing part, this time outside the loop (closer to the tent)." },
            { step: 4, instruction: "Pull the knot tight. Slide the knot up or down the standing part to adjust tension." }
        ],
        model_id: "taut_line_v1",
    },
    5: {
        id: 5,
        name: "Daisy Chain",
        program: "Adventurer",
        difficulty: "Medium",
        xp_value: 150,
        tags: ["Shortening", "Storage", "Decorative"],
        description: "A method of shortening a rope or cord without cutting it, creating a series of interlocking loops that resemble a chain.",
        scenarios: ["Shortening a long rope for storage", "Creating a temporary gear sling", "Managing excess webbing"],
        steps: [
            { step: 1, instruction: "Form a slip knot near one end of the rope." },
            { step: 2, instruction: "Reach through the loop of the slip knot and pull a bight (a U-shape) of the standing part through." },
            { step: 3, instruction: "This creates a new loop. Reach through this new loop and pull another bight through." },
            { step: 4, instruction: "Repeat this process to form a chain of desired length." },
            { step: 5, instruction: "To lock the chain, pass the working end entirely through the final loop." }
        ],
        model_id: "daisy_chain_v1",
    }
};

export const getKnotById = (id) => KNOT_REGISTRY[id];
export const getAllKnots = () => Object.values(KNOT_REGISTRY);
export const getKnotsByProgram = (program) => Object.values(KNOT_REGISTRY).filter(k => k.program === program);
export);
export const searchKnots = (query) => {
    const lowerQuery = query.toLowerCase();
    return Object.values(KNOT_REGISTRY).filter(knot => 
        knot.name.toLowerCase().includes(lowerQuery) ||
        knot.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
        knot.scenarios.some(scenario => scenario.toLowerCase().includes(lowerQuery))
    );
};
