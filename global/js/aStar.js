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
                source: 'none',
                weight: MAX,
                heu: Math.round( Math.sqrt((target.x - i)**2 + (target.y - j)**2) * 10000 + Number.EPSILON ) / 10000
            };
        }
    }

    // console.log(grid);

    
    
    let a = new PriorityQueue();
    a.enque(grid[1][2]);
    a.enque(grid[3][4]);

    console.log(a);
    console.log(a.fetch());
    console.log(a);


}

export {aStar};