import {ToDoItem} from "./toDoItem.js";
import {TaskProject} from "./taskProject.js";
import {Manipulator} from "./manipulator.js";


export class App {

    activeProject = "Empty";

    ALL_BUTTON = document.getElementById('allButton');
    TODAY_BUTTON = document.getElementById('todayButton');
    THIS_WEEK_BUTTON = document.getElementById('thisWeekButton');

    buildAppFrame() {
        let toDoTaskApp = new Manipulator();
        toDoTaskApp.mainAppFrameBuilder(this.activeProject);
    };

    setListening(){
        // to add new projects
        document.getElementById('addProject').addEventListener('click', () => { this.projectForm()});
        document.getElementById('addTaskButton').addEventListener('click', () => { this.addTask(this.generateId(), "This is a task content", "17/03/2023", "activeProject")});
 

    }
    
    //id generator
    generateId() {
        return Date.now();
    };


    // Project form
    projectForm() {

        console.log("We are builing a new project");

        // Build new form from manipulator
        let localAppForm = new Manipulator().createProjectForm();
        document.getElementById('projects').appendChild(localAppForm);


        // accept button functionality
        const acceptButton = document.getElementById('projectAcceptButton');
        acceptButton.addEventListener('click', (elem) => {
            const projectName = document.getElementById('projectForm').firstChild.value
            // add new project to the list
            this.addProject(projectName, this.generateId());
            // remove form from gui
            document.getElementById('projectFormArea').remove();
   
        });


        // cancel button functionality
        const cancelButton = document.getElementById('projectCancelButton');
        cancelButton.addEventListener('click', () => {
            document.getElementById('projectFormArea').remove();
        });

    }

    // create new project
    addProject(name, id) {
        const localManipulator = new Manipulator();
        const newProject = localManipulator.createProject(name, id);

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