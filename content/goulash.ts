export type GoulashPermissibleHand = {
  name: string;
  description: string;
  doubles: string;
  note?: string;
  tiles?: string[][];
};

export type GoulashDoubleItem = {
  name: string;
};

export type GoulashDoublesSection = {
  title: string;
  items: GoulashDoubleItem[];
};

export const goulashIntro =
  "Winning hand: 4 Pungs/Kongs + 1 Pair. Remember to draw an extra tile from the flower wall for each Kong. Minimum 3 doubles required. No Chows, Crochet, Knit, Jokers, or buying.";

export const goulashPermissibleHands: GoulashPermissibleHand[] = [
  {
    name: "4 Pungs/Kongs + a pair in one suit only",
    description: "All tiles from a single suit (Rings, Bamboos, or Characters). No Honours.",
    doubles: "3 doubles",
    tiles: [
      ["Bamboo_3", "Bamboo_3", "Bamboo_3"],
      ["Bamboo_6", "Bamboo_6", "Bamboo_6"],
      ["Bamboo_8", "Bamboo_8", "Bamboo_8"],
      ["Bamboo_1", "Bamboo_1", "Bamboo_1"],
      ["Bamboo_9", "Bamboo_9"],
    ],
  },
  {
    name: "4 Pungs and a Pair of Honours only",
    description: "All tiles are Winds and Dragons. No suited tiles.",
    doubles: "3 doubles",
    tiles: [
      ["Wind_South", "Wind_South", "Wind_South"],
      ["Dragon_Green", "Dragon_Green", "Dragon_Green"],
      ["Wind_North", "Wind_North", "Wind_North"],
      ["Dragon_White", "Dragon_White", "Dragon_White"],
      ["Dragon_Red", "Dragon_Red"],
    ],
  },
  {
    name: "4 Pungs/Kongs of only 1s and 9s",
    description: "All terminals (1s and 9s) across any suits. Heads and Tails.",
    doubles: "3 doubles",
    note: "5000 from all if Mahjong declared / 2500 from all if calling (except winner)",
    tiles: [
      ["Bamboo_9", "Bamboo_9", "Bamboo_9"],
      ["Character_1", "Character_1", "Character_1"],
      ["Dot_9", "Dot_9", "Dot_9"],
      ["Bamboo_1", "Bamboo_1", "Bamboo_1"],
      ["Dot_1", "Dot_1"],
    ],
  },
  {
    name: "4 Pungs/Kongs + a pair of 1s and 9s in one suit mixed with Honours",
    description: "Pungs of 1s, 9s, and/or Honours. Pair must be 1s, 9s, or Honours.",
    doubles: "1 double",
    note: "Can end with a pair of 1s / 9s / Honours only if a Pung of 1s / 9s / Honours in hand",
    tiles: [
      ["Dragon_Green", "Dragon_Green", "Dragon_Green"],
      ["Wind_North", "Wind_North", "Wind_North"],
      ["Bamboo_9", "Bamboo_9", "Bamboo_9"],
      ["Dragon_Red", "Dragon_Red", "Dragon_Red"],
      ["Bamboo_1", "Bamboo_1"],
    ],
  },
  {
    name: "4 Pungs/Kongs in any 1 suit with Honours",
    description: "Mix of one suit and Honours. Pair can be suit or Honours.",
    doubles: "0 doubles",
    note: "Can end with a pair of Honours only if Pungs of Honours in hand. Same for Suit Pair. Need 3 more doubles from flowers, concealed sets, etc.",
    tiles: [
      ["Character_5", "Character_5", "Character_5"],
      ["Dragon_Red", "Dragon_Red", "Dragon_Red"],
      ["Character_7", "Character_7", "Character_7"],
      ["Dot_9", "Dot_9", "Dot_9"],
      ["Wind_West", "Wind_West"],
    ],
  },
];

export const goulashDoublesSections: GoulashDoublesSection[] = [
  {
    title: "1 DOUBLE",
    items: [
      { name: "Major Hand with a Pung and Pair of Terminals in One Suit" },
      { name: "Pungs of 1's and 9's in One Suit" },
      { name: "Pung of any Dragon" },
      { name: "Pung of your Own Wind" },
      { name: "Pung of the Wind of the Round" },
      { name: "3 Pungs of Winds / 3 Pungs of Dragons" },
      { name: "3 Concealed Pungs" },
      { name: "Own Flower" },
      { name: "Flower of the Round" },
      { name: "Mahjong on the last tile" },
      { name: "Clean Sweep in the same round" },
    ],
  },
  {
    title: "2 DOUBLES",
    items: [
      { name: "Pung of Double Wind" },
      {
        name: "3 Pungs of Winds which includes either a Pung of Own Wind OR Pung of Round Wind",
      },
      { name: "Pair of Own Flower OR Pair of Round Flower" },
      { name: "4 Concealed Pungs" },
      { name: "3 Kongs (Exposed)" },
    ],
  },
  {
    title: "3 DOUBLES",
    items: [
      { name: "All Honour Hand" },
      { name: "One Suit Hand Clean" },
      {
        name: "3 Pungs of Winds which includes a Pung of Own Wind AND Pung of Round Wind",
      },
      { name: "Concealed Mahjong" },
      { name: "3 Concealed Kongs" },
      { name: "4 Exposed Kongs" },
      { name: "Own flower or Round Flower Pair/500 + Own Flower/Round Flower" },
      { name: "Bouquet/1000" },
    ],
  },
  {
    title: "4 DOUBLES",
    items: [
      { name: "Clean Suit hand with a Set of Terminals" },
      { name: "Own Flower Pair + Round Flower Pair/1000" },
      { name: "Bouquet + Own Flower/Round Flower/1500" },
      { name: "4 Concealed Kongs" },
    ],
  },
  {
    title: "5 DOUBLES",
    items: [
      { name: "Drawn Standing Hand" },
      { name: "Bouquet + Own Flower + Round Flower" },
    ],
  },
  {
    title: "6 DOUBLES",
    items: [{ name: "2 Bouquets/5000" }],
  },
  {
    title: "7 DOUBLES",
    items: [{ name: "4 Pungs of Winds + A Pair of Dragons" }],
  },
];
