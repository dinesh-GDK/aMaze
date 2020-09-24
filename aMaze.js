// webpack bundle for bootstrap

const cellDim = 25;
const minRow = 25;
const minCol = 38;

let rows = Math.floor(window.innerHeight/cellDim) - 15;
let cols = Math.floor(window.innerWidth/cellDim) - 2;

// rows = rows > minRow ? rows : minRow;
// cols = cols > minCol ? cols : minCol;

rows = 25;
cols = 25;

const wallWidth = '1px';
const playerColor = 'red';
const gridColor = 'white';
const targetColor = 'green';

let grid = [...Array(rows)].map(e => Array(cols).fill(0));

const maze = document.getElementById('maze');

createGrid();
mazeGen();

// ****************************** grid ********************************************* //

function getCell(i, j) {
    return document.getElementById(String(i) + ' ' + String(j));
}

function createGrid() {

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

//********************************* maze ***************************************//

function mazeGen() {

	const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
	
	
	let mem = new Set();
	let memIt = mem.entries();

	mem.add(`${Math.floor(Math.random() * rows)} ${Math.floor(Math.random() * cols)}`);

	// let timer;
	// timer = setInterval(() => {
	// 	if(mem.size < rows * cols) {
	// 		loop();
	// 	} else {
	// 		clearInterval(timer);
	// 		document.onkeydown = play;
	// 	}
	// }, 0);
	while(mem.size < rows * cols) 	loop();

	function loop() {

		let node;
		if(mem.size % 9 === 0) {
			node = getRandomItem(mem);
		} else {
			node = memIt.next();
			if(node.done) {
				memIt = mem.entries();
				node = memIt.next();
			}
			node = node.value[0];
		}

		let x = Number(node.split(' ')[0]);
		let y = Number(node.split(' ')[1]);

		let neigh = frontierCells(x, y);

		if(neigh.size) {
			let select_neigh = getRandomItem(neigh);
			mem.add(select_neigh);
			let n_x = Number(select_neigh.split(' ')[0]);
			let n_y = Number(select_neigh.split(' ')[1]);

			if(x === n_x) {
				if(y > n_y) {
					getCell(x, y).style.borderLeftWidth = wallWidth;
					getCell(x, y-1).style.borderRightWidth = wallWidth;
				} else {
					getCell(x, y).style.borderRightWidth = wallWidth;
					getCell(x, y+1).style.borderLeftWidth = wallWidth;
				}
			} else {
				if(x > n_x) {
					getCell(x, y).style.borderTopWidth = wallWidth;
					getCell(x-1, y).style.borderBottomWidth = wallWidth;
				} else {
					getCell(x, y).style.borderBottomWidth = wallWidth;
					getCell(x+1, y).style.borderTopWidth = wallWidth;
				}
			}
		}
	}

	function frontierCells(x, y) {
		let neigh = new Set();
		for(let i = 0; i < 4; ++i) {
			let newX = x + dir[i][0];
			let newY = y + dir[i][1];
			if(newX >= 0 && newY >= 0 && newX < rows && newY < cols && !mem.has(`${newX} ${newY}`)) {
				neigh.add(`${newX} ${newY}`);
			}
		}
		return neigh;
	}

	function getRandomItem(mySet) {
		mySet = Array.from(mySet);
		return mySet[Math.floor(Math.random() * mySet.length)];
	}
}

// ********************************* navigation ******************************************* //

let steps = 0;
changePlayer(0, 0, 0, 0);

getCell(rows - 1, cols - 1).style.backgroundColor = targetColor;
let pX = Number(getCell(0, 0).id.split(' ')[0]);
let pY = Number(getCell(0, 0).id.split(' ')[1]);

const play = (ev) => {
	if(ev.key === 'ArrowUp' && getCell(pX, pY).style.borderTopWidth === wallWidth)
		changePlayer(pX, pY, --pX, pY);

	else if(ev.key === 'ArrowDown' && getCell(pX, pY).style.borderBottomWidth === wallWidth)
		changePlayer(pX, pY, ++pX, pY);

	else if(ev.key === 'ArrowRight' && getCell(pX, pY).style.borderRightWidth === wallWidth)
		changePlayer(pX, pY, pX, ++pY);

	else if(ev.key === 'ArrowLeft' && getCell(pX, pY).style.borderLeftWidth === wallWidth)
		changePlayer(pX, pY, pX, --pY);
}
// remove when you set the timer
document.onkeydown = play;

function changePlayer(x, y, newX, newY) {
	document.getElementById('count').innerHTML = `Number of Steps: ${++steps}`;
	getCell(x, y).innerHTML = ``;
	getCell(x, y).style.animationName = 'playerAnim';

	getCell(newX, newY).innerHTML = `<span class='player'/>`;
	getCell(newX, newY).style.animationName = 'playerAnim';	
}
