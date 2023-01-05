import {ToDoItem} from "./toDoItem.js";
import {TaskProject} from "./taskProject.js";

export class App {
    

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