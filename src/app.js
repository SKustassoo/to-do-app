import {ToDoItem} from "./toDoItem.js";
import {TaskProject} from "./taskProject.js";
import {Manipulator} from "./manipulator.js";


export class App {

    activeProject = "";

    ALL_BUTTON = document.getElementById('allButton');
    TODAY_BUTTON = document.getElementById('todayButton');
    THIS_WEEK_BUTTON = document.getElementById('thisWeekButton');

    buildAppFrame() {
        let toDoTaskApp = new Manipulator();
        toDoTaskApp.mainAppFrameBuilder();
    };

    setListening(){
        // to add new projects
        document.getElementById('addProject').addEventListener('click', () => { this.projectform()});
        document.getElementById('addTaskButton').addEventListener('click', () => { this.addTask(this.generateId(), "This is a task content", "17/03/2023", "activeProject")});
 

    }
    
    //id generator
    generateId() {
        return Date.now();
    };


    // Project form
    projectform() {
        console.log("We are builing a new project");

        this.addProject(this.generateId());
    }


    // create new project
    addProject(id) {
        const localManipulator = new Manipulator();
        const newProject = localManipulator.createProject("DummyProject", id);
        document.getElementById('projects').prepend(newProject);
        newProject.lastChild.addEventListener('click', () => {this.removeProject(id)});
        newProject.addEventListener('click', () => {this.showProjectTasks(id)});
    };

    // remove current project
    removeProject(id) {
        document.getElementById('projects').removeChild(document.getElementById(id));
    };

    // show project related tasks
    showProjectTasks(id) {
        const projectTitle = document.getElementById(id).children[1].innerHTML;
        document.getElementById('activeTaskTitle').innerHTML = projectTitle;
        this.activeProject = id;
    }

    // One task related functions
    addTask(id, content, date, project) {
        const localManipulator = new Manipulator();
        const newTask = localManipulator.createTask(id, content, date, project);

        document.getElementById('tasksInProgress').prepend(newTask);
        newTask.firstChild.addEventListener('click', () => {this.removeTask(id)});
        //newTask.addEventListener('click', () => {this.showProjectTasks(id)});
    };

    modifyTask(id) {};
    removeTask(id) {
        document.getElementById('tasksInProgress').removeChild(document.getElementById(id));
    };
    
}