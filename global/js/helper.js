import {rows, cols, cellDim, wallWidth, animation} from './aMaze.js';

function getCell(i, j) {
    return document.getElementById(String(i) + ' ' + String(j));
}

// ****************************** grid **************************************** //

function createGrid() {

    const maze = document.getElementById('maze');
    maze.innerHTML = '';

    for(let i = 0; i < rows; ++i) {
        const maze_row = document.createElement('tr');
        for(let j = 0; j < cols; ++j) {
            maze_row.appendChild(createCell(i, j));
        } 
        maze.appendChild(maze_row);
	}
	
    function createCell(i, j) {

        const cell = document.createElement('td');
        cell.className = 'cell';
        cell.id = String(i) + ' ' + String(j);

        cell.style.height = String(cellDim) + 'px';
		cell.style.width  = String(cellDim) + 'px';
        return cell;
    }
}

// ****************************** navigation ********************************** //

const play = (ev) => {
    if(ev.key === 'ArrowUp' && getCell(window.pX, window.pY).style.borderTopWidth === wallWidth) {
        changePlayer(window.pX, window.pY, --window.pX, window.pY);
        
    } else if(ev.key === 'ArrowDown' && getCell(window.pX, window.pY).style.borderBottomWidth === wallWidth) {
        changePlayer(window.pX, window.pY, ++window.pX, window.pY);

    } else if(ev.key === 'ArrowRight' && getCell(window.pX, window.pY).style.borderRightWidth === wallWidth) {
        changePlayer(window.pX, window.pY, window.pX, ++window.pY);

    } else if(ev.key === 'ArrowLeft' && getCell(window.pX, window.pY).style.borderLeftWidth === wallWidth) {
        changePlayer(window.pX, window.pY, window.pX, --window.pY);
    }
}

function changePlayer(x, y, newX, newY) {

	getCell(x, y).innerHTML = ``;
	getCell(x, y).style.animation = animation.path;

	getCell(newX, newY).innerHTML = `<span class='player'/>`;
	getCell(newX, newY).style.animation = animation.path;

    window.mainPath.push(`${Number(newX)} ${Number(newY)}`);
    document.getElementById('count').innerHTML = mainPath.length - 1;
}

function pathPlot() {
	for(let i = 0, l = window.mainPath.length; i < l; ++i) {
		let x = Number(window.mainPath[i].split(' ')[0]);
		let y = Number(window.mainPath[i].split(' ')[1]);
		getCell(x, y).style.animation = animation.path;
	}
}

// ********************************** reset *********************************** //
function reset() {
    const targetColor = 'green';

    for(let i = 0; i < rows; ++i) {
        for(let j = 0; j < cols; ++j) {
            getCell(i, j).style.animation = animation.clear;
            getCell(i, j).innerHTML = '';
        }
    }

    window.pX = 0;
    window.pY = 0;
    window.mainPath = new Array();
    changePlayer(0, 0, 0, 0);
    getCell(rows - 1, cols - 1).style.animation = animation.target;
}

export {getCell, createGrid, play, changePlayer, pathPlot, reset};