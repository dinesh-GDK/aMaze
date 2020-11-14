import {rows, cols, wallWidth} from './aMaze.js';
import {getCell, play, reset} from './helper.js';

export async function recursiveDivision(x1, y1, x2, y2) {

    if(x2 - x1 < 2 || y2 - y1 < 2)      return;

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
            if(i === open)     continue;
            getCell(split-1, i).style.borderBottomWidth = '5px';
            getCell(split, i).style.borderTopWidth = '5px';
            await new Promise(r => setTimeout(r, 30));
        }

        recursiveDivision(x1, y1, split, y2);
        recursiveDivision(split, y1, x2, y2);

    } else {
        // vertical
        let split = getRandom(y1+1, y2-1);
        let open = getRandom(x1, x2-1);

        for(let i = x1; i < x2; ++i) {
            if(i === open)      continue;
            getCell(i, split-1).style.borderRightWidth = '5px';
            getCell(i, split).style.borderLeftWidth = '5px';
            await new Promise(r => setTimeout(r, 30));
        }
        
        recursiveDivision(x1, y1, x2, split);
        recursiveDivision(x1, split, x2, y2);
    }

    function getRandom(min, max) {
        // min and max inclusive
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
