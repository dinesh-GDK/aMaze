import {rows, cols, wallWidth, animation} from './aMaze.js';
import {getCell, pathPlot, changePlayer} from './helper.js';

function aStar() {

    class PriorityQueue {

        constructor() {
            this.entities = [];
        }
    
        enque(element) {
            if (this.entities.length === 0){ 
                this.entities.push(element);
            } else {
                let added = false;
                for (let i = 0; i < this.entities.length; i++){
                     if (element.heu < this.entities[i].heu) {
                        this.entities.splice(i, 0, element);
                        added = true;
                        break;
                    }
                }
                if (!added){
                    this.entities.push(element);
                }
            }
        }
    
        fetch() {
            return this.entities.shift();
        }
    }

    const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const MAX = rows*cols;
    const target = {
        x: rows-1,
        y: cols-1
    };
    
    // elements in grid -> source of the node | graph weight | a* heuristic pre & post
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
                },
                weight: MAX,
                heu: Math.round( Math.sqrt((target.x - i)**2 + (target.y - j)**2) * 10000 + Number.EPSILON ) / 10000
            };
        }
    }

    grid[window.pX][window.pY].visited = true;
    grid[window.pX][window.pY].source.x = window.pX;
    grid[window.pX][window.pY].source.y = window.pY;
    grid[window.pX][window.pY].weight = 0;

    let mem = new PriorityQueue();
    mem.enque(grid[window.pX][window.pY]);

    let it = 0;
    while(mem.length !== 0 && it < 10000) {
        it++;

        let node = mem.fetch();
        console.log(node)

        grid[node.x][node.y].visited = true;

        let currCell = getCell(node.x, node.y);
        currCell.style.animation = animation.explore;

        if(node.x === target.x && node.y === target.y) {
            break;
        }

		let wallState = [currCell.style.borderRightWidth === wallWidth,
						currCell.style.borderBottomWidth === wallWidth,
						currCell.style.borderLeftWidth === wallWidth,
                        currCell.style.borderTopWidth === wallWidth];
                        
        for(let i = 0; i < 4; ++i) {
            let newX = node.x + dir[i][0];
            let newY = node.y + dir[i][1];
            let inside = newX >=0 && newY >= 0 && newX < rows && newY < cols;
			if(inside && wallState[i] && !grid[newX][newY].visited) {
                grid[newX][newY].source.x = node.x;
                grid[newX][newY].source.y = node.y;
                grid[newX][newY].weight = node.weight + 1;
                grid[newX][newY].heu += node.weight;
                let asd = Object.assign({}, grid[newX][newY]);
                mem.enque(asd);
            }
        }
    }

    let node = grid[target.x][target.y];
    // console.log(window.pX, window.pY);
    it = 0;
    while(node.x !== window.pX || node.y !== window.pY) {
        // console.log(node);
        getCell(node.x, node.y).style.animation = animation.path;
        node = grid[node.source.x][node.source.y];
    }


    // console.log(grid);

}

export {aStar};