import {getCell, createGrid, reset} from './helper.js';
import {mazeGen} from './mazeGen.js';
import {graphTraversal} from './graphTraversal.js';

const cellDim = 25;
const minRow = 25;
const minCol = 38;
const wallWidth = '1px';
const targetColor = 'green';

let rows = Math.floor(window.innerHeight/cellDim) - 15;
let cols = Math.floor(window.innerWidth/cellDim) - 2;

// rows = rows > minRow ? rows : minRow;
// cols = cols > minCol ? cols : minCol;

rows = 25;
cols = 25;

document.getElementById('fullResetBtn').onclick = () => {
    createGrid();
    mazeGen(true);
    reset();
}

document.getElementById('resetBtn').onclick = () => reset();
document.getElementById('dfs').onclick = () => graphTraversal('dfs');
document.getElementById('bfs').onclick = () => graphTraversal('bfs');

document.getElementById('fullResetBtn').click();


export {rows, cols, cellDim, wallWidth};
