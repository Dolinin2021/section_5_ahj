/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 562:
/***/ (() => {

let container, text, header;
let flag = false;
let button = document.querySelector(".button-tooltip");
button.onclick = function (event) {
  if (flag == false) {
    let tooltipHtml = event.target.dataset.tooltip;
    if (!tooltipHtml) return;
    container = document.createElement("div");
    header = document.createElement("div");
    text = document.createElement("div");
    container.className = "container";
    header.className = "header";
    text.className = "text";
    header.innerHTML = "Popover title";
    text.innerHTML = tooltipHtml;
    document.body.append(container);
    document.body.append(header);
    document.body.append(text);
    container.appendChild(header);
    container.appendChild(text);
    let coords = event.target.getBoundingClientRect();
    let left = coords.left + (event.target.offsetWidth - container.offsetWidth) / 2;
    if (left < 0) left = 0;
    let top = coords.top - container.offsetHeight - 5;
    if (top < 0) {
      top = coords.top + event.target.offsetHeight + 5;
    }
    container.style.left = left + "px";
    container.style.top = top + "px";
    flag = true;
  } else {
    flag = false;
    if (container) {
      container.remove();
      container = null;
    }
  }
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(562);
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_app__WEBPACK_IMPORTED_MODULE_0__);



// TODO: write your code in app.js
})();

/******/ })()
;