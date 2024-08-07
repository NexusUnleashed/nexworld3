import { insert } from "../../topo";

const features = [
  {
    id: "TapoaNorth",
    objt: "reefs",
    arcs: [
      [
        [-193.5, 7.5],
        [0, 1],
        [-4, 0],
        [0, 2],
        [-2, 0],
        [0, 2],
        [-1, 0],
        [0, 2],
        [2, 0],
        [0, 1],
        [7, 0],
        [0, 1],
        [2, 0],
        [0, 1],
        [5, 0],
        [0, -1],
        [4, 0],
        [0, -1],
        [5, 0],
        [0, 1],
        [12, 0],
        [0, -1],
        [1, 0],
        [0, -3],
        [-1, 0],
        [0, -1],
        [-3, 0],
        [0, -1],
        [-5, 0],
        [0, -1],
        [-1, 0],
        [0, -1],
        [-1, 0],
        [0, -1],
        [-6, 0],
        [0, 1],
        [-8, 0],
        [0, -1],
        [-6, 0],
      ],
      [
        [-192.5, 8.5],
        [4, 0],
        [0, 1],
        [11, 0],
        [0, 1],
        [4, 0],
        [0, 1],
        [2, 0],
        [0, 1],
        [5, 0],
        [0, 1],
        [2, 0],
        [0, 1],
        [-12, 0],
        [0, -1],
        [-3, 0],
        [0, 1],
        [-3, 0],
        [0, 1],
        [-8, 0],
        [0, -1],
        [-7, 0],
        [0, -1],
        [-1, 0],
        [0, -2],
        [1, 0],
        [0, -1],
        [1, 0],
        [0, -1],
        [4, 0],
        [0, -1],
      ],
    ],
  },
  {
    id: "TapoaNorth",
    objt: "beach",
    arcs: [
      [
        [-192.5, 8.5],
        [0, 1],
        [-4, 0],
        [0, 1],
        [-1, 0],
        [0, 1],
        [-1, 0],
        [0, 2],
        [1, 0],
        [0, 1],
        [7, 0],
        [0, 1],
        [8, 0],
        [0, -1],
        [3, 0],
        [0, -1],
        [3, 0],
        [0, 1],
        [12, 0],
        [0, -1],
        [-2, 0],
        [0, -1],
        [-5, 0],
        [0, -1],
        [-2, 0],
        [0, -1],
        [-4, 0],
        [0, -1],
        [-11, 0],
        [0, -1],
        [-4, 0],
      ],
    ],
  },
  {
    id: "TapoaNorthwest",
    objt: "reefs",
    arcs: [
      [
        [-211.5, 20.5],
        [0, 1],
        [-1, 0],
        [0, 1],
        [-1, 0],
        [0, 1],
        [-1, 0],
        [0, 1],
        [-1, 0],
        [0, 5],
        [1, 0],
        [0, 1],
        [1, 0],
        [0, 1],
        [1, 0],
        [0, 1],
        [6, 0],
        [0, -1],
        [2, 0],
        [0, -2],
        [1, 0],
        [0, -1],
        [1, 0],
        [0, -6],
        [-1, 0],
        [0, -1],
        [-1, 0],
        [0, -1],
        [-7, 0],
      ],
      [
        [-211.5, 22.5],
        [3, 0],
        [0, -1],
        [1, 0],
        [0, 1],
        [1, 0],
        [0, 1],
        [2, 0],
        [0, 4],
        [-1, 0],
        [0, 1],
        [-1, 0],
        [0, 1],
        [-1, 0],
        [0, 1],
        [-4, 0],
        [0, -1],
        [-2, 0],
        [0, -1],
        [-1, 0],
        [0, -3],
        [1, 0],
        [0, -1],
        [1, 0],
        [0, -1],
        [1, 0],
        [0, -1],
      ],
    ],
  },
  {
    id: "TapoaNorthwest",
    objt: "beach",
    arcs: [
      [
        [-211.5, 22.5],
        [3, 0],
        [0, -1],
        [1, 0],
        [0, 1],
        [1, 0],
        [0, 1],
        [2, 0],
        [0, 4],
        [-1, 0],
        [0, 1],
        [-1, 0],
        [0, 1],
        [-1, 0],
        [0, 1],
        [-4, 0],
        [0, -1],
        [-2, 0],
        [0, -1],
        [-1, 0],
        [0, -3],
        [1, 0],
        [0, -1],
        [1, 0],
        [0, -1],
        [1, 0],
        [0, -1],
      ],
    ],
  },
  {
    id: "TapoaNorthwest",
    objt: "reefs",
    arcs: [
      [
        [-205.5, 38.5],
        [0, 1],
        [-1, 0],
        [0, 2],
        [1, 0],
        [0, 1],
        [1, 0],
        [0, 1],
        [3, 0],
        [0, -1],
        [1, 0],
        [0, -4],
        [-2, 0],
        [0, -1],
        [-1, 0],
        [0, 1],
        [-2, 0],
      ],
      [
        [-205.5, 39.5],
        [3, 0],
        [0, 3],
        [-1, 0],
        [0, -1],
        [-2, 0],
        [0, -2],
      ],
    ],
  },
  {
    id: "TapoaNorthwest",
    objt: "beach",
    arcs: [
      [
        [-205.5, 39.5],
        [3, 0],
        [0, 3],
        [-1, 0],
        [0, -1],
        [-2, 0],
        [0, -2],
      ],
    ],
  },
  {
    id: "Tapoa",
    objt: "reefs",
    arcs: [
      [
        [-164.5, 40.5],
        [2, 0],
        [0, -4],
        [-1, 0],
        [0, -2],
        [-6, 0],
        [0, -1],
        [-4, 0],
        [0, -1],
        [-3, 0],
        [0, -1],
        [-4, 0],
        [0, 1],
        [-2, 0],
        [0, 1],
        [-1, 0],
        [0, 1],
        [-1, 0],
        [0, 2],
        [-1, 0],
        [0, 3],
        [-1, 0],
        [0, 1],
        [-1, 0],
        [0, 3],
        [-1, 0],
        [0, 4],
        [-1, 0],
        [0, 4],
        [2, 0],
        [0, 3],
        [1, 0],
        [0, 1],
        [3, 0],
        [0, 1],
        [9, 0],
        [0, -1],
        [3, 0],
        [0, -1],
        [2, 0],
        [0, -1],
        [3, 0],
        [0, -1],
        [1, 0],
        [0, -1],
        [1, 0],
        [0, -1],
        [1, 0],
        [0, -2],
        [1, 0],
        [0, -1],
        [2, 0],
        [0, -1],
        [1, 0],
        [0, -4],
        [-2, 0],
        [0, -1],
        [-3, 0],
        [0, -1],
      ],
      [
        // Punchout
        [-164.5, 40.5],
        [0, 1],
        [1, 0],
        [0, 4],
        [-1, 0],
        [0, 1],
        [-1, 0],
        [0, 1],
        [-1, 0],
        [0, 1],
        [-1, 0],
        [0, 1],
        [-1, 0],
        [0, 1],
        [-2, 0],
        [0, 1],
        [-2, 0],
        [0, 1],
        [-4, 0],
        [0, 1],
        [-6, 0],
        [0, -1],
        [-2, 0],
        [0, -2],
        [-1, 0],
        [0, -8],
        [1, 0],
        [0, -3],
        [1, 0],
        [0, -1],
        [1, 0],
        [0, -1],
        [2, 0],
        [0, -1],
        [2, 0],
        [0, -1],
        [2, 0],
        [0, 1],
        [6, 0],
        [0, 1],
        [5, 0],
        [0, 1],
        [1, 0],
        [0, 2],
      ],
    ],
  },
  {
    id: "Tapoa",
    objt: "beach",
    arcs: [
      [
        [-165.5, 38.5],
        [1, 0],
        [0, 3],
        [1, 0],
        [0, 4],
        [-1, 0],
        [0, 1],
        [-1, 0],
        [0, 1],
        [-1, 0],
        [0, 1],
        [-1, 0],
        [0, 1],
        [-1, 0],
        [0, 1],
        [-2, 0],
        [0, 1],
        [-2, 0],
        [0, 1],
        [-4, 0],
        [0, 1],
        [-6, 0],
        [0, -1],
        [-2, 0],
        [0, -3],
        [2, 0],
        [0, 1],
        [2, 0],
        [0, 1],
        [9, 0],
        [0, -1],
        [1, 0],
        [0, -1],
        [1, 0],
        [0, -1],
        [1, 0],
        [0, -1],
        [1, 0],
        [0, -1],
        [1, 0],
        [0, -3],
        [1, 0],
        [0, -5],
      ],
    ],
  },
  {
    id: "Tapoa",
    objt: "desert",
    arcs: [
      [
        [-165.5, 37.5],
        [0, 6],
        [-1, 0],
        [0, 3],
        [-1, 0],
        [0, 1],
        [-1, 0],
        [0, 1],
        [-1, 0],
        [0, 1],
        [-1, 0],
        [0, 1],
        [-1, 0],
        [0, 1],
        [-9, 0],
        [0, -1],
        [-2, 0],
        [0, -1],
        [-2, 0],
        [0, 1],
        [-1, 0],
        [0, -8],
        [1, 0],
        [0, -3],
        [1, 0],
        [0, 2],
        [1, 0],
        [0, 1],
        [1, 0],
        [0, 1],
        [4, 0],
        [0, -1],
        [2, 0],
        [0, -1],
        [1, 0],
        [0, -2],
        [1, 0],
        [0, -3],
        [3, 0],
        [0, 1],
        [5, 0],
      ],
    ],
  },
  {
    id: "Tapoa",
    objt: "jungle",
    arcs: [
      [
        [-174.5, 36.5],
        [1, 0],
        [0, 3],
        [-1, 0],
        [0, 1],
        [0, 1],
        [-1, 0],
        [0, 1],
        [-2, 0],
        [0, 1],
        [-4, 0],
        [0, -1],
        [-1, 0],
        [0, -1],
        [-1, 0],
        [0, -2],
        [1, 0],
        [0, 1],
        [2, 0],
        [0, 1],
        [2, 0],
        [0, -1],
        [2, 0],
        [0, -1],
        [1, 0],
        [0, -2],
        [1, 0],
        [0, -1],
      ],
    ],
  },
  {
    id: "Tapoa",
    objt: "mountains",
    arcs: [
      [
        [-175.5, 36.5],
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, 2],
        [-1, 0],
        [0, 1],
        [-2, 0],
        [0, 1],
        [-2, 0],
        [0, -1],
        [-2, 0],
        [0, -1],
        [-1, 0],
        [0, -1],
        [1, 0],
        [0, -1],
        [2, 0],
        [0, -1],
        [2, 0],
        [0, -1],
        [2, 0],
        [0, 1],
        [1, 0],
      ],
    ],
  },
];

features.forEach((feature) => insert(feature));
