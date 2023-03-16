import { insert } from "../../topo";

const features = [{
    id: 'Tuar', objt: 'reefs', arcs: [
        [[-166.5, -83.5],
        [0, -3], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-3, 0], [0, -1], [-1, 0], [0, -1], [-2, 0], [0, 1], [-2, 0], [0, 1],
        [-2, 0], [0, 1], [-3, 0], [0, 1], [-2, 0], [0, 1], [-2, 0], [0, 1], [-2, 0], [0, 1], [-2, 0], [0, 2], [1, 0], [0, 2], [2, 0], [0, 1],
        [1, 0], [0, 1], [2, 0], [0, 1], [1, 0], [0, 1], [2, 0], [0, -1], [6, 0], [0, -2], [3, 0], [0, -1], [2, 0], [0, -1], [2, 0], [0, -1],
        [1, 0], [0, -1], [1, 0], [0, -1],
        ],
    ]
},
{
    id: 'Tuar', objt: 'grass', arcs: [
        [[-168.5, -84.5],
        [0, -1], [-1, 0], [0, -3], [-1, 0], [0, -1], [-2, 0], [0, -1], [-1, 0], [0, -1], [-2, 0], [0, 1], [-2, 0], [0, 1], [-2, 0], [0, 1],
        [-1, 0], [0, 1], [-1, 0], [0, 1], [1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 2], [-1, 0],
        [0, 1], [1, 0], [0, 2], [1, 0], [0, 1], [2, 0], [0, -1], [3, 0], [0, -1], [2, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1],
        [1, 0], [0, -1], [1, 0], [0, 1], [2, 0], [0, -1], [2, 0], [0, -1], [2, 0], [0, -1], [2, 0],
        ],
    ]
},
// Southwest of Tuar
{
    id: 'SW of Tuar', objt: 'reefs', arcs: [
        [[-202.5, -68.5],
        [0, -4], [-1, 0], [0, -2], [-1, 0], [0, -1], [-3, 0], [0, -1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-2, 0], [0, 1], [-1, 0], [0, 1],
        [-1, 0], [0, 4], [1, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 1], [4, 0], [0, -1], [3, 0], [0, -2], [1, 0],
        ],
    ]
},
{
    id: 'SW of Tuar', objt: 'grass', arcs: [
        [[-203.5, -70.5],
        [0, -1], [-1, 0], [0, -2], [-1, 0], [0, -1], [-3, 0], [0, 1], [-2, 0], [0, 1], [2, 0], [0, 1], [2, 0], [0, 2], [-2, 0], [0, 1], [3, 0],
        [0, -1], [1, 0], [0, -1], [1, 0],
        ],
    ]
},
// Northwest of Tuar
{
    id: 'NW of Tuar', objt: 'reefs', arcs: [
        [[-244.5, -106.5],
        [0, -3], [-1, 0], [0, -1], [-2, 0], [0, 1], [-1, 0], [0, 3], [1, 0], [0, 1], [2, 0], [0, -1], [1, 0],
        ],
    ]
},
{
    id: 'NW of Tuar', objt: 'marsh', arcs: [
        [[-244.5, -107.5],
        [0, -1], [-3, 0], [0, 1], [-1, 0], [0, 1], [3, 0], [0, -1], [1, 0],
        ],
    ]
},
// Ageiro
{
    id: 'Zanzibaar', objt: 'reefs', arcs: [
        // 412 22
        [[414.5, -22.5],
        [0, -1], [2, 0], [0, -1], [2, 0], [0, -1],

        [4, 0], [0, -1], [2, 0], [0, -1], [2, 0], [0, -1], [1, 0], [0, -6],
        [1, 0], [0, -2], [2, 0], [0, -1], [1, 0], [0, -1], [2, 0], [0, -1], [1, 0], [0, -2], [3, 0],
        [0, 1], [1, 0], [0, 1], [4, 0], [0, -1], [9, 0],
        [0, -1], [1, 0], [0, -1], [2, 0], [0, -1], [3, 0], [0, 1], [5, 0], [0, 1], [7, 0],
        [0, -1], [2, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -1], [2, 0], [0, -1], [1, 0],
        [0, -1], [1, 0], [0, -1], [2, 0], [0, 1], [1, 0], [0, 2], [1, 0], [0, 3],
        [-1, 0], [0, 5], [1, 0], [0, 1], [1, 0], [0, 1], [2, 0], [0, 1], [7, 0],
        [0, -1], [2, 0], [0, -1], [1, 0], [0, -1], [1, 0],
        [0, -1], [2, 0], [0, -2], [-1, 0], [0, -4], [-2, 0], [0, -13],
        [-1, 0], [0, -2], [-2, 0], [0, -1], [-1, 0], [0, -2], [-1, 0], [0, -1], [-1, 0], [0, -1], [-2, 0],
        [0, -1], [-2, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-3, 0], [0, -1], [-2, 0], [0, -1],
        [-12, 0], [0, 1], [-6, 0], [0, -1], [-6, 0], [0, 1], [-3, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1],
        [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 2], [-1, 0], [0, 1], [-6, 0], [0, 1], [-4, 0], [0, 1],
        [-1, 0], [0, 1], [-2, 0], [0, 1], [-1, 0], [0, 1], [-5, 0], [0, 1], [-2, 0], [0, 1], [-1, 0], [0, 1],
        [-2, 0], [0, 2], [-2, 0], [0, 2], [-1, 0], [0, 6], [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1],
        [-1, 0], [0, 2], [-1, 0], [0, 3], [-1, 0], [0, 2], [-1, 0], [0, 2], [-1, 0], [0, 1], [-1, 0],
        [0, 1], [1, 0], [0, 3], [1, 0], [0, 3], [2, 0], [0, 1], [2, 0], [0, -1], [2, 0],
            /*
            */
        ],
    ]
},


{
    id: 'Zanzibaar', objt: 'grass', arcs: [
        // 412 22
        [[485.5, -37.5],
        [5, 0], [0, -1], [2, 0], [0, -1], [1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-5, 0], [0, 1], [-1, 0], [0, 1], [-1, 0],
        [0, 2], [1, 0], [0, 1],
        ],
    ]
},

{
    id: 'Zanzibaar', objt: 'grass', arcs: [
        // 412 22
        [[412.5, -28.5],
        [0, 2], [2, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -1], [-1, 0], [0, -1], [-2, 0], [0, 2], [-1, 0],
        ],
    ]
},

{
    id: 'Zanzibaar', objt: 'grass', arcs: [
        // 412 22
        [[416.5, -36.5],
        [3, 0], [0, 1], [3, 0], [0, -1], [1, 0], [0, -2], [-1, 0], [0, -1], [-2, 0], [0, -1], [-2, 0], [0, 1], [-2, 0], [0, 1],
        [-1, 0], [0, 1], [1, 0], [0, 1],
        ],
    ]
},

{
    id: 'Zanzibaar', objt: 'grass', arcs: [
        // 412 22
        [[425.5, -41.5],
        [4, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -1], [2, 0], [0, -1], [2, 0], [0, -1], [4, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 1],
        [2, 0], [-1, 0], [0, -1], [1, 0], [0, -1], [2, 0], [0, -1], [8, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -1], [2, 0], [0, 1], [1, 0],
        [0, 2], [1, 0], [0, 1], [12, 0], [0, -2], [2, 0], [0, -1], [1, 0], [0, -1], [5, 0], [0, 1], [4, 0], [0, 2], [2, 0], [0, 1], [4, 0], [0, -1],
        [1, 0], [0, -1], [1, 0], [0, -7], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -2], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0],
        [0, -1], [-1, 0], [0, -1], [-2, 0], [0, -1], [-2, 0], [0, -1], [-2, 0], [0, -1], [-1, 0], [0, -1], [-3, 0], [0, -1], [-6, 0], [0, 1],
        [-2, 0], [0, 1], [-6, 0], [0, -1], [-6, 0], [0, 1], [-2, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1],
        [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-2, 0], [0, 1], [-6, 0], [0, 1], [-3, 0], [0, 1], [-1, 0], [0, 1], [-2, 0],
        [0, 1], [-5, 0], [0, 1],
        [-1, 0], [0, 1], [-2, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 3], [1, 0], [0, 1], [1, 0], [0, 1], [2, 0], [0, 2],
        ],
    ]
},

{
    id: 'Zanzibaar', objt: '##ylw', arcs: [
        // 412 22
        [[442.5, -43.5],
        [6, 0], [0, -1], [2, 0], [0, -1], [1, 0], [0, -1], [-6, 0], [0, 1], [-2, 0], [0, 1], [-1, 0], [0, 1],
        ],
    ]
},];

features.forEach((feature) => insert(feature));