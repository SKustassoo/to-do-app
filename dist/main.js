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
/* harmony export */   "Manipulator": () => (/* binding */ Manipulator)
/* harmony export */ });
class Manipulator {

    mainAppFrameBuilder() {
        // get body for app layout 
        let mainAppLayout = document.body;
        
        // create header element
        mainAppLayout.appendChild(this.createAppHeader());

        // create body for app layout
        mainAppLayout.appendChild(this.createAppBody());

        // create footer element
        mainAppLayout.appendChild(this.createAppFooter());

       return mainAppLayout;
    }
    

    createAppHeader() {
        let appHeader = document.createElement('header');

        const headerLogo = document.createElement('div');
        headerLogo.setAttribute('id','logo');
        headerLogo.innerHTML = 'NewTodo';

        appHeader.appendChild(headerLogo);


        return appHeader;
    }

    createAppBody() {
        let appBody = document.createElement('div');
        appBody.setAttribute('id','body');

        // lefit sidebar
        const bodyLeftSideBar = document.createElement('div');
        bodyLeftSideBar.setAttribute('id','leftSideBar');

        // Left sidebar button area
        const buttonArea = document.createElement('div');
        buttonArea.setAttribute('id','buttonArea');

        const dasboardButton = document.createElement('button');
        dasboardButton.setAttribute('class','dasboardButton');
        dasboardButton.innerHTML = 'Dasboard';
        buttonArea.appendChild(dasboardButton);

        const todayButton = document.createElement('button');
        todayButton.setAttribute('class','dasboardButton');
        todayButton.innerHTML = 'Today';
        buttonArea.appendChild(todayButton);

        const thisWeekButton = document.createElement('button');
        thisWeekButton.setAttribute('class','dasboardButton');
        thisWeekButton.innerHTML = 'This week';
        buttonArea.appendChild(thisWeekButton);

        bodyLeftSideBar.appendChild(buttonArea);

        // Left side bar project area
        const projectArea = document.createElement('div');
        projectArea.setAttribute('id','projects');

        const projectAreaTitle = document.createElement('h1');
        projectAreaTitle.innerHTML = "Projects";



        projectArea.appendChild(projectAreaTitle);


        bodyLeftSideBar.appendChild(projectArea);

        // body right side area
        const bodyRightSideArea = document.createElement('div');
        bodyRightSideArea.setAttribute('id','bodyRightSideArea');

        const taskAreaTitle = document.createElement('h1');
        taskAreaTitle.innerHTML = "Title";
        bodyRightSideArea.appendChild(taskAreaTitle);


        // Append final elements
        appBody.appendChild(bodyLeftSideBar);
        appBody.appendChild(bodyRightSideArea);


        return appBody;
    }

    createAppFooter() {
        let appFooter = document.createElement('footer');
        return appFooter;
    }



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

// create new app
let toDoTaskApp = new _manipulator_js__WEBPACK_IMPORTED_MODULE_3__.Manipulator();
toDoTaskApp.mainAppFrameBuilder();






// demo content for trials
const localTasklist = [];
let aPost1 = new _toDoItem_js__WEBPACK_IMPORTED_MODULE_0__.ToDoItem("MyTitle", "This is a description", "17/03/2023", "important", "Personal Project");
localTasklist.push(aPost1);

let aPost2 = new _toDoItem_js__WEBPACK_IMPORTED_MODULE_0__.ToDoItem("MyTitle", "This is a description", "17/03/2023", "important", "Personal Project");
localTasklist.push(aPost2);

let localProejct = new _taskProject_js__WEBPACK_IMPORTED_MODULE_1__.TaskProject("my cool project", localTasklist);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0F1QztBQUNNOztBQUV0QztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUN0Qk87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7OztBQ25HdUM7O0FBRWhDOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsa0RBQVE7QUFDbkM7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNwQk87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWM7QUFDZCxpQkFBaUI7QUFDakIsdUJBQXVCO0FBQ3ZCLG1CQUFtQjtBQUNuQixvQkFBb0I7QUFDcEIsbUJBQW1CO0FBQ25CLGtCQUFrQjs7QUFFbEIsbUJBQW1CO0FBQ25CLHNCQUFzQjtBQUN0Qiw0QkFBNEI7QUFDNUIsd0JBQXdCO0FBQ3hCLHlCQUF5QjtBQUN6Qix3QkFBd0I7QUFDeEIsdUJBQXVCOztBQUV2Qjs7Ozs7O1VDNUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTnVDO0FBQ007QUFDaEI7QUFDZ0I7QUFDdkI7O0FBRXRCO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0Isd0RBQVc7QUFDakM7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0EsaUJBQWlCLGtEQUFRO0FBQ3pCOztBQUVBLGlCQUFpQixrREFBUTtBQUN6Qjs7QUFFQSx1QkFBdUIsd0RBQVcsbUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9tYW5pcHVsYXRvci5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvdGFza1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3RvRG9JdGVtLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQge1RvRG9JdGVtfSBmcm9tIFwiLi90b0RvSXRlbS5qc1wiO1xuaW1wb3J0IHtUYXNrUHJvamVjdH0gZnJvbSBcIi4vdGFza1Byb2plY3QuanNcIjtcblxuZXhwb3J0IGNsYXNzIEFwcCB7XG4gICAgXG5cbiAgICAvL2lkIGdlbmVyYXRvclxuICAgIGdlbmVyYXRlSWQoKSB7XG4gICAgICAgIHJldHVybiBEYXRlLm5vdygpO1xuICAgIH07XG5cblxuICAgIC8vIFByb2plY3QgcmVsYXRlZCBmdW5jdGlvbnNcbiAgICBhZGRQcm9qZWN0KCkge307XG4gICAgcmVtb3ZlUHJvamVjdChpZCkge307XG5cbiAgICAvLyBPbmUgdGFzayByZWxhdGVkIGZ1bmN0aW9uc1xuICAgIGFkZFRhc2soKSB7fTtcbiAgICBtb2RpZnlUYXNrKGlkKSB7fTtcbiAgICByZW1vdmVUYXNrKGlkKSB7fTtcbiAgICBcblxufSIsImV4cG9ydCBjbGFzcyBNYW5pcHVsYXRvciB7XG5cbiAgICBtYWluQXBwRnJhbWVCdWlsZGVyKCkge1xuICAgICAgICAvLyBnZXQgYm9keSBmb3IgYXBwIGxheW91dCBcbiAgICAgICAgbGV0IG1haW5BcHBMYXlvdXQgPSBkb2N1bWVudC5ib2R5O1xuICAgICAgICBcbiAgICAgICAgLy8gY3JlYXRlIGhlYWRlciBlbGVtZW50XG4gICAgICAgIG1haW5BcHBMYXlvdXQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVBcHBIZWFkZXIoKSk7XG5cbiAgICAgICAgLy8gY3JlYXRlIGJvZHkgZm9yIGFwcCBsYXlvdXRcbiAgICAgICAgbWFpbkFwcExheW91dC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUFwcEJvZHkoKSk7XG5cbiAgICAgICAgLy8gY3JlYXRlIGZvb3RlciBlbGVtZW50XG4gICAgICAgIG1haW5BcHBMYXlvdXQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVBcHBGb290ZXIoKSk7XG5cbiAgICAgICByZXR1cm4gbWFpbkFwcExheW91dDtcbiAgICB9XG4gICAgXG5cbiAgICBjcmVhdGVBcHBIZWFkZXIoKSB7XG4gICAgICAgIGxldCBhcHBIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcblxuICAgICAgICBjb25zdCBoZWFkZXJMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhlYWRlckxvZ28uc2V0QXR0cmlidXRlKCdpZCcsJ2xvZ28nKTtcbiAgICAgICAgaGVhZGVyTG9nby5pbm5lckhUTUwgPSAnTmV3VG9kbyc7XG5cbiAgICAgICAgYXBwSGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckxvZ28pO1xuXG5cbiAgICAgICAgcmV0dXJuIGFwcEhlYWRlcjtcbiAgICB9XG5cbiAgICBjcmVhdGVBcHBCb2R5KCkge1xuICAgICAgICBsZXQgYXBwQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhcHBCb2R5LnNldEF0dHJpYnV0ZSgnaWQnLCdib2R5Jyk7XG5cbiAgICAgICAgLy8gbGVmaXQgc2lkZWJhclxuICAgICAgICBjb25zdCBib2R5TGVmdFNpZGVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYm9keUxlZnRTaWRlQmFyLnNldEF0dHJpYnV0ZSgnaWQnLCdsZWZ0U2lkZUJhcicpO1xuXG4gICAgICAgIC8vIExlZnQgc2lkZWJhciBidXR0b24gYXJlYVxuICAgICAgICBjb25zdCBidXR0b25BcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJ1dHRvbkFyZWEuc2V0QXR0cmlidXRlKCdpZCcsJ2J1dHRvbkFyZWEnKTtcblxuICAgICAgICBjb25zdCBkYXNib2FyZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkYXNib2FyZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnZGFzYm9hcmRCdXR0b24nKTtcbiAgICAgICAgZGFzYm9hcmRCdXR0b24uaW5uZXJIVE1MID0gJ0Rhc2JvYXJkJztcbiAgICAgICAgYnV0dG9uQXJlYS5hcHBlbmRDaGlsZChkYXNib2FyZEJ1dHRvbik7XG5cbiAgICAgICAgY29uc3QgdG9kYXlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdG9kYXlCdXR0b24uc2V0QXR0cmlidXRlKCdjbGFzcycsJ2Rhc2JvYXJkQnV0dG9uJyk7XG4gICAgICAgIHRvZGF5QnV0dG9uLmlubmVySFRNTCA9ICdUb2RheSc7XG4gICAgICAgIGJ1dHRvbkFyZWEuYXBwZW5kQ2hpbGQodG9kYXlCdXR0b24pO1xuXG4gICAgICAgIGNvbnN0IHRoaXNXZWVrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRoaXNXZWVrQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdkYXNib2FyZEJ1dHRvbicpO1xuICAgICAgICB0aGlzV2Vla0J1dHRvbi5pbm5lckhUTUwgPSAnVGhpcyB3ZWVrJztcbiAgICAgICAgYnV0dG9uQXJlYS5hcHBlbmRDaGlsZCh0aGlzV2Vla0J1dHRvbik7XG5cbiAgICAgICAgYm9keUxlZnRTaWRlQmFyLmFwcGVuZENoaWxkKGJ1dHRvbkFyZWEpO1xuXG4gICAgICAgIC8vIExlZnQgc2lkZSBiYXIgcHJvamVjdCBhcmVhXG4gICAgICAgIGNvbnN0IHByb2plY3RBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RBcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qZWN0cycpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RBcmVhVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBwcm9qZWN0QXJlYVRpdGxlLmlubmVySFRNTCA9IFwiUHJvamVjdHNcIjtcblxuXG5cbiAgICAgICAgcHJvamVjdEFyZWEuYXBwZW5kQ2hpbGQocHJvamVjdEFyZWFUaXRsZSk7XG5cblxuICAgICAgICBib2R5TGVmdFNpZGVCYXIuYXBwZW5kQ2hpbGQocHJvamVjdEFyZWEpO1xuXG4gICAgICAgIC8vIGJvZHkgcmlnaHQgc2lkZSBhcmVhXG4gICAgICAgIGNvbnN0IGJvZHlSaWdodFNpZGVBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJvZHlSaWdodFNpZGVBcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCdib2R5UmlnaHRTaWRlQXJlYScpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tBcmVhVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICB0YXNrQXJlYVRpdGxlLmlubmVySFRNTCA9IFwiVGl0bGVcIjtcbiAgICAgICAgYm9keVJpZ2h0U2lkZUFyZWEuYXBwZW5kQ2hpbGQodGFza0FyZWFUaXRsZSk7XG5cblxuICAgICAgICAvLyBBcHBlbmQgZmluYWwgZWxlbWVudHNcbiAgICAgICAgYXBwQm9keS5hcHBlbmRDaGlsZChib2R5TGVmdFNpZGVCYXIpO1xuICAgICAgICBhcHBCb2R5LmFwcGVuZENoaWxkKGJvZHlSaWdodFNpZGVBcmVhKTtcblxuXG4gICAgICAgIHJldHVybiBhcHBCb2R5O1xuICAgIH1cblxuICAgIGNyZWF0ZUFwcEZvb3RlcigpIHtcbiAgICAgICAgbGV0IGFwcEZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgICAgICByZXR1cm4gYXBwRm9vdGVyO1xuICAgIH1cblxuXG5cbn0iLCJpbXBvcnQge1RvRG9JdGVtfSBmcm9tIFwiLi90b0RvSXRlbS5qc1wiO1xuXG5leHBvcnQgY2xhc3MgVGFza1Byb2plY3Qge1xuXG4gICAgY29uc3RydWN0b3IodGl0bGUsIHRhc2tzLCBpZCkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMudGFza0xpc3QgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgdGhpcy50YXNrTGlzdCA9IHRhc2tzO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgfVxuXG4gICAgc2hvd01lKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRoaXMgYSB0YXNrIHByb2plY3QgY2FsbGVkOiBcIiArIHRoaXMudGl0bGUgKyBcImFuZCBpdCBoYXMgXCIgKyB0aGlzLnRhc2tMaXN0Lmxlbmd0aCArIFwiIHRhc2tzOiBcIik7XG4gICAgfTtcblxuICAgIGNyZWF0ZU5ld1Rhc2tJdGVtKGl0ZW0pIHtcbiAgICAgICAgbGV0IGxpc3RJdGVtID0gbmV3IFRvRG9JdGVtKCk7XG4gICAgICAgIHRoaXMudGFza0xpc3QuYXBwZW5kKGxpc3RJdGVtKTtcbiAgICB9O1xuXG59OyIsImV4cG9ydCBjbGFzcyBUb0RvSXRlbSB7XG5cbiAgICBjb25zdHJ1Y3RvcihpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCwgc3RhdHVzKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgfTtcblxuICAgIGdldCBpZCgpIHtyZXR1cm4gdGhpcy5pZH07XG4gICAgZ2V0IHRpdGxlKCkge3JldHVybiB0aGlzLl90aXRsZX07XG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge3JldHVybiB0aGlzLl9kZXNjcmlwdGlvbn07XG4gICAgZ2V0IGR1ZURhdGUoKSB7cmV0dXJuIHRoaXMuX2R1ZURhdGV9O1xuICAgIGdldCBwcmlvcml0eSgpIHtyZXR1cm4gdGhpcy5fcHJpb3JpdHl9O1xuICAgIGdldCBwcm9qZWN0KCkge3JldHVybiB0aGlzLl9wcm9qZWN0fTtcbiAgICBnZXQgc3RhdHVzKCkge3JldHVybiB0aGlzLl9zdGF0dXN9O1xuXG4gICAgc2V0IGlkKHZhbHVlKSB7dGhpcy5faWQgPSB2YWx1ZX07XG4gICAgc2V0IHRpdGxlKHZhbHVlKSB7dGhpcy5fdGl0bGUgPSB2YWx1ZX07XG4gICAgc2V0IGRlc2NyaXB0aW9uKHZhbHVlKSB7dGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZX07XG4gICAgc2V0IGR1ZURhdGUodmFsdWUpIHt0aGlzLl9kdWVEYXRlID0gdmFsdWV9O1xuICAgIHNldCBwcmlvcml0eSh2YWx1ZSkge3RoaXMuX3ByaW9yaXR5ID0gdmFsdWV9O1xuICAgIHNldCBwcm9qZWN0KHZhbHVlKSB7dGhpcy5fcHJvamVjdCA9IHZhbHVlfTtcbiAgICBzZXQgc3RhdHVzKHZhbHVlKSB7dGhpcy5fc3RhdHVzID0gdmFsdWV9O1xuXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtUb0RvSXRlbX0gZnJvbSBcIi4vdG9Eb0l0ZW0uanNcIjtcbmltcG9ydCB7VGFza1Byb2plY3R9IGZyb20gXCIuL3Rhc2tQcm9qZWN0LmpzXCI7XG5pbXBvcnQge0FwcH0gZnJvbSBcIi4vYXBwLmpzXCI7XG5pbXBvcnQge01hbmlwdWxhdG9yfSBmcm9tIFwiLi9tYW5pcHVsYXRvci5qc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5cbmNvbnN0IERFRkFVTFRfUFJPSkVDVF9OQU1FID0gXCJGaXJzdCBEZWZhdWx0IFByb2plY3RcIjtcbmNvbnN0IERFRkFVTFRfVEFTS19JTkZPID0gW1wiTXlUaXRsZVwiLCBcIlRoaXMgaXMgYSBkZXNjcmlwdGlvblwiLCBcIjE3LzAzLzIwMjNcIiwgXCJpbXBvcnRhbnRcIiwgXCJQZXJzb25hbCBQcm9qZWN0XCJdO1xuXG4vLyBjcmVhdGUgbmV3IGFwcFxubGV0IHRvRG9UYXNrQXBwID0gbmV3IE1hbmlwdWxhdG9yKCk7XG50b0RvVGFza0FwcC5tYWluQXBwRnJhbWVCdWlsZGVyKCk7XG5cblxuXG5cblxuXG4vLyBkZW1vIGNvbnRlbnQgZm9yIHRyaWFsc1xuY29uc3QgbG9jYWxUYXNrbGlzdCA9IFtdO1xubGV0IGFQb3N0MSA9IG5ldyBUb0RvSXRlbShcIk15VGl0bGVcIiwgXCJUaGlzIGlzIGEgZGVzY3JpcHRpb25cIiwgXCIxNy8wMy8yMDIzXCIsIFwiaW1wb3J0YW50XCIsIFwiUGVyc29uYWwgUHJvamVjdFwiKTtcbmxvY2FsVGFza2xpc3QucHVzaChhUG9zdDEpO1xuXG5sZXQgYVBvc3QyID0gbmV3IFRvRG9JdGVtKFwiTXlUaXRsZVwiLCBcIlRoaXMgaXMgYSBkZXNjcmlwdGlvblwiLCBcIjE3LzAzLzIwMjNcIiwgXCJpbXBvcnRhbnRcIiwgXCJQZXJzb25hbCBQcm9qZWN0XCIpO1xubG9jYWxUYXNrbGlzdC5wdXNoKGFQb3N0Mik7XG5cbmxldCBsb2NhbFByb2VqY3QgPSBuZXcgVGFza1Byb2plY3QoXCJteSBjb29sIHByb2plY3RcIiwgbG9jYWxUYXNrbGlzdCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9