export type BigCardHand = {
  name: string;
  description: string;
  jokers?: string;
  extra?: string;
};

export type BigCardSection = {
  title: string;
  note?: string;
  hands: BigCardHand[];
};

export const bigCardTitle = "Big Card: Mahjong GITA";

export const bigCardSections: BigCardSection[] = [
  {
    title: "4 KONGS",
    note: "Have to mahjong on the Pair",
    hands: [
      {
        name: "MAJOR KONGING",
        description:
          "4 Major Kongs + Clean Major Pair OR 4 Kongs + 1 pair of only Honours and Terminals",
        jokers: "Each player picks a minor number and uses as many as needed (12 jokers)",
      },
      {
        name: "E&W / N&S",
        description:
          "EEEE & WWWW OR NNNN & SSSS + 1111 & 9999 in the same suit + Pair of Clean CDs",
        jokers: "As many of a picked minor number each + flowers (20 jokers)",
      },
      {
        name: "QUAD KONGS",
        description: "4 Kongs in ANY suits + Clean Pair in ANY suit",
        jokers: "1 each of G, R, P + 1 own wind (4 jokers)",
      },
      {
        name: "TWIN KONGS",
        description:
          "2 Minor Kongs in ONE suit + 2 Minor Kongs in another suit + Clean CD Knit",
        jokers: "Terminals of 3rd suit – 1 of each + NEWS (1 each) (12 jokers)",
      },
      {
        name: "TRIPLE KONGS",
        description:
          "3 Minor Kongs in 1 suit + CD Kong + Clean Wind Pair (any wind)",
        jokers: "Terminals of other 2 suits (16 jokers)",
      },
      {
        name: "KING KONG",
        description:
          "2 Minor Kongs + Clean Minor pair in any 1 suit + CD Kong + Any Wind Kong",
        jokers: "Terminals of the other 2 suits (16 jokers)",
      },
      {
        name: "ROYAL ODDS",
        description:
          "1 Terminal Kong + 1 Odd Kong + Clean Odd pair (can be a terminal) in any 1 suit + CD Kong + Any wind Kong",
        jokers: "Even Numbers 2, 4, 6, 8 – 1 each in the other 2 suits (8 jokers)",
      },
      {
        name: "ROYAL ODD KONGS",
        description:
          "3 Odd Kongs in any 1 suit + CD Kong + Any 1 clean wind pair",
        jokers: "Even Numbers 2, 4, 6, 8 – 1 each in the other 2 suits (8 jokers)",
      },
      {
        name: "ROYAL EVEN KONGS",
        description:
          "2 Even Kongs + Clean even pair in any 1 suit + CD Kong + Any wind Kong",
        jokers: "Odd Numbers 1, 3, 5, 7, 9 – 1 each in the other 2 suits (10 jokers)",
      },
      {
        name: "ROYAL KONGING",
        description:
          "1 Minor Kong in ONE suit + 1 Minor Kong in another suit + 2 CD Kongs (1 to each suit) + Clean Minor Pair in the 3rd suit",
        jokers: "Terminals of the 3rd suit + NEWS (1 each) (12 jokers)",
      },
      {
        name: "T.O.E 1",
        description:
          "1 Terminal Kong + 1 Odd Kong + 1 Even Kong + 1 Clean Minor Pair ALL in any 1 suit + 1 CD Kong",
        jokers: "NEWS (1 each) + Flowers (12 jokers)",
      },
      {
        name: "KONG TYPES",
        description:
          "1 Ulta Pulta Kong (No terminals allowed) + 1 Terminal Kong + 1 CD Kong (to either the UP or Terminal Kong) + Any Wind Kong + Clean Minor Pair of 3 Boos or 7 Boos, or 6 Rings or 7 Rings",
        jokers: "2, 3, 4, 5, 6, 7, 8 Craks – 1 each (7 jokers)",
      },
    ],
  },
  {
    title: "3 KONGS",
    note: "You can use a maximum of 2 jokers in GRP",
    hands: [
      {
        name: "ULTA PULTA KONGS",
        description: "3 Ulta Pulta Kongs + 3 CDs + Clean Ulta Pulta Pair",
        jokers: "1 Boo + Red + 1 Crak + 9 Crak – One each + NEWS (1 each) (8 jokers)",
      },
      {
        name: "ODD / EVEN KONGS",
        description:
          "3 Odd Kongs + Clean Odd Pair all in 1 suit OR 3 Even Kongs + Clean Even Pair all in 1 suit + GRP",
        jokers: "NEWS (1 each) (4 jokers)",
      },
      {
        name: "SAME NUMBER KONGS",
        description:
          "3 Kongs all in the same number in different suits + GRP + a Clean Pair in any suit",
        extra: "The clean pair has to be any number which has not been exposed by another player for their Kong",
        jokers: "NEWS (1 each) (4 jokers)",
      },
      {
        name: "T.O.E. 2",
        description:
          "1 Terminal Kong + 1 Odd Kong (not a terminal) + 1 Even Kong in 3 different suits + GRP + A Clean Minor pair in any 1 suit",
        jokers: "NEWS (1 each) (4 jokers)",
      },
      {
        name: "SEQUENTIAL KONGS",
        description:
          "3 Sequential Kongs in 3 different suits + GRP + Clean Suit Pair",
        extra: "EG: 2222 3333 4444 + GRP + Clean Suit Pair",
        jokers: "NEWS (1 each) (4 jokers)",
      },
    ],
  },
  {
    title: "2 KONGS",
    hands: [
      {
        name: "BREAKING NEWS",
        description:
          "1 Minor Kong in 1 suit + 1 Minor Kong in another suit + Clean CD Knit + Clean Minor Pair in the 3rd suit + NEWS",
        jokers: "Terminals of the 3rd suit – only 1s OR 9s (4 jokers)",
      },
    ],
  },
  {
    title: "3 CHOWS / RUNS",
    note: "Each Chow of 4 tiles. An extra tile to be taken for every Chow. All terminals to be clean",
    hands: [
      {
        name: "TERMINAL CHOWS",
        description:
          "3 Terminal Chows starting with 1s OR 3 Terminal Chows ending with 9s in any suits + 3 CDs to the suits + Clean Terminal Pair of the Terminal which has not been used in the chows",
        jokers: "Crochet of 5 + 1 own wind (4 jokers)",
      },
    ],
  },
  {
    title: "SEQUENCES",
    note: "Extra tiles for Sequences & Kongs. All terminals in the sequences to be clean",
    hands: [
      {
        name: "SPIRALING SEQUENCES",
        description:
          "1-6 in one suit + 6-10 in another + 2 CDs + Any Clean Terminal Pair in the 3rd suit",
        extra: "An extra tile for each sequence, Can use 1 Joker for the Dragons, Flower for O. All terminals and flower to be clean",
        jokers: "NEWS (1 each)",
      },
      {
        name: "TERMINAL KONG",
        description:
          "1-5 in any 1 suit + 5-9 in another + Terminal Kong in the 3rd suit + Clean GRP",
        extra: "An extra tile for each sequence and the Kong. Clean Terminals in the sequences",
        jokers: "NEWS (1 each)",
      },
      {
        name: "56",
        description:
          "112345 56 678910 in 3 different or ANY suits + 2 Clean CDs to the sequences",
        extra: "All terminals and 56 to be clean. Can use jokers for minor tiles, extra tiles for both sequences, flower for O",
        jokers: "NEWS (1 each) (4 jokers)",
      },
      {
        name: "11-10 SNAKE MIX",
        description: "112345678910 + Clean GRP",
        extra: "All Terminals to be clean. The entire completed sequence (11.....10) to be brought out and an extra tile to be taken. Can interchange suits for the combinations 1147-258-369-10. The '1' in the 10 can be in any suit. Use a flower for 0",
        jokers: "NEWS (1 each) (4 jokers)",
      },
      {
        name: "ROYAL SNAKE",
        description:
          "Clean 1123456789 in any 1 suit + CD Kong + Any clean wind pair OR VICE VERSA",
        extra: "An extra tile for each sequence and Kong",
        jokers: "Flowers (8 jokers)",
      },
    ],
  },
  {
    title: "QWONGS",
    note: "5 tiles – Kong + 1. Use flowers as Jokers to create the 5 tile set",
    hands: [
      {
        name: "QWONGITTY KONG",
        description: "Any 2 Qwongs + Clean Kong + Clean Pair",
        extra: "1 extra tile for each qwong, no extra tile for the Kong",
        jokers: "Flowers (8 jokers)",
      },
      {
        name: "Q, K, P, C & P",
        description:
          "Qwong + Kong + Clean pung + Clean chow of 3 tiles + Clean Pair of anything",
        extra: "2 extra tiles for the qwong, 1 extra tile for the Kong",
        jokers: "Flowers (8 jokers)",
      },
      {
        name: "ROYAL QWONGS",
        description:
          "Terminal Qwong + CD/Own Wind Qwong + Clean even Kong + Clean even pair",
        extra: "Extra tile for each qwong, no extra tile for the Kong",
        jokers: "Crochet of either 3 OR 5 OR 7 + Flowers (9 jokers)",
      },
      {
        name: "ULTA PULTA QWONGS",
        description:
          "2 Ulta Pulta Qwongs + CD Kong to any 1 + Any wind Kong + Clean Ulta Pulta pair",
        extra: "2 extra tiles for each qwong, 1 extra tile for each Kong",
        jokers: "1 Boo + 1 Red Dragon + 1 Crak & 9 Crak – 1 each + Flowers (12 jokers)",
      },
    ],
  },
];
