import { insert } from "../../topo";

const features = [
  {
    id: "Tuar",
    objt: "reefs",
    arcs: [
      [
        [-166.5, -83.5],
        [0, -3],
        [-1, 0],
        [0, -1],
        [-1, 0],
        [0, -1],
        [-1, 0],
        [0, -1],
        [-3, 0],
        [0, -1],
        [-1, 0],
        [0, -1],
        [-2, 0],
        [0, 1],
        [-2, 0],
        [0, 1],
        [-2, 0],
        [0, 1],
        [-3, 0],
        [0, 1],
        [-2, 0],
        [0, 1],
        [-2, 0],
        [0, 1],
        [-2, 0],
        [0, 1],
        [-2, 0],
        [0, 2],
        [1, 0],
        [0, 2],
        [2, 0],
        [0, 1],
        [1, 0],
        [0, 1],
        [2, 0],
        [0, 1],
        [1, 0],
        [0, 1],
        [2, 0],
        [0, -1],
        [6, 0],
        [0, -2],
        [3, 0],
        [0, -1],
        [2, 0],
        [0, -1],
        [2, 0],
        [0, -1],
        [1, 0],
        [0, -1],
        [1, 0],
        [0, -1],
      ],
    ],
  },
  {
    id: "Tuar",
    objt: "grass",
    arcs: [
      [
        [-168.5, -84.5],
        [0, -1],
        [-1, 0],
        [0, -3],
        [-1, 0],
        [0, -1],
        [-2, 0],
        [0, -1],
        [-1, 0],
        [0, -1],
        [-2, 0],
        [0, 1],
        [-2, 0],
        [0, 1],
        [-2, 0],
        [0, 1],
        [-1, 0],
        [0, 1],
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, 1],
        [-1, 0],
        [0, 1],
        [-1, 0],
        [0, 1],
        [-1, 0],
        [0, 2],
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, 2],
        [1, 0],
        [0, 1],
        [2, 0],
        [0, -1],
        [3, 0],
        [0, -1],
        [2, 0],
        [0, -1],
        [-1, 0],
        [0, -1],
        [-1, 0],
        [0, -1],
        [1, 0],
        [0, -1],
        [1, 0],
        [0, 1],
        [2, 0],
        [0, -1],
        [2, 0],
        [0, -1],
        [2, 0],
        [0, -1],
        [2, 0],
      ],
    ],
  },
  // Southwest of Tuar
  {
    id: "SW of Tuar",
    objt: "reefs",
    arcs: [
      [
        [-202.5, -68.5],
        [0, -4],
        [-1, 0],
        [0, -2],
        [-1, 0],
        [0, -1],
        [-3, 0],
        [0, -1],
        [-1, 0],
        [0, 1],
        [-1, 0],
        [0, 1],
        [-2, 0],
        [0, 1],
        [-1, 0],
        [0, 1],
        [-1, 0],
        [0, 4],
        [1, 0],
        [0, 1],
        [1, 0],
        [0, 1],
        [1, 0],
        [0, 1],
        [4, 0],
        [0, -1],
        [3, 0],
        [0, -2],
        [1, 0],
      ],
    ],
  },
  {
    id: "SW of Tuar",
    objt: "grass",
    arcs: [
      [
        [-203.5, -70.5],
        [0, -1],
        [-1, 0],
        [0, -2],
        [-1, 0],
        [0, -1],
        [-3, 0],
        [0, 1],
        [-2, 0],
        [0, 1],
        [2, 0],
        [0, 1],
        [2, 0],
        [0, 2],
        [-2, 0],
        [0, 1],
        [3, 0],
        [0, -1],
        [1, 0],
        [0, -1],
        [1, 0],
      ],
    ],
  },
  // Northwest of Tuar
  {
    id: "NW of Tuar",
    objt: "reefs",
    arcs: [
      [
        [-244.5, -106.5],
        [0, -3],
        [-1, 0],
        [0, -1],
        [-2, 0],
        [0, 1],
        [-1, 0],
        [0, 3],
        [1, 0],
        [0, 1],
        [2, 0],
        [0, -1],
        [1, 0],
      ],
    ],
  },
  {
    id: "NW of Tuar",
    objt: "beach",
    arcs: [
      [
        [-244.5, -107.5],
        [0, -1],
        [-3, 0],
        [0, 1],
        [-1, 0],
        [0, 1],
        [3, 0],
        [0, -1],
        [1, 0],
      ],
    ],
  },
  // Ageiro
];

features.forEach((feature) => insert(feature));
