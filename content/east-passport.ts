export type EastHand = {
  name: string;
  description: string;
  note?: string;
  tiles?: string[][];
};

export type EastSection = {
  title: string;
  intro?: string;
  hands: EastHand[];
};

export const eastAnythingGoes: EastSection = {
  title: "East — Anything Goes",
  intro: "Any 4 sets of 3 and a pair. You cannot end on a knit pair unless you have a crochet.",
  hands: [
    {
      name: "Example: Clean Pair",
      description: "Pung + Chow + Pung + Mixed Chow + Pair",
      tiles: [
        ["Bamboo_3", "Bamboo_3", "Bamboo_3"],
        ["Dot_5", "Dot_6", "Dot_7"],
        ["Character_9", "Character_9", "Character_9"],
        ["Dot_1", "Bamboo_2", "Character_3"],
        ["Dragon_Red", "Dragon_Red"],
      ],
    },
    {
      name: "Example: Knit Pair",
      description:
        "Pung + Chow + Crochet + Mixed Chow + Knit (allowed because the hand contains a Crochet)",
      tiles: [
        ["Bamboo_3", "Bamboo_3", "Bamboo_3"],
        ["Dot_5", "Dot_6", "Dot_7"],
        ["Character_9", "Dot_9", "Bamboo_9"],
        ["Dot_1", "Bamboo_2", "Character_3"],
        ["Character_6", "Bamboo_6"],
      ],
    },
  ],
};

export const eastPassportIntro =
  "If your table plays passport, these are the passport hands (examples included).";

export const eastPassportHands: EastHand[] = [
  {
    name: "3 pairs in 3 different suits + any set of 3 + any set of 3 + pair",
    tiles: [
      ["Dot_2", "Dot_2"],
      ["Bamboo_2", "Bamboo_2"],
      ["Character_2", "Character_2"],
      ["Bamboo_5", "Bamboo_5", "Bamboo_5"],
      ["Dot_3", "Dot_4", "Dot_5"],
      ["Dragon_Red", "Dragon_Red"],
    ],
  },
  {
    name: "3 pairs in the same suit + any set of 3 + any set of 3 + pair",
    tiles: [
      ["Dot_2", "Dot_2"],
      ["Dot_5", "Dot_5"],
      ["Dot_7", "Dot_7"],
      ["Bamboo_3", "Bamboo_3", "Bamboo_3"],
      ["Character_6", "Character_7", "Character_8"],
      ["Wind_East", "Wind_East"],
    ],
  },
  {
    name: "3 knits (in 2 similar suits only) + any set of 3 + any set of 3 + pair",
    description: "The pair is a knit in the same 2 suits (Dots and Bamboos) as the other knits.",
    tiles: [
      ["Dot_1", "Bamboo_1"],
      ["Dot_4", "Bamboo_4"],
      ["Dot_7", "Bamboo_7"],
      ["Character_9", "Character_9", "Character_9"],
      ["Bamboo_2", "Bamboo_3", "Bamboo_4"],
      ["Dot_6", "Bamboo_6"],
    ],
  },
  {
    name: "3 chows in 3 different suits + any set of 3 + pair",
    tiles: [
      ["Dot_2", "Dot_3", "Dot_4"],
      ["Bamboo_3", "Bamboo_4", "Bamboo_5"],
      ["Character_4", "Character_5", "Character_6"],
      ["Dot_7", "Dot_7", "Dot_7"],
      ["Dragon_Green", "Dragon_Green"],
    ],
  },
  {
    name: "3 chows in any single suit + any set of 3 + pair",
    tiles: [
      ["Dot_1", "Dot_2", "Dot_3"],
      ["Dot_4", "Dot_5", "Dot_6"],
      ["Dot_7", "Dot_8", "Dot_9"],
      ["Bamboo_5", "Bamboo_5", "Bamboo_5"],
      ["Wind_West", "Wind_West"],
    ],
  },
  {
    name: "NEWS (one of each wind) + one more wind to make a pair + 3 sets of 3",
    description: "NEWS (4 tiles) + 1 South Wind yields a pair of South Winds; plus 3 sets of 3 = 14 tiles.",
    tiles: [
      ["Wind_North", "Wind_East", "Wind_West", "Wind_South", "Wind_South"],
      ["Dot_3", "Dot_3", "Dot_3"],
      ["Bamboo_5", "Bamboo_6", "Bamboo_7"],
      ["Character_9", "Character_9", "Character_9"],
    ],
  },
  {
    name: "GRW (one of each dragon) + pair of any wind or dragon + 3 sets of 3",
    tiles: [
      ["Dragon_Green", "Dragon_Red", "Dragon_White"],
      ["Dragon_Red", "Dragon_Red"],
      ["Dot_4", "Dot_4", "Dot_4"],
      ["Bamboo_2", "Bamboo_3", "Bamboo_4"],
      ["Character_6", "Character_6", "Character_6"],
    ],
  },
];
