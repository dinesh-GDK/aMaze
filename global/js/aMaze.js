import {getCell, createGrid, reset, changePlayer, play} from './helper.js';
import {mazeGen} from './mazeGen.js';
import {graphTraversal} from './graphTraversal.js';

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

let rows = Math.floor(window.innerHeight/cellDim) - 2;
let cols;
if(window.innerWidth < 1000) {
    cols = Math.floor(window.innerWidth/cellDim) - 4;
} else {
    cols = Math.floor(window.innerWidth/cellDim) - 20;
}

rows = rows > minRow ? rows : minRow;
cols = cols > minCol ? cols : minCol;

document.getElementById('fullResetBtn').onclick = () => {
    createGrid();
    mazeGen(true);
    reset();
}

document.getElementById('resetBtn').onclick = () => reset();
document.getElementById('fullResetBtn').click();

document.getElementById('go').onclick = () => {

    let algo = document.getElementById('algo').value;

    if(algo === 'Choose an Algorithm') {
        alert('Choose an Algorithm to solve');
    } else {
        algoReset();
        if(algo === 'dfs') {
            graphTraversal('dfs');
    
        } else if(algo === 'bfs') {
            graphTraversal('bfs');
    
        }
    }

    function algoReset() {
        window.removeEventListener('keydown', play);

        let idx = window.mainPath.indexOf(`${window.pX} ${window.pY}`);
        window.mainPath.length = idx + 1;
        document.getElementById('count').innerHTML = mainPath.length - 1;

        getCell(rows-1, cols-1).innerHTML = ``;
        getCell(window.pX, window.pY).innerHTML = `<span class='player'/>`;
        for(let i = 0; i < rows; ++i) {
            for(let j = 0; j < cols; ++j) {
                getCell(i, j).style.animation = animation.clear;
            }
        }
        getCell(rows - 1, cols - 1).style.animation = animation.target;
    }
}


export {rows, cols, cellDim, wallWidth, animation};
