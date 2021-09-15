import {pathWidth} from '../index.js';
import {getCell, borderGrid} from '../helper.js';

export async function recursiveDivision(x1, y1, x2, y2, border=false) {

    if(border)      await borderGrid();

    if(x2 - x1 < 2) {
        for(let i = y1; i < y2-1; ++i) {
            let c1 = getCell(x1, i).style;
            let c2 = getCell(x1, i+1).style;
            c1.borderRightWidth = pathWidth;
            c1.borderRightColor = 'gray';
            c2.borderLeftWidth = pathWidth;
            c2.borderLeftColor = 'gary';
        }
        
        return;
    }

    if(y2 - y1 < 2) {
        for(let i = x1; i < x2-1; ++i) {
            let c1 = getCell(i, y1).style;
            let c2 = getCell(i+1, y1).style;
            c1.borderBottomWidth = pathWidth;
            c1.borderBottomColor = 'gray';
            c2.borderTopWidth = pathWidth;
            c2.borderTopColor = 'gray';
        }
        
        return;
    }

    let orientation;
    if(x2 - x1 > y2 - y1) {
        orientation = 0;
    } else if(x2 - x1 < y2 - y1) {
        orientation = 1
    } else {
        orientation = getRandom(0, 1);
    }

    if(orientation === 0) {
        // horizontal
        let split = getRandom(x1+1, x2-1);
        let open  = getRandom(y1, y2-1);

        for(let i = y1; i < y2; ++i) {
            if(i === open) {
                getCell(split-1, i).style.borderBottomWidth = pathWidth;
                getCell(split-1, i).style.borderBottomColor = 'gray';
                getCell(split, i).style.borderTopWidth = pathWidth;
                getCell(split, i).style.borderTopColor = 'gray';
            } else {
                getCell(split-1, i).style.borderBottomColor = 'black';
                getCell(split, i).style.borderTopColor = 'black';
            }
            await new Promise(r => setTimeout(r, 10));
        }

        await recursiveDivision(x1, y1, split, y2);
        await recursiveDivision(split, y1, x2, y2);

    } else {
        // vertical
        let split = getRandom(y1+1, y2-1);
        let open = getRandom(x1, x2-1);

        for(let i = x1; i < x2; ++i) {
            if(i === open){
                getCell(i, split-1).style.borderRightWidth = pathWidth;
                getCell(i, split-1).style.borderRightColor = 'gray';
                getCell(i, split).style.borderLeftWidth = pathWidth;    
                getCell(i, split).style.borderLeftColor = 'gray';    
            } else {
                getCell(i, split-1).style.borderRightColor = 'black';
                getCell(i, split).style.borderLeftColor = 'black';
            }
            await new Promise(r => setTimeout(r, 10));
        }
        
        await recursiveDivision(x1, y1, x2, split);
        await recursiveDivision(x1, split, x2, y2);
    }

    function getRandom(min, max) {
        // min and max inclusive
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
