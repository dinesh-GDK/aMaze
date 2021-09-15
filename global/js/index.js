import {getCell, createGrid, reset, play} from './helper.js';
import {recursiveDivision} from './mazeGen/recursiveDivision.js';
import {kruskal} from './mazeGen/kruskal.js';
import {prim} from './mazeGen/prim.js';
import {graphTraversal} from './mazeSol/graphTraversal.js';
import {pathFinding} from './mazeSol/pathFinding.js';

const pathWidth = '1px';
const animation = {
    explore: 'explore 0.5s forwards',
    path: 'path 1s forwards',
    clear: 'clear 0s forwards',
    target: 'target 2s infinite'
};

// disable necessary buttons
let getAll = document.querySelectorAll('a');
const disable1 = getAll[0];
const disable2 = getAll[2];
getAll = ['#new', '#solve'];

const mazeContainer = document.getElementsByClassName('maze')[0];

let cellDim = Math.floor(Math.min(mazeContainer.clientWidth, mazeContainer.clientHeight) * 0.035);
cellDim = cellDim > 20 ? cellDim : 20;
let rows = Math.floor((mazeContainer.clientHeight * 0.75) / cellDim);
let cols = Math.floor((mazeContainer.clientWidth * 0.7) / cellDim);

// rows = 10, cols = 10;
window.pX = 0;
window.pY = 0;

let canReset = true;
document.getElementById('reset').onclick = () => reset(canReset);

document.getElementById('recurse').onclick = () => createMaze('recurse');
document.getElementById('kruskal').onclick = () => createMaze('kruskal');
document.getElementById('prim').onclick    = () => createMaze('prim');

document.getElementById('dfs').onclick      = () => solveMaze('dfs');
document.getElementById('bfs').onclick      = () => solveMaze('bfs');
document.getElementById('dijkstra').onclick = () => solveMaze('dijkstra');
document.getElementById('astar').onclick    = () => solveMaze('astar');

async function createMaze(algo) {
    window.removeEventListener('keydown', play);
    canReset = false;
    disable1.href = '#';
    disable2.href = '#';
    document.getElementById('count').innerHTML = 0;
	
    createGrid();
    
    if(algo === 'recurse') {
        await recursiveDivision(0, 0, rows, cols, true);

    } else if(algo === 'kruskal') {
        await kruskal();
    
    } else {
        await prim();
    }
    
    window.addEventListener('keydown', play);
    canReset = true;
    reset(canReset);
    disable1.href = getAll[0];
    disable2.href = getAll[1];
}

async function solveMaze(algo) {
    window.removeEventListener('keydown', play);
    canReset = false;
    disable1.href = '#';
    disable2.href = '#';

    algoReset();
    getCell(rows-1, cols-1).innerHTML = ``;
    getCell(window.pX, window.pY).innerHTML = `<span class='player'></span>`;

    if(algo === 'dfs') {
        await graphTraversal('dfs');

    } else if(algo === 'bfs') {
        await graphTraversal('bfs');

    } else if(algo === 'dijkstra') {
        await pathFinding('dijkstra');
        
    } else {
        await pathFinding('astar');
    }

    canReset = true;
    disable1.href = getAll[0];
    disable2.href = getAll[1];

    function algoReset() {
        document.getElementById('count').innerHTML = window.userPath.length - 1;
        for(let i = 0; i < rows; ++i) {
            for(let j = 0; j < cols; ++j) {
                getCell(i, j).style.animation = animation.clear;
            }
        }
        getCell(rows-1, cols-1).style.animation = animation.target;
    }
}

// at beginning
createMaze('recurse');

window.onload = () => {
    if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
}

export {rows, cols, cellDim, pathWidth, animation};
