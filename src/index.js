import {ToDoItem} from "./ToDoItem.js";
import {TaskProject} from "./TaskProject.js";

const localTasklist = [];

let aPost1 = new ToDoItem("MyTitle", "This is a description", "17/03/2023", "important", "Personal Project");
localTasklist.push(aPost1);

let aPost2 = new ToDoItem("MyTitle", "This is a description", "17/03/2023", "important", "Personal Project");
localTasklist.push(aPost2);

let localProejct = new TaskProject("my cool project", localTasklist);

localProejct.showMe();
