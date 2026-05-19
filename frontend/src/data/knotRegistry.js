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
        "name": "Overhand Knot",
        "program": "Navigator",
        "difficulty": "Easy",
        "xp_value": 25,
        "tags": [
            "Stopper",
            "Basic",
            "Foundation"
        ],
        "description": "The simplest of all knots, often used as a stopper or as the foundation for more complex knots.",
        "scenarios": [
            "Used in camping scenarios requiring a Hitch",
            "Standard requirement for the Navigator rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Form a loop by crossing the working end over the standing part."
            },
            {
                "step": 2,
                "instruction": "Tuck the working end through the loop."
            },
            {
                "step": 3,
                "instruction": "Pull both ends tight to secure the knot."
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
        "name": "Girth Hitch",
        "program": "Navigator",
        "difficulty": "Easy",
        "xp_value": 50,
        "tags": [
            "Hitch",
            "Climbing",
            "Attaching"
        ],
        "description": "Structurally identical to the Cow Hitch, commonly used in climbing to attach slings to harnesses.",
        "scenarios": [
            "Used in camping scenarios requiring a Hitch",
            "Standard requirement for the Navigator rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Take a sewn sling or a loop of rope."
            },
            {
                "step": 2,
                "instruction": "Pass one end of the loop through the anchor point or harness tie-in."
            },
            {
                "step": 3,
                "instruction": "Pass the other end of the loop through the first end."
            },
            {
                "step": 4,
                "instruction": "Pull tight to cinch the hitch securely against the anchor."
            }
        ],
        "model_id": "rolling_hitch_v1"
    },
    "14": {
        "id": 14,
        "name": "Pile Hitch",
        "program": "Navigator",
        "difficulty": "Easy",
        "xp_value": 50,
        "tags": [
            "Hitch",
            "Mooring",
            "Quick"
        ],
        "description": "A quick and easy hitch used for temporarily mooring a boat to a post or pile.",
        "scenarios": [
            "Used in camping scenarios requiring a Hitch",
            "Standard requirement for the Navigator rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Form a bight (a U-shape) in the rope."
            },
            {
                "step": 2,
                "instruction": "Wrap the bight around the post."
            },
            {
                "step": 3,
                "instruction": "Pass the bight over the top of the post and drop it down over the standing parts."
            },
            {
                "step": 4,
                "instruction": "Pull the standing parts to tighten the hitch around the post."
            }
        ],
        "model_id": "cleat_hitch_v1"
    },
    "15": {
        "id": 15,
        "name": "Half Hitch",
        "program": "Navigator",
        "difficulty": "Easy",
        "xp_value": 25,
        "tags": [
            "Hitch",
            "Foundation",
            "Basic"
        ],
        "description": "A simple overhand knot tied around an object. Rarely used alone, but forms the basis of many other hitches.",
        "scenarios": [
            "Used in camping scenarios requiring a Hitch",
            "Standard requirement for the Navigator rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Pass the working end around the post or ring."
            },
            {
                "step": 2,
                "instruction": "Bring the working end over the standing part."
            },
            {
                "step": 3,
                "instruction": "Tuck the working end under itself to form a loop."
            },
            {
                "step": 4,
                "instruction": "Pull tight. Note: A single half hitch is not secure under load."
            }
        ],
        "model_id": "marlinspike_hitch_v1"
    },
    "16": {
        "id": 16,
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
            "Standard requirement for the Adventurer rank",
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
        "model_id": "midshipman_s_hitch_v1"
    },
    "17": {
        "id": 17,
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
            "Used in camping scenarios requiring a Hitch",
            "Standard requirement for the Adventurer rank",
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
        "model_id": "farrimond_friction_hitch_v1"
    },
    "18": {
        "id": 18,
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
            "Used in camping scenarios requiring a Hitch",
            "Standard requirement for the Adventurer rank",
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
        "model_id": "barrel_hitch_v1"
    },
    "19": {
        "id": 19,
        "name": "Rolling Hitch",
        "program": "Adventurer",
        "difficulty": "Medium",
        "xp_value": 100,
        "tags": [
            "Hitch",
            "Friction",
            "Attaching"
        ],
        "description": "A knot used to attach a rope to a rod, pole, or another rope. It grips when pulled lengthwise.",
        "scenarios": [
            "Used in camping scenarios requiring a Hitch",
            "Standard requirement for the Adventurer rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Take the working end and wrap it around the pole or taut line."
            },
            {
                "step": 2,
                "instruction": "Make a second wrap around the pole, crossing over the standing part."
            },
            {
                "step": 3,
                "instruction": "Make a third wrap around the pole, above the first two wraps."
            },
            {
                "step": 4,
                "instruction": "Tuck the working end under the third wrap to form a half hitch."
            },
            {
                "step": 5,
                "instruction": "Pull tight. The hitch will grip when pulled in the direction of the first two wraps."
            }
        ],
        "model_id": "cow_hitch_v1"
    },
    "20": {
        "id": 20,
        "name": "Cleat Hitch",
        "program": "Adventurer",
        "difficulty": "Medium",
        "xp_value": 75,
        "tags": [
            "Hitch",
            "Boating",
            "Securing"
        ],
        "description": "The standard knot used to secure a rope to a cleat on a dock or boat.",
        "scenarios": [
            "Used in camping scenarios requiring a Hitch",
            "Standard requirement for the Adventurer rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Take a full turn around the base of the cleat, starting from the furthest horn."
            },
            {
                "step": 2,
                "instruction": "Bring the rope over the top of the cleat and under the opposite horn (forming a figure eight)."
            },
            {
                "step": 3,
                "instruction": "Cross over the top again."
            },
            {
                "step": 4,
                "instruction": "Form an underhand loop and slip it over the final horn."
            },
            {
                "step": 5,
                "instruction": "Pull tight. The free end should be pinned under the final wrap."
            }
        ],
        "model_id": "girth_hitch_v1"
    },
    "21": {
        "id": 21,
        "name": "Marlinspike Hitch",
        "program": "Adventurer",
        "difficulty": "Medium",
        "xp_value": 100,
        "tags": [
            "Hitch",
            "Temporary",
            "Leverage"
        ],
        "description": "A temporary knot used to attach a spike or handle to a rope for extra leverage when pulling.",
        "scenarios": [
            "Used in camping scenarios requiring a Hitch",
            "Standard requirement for the Adventurer rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Form a loop in the standing part of the rope."
            },
            {
                "step": 2,
                "instruction": "Fold the loop over the standing part."
            },
            {
                "step": 3,
                "instruction": "Insert the marlinspike (or a sturdy stick) over the edge of the loop, under the standing part, and over the other edge."
            },
            {
                "step": 4,
                "instruction": "Pull the standing part to tighten the hitch around the spike."
            }
        ],
        "model_id": "buntline_hitch_v1"
    },
    "22": {
        "id": 22,
        "name": "Midshipman's Hitch",
        "program": "Adventurer",
        "difficulty": "Hard",
        "xp_value": 125,
        "tags": [
            "Hitch",
            "Adjustable",
            "Tension"
        ],
        "description": "An adjustable loop knot, very similar to the Taut-Line Hitch but more secure under load.",
        "scenarios": [
            "Used in camping scenarios requiring a Hitch",
            "Standard requirement for the Adventurer rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Pass the working end around the anchor."
            },
            {
                "step": 2,
                "instruction": "Wrap the working end around the standing part."
            },
            {
                "step": 3,
                "instruction": "Make a second wrap around the standing part, forming an 'awming' (a half hitch that grips the standing part)."
            },
            {
                "step": 4,
                "instruction": "Make a final half hitch around the standing part, outside the loop."
            },
            {
                "step": 5,
                "instruction": "Pull tight and adjust tension."
            }
        ],
        "model_id": "highwayman_s_hitch_v1"
    },
    "23": {
        "id": 23,
        "name": "Farrimond Friction Hitch",
        "program": "Adventurer",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Hitch",
            "Quick Release",
            "Camping"
        ],
        "description": "A quick-release adjustable friction hitch, excellent for tent guy lines.",
        "scenarios": [
            "Used in camping scenarios requiring a Hitch",
            "Standard requirement for the Adventurer rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Pass the working end around the anchor."
            },
            {
                "step": 2,
                "instruction": "Form a bight in the working end and lay it over the standing part."
            },
            {
                "step": 3,
                "instruction": "Wrap the bight around the standing part 2-3 times, working back towards the anchor."
            },
            {
                "step": 4,
                "instruction": "Pass the bight through the loop formed at the end of the wraps."
            },
            {
                "step": 5,
                "instruction": "Pull the standing part to tighten. Pull the working end to quick-release."
            }
        ],
        "model_id": "icicle_hitch_v1"
    },
    "24": {
        "id": 24,
        "name": "Barrel Hitch",
        "program": "Adventurer",
        "difficulty": "Medium",
        "xp_value": 100,
        "tags": [
            "Hitch",
            "Lifting",
            "Utility"
        ],
        "description": "A knot used to sling a barrel, bucket, or cylindrical object for lifting.",
        "scenarios": [
            "Used in camping scenarios requiring a Hitch",
            "Standard requirement for the Adventurer rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Place the barrel on top of the rope."
            },
            {
                "step": 2,
                "instruction": "Bring the two ends up and tie an overhand knot over the top of the barrel."
            },
            {
                "step": 3,
                "instruction": "Open the overhand knot and pull the two sides down over the rim of the barrel."
            },
            {
                "step": 4,
                "instruction": "Join the two ends above the barrel with a Bowline."
            }
        ],
        "model_id": "killick_hitch_v1"
    },
    "25": {
        "id": 25,
        "name": "Buntline Hitch",
        "program": "Adventurer",
        "difficulty": "Medium",
        "xp_value": 100,
        "tags": [
            "Hitch",
            "Secure",
            "Sailing"
        ],
        "description": "A simple and highly secure hitch used to attach a rope to a ring or bar. It tends to jam under heavy load.",
        "scenarios": [
            "Used in camping scenarios requiring a Hitch",
            "Standard requirement for the Adventurer rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Pass the working end through the ring."
            },
            {
                "step": 2,
                "instruction": "Bring the working end across the standing part."
            },
            {
                "step": 3,
                "instruction": "Tie a clove hitch around the standing part, working towards the ring."
            },
            {
                "step": 4,
                "instruction": "Pull tight to secure."
            }
        ],
        "model_id": "knute_hitch_v1"
    },
    "26": {
        "id": 26,
        "name": "Highwayman's Hitch",
        "program": "Adventurer",
        "difficulty": "Medium",
        "xp_value": 100,
        "tags": [
            "Hitch",
            "Quick Release",
            "Temporary"
        ],
        "description": "A quick-release draw hitch used for temporary mooring, easily untied with a single tug.",
        "scenarios": [
            "Used in camping scenarios requiring a Hitch",
            "Standard requirement for the Adventurer rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Form a bight in the standing part and hold it behind the pole."
            },
            {
                "step": 2,
                "instruction": "Form a bight in the working end and pass it around the front of the pole and through the first bight."
            },
            {
                "step": 3,
                "instruction": "Pull the standing part down to tighten the first bight over the second."
            },
            {
                "step": 4,
                "instruction": "Form a new bight in the working end and pass it through the second bight."
            },
            {
                "step": 5,
                "instruction": "Pull the standing part to tighten. Tug the working end to release."
            }
        ],
        "model_id": "magnus_hitch_v1"
    },
    "27": {
        "id": 27,
        "name": "Icicle Hitch",
        "program": "Adventurer",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Hitch",
            "Friction",
            "Gripping"
        ],
        "description": "An excellent friction hitch for gripping smooth or tapered poles, even when pulled parallel to the pole.",
        "scenarios": [
            "Used in camping scenarios requiring a Hitch",
            "Standard requirement for the Adventurer rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Drop a bight of rope behind the pole."
            },
            {
                "step": 2,
                "instruction": "Take the working end and wrap it 4 or 5 times around the pole and the standing part, working upwards."
            },
            {
                "step": 3,
                "instruction": "Bring the working end down across the front of the wraps."
            },
            {
                "step": 4,
                "instruction": "Pass the working end through the original bight at the bottom."
            },
            {
                "step": 5,
                "instruction": "Pull tight and dress the knot carefully."
            }
        ],
        "model_id": "ossel_hitch_v1"
    },
    "28": {
        "id": 28,
        "name": "Killick Hitch",
        "program": "Adventurer",
        "difficulty": "Medium",
        "xp_value": 75,
        "tags": [
            "Hitch",
            "Dragging",
            "Utility"
        ],
        "description": "Used to drag logs or stones; it is essentially a Timber Hitch combined with a Half Hitch.",
        "scenarios": [
            "Used in camping scenarios requiring a Hitch",
            "Standard requirement for the Adventurer rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Tie a Timber Hitch near one end of the log or stone."
            },
            {
                "step": 2,
                "instruction": "Run the standing part along the length of the object."
            },
            {
                "step": 3,
                "instruction": "Near the other end of the object, tie a Half Hitch."
            },
            {
                "step": 4,
                "instruction": "Pull the standing part tight. The Timber Hitch grips, while the Half Hitch guides."
            }
        ],
        "model_id": "pile_hitch_v1"
    },
    "29": {
        "id": 29,
        "name": "Knute Hitch",
        "program": "Adventurer",
        "difficulty": "Easy",
        "xp_value": 50,
        "tags": [
            "Hitch",
            "Lanyard",
            "Tools"
        ],
        "description": "A quick, clever hitch for attaching a lanyard to a tool with a hole in the handle.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Adventurer rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Tie a figure eight knot or overhand knot in the very end of the lanyard."
            },
            {
                "step": 2,
                "instruction": "Form a bight just below the stopper knot."
            },
            {
                "step": 3,
                "instruction": "Push the bight through the hole in the tool handle."
            },
            {
                "step": 4,
                "instruction": "Pass the stopper knot through the bight."
            },
            {
                "step": 5,
                "instruction": "Pull the standing part to lock the stopper knot against the hole."
            }
        ],
        "model_id": "snell_knot_v1"
    },
    "30": {
        "id": 30,
        "name": "Magnus Hitch",
        "program": "Adventurer",
        "difficulty": "Hard",
        "xp_value": 125,
        "tags": [
            "Hitch",
            "Friction",
            "Sailing"
        ],
        "description": "A variation of the Rolling Hitch, tied with the final hitch in the opposite direction. Grips well on smooth spars.",
        "scenarios": [
            "Used in camping scenarios requiring a Hitch",
            "Standard requirement for the Adventurer rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Make a turn around the spar."
            },
            {
                "step": 2,
                "instruction": "Make a second turn, crossing over the standing part."
            },
            {
                "step": 3,
                "instruction": "Make a third turn above the first two."
            },
            {
                "step": 4,
                "instruction": "Bring the working end down and tuck it under the third turn, going in the opposite direction of a Rolling Hitch."
            },
            {
                "step": 5,
                "instruction": "Pull tight to secure."
            }
        ],
        "model_id": "tensionless_hitch_v1"
    },
    "31": {
        "id": 31,
        "name": "Ossel Hitch",
        "program": "Adventurer",
        "difficulty": "Medium",
        "xp_value": 100,
        "tags": [
            "Hitch",
            "Fishing",
            "Netting"
        ],
        "description": "Used historically to attach netting to a rope. Similar to a clove hitch but more secure against sliding.",
        "scenarios": [
            "Used in camping scenarios requiring a Hitch",
            "Standard requirement for the Adventurer rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Pass the working end around the rope."
            },
            {
                "step": 2,
                "instruction": "Cross over the standing part and make a second turn around the rope."
            },
            {
                "step": 3,
                "instruction": "Bring the working end around the standing part itself."
            },
            {
                "step": 4,
                "instruction": "Tuck the working end under the second turn."
            },
            {
                "step": 5,
                "instruction": "Pull tight."
            }
        ],
        "model_id": "blake_s_hitch_v1"
    },
    "32": {
        "id": 32,
        "name": "Tensionless Hitch",
        "program": "Adventurer",
        "difficulty": "Easy",
        "xp_value": 75,
        "tags": [
            "Hitch",
            "Anchoring",
            "Rescue"
        ],
        "description": "The strongest possible anchor knot, retaining 100% of rope strength by using friction around a large object like a tree.",
        "scenarios": [
            "Used in camping scenarios requiring a Hitch",
            "Standard requirement for the Adventurer rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Wrap the rope around a large, smooth anchor (like a tree trunk) at least 4 times."
            },
            {
                "step": 2,
                "instruction": "Ensure the wraps are neat and do not cross each other."
            },
            {
                "step": 3,
                "instruction": "Take the working end and tie a figure eight loop."
            },
            {
                "step": 4,
                "instruction": "Clip the loop back to the standing part with a carabiner."
            }
        ],
        "model_id": "distel_hitch_v1"
    },
    "33": {
        "id": 33,
        "name": "Blake's Hitch",
        "program": "Adventurer",
        "difficulty": "Expert",
        "xp_value": 200,
        "tags": [
            "Friction",
            "Arborist",
            "Climbing"
        ],
        "description": "A friction hitch commonly used by arborists for ascending and descending trees.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Adventurer rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Take the tail of the climbing rope and wrap it 4 times around the standing part, working upwards."
            },
            {
                "step": 2,
                "instruction": "Bring the tail down across the front of all 4 wraps."
            },
            {
                "step": 3,
                "instruction": "Pass the tail behind the standing part and tuck it up through the bottom two wraps only."
            },
            {
                "step": 4,
                "instruction": "Tie a figure eight stopper knot in the very end of the tail for safety."
            },
            {
                "step": 5,
                "instruction": "Dress the knot carefully. It should grip when loaded and slide when pushed."
            }
        ],
        "model_id": "klemheist_knot_v1"
    },
    "34": {
        "id": 34,
        "name": "Distel Hitch",
        "program": "Adventurer",
        "difficulty": "Expert",
        "xp_value": 200,
        "tags": [
            "Friction",
            "Arborist",
            "Climbing"
        ],
        "description": "A responsive friction hitch used with an eye-to-eye friction cord for tree climbing.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Adventurer rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Place the friction cord behind the main rope."
            },
            {
                "step": 2,
                "instruction": "Make 4 wraps downwards around the main rope with the top leg of the cord."
            },
            {
                "step": 3,
                "instruction": "Bring the bottom leg up and over the wraps."
            },
            {
                "step": 4,
                "instruction": "Tie a half hitch around the main rope above the wraps."
            },
            {
                "step": 5,
                "instruction": "Connect both eyes of the cord to a carabiner."
            }
        ],
        "model_id": "valdotain_tresse_v1"
    },
    "35": {
        "id": 35,
        "name": "Klemheist Knot",
        "program": "Adventurer",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Friction",
            "Rescue",
            "Webbing"
        ],
        "description": "A friction hitch similar to the Prusik, but it can be tied with webbing and only grips in one direction.",
        "scenarios": [
            "Used in camping scenarios requiring a Hitch",
            "Standard requirement for the Adventurer rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Take a loop of cord or webbing and wrap it around the main rope 3 or 4 times."
            },
            {
                "step": 2,
                "instruction": "Work downwards with the wraps."
            },
            {
                "step": 3,
                "instruction": "Pass the bottom end of the loop through the top end of the loop."
            },
            {
                "step": 4,
                "instruction": "Pull the bottom end tight to dress the knot."
            },
            {
                "step": 5,
                "instruction": "Load the knot downwards to grip."
            }
        ],
        "model_id": "schwabisch_hitch_v1"
    },
    "36": {
        "id": 36,
        "name": "Valdotain Tresse",
        "program": "Adventurer",
        "difficulty": "Expert",
        "xp_value": 250,
        "tags": [
            "Friction",
            "Advanced",
            "Arborist"
        ],
        "description": "An advanced friction hitch (often called a VT) that offers incredibly smooth descent control.",
        "scenarios": [
            "Used in camping scenarios requiring a Loop",
            "Standard requirement for the Adventurer rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Using an eye-to-eye cord, make 4 wraps around the main rope."
            },
            {
                "step": 2,
                "instruction": "Cross the two legs over each other in front of the rope."
            },
            {
                "step": 3,
                "instruction": "Cross them behind the rope."
            },
            {
                "step": 4,
                "instruction": "Cross them in front one more time (forming a braid or 'tresse')."
            },
            {
                "step": 5,
                "instruction": "Bring both eyes down and clip them to a carabiner."
            }
        ],
        "model_id": "bowline_on_a_bight_v1"
    },
    "37": {
        "id": 37,
        "name": "Schwabisch Hitch",
        "program": "Adventurer",
        "difficulty": "Expert",
        "xp_value": 200,
        "tags": [
            "Friction",
            "Arborist",
            "Climbing"
        ],
        "description": "A compact friction hitch that grips reliably and releases easily.",
        "scenarios": [
            "Used in camping scenarios requiring a Loop",
            "Standard requirement for the Adventurer rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Using an eye-to-eye cord, place it behind the main rope."
            },
            {
                "step": 2,
                "instruction": "Make 4 wraps downwards with the top leg."
            },
            {
                "step": 3,
                "instruction": "Bring the bottom leg up and tie a half hitch above the wraps, but in the opposite direction of a Distel hitch."
            },
            {
                "step": 4,
                "instruction": "Dress the knot so it is compact."
            },
            {
                "step": 5,
                "instruction": "Clip both eyes to a carabiner."
            }
        ],
        "model_id": "french_bowline_v1"
    },
    "38": {
        "id": 38,
        "name": "Bowline on a Bight",
        "program": "Adventurer",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Loop",
            "Rescue",
            "Midline"
        ],
        "description": "A variation of the Bowline that creates two fixed loops in the middle of a rope, useful for a makeshift rescue harness.",
        "scenarios": [
            "Used in camping scenarios requiring a Loop",
            "Standard requirement for the Adventurer rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Form a long bight in the middle of the rope."
            },
            {
                "step": 2,
                "instruction": "Tie an overhand loop using the doubled rope, but do not pull it tight."
            },
            {
                "step": 3,
                "instruction": "Take the end of the bight and open it up."
            },
            {
                "step": 4,
                "instruction": "Pass the entire overhand knot through the open bight."
            },
            {
                "step": 5,
                "instruction": "Pull the two loops and the standing parts tight."
            }
        ],
        "model_id": "water_bowline_v1"
    },
    "39": {
        "id": 39,
        "name": "French Bowline",
        "program": "Adventurer",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Loop",
            "Rescue",
            "Adjustable"
        ],
        "description": "A rescue knot that creates two loops which tighten against each other when loaded, acting as a sling.",
        "scenarios": [
            "Used in camping scenarios requiring a Loop",
            "Standard requirement for the Adventurer rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Form a small loop (rabbit hole) in the standing part."
            },
            {
                "step": 2,
                "instruction": "Pass the working end through the loop."
            },
            {
                "step": 3,
                "instruction": "Make a large loop (for a person to sit in) and pass the working end through the small loop again."
            },
            {
                "step": 4,
                "instruction": "Make a second large loop (for the chest) and bring the working end behind the standing part."
            },
            {
                "step": 5,
                "instruction": "Pass the working end back down through the small loop and tighten."
            }
        ],
        "model_id": "spanish_bowline_v1"
    },
    "40": {
        "id": 40,
        "name": "Water Bowline",
        "program": "Adventurer",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Loop",
            "Wet Conditions",
            "Secure"
        ],
        "description": "A Bowline tied with a clove hitch as the base instead of a simple loop, preventing it from jamming when wet.",
        "scenarios": [
            "Used in camping scenarios requiring a Loop",
            "Standard requirement for the Adventurer rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Form a clove hitch in the standing part of the rope."
            },
            {
                "step": 2,
                "instruction": "Pass the working end up through both loops of the clove hitch."
            },
            {
                "step": 3,
                "instruction": "Bring the working end around behind the standing part."
            },
            {
                "step": 4,
                "instruction": "Pass the working end back down through the two loops."
            },
            {
                "step": 5,
                "instruction": "Pull tight. The clove hitch base provides extra security."
            }
        ],
        "model_id": "portuguese_bowline_v1"
    },
    "41": {
        "id": 41,
        "name": "Spanish Bowline",
        "program": "Ranger",
        "difficulty": "Expert",
        "xp_value": 200,
        "tags": [
            "Loop",
            "Rescue",
            "Double"
        ],
        "description": "A complex knot that creates two independent, fixed loops. Used in rescue to lift a person (one loop for each leg).",
        "scenarios": [
            "Used in camping scenarios requiring a Loop",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Form three loops in the rope side by side."
            },
            {
                "step": 2,
                "instruction": "Fold the two outer loops over the center loop."
            },
            {
                "step": 3,
                "instruction": "Pull the bottom of the center loop up through the two outer loops."
            },
            {
                "step": 4,
                "instruction": "Pull the bottoms of the two outer loops through the center loop."
            },
            {
                "step": 5,
                "instruction": "Pull all parts tight to form the two large rescue loops."
            }
        ],
        "model_id": "yosemite_bowline_v1"
    },
    "42": {
        "id": 42,
        "name": "Portuguese Bowline",
        "program": "Ranger",
        "difficulty": "Expert",
        "xp_value": 200,
        "tags": [
            "Loop",
            "Rescue",
            "Adjustable"
        ],
        "description": "Creates two loops that can be adjusted in size before loading, making it ideal as a makeshift bosun's chair.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Form a small loop (rabbit hole) in the standing part."
            },
            {
                "step": 2,
                "instruction": "Make two large loops (for the legs) and pass the working end through the small loop."
            },
            {
                "step": 3,
                "instruction": "Bring the working end behind the standing part."
            },
            {
                "step": 4,
                "instruction": "Pass the working end back down through the small loop."
            },
            {
                "step": 5,
                "instruction": "Adjust the size of the two large loops, then pull tight to lock."
            }
        ],
        "model_id": "directional_figure_eight_v1"
    },
    "43": {
        "id": 43,
        "name": "Yosemite Bowline",
        "program": "Ranger",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Loop",
            "Climbing",
            "Secure"
        ],
        "description": "A standard Bowline with an extra wrap that prevents the knot from capsizing under heavy ring-loading.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Tie a standard Bowline."
            },
            {
                "step": 2,
                "instruction": "Take the tail (which is inside the main loop) and wrap it around the outside of the main loop."
            },
            {
                "step": 3,
                "instruction": "Follow the standing part back up through the knot."
            },
            {
                "step": 4,
                "instruction": "The tail should exit parallel to the standing part."
            },
            {
                "step": 5,
                "instruction": "Dress and pull very tight."
            }
        ],
        "model_id": "figure_eight_on_a_bight_v1"
    },
    "44": {
        "id": 44,
        "name": "Directional Figure Eight",
        "program": "Ranger",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Loop",
            "Midline",
            "Tensioning"
        ],
        "description": "A midline loop tied to point in a specific direction along the rope, perfect for the upper loop in a Trucker's Hitch.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Form a long bight in the standing part of the rope."
            },
            {
                "step": 2,
                "instruction": "Lay the bight over the standing part to form a figure eight shape."
            },
            {
                "step": 3,
                "instruction": "Pass the end of the bight under the standing part."
            },
            {
                "step": 4,
                "instruction": "Tuck the bight up through the top loop of the figure eight."
            },
            {
                "step": 5,
                "instruction": "Pull tight. The loop will naturally point in one direction."
            }
        ],
        "model_id": "figure_eight_follow_through_v1"
    },
    "45": {
        "id": 45,
        "name": "Figure Eight on a Bight",
        "program": "Ranger",
        "difficulty": "Medium",
        "xp_value": 100,
        "tags": [
            "Loop",
            "Climbing",
            "Secure"
        ],
        "description": "A very secure, bulky loop knot tied in the middle of a rope, heavily used in climbing and rescue.",
        "scenarios": [
            "Used in camping scenarios requiring a Loop",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Form a bight (a U-shape) in the rope."
            },
            {
                "step": 2,
                "instruction": "Treat the bight as a single strand and wrap it over the standing parts."
            },
            {
                "step": 3,
                "instruction": "Wrap it under the standing parts."
            },
            {
                "step": 4,
                "instruction": "Pass the end of the bight down through the loop you just created."
            },
            {
                "step": 5,
                "instruction": "Pull tight and dress the knot so the strands lie flat."
            }
        ],
        "model_id": "artillery_loop_v1"
    },
    "46": {
        "id": 46,
        "name": "Figure Eight Follow-Through",
        "program": "Ranger",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Loop",
            "Climbing",
            "Tie-in"
        ],
        "description": "The standard knot for tying a climbing rope into a harness. It is a Figure Eight loop tied by retracing a single strand.",
        "scenarios": [
            "Used in camping scenarios requiring a Loop",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Tie a loose Figure Eight knot in the rope, leaving a long tail."
            },
            {
                "step": 2,
                "instruction": "Pass the tail through your harness tie-in points."
            },
            {
                "step": 3,
                "instruction": "Follow the path of the original Figure Eight knot exactly in reverse."
            },
            {
                "step": 4,
                "instruction": "Ensure the strands run parallel and do not cross."
            },
            {
                "step": 5,
                "instruction": "Pull all four strands individually to tighten."
            }
        ],
        "model_id": "farmer_s_loop_v1"
    },
    "47": {
        "id": 47,
        "name": "Artillery Loop",
        "program": "Ranger",
        "difficulty": "Expert",
        "xp_value": 200,
        "tags": [
            "Loop",
            "Midline",
            "Multi-directional"
        ],
        "description": "Also known as the Manharness Knot. A midline loop that can take a load from any direction without distorting.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Form an underhand loop in the middle of the rope."
            },
            {
                "step": 2,
                "instruction": "Pass the standing part over the loop."
            },
            {
                "step": 3,
                "instruction": "Reach through the loop and pull the standing part through."
            },
            {
                "step": 4,
                "instruction": "This forms a new loop. Pull it out to the desired size."
            },
            {
                "step": 5,
                "instruction": "Pull both standing ends to lock the knot."
            }
        ],
        "model_id": "honda_knot_v1"
    },
    "48": {
        "id": 48,
        "name": "Farmer's Loop",
        "program": "Ranger",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Loop",
            "Midline",
            "Quick"
        ],
        "description": "A midline loop tied by wrapping the rope around your hand. It is fast to tie and very secure.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Wrap the rope around your hand three times."
            },
            {
                "step": 2,
                "instruction": "Pull the middle wrap over the right wrap."
            },
            {
                "step": 3,
                "instruction": "Pull the new middle wrap over the left wrap."
            },
            {
                "step": 4,
                "instruction": "Pull the new middle wrap over the right wrap again."
            },
            {
                "step": 5,
                "instruction": "The middle wrap is now the loop. Pull it out and slide the knot off your hand."
            }
        ],
        "model_id": "manharness_knot_v1"
    },
    "49": {
        "id": 49,
        "name": "Honda Knot",
        "program": "Ranger",
        "difficulty": "Medium",
        "xp_value": 100,
        "tags": [
            "Loop",
            "Lasso",
            "Sliding"
        ],
        "description": "The knot used to form the small, perfectly round loop at the end of a lariat or lasso.",
        "scenarios": [
            "Used in camping scenarios requiring a Loop",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Tie a loose overhand knot near the end of the rope."
            },
            {
                "step": 2,
                "instruction": "Take the working end and pass it back through the overhand knot."
            },
            {
                "step": 3,
                "instruction": "Tie a stopper knot (like an overhand) in the very tip of the working end."
            },
            {
                "step": 4,
                "instruction": "Pull the knot tight. The stopper knot prevents it from pulling through."
            },
            {
                "step": 5,
                "instruction": "Pass the long standing part through the loop to form the lasso."
            }
        ],
        "model_id": "perfection_loop_v1"
    },
    "50": {
        "id": 50,
        "name": "Manharness Knot",
        "program": "Ranger",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Loop",
            "Midline",
            "Hauling"
        ],
        "description": "A midline loop used historically to harness men or animals to a rope for hauling heavy loads.",
        "scenarios": [
            "Used in camping scenarios requiring a Loop",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Form a loop in the rope."
            },
            {
                "step": 2,
                "instruction": "Lay the loop over the standing part."
            },
            {
                "step": 3,
                "instruction": "Reach under the standing part and pull a bight of the loop through."
            },
            {
                "step": 4,
                "instruction": "Pass the bight over the top of the entire knot."
            },
            {
                "step": 5,
                "instruction": "Pull tight. The loop should stick out perpendicular to the rope."
            }
        ],
        "model_id": "surgeon_s_loop_v1"
    },
    "51": {
        "id": 51,
        "name": "Perfection Loop",
        "program": "Ranger",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Loop",
            "Fishing",
            "Inline"
        ],
        "description": "A strong, compact loop knot used by anglers to attach flies or lures. The loop sits perfectly in line with the standing part.",
        "scenarios": [
            "Used in camping scenarios requiring a Loop",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Form a loop near the end of the line, pinching it between your thumb and forefinger."
            },
            {
                "step": 2,
                "instruction": "Wrap the working end around the loop to form a second loop."
            },
            {
                "step": 3,
                "instruction": "Pass the working end between the two loops."
            },
            {
                "step": 4,
                "instruction": "Pull the second loop through the first loop."
            },
            {
                "step": 5,
                "instruction": "Pull tight, ensuring the loop stays in line with the main line."
            }
        ],
        "model_id": "angler_s_loop_v1"
    },
    "52": {
        "id": 52,
        "name": "Surgeon's Loop",
        "program": "Ranger",
        "difficulty": "Medium",
        "xp_value": 100,
        "tags": [
            "Loop",
            "Fishing",
            "Quick"
        ],
        "description": "A double overhand knot tied in a bight. It is bulky but very fast and secure for fishing lines.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Form a bight (a U-shape) at the end of the line."
            },
            {
                "step": 2,
                "instruction": "Tie an overhand knot using the doubled line, but do not pull it tight."
            },
            {
                "step": 3,
                "instruction": "Pass the loop through the overhand knot a second time."
            },
            {
                "step": 4,
                "instruction": "Lubricate the knot with water or saliva."
            },
            {
                "step": 5,
                "instruction": "Pull all four strands tight simultaneously."
            }
        ],
        "model_id": "bimini_twist_v1"
    },
    "53": {
        "id": 53,
        "name": "Angler's Loop",
        "program": "Ranger",
        "difficulty": "Medium",
        "xp_value": 100,
        "tags": [
            "Loop",
            "Bungee",
            "Jamming"
        ],
        "description": "A loop knot that holds well in bungee cord or elastic, but tends to jam tightly under load in regular rope.",
        "scenarios": [
            "Used in camping scenarios requiring a Loop",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Form a loop in the rope."
            },
            {
                "step": 2,
                "instruction": "Wrap the working end around the loop."
            },
            {
                "step": 3,
                "instruction": "Wrap it around the loop a second time."
            },
            {
                "step": 4,
                "instruction": "Pass the working end between the two wraps."
            },
            {
                "step": 5,
                "instruction": "Pull tight. The knot is bulky but very secure."
            }
        ],
        "model_id": "dropper_loop_v1"
    },
    "54": {
        "id": 54,
        "name": "Bimini Twist",
        "program": "Ranger",
        "difficulty": "Expert",
        "xp_value": 250,
        "tags": [
            "Loop",
            "Fishing",
            "100% Strength"
        ],
        "description": "A complex fishing knot that retains 100% of the line's breaking strength. Used in big game fishing.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Form a large loop in the line and twist it 20-30 times."
            },
            {
                "step": 2,
                "instruction": "Place the loop over a fixed object (or your knee) and apply tension."
            },
            {
                "step": 3,
                "instruction": "Allow the tag end to wrap backwards over the twists."
            },
            {
                "step": 4,
                "instruction": "Secure the wraps with a half hitch around one leg of the loop."
            },
            {
                "step": 5,
                "instruction": "Finish with a 3-turn half hitch around both legs of the loop and pull tight."
            }
        ],
        "model_id": "non_slip_mono_v1"
    },
    "55": {
        "id": 55,
        "name": "Dropper Loop",
        "program": "Ranger",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Loop",
            "Fishing",
            "Midline"
        ],
        "description": "A loop tied in the middle of a fishing line, standing out at right angles, used for attaching extra hooks.",
        "scenarios": [
            "Used in camping scenarios requiring a Bend",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Form a loop in the middle of the line."
            },
            {
                "step": 2,
                "instruction": "Twist the two sides of the loop together 5 or 6 times."
            },
            {
                "step": 3,
                "instruction": "Open the center twist."
            },
            {
                "step": 4,
                "instruction": "Push the top of the loop through the center twist."
            },
            {
                "step": 5,
                "instruction": "Lubricate and pull both standing ends to tighten the twists around the loop."
            }
        ],
        "model_id": "carrick_bend_v1"
    },
    "56": {
        "id": 56,
        "name": "Carrick Bend",
        "program": "Ranger",
        "difficulty": "Expert",
        "xp_value": 200,
        "tags": [
            "Bend",
            "Heavy Load",
            "Symmetrical"
        ],
        "description": "A beautiful, symmetrical bend used for joining two heavy ropes. It does not jam even under extreme load.",
        "scenarios": [
            "Used in camping scenarios requiring a Bend",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Form a loop in the first rope, with the working end passing under the standing part."
            },
            {
                "step": 2,
                "instruction": "Lay the working end of the second rope across the loop of the first."
            },
            {
                "step": 3,
                "instruction": "Pass the second working end under the first rope's standing part."
            },
            {
                "step": 4,
                "instruction": "Weave it over, under, and over through the loop, following an alternating pattern."
            },
            {
                "step": 5,
                "instruction": "Pull all four ends to tighten. The knot will capsize (flip) into its final form under load."
            }
        ],
        "model_id": "double_sheet_bend_v1"
    },
    "57": {
        "id": 57,
        "name": "Double Fisherman's Knot",
        "program": "Ranger",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Bend",
            "Climbing",
            "Secure"
        ],
        "description": "A very secure knot used to join two ropes of equal diameter, heavily used in climbing to create Prusik loops.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Lay the ends of the two ropes parallel to each other."
            },
            {
                "step": 2,
                "instruction": "Take the working end of the first rope and wrap it twice around the second rope."
            },
            {
                "step": 3,
                "instruction": "Pass the working end back through the two wraps."
            },
            {
                "step": 4,
                "instruction": "Repeat steps 2 and 3 with the working end of the second rope around the first rope."
            },
            {
                "step": 5,
                "instruction": "Pull the standing parts of both ropes to slide the two knots tightly together."
            }
        ],
        "model_id": "water_knot_v1"
    },
    "58": {
        "id": 58,
        "name": "Zeppelin Bend",
        "program": "Ranger",
        "difficulty": "Expert",
        "xp_value": 200,
        "tags": [
            "Bend",
            "Secure",
            "Non-jamming"
        ],
        "description": "An incredibly secure bend that resists jamming. Often considered superior to the Hunter's Bend or Alpine Butterfly Bend.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Form an overhand loop in the first rope (working end on top)."
            },
            {
                "step": 2,
                "instruction": "Form an underhand loop in the second rope (working end on bottom)."
            },
            {
                "step": 3,
                "instruction": "Place the first loop directly on top of the second loop."
            },
            {
                "step": 4,
                "instruction": "Pass the working end of the first rope down through both loops."
            },
            {
                "step": 5,
                "instruction": "Pass the working end of the second rope up through both loops and pull all ends tight."
            }
        ],
        "model_id": "double_fisherman_s_knot_v1"
    },
    "59": {
        "id": 59,
        "name": "Hunter's Bend",
        "program": "Ranger",
        "difficulty": "Expert",
        "xp_value": 200,
        "tags": [
            "Bend",
            "Secure",
            "Interlocking"
        ],
        "description": "A strong, interlocking bend discovered in the 1970s. Similar to the Zeppelin Bend but tied slightly differently.",
        "scenarios": [
            "Used in camping scenarios requiring a Bend",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Lay the two ropes parallel, pointing in opposite directions."
            },
            {
                "step": 2,
                "instruction": "Form a loop by crossing both ropes over themselves."
            },
            {
                "step": 3,
                "instruction": "Pass the working end of the first rope down through the loop."
            },
            {
                "step": 4,
                "instruction": "Pass the working end of the second rope up through the loop."
            },
            {
                "step": 5,
                "instruction": "Dress the knot carefully so the two interlocking overhand knots sit snugly together."
            }
        ],
        "model_id": "ashley_s_bend_v1"
    },
    "60": {
        "id": 60,
        "name": "Alpine Butterfly Bend",
        "program": "Ranger",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Bend",
            "Climbing",
            "Secure"
        ],
        "description": "The Alpine Butterfly tied with two ropes instead of one, used to join them securely.",
        "scenarios": [
            "Used in camping scenarios requiring a Bend",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Lay the two ends parallel."
            },
            {
                "step": 2,
                "instruction": "Wrap both ropes together around your hand three times."
            },
            {
                "step": 3,
                "instruction": "Pick up the middle pair of wraps."
            },
            {
                "step": 4,
                "instruction": "Pass them over the outer wraps and back under."
            },
            {
                "step": 5,
                "instruction": "Slide off your hand and pull tight."
            }
        ],
        "model_id": "hunter_s_bend_v1"
    },
    "61": {
        "id": 61,
        "name": "Ashley's Bend",
        "program": "Ranger",
        "difficulty": "Expert",
        "xp_value": 200,
        "tags": [
            "Bend",
            "Secure",
            "Bulky"
        ],
        "description": "A highly secure bend invented by knot expert Clifford Ashley. It is bulky but very reliable.",
        "scenarios": [
            "Used in camping scenarios requiring a Bend",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Tie an overhand knot in the first rope."
            },
            {
                "step": 2,
                "instruction": "Pass the working end of the second rope through the loop of the overhand knot."
            },
            {
                "step": 3,
                "instruction": "Tie an overhand knot in the second rope, interlocking it with the first."
            },
            {
                "step": 4,
                "instruction": "Pass both working ends through the central space between the two knots."
            },
            {
                "step": 5,
                "instruction": "Pull all ends tight to lock."
            }
        ],
        "model_id": "zeppelin_bend_v1"
    },
    "62": {
        "id": 62,
        "name": "Water Knot",
        "program": "Ranger",
        "difficulty": "Medium",
        "xp_value": 100,
        "tags": [
            "Bend",
            "Webbing",
            "Climbing"
        ],
        "description": "The standard knot used to join two pieces of flat webbing together.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Tie a loose overhand knot in the first piece of webbing."
            },
            {
                "step": 2,
                "instruction": "Take the second piece of webbing and trace the path of the overhand knot exactly in reverse."
            },
            {
                "step": 3,
                "instruction": "Ensure the webbing lies perfectly flat with no twists."
            },
            {
                "step": 4,
                "instruction": "Leave tails at least 3 inches long."
            },
            {
                "step": 5,
                "instruction": "Pull all four ends tightly to secure."
            }
        ],
        "model_id": "blood_knot_v1"
    },
    "63": {
        "id": 63,
        "name": "Blood Knot",
        "program": "Ranger",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Bend",
            "Fishing",
            "Monofilament"
        ],
        "description": "A neat, streamlined knot used to join two fishing lines of similar diameter.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Overlap the ends of the two lines."
            },
            {
                "step": 2,
                "instruction": "Wrap the first line around the second line 5 times."
            },
            {
                "step": 3,
                "instruction": "Pass the end of the first line back between the two lines."
            },
            {
                "step": 4,
                "instruction": "Wrap the second line around the first line 5 times in the opposite direction."
            },
            {
                "step": 5,
                "instruction": "Pass the end of the second line back through the same center gap, but in the opposite direction. Pull tight."
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
            "Bend",
            "Fishing",
            "Unequal Lines"
        ],
        "description": "Used to join two fishing lines of unequal diameter, such as a braided main line to a monofilament leader.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Form a bight in the thicker line."
            },
            {
                "step": 2,
                "instruction": "Pass the thinner line through the bight."
            },
            {
                "step": 3,
                "instruction": "Wrap the thinner line around both legs of the bight 10 times, working back towards the loop."
            },
            {
                "step": 4,
                "instruction": "Pass the end of the thinner line back out through the bight."
            },
            {
                "step": 5,
                "instruction": "Lubricate and pull tight."
            }
        ],
        "model_id": "albright_knot_v1"
    },
    "65": {
        "id": 65,
        "name": "Nail Knot",
        "program": "Ranger",
        "difficulty": "Expert",
        "xp_value": 200,
        "tags": [
            "Bend",
            "Fishing",
            "Smooth"
        ],
        "description": "A smooth, compact knot used to attach a leader to a fly line. Traditionally tied using a small nail or tube.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Lay a small tube (or nail) alongside the two overlapping lines."
            },
            {
                "step": 2,
                "instruction": "Wrap the working end of the leader around the fly line, the leader itself, and the tube 5 or 6 times."
            },
            {
                "step": 3,
                "instruction": "Pass the working end back through the tube."
            },
            {
                "step": 4,
                "instruction": "Slide the tube out while holding the wraps in place."
            },
            {
                "step": 5,
                "instruction": "Pull the ends to tighten the wraps securely."
            }
        ],
        "model_id": "surgeon_s_knot_v1"
    },
    "66": {
        "id": 66,
        "name": "Double Sheet Bend",
        "program": "Ranger",
        "difficulty": "Medium",
        "xp_value": 100,
        "tags": [
            "Bend",
            "Joining",
            "Unequal Ropes"
        ],
        "description": "A more secure version of the Sheet Bend, used when the ropes are significantly different in size or very slippery.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Form a bight in the thicker rope."
            },
            {
                "step": 2,
                "instruction": "Pass the thinner rope up through the bight."
            },
            {
                "step": 3,
                "instruction": "Wrap the thinner rope around the back of the bight."
            },
            {
                "step": 4,
                "instruction": "Make a second wrap around the back of the bight."
            },
            {
                "step": 5,
                "instruction": "Tuck the thinner rope under its own standing part and pull tight."
            }
        ],
        "model_id": "weaver_s_knot_v1"
    },
    "67": {
        "id": 67,
        "name": "Heaving Line Bend",
        "program": "Ranger",
        "difficulty": "Medium",
        "xp_value": 100,
        "tags": [
            "Bend",
            "Throwing",
            "Temporary"
        ],
        "description": "Used to attach a lightweight heaving line to a heavy hawser (mooring line) to pull it ashore.",
        "scenarios": [
            "Used in camping scenarios requiring a Bend",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Form a bight in the heavy rope."
            },
            {
                "step": 2,
                "instruction": "Pass the light rope up through the bight."
            },
            {
                "step": 3,
                "instruction": "Wrap the light rope around the standing part of the heavy rope."
            },
            {
                "step": 4,
                "instruction": "Wrap the light rope around the working end of the heavy rope."
            },
            {
                "step": 5,
                "instruction": "Tuck the light rope under its own standing part and pull tight."
            }
        ],
        "model_id": "vice_versa_bend_v1"
    },
    "68": {
        "id": 68,
        "name": "Surgeon's Knot",
        "program": "Ranger",
        "difficulty": "Medium",
        "xp_value": 100,
        "tags": [
            "Binding",
            "Medical",
            "Friction"
        ],
        "description": "A modification of the Square Knot with an extra twist on the first half, preventing it from slipping while tying the second half.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Cross the right end over the left and tuck it under twice (an extra twist)."
            },
            {
                "step": 2,
                "instruction": "Pull the two ends to tighten the first half."
            },
            {
                "step": 3,
                "instruction": "Cross the left end over the right and tuck it under once."
            },
            {
                "step": 4,
                "instruction": "Pull all ends tight to lock the knot."
            }
        ],
        "model_id": "simple_simon_under_v1"
    },
    "69": {
        "id": 69,
        "name": "Constrictor Knot",
        "program": "Ranger",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Binding",
            "Permanent",
            "Secure"
        ],
        "description": "One of the most secure binding knots ever invented. Once tightened, it is nearly impossible to untie and must often be cut.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Wrap the rope around the object."
            },
            {
                "step": 2,
                "instruction": "Cross the working end over the standing part to form an X."
            },
            {
                "step": 3,
                "instruction": "Wrap the working end around the object again."
            },
            {
                "step": 4,
                "instruction": "Pass the working end under the X, trapping it under the standing part."
            },
            {
                "step": 5,
                "instruction": "Pull both ends extremely tight."
            }
        ],
        "model_id": "simple_simon_over_v1"
    },
    "70": {
        "id": 70,
        "name": "Boa Knot",
        "program": "Ranger",
        "difficulty": "Expert",
        "xp_value": 200,
        "tags": [
            "Binding",
            "Secure",
            "Bulky"
        ],
        "description": "A very secure binding knot similar to the Constrictor Knot, but bulkier. Invented by weaver Peter Collingwood.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Ranger rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Wrap the rope around the object twice."
            },
            {
                "step": 2,
                "instruction": "Take the two ends and twist them around each other."
            },
            {
                "step": 3,
                "instruction": "Tuck the ends under the wraps on opposite sides."
            },
            {
                "step": 4,
                "instruction": "Pull both ends tight to lock the twists under the wraps."
            }
        ],
        "model_id": "overhand_knot_v1"
    },
    "71": {
        "id": 71,
        "name": "Strangle Knot",
        "program": "Woodsman",
        "difficulty": "Medium",
        "xp_value": 100,
        "tags": [
            "Binding",
            "Secure",
            "Temporary"
        ],
        "description": "A simple binding knot, essentially a double overhand knot tied around an object. Similar to the Constrictor but less prone to jamming permanently.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Woodsman rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Wrap the rope around the object."
            },
            {
                "step": 2,
                "instruction": "Cross the working end over the standing part."
            },
            {
                "step": 3,
                "instruction": "Make a second wrap around the object."
            },
            {
                "step": 4,
                "instruction": "Tuck the working end under both wraps."
            },
            {
                "step": 5,
                "instruction": "Pull both ends tight."
            }
        ],
        "model_id": "double_overhand_knot_v1"
    },
    "72": {
        "id": 72,
        "name": "Transom Knot",
        "program": "Woodsman",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Binding",
            "Lashing",
            "Crossed"
        ],
        "description": "A knot used to secure two crossed poles. It acts as a miniature lashing.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Woodsman rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Place two poles across each other."
            },
            {
                "step": 2,
                "instruction": "Pass the rope behind the vertical pole, below the horizontal one."
            },
            {
                "step": 3,
                "instruction": "Bring both ends up and cross them over the horizontal pole."
            },
            {
                "step": 4,
                "instruction": "Pass the ends behind the vertical pole (above the horizontal one) and tie a square knot."
            },
            {
                "step": 5,
                "instruction": "Pull extremely tight."
            }
        ],
        "model_id": "stevedore_knot_v1"
    },
    "73": {
        "id": 73,
        "name": "Packer's Knot",
        "program": "Woodsman",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Binding",
            "Tension",
            "Parcels"
        ],
        "description": "A binding knot traditionally used by merchants and butchers to tie parcels securely.",
        "scenarios": [
            "Used in camping scenarios requiring a Stopper",
            "Standard requirement for the Woodsman rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Tie a figure eight knot near the end of the string, leaving a loop."
            },
            {
                "step": 2,
                "instruction": "Pass the working end around the parcel."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through the loop of the figure eight."
            },
            {
                "step": 4,
                "instruction": "Pull the working end to tension the string around the parcel."
            },
            {
                "step": 5,
                "instruction": "Secure it with a half hitch around the standing part."
            }
        ],
        "model_id": "ashley_s_stopper_knot_v1"
    },
    "74": {
        "id": 74,
        "name": "Miller's Knot",
        "program": "Woodsman",
        "difficulty": "Medium",
        "xp_value": 100,
        "tags": [
            "Binding",
            "Sacks",
            "Secure"
        ],
        "description": "A binding knot used to tie the neck of a sack or bag tightly.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Woodsman rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Wrap the string around the neck of the sack."
            },
            {
                "step": 2,
                "instruction": "Cross the working end over the standing part."
            },
            {
                "step": 3,
                "instruction": "Make a second wrap, crossing over the first wrap."
            },
            {
                "step": 4,
                "instruction": "Tuck the working end under the first wrap."
            },
            {
                "step": 5,
                "instruction": "Pull both ends to cinch the sack closed."
            }
        ],
        "model_id": "monkey_s_fist_v1"
    },
    "75": {
        "id": 75,
        "name": "Ashley's Stopper Knot",
        "program": "Woodsman",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Stopper",
            "Bulky",
            "Secure"
        ],
        "description": "A bulky, three-lobed stopper knot developed by Clifford Ashley. Excellent for keeping a rope from slipping through a hole.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Woodsman rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Tie an overhand knot."
            },
            {
                "step": 2,
                "instruction": "Pass the working end through the loop of the overhand knot a second time."
            },
            {
                "step": 3,
                "instruction": "Take the working end and pass it through the new loop just created."
            },
            {
                "step": 4,
                "instruction": "Carefully dress the knot so it forms three distinct lobes."
            },
            {
                "step": 5,
                "instruction": "Pull tight."
            }
        ],
        "model_id": "heaving_line_knot_v1"
    },
    "76": {
        "id": 76,
        "name": "Stevedore Knot",
        "program": "Woodsman",
        "difficulty": "Medium",
        "xp_value": 100,
        "tags": [
            "Stopper",
            "Bulky",
            "Heavy"
        ],
        "description": "A bulky stopper knot, bulkier than a Figure Eight, traditionally used by stevedores loading cargo.",
        "scenarios": [
            "Used in camping scenarios requiring a Stopper",
            "Standard requirement for the Woodsman rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Form a loop in the rope."
            },
            {
                "step": 2,
                "instruction": "Pass the working end around the standing part three times."
            },
            {
                "step": 3,
                "instruction": "Pass the working end down through the loop."
            },
            {
                "step": 4,
                "instruction": "Pull tight to form a large, barrel-shaped stopper."
            }
        ],
        "model_id": "oysterman_s_stopper_v1"
    },
    "77": {
        "id": 77,
        "name": "Monkey's Fist",
        "program": "Woodsman",
        "difficulty": "Expert",
        "xp_value": 250,
        "tags": [
            "Stopper",
            "Weight",
            "Throwing"
        ],
        "description": "A heavy, spherical knot tied at the end of a heaving line to give it weight for throwing.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Woodsman rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Wrap the rope around your fingers (or a small weighted core) 3 times."
            },
            {
                "step": 2,
                "instruction": "Wrap the rope 3 times horizontally around the first set of wraps."
            },
            {
                "step": 3,
                "instruction": "Wrap the rope 3 times vertically, passing inside the first wraps but outside the second wraps."
            },
            {
                "step": 4,
                "instruction": "Remove your fingers (if used) and slowly tighten each wrap in sequence."
            },
            {
                "step": 5,
                "instruction": "The final knot should resemble a woven ball."
            }
        ],
        "model_id": "matthew_walker_knot_v1"
    },
    "78": {
        "id": 78,
        "name": "Double Overhand Knot",
        "program": "Woodsman",
        "difficulty": "Easy",
        "xp_value": 50,
        "tags": [
            "Stopper",
            "Basic",
            "Secure"
        ],
        "description": "A larger version of the standard overhand knot, used as a stopper or as part of a Double Fisherman's knot.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Woodsman rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Form a loop in the rope."
            },
            {
                "step": 2,
                "instruction": "Pass the working end through the loop."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through the loop a second time."
            },
            {
                "step": 4,
                "instruction": "Pull both ends tight."
            }
        ],
        "model_id": "wall_knot_v1"
    },
    "79": {
        "id": 79,
        "name": "Multiple Overhand Knot",
        "program": "Woodsman",
        "difficulty": "Medium",
        "xp_value": 75,
        "tags": [
            "Stopper",
            "Bulky",
            "Decorative"
        ],
        "description": "Also known as a Blood Knot (stopper version). The rope is passed through the loop multiple times to create a long, cylindrical stopper.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Woodsman rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Form a loop in the rope."
            },
            {
                "step": 2,
                "instruction": "Pass the working end through the loop 4 or 5 times."
            },
            {
                "step": 3,
                "instruction": "Carefully pull the standing part and working end while twisting the wraps."
            },
            {
                "step": 4,
                "instruction": "The wraps should stack neatly into a barrel shape."
            }
        ],
        "model_id": "crown_knot_v1"
    },
    "80": {
        "id": 80,
        "name": "Oysterman's Stopper",
        "program": "Woodsman",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Stopper",
            "Symmetrical",
            "Secure"
        ],
        "description": "A beautiful, symmetrical stopper knot that looks like a three-strand braid. Also known as the Ashley Stopper Knot.",
        "scenarios": [
            "Used in camping scenarios requiring a Binding",
            "Standard requirement for the Woodsman rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Tie a figure eight knot."
            },
            {
                "step": 2,
                "instruction": "Pass the working end through the top loop of the figure eight."
            },
            {
                "step": 3,
                "instruction": "Pass the working end through the bottom loop."
            },
            {
                "step": 4,
                "instruction": "Dress the knot carefully to maintain symmetry."
            },
            {
                "step": 5,
                "instruction": "Pull tight."
            }
        ],
        "model_id": "constrictor_knot_v1"
    },
    "81": {
        "id": 81,
        "name": "Crown Knot",
        "program": "Woodsman",
        "difficulty": "Expert",
        "xp_value": 200,
        "tags": [
            "Decorative",
            "Splicing",
            "Foundation"
        ],
        "description": "A foundational knot tied in the ends of a three-strand rope to prevent fraying or to start a back splice.",
        "scenarios": [
            "Used in camping scenarios requiring a Binding",
            "Standard requirement for the Woodsman rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Unlay (untwist) the three strands of the rope for a few inches."
            },
            {
                "step": 2,
                "instruction": "Take strand 1 and lay it over strand 2, forming a loop."
            },
            {
                "step": 3,
                "instruction": "Take strand 2 and lay it over the end of strand 1 and across strand 3."
            },
            {
                "step": 4,
                "instruction": "Take strand 3 and pass it over strand 2 and down through the loop made by strand 1."
            },
            {
                "step": 5,
                "instruction": "Pull all three strands evenly to form a neat triangle on top of the rope."
            }
        ],
        "model_id": "double_constrictor_knot_v1"
    },
    "82": {
        "id": 82,
        "name": "Wall Knot",
        "program": "Woodsman",
        "difficulty": "Expert",
        "xp_value": 200,
        "tags": [
            "Decorative",
            "Splicing",
            "Foundation"
        ],
        "description": "The inverse of the Crown Knot. Tied in the ends of a three-strand rope, it forms a bump that stops the rope from unlaying.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Woodsman rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Unlay the three strands."
            },
            {
                "step": 2,
                "instruction": "Take strand 1 and pass it under strand 2, forming a loop."
            },
            {
                "step": 3,
                "instruction": "Take strand 2 and pass it under strand 1 and under strand 3."
            },
            {
                "step": 4,
                "instruction": "Take strand 3 and pass it under strand 2 and up through the loop made by strand 1."
            },
            {
                "step": 5,
                "instruction": "Pull all three strands evenly. The knot forms a collar around the rope."
            }
        ],
        "model_id": "boa_knot_v1"
    },
    "83": {
        "id": 83,
        "name": "Wall and Crown",
        "program": "Woodsman",
        "difficulty": "Expert",
        "xp_value": 250,
        "tags": [
            "Decorative",
            "Stopper",
            "Complex"
        ],
        "description": "A combination of the Wall Knot and Crown Knot. It forms a large, secure stopper at the end of a three-strand rope.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Woodsman rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Tie a Wall Knot in the unlayed strands."
            },
            {
                "step": 2,
                "instruction": "Do not pull the Wall Knot completely tight."
            },
            {
                "step": 3,
                "instruction": "Tie a Crown Knot directly on top of the Wall Knot using the same strands."
            },
            {
                "step": 4,
                "instruction": "Carefully work the slack out of both knots."
            },
            {
                "step": 5,
                "instruction": "The resulting knot is round and very secure."
            }
        ],
        "model_id": "strangle_knot_v1"
    },
    "84": {
        "id": 84,
        "name": "Matthew Walker Knot",
        "program": "Woodsman",
        "difficulty": "Expert",
        "xp_value": 300,
        "tags": [
            "Decorative",
            "Stopper",
            "Classic"
        ],
        "description": "A highly respected and complex stopper knot tied in three-strand rope. Often used on bucket handles or lanyards.",
        "scenarios": [
            "Used in camping scenarios requiring a Binding",
            "Standard requirement for the Woodsman rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Unlay the three strands."
            },
            {
                "step": 2,
                "instruction": "Pass strand 1 around the rope and up through its own loop."
            },
            {
                "step": 3,
                "instruction": "Pass strand 2 around the rope, under strand 1's loop, and up through its own loop."
            },
            {
                "step": 4,
                "instruction": "Pass strand 3 around the rope, under loops 1 and 2, and up through its own loop."
            },
            {
                "step": 5,
                "instruction": "Carefully tighten all three strands simultaneously, rolling the knot up the rope."
            }
        ],
        "model_id": "surgeon_s_knot_binding_v1"
    },
    "85": {
        "id": 85,
        "name": "Diamond Knot",
        "program": "Woodsman",
        "difficulty": "Expert",
        "xp_value": 250,
        "tags": [
            "Decorative",
            "Lanyard",
            "Symmetrical"
        ],
        "description": "A beautiful, symmetrical knot often tied in the middle of a lanyard or zipper pull. Also known as the Lanyard Knot.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Woodsman rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Form a Carrick Bend using the two strands of the lanyard."
            },
            {
                "step": 2,
                "instruction": "Take the working end of the right strand, pass it around the standing part, and up through the center of the Carrick Bend."
            },
            {
                "step": 3,
                "instruction": "Take the working end of the left strand, pass it around the standing part, and up through the center."
            },
            {
                "step": 4,
                "instruction": "Both ends should now exit parallel through the center of the knot."
            },
            {
                "step": 5,
                "instruction": "Carefully work the slack out to form a tight, diamond-patterned ball."
            }
        ],
        "model_id": "reef_knot_v1"
    },
    "86": {
        "id": 86,
        "name": "Turk's Head",
        "program": "Woodsman",
        "difficulty": "Expert",
        "xp_value": 300,
        "tags": [
            "Decorative",
            "Woggle",
            "Classic"
        ],
        "description": "A classic decorative knot that forms a woven cylinder around an object. Often used as a scout woggle (neckerchief slide).",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Woodsman rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Wrap the rope around a cylinder (like your fingers or a pipe)."
            },
            {
                "step": 2,
                "instruction": "Weave the working end over and under the standing part to form a continuous braid."
            },
            {
                "step": 3,
                "instruction": "The complexity is defined by the number of 'leads' (strands) and 'bights' (scallops on the edge)."
            },
            {
                "step": 4,
                "instruction": "Once the basic pattern is established, follow the rope around a second or third time to double or triple the knot."
            },
            {
                "step": 5,
                "instruction": "Carefully tighten the knot around the object."
            }
        ],
        "model_id": "thief_knot_v1"
    },
    "87": {
        "id": 87,
        "name": "Carrick Mat",
        "program": "Woodsman",
        "difficulty": "Expert",
        "xp_value": 200,
        "tags": [
            "Decorative",
            "Flat",
            "Mat"
        ],
        "description": "A flat, decorative knot based on the Carrick Bend. Traditionally used as a chafe mat on ships.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Woodsman rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Form a large Carrick Bend on a flat surface."
            },
            {
                "step": 2,
                "instruction": "Do not pull it tight."
            },
            {
                "step": 3,
                "instruction": "Take the working ends and follow the path of the knot a second time."
            },
            {
                "step": 4,
                "instruction": "Follow the path a third time if desired."
            },
            {
                "step": 5,
                "instruction": "Push the strands tightly together so they lie flat against each other."
            }
        ],
        "model_id": "granny_knot_v1"
    },
    "88": {
        "id": 88,
        "name": "Ocean Plait Mat",
        "program": "Woodsman",
        "difficulty": "Expert",
        "xp_value": 250,
        "tags": [
            "Decorative",
            "Flat",
            "Complex"
        ],
        "description": "A more complex flat knot than the Carrick Mat, forming an oval or rectangular woven pad.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Woodsman rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Form a series of interlocking loops on a flat surface."
            },
            {
                "step": 2,
                "instruction": "Weave the working end over and under the loops in a specific pattern to create the plait."
            },
            {
                "step": 3,
                "instruction": "Once the basic single-strand pattern is complete, follow the path a second and third time."
            },
            {
                "step": 4,
                "instruction": "Carefully adjust the tension so the mat is flat and even."
            }
        ],
        "model_id": "grief_knot_v1"
    },
    "89": {
        "id": 89,
        "name": "Grief Knot",
        "program": "Woodsman",
        "difficulty": "Easy",
        "xp_value": 25,
        "tags": [
            "Bend",
            "Failure",
            "Warning"
        ],
        "description": "A knot that looks like a Square Knot or Granny Knot but fails immediately under load. Also called the Whatknot. Included as a warning.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Woodsman rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Cross the right end over the left."
            },
            {
                "step": 2,
                "instruction": "Cross the right end over the left again."
            },
            {
                "step": 3,
                "instruction": "This creates a knot where the strands exit on opposite sides of the loops."
            },
            {
                "step": 4,
                "instruction": "Pull the ends. The knot will immediately slip and pull apart."
            }
        ],
        "model_id": "packer_s_knot_v1"
    },
    "90": {
        "id": 90,
        "name": "Granny Knot",
        "program": "Woodsman",
        "difficulty": "Easy",
        "xp_value": 25,
        "tags": [
            "Binding",
            "Failure",
            "Warning"
        ],
        "description": "An incorrectly tied Square Knot. It is insecure and will slip under heavy load. Included for educational purposes.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Woodsman rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Cross the right end over the left and tuck it under."
            },
            {
                "step": 2,
                "instruction": "Cross the right end over the left again and tuck it under."
            },
            {
                "step": 3,
                "instruction": "Notice that the ends exit the loops on opposite sides, unlike a Square Knot."
            },
            {
                "step": 4,
                "instruction": "Pull tight. The knot will distort and slip under strain."
            }
        ],
        "model_id": "miller_s_knot_v1"
    },
    "91": {
        "id": 91,
        "name": "Thief Knot",
        "program": "Expert",
        "difficulty": "Easy",
        "xp_value": 25,
        "tags": [
            "Bend",
            "Failure",
            "Warning"
        ],
        "description": "Looks exactly like a Square Knot, but the short ends exit on opposite sides. It slips under load. Legend says sailors used it to detect thieves.",
        "scenarios": [
            "Used in camping scenarios requiring a Lashing",
            "Standard requirement for the Expert rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Form a bight in the first rope."
            },
            {
                "step": 2,
                "instruction": "Pass the working end of the second rope up through the bight."
            },
            {
                "step": 3,
                "instruction": "Wrap it around the back of the bight."
            },
            {
                "step": 4,
                "instruction": "Pass it back down through the bight, ensuring the two short ends are on opposite sides of the knot."
            },
            {
                "step": 5,
                "instruction": "Pull tight. Do not use for critical loads."
            }
        ],
        "model_id": "square_lashing_v1"
    },
    "92": {
        "id": 92,
        "name": "Square Lashing",
        "program": "Expert",
        "difficulty": "Hard",
        "xp_value": 200,
        "tags": [
            "Lashing",
            "Pioneering",
            "Right Angles"
        ],
        "description": "The fundamental lashing used to bind two poles together at a 90-degree angle.",
        "scenarios": [
            "Used in camping scenarios requiring a Lashing",
            "Standard requirement for the Expert rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Tie a clove hitch around the vertical pole, just below the cross piece."
            },
            {
                "step": 2,
                "instruction": "Wrap the rope up and over the horizontal pole, around the back of the vertical pole, and down over the horizontal pole."
            },
            {
                "step": 3,
                "instruction": "Repeat this wrapping pattern 3 or 4 times, pulling tightly."
            },
            {
                "step": 4,
                "instruction": "Make 2 or 3 'frapping' turns (wrapping the rope between the two poles to pull the lashing tight)."
            },
            {
                "step": 5,
                "instruction": "Finish with a clove hitch on the horizontal pole."
            }
        ],
        "model_id": "diagonal_lashing_v1"
    },
    "93": {
        "id": 93,
        "name": "Diagonal Lashing",
        "program": "Expert",
        "difficulty": "Hard",
        "xp_value": 200,
        "tags": [
            "Lashing",
            "Pioneering",
            "Crossed Poles"
        ],
        "description": "Used to bind two poles together where they cross at an angle other than 90 degrees, or to pull springing poles together.",
        "scenarios": [
            "Used in camping scenarios requiring a Lashing",
            "Standard requirement for the Expert rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Tie a timber hitch diagonally around the intersection of both poles."
            },
            {
                "step": 2,
                "instruction": "Make 3 or 4 wrapping turns along the same diagonal."
            },
            {
                "step": 3,
                "instruction": "Make 3 or 4 wrapping turns across the opposite diagonal."
            },
            {
                "step": 4,
                "instruction": "Make 2 or 3 tight frapping turns between the poles."
            },
            {
                "step": 5,
                "instruction": "Finish with a clove hitch on any convenient pole."
            }
        ],
        "model_id": "shear_lashing_v1"
    },
    "94": {
        "id": 94,
        "name": "Round Lashing",
        "program": "Expert",
        "difficulty": "Medium",
        "xp_value": 150,
        "tags": [
            "Lashing",
            "Pioneering",
            "Parallel Poles"
        ],
        "description": "Used to lash two parallel poles together to extend their length (like a flagpole).",
        "scenarios": [
            "Used in camping scenarios requiring a Lashing",
            "Standard requirement for the Expert rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Overlap the two poles by at least a quarter of their length."
            },
            {
                "step": 2,
                "instruction": "Tie a clove hitch around both poles near one end of the overlap."
            },
            {
                "step": 3,
                "instruction": "Make 7 or 8 tight wrapping turns around both poles."
            },
            {
                "step": 4,
                "instruction": "Make 2 or 3 frapping turns between the poles (if space allows, otherwise skip)."
            },
            {
                "step": 5,
                "instruction": "Finish with a clove hitch. Repeat the entire process at the other end of the overlap."
            }
        ],
        "model_id": "round_lashing_v1"
    },
    "95": {
        "id": 95,
        "name": "Shear Lashing",
        "program": "Expert",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Lashing",
            "Pioneering",
            "A-Frame"
        ],
        "description": "Used to lash two poles together at one end to form an A-frame or shear legs.",
        "scenarios": [
            "Used in camping scenarios requiring a Lashing",
            "Standard requirement for the Expert rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Lay the two poles parallel to each other."
            },
            {
                "step": 2,
                "instruction": "Tie a clove hitch around one pole."
            },
            {
                "step": 3,
                "instruction": "Make 6 or 7 loose wrapping turns around both poles."
            },
            {
                "step": 4,
                "instruction": "Make 2 frapping turns loosely between the poles."
            },
            {
                "step": 5,
                "instruction": "Finish with a clove hitch. Open the poles like scissors to tighten the lashing."
            }
        ],
        "model_id": "tripod_lashing_v1"
    },
    "96": {
        "id": 96,
        "name": "Tripod Lashing",
        "program": "Expert",
        "difficulty": "Expert",
        "xp_value": 250,
        "tags": [
            "Lashing",
            "Pioneering",
            "Structure"
        ],
        "description": "Used to lash three poles together to form a freestanding tripod.",
        "scenarios": [
            "Used in camping scenarios requiring a Lashing",
            "Standard requirement for the Expert rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Lay three poles side by side, with the center pole pointing the opposite direction."
            },
            {
                "step": 2,
                "instruction": "Tie a clove hitch to one of the outer poles."
            },
            {
                "step": 3,
                "instruction": "Weave the rope loosely over and under the three poles 5 or 6 times."
            },
            {
                "step": 4,
                "instruction": "Make loose frapping turns in the two gaps between the poles."
            },
            {
                "step": 5,
                "instruction": "Finish with a clove hitch. Stand the poles up and spread the legs to tighten."
            }
        ],
        "model_id": "floor_lashing_v1"
    },
    "97": {
        "id": 97,
        "name": "Continuous Lashing",
        "program": "Expert",
        "difficulty": "Expert",
        "xp_value": 250,
        "tags": [
            "Lashing",
            "Pioneering",
            "Decking"
        ],
        "description": "Used to lash a series of small poles (like a tabletop or deck) to two long support poles.",
        "scenarios": [
            "Used in camping scenarios requiring a Lashing",
            "Standard requirement for the Expert rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Tie a clove hitch to the support pole."
            },
            {
                "step": 2,
                "instruction": "Lay the first small pole across the support."
            },
            {
                "step": 3,
                "instruction": "Bring the rope over the small pole, down, and under the support pole."
            },
            {
                "step": 4,
                "instruction": "Lay the next small pole and repeat the over-under pattern."
            },
            {
                "step": 5,
                "instruction": "Keep tension tight and finish with a clove hitch after the last pole."
            }
        ],
        "model_id": "japanese_mark_ii_square_lashing_v1"
    },
    "98": {
        "id": 98,
        "name": "Japanese Square Lashing",
        "program": "Expert",
        "difficulty": "Hard",
        "xp_value": 200,
        "tags": [
            "Lashing",
            "Pioneering",
            "Quick"
        ],
        "description": "A faster alternative to the standard Square Lashing, tied with a doubled rope.",
        "scenarios": [
            "Used in camping scenarios requiring a Seizing",
            "Standard requirement for the Expert rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Double the rope and pass the bight around the vertical pole, under the horizontal one."
            },
            {
                "step": 2,
                "instruction": "Pass the two ends through the bight."
            },
            {
                "step": 3,
                "instruction": "Separate the ends and wrap them in opposite directions over the horizontal pole and behind the vertical."
            },
            {
                "step": 4,
                "instruction": "Cross them in front to form frapping turns."
            },
            {
                "step": 5,
                "instruction": "Tie the two ends together with a square knot."
            }
        ],
        "model_id": "common_whipping_v1"
    },
    "99": {
        "id": 99,
        "name": "Common Whipping",
        "program": "Expert",
        "difficulty": "Medium",
        "xp_value": 100,
        "tags": [
            "Seizing",
            "Maintenance",
            "Fraying"
        ],
        "description": "The simplest method to prevent the end of a rope from fraying by wrapping it tightly with twine.",
        "scenarios": [
            "Used in camping scenarios requiring a Seizing",
            "Standard requirement for the Expert rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Lay a bight of twine along the end of the rope."
            },
            {
                "step": 2,
                "instruction": "Starting from the bottom of the bight, wrap the twine tightly around the rope and the bight."
            },
            {
                "step": 3,
                "instruction": "Make wraps for a distance roughly equal to the rope's diameter."
            },
            {
                "step": 4,
                "instruction": "Pass the working end of the twine through the exposed loop of the bight."
            },
            {
                "step": 5,
                "instruction": "Pull the other end of the twine to drag the loop halfway under the wraps. Cut the ends flush."
            }
        ],
        "model_id": "sailmaker_s_whipping_v1"
    },
    "100": {
        "id": 100,
        "name": "Sailmaker's Whipping",
        "program": "Expert",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Seizing",
            "Maintenance",
            "Secure"
        ],
        "description": "A highly secure whipping for three-strand rope that will not slide off, as it follows the lay of the strands.",
        "scenarios": [
            "Used in camping scenarios requiring a Seizing",
            "Standard requirement for the Expert rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Unlay the end of the rope slightly."
            },
            {
                "step": 2,
                "instruction": "Pass a bight of twine over one strand."
            },
            {
                "step": 3,
                "instruction": "Re-lay the rope and wrap the twine tightly against the lay."
            },
            {
                "step": 4,
                "instruction": "Take the original bight and pass it over the end of the strand it was hooked on."
            },
            {
                "step": 5,
                "instruction": "Pull the twine ends to tighten the bight into the groove, then tie a square knot between the strands."
            }
        ],
        "model_id": "west_country_whipping_v1"
    },
    "101": {
        "id": 101,
        "name": "West Country Whipping",
        "program": "Expert",
        "difficulty": "Medium",
        "xp_value": 100,
        "tags": [
            "Seizing",
            "Maintenance",
            "Quick"
        ],
        "description": "A fast whipping method created by tying a series of overhand knots around the rope.",
        "scenarios": [
            "Used in camping scenarios requiring a Splice",
            "Standard requirement for the Expert rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Center the twine on the rope."
            },
            {
                "step": 2,
                "instruction": "Tie a half knot (first half of a square knot) on the front of the rope."
            },
            {
                "step": 3,
                "instruction": "Bring the ends to the back and tie another half knot."
            },
            {
                "step": 4,
                "instruction": "Repeat this alternating pattern until the whipping is as long as the rope's diameter."
            },
            {
                "step": 5,
                "instruction": "Finish with a full square knot."
            }
        ],
        "model_id": "eye_splice_v1"
    },
    "102": {
        "id": 102,
        "name": "Eye Splice",
        "program": "Expert",
        "difficulty": "Expert",
        "xp_value": 300,
        "tags": [
            "Splice",
            "Permanent",
            "Loop"
        ],
        "description": "The strongest method for creating a permanent loop in the end of a three-strand rope. Retains 90% of rope strength.",
        "scenarios": [
            "Used in camping scenarios requiring a Splice",
            "Standard requirement for the Expert rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Unlay the three strands for about 6 inches and tape the ends."
            },
            {
                "step": 2,
                "instruction": "Form a loop of the desired size."
            },
            {
                "step": 3,
                "instruction": "Tuck the center strand under a standing strand, against the lay."
            },
            {
                "step": 4,
                "instruction": "Tuck the left strand under the next standing strand. Tuck the right strand under the remaining standing strand."
            },
            {
                "step": 5,
                "instruction": "Repeat the over-and-under tucking process for at least three full rounds. Roll underfoot to smooth."
            }
        ],
        "model_id": "short_splice_v1"
    },
    "103": {
        "id": 103,
        "name": "Short Splice",
        "program": "Expert",
        "difficulty": "Expert",
        "xp_value": 300,
        "tags": [
            "Splice",
            "Joining",
            "Permanent"
        ],
        "description": "Used to join two three-strand ropes permanently. It is very strong but doubles the thickness of the rope.",
        "scenarios": [
            "Used in camping scenarios requiring a Splice",
            "Standard requirement for the Expert rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Unlay the ends of both ropes and tape the tips."
            },
            {
                "step": 2,
                "instruction": "Marry the two ends together so the strands alternate (one from left, one from right)."
            },
            {
                "step": 3,
                "instruction": "Tie down one set of strands temporarily."
            },
            {
                "step": 4,
                "instruction": "Tuck the free strands over and under the standing strands of the opposite rope, against the lay."
            },
            {
                "step": 5,
                "instruction": "Repeat for 3 full tucks on both sides. Roll to smooth."
            }
        ],
        "model_id": "long_splice_v1"
    },
    "104": {
        "id": 104,
        "name": "Long Splice",
        "program": "Expert",
        "difficulty": "Expert",
        "xp_value": 400,
        "tags": [
            "Splice",
            "Joining",
            "Pulleys"
        ],
        "description": "Joins two ropes without increasing their diameter, allowing the spliced section to run through a pulley.",
        "scenarios": [
            "Used in camping scenarios requiring a Splice",
            "Standard requirement for the Expert rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Unlay the ends of both ropes for a very long distance (15-20 turns)."
            },
            {
                "step": 2,
                "instruction": "Marry the ends together."
            },
            {
                "step": 3,
                "instruction": "Unlay one strand from the left rope and lay the corresponding right strand into the empty groove."
            },
            {
                "step": 4,
                "instruction": "Repeat in the opposite direction with another pair of strands."
            },
            {
                "step": 5,
                "instruction": "Tie the opposing pairs together with overhand knots and tuck the tails. Cut flush."
            }
        ],
        "model_id": "back_splice_v1"
    },
    "105": {
        "id": 105,
        "name": "Back Splice",
        "program": "Expert",
        "difficulty": "Expert",
        "xp_value": 250,
        "tags": [
            "Splice",
            "Stopper",
            "Maintenance"
        ],
        "description": "A permanent method to prevent a three-strand rope from fraying, forming a bulky end.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Expert rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Unlay the ends of the rope."
            },
            {
                "step": 2,
                "instruction": "Tie a Crown Knot to redirect the strands back down the rope."
            },
            {
                "step": 3,
                "instruction": "Take each strand and tuck it over one standing strand and under the next."
            },
            {
                "step": 4,
                "instruction": "Complete 3 full rounds of tucks."
            },
            {
                "step": 5,
                "instruction": "Roll the splice to smooth it and cut the tails flush."
            }
        ],
        "model_id": "turk_s_head_v1"
    },
    "106": {
        "id": 106,
        "name": "Grummet",
        "program": "Expert",
        "difficulty": "Expert",
        "xp_value": 300,
        "tags": [
            "Decorative",
            "Ring",
            "Ropework"
        ],
        "description": "A continuous ring of rope made from a single strand, often used for quoits or rope handles.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Expert rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Carefully unlay a single strand from a three-strand rope, keeping its spiral shape intact."
            },
            {
                "step": 2,
                "instruction": "Form a loop of the desired size with the strand."
            },
            {
                "step": 3,
                "instruction": "Follow the spiral groove of the loop with the working end."
            },
            {
                "step": 4,
                "instruction": "Continue wrapping until the strand has completed three full circuits."
            },
            {
                "step": 5,
                "instruction": "The ends will meet. Tie them with an overhand knot and tuck the tails into the lay."
            }
        ],
        "model_id": "carrick_mat_v1"
    },
    "107": {
        "id": 107,
        "name": "Chain Sinnet",
        "program": "Expert",
        "difficulty": "Medium",
        "xp_value": 100,
        "tags": [
            "Decorative",
            "Shortening",
            "Storage"
        ],
        "description": "Also known as a Monkey Braid. A method of shortening a rope into a thick chain that will not tangle.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Expert rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Form a slip knot near the anchor point."
            },
            {
                "step": 2,
                "instruction": "Reach through the loop and pull a bight of the standing part through."
            },
            {
                "step": 3,
                "instruction": "Reach through the new loop and pull another bight through."
            },
            {
                "step": 4,
                "instruction": "Repeat this process to form the chain."
            },
            {
                "step": 5,
                "instruction": "To lock, pull the very end of the rope completely through the final loop."
            }
        ],
        "model_id": "ocean_plait_mat_v1"
    },
    "108": {
        "id": 108,
        "name": "Crown Sinnet",
        "program": "Expert",
        "difficulty": "Expert",
        "xp_value": 250,
        "tags": [
            "Decorative",
            "Square",
            "Lanyard"
        ],
        "description": "A square, boxy lanyard made by tying a continuous series of Crown Knots. Often called a 'scoubidou'.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Expert rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Start with two strands crossed at their centers (forming 4 working ends)."
            },
            {
                "step": 2,
                "instruction": "Fold strand 1 over strand 2."
            },
            {
                "step": 3,
                "instruction": "Fold strand 2 over 1 and 3."
            },
            {
                "step": 4,
                "instruction": "Fold strand 3 over 2 and 4. Pass strand 4 over 3 and through the loop of 1."
            },
            {
                "step": 5,
                "instruction": "Pull all 4 strands tight to form a square layer. Repeat continuously."
            }
        ],
        "model_id": "lanyard_knot_v1"
    },
    "109": {
        "id": 109,
        "name": "Wall Sinnet",
        "program": "Expert",
        "difficulty": "Expert",
        "xp_value": 250,
        "tags": [
            "Decorative",
            "Round",
            "Lanyard"
        ],
        "description": "A round, cylindrical lanyard made by tying a continuous series of Wall Knots.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Expert rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Start with 4 working ends."
            },
            {
                "step": 2,
                "instruction": "Pass strand 1 under strand 2."
            },
            {
                "step": 3,
                "instruction": "Pass strand 2 under 1 and 3."
            },
            {
                "step": 4,
                "instruction": "Pass strand 3 under 2 and 4. Pass strand 4 under 3 and up through the loop of 1."
            },
            {
                "step": 5,
                "instruction": "Pull all 4 tight. The resulting sinnet is round and slightly twisted."
            }
        ],
        "model_id": "diamond_knot_v1"
    },
    "110": {
        "id": 110,
        "name": "French Whipping",
        "program": "Expert",
        "difficulty": "Hard",
        "xp_value": 150,
        "tags": [
            "Seizing",
            "Decorative",
            "Handle"
        ],
        "description": "A decorative whipping created by tying a continuous series of half hitches. Forms a spiral ridge.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Expert rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Attach the twine to the rope."
            },
            {
                "step": 2,
                "instruction": "Tie a half hitch around the rope."
            },
            {
                "step": 3,
                "instruction": "Tie a second half hitch directly below the first."
            },
            {
                "step": 4,
                "instruction": "Continue tying half hitches. A spiral ridge will naturally form along the rope."
            },
            {
                "step": 5,
                "instruction": "Finish by tucking the end under the last few wraps."
            }
        ],
        "model_id": "crown_sinnet_v1"
    },
    "111": {
        "id": 111,
        "name": "Snake Knot",
        "program": "Expert",
        "difficulty": "Expert",
        "xp_value": 200,
        "tags": [
            "Decorative",
            "Lanyard",
            "Paracord"
        ],
        "description": "A popular paracord knot that creates a round, flexible lanyard resembling a snake's belly.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Expert rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Take two strands. Pass the right strand behind the left."
            },
            {
                "step": 2,
                "instruction": "Pass the right strand around the front to form a loop."
            },
            {
                "step": 3,
                "instruction": "Pass the left strand down through the loop."
            },
            {
                "step": 4,
                "instruction": "Pass the left strand behind the right standing part and up through the loop again."
            },
            {
                "step": 5,
                "instruction": "Carefully tighten both strands to form the first segment. Repeat."
            }
        ],
        "model_id": "wall_sinnet_v1"
    },
    "112": {
        "id": 112,
        "name": "Cobra Weave",
        "program": "Expert",
        "difficulty": "Medium",
        "xp_value": 150,
        "tags": [
            "Decorative",
            "Bracelet",
            "Paracord"
        ],
        "description": "The classic paracord survival bracelet weave. Technically a series of Solomon Bar knots.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Expert rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Establish a core of two parallel strands."
            },
            {
                "step": 2,
                "instruction": "Take the right working strand over the core."
            },
            {
                "step": 3,
                "instruction": "Take the left strand over the right tail, under the core, and up through the right loop."
            },
            {
                "step": 4,
                "instruction": "Pull tight."
            },
            {
                "step": 5,
                "instruction": "Repeat, alternating the starting side (left over core, right under core)."
            }
        ],
        "model_id": "sheepshank_v1"
    },
    "113": {
        "id": 113,
        "name": "King Cobra Weave",
        "program": "Expert",
        "difficulty": "Hard",
        "xp_value": 200,
        "tags": [
            "Decorative",
            "Bracelet",
            "Paracord"
        ],
        "description": "A double-thick Cobra Weave, created by weaving a second layer of Cobra knots directly over the first.",
        "scenarios": [
            "Used in camping scenarios requiring a Utility",
            "Standard requirement for the Expert rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Complete a standard Cobra Weave bracelet."
            },
            {
                "step": 2,
                "instruction": "Do not cut the ends. Instead, turn the bracelet around."
            },
            {
                "step": 3,
                "instruction": "Begin tying Cobra knots directly over the existing weave."
            },
            {
                "step": 4,
                "instruction": "Ensure the new knots lock tightly into the grooves of the first layer."
            },
            {
                "step": 5,
                "instruction": "Finish at the end and melt the tips."
            }
        ],
        "model_id": "cat_s_paw_v1"
    },
    "114": {
        "id": 114,
        "name": "Globe Knot",
        "program": "Expert",
        "difficulty": "Expert",
        "xp_value": 300,
        "tags": [
            "Decorative",
            "Sphere",
            "Complex"
        ],
        "description": "A complex spherical knot that covers a round core, similar to a Turk's Head but mathematically designed to cover a sphere.",
        "scenarios": [
            "Used in camping scenarios requiring a Hitch",
            "Standard requirement for the Expert rank",
            "Helpful for outdoor survival and pioneering"
        ],
        "steps": [
            {
                "step": 1,
                "instruction": "Wrap the rope around a spherical core in a specific geometric pattern."
            },
            {
                "step": 2,
                "instruction": "Establish the primary interlocking loops (often 30 or more facets)."
            },
            {
                "step": 3,
                "instruction": "Weave the working end over and under the established frame."
            },
            {
                "step": 4,
                "instruction": "Follow the entire path a second time to double the knot."
            },
            {
                "step": 5,
                "instruction": "Carefully tighten the knot evenly until the core is completely hidden."
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
