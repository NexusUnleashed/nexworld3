import { insert } from "../../topo";

const features = [
  {
    id: "Shala-Khulia",
    objt: "reefs",
    arcs: [
      [
        [1.5, 0.5],
        [0, 1],
        [1, 0],
        [0, 1],
        [1, 0],
        [0, 1],
        [5, 0],
        [0, 1],
        [6, 0],
        [0, -1],
        [1, 0],
        [0, -2],
        [1, 0],
        [0, -2],
        [1, 0],
        [0, -1],
        [1, 0],
        [0, -1],
        [2, 0],
        [0, -1],
        [1, 0],
        [0, -2],
        [1, 0],
        [0, -12],
        [-1, 0],
        [0, -7],
        [1, 0],
        [0, -5],
        [1, 0],
        [0, -6],
        [-1, 0],
        [0, -2],
        [1, 0],
        [0, -5],
        [-1, 0],
        [0, -5],
        [-1, 0],
        [0, -2],
        [-1, 0],
        [0, -1],
        [-1, 0],
        [0, -1],
        [-2, 0],
        [0, -1],
        [-2, 0],
        [0, 1],
        [-2, 0],
        [0, 1],
        [-1, 0],
        [0, -1],
        [-2, 0],
        [0, 1],
        [-2, 0],
        [0, 1],
        [-1, 0],
        [0, 2],
        [-1, 0],
        [0, 3],
        [1, 0],
        [0, 2],
        [1, 0],
        [0, 4],
        [-1, 0],
        [0, 2],
        [-1, 0],
        [0, 1],
        [-1, 0],
        [0, 1],
        [-1, 0],
        [0, 1],
        [-2, 0],
        [0, 1],
        [-1, 0],
        [0, 2],
        [-1, 0],
        [0, 2],
        [-1, 0],
        [0, 1],
        [-1, 0],
        [0, 1],
        [-2, 0],
        [0, -1],
        [-4, 0],
        [0, 1],
        [-1, 0],
        [0, 1],
        [-1, 0],
        [0, 3],
        [1, 0],
        [0, 2],
        [-1, 0],
        [0, 1],
        [-1, 0],
        [0, 1],
        [-4, 0],
        [0, 1],
        [-1, 0],
        [0, 1],
        [-1, 0],
        [0, 1],
        [-1, 0],
        [0, 4],
        [1, 0],
        [0, 1],
        [2, 0],
        [0, 1],
        [1, 0],
        [0, 3],
        [-1, 0],
        [0, 4],
        [1, 0],
        [0, 1],
        [3, 0],
        [0, 1],
        [2, 0],
        [0, 1],
        [1, 0],
        [0, 1],
        [2, 0],
        [0, 1],
        [1, 0],
        [0, 2],
        [1, 0],
        [0, 1],
        [2, 0],
        [0, 1],
        [3, 0],
        [0, -3],
        [-1, 0],
        [0, -2],
        [-1, 0],
        [0, 1],
        [-1, 0],
        [0, -1],
        [1, 0],
        [0, -1],
        [2, 0],
      ],

      [
        [1.5, 0.5],
        [-4, 0],
        [0, -1],
        [-1, 0],
        [0, -2],
        [-1, 0],
        [0, -1],
        [-1, 0],
        [0, -3],
        [-1, 0],
        [0, -1],
        [-1, 0],
        [0, -2],
        [-1, 0],
        [0, -4],
        [1, 0],
        [0, -1],
        [1, 0],
        [0, -2],
        [1, 0],
        [0, -1],
        [2, 0],
        [0, -1],
        [1, 0],
        [0, -2],
        [1, 0],
        [0, -1],
        [1, 0],
        [0, -1],
        [2, 0],
        [0, -1],
        [1, 0],
        [0, -2],
        [5, 0],
        [0, 1],
        [6, 0],
        [0, 1],
        [3, 0],
        [0, 2],
        [1, 0],
        [0, 1],
        [1, 0],
        [0, 6],
        [1, 0],
        [0, 6],
        [-1, 0],
        [0, 3],
        [-2, 0],
        [0, 1],
        [-1, 0],
        [0, 1],
        [-2, 0],
        [0, 1],
        [-2, 0],
        [0, 1],
        [-6, 0],
        [0, -1],
        [-1, 0],
        [0, -1],
        [-2, 0],
        [0, 1],
        [-2, 0],
        [0, 2],
        [1, 0],
        [0, 1],
        [-1, 0],
      ],
      [
        [-10.5, -5.5],
        [1, 0],
        [0, 1],
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1],
        [-1, 0],
        [0, -1],
      ],
      [
        [-5.5, -24.5],
        [2, 0],
        [0, 1],
        [-1, 0],
        [0, 1],
        [-1, 0],
        [0, -2],
      ],
      [
        [-13.5, -15.5],
        [2, 0],
        [0, 2],
        [-3, 0],
        [0, -1],
        [1, 0],
        [0, -1],
      ],
    ],
  },
  {
    id: "Shala-Khulia",
    objt: "beach",
    arcs: [
      [
        [0.5, -0.5],
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
      ],
      [
        [0.5, -0.5],
        [0, -2],
        [2, 0],
        [0, -1],
        [2, 0],
        [0, 1],
        [1, 0],
        [0, 1],
        [1, 0],
        [0, -2],
        [-1, 0],
        [0, -1],
        [-2, 0],
        [0, -1],
        [-3, 0],
        [0, 1],
        [-1, 0],
        [0, 2],
        [-1, 0],
        [0, 2],
        [2, 0],
      ],
      [
        [-1.5, 1.5],
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
      ],
      [
        [0.5, 2.5],
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
      ],
      [
        [8.5, -0.5],
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
      ],
      [
        [11.5, -0.5],
        [0, 2],
        [1, 0],
        [0, -2],
        [-1, 0],
      ],
    ],
  },
  {
    id: "Shala-Khulia",
    objt: "jungle",
    arcs: [
      [
        [-0.5, -0.5],
        [-1, 0],
        [0, -2],
        [1, 0],
        [0, -2],
        [1, 0],
        [0, -1],
        [3, 0],
        [0, 1],
        [2, 0],
        [0, 1],
        [1, 0],
        [0, 2],
        [5, 0],
        [0, -1],
        [2, 0],
        [0, -1],
        [2, 0],
        [0, -1],
        [1, 0],
        [0, -1],
        [2, 0],
        [0, -3],
        [1, 0],
        [0, -6],
        [-1, 0],
        [0, -6],
        [-1, 0],
        [0, -1],
        [-1, 0],
        [0, -2],
        [-3, 0],
        [0, -1],
        [-6, 0],
        [0, -1],
        [-5, 0],
        [0, 2],
        [-1, 0],
        [0, 1],
        [-2, 0],
        [0, 1],
        [-1, 0],
        [0, 1],
        [-1, 0],
        [0, 2],
        [-1, 0],
        [0, 1],
        [-2, 0],
        [0, 1],
        [-1, 0],
        [0, 2],
        [-1, 0],
        [0, 1],
        [-1, 0],
        [0, 4],
        [1, 0],
        [0, 2],
        [1, 0],
        [0, 1],
        [1, 0],
        [0, 3],
        [1, 0],
        [0, 1],
        [1, 0],
        [0, 2],
        [1, 0],
        [0, 1],
        [2, 0],
        [0, 1],
      ],
      [
        [8.5, -1.5],
        [0, -2],
        [-1, 0],
        [0, -4],
        [1, 0],
        [0, -1],
        [-1, 0],
        [0, -4],
        [1, 0],
        [0, -1],
        [1, 0],
        [0, -1],
        [-1, 0],
        [0, -1],
        [-1, 0],
        [0, -1],
        [-1, 0],
        [0, -2],
        [1, 0],
        [0, -3],
        [1, 0],
        [0, 5],
        [1, 0],
        [0, 1],
        [1, 0],
        [0, 3],
        [-1, 0],
        [0, 1],
        [-1, 0],
        [0, 2],
        [1, 0],
        [0, 1],
        [1, 0],
        [0, 2],
        [1, 0],
        [0, 3],
        [-1, 0],
        [0, 1],
        [-1, 0],
        [0, 1],
        [-1, 0],
      ],
      [
        [8.5, -6.5],
        [0, 2],
        [2, 0],
        [0, -1],
        [-1, 0],
        [0, -1],
        [-1, 0],
      ],
      [
        [-10.5, -5.5],
        [0, 1],
        [1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
        [0, -1],
        [-1, 0],
      ],

      [
        [-5.5, -24.5],
        [2, 0],
        [0, 1],
        [-1, 0],
        [0, 1],
        [-1, 0],
        [0, -2],
      ],
      [
        [-13.5, -15.5],
        [2, 0],
        [0, 2],
        [-3, 0],
        [0, -1],
        [1, 0],
        [0, -1],
      ],
    ],
  },
  {
    id: "Shala-Khulia",
    objt: "road",
    arcs: [
      [
        [13.5, -22.5],
        [0, 1],
        [1, 0],
        [0, -1],
        [1, 0],
        [0, -5],
        [-1, 0],
        [0, -3],
        [1, 0],
        [0, -6],
        [-1, 0],
        [0, 6],
        [-1, 0],
        [0, 3],
        [1, 0],
        [0, 5],
        [-1, 0],
      ],
    ],
  },
  {
    id: "Shala-Khulia",
    objt: "grass",
    arcs: [
      [
        [12.5, -25.5],
        [5, 0],
        [0, -1],
        [1, 0],
        [0, -4],
        [1, 0],
        [0, -5],
        [-1, 0],
        [0, -3],
        [1, 0],
        [0, -4],
        [-1, 0],
        [0, -2],
        [-2, 0],
        [0, -1],
        [-3, 0],
        [0, 1],
        [-2, 0],
        [0, 2],
        [-1, 0],
        [0, 3],
        [1, 0],
        [0, 5],
        [-1, 0],
        [0, 3],
        [-1, 0],
        [0, 4],
        [2, 0],
        [0, 1],
        [1, 0],
        [0, 1],
      ],
      [
        [14.5, -25.5],
        [0, -2],
        [-1, 0],
        [0, -3],
        [1, 0],
        [0, -6],
        [1, 0],
        [0, 6],
        [-1, 0],
        [0, 3],
        [1, 0],
        [0, 2],
        [-1, 0],
      ],
      [
        [8.5, -32.5],
        [1, 0],
        [0, -1],
        [-1, 0],
        [0, 1],
      ],
      [
        [11.5, -45.5],
        [1, 0],
        [0, -1],
        [-1, 0],
        [0, 1],
      ],
      [
        [16.5, -46.5],
        [1, 0],
        [0, -2],
        [-1, 0],
        [0, 2],
      ],
      [
        [13.5, -37.5],
        [0, -1],
        [1, 0],
        [0, -1],
        [-1, 0],
        [0, -1],
        [-1, 0],
        [0, -1],
        [1, 0],
        [0, -1],
        [2, 0],
        [0, 1],
        [1, 0],
        [0, 1],
        [1, 0],
        [0, 2],
        [-1, 0],
        [0, 1],
        [-3, 0],
      ],
    ],
  },
  {
    id: "Shala-Khulia",
    objt: "lowmt",
    arcs: [
      [
        [13.5, -37.5],
        [3, 0],
        [0, -1],
        [1, 0],
        [0, -2],
        [-1, 0],
        [0, -1],
        [-1, 0],
        [0, -1],
        [-2, 0],
        [0, 1],
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, 1],
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, 1],
      ],
    ],
  },
  {
    id: "Left of Shala-Khulia",
    objt: "reefs",
    arcs: [
      [
        [-25.5, -16.5],
        [0, -1],
        [1, 0],
        [0, -3],
        [1, 0],
        [0, -3],
        [1, 0],
        [0, -1],
        [1, 0],
        [0, -1],
        [3, 0],
        [0, -1],
        [1, 0],
        [0, -1],
        [1, 0],
        [0, -3],
        [1, 0],
        [0, -5],
        [-1, 0],
        [0, -1],
        [-3, 0],
        [0, -1],
        [-2, 0],
        [0, -1],
        [-7, 0],
        [0, 1],
        [-2, 0],
        [0, 1],
        [-3, 0],
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
        [1, 0],
        [0, 2],
        [1, 0],
        [0, 2],
        [1, 0],
        [0, 2],
        [1, 0],
        [0, 1],
        [1, 0],
        [0, 1],
        [1, 0],
        [0, 1],
        [2, 0],
      ],
    ],
  },
  {
    id: "Left of Shala-Khulia",
    objt: "beach",
    arcs: [
      [
        [-26.5, -18.5],
        [0, -1],
        [1, 0],
        [0, -4],
        [1, 0],
        [0, -3],
        [1, 0],
        [0, -1],
        [2, 0],
        [0, -1],
        [1, 0],
        [0, -1],
        [2, 0],
        [0, -2],
        [1, 0],
        [0, -3],
        [-2, 0],
        [0, -1],
        [-1, 0],
        [0, -1],
        [-2, 0],
        [0, 1],
        [-1, 0],
        [0, -1],
        [-4, 0],
        [0, 1],
        [-3, 0],
        [0, 1],
        [-2, 0],
        [0, 1],
        [-1, 0],
        [0, 1],
        [-1, 0],
        [0, 3],
        [2, 0],
        [0, 1],
        [1, 0],
        [0, 1],
        [1, 0],
        [0, 1],
        [1, 0],
        [0, 2],
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, 2],
        [1, 0],
        [0, 1],
        [1, 0],
        [0, 2],
        [1, 0],
      ],
    ],
  },
];

features.forEach((feature) => insert(feature));
