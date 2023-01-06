import {ToDoItem} from "./toDoItem.js";
import {TaskProject} from "./taskProject.js";
import {Manipulator} from "./manipulator.js";

export class App {

    ALL_BUTTON = document.getElementById('allButton');
    TODAY_BUTTON = document.getElementById('todayButton');
    THIS_WEEK_BUTTON = document.getElementById('thisWeekButton');

    buildAppFrame() {
        let toDoTaskApp = new Manipulator();
        toDoTaskApp.mainAppFrameBuilder();
    };

    setListening(){
        // to add new projects
        document.getElementById('addProject').addEventListener('click', () => { this.addProject(this.generateId())});

        // to delete excisting projects
        const allProjects = Array.from(document.getElementsByClassName('fa-xmark'));
        allProjects.forEach(project => {
            project.addEventListener('click', () => 
                {this.removeProject(this.generateId());});
        });



      

    }
    

    //id generator
    generateId() {
        return Date.now();
    };

    // Project related functions
    addProject(id) {
        console.log("new project incoming" + id);
    };

    removeProject(id) {
        console.log("I want this deleted" + id);
    };

    // One task related functions
    addTask() {};
    modifyTask(id) {};
    removeTask(id) {};
    
}