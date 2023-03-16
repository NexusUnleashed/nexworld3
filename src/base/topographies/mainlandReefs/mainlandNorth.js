import { insert } from "../../topo";

const features = [{
    id: 'Mainland', objt: 'reefs', arcs: [
        [[31.5, -492.5], [144, 0],

        [0, -5],

        [-1, 0], [0, -1], [-4, 0],
        [0, -1], [-1, 0], [0, -1], [-2, 0], [0, -1], [-4, 0], [0, -1], [-5, 0], [0, 1], [-1, 0],
        [0, 1], [-1, 0], [0, -1],

        [-3, 0], [0, -5], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-4, 0], [0, -1],
        [-1, 0], [0, -2], [-1, 0], [0, -1], [-1, 0], [0, -1], [-2, 0], [0, -1], [1, 0], [0, -1],
        [1, 0], [0, -1], [1, 0], [0, -5], [-1, 0], [0, -2], [-1, 0], [0, -1], [-1, 0], [0, -2],
        [1, 0], [0, -1], [1, 0], [0, -3], [1, 0], [0, -1], [1, 0], [0, -2], [1, 0], [0, -1], [1, 0],
        [0, -3], [1, 0],

        [0, -6], [1, 0], [0, -2], [1, 0], [0, -3], [-1, 0], [0, -2], [1, 0], [0, 1], [3, 0], [0, -3],
        [2, 0], [0, -2], [5, 0], [0, -1], [7, 0], [0, -1], [1, 0], [0, -1], [14, 0], [0, -1], [5, 0],
        [0, -1], [1, 0], [0, -1], [1, 0], [0, -1], [3, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -1],
        [1, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, 1], [4, 0], [0, -1], [1, 0],
        [0, -1], [1, 0], [0, 1], [1, 0], [0, -3],

        [1, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -1], [4, 0], [0, -1], [2, 0], [0, -2],
        [1, 0], [0, -2], [1, 0], [0, 2], [1, 0], [0, 1], [7, 0], [0, -1], [1, 0], [0, -1], [11, 0],
        [0, -1], [1, 0], [0, -1], [1, 0], [0, -2], [1, 0], [0, -1], [1, 0], [0, -1], [3, 0], [0, 1],
        [5, 0], [0, -1], [8, 0], [0, -1], [1, 0], [0, 1], [5, 0], [0, 1], [6, 0], [0, -1], [5, 0],

        [0, 1], [3, 0], [0, 1], [6, 0], [0, -1], [1, 0], [0, -1],
        [1, 0], [0, -1], [2, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 1], [5, 0], [0, -1],
        [1, 0], [0, -1], [1, 0], [0, -1], [2, 0], [0, -1], [1, 0], [0, -1], [3, 0], [0, -1],
        [1, 0], [0, -1], [1, 0], [0, -1], [2, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -1],
        [1, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -2], [1, 0], [0, -9],
        [1, 0], [0, -5], [-1, 0], [0, -3], [-1, 0], [0, -2], [1, 0], [0, -1], [1, 0], [0, -2],
        [1, 0], [0, -1], [1, 0], [0, -4], [1, 0], [0, -1], [1, 0], [0, -3], [1, 0], [0, -2],
        [-1, 0], [0, -3], [-1, 0], [0, -1], [-1, 0], [0, -2], [-1, 0], [0, -2], [-1, 0],
        [0, -2], [-1, 0], [0, -1], [-1, 0], [0, -2], [-3, 0], [0, -1], [-1, 0], [0, 1], [-1, 0],
        [0, -1], [-6, 0],

        [0, -2], [1, 0], [0, -3], [-2, 0], [0, -1], [-1, 0], [0, -2], [-1, 0], [0, -5],
        [1, 0], [0, -7], [-1, 0], [0, -1], [-1, 0], [0, -1], [-5, 0], [0, 1], [-1, 0],
        [0, 1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -4],
        [-1, 0], [0, -4], [-1, 0], [0, -2], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0],
        [0, -6], [1, 0], [0, -5], [-1, 0], [0, -1], [-1, 0], [0, -1], [-4, 0], [0, -1],
        [-5, 0], [0, 1], [-1, 0], [0, 1], [-2, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -3],
        [-1, 0], [0, -1], [-1, 0], [0, -1], [-2, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1],
        [-9, 0], [0, -1], [-1, 0], [0, -2], [-1, 0], [0, -1], [-1, 0], [0, -2], [-1, 0], [0, -1],
        [-1, 0], [0, -1], [-4, 0], [0, -1], [-4, 0], [0, 1], [-1, 0], [0, 1],

        [-2, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -2], [-1, 0], [0, -1], [-1, 0], [0, -1],
        [-10, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 2], [-6, 0], [0, 1], [-1, 0], [0, 1], [-1, 0],
        [0, 6], [-5, 0], [0, -2], [-2, 0], [0, -1], [-9, 0], [0, 1], [-3, 0],
        [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-5, 0], [0, -1],
        [-7, 0], [0, 1], [-3, 0], [0, 1], [-4, 0], [0, -2], [-1, 0], [0, -2], [-1, 0], [0, -1], [-1, 0],
        [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-2, 0], [0, -1], [-5, 0], [0, 1], [-1, 0], [0, 1],
        [-1, 0], [0, 3], [-2, 0], [0, -1], [-1, 0], [0, -1], [-10, 0], [0, -1], [-1, 0], [0, -1], [-1, 0],
        [0, -1], [-4, 0], [0, -1], [1, 0], [0, -5], [-1, 0], [0, -1], [-1, 0], [0, -1], [-3, 0], [0, -1],
        [-10, 0],

        [0, 1], [-5, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 5], [-1, 0], [0, -1], [-7, 0], [0, -2],
        [-1, 0], [0, -1], [-1, 0], [0, -1], [-5, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 4], [-6, 0],
        [0, -1], [-5, 0], [0, 1], [-1, 0], [0, 1], [-3, 0], [0, -1], [-15, 0], [0, -1], [-14, 0], [0, 1],
        [-1, 0], [0, 1], [-2, 0], [0, 1], [-3, 0], [0, -1], [1, 0], [0, -5], [-1, 0], [0, -1], [-1, 0],
        [0, -1], [-4, 0], [0, -1], [-1, 0], [0, -1], [-5, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1],
        [-1, 0], [0, 1], [-3, 0], [0, 1], [-2, 0], [0, 1], [-2, 0], [0, 1], [-7, 0], [0, 1], [-5, 0],
        [0, 1], [-6, 0],

        [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 3], [-1, 0], [0, 4], [-7, 0],
        [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 2], [-3, 0], [0, 1], [-1, 0], [0, 1], [-2, 0], [0, 1], [-2, 0],
        [0, 1], [-5, 0], [0, -1], [-2, 0], [0, -1], [-2, 0], [0, -1], [-5, 0], [0, 1], [-1, 0],
        [0, 1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-2, 0], [0, -6], [-1, 0], [0, -1], [-1, 0],
        [0, -1], [-6, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0],
        [0, -1], [-4, 0], [0, 1], [-2, 0], [0, 1], [-1, 0], [0, 2], [-1, 0], [0, 1], [-1, 0],
        [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-2, 0], [0, 1], [-7, 0], [0, 1], [-1, 0], [0, 1],
        [-1, 0], [0, 1], [-2, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 2], [-3, 0], [0, 1], [-1, 0],
        [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 4], [-2, 0], [0, 1], [-2, 0], [0, 1], [-2, 0], [0, 2],
        [-2, 0], [0, 2], [-3, 0], [0, 1], [-1, 0],

        [0, 2], [-1, 0], [0, 2], [-1, 0], [0, 2], [-1, 0], [0, 3], [-1, 0], [0, 1],
        [-1, 0], [0, 2], [-1, 0], [0, 8], [1, 0], [0, 2], [-1, 0], [0, 3], [-1, 0], [0, 9], [1, 0], [0, 2],
        [1, 0], [0, 1], [1, 0], [0, 5], [1, 0], [0, 1], [1, 0], [0, 4], [1, 0], [0, 2], [1, 0], [0, 1], [2, 0],
        [0, 1], [1, 0], [0, 1], [2, 0], [0, 2], [1, 0], [0, 1], [1, 0], [0, 1], [2, 0],
        [0, 1], [1, 0], [0, 1], [-1, 0], [0, 3], [1, 0], [0, 3], [1, 0], [0, 1], [3, 0], [0, 1], [1, 0], [0, 3],
        [1, 0], [0, 1], [1, 0], [0, 2], [1, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 3],

        [-1, 0],

        [0, 5], [1, 0], [0, 5], [1, 0], [0, 1], [-2, 0], [0, 1], [-1, 0], [0, 4], [1, 0], [0, 1], [1, 0],
        [0, 1], [1, 0], [0, 1],

        // Internal
        [4, 0], [0, -1], [1, 0], [0, -1], [2, 0], [0, 1], [3, 0], [0, 1], [1, 0], [0, 1], [2, 0], [0, 1],
        [7, 0], [0, 1], [10, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -1],
        [2, 0], [0, -1], [-1, 0], [0, -2], [1, 0], [0, -1], [1, 0], [0, -2], [1, 0], [0, -1], [7, 0],
        [0, -1], [2, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 1], [2, 0], [0, 2], [2, 0], [0, 1],
        [1, 0], [0, 1], [2, 0], [0, 1], [1, 0], [0, 1], [6, 0], [0, 1], [1, 0], [0, 1], [3, 0], [0, 1], [3, 0],
        [0, 1], [3, 0], [0, 1], [10, 0], [0, 2], [1, 0], [0, 1], [1, 0], [0, 1], [6, 0], [0, -1], [3, 0], [0, -1],
        [1, 0], [0, -1], [2, 0], [0, 2], [-1, 0], [0, 1], [-1, 0], [0, 1], [-2, 0], [0, 1], [-1, 0], [0, 1],
        [-2, 0], [0, -1], [-5, 0], [0, 1], [-5, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-4, 0],
        [0, -1], [-2, 0], [0, -1], [-1, 0], [0, -1], [-8, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1],
        [-3, 0], [0, 1], [-2, 0], [0, -1], [-5, 0], [0, 1], [-3, 0], [0, 1], [-1, 0], [0, -1], [-4, 0],
        [0, -1], [-1, 0], [0, -5], [-1, 0], [0, -2], [-1, 0], [0, -1], [-2, 0], [0, 1], [-1, 0], [0, 2],
        [-1, 0], [0, 2], [-1, 0], [0, 1], [-1, 0], [0, 1], [-3, 0], [0, 2], [-5, 0], [0, -1], [-2, 0],
        [0, -1], [-1, 0], [0, -1], [1, 0], [0, -2], [2, 0], [0, -1], [1, 0], [0, -1], [-9, 0], [0, 1], [-2, 0],
        [0, -1], [-4, 0], [0, -1], [-3, 0], [0, -1], [-7, 0], [0, -1], [-3, 0],

        [-4, 0], [0, -1], [-3, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-5, 0],
        [0, 1], [-2, 0], [0, -1], [-1, 0], [0, -1], [-9, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 5], [-5, 0], [0, 1],
        [-1, 0], [0, 1], [-1, 0], [0, 3], [-1, 0], [0, 5], [-2, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1],
        [-2, 0], [0, 2], [-1, 0], [0, 1], [-2, 0], [0, 1], [-1, 0], [0, 3], [-2, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 10],
        [-1, 0], [0, -3], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -2], [-1, 0], [0, -1], [-1, 0], [0, -1], [-15, 0],
        [0, 1], [-1, 0], [0, 1], [-3, 0], [0, -2], [-5, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, -1], [-1, 0],
        [0, -1], [-1, 0], [0, -2], [-1, 0], [0, -1], [-1, 0], [0, -1], [-2, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1],
        [-5, 0], [0, 1], [-1, 0], [0, 1], [-1, 0],

        [0, 3], [-1, 0], [0, 2], [-4, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 5], [-1, 0], [0, 1], [-1, 0], [0, 4], [-1, 0],
        [0, 4], [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 2], [-1, 0], [0, 6], [-1, 0], [0, 1], [-1, 0], [0, 5],
        [1, 0], [0, 1], [1, 0], [0, 1], [3, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 8], [1, 0], [0, 2], [1, 0], [0, 1], [1, 0], [0, 1],
        [1, 0], [0, 1], [1, 0], [0, 1], [2, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 1], [3, 0], [0, 1], [1, 0], [0, 1],
        [1, 0], [0, 1], [3, 0], [0, 1], [3, 0], [0, 1], [3, 0], [0, 1], [2, 0], [0, 2], [1, 0],

        [0, 5], [1, 0], [0, 1], [1, 0], [0, 1], [2, 0], [0, 1], [2, 0], [0, 3], [1, 0], [0, 2], [1, 0], [0, 1], [3, 0], [0, 1],
        [1, 0], [0, 1], [7, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, 1], [1, 0], [0, 1], [2, 0], [0, 1], [-1, 0],
        [0, 5], [1, 0], [0, 1], [1, 0], [0, 1], [6, 0], [0, 1], [6, 0], [0, 2], [1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 15],
        [1, 0], [0, 2], [1, 0], [0, 1], [-1, 0], [0, 11], [1, 0], [0, 14],

        [1, 0], [0, 1], [-1, 0], [0, 1], [-6, 0], [0, -1], [-1, 0], [0, 2], [-1, 0], [0, -1], [-4, 0], [0, 1], [-2, 0], [0, 2],
        [-1, 0], [0, 4], [-4, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-3, 0], [0, -1], [-1, 0], [0, -1], [-5, 0], [0, 1], [-1, 0],
        [0, 1], [-1, 0], [0, 3], [-1, 0], [0, -1], [-1, 0], [0, -1], [-5, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0],
        [0, 5], [1, 0], [0, 1], [1, 0], [0, 2], [-1, 0], [0, 1], [-5, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 5], [1, 0], [0, 1],
        [-5, 0], [0, 1], [-6, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-2, 0], [0, 1], [-1, 0], [0, 1],
        [-5, 0], [0, 1], [-1, 0], [0, 1], [-3, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, -1],

        [-4, 0], [0, -1], [-2, 0], [0, -1], [-1, 0], [0, -5], [-1, 0], [0, -1], [-1, 0], [0, -1], [-4, 0], [0, -1], [-6, 0], [0, -1],
        [-5, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 1], [-1, 0], [0, 17], [1, 0], [0, 1], [1, 0], [0, 11], [1, 0], [0, 2], [1, 0],
        [0, 1], [1, 0], [0, 1], [1, 0], [0, 1], [2, 0], [0, 1], [2, 0], [0, 1], [4, 0], [0, 1], [1, 0], [0, 1], [7, 0], [0, -1], [2, 0],
        [0, -1], [1, 0], [0, -1], [1, 0], [0, -1], [0, 1], [0, -1], [1, 0], [0, -1], [1, 0], [0, -2], [1, 0], [0, -2], [4, 0],
        [0, 1], [1, 0], [0, 1], [1, 0], [0, 3], [1, 0], [0, 1], [1, 0], [0, 1], [1, 0], [0, 1], [5, 0], [0, -1], [1, 0], [0, -1], [3, 0],
        [0, -1], [14, 0], [0, -1], [6, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -5], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0],
        [0, -1], [1, 0], [0, -5], [-1, 0], [0, -4], [-1, 0], [0, -2], [1, 0], [0, 1], [4, 0], [0, 5], [1, 0], [0, 1], [1, 0], [0, 1],
        [5, 0], [0, 1], [17, 0], [0, -1], [2, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -2], [1, 0], [0, -1], [1, 0], [0, -2], [1, 0],
        [0, -1], [1, 0], [0, -3], [1, 0], [0, -2], [4, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -5], [-1, 0], [0, -1], [-1, 0], [0, -1],
        [-4, 0], [0, -2], [-1, 0], [0, -8], [5, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -1], [2, 0], [0, -3], [3, 0], [0, -2], [-1, 0],
        [0, -4], [2, 0], [0, 2],

        [2, 0], [0, 2], [6, 0], [0, -1], [1, 0], [0, -1], [3, 0], [0, -1], [5, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -5],
        [-1, 0], [0, -3], [1, 0], [0, -4], [1, 0], [0, -2], [2, 0], [0, 1], [1, 0], [0, 1], [2, 0], [0, 1], [5, 0], [0, -1], [1, 0], [0, 1],
        [1, 0], [0, 1], [5, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -3], [2, 0], [0, 1], [7, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -2],
        [1, 0], [0, -1], [1, 0], [0, -1], [5, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -11], [-1, 0], [0, -5], [-1, 0], [0, -7], [-1, 0],
        [0, -1], [-1, 0], [0, -2], [2, 0], [0, -1], [1, 0],

        [0, -1], [1, 0], [0, -5], [-1, 0], [0, -1], [-1, 0], [0, -1], [-5, 0], [0, 1], [-1, 0], [0, 1], [-3, 0],
        [0, -1], [-1, 0], [0, -1], [-3, 0], [0, -1], [-2, 0], [0, -3], [-1, 0], [0, -1], [-1, 0], [0, -1],
        [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -1], [-3, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -2], [1, 0], [0, -1],
        [1, 0], [0, -1], [1, 0], [0, -2], [1, 0], [0, -1], [1, 0], [0, -1], [2, 0], [0, -1], [1, 0], [0, -1], [1, 0], [0, -1], [1, 0],
        [0, -5], [-1, 0], [0, -1], [-1, 0], [0, -1], [-1, 0], [0, -3], [1, 0], [0, -1], [1, 0], [0, -1], [2, 0], [0, 1], [5, 0], [0, -1],
        [1, 0], [0, -1], [2, 0], [0, 1], [5, 0], [0, -1], [1, 0], [0, 1], [1, 0], [0, 1], [3, 0], [0, 1], [1, 0], [0, 4], [1, 0], [0, 1],
        [1, 0], [0, 1], [5, 0], [0, -1], [1, 0], [0, -1], [5, 0], [0, 1], [5, 0], [0, 1], [5, 0], [0, -1], [2, 0], [0, 1], [1, 0],
        [0, 1], [5, 0], [0, -1], [1, 0], [0, 1],


        [5, 0], [0, -1], [1, 0], [0, 1], [1, 0], [0, 1], [5, 0], [0, -1], [1, 0], [0, -1], [3, 0], [0, -1], [5, 0],
        [0, 1], [2, 0], [0, 1], [7, 0], [0, 1], [1, 0], [0, 1], [2, 0], [0, 1]
        ],
    ]
},];

features.forEach((feature) => insert(feature));