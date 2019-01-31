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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/components/CreateBoard.jsx":
/*!***********************************************!*\
  !*** ./client/src/components/CreateBoard.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _generateCell_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateCell.jsx */ \"./client/src/components/generateCell.jsx\");\n\n\nfunction CreateBoard(props) {\n  return React.createElement(\"div\", {\n    className: \"boardgrid\"\n  }, props.board.map(function (row, rowIndex) {\n    return row.map(function (cell, colIndex) {\n      return React.createElement(_generateCell_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        x: colIndex,\n        y: rowIndex\n      });\n    });\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateBoard);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvQ3JlYXRlQm9hcmQuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL0NyZWF0ZUJvYXJkLmpzeD9mYjhjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHZW5lcmF0ZUNlbGwgZnJvbSAnLi9nZW5lcmF0ZUNlbGwuanN4JztcblxuZnVuY3Rpb24gQ3JlYXRlQm9hcmQocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9hcmRncmlkJz5cbiAgICAgICAgICAgIHtwcm9wcy5ib2FyZC5tYXAoKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcm93Lm1hcCgoY2VsbCwgY29sSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxHZW5lcmF0ZUNlbGwgeD17Y29sSW5kZXh9IHk9e3Jvd0luZGV4fSAvPlxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlQm9hcmQ7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/CreateBoard.jsx\n");

/***/ }),

/***/ "./client/src/components/app.jsx":
/*!***************************************!*\
  !*** ./client/src/components/app.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CreateBoard_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateBoard.jsx */ \"./client/src/components/CreateBoard.jsx\");\n/* harmony import */ var _showGameState_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showGameState.jsx */ \"./client/src/components/showGameState.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    _this.state = {\n      board: [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]],\n      currentPlayer: 1\n    };\n    return _this;\n  }\n  /******************** STATE ********************/\n\n  /******************** VIEWER ********************/\n\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", null, React.createElement(\"div\", {\n        className: \"title\"\n      }, \"Welcome to Mini-Connect 4!\"), React.createElement(\"div\", {\n        className: \"game\"\n      }, React.createElement(\"br\", null), React.createElement(\"div\", null, React.createElement(_showGameState_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)), React.createElement(\"br\", null)), React.createElement(\"div\", {\n        className: \"board\"\n      }, React.createElement(\"br\", null), React.createElement(\"div\", null, React.createElement(_CreateBoard_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        board: this.state.board\n      })), React.createElement(\"br\", null)));\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvYXBwLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9hcHAuanN4P2I2MzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENyZWF0ZUJvYXJkIGZyb20gJy4vQ3JlYXRlQm9hcmQuanN4JztcbmltcG9ydCBTaG93R2FtZVN0YXRlIGZyb20gJy4vc2hvd0dhbWVTdGF0ZS5qc3gnO1xuXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYm9hcmQ6IFtcbiAgICAgICAgICAgICAgICAgICAgWzAsMCwwLDAsMCwwLDBdLFxuICAgICAgICAgICAgICAgICAgICBbMCwwLDAsMCwwLDAsMF0sXG4gICAgICAgICAgICAgICAgICAgIFswLDAsMCwwLDAsMCwwXSxcbiAgICAgICAgICAgICAgICAgICAgWzAsMCwwLDAsMCwwLDBdLFxuICAgICAgICAgICAgICAgICAgICBbMCwwLDAsMCwwLDAsMF0sXG4gICAgICAgICAgICAgICAgICAgIFswLDAsMCwwLDAsMCwwXVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgY3VycmVudFBsYXllcjogMVxuICAgICAgICB9XG4gICAgfVxuXG4vKioqKioqKioqKioqKioqKioqKiogU1RBVEUgKioqKioqKioqKioqKioqKioqKiovXG5cblxuXG4vKioqKioqKioqKioqKioqKioqKiogVklFV0VSICoqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+V2VsY29tZSB0byBNaW5pLUNvbm5lY3QgNCE8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWVcIiA+XG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjxTaG93R2FtZVN0YXRlIC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib2FyZCc+XG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PjxDcmVhdGVCb2FyZCBib2FyZD17dGhpcy5zdGF0ZS5ib2FyZH0vPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFRQTtBQVRBO0FBRkE7QUFhQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUtBO0FBQUE7QUFFQTtBQUFBO0FBS0E7Ozs7QUF0Q0E7QUFDQTtBQXlDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/components/app.jsx\n");

/***/ }),

/***/ "./client/src/components/generateCell.jsx":
/*!************************************************!*\
  !*** ./client/src/components/generateCell.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction GenerateCell(props) {\n  return React.createElement(\"div\", {\n    className: \"boardcell\"\n  }, props.y, \",\", props.x);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GenerateCell);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvZ2VuZXJhdGVDZWxsLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9nZW5lcmF0ZUNlbGwuanN4PzY1YjkiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gR2VuZXJhdGVDZWxsKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JvYXJkY2VsbCc+e3Byb3BzLnl9LHtwcm9wcy54fTwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2VuZXJhdGVDZWxsOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/components/generateCell.jsx\n");

/***/ }),

/***/ "./client/src/components/showGameState.jsx":
/*!*************************************************!*\
  !*** ./client/src/components/showGameState.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction ShowGameState(props) {\n  return React.createElement(\"div\", null, \"current player is TBD\");\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShowGameState);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvc2hvd0dhbWVTdGF0ZS5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvc2hvd0dhbWVTdGF0ZS5qc3g/MDQ3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBTaG93R2FtZVN0YXRlKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5jdXJyZW50IHBsYXllciBpcyBUQkQ8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNob3dHYW1lU3RhdGU7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/showGameState.jsx\n");

/***/ }),

/***/ "./client/src/index.jsx":
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_app_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/app.jsx */ \"./client/src/components/app.jsx\");\n\nReactDOM.render(React.createElement(_components_app_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null), document.getElementById('app'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2luZGV4LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvaW5kZXguanN4P2QwMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvYXBwLmpzeCdcblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/index.jsx\n");

/***/ })

/******/ });