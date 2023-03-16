import { insert } from "../../topo";

const features = [{
    id: 'Mainland', objt: 'swamp', arcs: [
        [[-47.5, -240.5],
        [0, -1], [-1, 0], [0, -1], [-2, 0], [0, -2], [-1, 0], [0, -1], [-1, 0], [0, -2], [-1, 0], [0, -1], [-1, 0], [0, 2],
        [-1, 0], [0, 1], [-2, 0], [0, 1], [-1, 0], [0, -4], [2, 0], [0, -1], [-1, 0], [0, 1], [-1, 0], [0, 2], [-1, 0], [0, 1],
        [-1, 0], [0, -3], [-1, 0], [0, -2], [-1, 0], [0, 1], [1, 0], [0, 4], [1, 0], [0, 1], [-5, 0], [0, 1], [1, 0], [0, -1],
        [3, 0], [0, 2], [-1, 0], [0, -1], [-1, 0], [0, 1], [3, 0], [0, 1], [-4, 0], [0, -1], [-1, 0], [0, 1], [1, 0], [0, 1],
        [1, 0], [0, -1], [-1, 0], [4, 0], [0, 1], [-2, 0], [0, 3], [-1, 0], [0, 1], [-1, 0], [0, 1], [1, 0], [0, -1], [1, 0],
        [0, 1], [1, 0], [0, 1], [2, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, -2], [1, 0], [0, -1],
        [1, 0], [0, -1], [1, 0], [0, 3], [1, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -1], [-1, 0], [0, 1], [-2, 0], [0, -2],
        [2, 0], [0, -1], [1, 0], [0, 1], [1, 0], [0, -2], [1, 0], [0, -2], [-3, 0], [0, -1],

        [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-3, 0], [0, -2], [-1, 0], [0, -2],
        [1, 0], [0, -2], [-1, 0], [0, -2], [1, 0], [0, -1], [1, 0], [0, 2], [2, 0], [0, -2], [1, 0], [0, 2], [1, 0], [0, 1],
        [2, 0], [0, 1],
        [3, 0], [0, -1],
        ],
    ]
},
{
    id: 'Mainland', objt: 'mount', arcs: [
        [[-57.5, -244.5],
        [-1, 0], [0, 1], [-1, 0], [0, 2], [1, 0], [0, 2], [-1, 0], [0, 2], [2, 0], [0, -1], [1, 0], [0, 3], [1, 0], [0, -1],
        [1, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -2], [-2, 0], [0, -1], [-1, 0], [0, -2], [-1, 0],
        [0, 2], [-2, 0], [0, -2], [-1, 0],
        ],
    ]
},
{
    id: 'Mainland', objt: '##bwn', arcs: [
        [[-56.5, -238.5],
        [-1, 0], [0, 1], [-1, 0], [0, 2], [2, 0], [0, -3], [-1, 0],
        ],
    ]
},];

features.forEach((feature) => insert(feature));