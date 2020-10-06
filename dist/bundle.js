/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./global/js/aMaze.js":
/*!****************************!*\
  !*** ./global/js/aMaze.js ***!
  \****************************/
/*! exports provided: rows, cols, cellDim, wallWidth, animation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rows\", function() { return rows; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cols\", function() { return cols; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cellDim\", function() { return cellDim; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wallWidth\", function() { return wallWidth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"animation\", function() { return animation; });\n/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper.js */ \"./global/js/helper.js\");\n/* harmony import */ var _mazeGen_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mazeGen.js */ \"./global/js/mazeGen.js\");\n/* harmony import */ var _graphTraversal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graphTraversal.js */ \"./global/js/graphTraversal.js\");\n/* harmony import */ var _aStar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aStar.js */ \"./global/js/aStar.js\");\n\r\n\r\n\r\n\r\n\r\nconst minRow = 10;\r\nconst minCol = 10;\r\nconst cellDim = 25;\r\nconst wallWidth = '1px';\r\nconst animation = {\r\n    explore: 'explore 0.5s forwards',\r\n    path: 'path 1s forwards',\r\n    clear: 'clear 0s forwards',\r\n    target: 'target 2s infinite'\r\n};\r\n\r\nlet rows = Math.floor(window.innerHeight/cellDim) - 3;\r\nlet cols = Math.floor(window.innerWidth/cellDim) - 20;\r\n\r\n// rows = rows > minRow ? rows : minRow;\r\n// cols = cols > minCol ? cols : minCol;\r\n\r\nrows = 15;\r\ncols = 15;\r\n\r\ndocument.getElementById('fullResetBtn').onclick = () => {\r\n    document.querySelectorAll('button').forEach(elem => { elem.disabled = true; });\r\n    Object(_helper_js__WEBPACK_IMPORTED_MODULE_0__[\"createGrid\"])();\r\n    Object(_mazeGen_js__WEBPACK_IMPORTED_MODULE_1__[\"mazeGen\"])(true);\r\n    // mazeGen();\r\n}\r\n\r\n//////////\r\nObject(_aStar_js__WEBPACK_IMPORTED_MODULE_3__[\"aStar\"])();\r\n\r\ndocument.getElementById('resetBtn').onclick = () => Object(_helper_js__WEBPACK_IMPORTED_MODULE_0__[\"reset\"])();\r\ndocument.getElementById('fullResetBtn').click();\r\n\r\ndocument.getElementById('go').onclick = () => {\r\n\r\n    let algo = document.getElementById('algo').value;\r\n\r\n    if(algo === 'Choose an Algorithm') {\r\n        alert('Choose an Algorithm to solve');\r\n    } else {\r\n        algoReset();\r\n        if(algo === 'dfs') {\r\n            Object(_graphTraversal_js__WEBPACK_IMPORTED_MODULE_2__[\"graphTraversal\"])('dfs');\r\n    \r\n        } else if(algo === 'bfs') {\r\n            Object(_graphTraversal_js__WEBPACK_IMPORTED_MODULE_2__[\"graphTraversal\"])('bfs');\r\n        } else if(algo === 'astar') {\r\n            Object(_aStar_js__WEBPACK_IMPORTED_MODULE_3__[\"aStar\"])();\r\n        }\r\n    }\r\n\r\n    function algoReset() {\r\n        window.removeEventListener('keydown', _helper_js__WEBPACK_IMPORTED_MODULE_0__[\"play\"]);\r\n\r\n        let idx = window.mainPath.indexOf(`${window.pX} ${window.pY}`);\r\n        window.mainPath.length = idx + 1;\r\n        document.getElementById('count').innerHTML = mainPath.length - 1;\r\n\r\n        Object(_helper_js__WEBPACK_IMPORTED_MODULE_0__[\"getCell\"])(rows-1, cols-1).innerHTML = ``;\r\n        Object(_helper_js__WEBPACK_IMPORTED_MODULE_0__[\"getCell\"])(window.pX, window.pY).innerHTML = `<span class='player'></span>`;\r\n        for(let i = 0; i < rows; ++i) {\r\n            for(let j = 0; j < cols; ++j) {\r\n                Object(_helper_js__WEBPACK_IMPORTED_MODULE_0__[\"getCell\"])(i, j).style.animation = animation.clear;\r\n            }\r\n        }\r\n        Object(_helper_js__WEBPACK_IMPORTED_MODULE_0__[\"getCell\"])(rows - 1, cols - 1).style.animation = animation.target;\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./global/js/aMaze.js?");

/***/ }),

/***/ "./global/js/aStar.js":
/*!****************************!*\
  !*** ./global/js/aStar.js ***!
  \****************************/
/*! exports provided: aStar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"aStar\", function() { return aStar; });\n/* harmony import */ var _aMaze_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aMaze.js */ \"./global/js/aMaze.js\");\n/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper.js */ \"./global/js/helper.js\");\n\r\n\r\n\r\nfunction aStar() {\r\n\r\n    class PriorityQueue {\r\n\r\n        constructor() {\r\n            this.entities = [];\r\n        }\r\n    \r\n        enque(element) {\r\n            if (this.entities.length === 0){ \r\n                this.entities.push(element);\r\n            } else {\r\n                let added = false;\r\n                for (let i = 0; i < this.entities.length; i++){\r\n                     if (element.heu < this.entities[i].heu) {\r\n                        this.entities.splice(i, 0, element);\r\n                        added = true;\r\n                        break;\r\n                    }\r\n                }\r\n                if (!added){\r\n                    this.entities.push(element);\r\n                }\r\n            }\r\n        }\r\n    \r\n        fetch() {\r\n            return this.entities.shift();\r\n        }\r\n    }\r\n\r\n    const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];\r\n    const MAX = _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"rows\"]*_aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"cols\"];\r\n    const target = {\r\n        x: _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"rows\"]-1,\r\n        y: _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"cols\"]-1\r\n    };\r\n    \r\n    // elements in grid -> source of the node | graph weight | a* heuristic pre & post\r\n    let grid = [];\r\n    for(let i = 0; i < _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"rows\"]; ++i) {\r\n        grid[i] = [];\r\n        for(let j = 0; j < _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"cols\"]; ++j) {\r\n            grid[i][j] = {\r\n                x: i,\r\n                y: j,\r\n                visited: false,\r\n                source: 'none',\r\n                weight: MAX,\r\n                heu: Math.round( Math.sqrt((target.x - i)**2 + (target.y - j)**2) * 10000 + Number.EPSILON ) / 10000\r\n            };\r\n        }\r\n    }\r\n\r\n    // console.log(grid);\r\n\r\n    \r\n    \r\n    let a = new PriorityQueue();\r\n    a.enque(grid[1][2]);\r\n    a.enque(grid[3][4]);\r\n\r\n    console.log(a);\r\n    console.log(a.fetch());\r\n    console.log(a);\r\n\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./global/js/aStar.js?");

/***/ }),

/***/ "./global/js/graphTraversal.js":
/*!*************************************!*\
  !*** ./global/js/graphTraversal.js ***!
  \*************************************/
/*! exports provided: graphTraversal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"graphTraversal\", function() { return graphTraversal; });\n/* harmony import */ var _aMaze_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aMaze.js */ \"./global/js/aMaze.js\");\n/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper.js */ \"./global/js/helper.js\");\n\r\n\r\n\r\nfunction graphTraversal(type) {\r\n\r\n\tconst dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];\r\n\tconst destination = `${_aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"rows\"]-1} ${_aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"cols\"]-1}`;\r\n\r\n    let grid = [...Array(_aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"rows\"])].map(e => Array(_aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"cols\"]).fill(0));\r\n    \r\n\tlet mem = new Array();  // stack\r\n    mem.push([`${window.pX} ${window.pY}`]);\r\n\r\n\tlet timer;\r\n\ttimer = setInterval(() => loop(), 0);\r\n\r\n\tfunction loop() {\r\n\t\t\r\n\t\tlet currPath;\r\n\t\tif(type === 'dfs')\tcurrPath = mem.pop();\r\n\t\telse\t\t\t\tcurrPath = mem.shift();\r\n\r\n\t\tlet end = currPath[currPath.length - 1];\r\n\t\tlet endX = Number(end.split(' ')[0]);\r\n        let endY = Number(end.split(' ')[1]);\r\n\t\tgrid[endX][endY] = 1;\r\n\t\tObject(_helper_js__WEBPACK_IMPORTED_MODULE_1__[\"getCell\"])(endX, endY).style.animation = _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"animation\"].explore;\r\n\r\n\t\tif(end === destination) {\r\n\t\t\tclearInterval(timer);\r\n\t\t\twindow.mainPath = window.mainPath.concat(currPath.slice(1, currPath.length-1));\r\n\t\t\tObject(_helper_js__WEBPACK_IMPORTED_MODULE_1__[\"pathPlot\"])();\r\n\t\t\tObject(_helper_js__WEBPACK_IMPORTED_MODULE_1__[\"changePlayer\"])(window.pX, window.pY, _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"rows\"]-1, _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"cols\"]-1);\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\tlet currCell = Object(_helper_js__WEBPACK_IMPORTED_MODULE_1__[\"getCell\"])(endX, endY);\r\n\t\tlet wallState = [currCell.style.borderRightWidth === _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"wallWidth\"],\r\n\t\t\t\t\t\tcurrCell.style.borderBottomWidth === _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"wallWidth\"],\r\n\t\t\t\t\t\tcurrCell.style.borderLeftWidth === _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"wallWidth\"],\r\n\t\t\t\t\t\tcurrCell.style.borderTopWidth === _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"wallWidth\"]];\r\n\r\n\t\tfor(let i = 0; i < 4; ++i) {\r\n\t\t\tlet newX = endX + dir[i][0];\r\n\t\t\tlet newY = endY + dir[i][1];\r\n\t\t\tlet inside = newX >=0 && newY >= 0 && newX < _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"rows\"] && newY < _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"cols\"];\r\n\t\t\tif(inside && wallState[i] && !grid[newX][newY]) {\r\n\t\t\t\tcurrPath.push(`${newX} ${newY}`);\r\n\t\t\t\tmem.push([...currPath]);\r\n\t\t\t\tcurrPath.pop();\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./global/js/graphTraversal.js?");

/***/ }),

/***/ "./global/js/helper.js":
/*!*****************************!*\
  !*** ./global/js/helper.js ***!
  \*****************************/
/*! exports provided: getCell, createGrid, play, changePlayer, pathPlot, reset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCell\", function() { return getCell; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createGrid\", function() { return createGrid; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"play\", function() { return play; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changePlayer\", function() { return changePlayer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pathPlot\", function() { return pathPlot; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reset\", function() { return reset; });\n/* harmony import */ var _aMaze_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aMaze.js */ \"./global/js/aMaze.js\");\n\r\n\r\nfunction getCell(i, j) {\r\n    return document.getElementById(String(i) + ' ' + String(j));\r\n}\r\n\r\n// ****************************** grid **************************************** //\r\n\r\nfunction createGrid() {\r\n\r\n    const maze = document.getElementById('maze');\r\n    maze.innerHTML = '';\r\n\r\n    for(let i = 0; i < _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"rows\"]; ++i) {\r\n        const maze_row = document.createElement('tr');\r\n        for(let j = 0; j < _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"cols\"]; ++j) {\r\n            maze_row.appendChild(createCell(i, j));\r\n        } \r\n        maze.appendChild(maze_row);\r\n\t}\r\n\t\r\n    function createCell(i, j) {\r\n\r\n        const cell = document.createElement('td');\r\n        cell.className = 'cell';\r\n        cell.id = String(i) + ' ' + String(j);\r\n\r\n        cell.style.height = String(_aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"cellDim\"]) + 'px';\r\n\t\tcell.style.width  = String(_aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"cellDim\"]) + 'px';\r\n        return cell;\r\n    }\r\n}\r\n\r\n// ****************************** navigation ********************************** //\r\n\r\nconst play = (ev) => {\r\n    if(ev.key === 'ArrowUp' && getCell(window.pX, window.pY).style.borderTopWidth === _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"wallWidth\"]) {\r\n        changePlayer(window.pX, window.pY, --window.pX, window.pY);\r\n        \r\n    } else if(ev.key === 'ArrowDown' && getCell(window.pX, window.pY).style.borderBottomWidth === _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"wallWidth\"]) {\r\n        changePlayer(window.pX, window.pY, ++window.pX, window.pY);\r\n\r\n    } else if(ev.key === 'ArrowRight' && getCell(window.pX, window.pY).style.borderRightWidth === _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"wallWidth\"]) {\r\n        changePlayer(window.pX, window.pY, window.pX, ++window.pY);\r\n\r\n    } else if(ev.key === 'ArrowLeft' && getCell(window.pX, window.pY).style.borderLeftWidth === _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"wallWidth\"]) {\r\n        changePlayer(window.pX, window.pY, window.pX, --window.pY);\r\n    }\r\n}\r\n\r\nfunction changePlayer(x, y, newX, newY) {\r\n\r\n\tgetCell(x, y).innerHTML = ``;\r\n\tgetCell(x, y).style.animation = _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"animation\"].path;\r\n\r\n\tgetCell(newX, newY).innerHTML = `<span class='player'></span>`;\r\n\tgetCell(newX, newY).style.animation = _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"animation\"].path;\r\n\r\n    window.mainPath.push(`${Number(newX)} ${Number(newY)}`);\r\n    document.getElementById('count').innerHTML = mainPath.length - 1;\r\n\r\n    if(newX === _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"rows\"]-1 && newY === _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"cols\"]-1) {\r\n        window.removeEventListener('keydown', play);\r\n        \r\n        let timer = setInterval(() => {\r\n            alert('Target Reached');\r\n            clearInterval(timer);\r\n        }, 1000);\r\n        \r\n    }\r\n}\r\n\r\nfunction pathPlot() {\r\n\tfor(let i = 0, l = window.mainPath.length; i < l; ++i) {\r\n\t\tlet x = Number(window.mainPath[i].split(' ')[0]);\r\n\t\tlet y = Number(window.mainPath[i].split(' ')[1]);\r\n\t\tgetCell(x, y).style.animation = _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"animation\"].path;\r\n\t}\r\n}\r\n\r\n// ********************************** reset *********************************** //\r\n\r\nfunction reset() {\r\n\r\n    window.addEventListener('keydown', play);\r\n\r\n    for(let i = 0; i < _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"rows\"]; ++i) {\r\n        for(let j = 0; j < _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"cols\"]; ++j) {\r\n            getCell(i, j).style.animation = _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"animation\"].clear;\r\n            getCell(i, j).innerHTML = '';\r\n        }\r\n    }\r\n\r\n    window.pX = 0;\r\n    window.pY = 0;\r\n    window.mainPath = new Array();\r\n    changePlayer(0, 0, 0, 0);\r\n    getCell(_aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"rows\"] - 1, _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"cols\"] - 1).style.animation = _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"animation\"].target;\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./global/js/helper.js?");

/***/ }),

/***/ "./global/js/mazeGen.js":
/*!******************************!*\
  !*** ./global/js/mazeGen.js ***!
  \******************************/
/*! exports provided: mazeGen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mazeGen\", function() { return mazeGen; });\n/* harmony import */ var _aMaze_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aMaze.js */ \"./global/js/aMaze.js\");\n/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper.js */ \"./global/js/helper.js\");\n\r\n\r\n\r\nfunction mazeGen(debug=false) {\r\n\r\n\twindow.removeEventListener('keydown', _helper_js__WEBPACK_IMPORTED_MODULE_1__[\"play\"]);\r\n\r\n\tconst dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];\r\n\tconst noCells = _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"rows\"] * _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"cols\"];\r\n\t\r\n\tlet mem = new Set();\r\n\tlet memIt = mem.entries();\r\n\r\n\tmem.add(`${Math.floor(Math.random() * _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"rows\"])} ${Math.floor(Math.random() * _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"cols\"])}`);\r\n\r\n    if(!debug) {\r\n        let timer;\r\n        timer = setInterval(() => {\r\n        \tif(mem.size < noCells) {\r\n        \t\tloop();\r\n        \t} else {\r\n\t\t\t\tclearInterval(timer);\r\n\t\t\t\twindow.addEventListener('keydown', _helper_js__WEBPACK_IMPORTED_MODULE_1__[\"play\"]);\r\n\t\t\t\tObject(_helper_js__WEBPACK_IMPORTED_MODULE_1__[\"reset\"])();\r\n\t\t\t\tdocument.querySelectorAll('button').forEach(elem => { elem.disabled = false; });\r\n        \t}\r\n        }, 0);\r\n    } else {\r\n        while(mem.size < noCells) \tloop();\r\n\t\twindow.addEventListener('keydown', _helper_js__WEBPACK_IMPORTED_MODULE_1__[\"play\"]);\r\n\t\tObject(_helper_js__WEBPACK_IMPORTED_MODULE_1__[\"reset\"])();\r\n\t\tdocument.querySelectorAll('button').forEach(elem => { elem.disabled = false; });\r\n    }\r\n\r\n\tfunction loop() {\r\n\r\n\t\tlet node;\r\n\t\tif(mem.size % 9 === 0) {\r\n\t\t\tnode = getRandomItem(mem);\r\n\t\t} else {\r\n\t\t\tnode = memIt.next();\r\n\t\t\tif(node.done) {\r\n\t\t\t\tmemIt = mem.entries();\r\n\t\t\t\tnode = memIt.next();\r\n\t\t\t}\r\n\t\t\tnode = node.value[0];\r\n\t\t}\r\n\r\n\t\tlet x = Number(node.split(' ')[0]);\r\n\t\tlet y = Number(node.split(' ')[1]);\r\n\r\n\t\tlet neigh = frontierCells(x, y);\r\n\r\n\t\tif(neigh.size) {\r\n\t\t\tlet select_neigh = getRandomItem(neigh);\r\n\t\t\tmem.add(select_neigh);\r\n\t\t\tlet n_x = Number(select_neigh.split(' ')[0]);\r\n\t\t\tlet n_y = Number(select_neigh.split(' ')[1]);\r\n\r\n\t\t\tif(x === n_x) {\r\n\t\t\t\tif(y > n_y) {\r\n\t\t\t\t\tObject(_helper_js__WEBPACK_IMPORTED_MODULE_1__[\"getCell\"])(x, y).style.borderLeftWidth = _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"wallWidth\"];\r\n\t\t\t\t\tObject(_helper_js__WEBPACK_IMPORTED_MODULE_1__[\"getCell\"])(x, y-1).style.borderRightWidth = _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"wallWidth\"];\r\n\t\t\t\t} else {\r\n\t\t\t\t\tObject(_helper_js__WEBPACK_IMPORTED_MODULE_1__[\"getCell\"])(x, y).style.borderRightWidth = _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"wallWidth\"];\r\n\t\t\t\t\tObject(_helper_js__WEBPACK_IMPORTED_MODULE_1__[\"getCell\"])(x, y+1).style.borderLeftWidth = _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"wallWidth\"];\r\n\t\t\t\t}\r\n\t\t\t} else {\r\n\t\t\t\tif(x > n_x) {\r\n\t\t\t\t\tObject(_helper_js__WEBPACK_IMPORTED_MODULE_1__[\"getCell\"])(x, y).style.borderTopWidth = _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"wallWidth\"];\r\n\t\t\t\t\tObject(_helper_js__WEBPACK_IMPORTED_MODULE_1__[\"getCell\"])(x-1, y).style.borderBottomWidth = _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"wallWidth\"];\r\n\t\t\t\t} else {\r\n\t\t\t\t\tObject(_helper_js__WEBPACK_IMPORTED_MODULE_1__[\"getCell\"])(x, y).style.borderBottomWidth = _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"wallWidth\"];\r\n\t\t\t\t\tObject(_helper_js__WEBPACK_IMPORTED_MODULE_1__[\"getCell\"])(x+1, y).style.borderTopWidth = _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"wallWidth\"];\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\tfunction frontierCells(x, y) {\r\n\t\tlet neigh = new Set();\r\n\t\tfor(let i = 0; i < 4; ++i) {\r\n\t\t\tlet newX = x + dir[i][0];\r\n\t\t\tlet newY = y + dir[i][1];\r\n\t\t\tif(newX >= 0 && newY >= 0 && newX < _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"rows\"] && newY < _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"cols\"] && !mem.has(`${newX} ${newY}`)) {\r\n\t\t\t\tneigh.add(`${newX} ${newY}`);\r\n\t\t\t}\r\n\t\t}\r\n\t\treturn neigh;\r\n\t}\r\n\r\n\tfunction getRandomItem(mySet) {\r\n\t\tmySet = Array.from(mySet);\r\n\t\treturn mySet[Math.floor(Math.random() * mySet.length)];\r\n\t}\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./global/js/mazeGen.js?");

/***/ }),

/***/ "./global/style/style.scss":
/*!*********************************!*\
  !*** ./global/style/style.scss ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"bundle.css\");\n\n//# sourceURL=webpack:///./global/style/style.scss?");

/***/ }),

/***/ 0:
/*!************************************************************!*\
  !*** multi ./global/js/aMaze.js ./global/style/style.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./global/js/aMaze.js */\"./global/js/aMaze.js\");\nmodule.exports = __webpack_require__(/*! ./global/style/style.scss */\"./global/style/style.scss\");\n\n\n//# sourceURL=webpack:///multi_./global/js/aMaze.js_./global/style/style.scss?");

/***/ })

/******/ });