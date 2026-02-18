export type SmallCard = {
  title: string;
  rules: string;
  limit: string;
  /** Tile groups for visual example. Each inner array is a set (pung, run, pair). Tile IDs: Bamboo_1-9, Character_1-9, Dot_1-9, Dragon_Red/Green/White, Wind_East/South/West/North */
  tiles?: string[][];
};

export const smallCards: SmallCard[] = [
  // Page 1
  {
    title: "Triple Knitting (Crochet)",
    rules:
      "Four sets of three tiles, each set same number of each suit and a Knitted Pair (same number from two suits).",
    limit: "Last tile from discard. Half Limit",
    tiles: [
      ["Character_1", "Bamboo_1", "Dot_1"],
      ["Character_4", "Bamboo_4", "Dot_4"],
      ["Character_6", "Bamboo_6", "Dot_6"],
      ["Character_8", "Bamboo_8", "Dot_8"],
      ["Dot_9", "Character_9"],
    ],
  },
  {
    title: "Little Runner",
    rules:
      "A Run in each suit, one Mixed Run and a Pair of 1's or 9's only.",
    limit: "Last tile from discard. Half Limit",
    tiles: [
      ["Dot_1", "Dot_2", "Dot_3"],
      ["Character_7", "Character_8", "Character_9"],
      ["Bamboo_1", "Bamboo_2", "Bamboo_3"],
      ["Character_4", "Bamboo_5", "Dot_6"],
      ["Character_1", "Character_1"],
    ],
  },
  {
    title: "Bomb Shell",
    rules:
      "3 Runs in 3 suits. One each of the Dragon (Green, Red, White) and a Pair of Winds.",
    limit: "Last tile from discard. Half Limit",
    tiles: [
      ["Dragon_Green", "Dragon_Red", "Dragon_White"],
      ["Wind_North", "Wind_North"],
      ["Character_1", "Character_2", "Character_3"],
      ["Bamboo_4", "Bamboo_5", "Bamboo_6"],
      ["Dot_7", "Dot_8", "Dot_9"],
    ],
  },
  {
    title: "Little Robert",
    rules:
      "Three Runs, a Pung and a Pair, in any 1 suit only. Except if Pair of own Wind is used. If Pair of own Wind already in hand, then only last tile may be taken from discard.",
    limit: "Half Limit",
    tiles: [
      ["Dot_1", "Dot_2", "Dot_3"],
      ["Dot_4", "Dot_5", "Dot_6"],
      ["Dot_7", "Dot_8", "Dot_9"],
      ["Dot_2", "Dot_2", "Dot_2"],
      ["Dot_5", "Dot_5"],
    ],
  },
  {
    title: "Dirty Pairs",
    rules: "Any seven pairs.",
    limit: "Half Limit",
    tiles: [
      ["Dot_4", "Dot_4"],
      ["Character_4", "Character_4"],
      ["Dragon_Green", "Dragon_Green"],
      ["Bamboo_8", "Bamboo_8"],
      ["Character_1", "Character_1"],
      ["Wind_East", "Wind_East"],
      ["Character_3", "Character_3"],
    ],
  },
  {
    title: "Club Hand",
    rules:
      "One each of the Dragons (G, R, P). One each of the Winds (N, E, W, S). 8 Character, 1 Bamboo, 2 Bamboo, 1–9–1–7 in one suit.",
    limit: "Fully Concealed – Super Limit",
    tiles: [
      ["Dragon_Green", "Dragon_Red", "Dragon_White"],
      ["Wind_North", "Wind_East", "Wind_West", "Wind_South"],
      ["Character_8"],
      ["Bamboo_1", "Bamboo_2"],
      ["Dot_1", "Dot_9", "Dot_1", "Dot_7"],
    ],
  },
  // Page 2 style cards
  {
    title: "All Pair Ruby Jade Hand",
    rules:
      "Pair of red & green Bamboos. Also there MUST be a Pair of Red and Green Dragons.",
    limit: "Limit",
    tiles: [
      ["Dragon_Red", "Dragon_Red"],
      ["Dragon_Green", "Dragon_Green"],
      ["Bamboo_1", "Bamboo_1"],
      ["Bamboo_2", "Bamboo_2"],
      ["Bamboo_3", "Bamboo_3"],
      ["Bamboo_5", "Bamboo_5"],
      ["Bamboo_9", "Bamboo_9"],
    ],
  },
  {
    title: "Ringlet",
    rules:
      "Any Pung, one Run, one Mixed Run, one Crochet stitch and one Knit Pair.",
    limit: "All tiles from the wall. Limit",
    tiles: [
      ["Dragon_White", "Dragon_White", "Dragon_White"],
      ["Character_3", "Character_4", "Character_5"],
      ["Character_6", "Dot_7", "Bamboo_8"],
      ["Character_2", "Dot_2", "Bamboo_2"],
      ["Dot_3", "Bamboo_3"],
    ],
  },
  {
    title: "All Winds & Dragons",
    rules: "Pungs/Kongs and a Pair of Winds and Dragons.",
    limit: "May be Punged. Limit",
    tiles: [
      ["Wind_East", "Wind_East", "Wind_East"],
      ["Wind_South", "Wind_South", "Wind_South"],
      ["Wind_West", "Wind_West", "Wind_West"],
      ["Dragon_Green", "Dragon_Green", "Dragon_Green"],
      ["Dragon_Red", "Dragon_Red"],
    ],
  },
  {
    title: "Golden Staircase",
    rules:
      "Run of 1 to 9, Concealed Pung of Dragons/Winds, and a Pair of Winds/Dragons.",
    limit: "Last tile from discard, but not the Pung tile. Limit",
    tiles: [
      ["Dot_1", "Dot_2", "Dot_3", "Dot_4", "Dot_5", "Dot_6", "Dot_7", "Dot_8", "Dot_9"],
      ["Dragon_Green", "Dragon_Green", "Dragon_Green"],
      ["Wind_East", "Wind_East"],
    ],
  },
  {
    title: "Buried Treasure",
    rules:
      "One suit and/or Winds and Dragons. Chows (Runs) and Pungs may be used, but all tiles including the 14th must be from the wall. No Kongs allowed.",
    limit: "Limit",
    tiles: [
      ["Dot_2", "Dot_3", "Dot_4"],
      ["Dragon_Red", "Dragon_Red", "Dragon_Red"],
      ["Dot_4", "Dot_5", "Dot_6"],
      ["Dot_7", "Dot_7", "Dot_7"],
      ["Dragon_Green", "Dragon_Green"],
    ],
  },
  {
    title: "All Pair Jade Hand",
    rules:
      "All Pairs of green Bamboos only (2, 3, 4, 6, 8). Plus there MUST be a Pair of Green Dragons.",
    limit: "Limit",
    tiles: [
      ["Dragon_Green", "Dragon_Green"],
      ["Bamboo_2", "Bamboo_2"],
      ["Bamboo_3", "Bamboo_3"],
      ["Bamboo_4", "Bamboo_4"],
      ["Bamboo_6", "Bamboo_6"],
      ["Bamboo_8", "Bamboo_8"],
      ["Bamboo_2", "Bamboo_2"],
    ],
  },
  {
    title: "A Run, A Pung, A Pair",
    rules: "Run of 1 to 9, a Pung, and a Pair, all in one suit.",
    limit: "Last tile from discard. Limit",
    tiles: [
      ["Dot_1", "Dot_2", "Dot_3"],
      ["Dot_4", "Dot_5", "Dot_6"],
      ["Dot_7", "Dot_8", "Dot_9"],
      ["Dot_7", "Dot_7", "Dot_7"],
      ["Dot_2", "Dot_2"],
    ],
  },
  {
    title: "Dragon Fly",
    rules:
      "One of each Dragon, Pung in each suit, and a Pair of any suit.",
    limit: "Limit if concealed. Half Limit if Punged from discard",
    tiles: [
      ["Dragon_Red", "Dragon_Green", "Dragon_White"],
      ["Bamboo_1", "Bamboo_1", "Bamboo_1"],
      ["Dot_2", "Dot_2", "Dot_2"],
      ["Character_3", "Character_3", "Character_3"],
      ["Character_4", "Character_4"],
    ],
  },
  {
    title: "Buried Treasure-D",
    rules:
      "All hidden Pungs and a Pair. All suits/Winds/Dragons may be mixed. All tiles from the wall.",
    limit: "Double Limit",
    tiles: [
      ["Dragon_Green", "Dragon_Green", "Dragon_Green"],
      ["Wind_East", "Wind_East", "Wind_East"],
      ["Character_1", "Character_1", "Character_1"],
      ["Character_2", "Character_2", "Character_2"],
      ["Dot_1", "Dot_1"],
    ],
  },
  {
    title: "Greta's Garden",
    rules:
      "One of each Wind, one of each Dragon, and a Run of 1 to 7 in one suit.",
    limit: "Last tile from discard. Limit",
    tiles: [
      ["Wind_East", "Wind_South", "Wind_West", "Wind_North"],
      ["Dragon_Green", "Dragon_Red", "Dragon_White"],
      ["Character_1", "Character_2", "Character_3", "Character_4", "Character_5", "Character_6", "Character_7"],
    ],
  },
  // Page 3 style cards
  {
    title: "All Pair Major Hand",
    rules: "7 Pairs of any Majors.",
    limit: "Last tile from discard. Limit",
    tiles: [
      ["Character_1", "Character_1"],
      ["Dot_1", "Dot_1"],
      ["Character_9", "Character_9"],
      ["Dot_9", "Dot_9"],
      ["Wind_East", "Wind_East"],
      ["Dragon_Red", "Dragon_Red"],
      ["Dragon_Green", "Dragon_Green"],
    ],
  },
  {
    title: "Chinese Odds",
    rules: "One suit only. All odd nos. Four Pungs and a Pair.",
    limit: "May be Punged. Limit",
    tiles: [
      ["Bamboo_1", "Bamboo_1", "Bamboo_1"],
      ["Bamboo_3", "Bamboo_3", "Bamboo_3"],
      ["Bamboo_5", "Bamboo_5", "Bamboo_5"],
      ["Bamboo_7", "Bamboo_7", "Bamboo_7"],
      ["Bamboo_9", "Bamboo_9"],
    ],
  },
  {
    title: "Purity Hand",
    rules: "Four Pungs and a Pair in one suit only.",
    limit: "May be Punged from discard. Count",
    tiles: [
      ["Character_1", "Character_1", "Character_1"],
      ["Character_4", "Character_4", "Character_4"],
      ["Character_6", "Character_6", "Character_6"],
      ["Character_8", "Character_8", "Character_8"],
      ["Character_9", "Character_9"],
    ],
  },
  {
    title: "Heads & Tails",
    rules: "Four Pungs of Ones and Nines and a Pair of any Winds.",
    limit: "May be Punged. Limit",
    tiles: [
      ["Character_1", "Character_1", "Character_1"],
      ["Character_9", "Character_9", "Character_9"],
      ["Dot_1", "Dot_1", "Dot_1"],
      ["Dot_9", "Dot_9", "Dot_9"],
      ["Wind_East", "Wind_East"],
    ],
  },
  {
    title: "A Joker Hand",
    rules: "Can do any Hand you like.",
    limit: "",
  },
  {
    title: "All Honour Hand",
    rules:
      "Four Pungs and a Pair of Ones/Nines/Winds and/or Dragons. But only one suit.",
    limit: "May be Punged. Count",
    tiles: [
      ["Dragon_Green", "Dragon_Green", "Dragon_Green"],
      ["Wind_East", "Wind_East", "Wind_East"],
      ["Wind_North", "Wind_North", "Wind_North"],
      ["Character_1", "Character_1", "Character_1"],
      ["Dragon_Red", "Dragon_Red"],
    ],
  },
  {
    title: "Ordinary Suit Hand",
    rules:
      "Four Pungs/Kongs in one suit only, with Winds/Dragons, one Chow (if desired) and a Pair.",
    limit: "Count",
    tiles: [
      ["Wind_East", "Wind_East", "Wind_East"],
      ["Dragon_Green", "Dragon_Green", "Dragon_Green"],
      ["Dot_1", "Dot_2", "Dot_3"],
      ["Dot_4", "Dot_4", "Dot_4"],
      ["Dot_8", "Dot_8"],
    ],
  },
  {
    title: "Windy Nines",
    rules:
      "Three Pungs/Kongs of 9's of three suits. One each of the Winds, plus any Wind must be Paired.",
    limit: "Half Limit if Punged",
    tiles: [
      ["Wind_North", "Wind_East", "Wind_West", "Wind_South", "Wind_North"],
      ["Character_9", "Character_9", "Character_9"],
      ["Dot_9", "Dot_9", "Dot_9"],
      ["Bamboo_9", "Bamboo_9", "Bamboo_9"],
    ],
  },
  {
    title: "All Pair Hand",
    rules: "All Pairs in one suit, with Winds and/or Dragons.",
    limit: "Last tile from discard. Half Limit",
    tiles: [
      ["Wind_East", "Wind_East"],
      ["Dragon_Red", "Dragon_Red"],
      ["Character_1", "Character_1"],
      ["Character_2", "Character_2"],
      ["Character_3", "Character_3"],
      ["Character_4", "Character_4"],
      ["Character_5", "Character_5"],
    ],
  },
  // Page 4 style cards
  {
    title: "Lily of the Valley",
    rules:
      "Two Pungs of Green and White Dragons. Two Pungs and a Pair of Green Bamboos.",
    limit: "May be Punged. Double Limit",
    tiles: [
      ["Dragon_Green", "Dragon_Green", "Dragon_Green"],
      ["Dragon_White", "Dragon_White", "Dragon_White"],
      ["Bamboo_2", "Bamboo_2", "Bamboo_2"],
      ["Bamboo_3", "Bamboo_3", "Bamboo_3"],
      ["Bamboo_4", "Bamboo_4"],
    ],
  },
  {
    title: "Red Lily",
    rules:
      "Pung of Red and White Dragons. Two Pungs and a Pair of red Bamboos.",
    limit: "May be Punged. Double Limit",
    tiles: [
      ["Dragon_Red", "Dragon_Red", "Dragon_Red"],
      ["Dragon_White", "Dragon_White", "Dragon_White"],
      ["Bamboo_9", "Bamboo_9", "Bamboo_9"],
      ["Bamboo_7", "Bamboo_7", "Bamboo_7"],
      ["Bamboo_5", "Bamboo_5"],
    ],
  },
  {
    title: "Unique Wonder",
    rules:
      "One each of 1's and 9's of each suit. One each of Winds and Dragons. Any one tile to be Paired.",
    limit: "Last tile from discard. Double Limit",
    tiles: [
      ["Wind_East", "Wind_South", "Wind_West", "Wind_North"],
      ["Dragon_Green", "Dragon_Red", "Dragon_White"],
      ["Dot_1", "Dot_9", "Character_1", "Character_9", "Bamboo_1", "Bamboo_9"],
      ["Bamboo_9"],
    ],
  },
  {
    title: "Royal Ruby",
    rules: "Pung of Red Dragons, three Pungs and a Pair of red Bamboos.",
    limit: "May be Punged from discard. Double Limit",
    tiles: [
      ["Dragon_Red", "Dragon_Red", "Dragon_Red"],
      ["Bamboo_1", "Bamboo_1", "Bamboo_1"],
      ["Bamboo_5", "Bamboo_5", "Bamboo_5"],
      ["Bamboo_7", "Bamboo_7", "Bamboo_7"],
      ["Bamboo_9", "Bamboo_9"],
    ],
  },
  {
    title: "Imperial Jade",
    rules: "Pung of Green Dragons, three Pungs and a Pair of green Bamboos.",
    limit: "May be Punged. Double Limit",
    tiles: [
      ["Dragon_Green", "Dragon_Green", "Dragon_Green"],
      ["Bamboo_2", "Bamboo_2", "Bamboo_2"],
      ["Bamboo_3", "Bamboo_3", "Bamboo_3"],
      ["Bamboo_4", "Bamboo_4", "Bamboo_4"],
      ["Bamboo_8", "Bamboo_8"],
    ],
  },
  {
    title: "Four Blessings",
    rules: "Four Pungs/Kongs of Winds and any Pair.",
    limit: "May be Punged. Double Limit",
    tiles: [
      ["Wind_East", "Wind_East", "Wind_East"],
      ["Wind_South", "Wind_South", "Wind_South"],
      ["Wind_West", "Wind_West", "Wind_West"],
      ["Wind_North", "Wind_North", "Wind_North"],
      ["Dot_8", "Dot_8"],
    ],
  },
  {
    title: "General's Blunder",
    rules:
      "A Pung of Dragons, one of each Wind and a Run of 1 to 7 in any one suit.",
    limit: "Last tile from discard. Limit",
    tiles: [
      ["Dragon_Green", "Dragon_Green", "Dragon_Green"],
      ["Wind_East", "Wind_South", "Wind_West", "Wind_North"],
      ["Dot_1", "Dot_2", "Dot_3", "Dot_4", "Dot_5", "Dot_6", "Dot_7"],
    ],
  },
  {
    title: "Heavenly Twins",
    rules: "Seven Pairs. All in one suit only.",
    limit: "Last tile from discard. Limit",
    tiles: [
      ["Character_1", "Character_1"],
      ["Character_2", "Character_2"],
      ["Character_3", "Character_3"],
      ["Character_4", "Character_4"],
      ["Character_5", "Character_5"],
      ["Character_8", "Character_8"],
      ["Character_9", "Character_9"],
    ],
  },
  {
    title: "Silly Bee",
    rules:
      "Run in each suit, one Mixed Run and any Pair, except 1 or 9's. All tiles from wall.",
    limit: "Limit",
    tiles: [
      ["Character_1", "Character_2", "Character_3"],
      ["Dot_1", "Dot_2", "Dot_3"],
      ["Bamboo_1", "Bamboo_2", "Bamboo_3"],
      ["Character_4", "Bamboo_5", "Dot_6"],
      ["Bamboo_8", "Bamboo_8"],
    ],
  },
  {
    title: "Western Command",
    rules: "Any three Pungs, one Run and any Pair.",
    limit: "Limit",
    tiles: [
      ["Dot_4", "Dot_4", "Dot_4"],
      ["Dot_5", "Dot_5", "Dot_5"],
      ["Dot_6", "Dot_6", "Dot_6"],
      ["Character_1", "Character_2", "Character_3"],
      ["Bamboo_8", "Bamboo_8"],
    ],
  },
  // Page 5 style cards
  {
    title: "Gertie's Garter",
    rules: "Run of 1 to 7 in two suits only.",
    limit: "Last tile from discard. Limit",
    tiles: [
      ["Bamboo_1", "Bamboo_2", "Bamboo_3", "Bamboo_4", "Bamboo_5", "Bamboo_6", "Bamboo_7"],
      ["Character_1", "Character_2", "Character_3", "Character_4", "Character_5", "Character_6", "Character_7"],
    ],
  },
  {
    title: "Sparrows Sanctuary",
    rules:
      "Two Pairs of 1 Bamboos. One Pair each of the Green Bamboos (2, 3, 4, 6, 8).",
    limit: "Last tile from discard. Limit",
    tiles: [
      ["Bamboo_1", "Bamboo_1", "Bamboo_1", "Bamboo_1"],
      ["Bamboo_2", "Bamboo_2"],
      ["Bamboo_3", "Bamboo_3"],
      ["Bamboo_4", "Bamboo_4"],
      ["Bamboo_6", "Bamboo_6"],
      ["Bamboo_8", "Bamboo_8"],
    ],
  },
  {
    title: "Mixed Pung",
    rules:
      "Four Pungs and a Pair in any or all three suits. May also contain Winds and Dragons. All tiles including 14th from wall.",
    limit: "Limit",
    tiles: [
      ["Character_3", "Character_3", "Character_3"],
      ["Bamboo_5", "Bamboo_5", "Bamboo_5"],
      ["Dot_7", "Dot_7", "Dot_7"],
      ["Dragon_Red", "Dragon_Red", "Dragon_Red"],
      ["Wind_East", "Wind_East"],
    ],
  },
  {
    title: "Roberts",
    rules:
      "1 Red and 1 Green dragon or a Pair of White dragons and 4 Mixed Runs. All tiles from wall.",
    limit: "Limit",
    tiles: [
      ["Dragon_Red", "Dragon_Green"],
      ["Dot_1", "Dot_2", "Dot_3"],
      ["Character_1", "Character_2", "Character_3"],
      ["Character_4", "Character_5", "Character_6"],
      ["Dot_6", "Dot_7", "Dot_8"],
    ],
  },
  {
    title: "Eternal Triangle",
    rules:
      "One each of the Winds; one each of the Dragons; a Pair in each suit, and one Honour tile must be Paired.",
    limit: "Last tile may be from discard. Limit",
    tiles: [
      ["Wind_East", "Wind_East", "Wind_South", "Wind_West", "Wind_North"],
      ["Dragon_Red", "Dragon_Green", "Dragon_White"],
      ["Dot_1", "Dot_1"],
      ["Character_1", "Character_1"],
      ["Bamboo_1", "Bamboo_1"],
    ],
  },
  {
    title: "Three Philosophers",
    rules:
      "One each of Dragons, a Pair of Winds and a Run in each suit.",
    limit: "Limit with own Pair of Winds, otherwise Half Limit. Last tile from discard",
    tiles: [
      ["Dragon_Red", "Dragon_Green", "Dragon_White"],
      ["Wind_East", "Wind_East"],
      ["Bamboo_1", "Bamboo_2", "Bamboo_3"],
      ["Dot_6", "Dot_7", "Dot_8"],
      ["Character_7", "Character_8", "Character_9"],
    ],
  },
  {
    title: "Red Lantern",
    rules:
      "Pung of Red Dragons, Pung of own Winds & a Run of 1 to 7 in one suit. One of the Run tiles to be Paired.",
    limit: "Limit if Punged. Double Limit if concealed",
    tiles: [
      ["Dragon_Red", "Dragon_Red", "Dragon_Red"],
      ["Wind_South", "Wind_South", "Wind_South"],
      ["Bamboo_1", "Bamboo_1", "Bamboo_2", "Bamboo_3", "Bamboo_4", "Bamboo_5", "Bamboo_6", "Bamboo_7"],
    ],
  },
  {
    title: "Mixed Blossom",
    rules:
      "Pung of Red Dragon and Pair of Green or vice-versa with 3 Mixed Runs.",
    limit: "Limit",
    tiles: [
      ["Dragon_Red", "Dragon_Red", "Dragon_Red"],
      ["Dragon_Green", "Dragon_Green"],
      ["Dot_1", "Character_2", "Bamboo_3"],
      ["Dot_4", "Character_5", "Bamboo_6"],
      ["Dot_7", "Character_8", "Bamboo_9"],
    ],
  },
  {
    title: "Apple Blossom",
    rules: "Pung of White Dragon, Pair of Green and 3 Mixed Runs.",
    limit: "Limit",
    tiles: [
      ["Dragon_White", "Dragon_White", "Dragon_White"],
      ["Dragon_Green", "Dragon_Green"],
      ["Bamboo_1", "Character_2", "Dot_3"],
      ["Bamboo_4", "Character_5", "Dot_6"],
      ["Bamboo_7", "Character_8", "Dot_9"],
    ],
  },
  {
    title: "Windy Chows",
    rules:
      "A Chow/Run in each suit. One each of the Winds, plus one of the Winds to be Paired.",
    limit: "Limit with Pair of own Wind otherwise Half Limit",
    tiles: [
      ["Wind_North", "Wind_East", "Wind_West", "Wind_South", "Wind_South"],
      ["Character_7", "Character_8", "Character_9"],
      ["Bamboo_2", "Bamboo_3", "Bamboo_4"],
      ["Dot_5", "Dot_6", "Dot_7"],
    ],
  },
];
