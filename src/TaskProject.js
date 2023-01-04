import {ToDoItem} from "./ToDoItem.js";

export class TaskProject {

    constructor(title, tasks) {
        this.title = title;
        this.taskList = new Array();
        this.taskList = tasks;
    }

    showMe() {
        console.log("This a task project called: " + this.title + "and it has " + this.taskList.length + " tasks: ");
    };

    createNewItem(item) {
        let listItem = new ToDoItem();
        this.taskList.append(listItem);
    };

};