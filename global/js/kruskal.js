import {rows, cols, wallWidth} from './aMaze.js';
import {changePlayer, getCell, play, reset} from './helper.js';

export async function kruskal(rows, cols) {

    // 0 -> right | 1 -> bottom
    const dir = [[0, 1], [1, 0]];
    let grid = [];
    let edges = [];
    let setNo = 0;
    for(let i = 0; i < rows; ++i) {
        grid[i] = [];
        for(let j = 0; j < cols; ++j) {
            grid[i][j] = setNo++;
            // x y dir 
            for(let k = 0; k < 2; ++k) {
                edges.push(`${i} ${j} ${k}`);
            }
        }
    }

    shuffle(edges);
    let edgesIt = edges.entries();

    while(true) {

        let split = edgesIt.next();
        if(split.done)  break;

        split = split.value[1].split(' ');
        
        let pt1 = { x: Number(split[0]), y: Number(split[1]) };
        let pt2 = { x: Number(split[0]) + dir[Number(split[2])][0], y: Number(split[1]) + dir[Number(split[2])][1] };

        if(pt2.x >= rows || pt2.y >= cols)      continue; // 9 to 10

        if(grid[pt1.x][pt1.y] !== grid[pt2.x][pt2.y]) {
            update(grid[pt1.x][pt1.y], grid[pt2.x][pt2.y]);
            connect(pt1, pt2, split[2]);
            await new Promise(r => setTimeout(r, 0));

        }
    }

    function shuffle(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    function update(from, to) {
        for(let i = 0; i < rows; ++i) {
            for(let j = 0; j < cols; ++j) {
                if(grid[i][j] === from)     grid[i][j] = to;
            }
        }
    }

    function connect(pt1, pt2, dir) {
        if(dir === '0') {
            // horizontal
            getCell(pt1.x, pt1.y).style.borderRightWidth = '1px';
            getCell(pt2.x, pt2.y).style.borderLeftWidth = '1px';

        } else {
            // vertical
            getCell(pt1.x, pt1.y).style.borderBottomWidth = '1px';
            getCell(pt2.x, pt2.y).style.borderTopWidth = '1px';

        }
    }
}
