import { insert } from "../../topo";

const features = [{
    id: 'Mainland', objt: 'swamp', arcs: [
        [[350.5, -243.5],
        [0, 3], [2, 0], [0, -2], [1, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -1], [2, 0], [0, -1],
        [3, 0], [0, -1], [10, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 5], [-1, 0], [0, 1], [-1, 0], [0, 1], [7, 0], [0, -1],
        [-1, 0], [0, -3], [1, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -3], [1, 0], [0, -9], [-1, 0], [0, -2], [-1, 0],
        [0, -2], [1, 0], [0, -3], [1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -3], [-1, 0], [0, -2], [1, 0], [0, -2],
        [1, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -3], [1, 0], [0, -1], [-1, 0], [0, -1], [2, 0], [0, -1], [-1, 0],
        [0, -2], [2, 0], [0, -1], [-1, 0], [0, -2], [1, 0], [0, -1], [1, 0], [0, -3],
        [-31, 0], [0, 1], [1, 0], [0, 6],
        [1, 0], [0, 1], [1, 0], [0, 2], [1, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 3], [-1, 0], [0, 4], [1, 0], [0, 5],
        [-1, 0], [0, 3], [-1, 0], [0, 2], [-1, 0], [0, 3], [-1, 0], [0, 2], [-1, 0], [0, 3], [-1, 0], [0, 3], [-1, 0],
        [0, 1], [-1, 0], [0, 3], [-1, 0], [0, 1], [-1, 0], [0, 2], [-1, 0], [0, 3],
        ],
    ]
},
{
    id: 'Mainland', objt: 'swamp', arcs: [
        [[354.5, -290.5],
        [31, 0], [0, -1], [2, 0], [0, -1], [-2, 0], [0, -2], [1, 0], [0, -2], [1, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -1],
        [1, 0], [0, -1], [2, 0], [0, -1], [1, 0], [0, -3], [1, 0], [0, -1], [-1, 0], [0, -1], [1, 0], [0, -2], [-1, 0], [0, 1],
        [-1, 0], [0, -1], [-2, 0], [0, -5], [1, 0], [0, -1], [-2, 0], [0, -13], [1, 0], [0, -4], [-1, 0], [0, -2], [-1, 0],
        [0, -2], [1, 0], [0, -1], [-4, 0], [0, -1], [-1, 0], [0, -1], [-7, 0], [0, 1], [-4, 0], [0, -1], [1, 0], [0, -2], [-2, 0],
        [0, -1], [-3, 0], [0, -1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, -1], [-1, 0], [0, 1], [-6, 0], [0, 1], [-2, 0],
        [0, -2], [-2, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -2], [-2, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -4],
        [-1, 0], [0, 1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, 1], [-1, 0], [0, -1], [-1, 0], [0, 1], [-1, 0], [0, 2], [-1, 0],
        [0, 1], [-1, 0], [0, 3], [1, 0], [0, 2], [1, 0], [0, 1], [1, 0], [0, 2], [1, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 3],
        [1, 0], [0, 4], [1, 0], [0, 3], [1, 0], [0, 12], [-1, 0], [0, 3], [-1, 0], [0, 3], [-1, 0], [0, 4], [1, 0], [0, 7], [1, 0],
        [0, 1], [1, 0], [0, 1], [1, 0], [0, 2], [1, 0], [0, 2], [1, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 1],
        ],
    ]
},
{
    id: 'Mainland', objt: 'swamp', arcs: [
        [[344.5, -356.5],
        [0, -3], [-1, 0], [0, -3], [-1, 0], [0, -1], [-1, 0], [0, -6], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -2], [-2, 0],
        [0, -2], [-2, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -2], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-2, 0],
        [0, -1], [-2, 0], [0, 1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-3, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0],
        [0, -1], [-1, 0], [0, -2], [-1, 0], [0, -3], [-1, 0], [0, 1], [-1, 0], [0, -2], [-2, 0], [0, -2],
        [-11, 0], [0, 2], [1, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 2], [1, 0], [0, 9], [1, 0], [0, 1],
        [2, 0], [0, 1], [1, 0], [0, 6], [-1, 0], [0, 1], [-1, 0], [0, 3], [-1, 0], [0, 1], [-1, 0], [0, 1], [-2, 0], [0, 1], [-1, 0],
        [0, 1], [-3, 0], [0, 1], [-1, 0], [0, 1], [-2, 0], [0, 1], [-3, 0], [0, -1], [-3, 0], [0, 1], [-1, 0], [0, 1], [-4, 0], [0, 1],
        [-1, 0], [0, 1], [-1, 0], [0, 3], [-2, 0], [0, 5], [-1, 0], [0, 2], [-1, 0], [0, 2], [-1, 0], [0, 3], [-1, 0], [0, 4], [-1, 0],
        [0, 1], [-2, 0], [0, 1], [-1, 0], [0, 2], [2, 0], [0, -1], [2, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -1],
        [4, 0], [0, -1], [2, 0], [0, -1], [2, 0], [0, -1], [5, 0], [0, -1], [12, 0], [0, -1], [4, 0], [0, -1], [8, 0], [0, 1], [6, 0],
        [0, 1], [5, 0], [0, -1], [4, 0], [0, -1], [7, 0], [0, -1], [2, 0], [0, -1], [1, 0], [0, -5], [1, 0], [0, -1], [1, 0], [0, -1],
        [1, 0],
        ],
    ]
},
{
    id: 'Mainland', objt: 'swamp', arcs: [
        [[310.5, -396.5],
        [0, -3], [-2, 0], [0, -2], [-1, 0], [0, -3], [-1, 0], [0, -4], [-1, 0], [0, 2], [-2, 0], [0, -3], [-3, 0], [0, 1],
        [-3, 0], [0, -1], [-2, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -3], [-1, 0], [0, 1], [-5, 0], [0, -1], [-1, 0],
        [0, 1], [1, 0], [0, 1], [-2, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-2, 0], [0, 1], [-1, 0], [0, 2], [-2, 0],
        [0, 2], [-4, 0], [0, 3], [3, 0], [0, 1], [5, 0], [0, -1], [7, 0], [0, 1], [5, 0], [0, 1], [3, 0], [0, 1], [1, 0], [0, 2],
        [12, 0],
        ],
    ]
},

{
    id: 'Mainland', objt: 'swamp', arcs: [
        [[274.5, -403.5],
        [-4, 0], [0, -1], [-3, 0], [0, -1], [-2, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0],
        [0, -1], [-1, 0], [0, -1], [-2, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -2], [1, 0], [0, -1], [-1, 0], [0, 1], [-1, 0],
        [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-4, 0], [0, -1], [-1, 0], [0, -1], [-3, 0], [0, -1], [-1, 0], [0, -2], [-1, 0],
        [0, -1], [1, 0], [0, -2], [-1, 0], [0, -3], [-1, 0], [0, -3], [1, 0], [0, -3], [-1, 0], [0, -3], [-1, 0], [0, -1],
        [-1, 0], [0, -1], [-1, 0], [0, -3], [-1, 0], [0, -2], [1, 0], [0, -1], [-1, 0], [0, -2], [2, 0], [0, -3], [-1, 0],
        [0, -2], [-2, 0], [0, -1], [-1, 0], [0, -2], [-1, 0], [0, -1], [-1, 0], [0, -2], [-1, 0], [0, -1], [-1, 0], [0, -1],
        [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-6, 0], [0, -1], [1, 0], [0, -1], [-1, 0],
        [0, 1], [-2, 0], [0, -2], [-1, 0], [0, 1], [-1, 0], [0, -2], [-1, 0], [0, 1], [-1, 0], [0, -1], [-1, 0], [0, 1], [-2, 0],
        [0, 1], [-1, 0], [0, -2], [-1, 0], [0, 2], [-1, 0], [0, 1], [-3, 0], [0, -1], [-1, 0], [0, -1], [-3, 0], [0, -1], [-1, 0],
        [0, -1], [-11, 0], [0, 2], [-1, 0], [0, 2], [-2, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-3, 0], [0, 1], [-2, 0],
        [0, 1], [-4, 0], [0, 1], [-1, 0], [0, 1], [-4, 0], [0, 1], [-1, 0], [0, 1], [-11, 0], [0, 1], [-1, 0], [0, 1], [-7, 0],
        [0, 1], [-1, 0], [0, 20], [2, 0], [0, -2], [1, 0], [0, -1], [3, 0], [0, 1], [2, 0], [0, 1], [1, 0], [0, 1], [-1, 0], [0, 1],
        [-1, 0], [0, 1], [-2, 0], [0, 1], [-3, 0], [0, -1], [-1, 0], [0, 27], [6, 0], [0, -1], [2, 0], [0, -1], [1, 0], [0, -1],
        [2, 0], [0, -2], [1, 0], [0, -1], [5, 0], [0, -1], [2, 0], [0, -1], [2, 0], [0, -1], [7, 0], [0, -1], [2, 0], [0, -1],
        [4, 0], [0, 1], [2, 0], [0, 1], [1, 0], [0, 1], [21, 0], [0, 1], [4, 0], [0, 1], [2, 0], [0, 1], [3, 0], [0, 1], [6, 0],
        [0, 1], [7, 0], [0, 1], [7, 0], [-1, 0], [0, 1], [14, 0], [0, 1], [8, 0], [0, -1], [12, 0], [0, -1], [2, 0], [0, -2],
        ],
    ]
},

{
    id: 'Mainland', objt: 'swamp', arcs: [
        [[200.5, -464.5],
        [0, -1], [1, 0], [0, -1], [-1, 0], [0, -2], [1, 0], [0, -1], [-2, 0], [0, -1], [-2, 0], [0, -1], [-4, 0], [0, -2],
        [-1, 0], [0, -1], [-1, 0], [0, -2], [-1, 0], [0, -3], [-2, 0], [0, -4], [-1, 0], [0, -1], [-1, 0], [0, -3], [-1, 0],
        [0, 1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-2, 0], [0, -1], [-1, 0], [0, 1], [-3, 0], [0, 1],
        [-1, 0], [0, 1], [-2, 0], [0, -1], [1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -4], [-1, 0], [0, 2], [-1, 0],
        [0, -2], [-4, 0], [0, 1], [-2, 0], [0, -1], [-3, 0], [0, 1], [-1, 0], [0, -1], [-1, 0], [0, 1], [-3, 0], [0, -2],
        [-2, 0], [0, -2], [-4, 0], [0, -1], [-1, 0], [0, -2], [-1, 0], [0, -1], [-1, 0], [0, -2], [2, 0], [0, -1],
        [-1, 0], [0, -1], [-1, 0], [0, 2], [-2, 0], [0, -2], [-1, 0], [0, -1], [-2, 0], [0, -1], [-1, 0], [0, -3],
        [-1, 0], [0, 1], [-6, 0], [0, 4], [1, 0], [0, 2], [2, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 1],
        [1, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 2], [6, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 1],
        [1, 0], [0, 1], [2, 0], [0, -1], [1, 0], [0, -1], [7, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 1],
        [2, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 1], [2, 0], [0, 1],
        [5, 0], [0, 1], [1, 0], [0, 1], [2, 0], [0, 1], [1, 0], [0, 2], [1, 0], [0, 1], [1, 0], [0, 4], [1, 0], [0, 1],
        [1, 0], [0, 1], [2, 0], [0, 1], [1, 0], [0, 4], [9, 0],
        ],
    ]
},];

features.forEach((feature) => insert(feature));