// webpack bundle for bootstrap

const cellDim = 30;
const minRow = 25;
const minCol = 38;

let rows = Math.floor(window.innerHeight/cellDim) - 5;
let cols = Math.floor(window.innerWidth/cellDim) - 2;

// rows = rows > minRow ? rows : minRow;
// cols = cols > minCol ? cols : minCol;

rows = 25;
cols = 25;

let grid = [...Array(rows)].map(e => Array(cols).fill(0));

const maze = document.getElementById('maze');

createGrid();
mazeGen();
update(grid);


function createGrid() {

    for(let i = 0; i < rows; ++i) {
        const maze_row = document.createElement('tr');
        for(let j = 0; j < cols; ++j) {
            maze_row.appendChild(createCell(i, j));
        } 
        maze.appendChild(maze_row);
    }

    // for(let i = 0; i < cols; ++i)       grid[0][i] = 1;
    // for(let i = 0; i < rows; ++i)       grid[i][cols - 1] = 1;
    // for(let i = cols - 1; i >= 0; --i)  grid[rows - 1][i] = 1;
    // for(let i = rows - 1; i >= 0; --i)  grid[i][0] = 1;

    function createCell(i, j) {

        const cell = document.createElement('td');
        cell.className = 'cell';
        cell.id = String(i) + ' ' + String(j);

        cell.style.height = String(cellDim) + 'px';
        cell.style.width  = String(cellDim) + 'px';
        cell.onclick = () => cell.style.animationPlayState = 'running';
        return cell;
    }
}

function update(grid) {
	for(let i = 0; i < rows; i++) {
		for(let j = 0; j < cols; ++j) {
			if(grid[i][j] === 1) {
				getCell(i, j).style.backgroundColor = 'black';
			}
		}
	}
}

function getCell(i, j) {
    return document.getElementById(String(i) + ' ' + String(j));
}

function mazeGen() {
	const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
	let mem = new Set();
	let memIt = mem.entries();

	const width = '0.5px';
	const color = 'gray';

	mem.add('10_10');
	// it.next().value[0]

	let it = 0;
	const range = 10000;
	while(mem.size < rows * cols && it < range) {
		it++;

		let node = memIt.next();
		// console.log(mem.size);
		if(node.done) {
			memIt = mem.entries();
			node = memIt.next();
		}
		node = node.value[0];

		let x = Number(node.split('_')[0]);
		let y = Number(node.split('_')[1]);

		let neigh = frontierCells(x, y);

		// make sure the set is not empty
		if(neigh.size) {
			// select a random cell from this set
			let select_neigh = getRandomItem(neigh);
			mem.add(select_neigh);
			let n_x = Number(select_neigh.split('_')[0]);
			let n_y = Number(select_neigh.split('_')[1]);

			if(x === n_x) {
				if(y > n_y) {
					getCell(x, y).style.borderLeftWidth = width;
					getCell(x, y-1).style.borderRightWidth = width;
					console.log(getCell(x, y-1).style.borderRightWidth);
				} else {
					getCell(x, y).style.borderRightWidth = width;
					getCell(x, y+1).style.borderLeftWidth = width;;
				}
			}
			else {
				if(x > n_x) {
					getCell(x, y).style.borderTopWidth = width;
					getCell(x-1, y).style.borderBottomWidth = width;
				} else {
					getCell(x, y).style.borderBottomWidth = width;
					getCell(x+1, y).style.borderTopWidth = width;
				}
			}
		}
	}

	function frontierCells(x, y) {
		let neigh = new Set();
		let i;
		for(i = 0; i < 4; ++i) {
			let newX = x + dir[i][0];
			let newY = y + dir[i][1];
			if(newX >= 0 && newY >= 0 && newX < rows && newY < cols && !mem.has(`${newX}_${newY}`)) {
				neigh.add(`${newX}_${newY}`);
			}
		}
		return neigh;
	}

	function getRandomItem(mySet) {
		mySet = Array.from(mySet);
		return mySet[Math.floor(Math.random() * mySet.length)];
	}
}


// while(mem.size !== 0) {
// 	it++;

// 	// get a random node from the frontier list
// 	let node = memIt.next().value[0];
// 	let x = Number(node.split('_')[0]);
// 	let y = Number(node.split('_')[1]);
// 	// console.log("x", x, "y", y);
// 	grid[x][y] = 0;
// 	// after selecting remove from the frontier list
// 	mem.delete(node);

// 	// compute its neighbours which are not walls
// 	let neigh = frontierCells(x, y);

// 	// makesure the set is not empty
// 	if(neigh.size) {
// 		// select a random cell from this set
// 		let select_neigh = getRandomItem(neigh);
// 		let n_x = Number(select_neigh.split('_')[0]);
// 		let n_y = Number(select_neigh.split('_')[1]);

// 		grid[n_x][n_y] = 0;
// 		if(x === n_x) {
// 			if(y > n_y)		grid[x][y - 1] = 0;
// 			else			grid[x][n_y - 1] = 0;
// 		}
// 		else {
// 			if(x > n_x)		grid[x - 1][y] = 0;
// 			else			grid[n_x - 1][y] = 0;
// 		}
// 		neigh.delete(select_neigh);
// 		Array.from(neigh).forEach(mem.add, mem);
// 	}
// }