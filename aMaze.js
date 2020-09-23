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

let grid = [...Array(rows)].map(e => Array(cols).fill(0));

const maze = document.getElementById('maze');

createGrid();
mazeGen();

// *************************************************************************** //

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
        cell.onclick = () => cell.style.animationPlayState = 'running';
        return cell;
    }
}

function mazeGen() {

	const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
	const width = '1px';
	
	let mem = new Set();
	let memIt = mem.entries();

	mem.add(`${Math.floor(Math.random() * rows)}_${Math.floor(Math.random() * cols)}`);

	let timer;
	timer = setInterval(() => {
		if(mem.size < rows * cols) {
			loop();
		} else {
			clearInterval(timer);
		}
	}, 0);

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

		let x = Number(node.split('_')[0]);
		let y = Number(node.split('_')[1]);

		let neigh = frontierCells(x, y);

		if(neigh.size) {
			let select_neigh = getRandomItem(neigh);
			mem.add(select_neigh);
			let n_x = Number(select_neigh.split('_')[0]);
			let n_y = Number(select_neigh.split('_')[1]);

			if(x === n_x) {
				if(y > n_y) {
					getCell(x, y).style.borderLeftWidth = width;
					getCell(x, y-1).style.borderRightWidth = width;
				} else {
					getCell(x, y).style.borderRightWidth = width;
					getCell(x, y+1).style.borderLeftWidth = width;;
				}
			} else {
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
		for(let i = 0; i < 4; ++i) {
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
