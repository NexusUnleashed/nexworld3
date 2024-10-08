import { insert } from "../../topo";

const features = [{
    id: 'Colchis', objt: 'reefs', arcs: [
        [[353.5, -450.5],
        [2, 0], [0, -1], [3, 0], [0, -1], [2, 0], [0, -1], [1, 0], [0, 1], [1, 0], [0, -2], [2, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -2], [2, 0], [0, -1],
        [1, 0], [0, -1], [1, 0], [0, -2], [1, 0], [0, -3], [1, 0], [0, -7], [-1, 0], [0, -1], [-4, 0], [0, -1], [-5, 0], [0, -1], [-6, 0], [0, 1], [-1, 0],
        [0, 2], [-1, 0], [0, 3], [-1, 0], [0, -5], [-2, 0], [0, 1], [-2, 0], [0, 1], [-1, 0], [0, 1], [-2, 0], [0, 1], [-2, 0], [0, 2], [-1, 0], [0, 1], [-1, 0],
        [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 5], [1, 0], [0, 3], [1, 0], [0, 1], [2, 0], [0, 1], [1, 0], [0, 1], [3, 0], [0, 1], [2, 0],
        [0, 1], [4, 0], [0, 1],
        ],
    ]
},

{
    id: 'Colchis', objt: 'swamp', arcs: [
        [[353.5, -452.5],
        [1, 0], [0, -1], [1, 0], [0, -1], [-1, 0], [0, -1], [3, 0], [0, 2], [1, 0], [0, -1], [2, 0], [0, -1], [-1, 0], [0, 1], [-1, 0], [0, -2], [2, 0], [0, -1],
        [1, 0], [0, -1], [1, 0], [0, 1], [2, 0], [0, 1], [1, 0], [0, -1], [-2, 0], [0, -1], [4, 0], [0, -1], [-1, 0], [0, 1], [-2, 0], [0, -1], [1, 0], [0, -1],
        [1, 0], [0, -1], [1, 0], [0, -1], [2, 0], [0, -2], [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, -3], [1, 0], [0, -1], [2, 0], [0, -1], [-2, 0], [0, 1],
        [-1, 0], [0, -3], [4, 0], [0, -1], [1, 0], [0, -2], [-3, 0], [0, 2], [-1, 0], [0, 1], [-3, 0], [0, -1], [-1, 0], [0, -1], [1, 0], [0, -1], [-1, 0],
        [0, 1], [-5, 0], [0, -1], [-1, 0], [0, -1], [1, 0], [0, -1], [-1, 0], [0, 1], [-1, 0], [0, 2], [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, -1],
        [-1, 0], [0, -3], [1, 0], [0, -1], [-2, 0], [0, 2], [-1, 0], [0, 1], [-1, 0], [0, 2], [-3, 0], [0, 2], [1, 0], [0, -2], [1, 0], [0, 3], [-1, 0], [0, 1],
        [-2, 0], [0, -2], [-1, 0], [0, 1], [1, 0], [0, 2], [-3, 0], [0, 1], [1, 0], [0, -1], [2, 0], [0, 2], [-1, 0], [0, 3], [-1, 0], [0, -1], [-1, 0], [0, -2],

        [-1, 0], [0, 1], [-1, 0], [0, 1], [2, 0], [0, 1], [2, 0], [0, 1], [-3, 0], [0, 2], [1, 0], [0, -2], [1, 0], [0, 1], [1, 0], [0, -1], [1, 0], [0, 1],
        [1, 0], [0, 1], [-3, 0], [0, 1], [1, 0], [0, -1], [1, 0], [0, 1], [1, 0], [0, -1], [2, 0], [0, 1], [-1, 0], [0, 1], [1, 0], [0, -1], [2, 0], [0, 1],
        [-1, 0], [0, 1], [1, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, 2], [-1, 0], [0, 1], [1, 0], [0, -3], [1, 0],
        [0, -1], [-1, 0], [0, -1], [-2, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -2], [1, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -1], [2, 0], [0, -1], [1, 0], [0, -1], [2, 0], [0, -1], [5, 0], [0, 1], [2, 0], [0, 1], [1, 0], [0, 3], [-1, 0], [0, 2], [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-2, 0], [0, 1], [-4, 0], [0, 1], [-2, 0], [0, 4],
            //[0,1],[1,0],[0,-5],[-2,0],[0,-1],
            /*[-1,0],[0,-1],[-1,0],
            [0,-2],[1,0],[0,-1],[1,0],[0,-1],[1,0],[0,-1],[1,0],[0,-1],[2,0],[0,-1],[1,0],[0,-1],[2,0],[0,-1],[5,0],[0,1],[2,0],
            [0,1],[1,0],[0,3],[-1,0],[0,2],[-1,0],[0,1],[-1,0],[0,1],[-1,0],[0,1],[-2,0],[0,1],[-4,0],[0,1],[-2,0],[0,4], 
            */
        ],
    ]
},

{
    id: 'Colchis', objt: 'nnnbb', arcs: [
        [[352.5, -456.5],
        [3, 0], [0, -1], [4, 0], [0, -1], [2, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -2], [1, 0], [0, -3], [-1, 0], [0, -1], [-2, 0], [0, -1], [-5, 0], [0, 1], [-2, 0], [0, 1], [-1, 0], [0, 1], [-2, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 2], [1, 0], [0, 1], [1, 0], [0, 1], [2, 0], [0, 1],
        ],
    ]
},];

features.forEach((feature) => insert(feature));