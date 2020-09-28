import {rows, cols, wallWidth, animation} from './aMaze.js';
import {getCell, pathPlot, changePlayer} from './helper.js';

function graphTraversal(type) {

    document.onkeydown = '';

	const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
	const destination = `${rows-1} ${cols-1}`;

    let grid = [...Array(rows)].map(e => Array(cols).fill(0));
    
	let mem = new Array();  // stack
    mem.push([`${pX} ${pY}`]);

	let timer;
	timer = setInterval(() => loop(), 0);

	function loop() {
		
		let currPath;
		if(type === 'dfs')	currPath = mem.pop();
		else				currPath = mem.shift();

		let end = currPath[currPath.length - 1];
		let endX = Number(end.split(' ')[0]);
        let endY = Number(end.split(' ')[1]);
		grid[endX][endY] = 1;
		getCell(endX, endY).style.animation = animation.explore;

		if(end === destination) {
			clearInterval(timer);
			window.mainPath = window.mainPath.concat(currPath.slice(1, currPath.length-1));
			pathPlot();
			changePlayer(window.pX, window.pY, rows-1, cols-1);
			return;
		}

		let currCell = getCell(endX, endY);
		let wallState = [currCell.style.borderRightWidth === wallWidth,
						currCell.style.borderBottomWidth === wallWidth,
						currCell.style.borderLeftWidth === wallWidth,
						currCell.style.borderTopWidth === wallWidth];

		for(let i = 0; i < 4; ++i) {
			let newX = endX + dir[i][0];
			let newY = endY + dir[i][1];
			let inside = newX >=0 && newY >= 0 && newX < rows && newY < cols;
			if(inside && wallState[i] && !grid[newX][newY]) {
				currPath.push(`${newX} ${newY}`);
				mem.push([...currPath]);
				currPath.pop();
			}
		}
	}
}

export {graphTraversal};