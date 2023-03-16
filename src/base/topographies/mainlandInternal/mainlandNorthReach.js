import { insert } from "../../topo";

const features = [{
    id: 'Mainland', objt: 'grass', arcs: [
        [[79.5, -437.5],
        [2, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -2], [2, 0], [0, 1], [1, 0], [0, 1], [8, 0], [0, 1], [2, 0], [0, 1], [6, 0], [0, -1], [1, 0], [0, -1], [4, 0], [0, -1], [1, 0], [0, 1], [9, 0], [0, -1], [1, 0], [0, -1], [5, 0], [0, -1], [1, 0], [0, -1], [7, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -1], [4, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, 1], [1, 0], [0, 1], [10, 0], [0, -1], [1, 0], [0, -1], [7, 0], [0, -1], [1, 0], [0, -1], [11, 0], [0, -1], [1, 0], [0, -1], [4, 0], [0, -1], [1, 0], [0, -1], [4, 0], [0, -1], [2, 0], [0, -1], [3, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -1], [2, 0], [0, -2], [1, 0], [0, -6], [-1, 0], [0, -1], [-2, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -4], [-1, 0], [0, -1], [-1, 0], [0, -2], [-1, 0], [0, -1], [-2, 0], [0, -1], [-1, 0], [0, -1], [-5, 0], [0, -1], [-2, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-2, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-7, 0], [0, 1], [-1, 0], [0, 1], [-2, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-6, 0], [0, -2], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-2, 0], [0, -2], [-1, 0], [0, -5], [-1, 0], [0, -1], [-1, 0], [0, -2], [-1, 0], [0, -1], [-2, 0], [0, -1], [-1, 0], [0, -2], [-1, 0], [0, -3], [-1, 0], [0, -1], [-2, 0], [0, -2], [-2, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -2], [-2, 0], [0, -1], [-2, 0], [0, -1], [-1, 0], [0, -1], [-5, 0], [0, -1], [-10, 0], [0, 1], [-1, 0], [0, 1], [-2, 0], [0, 1], [-1, 0], [0, 1], [-2, 0], [0, 1], [-2, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-8, 0], [0, 1], [-2, 0], [0, -1], [-5, 0], [0, 1], [-3, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-2, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-5, 0], [0, -1], [-1, 0], [0, -1], [-8, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 4], [-2, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-2, 0], [0, 2], [-1, 0], [0, 2], [1, 0], [0, 2], [1, 0], [0, 4], [1, 0], [0, 1], [-1, 0], [0, 3], [1, 0], [0, 2], [2, 0], [0, 1], [1, 0], [0, 1], [3, 0], [0, 2], [2, 0], [0, 1], [3, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 1], [2, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 4], [-1, 0], [0, 3], [-1, 0], [0, 13], [1, 0], [0, 2], [1, 0], [0, 1], [1, 0], [0, 9], [1, 0], [0, 1], [1, 0], [0, 1], [2, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 2], [1, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 5], [1, 0], [0, 2], [0, -1], [1, 0], [0, 1], [2, 0], [0, 3], [1, 0], [0, 1], [6, 0], [0, -2], [1, 0], [0, -1], [1, 0], [0, -2], [1, 0], [0, -4], [1, 0], [0, -2], [-1, 0], [0, -6], [-1, 0], [0, -3], [-1, 0], [0, -2], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -3], [-1, 0], [0, -2], [1, 0], [0, -2], [1, 0], [0, -2], [1, 0], [0, -2], [1, 0], [0, -2], [1, 0], [0, -2], [2, 0], [0, -10], [-1, 0], [0, -2], [-1, 0], [0, -2], [-1, 0], [0, -2], [-1, 0], [0, -2], [-1, 0], [0, -1], [-1, 0], [0, -2], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -2], [-1, 0], [0, -1], [-2, 0], [0, -2], [-1, 0], [0, -2], [-1, 0], [0, -1], [-1, 0], [0, -2], [-2, 0], [0, -5], [-1, 0], [0, -2], [-3, 0], [0, -1], [-2, 0], [0, -1], [-2, 0], [0, -1], [-1, 0], [0, -3], [2, 0], [0, 1], [4, 0], [0, 1], [1, 0], [0, 2], [1, 0], [0, 1], [1, 0], [0, 2], [1, 0], [0, 3], [1, 0], [0, 2], [1, 0], [0, 2], [1, 0], [0, 1], [1, 0], [0, 2], [1, 0], [0, 2], [2, 0], [0, 2], [1, 0], [0, 1], [1, 0], [0, 2], [1, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 2], [1, 0], [0, 2], [1, 0], [0, 1], [1, 0], [0, 2], [1, 0], [0, 3], [1, 0], [0, 10], [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 3], [-1, 0], [0, 2], [-1, 0], [0, 1], [-1, 0], [0, 6], [1, 0], [0, 1], [1, 0], [-1, 0], [0, 1], [2, 0], [0, 2], [1, 0], [0, 4], [1, 0], [0, 5], [1, 0], [0, 3], [-1, 0], [0, 4], [-1, 0], [0, 2], [-1, 0], [0, 1],
        ],
    ]
},

//
{
    id: 'Mainland', objt: 'nnnbb', arcs: [
        [[87.5, -395.5],
        [-1, 0], [0, 8], [-1, 0], [0, 1], [-2, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 2], [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 2], [-1, 0], [0, 2], [1, 0], [0, -1], [3, 0], [0, -1], [3, 0], [0, -1], [2, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -3], [1, 0], [0, -2], [1, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -3], [-1, 0], [0, -1], [-1, 0], [0, -4], [-1, 0], [0, -1],
        ],
    ]
},];

features.forEach((feature) => insert(feature));