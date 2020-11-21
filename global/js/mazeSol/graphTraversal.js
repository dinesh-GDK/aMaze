import {rows, cols, pathWidth, animation} from '../index.js';
import {getCell, plotPath} from '../helper.js';

export async function graphTraversal(type) {

	const dir = [[1, 0], [0, 1], [-1, 0], [0, -1]];
	const target = {
        x: rows-1,
        y: cols-1
    };

    let grid = [];
    for(let i = 0; i < rows; ++i) {
        grid[i] = [];
        for(let j = 0; j < cols; ++j) {
            grid[i][j] = {
                x: i,
                y: j,
                visited: false,
                source: {
                    x: 'none',
                    y: 'none'
                }
            };
        }
	}
	
	grid[window.pX][window.pY].visited = true;
    grid[window.pX][window.pY].source.x = window.pX;
    grid[window.pX][window.pY].source.y = window.pY;
    
	let mem = new Array();
	mem.push(grid[window.pX][window.pY]);

	while(true) {
		
		let node;
		if(type === 'dfs')	node = mem.pop();
		else				node = mem.shift();

		grid[node.x][node.y].visited = true;
		let currCell = getCell(node.x, node.y);
        currCell.style.animation = animation.explore;

		if(node.x === target.x && node.y === target.y) {
			plotPath(grid);
			return;
		}

		let wallState = [currCell.style.borderBottomWidth === pathWidth,
						currCell.style.borderRightWidth === pathWidth,
						currCell.style.borderTopWidth === pathWidth,
						currCell.style.borderLeftWidth === pathWidth];

		for(let i = 0; i < 4; ++i) {
			let newX = node.x + dir[i][0];
            let newY = node.y + dir[i][1];
			let inside = newX >=0 && newY >= 0 && newX < rows && newY < cols;
			if(inside && wallState[i] && !grid[newX][newY].visited) {
				grid[newX][newY].source.x = node.x;
                grid[newX][newY].source.y = node.y;
				mem.push(grid[newX][newY]);
			}
		}

        await new Promise(r => setTimeout(r, 0));
	}
}
