export const longDirConversion = {
  north: "n",
  "north-northeast": "nne",
  northeast: "ne",
  "east-northeast": "ene",
  east: "e",
  "east-southeast": "ese",
  southeast: "se",
  "south-southeast": "sse",
  south: "s",
  "south-southwest": "ssw",
  southwest: "sw",
  "west-southwest": "wsw",
  west: "w",
  "west-northwest": "wnw",
  northwest: "nw",
  "north-northwest": "nnw",
};

export const toggleDirs = {
  nne: ["ne", "n"],
  nnw: ["nw", "n"],
  ene: ["e", "ne"],
  ese: ["se", "e"],
  sse: ["se", "s"],
  ssw: ["s", "sw"],
  wsw: ["sw", "s"],
  wnw: ["w", "nw"],
};

export const directionCoords = {
  n: [0, -1],
  nne: [0, -1],
  ne: [1, -1],
  ene: [0, -1],
  e: [1, 0],
  ese: [0, -1],
  se: [1, 1],
  sse: [0, -1],
  s: [0, 1],
  ssw: [0, -1],
  sw: [-1, 1],
  wsw: [0, -1],
  w: [-1, 0],
  wnw: [0, -1],
  nw: [-1, -1],
  nnw: [0, -1],
};

export const topographies = {
  reefs: "rgba( 100, 130, 180, 0.55)",
  beach: "rgba(  55, 140, 135, 0.88)",
  desert: "rgba(210,180,140, 0.88)",
  grass: "rgba(  65, 150,  65, 0.85)",
  jungle: "rgba(  0, 255,  0, 0.85)",
  mountains: "rgba( 100,  70,  35, 0.85)",
  swamp: "rgba(  10,  60,  30, 0.85)",
  lowmt: "rgba( 130, 100,  70, 0.65)",
  chops: "rgba(   5,  20,  75, 0.65)",
  roughs: "rgba( 165, 185, 195, 0.15)",
  road: "grey",

  nnnbb: "rgba(  85,  55,   1, 0.65)",
  nnnbr: "rgba( 165, 135, 100, 0.75)",
  ___br: "rgba( 200, 180, 145, 0.65)",
  "...wt": "rgba( 200, 200, 215, 0.65)",
  WWbwn: "rgba(  95,  45,  45, 0.55)",
  YYred: "rgba( 215,  25,   5, 0.25)",
  __blk: "rgba(  15,  15,  15, 0.75)",
  "##bwn": "rgba( 110,  85,  60, 0.75)",
  "..blk": "rgba( 165,  15,  15, 0.35)",
  "##ylw": "rgba( 165, 206,  65, 0.35)",
  "..wht": "rgba( 200, 200, 215, 0.65)",
  mmblk: "rgba( 165, 206,  65, 0.35)",
};
