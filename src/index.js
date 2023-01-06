import {ToDoItem} from "./toDoItem.js";
import {TaskProject} from "./taskProject.js";
import {App} from "./app.js";
import {Manipulator} from "./manipulator.js";
import "./styles.css";
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'


const DEFAULT_PROJECT_NAME = "First Default Project";
const DEFAULT_TASK_INFO = ["MyTitle", "This is a description", "17/03/2023", "important", "Personal Project"];

// create new app
let toDoTaskApp = new App();
toDoTaskApp.buildAppFrame();
toDoTaskApp.setListening();
