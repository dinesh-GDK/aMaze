import {getCell, createGrid, changePlayer} from './helper.js';
import {mazeGen} from './mazeGen.js';
import {dfs} from './dfs.js';

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

createGrid();

window.mainPath = new Array();
mazeGen(true);

changePlayer(0, 0, 0, 0);
getCell(rows - 1, cols - 1).style.backgroundColor = targetColor;

window.pX = 0;
window.pY = 0;

document.getElementById('dfs').onclick = () => dfs();

export {rows, cols, cellDim, wallWidth};
