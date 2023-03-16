import { insert } from "../../topo";

const features = [{
    id: 'Ilyrean', objt: 'reefs', arcs: [
        // 412 22
        [[96.5, -764.5],
        [7, 0], [0, -1], [2, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -9], [-1, 0], [0, -1], [-1, 0],
        [0, -1], [-2, 0], [0, 1], [-1, 0], [0, 1], [-2, 0], [0, 1], [-3, 0], [0, -1], [2, 0], [0, -1], [1, 0], [0, -2], [-4, 0], [0, -1], [-2, 0],
        [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -5], [-1, 0], [0, -2], [-1, 0], [0, -1], [-9, 0], [0, -1], [-5, 0], [0, -3], [-4, 0], [0, -1],
        [-3, 0], [0, -1], [-1, 0], [0, -1], [-2, 0], [0, -1], [-1, 0], [0, -2], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-2, 0],
        [0, -1], [-7, 0], [0, 1], [-2, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 2], [-1, 0], [0, 1], [-1, 0], [0, 1], [1, 0], [0, 2], [1, 0],
        [0, 1], [1, 0], [0, 1], [1, 0], [0, 2], [-3, 0],

        [0, -1], [-3, 0], [0, -1], [-1, 0], [0, -1], [-3, 0], [0, -1], [-6, 0], [0, 1], [-1, 0], [0, 3], [-3, 0],
        [0, 1], [-2, 0], [0, 1], [-1, 0], [0, 2], [1, 0], [0, 1], [-1, 0], [0, 1], [1, 0], [0, 2], [2, 0], [0, 1], [4, 0], [0, 1], [2, 0], [0, 1],
        [3, 0], [0, 1], [1, 0], [0, 1], [4, 0], [0, -1], [2, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -2], [1, 0], [0, -1], [1, 0], [0, -3],
        [-1, 0], [0, -2], [-1, 0], [0, -1], [-1, 0], [0, -1],
        [4, 0], [0, 8], [-1, 0], [0, 1], [-1, 0], [0, 3], [1, 0], [0, 1], [3, 0], [0, 1],
        [-2, 0], [0, 1], [-1, 0], [0, 3], [-1, 0], [0, 2], [1, 0], [0, 2], [2, 0], [0, 1], [3, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -2], [1, 0],
        [0, -1], [1, 0], [0, -3], [-1, 0], [0, -3], [2, 0], [0, -2], [5, 0], [0, 1], [2, 0], [0, 3], [1, 0], [0, 1], [2, 0], [0, 1], [6, 0], [0, 1],
        [3, 0], [0, 5], [2, 0], [0, 1], [3, 0], [0, 1], [2, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 1], [2, 0], [0, 1], [3, 0], [0, 1],
        ],
    ]
}];

features.forEach((feature) => insert(feature));