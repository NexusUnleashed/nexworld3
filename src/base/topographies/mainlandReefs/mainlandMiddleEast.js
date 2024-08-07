import { insert } from "../../topo";

const features = [{
    id: 'Mainland', objt: 'reefs', arcs: [
        [[175.5, -204.5], [209, 0],
        [0, -9], [-1, 0], [0, -5], [1, 0], [0, -5], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [1, 0],
        [0, -2], [-1, 0], [0, -1], [-1, 0], [0, -1], [1, 0], [0, -2], [-2, 0], [0, -1], [-3, 0], [0, -1], [3, 0], [0, -1],
        [1, 0], [0, -1], [1, 0], [0, -1], [2, 0], [0, -2], [1, 0], [0, -2], [-1, 0], [0, -2], [1, 0], [0, -3], [1, 0],
        [0, -8], [2, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -2], [1, 0], [0, -5], [-1, 0], [0, -1], [-1, 0], [0, -1],
        [-1, 0], [0, -1], [-2, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -3], [1, 0], [0, -1], [1, 0], [0, -1], [1, 0],
        [0, -3], [1, 0], [0, -1], [2, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -4], [1, 0], [0, -5], [-1, 0], [0, -7],
        [7, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -4], [1, 0], [0, -5], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0],
        [0, -2], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -4], [-1, 0], [0, -1], [-1, 0], [0, -8],
        [1, 0], [0, -8], [-1, 0], [0, -5], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -4],
        [-1, 0], [0, -1], [-1, 0], [0, -1], [-5, 0], [0, -1], [-6, 0], [0, 1], [-1, 0], [0, 1],
        [-1, 0], [0, 1], [-1, 0], [0, -1], [-3, 0], [0, -1], [-1, 0], [0, -1], [-5, 0], [0, 1], [-1, 0],
        [0, 1], [-1, 0], [0, 1], [-1, 0], [0, -2], [-1, 0], [0, -1], [-1, 0], [0, -1], [-5, 0], [0, -1], [-2, 0], [0, -4],
        [-1, 0], [0, -1], [-1, 0], [0, -1], [-3, 0], [0, -1], [-4, 0], [0, -1], [1, 0], [0, -1],
        [1, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -1], [-1, 0], [0, -3], [-1, 0], [0, -1],
        [-1, 0], [0, -6], [-1, 0], [0, -1], [-1, 0], [0, -1], [-2, 0], [0, -3],
        [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-2, 0], [0, -2], [-2, 0], [0, -2],
        [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-2, 0], [0, -1], [-3, 0], [0, -5],
        [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-5, 0], [0, -1], [-1, 0], [0, -1],
        [-2, 0], [0, -1], [-1, 0], [0, -3], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -3],
        [-1, 0], [0, -4], [-1, 0], [0, -1], [-1, 0], [0, -1], [-3, 0], [0, -1],
        [-8, 0], [0, -3], [-1, 0], [0, -3], [-1, 0], [0, -1], [-1, 0], [0, -1], [-6, 0], [0, 1],
        [-4, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 4], [-1, 0], [0, 1], [-2, 0], [0, 1], [-1, 0],
        [0, 1], [-4, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, -4], [-1, 0], [0, -1],
        [-1, 0], [0, -1], [-4, 0], [0, -3], [-1, 0], [0, -1], [-1, 0], [0, -1], [-4, 0], [0, -1],
        [-5, 0], [0, 1], [-3, 0], [0, -1], [-3, 0], [0, -2], [-1, 0], [0, -9], [-1, 0], [0, -3], [-1, 0], [0, -4], [1, 0],
        [0, -5], [-1, 0], [0, -1], [-1, 0], [0, -3], [-1, 0], [0, -2], [-1, 0], [0, -1], [-1, 0], [0, -1],
        [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -2], [-1, 0], [0, -1], [-1, 0], [0, -1],
        [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -7], [-1, 0], [0, -1], [-1, 0], [0, -1],
        [-5, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-2, 0], [0, -1], [-2, 0], [0, -1],
        [-6, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -6], [-1, 0], [0, -1], [-1, 0], [0, -1],
        [-6, 0], [0, 1], [-1, 0], [0, 1], [-3, 0], [0, 1], [-2, 0], [0, -8], [-1, 0], [0, -1], [-1, 0], [0, -1], [-4, 0],
        [0, -1], [-1, 0], [0, -3], [-1, 0], [0, -1], [-1, 0], [0, -1], [-3, 0], [0, -1], [-1, 0], [0, -1], [-2, 0],
        [0, -1], [-5, 0], [0, 1], [-1, 0], [0, -3], [-1, 0],
        [0, 142],
        [80, 0],
        [0, -1], [-1, 0], [0, -3], [1, 0], [0, -1], [3, 0], [0, 1], [2, 0], [0, 1], [1, 0], [0, 2], [-1, 0], [0, 1], [-5, 0],
        [-80, 0],
        [0, 150],
        ],
    ]
},];

features.forEach((feature) => insert(feature));