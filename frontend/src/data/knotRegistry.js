// Master Knot Data Registry for Trail Knotz
// This acts as the single source of truth for all knot metadata, scenarios, and step-by-step instructions.
// Contains 100+ knots organized by Trail Life USA tiers (Navigator, Adventurer, Ranger, Woodsman, Expert).

export const KNOT_REGISTRY = {
    "1": {
        "id": 1,
        "name": "Square Knot",
        "program": "Navigator",
        "difficulty": "Easy",
        "xp_value": 50,
        "tags": [
            "Binding",
            "First Aid",
            "Basic"
        ],
        "description": "A simple binding knot used to secure a rope or line around an object.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Navigator rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Hold one end of the rope in each hand."
            },
            {
                "step": 2,
                "instruction": "Cross the right end over and under the left end."
            },
            {
                "step": 3,
                "instruction": "Cross the left end over and under the right end."
            },
            {
                "step": 4,
                "instruction": "Pull both ends tight to secure the knot."
            }
        ],
        "model_id": "square_knot_v1"
    },
    "2": {
        "id": 2,
        "name": "Bowline",
        "program": "Navigator",
        "difficulty": "Medium",
        "xp_value": 100,
        "tags": [
            "Rescue",
            "Loop",
            "Essential"
        ],
        "description": "An ancient and simple knot used to form a fixed loop at the end of a rope.",
        "scenarios": [
            "Used in camping scenarios requiring a Loop",
            "Standard requirement for the Navigator rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Form a small loop (the rabbit hole) in the standing part of the rope."
            },
            {
                "step": 2,
                "instruction": "Pass the working end (the rabbit) up through the loop."
            },
            {
                "step": 3,
                "instruction": "Bring the working end around behind the standing part (the tree)."
            },
            {
                "step": 4,
                "instruction": "Pass the working end back down through the small loop."
            },
            {
                "step": 5,
                "instruction": "Pull the working end and the standing part in opposite directions to tighten."
            }
        ],
        "model_id": "bowline_v1"
    },
    "3": {
        "id": 3,
        "name": "Clove Hitch",
        "program": "Navigator",
        "difficulty": "Medium",
        "xp_value": 75,
        "tags": [
            "Hitch",
            "Pioneering",
            "Securing"
        ],
        "description": "A simple binding knot used to secure a rope to a spar, pole, or another rope.",
        "scenarios": [
            "Used in camping scenarios requiring a Hitch",
            "Standard requirement for the Navigator rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Wrap the working end of the rope around the pole."
            },
            {
                "step": 2,
                "instruction": "Cross the working end over the standing part to form an X."
            },
            {
                "step": 3,
                "instruction": "Wrap the working end around the pole again, below the first wrap."
            },
            {
                "step": 4,
                "instruction": "Tuck the working end under the X you created."
            },
            {
                "step": 5,
                "instruction": "Pull both ends to tighten the hitch against the pole."
            }
        ],
        "model_id": "clove_hitch_v1"
    },
    "4": {
        "id": 4,
        "name": "Two Half Hitches",
        "program": "Navigator",
        "difficulty": "Easy",
        "xp_value": 50,
        "tags": [
            "Hitch",
            "Basic",
            "Securing"
        ],
        "description": "A reliable knot used to tie a rope to a post or ring.",
        "scenarios": [
            "Used in camping scenarios requiring a Hitch",
            "Standard requirement for the Navigator rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Pass the working end around the post."
            },
            {
                "step": 2,
                "instruction": "Bring the end over the standing part and through the loop formed."
            },
            {
                "step": 3,
                "instruction": "Repeat step 2 to form a second half hitch."
            },
            {
                "step": 4,
                "instruction": "Pull tight to secure."
            }
        ],
        "model_id": "two_half_hitches_v1"
    },
    "5": {
        "id": 5,
        "name": "Taut-Line Hitch",
        "program": "Navigator",
        "difficulty": "Hard",
        "xp_value": 125,
        "tags": [
            "Hitch",
            "Adjustable",
            "Camping"
        ],
        "description": "An adjustable loop knot for use on lines under tension.",
        "scenarios": [
            "Used in camping scenarios requiring a Hitch",
            "Standard requirement for the Navigator rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Pass the working end around the anchor object."
            },
            {
                "step": 2,
                "instruction": "Bring the working end back alongside the standing part and wrap it around the standing part twice, inside the loop."
            },
            {
                "step": 3,
                "instruction": "Make a third wrap around the standing part, outside the loop."
            },
            {
                "step": 4,
                "instruction": "Pull the knot tight. Slide the knot up or down the standing part to adjust tension."
            }
        ],
        "model_id": "taut_line_hitch_v1"
    },
    "6": {
        "id": 6,
        "name": "Timber Hitch",
        "program": "Navigator",
        "difficulty": "Easy",
        "xp_value": 50,
        "tags": [
            "Hitch",
            "Dragging",
            "Pioneering"
        ],
        "description": "A knot used to attach a single length of rope to a cylindrical object.",
        "scenarios": [
            "Used in camping scenarios requiring a Hitch",
            "Standard requirement for the Navigator rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Pass the working end around the log."
            },
            {
                "step": 2,
                "instruction": "Pass the end around the standing part."
            },
            {
                "step": 3,
                "instruction": "Wrap the end around itself three or more times."
            },
            {
                "step": 4,
                "instruction": "Pull on the standing part to tighten the hitch against the log."
            }
        ],
        "model_id": "timber_hitch_v1"
    },
    "7": {
        "id": 7,
        "name": "Figure Eight",
        "program": "Adventurer",
        "difficulty": "Easy",
        "xp_value": 50,
        "tags": [
            "Stopper",
            "Basic",
            "Climbing"
        ],
        "description": "A stopper knot to prevent rope from slipping.",
        "scenarios": [
            "Used in camping scenarios requiring a Stopper",
            "Standard requirement for the Navigator rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Form a loop in the rope."
            },
            {
                "step": 2,
                "instruction": "Pass the working end behind the standing part."
            },
            {
                "step": 3,
                "instruction": "Pass the working end down through the loop."
            },
            {
                "step": 4,
                "instruction": "Pull tight to form the figure eight shape."
            }
        ],
        "model_id": "figure_eight_v1"
    },
    "8": {
        "id": 8,
        "name": "Sheet Bend",
        "program": "Adventurer",
        "difficulty": "Medium",
        "xp_value": 75,
        "tags": [
            "Bend",
            "Joining",
            "Unequal Ropes"
        ],
        "description": "A knot used for temporarily joining two ropes, especially if they are of different diameters.",
        "scenarios": [
            "Used in camping scenarios requiring a Bend",
            "Standard requirement for the Navigator rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Form a bight (U-shape) in the thicker rope."
            },
            {
                "step": 2,
                "instruction": "Pass the working end of the thinner rope up through the bight."
            },
            {
                "step": 3,
                "instruction": "Wrap the thinner rope around behind both parts of the thicker rope's bight."
            },
            {
                "step": 4,
                "instruction": "Tuck the thinner rope under its own standing part."
            },
            {
                "step": 5,
                "instruction": "Pull all ends to tighten."
            }
        ],
        "model_id": "sheet_bend_v1"
    },
    "9": {
        "id": 9,
        "name": "Daisy Chain",
        "program": "Adventurer",
        "difficulty": "Medium",
        "xp_value": 150,
        "tags": [
            "Shortening",
            "Storage",
            "Decorative"
        ],
        "description": "A method of shortening a rope or cord without cutting it.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Navigator rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Form a slip knot near one end of the rope."
            },
            {
                "step": 2,
                "instruction": "Reach through the loop of the slip knot and pull a bight of the standing part through."
            },
            {
                "step": 3,
                "instruction": "This creates a new loop. Reach through this new loop and pull another bight through."
            },
            {
                "step": 4,
                "instruction": "Repeat this process to form a chain of desired length."
            },
            {
                "step": 5,
                "instruction": "To lock the chain, pass the working end entirely through the final loop."
            }
        ],
        "model_id": "daisy_chain_v1"
    },
    "10": {
        "id": 10,
        "name": "Trucker's Hitch",
        "program": "Adventurer",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Hitch",
            "Tensioning",
            "Mechanical Advantage"
        ],
        "description": "A compound knot commonly used for securing loads on trucks or trailers.",
        "scenarios": [
            "Used in camping scenarios requiring a Hitch",
            "Standard requirement for the Navigator rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Tie one end of the rope to a fixed anchor point."
            },
            {
                "step": 2,
                "instruction": "Form a loop (like a directional figure eight or alpine butterfly) in the middle of the rope."
            },
            {
                "step": 3,
                "instruction": "Pass the working end around the second anchor point."
            },
            {
                "step": 4,
                "instruction": "Pass the working end through the loop created in step 2."
            },
            {
                "step": 5,
                "instruction": "Pull tight to create tension (3:1 mechanical advantage) and secure with two half hitches."
            }
        ],
        "model_id": "trucker_s_hitch_v1"
    },
    "11": {
        "id": 11,
        "name": "Prusik Knot",
        "program": "Adventurer",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Friction",
            "Climbing",
            "Rescue"
        ],
        "description": "A friction hitch used to attach a loop of cord around a rope, applied in climbing and mountaineering.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Navigator rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Take a loop of smaller diameter cord (Prusik loop)."
            },
            {
                "step": 2,
                "instruction": "Pass the knot of the loop behind the main rope."
            },
            {
                "step": 3,
                "instruction": "Pass the other end of the loop through the knot end."
            },
            {
                "step": 4,
                "instruction": "Wrap it through the knot end 2 or 3 more times, working inside towards the center."
            },
            {
                "step": 5,
                "instruction": "Dress the knot neatly and pull tight."
            }
        ],
        "model_id": "prusik_knot_v1"
    },
    "12": {
        "id": 12,
        "name": "Alpine Butterfly",
        "program": "Adventurer",
        "difficulty": "Medium",
        "xp_value": 125,
        "tags": [
            "Loop",
            "Midline",
            "Climbing"
        ],
        "description": "A secure loop tied in the bight (middle) of a rope.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Navigator rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Wrap the rope around your hand three times."
            },
            {
                "step": 2,
                "instruction": "Pick up the middle wrap and pull it towards your fingertips."
            },
            {
                "step": 3,
                "instruction": "Pass it over the other two wraps."
            },
            {
                "step": 4,
                "instruction": "Tuck it back under the other two wraps."
            },
            {
                "step": 5,
                "instruction": "Slide it off your hand and pull the loop and both standing ends tight."
            }
        ],
        "model_id": "alpine_butterfly_v1"
    },
    "13": {
        "id": 13,
        "name": "Rolling Hitch",
        "program": "Navigator",
        "difficulty": "Easy",
        "xp_value": 50,
        "tags": [
            "Hitch",
            "Navigator",
            "Scouting"
        ],
        "description": "The Rolling Hitch is an essential knot in the Hitch category, commonly used in Navigator level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Hitch",
            "Standard requirement for the Navigator rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Rolling Hitch."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Hitch."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Rolling Hitch pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Rolling Hitch."
            }
        ],
        "model_id": "rolling_hitch_v1"
    },
    "14": {
        "id": 14,
        "name": "Cleat Hitch",
        "program": "Navigator",
        "difficulty": "Easy",
        "xp_value": 50,
        "tags": [
            "Hitch",
            "Navigator",
            "Scouting"
        ],
        "description": "The Cleat Hitch is an essential knot in the Hitch category, commonly used in Navigator level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Hitch",
            "Standard requirement for the Navigator rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Cleat Hitch."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Hitch."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Cleat Hitch pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Cleat Hitch."
            }
        ],
        "model_id": "cleat_hitch_v1"
    },
    "15": {
        "id": 15,
        "name": "Marlinspike Hitch",
        "program": "Navigator",
        "difficulty": "Easy",
        "xp_value": 50,
        "tags": [
            "Hitch",
            "Navigator",
            "Scouting"
        ],
        "description": "The Marlinspike Hitch is an essential knot in the Hitch category, commonly used in Navigator level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Hitch",
            "Standard requirement for the Navigator rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Marlinspike Hitch."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Hitch."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Marlinspike Hitch pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Marlinspike Hitch."
            }
        ],
        "model_id": "marlinspike_hitch_v1"
    },
    "16": {
        "id": 16,
        "name": "Midshipman's Hitch",
        "program": "Adventurer",
        "difficulty": "Medium",
        "xp_value": 100,
        "tags": [
            "Hitch",
            "Adventurer",
            "Scouting"
        ],
        "description": "The Midshipman's Hitch is an essential knot in the Hitch category, commonly used in Adventurer level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Hitch",
            "Standard requirement for the Adventurer rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Midshipman's Hitch."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Hitch."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Midshipman's Hitch pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Midshipman's Hitch."
            }
        ],
        "model_id": "midshipman_s_hitch_v1"
    },
    "17": {
        "id": 17,
        "name": "Farrimond Friction Hitch",
        "program": "Adventurer",
        "difficulty": "Medium",
        "xp_value": 100,
        "tags": [
            "Hitch",
            "Adventurer",
            "Scouting"
        ],
        "description": "The Farrimond Friction Hitch is an essential knot in the Hitch category, commonly used in Adventurer level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Hitch",
            "Standard requirement for the Adventurer rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Farrimond Friction Hitch."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Hitch."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Farrimond Friction Hitch pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Farrimond Friction Hitch."
            }
        ],
        "model_id": "farrimond_friction_hitch_v1"
    },
    "18": {
        "id": 18,
        "name": "Barrel Hitch",
        "program": "Adventurer",
        "difficulty": "Medium",
        "xp_value": 100,
        "tags": [
            "Hitch",
            "Adventurer",
            "Scouting"
        ],
        "description": "The Barrel Hitch is an essential knot in the Hitch category, commonly used in Adventurer level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Hitch",
            "Standard requirement for the Adventurer rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Barrel Hitch."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Hitch."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Barrel Hitch pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Barrel Hitch."
            }
        ],
        "model_id": "barrel_hitch_v1"
    },
    "19": {
        "id": 19,
        "name": "Cow Hitch",
        "program": "Adventurer",
        "difficulty": "Medium",
        "xp_value": 100,
        "tags": [
            "Hitch",
            "Adventurer",
            "Scouting"
        ],
        "description": "The Cow Hitch is an essential knot in the Hitch category, commonly used in Adventurer level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Hitch",
            "Standard requirement for the Adventurer rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Cow Hitch."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Hitch."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Cow Hitch pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Cow Hitch."
            }
        ],
        "model_id": "cow_hitch_v1"
    },
    "20": {
        "id": 20,
        "name": "Girth Hitch",
        "program": "Adventurer",
        "difficulty": "Medium",
        "xp_value": 100,
        "tags": [
            "Hitch",
            "Adventurer",
            "Scouting"
        ],
        "description": "The Girth Hitch is an essential knot in the Hitch category, commonly used in Adventurer level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Hitch",
            "Standard requirement for the Adventurer rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Girth Hitch."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Hitch."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Girth Hitch pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Girth Hitch."
            }
        ],
        "model_id": "girth_hitch_v1"
    },
    "21": {
        "id": 21,
        "name": "Buntline Hitch",
        "program": "Adventurer",
        "difficulty": "Medium",
        "xp_value": 100,
        "tags": [
            "Hitch",
            "Adventurer",
            "Scouting"
        ],
        "description": "The Buntline Hitch is an essential knot in the Hitch category, commonly used in Adventurer level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Hitch",
            "Standard requirement for the Adventurer rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Buntline Hitch."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Hitch."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Buntline Hitch pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Buntline Hitch."
            }
        ],
        "model_id": "buntline_hitch_v1"
    },
    "22": {
        "id": 22,
        "name": "Highwayman's Hitch",
        "program": "Adventurer",
        "difficulty": "Medium",
        "xp_value": 100,
        "tags": [
            "Hitch",
            "Adventurer",
            "Scouting"
        ],
        "description": "The Highwayman's Hitch is an essential knot in the Hitch category, commonly used in Adventurer level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Hitch",
            "Standard requirement for the Adventurer rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Highwayman's Hitch."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Hitch."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Highwayman's Hitch pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Highwayman's Hitch."
            }
        ],
        "model_id": "highwayman_s_hitch_v1"
    },
    "23": {
        "id": 23,
        "name": "Icicle Hitch",
        "program": "Adventurer",
        "difficulty": "Medium",
        "xp_value": 100,
        "tags": [
            "Hitch",
            "Adventurer",
            "Scouting"
        ],
        "description": "The Icicle Hitch is an essential knot in the Hitch category, commonly used in Adventurer level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Hitch",
            "Standard requirement for the Adventurer rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Icicle Hitch."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Hitch."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Icicle Hitch pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Icicle Hitch."
            }
        ],
        "model_id": "icicle_hitch_v1"
    },
    "24": {
        "id": 24,
        "name": "Killick Hitch",
        "program": "Adventurer",
        "difficulty": "Medium",
        "xp_value": 100,
        "tags": [
            "Hitch",
            "Adventurer",
            "Scouting"
        ],
        "description": "The Killick Hitch is an essential knot in the Hitch category, commonly used in Adventurer level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Hitch",
            "Standard requirement for the Adventurer rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Killick Hitch."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Hitch."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Killick Hitch pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Killick Hitch."
            }
        ],
        "model_id": "killick_hitch_v1"
    },
    "25": {
        "id": 25,
        "name": "Knute Hitch",
        "program": "Adventurer",
        "difficulty": "Medium",
        "xp_value": 100,
        "tags": [
            "Hitch",
            "Adventurer",
            "Scouting"
        ],
        "description": "The Knute Hitch is an essential knot in the Hitch category, commonly used in Adventurer level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Hitch",
            "Standard requirement for the Adventurer rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Knute Hitch."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Hitch."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Knute Hitch pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Knute Hitch."
            }
        ],
        "model_id": "knute_hitch_v1"
    },
    "26": {
        "id": 26,
        "name": "Magnus Hitch",
        "program": "Adventurer",
        "difficulty": "Medium",
        "xp_value": 100,
        "tags": [
            "Hitch",
            "Adventurer",
            "Scouting"
        ],
        "description": "The Magnus Hitch is an essential knot in the Hitch category, commonly used in Adventurer level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Hitch",
            "Standard requirement for the Adventurer rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Magnus Hitch."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Hitch."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Magnus Hitch pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Magnus Hitch."
            }
        ],
        "model_id": "magnus_hitch_v1"
    },
    "27": {
        "id": 27,
        "name": "Ossel Hitch",
        "program": "Adventurer",
        "difficulty": "Medium",
        "xp_value": 100,
        "tags": [
            "Hitch",
            "Adventurer",
            "Scouting"
        ],
        "description": "The Ossel Hitch is an essential knot in the Hitch category, commonly used in Adventurer level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Hitch",
            "Standard requirement for the Adventurer rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Ossel Hitch."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Hitch."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Ossel Hitch pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Ossel Hitch."
            }
        ],
        "model_id": "ossel_hitch_v1"
    },
    "28": {
        "id": 28,
        "name": "Pile Hitch",
        "program": "Adventurer",
        "difficulty": "Medium",
        "xp_value": 100,
        "tags": [
            "Hitch",
            "Adventurer",
            "Scouting"
        ],
        "description": "The Pile Hitch is an essential knot in the Hitch category, commonly used in Adventurer level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Hitch",
            "Standard requirement for the Adventurer rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Pile Hitch."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Hitch."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Pile Hitch pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Pile Hitch."
            }
        ],
        "model_id": "pile_hitch_v1"
    },
    "29": {
        "id": 29,
        "name": "Snell Knot",
        "program": "Adventurer",
        "difficulty": "Medium",
        "xp_value": 100,
        "tags": [
            "Utility",
            "Adventurer",
            "Scouting"
        ],
        "description": "The Snell Knot is an essential knot in the Utility category, commonly used in Adventurer level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Adventurer rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Snell Knot."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Utility."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Snell Knot pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Snell Knot."
            }
        ],
        "model_id": "snell_knot_v1"
    },
    "30": {
        "id": 30,
        "name": "Tensionless Hitch",
        "program": "Adventurer",
        "difficulty": "Medium",
        "xp_value": 100,
        "tags": [
            "Hitch",
            "Adventurer",
            "Scouting"
        ],
        "description": "The Tensionless Hitch is an essential knot in the Hitch category, commonly used in Adventurer level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Hitch",
            "Standard requirement for the Adventurer rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Tensionless Hitch."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Hitch."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Tensionless Hitch pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Tensionless Hitch."
            }
        ],
        "model_id": "tensionless_hitch_v1"
    },
    "31": {
        "id": 31,
        "name": "Blake's Hitch",
        "program": "Adventurer",
        "difficulty": "Medium",
        "xp_value": 100,
        "tags": [
            "Hitch",
            "Adventurer",
            "Scouting"
        ],
        "description": "The Blake's Hitch is an essential knot in the Hitch category, commonly used in Adventurer level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Hitch",
            "Standard requirement for the Adventurer rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Blake's Hitch."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Hitch."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Blake's Hitch pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Blake's Hitch."
            }
        ],
        "model_id": "blake_s_hitch_v1"
    },
    "32": {
        "id": 32,
        "name": "Distel Hitch",
        "program": "Adventurer",
        "difficulty": "Medium",
        "xp_value": 100,
        "tags": [
            "Hitch",
            "Adventurer",
            "Scouting"
        ],
        "description": "The Distel Hitch is an essential knot in the Hitch category, commonly used in Adventurer level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Hitch",
            "Standard requirement for the Adventurer rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Distel Hitch."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Hitch."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Distel Hitch pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Distel Hitch."
            }
        ],
        "model_id": "distel_hitch_v1"
    },
    "33": {
        "id": 33,
        "name": "Klemheist Knot",
        "program": "Adventurer",
        "difficulty": "Medium",
        "xp_value": 100,
        "tags": [
            "Utility",
            "Adventurer",
            "Scouting"
        ],
        "description": "The Klemheist Knot is an essential knot in the Utility category, commonly used in Adventurer level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Adventurer rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Klemheist Knot."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Utility."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Klemheist Knot pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Klemheist Knot."
            }
        ],
        "model_id": "klemheist_knot_v1"
    },
    "34": {
        "id": 34,
        "name": "Valdotain Tresse",
        "program": "Adventurer",
        "difficulty": "Medium",
        "xp_value": 100,
        "tags": [
            "Utility",
            "Adventurer",
            "Scouting"
        ],
        "description": "The Valdotain Tresse is an essential knot in the Utility category, commonly used in Adventurer level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Adventurer rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Valdotain Tresse."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Utility."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Valdotain Tresse pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Valdotain Tresse."
            }
        ],
        "model_id": "valdotain_tresse_v1"
    },
    "35": {
        "id": 35,
        "name": "Schwabisch Hitch",
        "program": "Adventurer",
        "difficulty": "Medium",
        "xp_value": 100,
        "tags": [
            "Hitch",
            "Adventurer",
            "Scouting"
        ],
        "description": "The Schwabisch Hitch is an essential knot in the Hitch category, commonly used in Adventurer level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Hitch",
            "Standard requirement for the Adventurer rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Schwabisch Hitch."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Hitch."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Schwabisch Hitch pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Schwabisch Hitch."
            }
        ],
        "model_id": "schwabisch_hitch_v1"
    },
    "36": {
        "id": 36,
        "name": "Bowline on a Bight",
        "program": "Adventurer",
        "difficulty": "Medium",
        "xp_value": 100,
        "tags": [
            "Loop",
            "Adventurer",
            "Scouting"
        ],
        "description": "The Bowline on a Bight is an essential knot in the Loop category, commonly used in Adventurer level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Loop",
            "Standard requirement for the Adventurer rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Bowline on a Bight."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Loop."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Bowline on a Bight pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Bowline on a Bight."
            }
        ],
        "model_id": "bowline_on_a_bight_v1"
    },
    "37": {
        "id": 37,
        "name": "French Bowline",
        "program": "Adventurer",
        "difficulty": "Medium",
        "xp_value": 100,
        "tags": [
            "Loop",
            "Adventurer",
            "Scouting"
        ],
        "description": "The French Bowline is an essential knot in the Loop category, commonly used in Adventurer level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Loop",
            "Standard requirement for the Adventurer rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the French Bowline."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Loop."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the French Bowline pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the French Bowline."
            }
        ],
        "model_id": "french_bowline_v1"
    },
    "38": {
        "id": 38,
        "name": "Water Bowline",
        "program": "Adventurer",
        "difficulty": "Medium",
        "xp_value": 100,
        "tags": [
            "Loop",
            "Adventurer",
            "Scouting"
        ],
        "description": "The Water Bowline is an essential knot in the Loop category, commonly used in Adventurer level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Loop",
            "Standard requirement for the Adventurer rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Water Bowline."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Loop."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Water Bowline pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Water Bowline."
            }
        ],
        "model_id": "water_bowline_v1"
    },
    "39": {
        "id": 39,
        "name": "Spanish Bowline",
        "program": "Adventurer",
        "difficulty": "Medium",
        "xp_value": 100,
        "tags": [
            "Loop",
            "Adventurer",
            "Scouting"
        ],
        "description": "The Spanish Bowline is an essential knot in the Loop category, commonly used in Adventurer level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Loop",
            "Standard requirement for the Adventurer rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Spanish Bowline."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Loop."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Spanish Bowline pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Spanish Bowline."
            }
        ],
        "model_id": "spanish_bowline_v1"
    },
    "40": {
        "id": 40,
        "name": "Portuguese Bowline",
        "program": "Adventurer",
        "difficulty": "Medium",
        "xp_value": 100,
        "tags": [
            "Loop",
            "Adventurer",
            "Scouting"
        ],
        "description": "The Portuguese Bowline is an essential knot in the Loop category, commonly used in Adventurer level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Loop",
            "Standard requirement for the Adventurer rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Portuguese Bowline."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Loop."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Portuguese Bowline pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Portuguese Bowline."
            }
        ],
        "model_id": "portuguese_bowline_v1"
    },
    "41": {
        "id": 41,
        "name": "Yosemite Bowline",
        "program": "Ranger",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Loop",
            "Ranger",
            "Scouting"
        ],
        "description": "The Yosemite Bowline is an essential knot in the Loop category, commonly used in Ranger level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Loop",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Yosemite Bowline."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Loop."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Yosemite Bowline pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Yosemite Bowline."
            }
        ],
        "model_id": "yosemite_bowline_v1"
    },
    "42": {
        "id": 42,
        "name": "Directional Figure Eight",
        "program": "Ranger",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Utility",
            "Ranger",
            "Scouting"
        ],
        "description": "The Directional Figure Eight is an essential knot in the Utility category, commonly used in Ranger level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Directional Figure Eight."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Utility."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Directional Figure Eight pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Directional Figure Eight."
            }
        ],
        "model_id": "directional_figure_eight_v1"
    },
    "43": {
        "id": 43,
        "name": "Figure Eight on a Bight",
        "program": "Ranger",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Utility",
            "Ranger",
            "Scouting"
        ],
        "description": "The Figure Eight on a Bight is an essential knot in the Utility category, commonly used in Ranger level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Figure Eight on a Bight."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Utility."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Figure Eight on a Bight pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Figure Eight on a Bight."
            }
        ],
        "model_id": "figure_eight_on_a_bight_v1"
    },
    "44": {
        "id": 44,
        "name": "Figure Eight Follow-Through",
        "program": "Ranger",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Utility",
            "Ranger",
            "Scouting"
        ],
        "description": "The Figure Eight Follow-Through is an essential knot in the Utility category, commonly used in Ranger level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Figure Eight Follow-Through."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Utility."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Figure Eight Follow-Through pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Figure Eight Follow-Through."
            }
        ],
        "model_id": "figure_eight_follow_through_v1"
    },
    "45": {
        "id": 45,
        "name": "Artillery Loop",
        "program": "Ranger",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Loop",
            "Ranger",
            "Scouting"
        ],
        "description": "The Artillery Loop is an essential knot in the Loop category, commonly used in Ranger level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Loop",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Artillery Loop."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Loop."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Artillery Loop pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Artillery Loop."
            }
        ],
        "model_id": "artillery_loop_v1"
    },
    "46": {
        "id": 46,
        "name": "Farmer's Loop",
        "program": "Ranger",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Loop",
            "Ranger",
            "Scouting"
        ],
        "description": "The Farmer's Loop is an essential knot in the Loop category, commonly used in Ranger level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Loop",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Farmer's Loop."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Loop."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Farmer's Loop pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Farmer's Loop."
            }
        ],
        "model_id": "farmer_s_loop_v1"
    },
    "47": {
        "id": 47,
        "name": "Honda Knot",
        "program": "Ranger",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Utility",
            "Ranger",
            "Scouting"
        ],
        "description": "The Honda Knot is an essential knot in the Utility category, commonly used in Ranger level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Honda Knot."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Utility."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Honda Knot pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Honda Knot."
            }
        ],
        "model_id": "honda_knot_v1"
    },
    "48": {
        "id": 48,
        "name": "Manharness Knot",
        "program": "Ranger",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Utility",
            "Ranger",
            "Scouting"
        ],
        "description": "The Manharness Knot is an essential knot in the Utility category, commonly used in Ranger level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Manharness Knot."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Utility."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Manharness Knot pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Manharness Knot."
            }
        ],
        "model_id": "manharness_knot_v1"
    },
    "49": {
        "id": 49,
        "name": "Perfection Loop",
        "program": "Ranger",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Loop",
            "Ranger",
            "Scouting"
        ],
        "description": "The Perfection Loop is an essential knot in the Loop category, commonly used in Ranger level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Loop",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Perfection Loop."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Loop."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Perfection Loop pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Perfection Loop."
            }
        ],
        "model_id": "perfection_loop_v1"
    },
    "50": {
        "id": 50,
        "name": "Surgeon's Loop",
        "program": "Ranger",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Loop",
            "Ranger",
            "Scouting"
        ],
        "description": "The Surgeon's Loop is an essential knot in the Loop category, commonly used in Ranger level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Loop",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Surgeon's Loop."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Loop."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Surgeon's Loop pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Surgeon's Loop."
            }
        ],
        "model_id": "surgeon_s_loop_v1"
    },
    "51": {
        "id": 51,
        "name": "Angler's Loop",
        "program": "Ranger",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Loop",
            "Ranger",
            "Scouting"
        ],
        "description": "The Angler's Loop is an essential knot in the Loop category, commonly used in Ranger level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Loop",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Angler's Loop."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Loop."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Angler's Loop pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Angler's Loop."
            }
        ],
        "model_id": "angler_s_loop_v1"
    },
    "52": {
        "id": 52,
        "name": "Bimini Twist",
        "program": "Ranger",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Utility",
            "Ranger",
            "Scouting"
        ],
        "description": "The Bimini Twist is an essential knot in the Utility category, commonly used in Ranger level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Bimini Twist."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Utility."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Bimini Twist pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Bimini Twist."
            }
        ],
        "model_id": "bimini_twist_v1"
    },
    "53": {
        "id": 53,
        "name": "Dropper Loop",
        "program": "Ranger",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Loop",
            "Ranger",
            "Scouting"
        ],
        "description": "The Dropper Loop is an essential knot in the Loop category, commonly used in Ranger level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Loop",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Dropper Loop."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Loop."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Dropper Loop pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Dropper Loop."
            }
        ],
        "model_id": "dropper_loop_v1"
    },
    "54": {
        "id": 54,
        "name": "Non-Slip Mono",
        "program": "Ranger",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Utility",
            "Ranger",
            "Scouting"
        ],
        "description": "The Non-Slip Mono is an essential knot in the Utility category, commonly used in Ranger level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Non-Slip Mono."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Utility."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Non-Slip Mono pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Non-Slip Mono."
            }
        ],
        "model_id": "non_slip_mono_v1"
    },
    "55": {
        "id": 55,
        "name": "Carrick Bend",
        "program": "Ranger",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Bend",
            "Ranger",
            "Scouting"
        ],
        "description": "The Carrick Bend is an essential knot in the Bend category, commonly used in Ranger level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Bend",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Carrick Bend."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Bend."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Carrick Bend pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Carrick Bend."
            }
        ],
        "model_id": "carrick_bend_v1"
    },
    "56": {
        "id": 56,
        "name": "Double Sheet Bend",
        "program": "Ranger",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Bend",
            "Ranger",
            "Scouting"
        ],
        "description": "The Double Sheet Bend is an essential knot in the Bend category, commonly used in Ranger level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Bend",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Double Sheet Bend."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Bend."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Double Sheet Bend pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Double Sheet Bend."
            }
        ],
        "model_id": "double_sheet_bend_v1"
    },
    "57": {
        "id": 57,
        "name": "Water Knot",
        "program": "Ranger",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Utility",
            "Ranger",
            "Scouting"
        ],
        "description": "The Water Knot is an essential knot in the Utility category, commonly used in Ranger level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Water Knot."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Utility."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Water Knot pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Water Knot."
            }
        ],
        "model_id": "water_knot_v1"
    },
    "58": {
        "id": 58,
        "name": "Double Fisherman's Knot",
        "program": "Ranger",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Utility",
            "Ranger",
            "Scouting"
        ],
        "description": "The Double Fisherman's Knot is an essential knot in the Utility category, commonly used in Ranger level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Double Fisherman's Knot."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Utility."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Double Fisherman's Knot pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Double Fisherman's Knot."
            }
        ],
        "model_id": "double_fisherman_s_knot_v1"
    },
    "59": {
        "id": 59,
        "name": "Ashley's Bend",
        "program": "Ranger",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Bend",
            "Ranger",
            "Scouting"
        ],
        "description": "The Ashley's Bend is an essential knot in the Bend category, commonly used in Ranger level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Bend",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Ashley's Bend."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Bend."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Ashley's Bend pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Ashley's Bend."
            }
        ],
        "model_id": "ashley_s_bend_v1"
    },
    "60": {
        "id": 60,
        "name": "Hunter's Bend",
        "program": "Ranger",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Bend",
            "Ranger",
            "Scouting"
        ],
        "description": "The Hunter's Bend is an essential knot in the Bend category, commonly used in Ranger level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Bend",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Hunter's Bend."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Bend."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Hunter's Bend pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Hunter's Bend."
            }
        ],
        "model_id": "hunter_s_bend_v1"
    },
    "61": {
        "id": 61,
        "name": "Zeppelin Bend",
        "program": "Ranger",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Bend",
            "Ranger",
            "Scouting"
        ],
        "description": "The Zeppelin Bend is an essential knot in the Bend category, commonly used in Ranger level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Bend",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Zeppelin Bend."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Bend."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Zeppelin Bend pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Zeppelin Bend."
            }
        ],
        "model_id": "zeppelin_bend_v1"
    },
    "62": {
        "id": 62,
        "name": "Blood Knot",
        "program": "Ranger",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Utility",
            "Ranger",
            "Scouting"
        ],
        "description": "The Blood Knot is an essential knot in the Utility category, commonly used in Ranger level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Blood Knot."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Utility."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Blood Knot pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Blood Knot."
            }
        ],
        "model_id": "blood_knot_v1"
    },
    "63": {
        "id": 63,
        "name": "Nail Knot",
        "program": "Ranger",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Utility",
            "Ranger",
            "Scouting"
        ],
        "description": "The Nail Knot is an essential knot in the Utility category, commonly used in Ranger level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Nail Knot."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Utility."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Nail Knot pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Nail Knot."
            }
        ],
        "model_id": "nail_knot_v1"
    },
    "64": {
        "id": 64,
        "name": "Albright Knot",
        "program": "Ranger",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Utility",
            "Ranger",
            "Scouting"
        ],
        "description": "The Albright Knot is an essential knot in the Utility category, commonly used in Ranger level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Albright Knot."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Utility."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Albright Knot pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Albright Knot."
            }
        ],
        "model_id": "albright_knot_v1"
    },
    "65": {
        "id": 65,
        "name": "Surgeon's Knot",
        "program": "Ranger",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Utility",
            "Ranger",
            "Scouting"
        ],
        "description": "The Surgeon's Knot is an essential knot in the Utility category, commonly used in Ranger level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Surgeon's Knot."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Utility."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Surgeon's Knot pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Surgeon's Knot."
            }
        ],
        "model_id": "surgeon_s_knot_v1"
    },
    "66": {
        "id": 66,
        "name": "Weaver's Knot",
        "program": "Ranger",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Utility",
            "Ranger",
            "Scouting"
        ],
        "description": "The Weaver's Knot is an essential knot in the Utility category, commonly used in Ranger level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Weaver's Knot."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Utility."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Weaver's Knot pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Weaver's Knot."
            }
        ],
        "model_id": "weaver_s_knot_v1"
    },
    "67": {
        "id": 67,
        "name": "Vice Versa Bend",
        "program": "Ranger",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Bend",
            "Ranger",
            "Scouting"
        ],
        "description": "The Vice Versa Bend is an essential knot in the Bend category, commonly used in Ranger level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Bend",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Vice Versa Bend."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Bend."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Vice Versa Bend pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Vice Versa Bend."
            }
        ],
        "model_id": "vice_versa_bend_v1"
    },
    "68": {
        "id": 68,
        "name": "Simple Simon Under",
        "program": "Ranger",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Utility",
            "Ranger",
            "Scouting"
        ],
        "description": "The Simple Simon Under is an essential knot in the Utility category, commonly used in Ranger level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Simple Simon Under."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Utility."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Simple Simon Under pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Simple Simon Under."
            }
        ],
        "model_id": "simple_simon_under_v1"
    },
    "69": {
        "id": 69,
        "name": "Simple Simon Over",
        "program": "Ranger",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Utility",
            "Ranger",
            "Scouting"
        ],
        "description": "The Simple Simon Over is an essential knot in the Utility category, commonly used in Ranger level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Simple Simon Over."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Utility."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Simple Simon Over pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Simple Simon Over."
            }
        ],
        "model_id": "simple_simon_over_v1"
    },
    "70": {
        "id": 70,
        "name": "Overhand Knot",
        "program": "Ranger",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Utility",
            "Ranger",
            "Scouting"
        ],
        "description": "The Overhand Knot is an essential knot in the Utility category, commonly used in Ranger level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Overhand Knot."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Utility."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Overhand Knot pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Overhand Knot."
            }
        ],
        "model_id": "overhand_knot_v1"
    },
    "71": {
        "id": 71,
        "name": "Double Overhand Knot",
        "program": "Woodsman",
        "difficulty": "Expert",
        "xp_value": 200,
        "tags": [
            "Utility",
            "Woodsman",
            "Scouting"
        ],
        "description": "The Double Overhand Knot is an essential knot in the Utility category, commonly used in Woodsman level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Woodsman rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Double Overhand Knot."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Utility."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Double Overhand Knot pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Double Overhand Knot."
            }
        ],
        "model_id": "double_overhand_knot_v1"
    },
    "72": {
        "id": 72,
        "name": "Stevedore Knot",
        "program": "Woodsman",
        "difficulty": "Expert",
        "xp_value": 200,
        "tags": [
            "Utility",
            "Woodsman",
            "Scouting"
        ],
        "description": "The Stevedore Knot is an essential knot in the Utility category, commonly used in Woodsman level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Woodsman rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Stevedore Knot."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Utility."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Stevedore Knot pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Stevedore Knot."
            }
        ],
        "model_id": "stevedore_knot_v1"
    },
    "73": {
        "id": 73,
        "name": "Ashley's Stopper Knot",
        "program": "Woodsman",
        "difficulty": "Expert",
        "xp_value": 200,
        "tags": [
            "Stopper",
            "Woodsman",
            "Scouting"
        ],
        "description": "The Ashley's Stopper Knot is an essential knot in the Stopper category, commonly used in Woodsman level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Stopper",
            "Standard requirement for the Woodsman rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Ashley's Stopper Knot."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Stopper."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Ashley's Stopper Knot pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Ashley's Stopper Knot."
            }
        ],
        "model_id": "ashley_s_stopper_knot_v1"
    },
    "74": {
        "id": 74,
        "name": "Monkey's Fist",
        "program": "Woodsman",
        "difficulty": "Expert",
        "xp_value": 200,
        "tags": [
            "Utility",
            "Woodsman",
            "Scouting"
        ],
        "description": "The Monkey's Fist is an essential knot in the Utility category, commonly used in Woodsman level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Woodsman rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Monkey's Fist."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Utility."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Monkey's Fist pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Monkey's Fist."
            }
        ],
        "model_id": "monkey_s_fist_v1"
    },
    "75": {
        "id": 75,
        "name": "Heaving Line Knot",
        "program": "Woodsman",
        "difficulty": "Expert",
        "xp_value": 200,
        "tags": [
            "Utility",
            "Woodsman",
            "Scouting"
        ],
        "description": "The Heaving Line Knot is an essential knot in the Utility category, commonly used in Woodsman level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Woodsman rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Heaving Line Knot."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Utility."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Heaving Line Knot pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Heaving Line Knot."
            }
        ],
        "model_id": "heaving_line_knot_v1"
    },
    "76": {
        "id": 76,
        "name": "Oysterman's Stopper",
        "program": "Woodsman",
        "difficulty": "Expert",
        "xp_value": 200,
        "tags": [
            "Stopper",
            "Woodsman",
            "Scouting"
        ],
        "description": "The Oysterman's Stopper is an essential knot in the Stopper category, commonly used in Woodsman level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Stopper",
            "Standard requirement for the Woodsman rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Oysterman's Stopper."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Stopper."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Oysterman's Stopper pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Oysterman's Stopper."
            }
        ],
        "model_id": "oysterman_s_stopper_v1"
    },
    "77": {
        "id": 77,
        "name": "Matthew Walker Knot",
        "program": "Woodsman",
        "difficulty": "Expert",
        "xp_value": 200,
        "tags": [
            "Utility",
            "Woodsman",
            "Scouting"
        ],
        "description": "The Matthew Walker Knot is an essential knot in the Utility category, commonly used in Woodsman level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Woodsman rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Matthew Walker Knot."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Utility."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Matthew Walker Knot pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Matthew Walker Knot."
            }
        ],
        "model_id": "matthew_walker_knot_v1"
    },
    "78": {
        "id": 78,
        "name": "Wall Knot",
        "program": "Woodsman",
        "difficulty": "Expert",
        "xp_value": 200,
        "tags": [
            "Utility",
            "Woodsman",
            "Scouting"
        ],
        "description": "The Wall Knot is an essential knot in the Utility category, commonly used in Woodsman level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Woodsman rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Wall Knot."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Utility."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Wall Knot pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Wall Knot."
            }
        ],
        "model_id": "wall_knot_v1"
    },
    "79": {
        "id": 79,
        "name": "Crown Knot",
        "program": "Woodsman",
        "difficulty": "Expert",
        "xp_value": 200,
        "tags": [
            "Utility",
            "Woodsman",
            "Scouting"
        ],
        "description": "The Crown Knot is an essential knot in the Utility category, commonly used in Woodsman level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Woodsman rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Crown Knot."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Utility."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Crown Knot pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Crown Knot."
            }
        ],
        "model_id": "crown_knot_v1"
    },
    "80": {
        "id": 80,
        "name": "Constrictor Knot",
        "program": "Woodsman",
        "difficulty": "Expert",
        "xp_value": 200,
        "tags": [
            "Binding",
            "Woodsman",
            "Scouting"
        ],
        "description": "The Constrictor Knot is an essential knot in the Binding category, commonly used in Woodsman level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Binding",
            "Standard requirement for the Woodsman rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Constrictor Knot."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Binding."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Constrictor Knot pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Constrictor Knot."
            }
        ],
        "model_id": "constrictor_knot_v1"
    },
    "81": {
        "id": 81,
        "name": "Double Constrictor Knot",
        "program": "Woodsman",
        "difficulty": "Expert",
        "xp_value": 200,
        "tags": [
            "Binding",
            "Woodsman",
            "Scouting"
        ],
        "description": "The Double Constrictor Knot is an essential knot in the Binding category, commonly used in Woodsman level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Binding",
            "Standard requirement for the Woodsman rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Double Constrictor Knot."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Binding."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Double Constrictor Knot pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Double Constrictor Knot."
            }
        ],
        "model_id": "double_constrictor_knot_v1"
    },
    "82": {
        "id": 82,
        "name": "Boa Knot",
        "program": "Woodsman",
        "difficulty": "Expert",
        "xp_value": 200,
        "tags": [
            "Utility",
            "Woodsman",
            "Scouting"
        ],
        "description": "The Boa Knot is an essential knot in the Utility category, commonly used in Woodsman level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Woodsman rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Boa Knot."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Utility."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Boa Knot pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Boa Knot."
            }
        ],
        "model_id": "boa_knot_v1"
    },
    "83": {
        "id": 83,
        "name": "Strangle Knot",
        "program": "Woodsman",
        "difficulty": "Expert",
        "xp_value": 200,
        "tags": [
            "Utility",
            "Woodsman",
            "Scouting"
        ],
        "description": "The Strangle Knot is an essential knot in the Utility category, commonly used in Woodsman level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Woodsman rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Strangle Knot."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Utility."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Strangle Knot pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Strangle Knot."
            }
        ],
        "model_id": "strangle_knot_v1"
    },
    "84": {
        "id": 84,
        "name": "Surgeon's Knot (Binding)",
        "program": "Woodsman",
        "difficulty": "Expert",
        "xp_value": 200,
        "tags": [
            "Binding",
            "Woodsman",
            "Scouting"
        ],
        "description": "The Surgeon's Knot (Binding) is an essential knot in the Binding category, commonly used in Woodsman level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Binding",
            "Standard requirement for the Woodsman rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Surgeon's Knot (Binding)."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Binding."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Surgeon's Knot (Binding) pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Surgeon's Knot (Binding)."
            }
        ],
        "model_id": "surgeon_s_knot_binding_v1"
    },
    "85": {
        "id": 85,
        "name": "Reef Knot",
        "program": "Woodsman",
        "difficulty": "Expert",
        "xp_value": 200,
        "tags": [
            "Utility",
            "Woodsman",
            "Scouting"
        ],
        "description": "The Reef Knot is an essential knot in the Utility category, commonly used in Woodsman level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Woodsman rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Reef Knot."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Utility."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Reef Knot pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Reef Knot."
            }
        ],
        "model_id": "reef_knot_v1"
    },
    "86": {
        "id": 86,
        "name": "Thief Knot",
        "program": "Woodsman",
        "difficulty": "Expert",
        "xp_value": 200,
        "tags": [
            "Utility",
            "Woodsman",
            "Scouting"
        ],
        "description": "The Thief Knot is an essential knot in the Utility category, commonly used in Woodsman level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Woodsman rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Thief Knot."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Utility."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Thief Knot pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Thief Knot."
            }
        ],
        "model_id": "thief_knot_v1"
    },
    "87": {
        "id": 87,
        "name": "Granny Knot",
        "program": "Woodsman",
        "difficulty": "Expert",
        "xp_value": 200,
        "tags": [
            "Utility",
            "Woodsman",
            "Scouting"
        ],
        "description": "The Granny Knot is an essential knot in the Utility category, commonly used in Woodsman level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Woodsman rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Granny Knot."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Utility."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Granny Knot pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Granny Knot."
            }
        ],
        "model_id": "granny_knot_v1"
    },
    "88": {
        "id": 88,
        "name": "Grief Knot",
        "program": "Woodsman",
        "difficulty": "Expert",
        "xp_value": 200,
        "tags": [
            "Utility",
            "Woodsman",
            "Scouting"
        ],
        "description": "The Grief Knot is an essential knot in the Utility category, commonly used in Woodsman level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Woodsman rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Grief Knot."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Utility."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Grief Knot pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Grief Knot."
            }
        ],
        "model_id": "grief_knot_v1"
    },
    "89": {
        "id": 89,
        "name": "Packer's Knot",
        "program": "Woodsman",
        "difficulty": "Expert",
        "xp_value": 200,
        "tags": [
            "Utility",
            "Woodsman",
            "Scouting"
        ],
        "description": "The Packer's Knot is an essential knot in the Utility category, commonly used in Woodsman level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Woodsman rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Packer's Knot."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Utility."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Packer's Knot pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Packer's Knot."
            }
        ],
        "model_id": "packer_s_knot_v1"
    },
    "90": {
        "id": 90,
        "name": "Miller's Knot",
        "program": "Woodsman",
        "difficulty": "Expert",
        "xp_value": 200,
        "tags": [
            "Utility",
            "Woodsman",
            "Scouting"
        ],
        "description": "The Miller's Knot is an essential knot in the Utility category, commonly used in Woodsman level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Woodsman rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Miller's Knot."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Utility."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Miller's Knot pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Miller's Knot."
            }
        ],
        "model_id": "miller_s_knot_v1"
    },
    "91": {
        "id": 91,
        "name": "Square Lashing",
        "program": "Expert",
        "difficulty": "Expert",
        "xp_value": 250,
        "tags": [
            "Lashing",
            "Expert",
            "Scouting"
        ],
        "description": "The Square Lashing is an essential knot in the Lashing category, commonly used in Expert level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Lashing",
            "Standard requirement for the Expert rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Square Lashing."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Lashing."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Square Lashing pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Square Lashing."
            }
        ],
        "model_id": "square_lashing_v1"
    },
    "92": {
        "id": 92,
        "name": "Diagonal Lashing",
        "program": "Expert",
        "difficulty": "Expert",
        "xp_value": 250,
        "tags": [
            "Lashing",
            "Expert",
            "Scouting"
        ],
        "description": "The Diagonal Lashing is an essential knot in the Lashing category, commonly used in Expert level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Lashing",
            "Standard requirement for the Expert rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Diagonal Lashing."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Lashing."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Diagonal Lashing pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Diagonal Lashing."
            }
        ],
        "model_id": "diagonal_lashing_v1"
    },
    "93": {
        "id": 93,
        "name": "Shear Lashing",
        "program": "Expert",
        "difficulty": "Expert",
        "xp_value": 250,
        "tags": [
            "Lashing",
            "Expert",
            "Scouting"
        ],
        "description": "The Shear Lashing is an essential knot in the Lashing category, commonly used in Expert level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Lashing",
            "Standard requirement for the Expert rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Shear Lashing."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Lashing."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Shear Lashing pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Shear Lashing."
            }
        ],
        "model_id": "shear_lashing_v1"
    },
    "94": {
        "id": 94,
        "name": "Round Lashing",
        "program": "Expert",
        "difficulty": "Expert",
        "xp_value": 250,
        "tags": [
            "Lashing",
            "Expert",
            "Scouting"
        ],
        "description": "The Round Lashing is an essential knot in the Lashing category, commonly used in Expert level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Lashing",
            "Standard requirement for the Expert rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Round Lashing."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Lashing."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Round Lashing pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Round Lashing."
            }
        ],
        "model_id": "round_lashing_v1"
    },
    "95": {
        "id": 95,
        "name": "Tripod Lashing",
        "program": "Expert",
        "difficulty": "Expert",
        "xp_value": 250,
        "tags": [
            "Lashing",
            "Expert",
            "Scouting"
        ],
        "description": "The Tripod Lashing is an essential knot in the Lashing category, commonly used in Expert level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Lashing",
            "Standard requirement for the Expert rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Tripod Lashing."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Lashing."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Tripod Lashing pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Tripod Lashing."
            }
        ],
        "model_id": "tripod_lashing_v1"
    },
    "96": {
        "id": 96,
        "name": "Floor Lashing",
        "program": "Expert",
        "difficulty": "Expert",
        "xp_value": 250,
        "tags": [
            "Lashing",
            "Expert",
            "Scouting"
        ],
        "description": "The Floor Lashing is an essential knot in the Lashing category, commonly used in Expert level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Lashing",
            "Standard requirement for the Expert rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Floor Lashing."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Lashing."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Floor Lashing pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Floor Lashing."
            }
        ],
        "model_id": "floor_lashing_v1"
    },
    "97": {
        "id": 97,
        "name": "Japanese Mark II Square Lashing",
        "program": "Expert",
        "difficulty": "Expert",
        "xp_value": 250,
        "tags": [
            "Lashing",
            "Expert",
            "Scouting"
        ],
        "description": "The Japanese Mark II Square Lashing is an essential knot in the Lashing category, commonly used in Expert level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Lashing",
            "Standard requirement for the Expert rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Japanese Mark II Square Lashing."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Lashing."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Japanese Mark II Square Lashing pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Japanese Mark II Square Lashing."
            }
        ],
        "model_id": "japanese_mark_ii_square_lashing_v1"
    },
    "98": {
        "id": 98,
        "name": "Common Whipping",
        "program": "Expert",
        "difficulty": "Expert",
        "xp_value": 250,
        "tags": [
            "Seizing",
            "Expert",
            "Scouting"
        ],
        "description": "The Common Whipping is an essential knot in the Seizing category, commonly used in Expert level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Seizing",
            "Standard requirement for the Expert rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Common Whipping."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Seizing."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Common Whipping pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Common Whipping."
            }
        ],
        "model_id": "common_whipping_v1"
    },
    "99": {
        "id": 99,
        "name": "Sailmaker's Whipping",
        "program": "Expert",
        "difficulty": "Expert",
        "xp_value": 250,
        "tags": [
            "Seizing",
            "Expert",
            "Scouting"
        ],
        "description": "The Sailmaker's Whipping is an essential knot in the Seizing category, commonly used in Expert level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Seizing",
            "Standard requirement for the Expert rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Sailmaker's Whipping."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Seizing."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Sailmaker's Whipping pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Sailmaker's Whipping."
            }
        ],
        "model_id": "sailmaker_s_whipping_v1"
    },
    "100": {
        "id": 100,
        "name": "West Country Whipping",
        "program": "Expert",
        "difficulty": "Expert",
        "xp_value": 250,
        "tags": [
            "Seizing",
            "Expert",
            "Scouting"
        ],
        "description": "The West Country Whipping is an essential knot in the Seizing category, commonly used in Expert level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Seizing",
            "Standard requirement for the Expert rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the West Country Whipping."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Seizing."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the West Country Whipping pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the West Country Whipping."
            }
        ],
        "model_id": "west_country_whipping_v1"
    },
    "101": {
        "id": 101,
        "name": "Eye Splice",
        "program": "Expert",
        "difficulty": "Expert",
        "xp_value": 250,
        "tags": [
            "Splice",
            "Expert",
            "Scouting"
        ],
        "description": "The Eye Splice is an essential knot in the Splice category, commonly used in Expert level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Splice",
            "Standard requirement for the Expert rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Eye Splice."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Splice."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Eye Splice pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Eye Splice."
            }
        ],
        "model_id": "eye_splice_v1"
    },
    "102": {
        "id": 102,
        "name": "Short Splice",
        "program": "Expert",
        "difficulty": "Expert",
        "xp_value": 250,
        "tags": [
            "Splice",
            "Expert",
            "Scouting"
        ],
        "description": "The Short Splice is an essential knot in the Splice category, commonly used in Expert level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Splice",
            "Standard requirement for the Expert rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Short Splice."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Splice."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Short Splice pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Short Splice."
            }
        ],
        "model_id": "short_splice_v1"
    },
    "103": {
        "id": 103,
        "name": "Long Splice",
        "program": "Expert",
        "difficulty": "Expert",
        "xp_value": 250,
        "tags": [
            "Splice",
            "Expert",
            "Scouting"
        ],
        "description": "The Long Splice is an essential knot in the Splice category, commonly used in Expert level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Splice",
            "Standard requirement for the Expert rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Long Splice."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Splice."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Long Splice pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Long Splice."
            }
        ],
        "model_id": "long_splice_v1"
    },
    "104": {
        "id": 104,
        "name": "Back Splice",
        "program": "Expert",
        "difficulty": "Expert",
        "xp_value": 250,
        "tags": [
            "Splice",
            "Expert",
            "Scouting"
        ],
        "description": "The Back Splice is an essential knot in the Splice category, commonly used in Expert level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Splice",
            "Standard requirement for the Expert rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Back Splice."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Splice."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Back Splice pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Back Splice."
            }
        ],
        "model_id": "back_splice_v1"
    },
    "105": {
        "id": 105,
        "name": "Turk's Head",
        "program": "Expert",
        "difficulty": "Expert",
        "xp_value": 250,
        "tags": [
            "Utility",
            "Expert",
            "Scouting"
        ],
        "description": "The Turk's Head is an essential knot in the Utility category, commonly used in Expert level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Expert rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Turk's Head."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Utility."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Turk's Head pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Turk's Head."
            }
        ],
        "model_id": "turk_s_head_v1"
    },
    "106": {
        "id": 106,
        "name": "Carrick Mat",
        "program": "Expert",
        "difficulty": "Expert",
        "xp_value": 250,
        "tags": [
            "Utility",
            "Expert",
            "Scouting"
        ],
        "description": "The Carrick Mat is an essential knot in the Utility category, commonly used in Expert level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Expert rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Carrick Mat."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Utility."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Carrick Mat pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Carrick Mat."
            }
        ],
        "model_id": "carrick_mat_v1"
    },
    "107": {
        "id": 107,
        "name": "Ocean Plait Mat",
        "program": "Expert",
        "difficulty": "Expert",
        "xp_value": 250,
        "tags": [
            "Utility",
            "Expert",
            "Scouting"
        ],
        "description": "The Ocean Plait Mat is an essential knot in the Utility category, commonly used in Expert level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Expert rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Ocean Plait Mat."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Utility."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Ocean Plait Mat pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Ocean Plait Mat."
            }
        ],
        "model_id": "ocean_plait_mat_v1"
    },
    "108": {
        "id": 108,
        "name": "Lanyard Knot",
        "program": "Expert",
        "difficulty": "Expert",
        "xp_value": 250,
        "tags": [
            "Utility",
            "Expert",
            "Scouting"
        ],
        "description": "The Lanyard Knot is an essential knot in the Utility category, commonly used in Expert level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Expert rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Lanyard Knot."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Utility."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Lanyard Knot pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Lanyard Knot."
            }
        ],
        "model_id": "lanyard_knot_v1"
    },
    "109": {
        "id": 109,
        "name": "Diamond Knot",
        "program": "Expert",
        "difficulty": "Expert",
        "xp_value": 250,
        "tags": [
            "Utility",
            "Expert",
            "Scouting"
        ],
        "description": "The Diamond Knot is an essential knot in the Utility category, commonly used in Expert level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Expert rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Diamond Knot."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Utility."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Diamond Knot pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Diamond Knot."
            }
        ],
        "model_id": "diamond_knot_v1"
    },
    "110": {
        "id": 110,
        "name": "Crown Sinnet",
        "program": "Expert",
        "difficulty": "Expert",
        "xp_value": 250,
        "tags": [
            "Utility",
            "Expert",
            "Scouting"
        ],
        "description": "The Crown Sinnet is an essential knot in the Utility category, commonly used in Expert level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Expert rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Crown Sinnet."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Utility."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Crown Sinnet pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Crown Sinnet."
            }
        ],
        "model_id": "crown_sinnet_v1"
    },
    "111": {
        "id": 111,
        "name": "Wall Sinnet",
        "program": "Expert",
        "difficulty": "Expert",
        "xp_value": 250,
        "tags": [
            "Utility",
            "Expert",
            "Scouting"
        ],
        "description": "The Wall Sinnet is an essential knot in the Utility category, commonly used in Expert level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Expert rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Wall Sinnet."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Utility."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Wall Sinnet pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Wall Sinnet."
            }
        ],
        "model_id": "wall_sinnet_v1"
    },
    "112": {
        "id": 112,
        "name": "Sheepshank",
        "program": "Expert",
        "difficulty": "Expert",
        "xp_value": 250,
        "tags": [
            "Utility",
            "Expert",
            "Scouting"
        ],
        "description": "The Sheepshank is an essential knot in the Utility category, commonly used in Expert level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Expert rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Sheepshank."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Utility."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Sheepshank pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Sheepshank."
            }
        ],
        "model_id": "sheepshank_v1"
    },
    "113": {
        "id": 113,
        "name": "Cat's Paw",
        "program": "Expert",
        "difficulty": "Expert",
        "xp_value": 250,
        "tags": [
            "Utility",
            "Expert",
            "Scouting"
        ],
        "description": "The Cat's Paw is an essential knot in the Utility category, commonly used in Expert level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Expert rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Cat's Paw."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Utility."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Cat's Paw pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Cat's Paw."
            }
        ],
        "model_id": "cat_s_paw_v1"
    },
    "114": {
        "id": 114,
        "name": "Draw Hitch",
        "program": "Expert",
        "difficulty": "Expert",
        "xp_value": 250,
        "tags": [
            "Hitch",
            "Expert",
            "Scouting"
        ],
        "description": "The Draw Hitch is an essential knot in the Hitch category, commonly used in Expert level scouting activities.",
        "scenarios": [
            "Used in camping scenarios requiring a Hitch",
            "Standard requirement for the Expert rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Prepare the rope for the Draw Hitch."
            },
            {
                "step": 2,
                "instruction": "Make the initial loop or wrap for the Hitch."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through according to the Draw Hitch pattern."
            },
            {
                "step": 4,
                "instruction": "Dress the knot by arranging the strands neatly."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure the Draw Hitch."
            }
        ],
        "model_id": "draw_hitch_v1"
    }
};

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
