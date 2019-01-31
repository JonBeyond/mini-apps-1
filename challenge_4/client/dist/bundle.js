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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _generateCell_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateCell.jsx */ \"./client/src/components/generateCell.jsx\");\n\n\nfunction CreateBoard(props) {\n  return React.createElement(\"div\", {\n    className: \"boardgrid\"\n  }, props.board.map(function (row, rowIndex) {\n    return row.map(function (cell, colIndex) {\n      return React.createElement(_generateCell_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        click: props.click,\n        x: colIndex,\n        y: rowIndex,\n        val: cell\n      });\n    });\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateBoard);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvQ3JlYXRlQm9hcmQuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL0NyZWF0ZUJvYXJkLmpzeD9mYjhjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHZW5lcmF0ZUNlbGwgZnJvbSAnLi9nZW5lcmF0ZUNlbGwuanN4JztcblxuZnVuY3Rpb24gQ3JlYXRlQm9hcmQocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9hcmRncmlkJz5cbiAgICAgICAgICAgIHtwcm9wcy5ib2FyZC5tYXAoKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcm93Lm1hcCgoY2VsbCwgY29sSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxHZW5lcmF0ZUNlbGwgY2xpY2s9e3Byb3BzLmNsaWNrfSB4PXtjb2xJbmRleH0geT17cm93SW5kZXh9IHZhbD17Y2VsbH0vPlxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlQm9hcmQ7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/components/CreateBoard.jsx\n");

/***/ }),

/***/ "./client/src/components/app.jsx":
/*!***************************************!*\
  !*** ./client/src/components/app.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CreateBoard_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateBoard.jsx */ \"./client/src/components/CreateBoard.jsx\");\n/* harmony import */ var _showGameState_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showGameState.jsx */ \"./client/src/components/showGameState.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    _this.state = {\n      board: [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]],\n      currentPlayer: 1\n    };\n    _this.placePiece = _this.placePiece.bind(_assertThisInitialized(_assertThisInitialized(_this)));\n    return _this;\n  }\n  /******************** STATE ********************/\n\n\n  _createClass(App, [{\n    key: \"placePiece\",\n    value: function placePiece(event) {\n      //pull out the ID from which the click came from\n      var location = event.target.id;\n      var col = location[2];\n      var row = location[0]; //determine if this is a valid mode\n\n      console.log(\"Checking play at \".concat(location)); //TODO: remove debugging\n\n      if (!this.validatePlay(col)) {\n        console.log('sorry - that column is full. Try another column');\n        return;\n      } //place piece at the lowest non-zero row/col\n\n\n      var b = this.state.board.slice(0);\n\n      for (var i = 5; i >= 0; i--) {\n        if (b[i][col] === 0) {\n          b[i][col] = this.state.currentPlayer;\n          var next = null;\n\n          if (this.state.currentPlayer === 1) {\n            next = -1;\n          } else next = 1;\n\n          this.setState({\n            board: b,\n            currentPlayer: next\n          });\n          return;\n        }\n      }\n    }\n  }, {\n    key: \"validatePlay\",\n    value: function validatePlay(col) {\n      if (this.state.board[0][col] === 0) {\n        return true;\n      }\n\n      return false;\n    }\n    /******************** VIEWER ********************/\n\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", null, React.createElement(\"div\", {\n        className: \"title\"\n      }, \"Welcome to Mini-Connect 4!\"), React.createElement(\"div\", {\n        className: \"game\"\n      }, React.createElement(\"br\", null), React.createElement(\"div\", null, \"Current player is \", this.state.currentPlayer), React.createElement(\"br\", null), React.createElement(\"div\", null, \"Click on any column below to place your piece:\"), React.createElement(\"br\", null)), React.createElement(\"div\", {\n        className: \"board\"\n      }, React.createElement(\"br\", null), React.createElement(\"div\", null, React.createElement(_CreateBoard_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        board: this.state.board,\n        click: this.placePiece\n      })), React.createElement(\"br\", null)));\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvYXBwLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9hcHAuanN4P2I2MzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENyZWF0ZUJvYXJkIGZyb20gJy4vQ3JlYXRlQm9hcmQuanN4JztcbmltcG9ydCBTaG93R2FtZVN0YXRlIGZyb20gJy4vc2hvd0dhbWVTdGF0ZS5qc3gnO1xuXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYm9hcmQ6IFtcbiAgICAgICAgICAgICAgICAgICAgWzAsMCwwLDAsMCwwLDBdLFxuICAgICAgICAgICAgICAgICAgICBbMCwwLDAsMCwwLDAsMF0sXG4gICAgICAgICAgICAgICAgICAgIFswLDAsMCwwLDAsMCwwXSxcbiAgICAgICAgICAgICAgICAgICAgWzAsMCwwLDAsMCwwLDBdLFxuICAgICAgICAgICAgICAgICAgICBbMCwwLDAsMCwwLDAsMF0sXG4gICAgICAgICAgICAgICAgICAgIFswLDAsMCwwLDAsMCwwXVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgY3VycmVudFBsYXllcjogMVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucGxhY2VQaWVjZSA9IHRoaXMucGxhY2VQaWVjZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuLyoqKioqKioqKioqKioqKioqKioqIFNUQVRFICoqKioqKioqKioqKioqKioqKioqL1xuICAgIHBsYWNlUGllY2UoZXZlbnQpIHtcbiAgICAgICAgLy9wdWxsIG91dCB0aGUgSUQgZnJvbSB3aGljaCB0aGUgY2xpY2sgY2FtZSBmcm9tXG4gICAgICAgIGxldCBsb2NhdGlvbiA9IGV2ZW50LnRhcmdldC5pZDtcbiAgICAgICAgbGV0IGNvbCA9IGxvY2F0aW9uWzJdO1xuICAgICAgICBsZXQgcm93ID0gbG9jYXRpb25bMF07XG5cbiAgICAgICAgLy9kZXRlcm1pbmUgaWYgdGhpcyBpcyBhIHZhbGlkIG1vZGVcbiAgICAgICAgY29uc29sZS5sb2coYENoZWNraW5nIHBsYXkgYXQgJHtsb2NhdGlvbn1gKTsgLy9UT0RPOiByZW1vdmUgZGVidWdnaW5nXG4gICAgICAgIGlmICghdGhpcy52YWxpZGF0ZVBsYXkoY29sKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NvcnJ5IC0gdGhhdCBjb2x1bW4gaXMgZnVsbC4gVHJ5IGFub3RoZXIgY29sdW1uJylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvL3BsYWNlIHBpZWNlIGF0IHRoZSBsb3dlc3Qgbm9uLXplcm8gcm93L2NvbFxuICAgICAgICBsZXQgYiA9IHRoaXMuc3RhdGUuYm9hcmQuc2xpY2UoMCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDU7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBpZiAoYltpXVtjb2xdID09PSAwKSB7XG4gICAgICAgICAgICAgICAgYltpXVtjb2xdID0gdGhpcy5zdGF0ZS5jdXJyZW50UGxheWVyO1xuXG4gICAgICAgICAgICAgICAgbGV0IG5leHQgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRQbGF5ZXIgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dCA9IC0xO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBuZXh0ID0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgYm9hcmQ6IGIsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQbGF5ZXI6IG5leHRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YWxpZGF0ZVBsYXkoY29sKSB7XG4gICAgICAgIGlmKHRoaXMuc3RhdGUuYm9hcmRbMF1bY29sXSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuXG4vKioqKioqKioqKioqKioqKioqKiogVklFV0VSICoqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+V2VsY29tZSB0byBNaW5pLUNvbm5lY3QgNCE8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWVcIiA+XG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PkN1cnJlbnQgcGxheWVyIGlzIHt0aGlzLnN0YXRlLmN1cnJlbnRQbGF5ZXJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PkNsaWNrIG9uIGFueSBjb2x1bW4gYmVsb3cgdG8gcGxhY2UgeW91ciBwaWVjZTo8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JvYXJkJz5cbiAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PENyZWF0ZUJvYXJkIGJvYXJkPXt0aGlzLnN0YXRlLmJvYXJkfSBjbGljaz17dGhpcy5wbGFjZVBpZWNlfS8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQVFBO0FBVEE7QUFXQTtBQWJBO0FBY0E7QUFFQTtBQUNBO0FBQ0E7OztBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBOzs7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFPQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBS0E7Ozs7QUE5RUE7QUFDQTtBQWlGQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/components/app.jsx\n");

/***/ }),

/***/ "./client/src/components/generateCell.jsx":
/*!************************************************!*\
  !*** ./client/src/components/generateCell.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction GenerateCell(props) {\n  var cellID = \"\".concat(props.y, \",\").concat(props.x);\n  var icon = '';\n\n  if (props.val === 1) {\n    icon = 'X';\n  }\n\n  if (props.val === -1) {\n    icon = 'O';\n  }\n\n  return React.createElement(\"div\", {\n    className: \"boardcell\",\n    id: cellID,\n    onClick: props.click\n  }, icon);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GenerateCell);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvZ2VuZXJhdGVDZWxsLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9nZW5lcmF0ZUNlbGwuanN4PzY1YjkiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gR2VuZXJhdGVDZWxsKHByb3BzKSB7XG4gICAgbGV0IGNlbGxJRCA9IGAke3Byb3BzLnl9LCR7cHJvcHMueH1gXG4gICAgbGV0IGljb24gPSAnJztcbiAgICBpZiAocHJvcHMudmFsID09PSAxKSB7XG4gICAgICAgIGljb24gPSAnWCc7XG4gICAgfVxuICAgIGlmIChwcm9wcy52YWwgPT09IC0xKSB7XG4gICAgICAgIGljb24gPSAnTyc7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib2FyZGNlbGwnIGlkPXtjZWxsSUR9IG9uQ2xpY2s9e3Byb3BzLmNsaWNrfT57aWNvbn08L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdlbmVyYXRlQ2VsbDsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/components/generateCell.jsx\n");

/***/ }),

/***/ "./client/src/components/showGameState.jsx":
/*!*************************************************!*\
  !*** ./client/src/components/showGameState.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction ShowGameState(props) {\n  return React.createElement(\"div\", null, \"current player is TBD\", React.createElement(\"br\", null), \"Click on any column below to place your piece:\");\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShowGameState);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvc2hvd0dhbWVTdGF0ZS5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvc2hvd0dhbWVTdGF0ZS5qc3g/MDQ3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBTaG93R2FtZVN0YXRlKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5jdXJyZW50IHBsYXllciBpcyBUQkRcbiAgICAgICAgICAgIDxicj48L2JyPkNsaWNrIG9uIGFueSBjb2x1bW4gYmVsb3cgdG8gcGxhY2UgeW91ciBwaWVjZTpcbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaG93R2FtZVN0YXRlOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/components/showGameState.jsx\n");

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