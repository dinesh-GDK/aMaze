import {getCell, createGrid, reset, play, changePlayer} from './helper.js';
import {mazeGen} from './mazeGen.js';
import {graphTraversal} from './graphTraversal.js';
import {pathFinding} from './pathFinding.js';

const minRow = 10;
const minCol = 10;
const cellDim = 25;
const wallWidth = '1px';
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

document.getElementById('fullResetBtn').onclick = () => {
    document.querySelectorAll('.btn').forEach(elem => { elem.disabled = true; });
    createGrid();
    mazeGen(true);
    // mazeGen();
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
        // changePlayer(rows-1, cols-1, window.pX, window.pY);
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

export {rows, cols, cellDim, wallWidth, animation};