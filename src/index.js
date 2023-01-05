import {ToDoItem} from "./toDoItem.js";
import {TaskProject} from "./taskProject.js";
import {App} from "./app.js";
import {Manipulator} from "./manipulator.js";
import "./styles.css";

const DEFAULT_PROJECT_NAME = "First Default Project";
const DEFAULT_TASK_INFO = ["MyTitle", "This is a description", "17/03/2023", "important", "Personal Project"];


const localTasklist = [];

let aPost1 = new ToDoItem("MyTitle", "This is a description", "17/03/2023", "important", "Personal Project");
localTasklist.push(aPost1);

let aPost2 = new ToDoItem("MyTitle", "This is a description", "17/03/2023", "important", "Personal Project");
localTasklist.push(aPost2);

let localProejct = new TaskProject("my cool project", localTasklist);

localProejct.showMe();

console.log(Date.now());