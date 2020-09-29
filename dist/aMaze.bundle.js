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
/******/ 	return __webpack_require__(__webpack_require__.s = "./global/js/aMaze.js");
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rows\", function() { return rows; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cols\", function() { return cols; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cellDim\", function() { return cellDim; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wallWidth\", function() { return wallWidth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"animation\", function() { return animation; });\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/style.scss */ \"./global/style/style.scss\");\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper.js */ \"./global/js/helper.js\");\n/* harmony import */ var _mazeGen_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mazeGen.js */ \"./global/js/mazeGen.js\");\n/* harmony import */ var _graphTraversal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graphTraversal.js */ \"./global/js/graphTraversal.js\");\n\r\n\r\n\r\n\r\n\r\nconst minRow = 25;\r\nconst minCol = 38;\r\nconst cellDim = 25;\r\nconst wallWidth = '1px';\r\nconst animation = {\r\n    explore: 'explore 0.25s forwards',\r\n    path: 'path 0.25s forwards',\r\n    clear: 'clear 0s forwards',\r\n    target: 'target 2s infinite'\r\n};\r\n\r\nlet rows = Math.floor(window.innerHeight/cellDim) - 15;\r\nlet cols = Math.floor(window.innerWidth/cellDim) - 2;\r\n\r\n// rows = rows > minRow ? rows : minRow;\r\n// cols = cols > minCol ? cols : minCol;\r\n\r\nrows = 25;\r\ncols = 25;\r\n\r\n\r\n\r\ndocument.getElementById('fullResetBtn').onclick = () => {\r\n    Object(_helper_js__WEBPACK_IMPORTED_MODULE_1__[\"createGrid\"])();\r\n    Object(_mazeGen_js__WEBPACK_IMPORTED_MODULE_2__[\"mazeGen\"])(true);\r\n    Object(_helper_js__WEBPACK_IMPORTED_MODULE_1__[\"reset\"])();\r\n}\r\n\r\ndocument.getElementById('resetBtn').onclick = () => Object(_helper_js__WEBPACK_IMPORTED_MODULE_1__[\"reset\"])();\r\ndocument.getElementById('dfs').onclick = () => Object(_graphTraversal_js__WEBPACK_IMPORTED_MODULE_3__[\"graphTraversal\"])('dfs');\r\ndocument.getElementById('bfs').onclick = () => Object(_graphTraversal_js__WEBPACK_IMPORTED_MODULE_3__[\"graphTraversal\"])('bfs');\r\n\r\ndocument.getElementById('fullResetBtn').click();\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./global/js/aMaze.js?");

/***/ }),

/***/ "./global/js/graphTraversal.js":
/*!*************************************!*\
  !*** ./global/js/graphTraversal.js ***!
  \*************************************/
/*! exports provided: graphTraversal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"graphTraversal\", function() { return graphTraversal; });\n/* harmony import */ var _aMaze_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aMaze.js */ \"./global/js/aMaze.js\");\n/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper.js */ \"./global/js/helper.js\");\n\r\n\r\n\r\nfunction graphTraversal(type) {\r\n\r\n    document.onkeydown = '';\r\n\r\n\tconst dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];\r\n\tconst destination = `${_aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"rows\"]-1} ${_aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"cols\"]-1}`;\r\n\r\n    let grid = [...Array(_aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"rows\"])].map(e => Array(_aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"cols\"]).fill(0));\r\n    \r\n\tlet mem = new Array();  // stack\r\n    mem.push([`${pX} ${pY}`]);\r\n\r\n\tlet timer;\r\n\ttimer = setInterval(() => loop(), 0);\r\n\r\n\tfunction loop() {\r\n\t\t\r\n\t\tlet currPath;\r\n\t\tif(type === 'dfs')\tcurrPath = mem.pop();\r\n\t\telse\t\t\t\tcurrPath = mem.shift();\r\n\r\n\t\tlet end = currPath[currPath.length - 1];\r\n\t\tlet endX = Number(end.split(' ')[0]);\r\n        let endY = Number(end.split(' ')[1]);\r\n\t\tgrid[endX][endY] = 1;\r\n\t\tObject(_helper_js__WEBPACK_IMPORTED_MODULE_1__[\"getCell\"])(endX, endY).style.animation = _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"animation\"].explore;\r\n\r\n\t\tif(end === destination) {\r\n\t\t\tclearInterval(timer);\r\n\t\t\twindow.mainPath = window.mainPath.concat(currPath.slice(1, currPath.length-1));\r\n\t\t\tObject(_helper_js__WEBPACK_IMPORTED_MODULE_1__[\"pathPlot\"])();\r\n\t\t\tObject(_helper_js__WEBPACK_IMPORTED_MODULE_1__[\"changePlayer\"])(window.pX, window.pY, _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"rows\"]-1, _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"cols\"]-1);\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\tlet currCell = Object(_helper_js__WEBPACK_IMPORTED_MODULE_1__[\"getCell\"])(endX, endY);\r\n\t\tlet wallState = [currCell.style.borderRightWidth === _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"wallWidth\"],\r\n\t\t\t\t\t\tcurrCell.style.borderBottomWidth === _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"wallWidth\"],\r\n\t\t\t\t\t\tcurrCell.style.borderLeftWidth === _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"wallWidth\"],\r\n\t\t\t\t\t\tcurrCell.style.borderTopWidth === _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"wallWidth\"]];\r\n\r\n\t\tfor(let i = 0; i < 4; ++i) {\r\n\t\t\tlet newX = endX + dir[i][0];\r\n\t\t\tlet newY = endY + dir[i][1];\r\n\t\t\tlet inside = newX >=0 && newY >= 0 && newX < _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"rows\"] && newY < _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"cols\"];\r\n\t\t\tif(inside && wallState[i] && !grid[newX][newY]) {\r\n\t\t\t\tcurrPath.push(`${newX} ${newY}`);\r\n\t\t\t\tmem.push([...currPath]);\r\n\t\t\t\tcurrPath.pop();\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./global/js/graphTraversal.js?");

/***/ }),

/***/ "./global/js/helper.js":
/*!*****************************!*\
  !*** ./global/js/helper.js ***!
  \*****************************/
/*! exports provided: getCell, createGrid, play, changePlayer, pathPlot, reset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCell\", function() { return getCell; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createGrid\", function() { return createGrid; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"play\", function() { return play; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changePlayer\", function() { return changePlayer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pathPlot\", function() { return pathPlot; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reset\", function() { return reset; });\n/* harmony import */ var _aMaze_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aMaze.js */ \"./global/js/aMaze.js\");\n\r\n\r\nfunction getCell(i, j) {\r\n    return document.getElementById(String(i) + ' ' + String(j));\r\n}\r\n\r\n// ****************************** grid **************************************** //\r\n\r\nfunction createGrid() {\r\n\r\n    const maze = document.getElementById('maze');\r\n    maze.innerHTML = '';\r\n\r\n    for(let i = 0; i < _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"rows\"]; ++i) {\r\n        const maze_row = document.createElement('tr');\r\n        for(let j = 0; j < _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"cols\"]; ++j) {\r\n            maze_row.appendChild(createCell(i, j));\r\n        } \r\n        maze.appendChild(maze_row);\r\n\t}\r\n\t\r\n    function createCell(i, j) {\r\n\r\n        const cell = document.createElement('td');\r\n        cell.className = 'cell';\r\n        cell.id = String(i) + ' ' + String(j);\r\n\r\n        cell.style.height = String(_aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"cellDim\"]) + 'px';\r\n\t\tcell.style.width  = String(_aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"cellDim\"]) + 'px';\r\n        return cell;\r\n    }\r\n}\r\n\r\n// ****************************** navigation ********************************** //\r\n\r\nconst play = (ev) => {\r\n    if(ev.key === 'ArrowUp' && getCell(window.pX, window.pY).style.borderTopWidth === _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"wallWidth\"]) {\r\n        changePlayer(window.pX, window.pY, --window.pX, window.pY);\r\n        \r\n    } else if(ev.key === 'ArrowDown' && getCell(window.pX, window.pY).style.borderBottomWidth === _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"wallWidth\"]) {\r\n        changePlayer(window.pX, window.pY, ++window.pX, window.pY);\r\n\r\n    } else if(ev.key === 'ArrowRight' && getCell(window.pX, window.pY).style.borderRightWidth === _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"wallWidth\"]) {\r\n        changePlayer(window.pX, window.pY, window.pX, ++window.pY);\r\n\r\n    } else if(ev.key === 'ArrowLeft' && getCell(window.pX, window.pY).style.borderLeftWidth === _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"wallWidth\"]) {\r\n        changePlayer(window.pX, window.pY, window.pX, --window.pY);\r\n    }\r\n}\r\n\r\nfunction changePlayer(x, y, newX, newY) {\r\n\r\n\tgetCell(x, y).innerHTML = ``;\r\n\tgetCell(x, y).style.animation = _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"animation\"].path;\r\n\r\n\tgetCell(newX, newY).innerHTML = `<span class='player'/>`;\r\n\tgetCell(newX, newY).style.animation = _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"animation\"].path;\r\n\r\n    window.mainPath.push(`${Number(newX)} ${Number(newY)}`);\r\n    document.getElementById('count').innerHTML = mainPath.length - 1;\r\n}\r\n\r\nfunction pathPlot() {\r\n\tfor(let i = 0, l = window.mainPath.length; i < l; ++i) {\r\n\t\tlet x = Number(window.mainPath[i].split(' ')[0]);\r\n\t\tlet y = Number(window.mainPath[i].split(' ')[1]);\r\n\t\tgetCell(x, y).style.animation = _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"animation\"].path;\r\n\t}\r\n}\r\n\r\n// ********************************** reset *********************************** //\r\n\r\nfunction reset() {\r\n    const targetColor = 'green';\r\n\r\n    for(let i = 0; i < _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"rows\"]; ++i) {\r\n        for(let j = 0; j < _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"cols\"]; ++j) {\r\n            getCell(i, j).style.animation = _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"animation\"].clear;\r\n            getCell(i, j).innerHTML = '';\r\n        }\r\n    }\r\n\r\n    window.pX = 0;\r\n    window.pY = 0;\r\n    window.mainPath = new Array();\r\n    changePlayer(0, 0, 0, 0);\r\n    getCell(_aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"rows\"] - 1, _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"cols\"] - 1).style.animation = _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"animation\"].target;\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./global/js/helper.js?");

/***/ }),

/***/ "./global/js/mazeGen.js":
/*!******************************!*\
  !*** ./global/js/mazeGen.js ***!
  \******************************/
/*! exports provided: mazeGen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mazeGen\", function() { return mazeGen; });\n/* harmony import */ var _aMaze_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aMaze.js */ \"./global/js/aMaze.js\");\n/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper.js */ \"./global/js/helper.js\");\n\r\n\r\n\r\nfunction mazeGen(debug=false) {\r\n\r\n\tconst dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];\r\n\tconst noCells = _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"rows\"] * _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"cols\"];\r\n\t\r\n\tlet mem = new Set();\r\n\tlet memIt = mem.entries();\r\n\r\n\tmem.add(`${Math.floor(Math.random() * _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"rows\"])} ${Math.floor(Math.random() * _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"cols\"])}`);\r\n\r\n    if(!debug) {\r\n        let timer;\r\n        timer = setInterval(() => {\r\n        \tif(mem.size < noCells) {\r\n        \t\tloop();\r\n        \t} else {\r\n\t\t\t\tclearInterval(timer);\r\n\t\t\t\twindow.onkeydown = _helper_js__WEBPACK_IMPORTED_MODULE_1__[\"play\"];\r\n        \t}\r\n        }, 0);\r\n    } else {\r\n        while(mem.size < noCells) \tloop();\r\n\t\twindow.onkeydown = _helper_js__WEBPACK_IMPORTED_MODULE_1__[\"play\"];\r\n    }\r\n\r\n\tfunction loop() {\r\n\r\n\t\tlet node;\r\n\t\tif(mem.size % 9 === 0) {\r\n\t\t\tnode = getRandomItem(mem);\r\n\t\t} else {\r\n\t\t\tnode = memIt.next();\r\n\t\t\tif(node.done) {\r\n\t\t\t\tmemIt = mem.entries();\r\n\t\t\t\tnode = memIt.next();\r\n\t\t\t}\r\n\t\t\tnode = node.value[0];\r\n\t\t}\r\n\r\n\t\tlet x = Number(node.split(' ')[0]);\r\n\t\tlet y = Number(node.split(' ')[1]);\r\n\r\n\t\tlet neigh = frontierCells(x, y);\r\n\r\n\t\tif(neigh.size) {\r\n\t\t\tlet select_neigh = getRandomItem(neigh);\r\n\t\t\tmem.add(select_neigh);\r\n\t\t\tlet n_x = Number(select_neigh.split(' ')[0]);\r\n\t\t\tlet n_y = Number(select_neigh.split(' ')[1]);\r\n\r\n\t\t\tif(x === n_x) {\r\n\t\t\t\tif(y > n_y) {\r\n\t\t\t\t\tObject(_helper_js__WEBPACK_IMPORTED_MODULE_1__[\"getCell\"])(x, y).style.borderLeftWidth = _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"wallWidth\"];\r\n\t\t\t\t\tObject(_helper_js__WEBPACK_IMPORTED_MODULE_1__[\"getCell\"])(x, y-1).style.borderRightWidth = _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"wallWidth\"];\r\n\t\t\t\t} else {\r\n\t\t\t\t\tObject(_helper_js__WEBPACK_IMPORTED_MODULE_1__[\"getCell\"])(x, y).style.borderRightWidth = _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"wallWidth\"];\r\n\t\t\t\t\tObject(_helper_js__WEBPACK_IMPORTED_MODULE_1__[\"getCell\"])(x, y+1).style.borderLeftWidth = _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"wallWidth\"];\r\n\t\t\t\t}\r\n\t\t\t} else {\r\n\t\t\t\tif(x > n_x) {\r\n\t\t\t\t\tObject(_helper_js__WEBPACK_IMPORTED_MODULE_1__[\"getCell\"])(x, y).style.borderTopWidth = _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"wallWidth\"];\r\n\t\t\t\t\tObject(_helper_js__WEBPACK_IMPORTED_MODULE_1__[\"getCell\"])(x-1, y).style.borderBottomWidth = _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"wallWidth\"];\r\n\t\t\t\t} else {\r\n\t\t\t\t\tObject(_helper_js__WEBPACK_IMPORTED_MODULE_1__[\"getCell\"])(x, y).style.borderBottomWidth = _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"wallWidth\"];\r\n\t\t\t\t\tObject(_helper_js__WEBPACK_IMPORTED_MODULE_1__[\"getCell\"])(x+1, y).style.borderTopWidth = _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"wallWidth\"];\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\tfunction frontierCells(x, y) {\r\n\t\tlet neigh = new Set();\r\n\t\tfor(let i = 0; i < 4; ++i) {\r\n\t\t\tlet newX = x + dir[i][0];\r\n\t\t\tlet newY = y + dir[i][1];\r\n\t\t\tif(newX >= 0 && newY >= 0 && newX < _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"rows\"] && newY < _aMaze_js__WEBPACK_IMPORTED_MODULE_0__[\"cols\"] && !mem.has(`${newX} ${newY}`)) {\r\n\t\t\t\tneigh.add(`${newX} ${newY}`);\r\n\t\t\t}\r\n\t\t}\r\n\t\treturn neigh;\r\n\t}\r\n\r\n\tfunction getRandomItem(mySet) {\r\n\t\tmySet = Array.from(mySet);\r\n\t\treturn mySet[Math.floor(Math.random() * mySet.length)];\r\n\t}\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./global/js/mazeGen.js?");

/***/ }),

/***/ "./global/style/style.scss":
/*!*********************************!*\
  !*** ./global/style/style.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./global/style/style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./global/style/style.scss?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./global/style/style.scss":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./global/style/style.scss ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"body {\\n  margin: 0px;\\n  line-height: 0px;\\n  font-family: system-ui;\\n  color: white;\\n  background-color: #cdcdec;\\n}\\n\\n.main-container {\\n  display: flex;\\n  height: 100%;\\n}\\n.main-container .maze-container {\\n  margin: auto;\\n  padding: 10px;\\n}\\n.main-container .maze-container #maze {\\n  border-collapse: collapse;\\n}\\n.main-container .maze-container #maze .cell {\\n  border: solid;\\n  border-color: black;\\n  border-width: 5px;\\n}\\n.main-container .maze-container #maze .player {\\n  background-color: blue;\\n  display: block;\\n  height: 15px;\\n  width: 15px;\\n  border-radius: 50%;\\n  margin: auto;\\n}\\n.main-container .nav-container {\\n  width: 25%;\\n  display: flex;\\n  flex-direction: column;\\n  background-color: #00436d;\\n}\\n.main-container .nav-container .nav-heading {\\n  margin-right: auto;\\n  margin-left: auto;\\n  font-size: 50px;\\n}\\n.main-container .nav-container .nav-options {\\n  margin-right: auto;\\n  margin-left: auto;\\n  display: flex;\\n  flex-direction: column;\\n}\\n.main-container .nav-container .nav-options div {\\n  padding-top: 10px;\\n  padding-right: 10px;\\n  margin-right: auto;\\n  margin-left: auto;\\n}\\n.main-container .nav-container .nav-options #count {\\n  font-size: 90px;\\n  margin-top: 30px;\\n  margin-bottom: 50px;\\n  margin-right: auto;\\n  margin-left: auto;\\n}\\n\\n@media (max-width: 1000px) {\\n  .main-container {\\n    flex-direction: column;\\n  }\\n  .main-container .nav-container {\\n    flex-direction: row;\\n    height: 8%;\\n    width: 100%;\\n    justify-content: space-between;\\n  }\\n  .main-container .nav-container .nav-heading {\\n    font-size: 35px;\\n  }\\n  .main-container .nav-container .nav-options {\\n    flex-direction: row;\\n  }\\n  .main-container .nav-container .nav-options #count {\\n    font-size: 30px;\\n  }\\n}\\n@keyframes path {\\n  from {\\n    background-color: white;\\n  }\\n  to {\\n    background-color: skyblue;\\n  }\\n}\\n@keyframes explore {\\n  from {\\n    background-color: white;\\n  }\\n  to {\\n    background-color: #f5f584;\\n  }\\n}\\n@keyframes clear {\\n  to {\\n    background-color: white;\\n  }\\n}\\n@keyframes target {\\n  0% {\\n    background-color: lawngreen;\\n  }\\n  50% {\\n    background-color: green;\\n  }\\n  100% {\\n    background-color: lawngreen;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./global/style/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ });