import {ToDoItem} from "./toDoItem.js";

export class TaskProject {

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
        let listItem = new ToDoItem();
        this.taskList.append(listItem);
    };

};