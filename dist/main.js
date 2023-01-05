/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _toDoItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoItem.js */ "./src/toDoItem.js");
/* harmony import */ var _taskProject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskProject.js */ "./src/taskProject.js");



class App {
    

    //id generator
    generateId() {
        return Date.now();
    };


    // Project related functions
    addProject() {};
    removeProject(id) {};

    // One task related functions
    addTask() {};
    modifyTask(id) {};
    removeTask(id) {};
    

}

/***/ }),

/***/ "./src/manipulator.js":
/*!****************************!*\
  !*** ./src/manipulator.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Manipulator)
/* harmony export */ });
class Manipulator {

    
}

/***/ }),

/***/ "./src/taskProject.js":
/*!****************************!*\
  !*** ./src/taskProject.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskProject": () => (/* binding */ TaskProject)
/* harmony export */ });
/* harmony import */ var _toDoItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoItem.js */ "./src/toDoItem.js");


class TaskProject {

    constructor(title, tasks, id) {
        this.title = title;
        this.taskList = new Array();
        this.taskList = tasks;
        this.id = id;
    }

    showMe() {
        console.log("This a task project called: " + this.title + "and it has " + this.taskList.length + " tasks: ");
    };

    createNewTaskItem(item) {
        let listItem = new _toDoItem_js__WEBPACK_IMPORTED_MODULE_0__.ToDoItem();
        this.taskList.append(listItem);
    };

};

/***/ }),

/***/ "./src/toDoItem.js":
/*!*************************!*\
  !*** ./src/toDoItem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToDoItem": () => (/* binding */ ToDoItem)
/* harmony export */ });
class ToDoItem {

    constructor(id, title, description, dueDate, priority, project, status) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
        this.status = status;
        this.id = id;
    };

    get id() {return this.id};
    get title() {return this._title};
    get description() {return this._description};
    get dueDate() {return this._dueDate};
    get priority() {return this._priority};
    get project() {return this._project};
    get status() {return this._status};

    set id(value) {this._id = value};
    set title(value) {this._title = value};
    set description(value) {this._description = value};
    set dueDate(value) {this._dueDate = value};
    set priority(value) {this._priority = value};
    set project(value) {this._project = value};
    set status(value) {this._status = value};

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toDoItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoItem.js */ "./src/toDoItem.js");
/* harmony import */ var _taskProject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskProject.js */ "./src/taskProject.js");
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.js */ "./src/app.js");
/* harmony import */ var _manipulator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manipulator.js */ "./src/manipulator.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");






const DEFAULT_PROJECT_NAME = "First Default Project";
const DEFAULT_TASK_INFO = ["MyTitle", "This is a description", "17/03/2023", "important", "Personal Project"];


const localTasklist = [];

let aPost1 = new _toDoItem_js__WEBPACK_IMPORTED_MODULE_0__.ToDoItem("MyTitle", "This is a description", "17/03/2023", "important", "Personal Project");
localTasklist.push(aPost1);

let aPost2 = new _toDoItem_js__WEBPACK_IMPORTED_MODULE_0__.ToDoItem("MyTitle", "This is a description", "17/03/2023", "important", "Personal Project");
localTasklist.push(aPost2);

let localProejct = new _taskProject_js__WEBPACK_IMPORTED_MODULE_1__.TaskProject("my cool project", localTasklist);

localProejct.showMe();

console.log(Date.now());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0F1QztBQUNNOztBQUV0QztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUN0QmU7O0FBRWY7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDSHVDOztBQUVoQzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLGtEQUFRO0FBQ25DO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDcEJPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjO0FBQ2QsaUJBQWlCO0FBQ2pCLHVCQUF1QjtBQUN2QixtQkFBbUI7QUFDbkIsb0JBQW9CO0FBQ3BCLG1CQUFtQjtBQUNuQixrQkFBa0I7O0FBRWxCLG1CQUFtQjtBQUNuQixzQkFBc0I7QUFDdEIsNEJBQTRCO0FBQzVCLHdCQUF3QjtBQUN4Qix5QkFBeUI7QUFDekIsd0JBQXdCO0FBQ3hCLHVCQUF1Qjs7QUFFdkI7Ozs7OztVQzVCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ051QztBQUNNO0FBQ2hCO0FBQ2dCO0FBQ3ZCOztBQUV0QjtBQUNBOzs7QUFHQTs7QUFFQSxpQkFBaUIsa0RBQVE7QUFDekI7O0FBRUEsaUJBQWlCLGtEQUFRO0FBQ3pCOztBQUVBLHVCQUF1Qix3REFBVzs7QUFFbEM7O0FBRUEsd0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvc3R5bGVzLmNzcz8xNTUzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL21hbmlwdWxhdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy90YXNrUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvdG9Eb0l0ZW0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7VG9Eb0l0ZW19IGZyb20gXCIuL3RvRG9JdGVtLmpzXCI7XG5pbXBvcnQge1Rhc2tQcm9qZWN0fSBmcm9tIFwiLi90YXNrUHJvamVjdC5qc1wiO1xuXG5leHBvcnQgY2xhc3MgQXBwIHtcbiAgICBcblxuICAgIC8vaWQgZ2VuZXJhdG9yXG4gICAgZ2VuZXJhdGVJZCgpIHtcbiAgICAgICAgcmV0dXJuIERhdGUubm93KCk7XG4gICAgfTtcblxuXG4gICAgLy8gUHJvamVjdCByZWxhdGVkIGZ1bmN0aW9uc1xuICAgIGFkZFByb2plY3QoKSB7fTtcbiAgICByZW1vdmVQcm9qZWN0KGlkKSB7fTtcblxuICAgIC8vIE9uZSB0YXNrIHJlbGF0ZWQgZnVuY3Rpb25zXG4gICAgYWRkVGFzaygpIHt9O1xuICAgIG1vZGlmeVRhc2soaWQpIHt9O1xuICAgIHJlbW92ZVRhc2soaWQpIHt9O1xuICAgIFxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFuaXB1bGF0b3Ige1xuXG4gICAgXG59IiwiaW1wb3J0IHtUb0RvSXRlbX0gZnJvbSBcIi4vdG9Eb0l0ZW0uanNcIjtcblxuZXhwb3J0IGNsYXNzIFRhc2tQcm9qZWN0IHtcblxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCB0YXNrcywgaWQpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLnRhc2tMaXN0ID0gbmV3IEFycmF5KCk7XG4gICAgICAgIHRoaXMudGFza0xpc3QgPSB0YXNrcztcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgIH1cblxuICAgIHNob3dNZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGlzIGEgdGFzayBwcm9qZWN0IGNhbGxlZDogXCIgKyB0aGlzLnRpdGxlICsgXCJhbmQgaXQgaGFzIFwiICsgdGhpcy50YXNrTGlzdC5sZW5ndGggKyBcIiB0YXNrczogXCIpO1xuICAgIH07XG5cbiAgICBjcmVhdGVOZXdUYXNrSXRlbShpdGVtKSB7XG4gICAgICAgIGxldCBsaXN0SXRlbSA9IG5ldyBUb0RvSXRlbSgpO1xuICAgICAgICB0aGlzLnRhc2tMaXN0LmFwcGVuZChsaXN0SXRlbSk7XG4gICAgfTtcblxufTsiLCJleHBvcnQgY2xhc3MgVG9Eb0l0ZW0ge1xuXG4gICAgY29uc3RydWN0b3IoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QsIHN0YXR1cykge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgIH07XG5cbiAgICBnZXQgaWQoKSB7cmV0dXJuIHRoaXMuaWR9O1xuICAgIGdldCB0aXRsZSgpIHtyZXR1cm4gdGhpcy5fdGl0bGV9O1xuICAgIGdldCBkZXNjcmlwdGlvbigpIHtyZXR1cm4gdGhpcy5fZGVzY3JpcHRpb259O1xuICAgIGdldCBkdWVEYXRlKCkge3JldHVybiB0aGlzLl9kdWVEYXRlfTtcbiAgICBnZXQgcHJpb3JpdHkoKSB7cmV0dXJuIHRoaXMuX3ByaW9yaXR5fTtcbiAgICBnZXQgcHJvamVjdCgpIHtyZXR1cm4gdGhpcy5fcHJvamVjdH07XG4gICAgZ2V0IHN0YXR1cygpIHtyZXR1cm4gdGhpcy5fc3RhdHVzfTtcblxuICAgIHNldCBpZCh2YWx1ZSkge3RoaXMuX2lkID0gdmFsdWV9O1xuICAgIHNldCB0aXRsZSh2YWx1ZSkge3RoaXMuX3RpdGxlID0gdmFsdWV9O1xuICAgIHNldCBkZXNjcmlwdGlvbih2YWx1ZSkge3RoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWV9O1xuICAgIHNldCBkdWVEYXRlKHZhbHVlKSB7dGhpcy5fZHVlRGF0ZSA9IHZhbHVlfTtcbiAgICBzZXQgcHJpb3JpdHkodmFsdWUpIHt0aGlzLl9wcmlvcml0eSA9IHZhbHVlfTtcbiAgICBzZXQgcHJvamVjdCh2YWx1ZSkge3RoaXMuX3Byb2plY3QgPSB2YWx1ZX07XG4gICAgc2V0IHN0YXR1cyh2YWx1ZSkge3RoaXMuX3N0YXR1cyA9IHZhbHVlfTtcblxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7VG9Eb0l0ZW19IGZyb20gXCIuL3RvRG9JdGVtLmpzXCI7XG5pbXBvcnQge1Rhc2tQcm9qZWN0fSBmcm9tIFwiLi90YXNrUHJvamVjdC5qc1wiO1xuaW1wb3J0IHtBcHB9IGZyb20gXCIuL2FwcC5qc1wiO1xuaW1wb3J0IHtNYW5pcHVsYXRvcn0gZnJvbSBcIi4vbWFuaXB1bGF0b3IuanNcIjtcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuXG5jb25zdCBERUZBVUxUX1BST0pFQ1RfTkFNRSA9IFwiRmlyc3QgRGVmYXVsdCBQcm9qZWN0XCI7XG5jb25zdCBERUZBVUxUX1RBU0tfSU5GTyA9IFtcIk15VGl0bGVcIiwgXCJUaGlzIGlzIGEgZGVzY3JpcHRpb25cIiwgXCIxNy8wMy8yMDIzXCIsIFwiaW1wb3J0YW50XCIsIFwiUGVyc29uYWwgUHJvamVjdFwiXTtcblxuXG5jb25zdCBsb2NhbFRhc2tsaXN0ID0gW107XG5cbmxldCBhUG9zdDEgPSBuZXcgVG9Eb0l0ZW0oXCJNeVRpdGxlXCIsIFwiVGhpcyBpcyBhIGRlc2NyaXB0aW9uXCIsIFwiMTcvMDMvMjAyM1wiLCBcImltcG9ydGFudFwiLCBcIlBlcnNvbmFsIFByb2plY3RcIik7XG5sb2NhbFRhc2tsaXN0LnB1c2goYVBvc3QxKTtcblxubGV0IGFQb3N0MiA9IG5ldyBUb0RvSXRlbShcIk15VGl0bGVcIiwgXCJUaGlzIGlzIGEgZGVzY3JpcHRpb25cIiwgXCIxNy8wMy8yMDIzXCIsIFwiaW1wb3J0YW50XCIsIFwiUGVyc29uYWwgUHJvamVjdFwiKTtcbmxvY2FsVGFza2xpc3QucHVzaChhUG9zdDIpO1xuXG5sZXQgbG9jYWxQcm9lamN0ID0gbmV3IFRhc2tQcm9qZWN0KFwibXkgY29vbCBwcm9qZWN0XCIsIGxvY2FsVGFza2xpc3QpO1xuXG5sb2NhbFByb2VqY3Quc2hvd01lKCk7XG5cbmNvbnNvbGUubG9nKERhdGUubm93KCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==