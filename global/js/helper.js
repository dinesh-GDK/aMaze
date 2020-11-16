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
    if(ev.key === 'ArrowUp' && getCell(window.pX, window.pY).style.borderTopWidth !== wallWidth) {
        changePlayer(window.pX, window.pY, --window.pX, window.pY, 0, true);
        
    } else if(ev.key === 'ArrowDown' && getCell(window.pX, window.pY).style.borderBottomWidth !== wallWidth) {
        changePlayer(window.pX, window.pY, ++window.pX, window.pY, 0, true);

    } else if(ev.key === 'ArrowRight' && getCell(window.pX, window.pY).style.borderRightWidth !== wallWidth) {
        changePlayer(window.pX, window.pY, window.pX, ++window.pY, 0, true);

    } else if(ev.key === 'ArrowLeft' && getCell(window.pX, window.pY).style.borderLeftWidth !== wallWidth) {
        changePlayer(window.pX, window.pY, window.pX, --window.pY, 0, true);
    }
}

function changePlayer(x, y, newX, newY, algoSteps, user=false) {

    if(user) {
        let pt = { x: newX, y: newY };
        window.userPath.push(pt);
    }
    console.log(window.userPath);

	getCell(x, y).innerHTML = ``;
	getCell(x, y).style.animation = animation.path;

	getCell(newX, newY).innerHTML = `<span class='player'></span>`;
    getCell(newX, newY).style.animation = animation.path;
    
    document.getElementById('count').innerHTML = window.userPath.length - 1 + algoSteps;

    if(newX === rows-1 && newY === cols-1) {
        window.removeEventListener('keydown', play);
        
        let timer = setInterval(() => {
            alert('Target Reached');
            clearInterval(timer);
        }, 500);
        
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

function reset() {

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
        getCell(i, 0).style.borderLeftWidth = wallWidth;
        getCell(rows-1-i, cols-1).style.borderRightWidth = wallWidth;
        await new Promise(r => setTimeout(r, 10));
    }
    
    for(let i = 0; i < cols; ++i) {
        getCell(0, i).style.borderTopWidth = wallWidth;
        getCell(rows-1, cols-1-i).style.borderBottomWidth = wallWidth;
        await new Promise(r => setTimeout(r, 10));
    }
}

async function fullGrid() {

    for(let j = 0; j <= cols/2; ++j) {
        for(let i = 0; i < rows; ++i) {
            getCell(i, j).style.borderLeftWidth = wallWidth;
            getCell(i, j).style.borderRightWidth = wallWidth;
            getCell(rows-1-i, cols-1-j).style.borderLeftWidth = wallWidth;
            getCell(rows-1-i, cols-1-j).style.borderRightWidth = wallWidth;
            await new Promise(r => setTimeout(r, 0));
        }
    }

    for(let j = 0; j <= rows/2; ++j) {
        for(let i = 0; i < cols; ++i) {
            getCell(j, i).style.borderTopWidth = wallWidth;
            getCell(j, i).style.borderBottomWidth = wallWidth;
            getCell(rows-1-j, cols-1-i).style.borderTopWidth = wallWidth;
            getCell(rows-1-j, cols-1-i).style.borderBottomWidth = wallWidth;
            await new Promise(r => setTimeout(r, 0));
        }
    }
}

export {getCell, createGrid, play, changePlayer, plotPath, reset, borderGrid, fullGrid};