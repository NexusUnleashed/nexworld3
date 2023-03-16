import { insert } from "../../topo";

const features = [{
    id: 'Mainland', objt: 'WWbwn', arcs: [
        [[-63.5, -256.5],
        [0, -3], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-4, 0], [0, 1],
        [-1, 0], [0, 1], [-1, 0], [0, -1], [-1, 0], [0, 1], [1, 0], [0, 1], [-1, 0], [0, -1], [-1, 0], [0, 1], [1, 0], [0, 1], [-1, 0], [0, -1],
        [-3, 0], [0, -1], [-2, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-4, 0], [0, -1], [-1, 0], [0, -1], [-3, 0], [0, -1], [-1, 0],
        [0, -5], [-1, 0], [0, -1], [-1, 0], [0, -3], [1, 0], [0, -2], [1, 0], [0, -1], [2, 0], [0, -1], [1, 0], [0, -2], [1, 0], [0, -1],
        [-1, 0], [0, 1], [-1, 0], [0, 1], [-3, 0], [0, 3], [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 10], [4, 0], [0, 1], [1, 0], [0, 1],
        [1, 0], [0, 1], [1, 0], [0, 1], [5, 0], [0, 1], [2, 0], [0, 1], [2, 0], [0, 1], [4, 0], [0, 1], [-4, 0], [0, -1], [-2, 0], [0, -1], [-2, 0],
        [0, -1], [-5, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-5, 0], [0, -9], [-1, 0], [0, 1], [-1, 0], [0, 1],
        [-1, 0], [0, 1], [-2, 0], [0, 1], [-1, 0], [0, 2], [-4, 0], [0, -1], [-1, 0], [0, -2], [-1, 0], [0, -7], [-1, 0], [0, -1], [-1, 0],
        [0, -2], [-1, 0], [0, -7], [1, 0], [0, -11], [-2, 0], [0, 2], [-1, 0], [0, 1], [-2, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 2], [-1, 0],
        [0, 3], [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [2, 0], [0, -1], [1, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 2], [1, 0], [0, 3],
        [1, 0], [0, 1], [1, 0], [0, 5], [-2, 0], [0, 2], [-2, 0], [0, 2], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, 4], [1, 0], [0, 3],
        [3, 0], [0, 1], [2, 0], [0, 3], [4, 0], [0, 1], [4, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 1], [4, 0],
        [0, -2], [1, 0], [0, -2], [1, 0], [0, -1], [2, 0], [0, 2], [1, 0], [0, 2], [1, 0], [0, 3], [2, 0], [0, 2], [2, 0], [0, 2], [3, 0], [0, -1],
        [1, 0], [0, -2], [1, 0], [0, -1], [2, 0], [0, 2], [1, 0], [0, 2], [3, 0], [0, 1], [2, 0], [0, 1], [7, 0], [0, -1], [1, 0], [0, -1], [1, 0],
        [0, -1], [1, 0], [0, -2], [2, 0], [0, -1], [1, 0], [0, -1], [1, 0],
        ],
    ]
},

{
    id: 'Mainland', objt: 'YYred', arcs: [
        [[-114.5, -303.5],
        [0, 2], [2, 0], [0, 10], [4, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, -5], [1, 0], [0, -2], [2, 0], [0, -1], [-3, 0], [0, -1],
        [-1, 0], [0, -1], [-1, 0], [0, -1], [1, 0], [0, -3], [-1, 0], [0, -1], [-5, 0], [0, 1], [-1, 0],
        ],
    ]
},
{
    id: 'Mainland', objt: '__blk', arcs: [
        [[-94.5, -290.5],
        [-3, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 2], [1, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 1], [2, 0], [0, -1], [1, 0],
        [0, -1], [1, 0], [0, -1], [1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1],
        ],
    ]
},
{
    id: 'Mainland', objt: 'mount', arcs: [
        [[-94.5, -283.5],
        [3, 0], [0, -1], [1, 0], [0, -1], [4, 0], [0, -2], [1, 0], [0, -2], [1, 0], [0, -6], [-2, 0], [0, -1], [-1, 0], [0, -1],
        [-1, 0], [0, 1], [-1, 0], [0, 2], [-1, 0], [0, 1], [-1, 0], [0, 2], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1],
        [-2, 0], [0, 1], [-2, 0], [0, 2], [-2, 0], [0, 1], [-1, 0], [0, 2], [-1, 0], [0, 1], [-1, 0], [0, 1], [1, 0], [0, 1], [1, 0],
        [0, 1], [1, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 1], [2, 0], [0, -1], [1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0],
        [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -2], [1, 0], [0, -1], [1, 0], [0, -1], [3, 0], [0, 1], [1, 0], [0, 1], [1, 0],
        [0, 1], [1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1],
        ],
    ]
},
{
    id: 'Mainland', objt: '..blk', arcs: [
        [[-95.5, -280.5],
        [0, -2], [-1, 0], [0, 1], [-2, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1],
        [-1, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -2], [1, 0], [0, -1], [2, 0], [0, -2], [2, 0], [0, -1], [2, 0], [0, 1],
        [1, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, -2], [1, 0], [0, -1], [1, 0], [0, -2], [1, 0], [0, -1], [1, 0],
        [0, -2], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-4, 0], [0, 1], [-1, 0],
        [0, 1], [-3, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-2, 0], [0, 2],
        [-1, 0], [0, 5], [-1, 0], [0, -1], [-1, 0], [0, -1], [-4, 0], [0, 1], [-1, 0], [0, 7], [1, 0], [0, 2], [1, 0],
        [0, 1], [1, 0], [0, 7], [1, 0], [0, 2], [1, 0], [0, 1], [4, 0], [0, -2], [1, 0], [0, -1], [2, 0], [0, -1], [1, 0],
        [0, -1], [1, 0], [0, -1], [1, 0], [0, -2], [1, 0], [0, -1], [1, 0], [0, -1], [1, 0],
        ],
    ]
},];

features.forEach((feature) => insert(feature));