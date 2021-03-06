import {rows, cols, cellDim, pathWidth, animation} from './index.js';

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
    const cell = getCell(window.pX, window.pY).style;
    if(ev.key === 'ArrowUp' && getCell(window.pX, window.pY).style.borderTopWidth === pathWidth) {
        changePlayer(window.pX, window.pY, --window.pX, window.pY, 0, true);
        
    } else if(ev.key === 'ArrowDown' && getCell(window.pX, window.pY).style.borderBottomWidth === pathWidth) {
        changePlayer(window.pX, window.pY, ++window.pX, window.pY, 0, true);

    } else if(ev.key === 'ArrowRight' && getCell(window.pX, window.pY).style.borderRightWidth === pathWidth) {
        changePlayer(window.pX, window.pY, window.pX, ++window.pY, 0, true);

    } else if(ev.key === 'ArrowLeft' && getCell(window.pX, window.pY).style.borderLeftWidth === pathWidth) {
        changePlayer(window.pX, window.pY, window.pX, --window.pY, 0, true);
    }
}

async function changePlayer(x, y, newX, newY, algoSteps, user=false) {

    if(user) {
        let pt = { x: newX, y: newY };
        window.userPath.push(pt);
    }

	getCell(x, y).innerHTML = ``;
	getCell(x, y).style.animation = animation.path;

	getCell(newX, newY).innerHTML = `<span class='player'></span>`;
    getCell(newX, newY).style.animation = animation.path;
    
    document.getElementById('count').innerHTML = window.userPath.length - 1 + algoSteps;

    if(newX === rows-1 && newY === cols-1) {
        window.removeEventListener('keydown', play);
        await new Promise(r => setTimeout(r, 1000));
        document.getElementById('tReach').click();
    }
}

function plotPath(grid) {

    let track = grid[rows-1][cols-1];
    let steps = 0;

    for(let i = 0, len = window.userPath.length; i < len; ++i) {
        getCell(window.userPath[i].x, window.userPath[i].y).style.animation = animation.path;
    }

    while(track.x !== window.pX || track.y !== window.pY) {
        getCell(track.x, track.y).style.animation = animation.path;
        track = grid[track.source.x][track.source.y];
        steps++;
    }

    getCell(window.pX, window.pY).style.animation = animation.path;
    changePlayer(window.pX, window.pY, rows-1, cols-1, steps);
    document.querySelectorAll('.btn').forEach(elem => { elem.disabled = false; });
}

// ********************************** reset *********************************** //

function reset(canReset) {

    if(!canReset)    return;

    window.addEventListener('keydown', play);
    document.getElementById('count').innerHTML = 0;

    for(let i = 0; i < rows; ++i) {
        for(let j = 0; j < cols; ++j) {
            getCell(i, j).style.animation = animation.clear;
            getCell(i, j).innerHTML = '';
        }
    }

    window.pX = 0;
    window.pY = 0;
    window.userPath = [];
    let pt = { x: 0, y: 0 };
    window.userPath.push(pt);
    changePlayer(0, 0, 0, 0, 0);
    getCell(rows - 1, cols - 1).style.animation = animation.target;
}

// **************************** grid initialization *************************** //

async function borderGrid() {
    
    for(let i = 0; i < rows; ++i) {
        getCell(i, 0).style.borderLeftColor = 'black';
        getCell(rows-1-i, cols-1).style.borderRightColor = 'black';
        await new Promise(r => setTimeout(r, 10));
    }
    
    for(let i = 0; i < cols; ++i) {
        getCell(0, i).style.borderTopColor = 'black';
        getCell(rows-1, cols-1-i).style.borderBottomColor = 'black';
        await new Promise(r => setTimeout(r, 10));
    }
}

async function fullGrid() {

    for(let j = 0, len = cols/2; j <= len; ++j) {
        for(let i = 0; i < rows; ++i) {
            getCell(i, j).style.borderLeftColor = 'black';
            getCell(i, j).style.borderRightColor = 'black';
            getCell(rows-1-i, cols-1-j).style.borderLeftColor = 'black';
            getCell(rows-1-i, cols-1-j).style.borderRightColor = 'black';
            await new Promise(r => setTimeout(r, 0));
        }
    }

    for(let j = 0, len = rows/2; j <= len; ++j) {
        for(let i = 0; i < cols; ++i) {
            getCell(j, i).style.borderTopColor = 'black';
            getCell(j, i).style.borderBottomColor = 'black';
            getCell(rows-1-j, cols-1-i).style.borderTopColor = 'black';
            getCell(rows-1-j, cols-1-i).style.borderBottomColor = 'black';
            await new Promise(r => setTimeout(r, 0));
        }
    }
}

export {getCell, createGrid, play, changePlayer, plotPath, reset, borderGrid, fullGrid};