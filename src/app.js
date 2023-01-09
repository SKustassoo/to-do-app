import {ToDoItem} from "./toDoItem.js";
import {TaskProject} from "./taskProject.js";
import {Manipulator} from "./manipulator.js";


export class App {

    activeProjectTitle = "My list";
    activeProjectId = "";
    activeProjectId = this.generateId();

    ALL_BUTTON = document.getElementById('allButton');
    TODAY_BUTTON = document.getElementById('todayButton');
    THIS_WEEK_BUTTON = document.getElementById('thisWeekButton');

    buildAppFrame() {
        let toDoTaskApp = new Manipulator();
        toDoTaskApp.mainAppFrameBuilder(this.activeProjectTitle, this.activeProjectId);
        this.addProject(this.activeProjectTitle, this.activeProjectId);
    };

    setListening(){
        // to add new projects
        document.getElementById('addProject').addEventListener('click', () => { 
            this.projectForm()
        });

        // add new task
        document.getElementById('addTaskButton').addEventListener('click', () => { 
            this.addTask(this.generateId(), "This is a task content", "17/03/2023", this.activeProjectId)
        });
 

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
        
        const _activeTitle = document.getElementById('activeProjectTitle')

        _activeTitle.innerHTML = projectName;
        _activeTitle.dataset.activeprojectid = projectId;

        // update shown active project info 
       //document.getElementById(projectId).children[0].innerHTML = projectName;
       //document.getElementById(projectId).dataset.activeProjectId = projectId;


        // set active project info
        this.activeProjectTitle = projectName;
        this.activeProjectId = projectId;
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