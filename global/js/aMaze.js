import {getCell, createGrid, reset, play, borderGrid, fullGrid} from './helper.js';
import {mazeGen} from './mazeGen/mazeGen.js';
import {recursiveDivision} from './mazeGen/recursiveDivision.js';
import {kruskal} from './mazeGen/kruskal.js';
import {prim} from './mazeGen/prim.js';
import {graphTraversal} from './mazeSol/graphTraversal.js';
import {pathFinding} from './mazeSol/pathFinding.js';

const minRow = 10;
const minCol = 10;
const cellDim = 25;
const wallWidth = '5px';
const pathWidth = '1px';
const animation = {
    explore: 'explore 0.5s forwards',
    path: 'path 1s forwards',
    clear: 'clear 0s forwards',
    target: 'target 2s infinite'
};

let rows = Math.floor(window.innerHeight/cellDim) - 3;
let cols = Math.floor(window.innerWidth/cellDim) - 20;

rows = rows > minRow ? rows : minRow;
cols = cols > minCol ? cols : minCol;

// rows = 10;
// cols = 10;

window.pX = 0;
window.pY = 0;

document.getElementById('fullResetBtn').onclick = async function() {
    document.querySelectorAll('.btn').forEach(elem => { elem.disabled = true; });
    document.getElementById('count').innerHTML = 0;
	window.removeEventListener('keydown', play);

    createGrid();
    
    // mazeGen();
    await borderGrid();
    await recursiveDivision(0, 0, rows, cols);
    // await fullGrid();
    // await kruskal(rows, cols);
    // await prim();
    // await mazeGen(true);


    document.querySelectorAll('.btn').forEach(elem => { elem.disabled = false; });
    window.addEventListener('keydown', play);
    reset();
    
}

document.getElementById('resetBtn').onclick = () => reset();
document.getElementById('fullResetBtn').click();

document.getElementById('go').onclick = () => {

    let algo = document.getElementById('algo').value;

    if(algo === 'Choose an Algorithm') {
        alert('Choose an Algorithm to solve');
    } else {
        
        window.removeEventListener('keydown', play);
        document.querySelectorAll('.btn').forEach(elem => { elem.disabled = true; });
        algoReset();
        getCell(rows-1, cols-1).innerHTML = ``;
        getCell(window.pX, window.pY).innerHTML = `<span class='player'></span>`;

        if(algo === 'dfs') {
            graphTraversal('dfs');
    
        } else if(algo === 'bfs') {
            graphTraversal('bfs');

        } else if(algo === 'dijkstra') {
            pathFinding('dijkstra');
            
        } else {
            pathFinding('astar');
        }
    }

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

export {rows, cols, cellDim, wallWidth, pathWidth, animation};