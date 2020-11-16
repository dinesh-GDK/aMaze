import {rows, cols, wallWidth} from '../aMaze.js';
import {getCell, play, reset} from '../helper.js';

async function mazeGen(debug=false) {

	window.removeEventListener('keydown', play);

	const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
	const noCells = rows * cols;
	
	let mem = new Set();
	let memIt = mem.entries();

	mem.add(`${Math.floor(Math.random() * rows)} ${Math.floor(Math.random() * cols)}`);

    if(!debug) {
        let timer;
        timer = setInterval(() => {
        	if(mem.size < noCells) {
        		loop();
        	} else {
				clearInterval(timer);
				window.addEventListener('keydown', play);
				reset();
				document.querySelectorAll('.btn').forEach(elem => { elem.disabled = false; });
        	}
        }, 0);
    } else {
        while(mem.size < noCells) 	loop();
		window.addEventListener('keydown', play);
		reset();
		document.querySelectorAll('.btn').forEach(elem => { elem.disabled = false; });
    }

	function loop() {

		let node;
		// if(mem.size % 9 === 0) {
		// 	node = getRandomItem(mem);
		// } else {
			node = memIt.next();
			if(node.done) {
				memIt = mem.entries();
				node = memIt.next();
			}
			node = node.value[0];
		// }

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
		shuffle(dir);
		for(let i = 0; i < 4; ++i) {
			let newX = x + dir[i][0];
			let newY = y + dir[i][1];
			if(newX >= 0 && newY >= 0 && newX < rows && newY < cols && !mem.has(`${newX} ${newY}`)) {
				neigh.add(`${newX} ${newY}`);
			}
		}
		return neigh;
	}

	function shuffle(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

	function getRandomItem(mySet) {
		mySet = Array.from(mySet);
		return mySet[Math.floor(Math.random() * mySet.length)];
	}
}

export {mazeGen};