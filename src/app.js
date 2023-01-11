
import {Manipulator} from "./manipulator.js";


export class App {

    activeProjectTitle = "My list";
    activeProjectId = "";
    taskList = [];
    

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


        // show all tasks
        document.getElementById('allButton').addEventListener('click', () => { 
            this.showAllTasks();
        });

        // show today tasks
        document.getElementById('todayButton').addEventListener('click', () => { 
            this.showTodayTasks();
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

            // get the project title element from dom
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

    // show project related tasks only
    showProejctRelatedTasks(projectId) {
        document.getElementById('tasksInProgress').innerHTML = "";

        console.log('read project related tasks from the taskList and show them');

        for (let task = 0; task < this.taskList.length; ++task) {
            if (this.taskList[task].project == projectId) {
                this.addTask(this.taskList[task].id, this.taskList[task].content, this.taskList[task].date , this.taskList[task].project );
                
            };
        };
    };


    showAllTasks(){
        console.log("showing all tasks");
        document.getElementById('tasksInProgress').innerHTML = "";

        for (let task = 0; task < this.taskList.length; ++task) {
                this.addTask(this.taskList[task].id, this.taskList[task].content, this.taskList[task].date , this.taskList[task].project );
        };
    };

    showTodayTasks(){
        document.getElementById('tasksInProgress').innerHTML = "";
        console.log('show tasks wehre date is today');

        const timeElapsed = Date.now();

        let today = "";
        let day = new Date(timeElapsed).getDate();
        let month = new Date(timeElapsed).getMonth()+1; 
        const year = new Date(timeElapsed).getFullYear();

        if (String(month).length == 1) {
            month = "0"+month
        }

        if (String(day).length == 1) {
            day = "0"+day
        }

        today = year+"-"+month+"-"+day;

        console.log(today);

        for (let task = 0; task < this.taskList.length; ++task) {
            if (this.taskList[task].date == today) {
                this.addTask(this.taskList[task].id, this.taskList[task].content, this.taskList[task].date , this.taskList[task].project );
                
            };
        };

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
        newProject.addEventListener('click', () => {

            // show the active prject name and id on the active tasks header
            this.showActiveProject(id, name);

            // filter tasks by project id and show only related projects
            this.showProejctRelatedTasks(id);

        });
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
            //get info form form
            const taskContent = document.getElementById('taskForm')[0].value;
            const taskDate = document.getElementById('taskForm')[1].value;

            // add new project to the list
            this.addTask(this.generateId(), taskContent, taskDate, this.activeProjectId);
            this.appendtaskToList(this.generateId(), taskContent, taskDate, this.activeProjectId);
            // remove form from gui
            document.getElementById('taskFormArea').remove();
        });
    }


    // add new task to the list
    addTask(id, content, date, project) {
        const localManipulator = new Manipulator();
        const newTask = localManipulator.createTask(id, content, date, project);

        document.getElementById('tasksInProgress').prepend(newTask);
        newTask.firstChild.addEventListener('click', () => {
            // remove the task
            this.removeTask(id);
        });

    };

    // push the new task into the taskList
    appendtaskToList(id, content, date, project){
        const _taskInfo = {id, content, date, project};
        this.taskList.push(_taskInfo);
    }


    removeTask(id) {
        // remove task from the taskList
        for (let task = 0; task < this.taskList.length; ++task) {
            if (this.taskList[task].id == id) {
                this.taskList.splice(this.taskList.indexOf(this.taskList[task]), 1)
            };
        };

        // remove task dfrom the gui
        document.getElementById('tasksInProgress').removeChild(document.getElementById(id));
        
    };
    
}

