import {rows, cols, pathWidth} from '../index.js';
import {getCell, fullGrid, borderGrid} from '../helper.js';

export async function prim() {

    await borderGrid();
    await fullGrid();
    
    //             E       S        W        N
    const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    
    let frontierSet = new Set();
    let vis =  [...Array(rows)].map(x=>Array(cols).fill(false));

    let x = Math.floor(Math.random() * rows);
    let y = Math.floor(Math.random() * cols);
    vis[x][y] = true;
    let frontier = graph(x, y, 'out');
    for(let i = 0; i < frontier.length; ++i)     frontierSet.add(`${frontier[i][0]} ${frontier[i][1]}`);
    
    while(frontierSet.size > 0) {

        let randomItem = getRandomItem(frontierSet);
        frontierSet.delete(randomItem);
        randomItem = randomItem.split(' ');

        let x = Number(randomItem[0]);
        let y = Number(randomItem[1]);
        vis[x][y] = true;
        
        let inGraphCells = [...graph(x, y, 'in')];
        let inGraphCell = inGraphCells[Math.floor(Math.random() * inGraphCells.length)];
        connect(x, y, inGraphCell);        
        
        let nxtFrontiers = [...graph(x, y, 'out')];
        for(let i = 0; i < nxtFrontiers.length; ++i) {
            frontierSet.add(`${nxtFrontiers[i][0]} ${nxtFrontiers[i][1]}`);
        }

        await new Promise(r => setTimeout(r, 0));
    }

    function graph(x, y, present) {
        let a = [];
        for(let i = 0; i < 4; ++i) {
            let newX = x + dir[i][0];
            let newY = y + dir[i][1];
            if(newX >= 0 && newY >= 0 && newX < rows && newY < cols) {
                if(present === 'in' && vis[newX][newY])     a.push([newX, newY]);
                if(present === 'out' && !vis[newX][newY])   a.push([newX, newY]);
            }
        }
        return a;
    }

    function connect(x, y, inGraphCell) {
        if(x === inGraphCell[0]) {
            if(y > inGraphCell[1]) {
                getCell(x, y).style.borderLeftWidth = pathWidth;
                getCell(x, y).style.borderLeftColor = 'gray';
                getCell(x, y-1).style.borderRightWidth = pathWidth;
                getCell(x, y-1).style.borderRightColor = 'gray';
            } else {
                getCell(x, y).style.borderRightWidth = pathWidth;
                getCell(x, y).style.borderRightColor = 'gray';
                getCell(x, y+1).style.borderLeftWidth = pathWidth;
                getCell(x, y+1).style.borderLeftColor = 'gray';
            }
        } else {
            if(x > inGraphCell[0]) {
                getCell(x, y).style.borderTopWidth = pathWidth;
                getCell(x, y).style.borderToptColor = 'gray';
                getCell(x-1, y).style.borderBottomWidth = pathWidth;
                getCell(x-1, y).style.borderBottomColor = 'gray';
            } else {
                getCell(x, y).style.borderBottomWidth = pathWidth;
                getCell(x, y).style.borderBottomColor = 'gray';
                getCell(x+1, y).style.borderTopWidth = pathWidth;
                getCell(x+1, y).style.borderTopColor = 'gray';
            }
        }
    }

    function getRandomItem(mySet) {
        mySet = Array.from(mySet);
		return mySet[Math.floor(Math.random() * mySet.length)];
    }
}
