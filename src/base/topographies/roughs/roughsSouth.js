import { insert } from "../../topo";

const features = [{
    id: 'Mainland', objt: 'roughs', arcs: [
        [[84.5, -22.5],
        [-2, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-2, 0], [0, 2], [-1, 0], [0, 1], [-1, 0],

        [-5, 0],
        [-2, 0], [0, 3], [1, 0], [0, 3], [1, 0], [0, 2], [-2, 0], [0, 1], [-1, 0], [0, 1], [4, 0], [0, -1], [1, 0], [0, -4],
        [-1, 0], [0, -3], [-1, 0], [0, -2],
        [5, 0],

        [0, 1], [-1, 0], [0, 1],
        [-1, 0], [0, 6], [1, 0], [0, 4], [-1, 0], [0, 1], [-1, 0], [0, 1], [-6, 0], [0, -1], [-2, 0], [0, -1], [-1, 0],
        [0, -1], [-2, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 1],

        [0, 5],
        [0, 1], [2, 0], [0, 1], [3, 0], [0, 1], [3, 0], [0, 1], [3, 0], [0, -1], [2, 0], [0, -1], [2, 0], [0, -2], [1, 0], [0, -3],
        [-1, 0], [0, -1], [-1, 0], [0, 2], [-1, 0], [0, 1], [-1, 0], [0, 1], [-4, 0], [0, 1], [-5, 0], [0, -1], [-3, 0],
        [0, -5],

        [4, 0], [0, 1], [2, 0],

        [0, 1],
        [-1, 0], [0, 1], [-1, 0], [0, 1], [2, 0], [0, -2],
        [0, -1],

        [3, 0], [0, -1], [2, 0],
        [0, -2], [1, 0], [0, -6], [-1, 0], [0, -1], [1, 0], [0, -1],

        [2, 0],
        [0, 2], [1, 0], [0, -1], [1, 0], [0, -1], [-2, 0],
        [-2, 0],

        [0, -1],


        [6, 0],
        [2, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -2], [-3, 0], [0, 2], [-1, 0], [0, 2],
        [-6, 0],

        [0, -2], [1, 0], [0, -2],

        [2, 0],
        [0, 2], [1, 0], [0, -1], [1, 0], [0, -1], [-2, 0],
        [-2, 0],

        [1, 0], [0, -1], [1, 0], [0, -1],
        [1, 0], [0, -1], [1, 0], [0, -1],

        [3, 0],
        [0, 2], [1, 0], [0, -1], [1, 0], [0, -1], [-2, 0],
        [-3, 0],

        [1, 0], [0, -1], [1, 0], [0, -1],
        ],
    ]
},

{
    id: 'Mainland', objt: 'roughs', arcs: [
        [[117.5, -13.5],
        [-2, 0], [0, 1], [-2, 0], [0, 1], [-1, 0], [0, 1], [2, 0], [0, 1], [-1, 0], [0, -1], [-1, 0], [0, 2], [-1, 0], [0, 1], [-1, 0], [0, -1],
        [-2, 0], [0, 1], [-1, 0], [0, 2], [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 2], [1, 0], [0, 1], [1, 0], [0, -1], [3, 0], [0, -2],
        [4, 0], [0, -2], [3, 0], [0, 1], [-1, 0], [0, 3], [-1, 0], [0, -1], [-2, 0], [0, 1], [1, 0], [0, 1], [2, 0], [0, 1], [1, 0], [0, 1], [1, 0],
        [0, 2], [1, 0], [0, -1], [1, 0], [0, -1], [-1, 0], [0, -1], [1, 0], [0, -2], [1, 0], [0, -2], [1, 0], [0, -3], [-1, 0], [0, -2],

        [14, 0],
        [0, 1], [1, 0], [0, 1], [1, 0], [0, 3], [-1, 0], [0, 1], [-1, 0], [0, 1], [4, 0], [0, 4], [-1, 0], [0, -1], [0, 1], [-1, 0], [0, -3],
        [1, 0], [0, -1], [-5, 0], [0, 2], [1, 0], [0, 1], [1, 0], [0, 2], [1, 0], [0, 1], [-3, 0], [0, -2], [-2, 0], [0, -2], [1, 0], [0, -3],
        [2, 0], [0, -3], [-1, 0], [0, -1], [-2, 0], [0, -2], [-1, 0], [0, 1], [-1, 0], [0, -1], [-1, 0], [0, 2], [1, 0], [0, 1], [1, 0], [0, 1],
        [1, 0], [0, 1], [-1, 0], [0, 2], [-2, 0], [0, 1], [-2, 0], [0, 1], [-1, 0], [0, 2], [-1, 0], [0, 1], [-1, 0], [0, -4], [1, 0], [0, -1],
        [2, 0], [0, -1], [2, 0], [0, -3], [-1, 0], [0, -1], [-1, 0], [0, -2],
        [-5, 0],

        [0, -1], [-1, 0], [0, -3],

        [10, 0],
        [2, 0], [0, -1], [1, 0], [0, -1], [-1, 0], [0, 1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1],
        [-1, 0], [0, -2], [-1, 0], [0, -2], [1, 0], [0, -4], [-1, 0], [0, 1], [-2, 0], [0, 6], [1, 0], [0, 1], [1, 0], [0, 2], [1, 0],
        [0, 1], [2, 0], [0, 1], [1, 0], [0, 1],
        [-10, 0],
        [0, -2],
        [3, 0], [0, -1], [1, 0], [0, -2], [-1, 0], [0, -1], [-1, 0], [0, 1], [-2, 0], [0, 1], [-4, 0], [0, -1], [-1, 0], [0, -1],
        [-1, 0], [0, -1], [-1, 0], [0, -1], [-7, 0], [0, 4], [1, 0], [0, -1], [2, 0], [0, -1], [4, 0], [0, 2], [1, 0], [0, 1], [1, 0], [0, 1], [5, 0],
        [0, 2],

        [-2, 0], [0, -1],
        ],
    ]
},

{
    id: 'Mainland', objt: 'roughs', arcs: [
        [[103.5, -23.5],
        [-3, 0], [0, 2], [-1, 0], [0, 4], [-1, 0], [0, 1], [-1, 0], [0, -2], [-3, 0], [0, 1], [-2, 0], [0, -1], [-1, 0],
        [0, -1], [-2, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 2], [-2, 0], [0, 3], [-2, 0], [0, 2], [-1, 0],
        [0, 1], [-1, 0],

        [-2, 0], [0, -2], [-1, 0], [0, 2], [-1, 0], [0, 2], [-1, 0], [0, 5], [1, 0], [0, 2], [1, 0], [0, 1], [1, 0], [0, 1], [1, 0],
        [0, 1], [1, 0], [0, 1], [1, 0], [0, 2], [1, 0], [0, 9], [1, 0], [0, 1], [1, 0], [0, -3], [1, 0], [0, -3], [-1, 0], [0, -2],
        [1, 0], [0, -2], [-1, 0], [0, -1], [-1, 0], [0, -1], [2, 0], [0, 1], [1, 0], [0, -1], [-3, 0], [0, -1], [-1, 0], [0, -2],
        [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -2], [-1, 0], [0, -6], [2, 0],

        [0, 5], [1, 0], [0, 1], [1, 0], [0, 2], [2, 0], [0, 2], [2, 0], [0, -3],

        [2, 0], [0, 3], [1, 0], [0, 11], [1, 0], [0, -4], [1, 0], [0, -3], [1, 0], [0, -2], [2, 0], [0, 1], [-1, 0], [0, 2], [1, 0],
        [0, -1], [1, 0], [0, -2], [1, 0], [0, -1], [1, 0], [0, -3], [-2, 0], [0, 1], [-1, 0], [0, 1], [1, 0], [0, 1], [-1, 0], [0, 1],
        [-1, 0], [0, -1], [-1, 0], [0, -2], [-1, 0], [0, -5], [1, 0], [0, 1], [1, 0], [0, 2], [1, 0], [0, -1], [1, 0], [0, -1],
        [1, 0], [0, -2], [2, 0], [0, -1], [1, 0], [0, -2], [-4, 0],
        [0, -2], [3, 0], [0, -2], [1, 0], [0, -1], [2, 0], [0, -1],
        [2, 0], [0, 1], [-1, 0], [0, 1], [2, 0], [0, -2], [-3, 0],
        [-6, 0], [0, 1], [-6, 0], [0, 1], [-1, 0], [0, 1], [1, 0], [0, 1],
        [-2, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [2, 0], [0, -1], [2, 0], [0, -1], [5, 0], [0, -1], [1, 0],
        [0, 2],
        [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1],
        [-2, 0], [0, -1], [-1, 0], [0, 1], [-1, 0], [-1, 0], [0, -1], [-1, 0], [0, 1], [2, 0], [0, 3], [-2, 0],

        [-2, 0], [0, -2], [-1, 0],
        [0, -6], [1, 0], [0, -3], [1, 0], [0, -1], [1, 0], [0, -3], [4, 0], [0, 1], [1, 0], [0, 1], [2, 0], [0, -1], [1, 0],
        [0, -1], [1, 0], [0, -4], [1, 0], [0, -1], [1, 0], [0, -2], [-3, 0],
        ],
    ]
},

{
    id: 'Mainland', objt: 'roughs', arcs: [
        [[140.5, 10.5],
        [0, -2], [-1, 0], [0, -2], [-1, 0], [0, -1], [-1, 0], [0, 1], [-2, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 1], [-6, 0],
        [0, -1], [-1, 0], [0, -5], [-1, 0], [0, 2], [-6, 0], [0, 2], [-1, 0], [0, 1], [-1, 0], [0, 1], [-2, 0], [0, 1], [-5, 0],
        [0, -2], [1, 0], [0, -2], [1, 0], [0, -3], [-1, 0], [0, -2], [-1, 0], [0, -1], [-3, 0], [0, -1], [-1, 0], [0, 2], [-2, 0],
        [0, -1], [-2, 0], [0, 3], [-1, 0], [0, 1], [-2, 0], [0, 1], [-1, 0], [0, 2], [-1, 0], [0, 1], [2, 0], [0, -1], [1, 0],
        [0, -1], [2, 0], [0, -1], [2, 0], [0, -1], [1, 0], [0, -3], [3, 0], [0, -1], [1, 0], [0, 5], [-1, 0], [0, 2], [-1, 0],
        [0, 1], [-2, 0], [0, 1], [-2, 0], [0, 2], [-1, 0], [0, 3], [-1, 0], [0, 3], [1, 0], [0, -1], [1, 0], [0, -3], [1, 0],
        [0, -2], [2, 0], [0, -1], [1, 0], [0, 1], [2, 0], [0, -1], [4, 0], [0, 3], [-1, 0], [0, 2], [-1, 0], [0, 1], [2, 0], [0, -1],
        [1, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -1], [2, 0], [0, -3], [1, 0], [0, -3], [3, 0], [0, 2],
        [2, 0], [0, 2], [1, 0], [0, 1], [3, 0], [0, 1], [-2, 0], [0, -1], [-2, 0], [0, 2], [4, 0], [0, 5], [-1, 0], [0, 3], [-1, 0],
        [0, 1], [-2, 0], [0, 1], [2, 0], [0, 1], [-1, 0], [0, 1], [1, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -2], [1, 0], [0, -1],
        [1, 0], [0, -1], [-1, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -5], [-1, 0], [0, -1], [-1, 0], [0, -1], [4, 0], [0, 1],
        [1, 0], [0, 4], [-1, 0], [0, 3], [2, 0], [0, -1], [-1, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -3], [-1, 0], [0, -3],
        ],
    ]
},

{
    id: 'Mainland', objt: 'roughs', arcs: [
        [[85.5, 15.5],
        [0, -3], [-1, 0], [0, -2], [1, 0], [0, -1], [-1, 0], [0, 1], [-1, 0], [0, -1], [-2, 0], [0, 3], [-2, 0], [0, -1],
        [-4, 0], [0, 3], [-4, 0], [0, -1], [-2, 0], [0, -1], [-1, 0], [0, -4], [-3, 0], [0, 1], [3, 0], [0, 3], [-5, 0], [0, 1],
        [-1, 0], [0, 3], [-1, 0], [0, 3], [2, 0], [0, 5], [-6, 0], [0, 1], [-1, 0], [0, 5], [2, 0], [0, 1], [1, 0], [0, 1], [1, 0],
        [0, 3], [2, 0], [0, -4], [-1, 0], [0, -1], [-1, 0], [0, -1], [-2, 0], [0, -1], [-1, 0], [0, -1], [1, 0], [0, -1], [1, 0],
        [0, -1], [1, 0], [0, -1], [3, 0], [0, 5], [1, 0], [0, 1], [2, 0], [0, -1], [-1, 0], [0, -4], [2, 0], [0, -2], [1, 0], [0, -3],
        [2, 0], [0, -1], [-1, 0], [0, 1], [-1, 0], [0, -2], [-1, 0], [0, 4], [-1, 0], [0, 1], [-2, 0], [0, 1], [-1, 0], [0, -7],
        [1, 0], [0, -2], [6, 0], [0, 1], [2, 0], [0, 1], [1, 0], [0, 3], [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 2], [-1, 0],
        [0, 2], [-1, 0], [0, 4], [1, 0], [0, 4], [-3, 0], [0, 2], [-1, 0], [0, 4], [2, 0], [0, -1], [-1, 0], [0, -1], [1, 0],
        [0, -2], [4, 0], [0, -1], [1, 0], [0, -6], [-1, 0], [0, 4], [-1, 0], [0, 1], [-1, 0], [0, -5], [1, 0], [0, -2], [1, 0],
        [0, -2], [1, 0], [0, -2], [1, 0], [0, -8], [-1, 0], [0, -1], [4, 0], [0, 3], [1, 0], [0, 2], [1, 0], [0, 1], [-1, 0], [0, 2],
        [-1, 0], [0, 2], [-1, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, -2], [1, 0], [0, -1], [1, 0], [0, -4], [1, 0], [0, -6], [-1, 0],
        [0, -1], [3, 0], [0, 1], [1, 0], [0, 12], [1, 0], [0, 1], [-1, 0], [0, 1], [-5, 0], [0, 7], [1, 0], [0, 4], [1, 0], [0, 5],
        [1, 0], [0, -10], [-1, 0], [0, -4], [-1, 0], [0, -1], [1, 0], [0, -1], [2, 0], [0, 6], [1, 0], [0, 1], [1, 0], [0, -8],
        [1, 0], [0, -2], [1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [1, 0], [0, -4], [1, 0], [0, -2], [-1, 0], [0, -3],
        [-1, 0],
        ],
    ]
},

{
    id: 'Mainland', objt: 'roughs', arcs: [
        [[111.5, 15.5],
        [-1, 0], [0, 4], [-3, 0], [0, 1], [-1, 0], [0, 2], [-1, 0], [0, 2], [-1, 0], [0, -2], [-1, 0], [0, -2], [-3, 0], [0, -1],
        [1, 0], [0, -2], [-1, 0], [0, -3], [1, 0], [0, -2], [-1, 0], [0, -3], [-1, 0], [0, 1], [-1, 0], [0, 4], [-1, 0], [0, 2],
        [-1, 0], [0, 4], [-3, 0], [0, -2], [1, 0], [0, -1], [1, 0], [0, -1], [-2, 0], [0, 1], [-1, 0], [0, 2], [-1, 0], [0, 2],
        [-1, 0], [0, 3], [1, 0], [0, 4], [-1, 0], [0, -2], [-2, 0], [0, 3], [1, 0], [0, 2], [-3, 0], [0, 2], [1, 0], [0, 2],
        [-1, 0], [0, 3], [-1, 0], [0, 4], [1, 0], [0, 2], [1, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 3], [-2, 0], [0, 2],
        [-2, 0], [0, 2], [3, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -2], [1, 0], [0, -3], [-1, 0], [0, -2], [-1, 0], [0, -1],
        [-1, 0], [0, -1], [-1, 0], [0, -6], [1, 0], [0, -1], [1, 0], [0, -1], [-1, 0], [0, -2], [-1, 0], [0, -1], [4, 0], [0, -3],
        [0, -5], [1, 0], [0, -3], [1, 0], [3, 0], [1, 0],//[0,-2],[1,0],  
        [0, -1], [1, 0], [0, -3], [1, 0], [0, -1], [1, 0], [0, 4], [-1, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 1],
        [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 3], [-3, 0], [0, -5], [-1, 0], [0, 1], [1, 0], [0, 1], [-2, 0], [0, 6],
        [-1, 0], [0, 5], [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [2, 0], [0, -2], [2, 0], [0, -1], [1, 0], [0, -8],
        [4, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 3], [1, 0], [0, -1], [1, 0], [0, -3], [2, 0], [0, 6], [2, 0], [0, -7], [-2, 0],
        [0, 1], [-3, 0], [0, -1], [-1, 0], [0, -2], [2, 0], [0, -2], [3, 0], [0, 2],

        [1, 0], [0, -3], [1, 0], [0, -1], [1, 0], [0, -1], [2, 0], [0, 5], [-1, 0], [0, 10], [1, 0], [0, 1],
        [1, 0], [0, -9], [1, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -2], [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, -1],
        [1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -2], [1, 0], [0, -2], [3, 0], [0, 3], [1, 0], [0, 1], [1, 0], [0, 3],
        [1, 0], [0, 4], [-2, 0], [0, 2], [2, 0], [0, -1], [1, 0], [0, -2], [1, 0], [0, -3], [-1, 0], [0, -2], [3, 0], [0, -1],
        [3, 0], [0, -1], [1, 0], [0, -2], [1, 0], [0, -1], [1, 0], [0, -4], [-1, 0], [0, 1], [-1, 0], [0, -1], [-1, 0], [0, 4],
        [-1, 0], [0, 2], [-2, 0], [0, -1], [-1, 0], [0, 4], [-2, 0], [0, -5], [1, 0], [0, -1], [1, 0], [0, -2], [-2, 0], [0, 2],
        [-3, 0], [0, 1], [-1, 0], [-3, 0], [0, -2], [-1, 0], [0, -2],
            /*[0,-1],[1,0],[0,-1],[1,0],[0,4],
            [1,0],[0,-2],[1,0],[0,-2],[2,0],[0,2],[-1,0],[0,1],[1,0],[0,1],[1,0],[0,1],[1,0],[0,1],[-1,0],
            [0,1],[-1,0],[0,1],[-1,0],[0,4],[1,0],[0,1],[1,0],[0,3],[1,0],[0,-1],[1,0],[0,-3],[2,0],[0,6],
            [2,0],[0,-7],[3,0],[0,8],[1,0],[0,1],[1,0],[0,-9],[1,0],[0,-1],[1,0],[0,-1],[1,0],[0,-2],[-1,0],
            [0,1],[-1,0],[0,1],[-1,0],[0,-1],[1,0],[0,-1],[-1,0],[0,-1],[-1,0],[0,3],[-1,0],[0,2],[-5,0],
            [0,1],[-3,0],[0,-1],[-1,0],[0,-2],[2,0],[0,-2],[1,0],[0,-2],[0,2],[1,0],[0,2],[1,0],[0,2],[1,0],
            [0,-3],[1,0],[0,-1],[1,0],[0,-1],[3,0],[0,-4],[-1,0],[0,-2],[-1,0],*/
        ],
    ]
},

{
    id: 'Mainland', objt: 'roughs', arcs: [
        [[108.5, 40.5],
        [0, 2], [1, 0], [0, 3], [1, 0], [0, 1], [2, 0], [0, -2], [2, 0], [0, 2], [1, 0], [0, 2], [1, 0], [0, 1], [2, 0], [0, 1], [1, 0], [0, 1], [1, 0],
        [0, 2], [3, 0], [0, -1], [3, 0], [0, 2], [1, 0], [0, 1], [1, 0], [0, 1], [3, 0], [0, -1], [1, 0], [0, -1], [3, 0], [0, 6], [-1, 0], [0, 3], [1, 0],
        [0, 1], [1, 0], [0, -1], [1, 0], [0, 1], [-1, 0], [0, 2], [3, 0], [0, 1], [8, 0], [0, 1], [2, 0], [0, 1], [2, 0], [0, 1], [4, 0], [0, -1], [-1, 0],
        [0, -1], [-2, 0], [0, -1], [-2, 0], [0, -1], [-2, 0], [0, -1], [-1, 0], [0, 1], [-1, 0], [0, -1], [-7, 0], [0, -1], [-1, 0], [0, -5], [-1, 0],
        [0, 1], [-1, 0], [0, -3], [-1, 0], [0, -3], [1, 0], [0, 1], [2, 0], [0, -1], [-1, 0], [0, -2], [-1, 0], [0, -1], [2, 0], [0, -3], [-4, 0], [0, -1],
        [-1, 0], [0, -1], [-1, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -2], [-3, 0], [0, 4], [-1, 0], [0, 2], [1, 0], [0, 1], [3, 0], [0, 1], [2, 0],
        [0, 1], [1, 0], [-1, 0], [0, 1], [-5, 0], [0, 1], [-1, 0], [0, 1], [-2, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -2], [1, 0],
        [0, -1], [1, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -2], [-1, 0], [0, -2], [-1, 0], [0, -8], [2, 0], [0, 2], [1, 0], [0, 1], [1, 0], [0, 1], [1, 0],
        [0, -2], [-1, 0], [0, -4], [1, 0], [0, -1], [1, 0], [0, -6], [-2, 0], [0, 1], [1, 0], [0, 1], [-1, 0], [0, 1], [1, 0], [0, 1], [-1, 0], [0, 1],
        [-1, 0], [0, 1], [-1, 0], [0, 3], [-6, 0], [0, -2], [1, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -2], [1, 0], [0, -1], [-2, 0], [0, 1], [-1, 0],
        [0, 1], [-1, 0], [0, 2], [-2, 0], [0, 7], [1, 0], [0, -1], [1, 0], [0, -3], [3, 0], [0, 3], [-1, 0], [0, 7], [1, 0], [0, 2], [-1, 0], [0, 2], [-1, 0],
        [0, 1], [-1, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 1], [-3, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -6],
        [1, 0], [0, -2], [-1, 0], [0, -3], [-1, 0], [0, -2], [-2, 0], [0, 2], [1, 0], [0, 5], [-1, 0], [0, 1], [-1, 0], [0, 2], [0, -1], [-3, 0], [0, -1],
        [-1, 0], [0, -2], [1, 0], [0, -1], [-3, 0], [0, 1],
        ],
    ]
},

{
    id: 'Mainland', objt: 'roughs', arcs: [
        [[134.5, 74.5],
        [0, 2], [1, 0], [0, 2], [-2, 0], [0, 2], [1, 0], [0, 3], [-2, 0], [0, 1], [-2, 0], [0, 1], [-2, 0], [0, 2], [-1, 0], [0, 2], [-1, 0], [0, 3],

        [-1, 0], [0, 1], [-1, 0], [0, 2], [-1, 0], [0, 2], [-1, 0], [0, 4], [-1, 0], [0, 8], [1, 0], [0, 2], [1, 0], [0, -13], [1, 0], [0, -2],

        [1, 0], [0, -2], [1, 0], [0, -1], [1, 0], [0, -1], [2, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -1], [-1, 0], [0, 1], [-1, 0], [0, -2],
        [3, 0], [0, 1], [1, 0], [0, -1], [-1, 0], [0, -2], [2, 0], [0, -2], [1, 0], [0, -1], [1, 0], [0, -4], [-1, 0], [0, 1], [-1, 0], [0, -1],
        [1, 0], [0, -3], [1, 0], [0, 1], [1, 0], [0, 1], [2, 0], [0, 1], [1, 0], [0, 2], [-1, 0], [0, 1], [-1, 0], [0, 4], [-2, 0], [0, 1], [-1, 0],
        //[50,0],[0,-1],
        [0, 1], [2, 0], [0, -2], [1, 0], [0, 5], [-2, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-3, 0], [0, 1], [1, 0], [0, -1], [4, 0], [0, -1],
        [3, 0], [0, -5], [-1, 0],
        [0, -5], [2, 0], [0, -5], [3, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 6], [-1, 0], [0, -1], [-1, 0], [0, 4], [-1, 0], [0, 1], [1, 0],
        [0, 2], [1, 0], [0, 1],
        [1, 0],
        [0, 3], [-3, 0], [0, -1], [-1, 0], [0, 1], [2, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 2], [1, 0], [0, 3], [1, 0], [0, -5], [-1, 0], [0, -1], [-1, 0], [0, -4],
        [3, 0],
        [0, 1], [1, 0], [0, 2], [1, 0], [0, 1], [1, 0], [0, 6], [1, 0], [0, -3], [1, 0], [0, -3], [-1, 0], [0, -4],

        [-1, 0], [0, -2], [-2, 0], [0, -1], [-3, 0], [0, -1], [-1, 0], [0, -3], [2, 0], [0, -1], [3, 0], [0, -3], [2, 0], [0, -1], [-1, 0], [0, 1],
        [-1, 0], [0, -2], [-1, 0], [0, 1], [1, 0], [0, 1], [-5, 0], [0, -4], [7, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, -1], [2, 0], [0, 1], [1, 0],
        [0, 1], [2, 0], [0, -3], [4, 0], [0, 3], [1, 0], [0, 1], [3, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -4], [-1, 0], [0, -2], [-1, 0],
        [0, -1], [-3, 0], [0, -1], [-3, 0], [0, 1], [-1, 0], [0, 1], [4, 0], [0, 2], [1, 0], [0, 1], [1, 0], [0, 1], [1, 0], [-6, 0], [0, -1], [-3, 0],
        [0, 1], [-2, 0], [0, 1], [1, 0], [-1, 0], [0, -1], [-4, 0], [0, -1], [-3, 0], [0, -1], [-2, 0], [0, -2], [5, 0], [0, 1], [4, 0], [0, -1],
        [1, 0], [0, -1], [1, 0], [0, -1], [-3, 0], [0, 1], [-3, 0], [0, -1], [-1, 0], [0, 2], [-3, 0], [0, -2], [-1, 0], [0, -1], [-1, 0], [0, -1],
        [-1, 0], [0, -1], [-2, 0], [0, -1], [-1, 0], [0, 1], [1, 0], [0, 2], [1, 0], [0, 3], [2, 0], [0, 1], [1, 0], [0, 1], [-5, 0], [0, -1], [-1, 0],
        [0, -4], [-1, 0], [0, -1], [-1, 0],
        [-4, 0], [0, -3], [-4, 0], [0, -2], [1, 0], [0, -1], [1, 0], [0, -2], [-1, 0], [0, -2], [-1, 0], [0, -2], [-1, 0], [0, -1],
        [-2, 0], [0, 2], [1, 0], [0, 7], [-1, 0], [0, 2], [1, 0], [0, 2], [3, 0], [0, -1], [3, 0], [0, 1], [4, 0],
        [0, 1], [-1, 0], [0, 3],
            /**/
        ],
    ]
},

{
    id: 'Mainland', objt: 'roughs', arcs: [
        [[96.5, 83.5],
        [-4, 0], [0, 1], [-1, 0], [0, 4], [-1, 0], [0, 1], [-2, 0], [0, 2], [-1, 0], [0, 3], [1, 0], [0, 3], [-5, 0], [0, 1],
        [-1, 0], [0, 2], [2, 0], [0, 2], [1, 0], [0, 6], [1, 0], [0, 2], [1, 0], [0, -4], [-1, 0], [0, -1], [1, 0], [0, -2],
        [1, 0], [0, -4], [-1, 0], [0, -1], [1, 0], [-1, 0], [0, -1], [0, 1], [-1, 0], [0, -1], [3, 0], [0, -2], [3, 0], [0, 2],
        [1, 0], [0, 7], [1, 0], [0, -1], [2, 0], [0, -1], [-1, 0], [0, -1], [1, 0], [0, -1], [-1, 0], [0, -5], [-1, 0], [0, -1],
        [-4, 0], [0, -1], [1, 0], [0, -2], [1, 0], [0, -2], [1, 0], [0, -1], [1, 0], [0, -2], [-1, 0], [0, -1], [1, 0], [0, -1],
        [2, 0], [0, -1], [-1, 0],
        ],
    ]
},

{
    id: 'Mainland', objt: 'roughs', arcs: [
        [[86.5, 111.5],
        [-1, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 3], [2, 0], [0, 1], [-1, 0], [0, 2], [1, 0], [0, 1], [3, 0], [0, 1], [1, 0], [0, 1],
        [1, 0], [0, -3], [7, 0], [0, 4], [1, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, -2], [-1, 0], [0, -13], [1, 0], [0, 1], [1, 0],
        [0, -2], [1, 0], [0, -2], [5, 0], [0, -6], [2, 0], [0, -3], [-1, 0], [0, 1], [-2, 0], [0, 1], [-1, 0], [0, 2], [-1, 0], [0, 3],
        [1, 0], [0, 2], [-4, 0], [0, -8], [-1, 0], [0, -2], [4, 0], [0, -2], [-1, 0], [0, -1], [-1, 0], [0, -2], [-1, 0], [0, -3], [-1, 0],
        [0, -1], [-1, 0], [0, -3], [-2, 0], [0, 1], [1, 0], [0, 1], [-1, 0], [0, -2], [-1, 0], [0, 2], [-2, 0], [0, 2], [1, 0], [0, 1],
        [-1, 0], [0, -2], [-2, 0], [0, 2], [-1, 0], [0, 1], [8, 0], [0, 1], [1, 0], [0, 2], [1, 0], [0, 2], [1, 0], [0, 1], [-3, 0], [0, -2],
        [-3, 0], [0, 2], [1, 0], [0, 1], [1, 0], [0, 7], [1, 0], [0, 1], [1, 0], [0, 4], [-2, 0], [0, -2], [-1, 0], [0, 3], [-1, 0], [0, 3],
        [1, 0], [0, 4], [-2, 0], [0, -3], [-2, 0], [0, -1], [-2, 0], [0, -3], [-1, 0], [0, -1], [-3, 0], [0, 2], [1, 0], [0, 1], [1, 0],
        [0, 1], [1, 0], [0, 1], [1, 0], [0, 1], [2, 0], [0, 2], [4, 0], [0, 1], [-8, 0], [0, -2], [-1, 0], [0, -1], [-1, 0], [0, -2], [-3, 0],
        [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0],
        ],
    ]
},];

features.forEach((feature) => insert(feature));