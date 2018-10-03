const moves_data = [
  {
    id: 1,
    title: "Quick Attack",
    power: 40,
    type: "normal",
    is_first: true
  },
  {
    id: 2,
    title: "Discharge",
    power: 80,
    type: "electric"
  },
  {
    id: 3,
    title: "Thunder Shock",
    power: 40,
    type: "electric"
  },
  {
    id: 4,
    title: "Spark",
    power: 65,
    type: "electric"
  },
  {
    id: 5,
    title: "Thunderbolt",
    power: 90,
    type: "electric"
  },
  {
    id: 6,
    title: "Wild Charge",
    power: 90,
    type: "electric"
  },
  {
    id: 7,
    title: "Thunder",
    power: 110,
    type: "electric"
  },

  {
    id: 8,
    title: "Water Gun",
    power: 40,
    type: "water"
  },
  {
    id: 9,
    title: "Hydro Pump",
    power: 110,
    type: "water"
  },
  {
    id: 10,
    title: "Skull Bash",
    power: 130,
    type: "water"
  },
  {
    id: 11,
    title: "Bite",
    power: 40,
    type: "dark"
  },
  {
    id: 12,
    title: "Aqua Tail",
    power: 90,
    type: "water"
  },
  {
    id: 13,
    title: "Bubble",
    power: 40,
    type: "water"
  },

  {
    id: 14,
    title: "Razor Leaf",
    power: 55,
    type: "grass"
  },
  {
    id: 15,
    title: "Take Down",
    power: 90,
    type: "normal"
  },
  {
    id: 16,
    title: "Double-Edge",
    power: 120,
    type: "normal",
    has_recoil: true
  },
  {
    id: 17,
    title: "Solar Beam",
    power: 120,
    type: "grass",
    two_step: 2
  },
  {
    id: 18,
    title: "Energy Ball",
    power: 90,
    type: "grass"
  },
  {
    id: 19,
    title: "Giga Drain",
    power: 75,
    type: "grass",
    has_hp_recover: true
  },
  {
    id: 20,
    title: "Leaf Storm",
    power: 130,
    type: "grass"
  },
  {
    id: 21,
    title: "Magical Leaf",
    power: 60,
    type: "grass"
  },
  {
    id: 22,
    title: "Power Whip",
    power: 120,
    type: "grass"
  },

  {
    id: 23,
    title: "Fly",
    power: 90,
    two_step: 2,
    type: "flying"
  },
  {
    id: 24,
    title: "Extreme Speed",
    power: 80,
    type: "normal",
    is_first: true
  },
  {
    id: 25,
    title: "Wing Attack",
    power: 60,
    type: "flying"
  },
  {
    id: 26,
    title: "Thunder Punch",
    power: 75,
    type: "electric"
  },
  {
    id: 27,
    title: "Fire Punch",
    power: 75,
    type: "fire"
  },
  {
    id: 28,
    title: "Dragon Rush",
    power: 100,
    type: "dragon"
  },
  {
    id: 29,
    title: "Earthquake",
    power: 100,
    type: "ground"
  },

  {
    id: 30,
    title: "Water Pulse",
    power: 60,
    type: "water"
  },
  {
    id: 31,
    title: "Confusion",
    power: 50,
    type: "psychic"
  },
  {
    id: 32,
    title: "Scratch",
    power: 40,
    type: "normal"
  },
  {
    id: 33,
    title: "Zen Headbutt",
    power: 80,
    type: "psychic"
  },
  {
    id: 34,
    title: "Psychic",
    power: 90,
    type: "psychic"
  },

  {
    id: 35,
    title: "Self-Destruct",
    power: 200,
    type: "normal",
    will_faint: true
  },
  {
    id: 36,
    title: "Stone Edge",
    power: 100,
    type: "rock"
  },
  {
    id: 37,
    title: "Tackle",
    power: 40,
    type: "normal"
  },
  {
    id: 38,
    title: "Focus Punch",
    power: 150,
    type: "fighting",
    two_step: 2
  },
  {
    id: 39,
    title: "Hammer Arm",
    power: 100,
    type: "fighting"
  },
  {
    id: 40,
    title: "Mega Punch",
    power: 80,
    type: "normal"
  },

  {
    id: 41,
    title: "Crunch",
    power: 80,
    type: "dark"
  },
  {
    id: 42,
    title: "Ice Fang",
    power: 65,
    type: "ice"
  },
  {
    id: 43,
    title: "Surf",
    power: 90,
    type: "water"
  },

  {
    id: 44,
    title: "Inferno",
    power: 100,
    type: "fire"
  },
  {
    id: 45,
    title: "Ember",
    power: 40,
    type: "fire"
  },

  {
    id: 46,
    title: "Fire Fang",
    power: 65,
    type: "fire"
  },
  {
    id: 47,
    title: "Flamethrower",
    power: 90,
    type: "fire"
  },
  {
    id: 48,
    title: "Feint Attack",
    power: 60,
    type: "dark"
  },

  {
    id: 49,
    title: "Muddy Water",
    power: 90,
    type: "water"
  },
  {
    id: 50,
    title: "Future Sight",
    power: 120,
    type: "psychic",
    two_step: true
  },

  {
    id: 51,
    title: "Waterfall",
    power: 80,
    type: "water"
  },

  {
    id: 52,
    title: "Astonish",
    power: 30,
    type: "ghost"
  },
  {
    id: 53,
    title: "Night Slash",
    power: 70,
    type: "dark"
  },
  {
    id: 54,
    title: "Dark Pulse",
    power: 80,
    type: "dark"
  },
  {
    id: 55,
    title: "Foul Play",
    power: 95,
    type: "dark"
  },
  {
    id: 56,
    title: "Aerial Ace",
    power: 60,
    type: "flying"
  },
  {
    id: 57,
    title: "Giga Impact",
    power: 95,
    type: "dark",
    needs_recharge: true
  },
  {
    id: 58,
    title: "Mystical Fire",
    power: 75,
    type: "fire"
  },
  {
    id: 59,
    title: "Hyper Beam",
    power: 150,
    type: "normal",
    needs_recharge: true
  },
  {
    id: 60,
    title: "Hidden Power",
    power: 60,
    type: "normal"
  },
  {
    id: 61,
    title: "Icy Wind",
    power: 55,
    type: "ice"
  },
  {
    id: 62,
    title: "Ice Punch",
    power: 75,
    type: "ice"
  },
  {
    id: 63,
    title: "Wood Hammer",
    power: 120,
    type: "grass",
    has_recoil: true
  },
  {
    id: 64,
    title: "Blizzard",
    power: 110,
    type: "ice"
  },
  {
    id: 65,
    title: "Seed Bomb",
    power: 80,
    type: "grass"
  },
  {
    id: 66,
    title: "Focus Blast",
    power: 120,
    type: "fighting"
  },
  {
    id: 67,
    title: "Peck",
    power: 35,
    type: "flying"
  },
  {
    id: 68,
    title: "Drill Peck",
    power: 80,
    type: "flying"
  },
  {
    id: 69,
    title: "Steel Wing",
    power: 70,
    type: "steel"
  },
  {
    id: 70,
    title: "Zap Cannon",
    power: 120,
    type: "electric"
  },
  {
    id: 71,
    title: "Extrasensory",
    power: 80,
    type: "psychic"
  },
  {
    id: 72,
    title: "Aeroblast",
    power: 100,
    type: "flying"
  },
  {
    id: 74,
    title: "Bullet Punch",
    power: 40,
    type: "steel",
    is_first: true
  },
  {
    id: 75,
    title: "Metal Claw",
    power: 50,
    type: "steel"
  },
  {
    id: 76,
    title: "Slash",
    power: 70,
    type: "normal"
  },
  {
    id: 77,
    title: "X-Scissor",
    power: 80,
    type: "bug"
  },
  {
    id: 78,
    title: "Ironhead",
    power: 80,
    type: "steel"
  },
  {
    id: 79,
    title: "Bodyslam",
    power: 85,
    type: "normal"
  },
  {
    id: 80,
    title: "Superpower",
    power: 120,
    type: "fighting"
  },
  {
    id: 82,
    title: "Eruption",
    power: 150,
    type: "fire"
  },
  {
    id: 83,
    title: "Fire Blast",
    power: 110,
    type: "fire"
  },
  {
    id: 84,
    title: "Lava Plume",
    power: 80,
    type: "fire"
  },
  {
    id: 85,
    title: "Flame Charge",
    power: 50,
    type: "fire"
  },
  {
    id: 86,
    title: "Meteor Mash",
    power: 90,
    type: "steel"
  },
  {
    id: 87,
    title: "Dragon Tail",
    power: 60,
    type: "dragon"
  },
  {
    id: 88,
    title: "Dragon Breath",
    power: 60,
    type: "dragon"
  },
  {
    id: 89,
    title: "Dragon Claw",
    power: 80,
    type: "dragon"
  },
  {
    id: 90,
    title: "Overheat",
    power: 130,
    type: "fire"
  },
  {
    id: 91,
    title: "Rock Slide",
    power: 75,
    type: "rock"
  },
  {
    id: 92,
    title: "Sludge Wave",
    power: 95,
    type: "poison"
  },
  {
    id: 93,
    title: "Leaf Blade",
    power: 130,
    type: "grass"
  },
  {
    id: 94,
    title: "Fury Cutter",
    power: 40,
    type: "bug"
  },
  {
    id: 95,
    title: "Mega Drain",
    power: 40,
    type: "grass"
  },
  {
    id: 96,
    title: "Slam",
    power: 80,
    type: "normal"
  },
  {
    id: 97,
    title: "Stomp",
    power: 65,
    type: "normal"
  },
  {
    id: 98,
    title: "Bulldoze",
    power: 60,
    type: "normal"
  },
  {
    id: 99,
    title: "Charge Beam",
    power: 50,
    type: "electric"
  },
  {
    id: 100,
    title: "Explosion",
    power: 250,
    type: "normal",
    will_faint: true
  },
  {
    id: 101,
    title: "Ice Beam",
    power: 90,
    type: "ice"
  },
  {
    id: 102,
    title: "Ancient Power",
    power: 60,
    type: "rock"
  },

  {
    id: 103,
    title: "Incinerate",
    power: 60,
    type: "fire"
  },
  {
    id: 104,
    title: "Headbutt",
    power: 60,
    type: "normal"
  },
  {
    id: 105,
    title: "Power Gem",
    power: 80,
    type: "rock"
  },
  {
    id: 106,
    title: "Flash Cannon",
    power: 80,
    type: "steel"
  },
  {
    id: 107,
    title: "Thunder Fang",
    power: 65,
    type: "electric"
  },
  {
    id: 108,
    title: "Play Rough",
    power: 90,
    type: "fairy"
  },
  {
    id: 109,
    title: "Shadow Ball",
    power: 80,
    type: "ghost"
  },
  {
    id: 110,
    title: "Psychic Fangs",
    power: 85,
    type: "psychic"
  },
  {
    id: 111,
    title: "Sucker Punch",
    power: 70,
    type: "dark"
  },
  {
    id: 112,
    title: "Fairy Wind",
    power: 85,
    type: "fairy"
  },
  {
    id: 113,
    title: "Sludge Bomb",
    power: 90,
    type: "poison"
  },
  {
    id: 114,
    title: "Needle Arm",
    power: 60,
    type: "grass"
  },
  {
    id: 115,
    title: "Venoshock",
    power: 65,
    type: "poison"
  },
  {
    id: 116,
    title: "Brick Break",
    power: 75,
    type: "fighting"
  },
  {
    id: 117,
    title: "Poison Jab",
    power: 75,
    type: "poison"
  },
  {
    id: 118,
    title: "Earth Power",
    power: 90,
    type: "ground"
  },
  {
    id: 119,
    title: "Brutal Swing",
    power: 60,
    type: "dark"
  },
  {
    id: 120,
    title: "Signal Beam",
    power: 75,
    type: "bug"
  },
  {
    id: 121,
    title: "Close Combat",
    power: 120,
    type: "fighting"
  },
  {
    id: 122,
    title: "Brave Bird",
    power: 120,
    type: "flying",
    has_recoil: true
  },
  {
    id: 123,
    title: "Belch",
    power: 120,
    type: "poison"
  },
  {
    id: 125,
    title: "Shadow Claw",
    power: 70,
    type: "ghost"
  },
  {
    id: 126,
    title: "Swift",
    power: 60,
    type: "normal"
  },
  {
    id: 127,
    title: "Psybeam",
    power: 65,
    type: "psychic"
  },
  {
    id: 128,
    title: "Psyshock",
    power: 80,
    type: "psychic"
  },
  {
    id: 129,
    title: "Dig",
    power: 80,
    type: "ground",
    two_step: true
  },
  {
    id: 130,
    title: "Flare Blitz",
    power: 120,
    type: "fire"
  },
  {
    id: 131,
    title: "Hurricane",
    power: 110,
    type: "flying"
  },
  {
    id: 132,
    title: "Bug Buzz",
    power: 90,
    type: "bug"
  },
  {
    id: 133,
    title: "Horn Attack",
    power: 90,
    type: "normal"
  },
  {
    id: 134,
    title: "Megahorn",
    power: 120,
    type: "bug"
  },
  {
    id: 135,
    title: "Tri Attack",
    power: 80,
    type: "normal"
  },
  {
    id: 136,
    title: "Fell Stinger",
    power: 50,
    type: "bug"
  },
  {
    id: 137,
    title: "Techno Blast",
    power: 120,
    type: "normal"
  },
  {
    id: 138,
    title: "Gunk Shot",
    power: 120,
    type: "poison"
  },
  {
    id: 139,
    title: "Dazzling Gleam",
    power: 80,
    type: "fairy"
  },
  {
    id: 140,
    title: "MoonBlast",
    power: 95,
    type: "fairy"
  }
];

export default moves_data;
