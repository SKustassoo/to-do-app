
import {Manipulator} from "./manipulator.js";


export class App {

    activeProjectTitle = "My list";
    activeProjectId = "";
    

    buildAppFrame() {
        let toDoTaskApp = new Manipulator();
        this.activeProjectId = this.generateId();
        toDoTaskApp.mainAppFrameBuilder(this.activeProjectTitle, this.activeProjectId);
        this.addProject(this.activeProjectTitle, this.activeProjectId);
    };
    

    // set event listeners after initial build
    setListening(){

        // to add new projects
        document.getElementById('addProject').addEventListener('click', () => { 
            this.projectForm();
        });

        // add new task
        document.getElementById('addTaskButton').addEventListener('click', () => { 
            this.taskForm();
        });
 
    }
    

    //id generator
    generateId() {
        return Date.now();
    };


    // Project form building template
    projectForm() {

        // Build new form from manipulator
        let localAppForm = new Manipulator().createProjectForm();
        document.getElementById('projects').appendChild(localAppForm);

        // accept button functionality
        const acceptButton = document.getElementById('AcceptButton');
        acceptButton.addEventListener('click', (elem) => {
            const projectName = document.getElementById('projectForm').firstChild.value
            // add new project to the list
            this.addProject(projectName, this.generateId());
            // remove form from gui
            document.getElementById('projectFormArea').remove();
        });

        // cancel button functionality
        const cancelButton = document.getElementById('CancelButton');
        cancelButton.addEventListener('click', () => {
            document.getElementById('projectFormArea').remove();
        });

    }


    // create new project
    addProject(name, id) {
        // new project DOM element
        const localManipulator = new Manipulator();
        const newProject = localManipulator.createProject(name, id);

        // new 
        document.getElementById('projects').prepend(newProject);
        newProject.lastChild.addEventListener('click', () => {
            this.removeProject(id);
            if (id == activeProjectId) {
                activeProjectTitle = "";
                activeProjectId = "";
            }

        });
        newProject.addEventListener('click', () => {this.showActiveProject(id, name)});
    };


    // remove current project
    removeProject(id) {
        document.getElementById('projects').removeChild(document.getElementById(id));
    };


    // show project related tasks
    showActiveProject(projectId, projectName) {

        // update shown active project info 
        const _activeTitle = document.getElementById('activeProjectTitle')
        _activeTitle.innerHTML = projectName;
        _activeTitle.dataset.activeprojectid = projectId;

        // set active project info
        this.activeProjectTitle = projectName;
        this.activeProjectId = projectId;
    }


    // to show add new task form
    taskForm() {

        console.log("We are builing a new task");

        // Build new form from manipulator
        let _localAppForm = new Manipulator().createTaskForm();
        document.getElementById('tasksInProgress').appendChild(_localAppForm);


        // accept button functionality
        const acceptButton = document.getElementById('AcceptButton');

        acceptButton.addEventListener('click', (elem) => {
            const taskContent = document.getElementById('taskForm').firstChild.value
            // add new project to the list
            this.addTask(this.generateId(), taskContent, "17/04/2023",  this.activeProjectId);
            // remove form from gui
            document.getElementById('taskFormArea').remove();
        });

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