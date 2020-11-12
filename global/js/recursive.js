import {rows, cols, wallWidth} from './aMaze.js';
import {getCell, play, reset} from './helper.js';

function recursive(x1, y1, x2, y2) {

    if(x2 - x1 < 2 || y2 - y1 < 2)   return;

    if(x2 - x1 >= y2 - y1) {
        // horizontal
        let split = getRandom(x1+1, x2-1);
        let open  = getRandom(y1, y2-1);
        console.log(split);
        for(let i = y1; i < y2; ++i) {
            if(i === open)     continue;
            getCell(split-1, i).style.borderBottomWidth = '5px';
            getCell(split, i).style.borderTopWidth = '5px';
        }

        recursive(x1, y1, split, y2);
        recursive(split, y1, x2, y2);

    } else {
        // vertical
        let split = getRandom(y1+1, y2-1);
        let open = getRandom(x1, x2-1);

        for(let i = x1; i < x2; ++i) {
            if(i === open)      continue;
            getCell(i, split-1).style.borderRightWidth = '5px';
            getCell(i, split).style.borderLeftWidth = '5px';
        }

        // console.log(split);
        recursive(x1, y1, x2, split);
        recursive(x1, split, x2, y2);

    }

    function getRandom(min, max) {
        // min and max inclusive
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

export {recursive};