
import {Manipulator} from "./manipulator.js";
import {LocalStorageManipulator} from "./localStorage.js";


export class App {

    activeProjectTitle = "";
    activeProjectId = "";
    taskList = [];
    projectList = [];
    

    // builds orignal app layout
    buildAppFrame() {

        this.useLocalStorage();
        let toDoTaskApp = new Manipulator();

        // adds default project into the main app layout
        toDoTaskApp.mainAppFrameBuilder(localStorage.getItem('activeProjectTitle'), localStorage.getItem('activeProjectId'));
        this.addProject(localStorage.getItem('activeProjectTitle'), localStorage.getItem('activeProjectId'));
    };

    
    useLocalStorage() {
        let appLocalStorage = new LocalStorageManipulator();

        if (appLocalStorage.storageAvailable('localStorage')) {

            // search local storage for active project id and set it if available
            if (!localStorage.getItem('activeProjectId')) {
                localStorage.setItem('activeProjectId', this.generateId());
                //localStorage.getItem('activeProjectId');
            } else {
                //localStorage.getItem('activeProjectId');
            };

            // search local storage for active project title and set it if available
            if (!localStorage.getItem('activeProjectTitle')) {
                localStorage.setItem('activeProjectTitle', "My list");
                //localStorage.getItem('activeProjectTitle');
            } else {
                //localStorage.getItem('activeProjectTitle');
            };

            // search local storage for projects
            if (!localStorage.getItem('projectList')) {
                this.addProjectToArray(localStorage.getItem('activeProjectId'),localStorage.getItem('activeProjectTitle') )
                localStorage.setItem('projectList', JSON.stringify(this.projectList));
                //localStorage.getItem('activeProjectTitle');
            } else {
                //localStorage.getItem('activeProjectTitle');
            };

        } else {
            console.log("cant use local storage");
        };
    }
    

    // set event listeners after initial build
    setListening(){

        // to add new projects to the add new project button
        document.getElementById('addProject').addEventListener('click', () => { 
            this.projectForm();
        });

        // add new task listener to the add new task button
        document.getElementById('addTaskButton').addEventListener('click', () => { 
            this.taskForm();
        });

        // show all tasks to the show all proejct button
        document.getElementById('allButton').addEventListener('click', () => { 
            this.showAllTasks();
        });

        // show today tasks to the show today tasks button
        document.getElementById('todayButton').addEventListener('click', () => { 
            this.showTodayTasks();
        });

        // show this week tasks to the show this week tasks button
        document.getElementById('thisWeekButton').addEventListener('click', () => { 
            this.showWeekTasks();
        });
    }
    

    //id generator
    generateId() {
        return Date.now();
    };


    // Project form building template 
    projectForm() {

        // Builds new form using DOM manipulator
        let localAppForm = new Manipulator().createProjectForm();
        document.getElementById('projects').appendChild(localAppForm);

        // Adds accept button functionality
        const acceptButton = document.getElementById('AcceptButton');
        acceptButton.addEventListener('click', (elem) => {

            // get the project title element from DOM
            const projectName = document.getElementById('projectForm').firstChild.value

            // add new project to the list in the GUI
            const _projectId = this.generateId();
            this.addProject(projectName, _projectId);

            // set active project
            this.showActiveProject(_projectId, projectName);

            // show active project tasks
            this.showProejctRelatedTasks(_projectId);

            // remove form from GUI
            document.getElementById('projectFormArea').remove();

        });

        // Adds cancel button functionality
        const cancelButton = document.getElementById('CancelButton');

        // Removes project from the GUI
        cancelButton.addEventListener('click', () => {
            document.getElementById('projectFormArea').remove();
        });

        // remove the project from the storage list
        this.getProejctFromProjectArray(this.readProejctsFromArray(), _projectId);

    }

    // add new task to the list
    addProjectToArray(projectId, projectName) {
        const _projectInfo = {projectId, projectName};
        this.projectList.push(_projectInfo);

        localStorage.setItem('projectList', JSON.stringify(this.projectList));
    };

    readProejctsFromArray() {
        // Retrieve the array from local storage
        var _array = localStorage.getItem('projectList');
        // Parse it to something usable in js
        return JSON.parse(_array);
    };

    getProejctFromProjectArray(projectArray, projectId) {
        // loop trough the app projects array and returned project object
        for (let project = 0; project < projectArray.length; ++project) {
            if (projectArray[project].id == projectId) {
                return projectArray[project];
            };
        };
    }

     // create new project
     addProject(name, id) {
        // Build new project DOM element 
        const localManipulator = new Manipulator();
        const newProject = localManipulator.createProject(name, id);

        this.addProjectToArray(id, name);

        // add remove functionalty to the newly created project
        newProject.lastChild.addEventListener('click', () => {

            // modify current active project info
            this.showProejctRelatedTasks("000");
            this.showActiveProject("000", "No Project selected");

            // remove the project from the GUI
            this.removeProject(id);

            // remove all tasks related to the project from the list
            this.cleanTasklistFromRemovedProejctTasks(id);

        });

        // add functionality if the main body of the project is clicked
        newProject.firstChild.addEventListener('click', () => {

            // show the active project name and id on the active tasks header
            this.showActiveProject(id, name);

            // filter tasks by project id and show only related projects
            this.showProejctRelatedTasks(id);

        });

        // Add new project to the DOM
        document.getElementById('projects').prepend(newProject);
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


    // Show project related tasks only
    showProejctRelatedTasks(projectId) {

        // reset shown tasks
        document.getElementById('tasksInProgress').innerHTML = "";

        // loop trough the app tasklist array and show render all tasks taht are related to a certain project
        for (let task = 0; task < this.taskList.length; ++task) {
            if (this.taskList[task].project == projectId) {
                this.addTask(this.taskList[task].id, this.taskList[task].content, this.taskList[task].date , this.taskList[task].project );
            };
        };
    };

    // Show all tasks taht are in the tasks list
    showAllTasks(){

        // Set the tasks section title
        activeProjectTitle = "All tasks";
        document.getElementById("activeProjectTitle").innerHTML = activeProjectTitle;
        document.getElementById('tasksInProgress').innerHTML = "";

        // loop trough the tasklist and render all tasks
        for (let task = 0; task < this.taskList.length; ++task) {
                this.addTask(this.taskList[task].id, this.taskList[task].content, this.taskList[task].date , this.taskList[task].project );
        };
    };

    // Show tasks that share todays date
    showTodayTasks(){

        // Set the tasks section title
        activeProjectTitle = "Today tasks";
        document.getElementById("activeProjectTitle").innerHTML = activeProjectTitle;
        document.getElementById('tasksInProgress').innerHTML = "";

        document.getElementById('tasksInProgress').innerHTML = "";
        console.log('show tasks where date is today');

        // formats today date
        const timeElapsed = Date.now();
        let today = "";
        let day = new Date(timeElapsed).getDate();
        let month = new Date(timeElapsed).getMonth()+1; 
        const year = new Date(timeElapsed).getFullYear();

        // adds 0 in front of single digit months
        if (String(month).length == 1) {
            month = "0"+month
        }

        // adds 0 in front of single digit days
        if (String(day).length == 1) {
            day = "0"+day
        }

        today = year+"-"+month+"-"+day;

        // loops trough all tasks to render tasks that share a date = today
        for (let task = 0; task < this.taskList.length; ++task) {
            if (this.taskList[task].date == today) {
                this.addTask(this.taskList[task].id, this.taskList[task].content, this.taskList[task].date , this.taskList[task].project );
            };
        };
    }


    // show tasks that date is on current week
    showWeekTasks() {

        // Set the tasks section title
        activeProjectTitle = "This week tasks";
        document.getElementById("activeProjectTitle").innerHTML = activeProjectTitle;
        document.getElementById('tasksInProgress').innerHTML = "";

        document.getElementById('tasksInProgress').innerHTML = "";
        console.log('show tasks where date is in this week');


        // formats today date
        const currentDate = new Date();
        let dayOfWeek = currentDate.getDay();
        let weekFirstDate = currentDate.getDate() - dayOfWeek+1;
        let weekLastDate = currentDate.getDate() + (8 - dayOfWeek);

        console.log(dayOfWeek);
        console.log(weekFirstDate);
        console.log(weekLastDate);

        // loops trough all tasks to render tasks that share a date = in this week
        for (let task = 0; task < this.taskList.length; ++task) {
            if (this.taskList[task].date.split('-')[2] >= weekFirstDate && this.taskList[task].date.split('-')[2] <= weekLastDate) {
                this.addTask(this.taskList[task].id, this.taskList[task].content, this.taskList[task].date , this.taskList[task].project );
            };
        };

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


    // used to remove single task form the tasklist
    removeTask(id) {
        // remove task from the taskList
        for (let task = 0; task < this.taskList.length; ++task) {
            if (this.taskList[task].id == id) {
                this.taskList.splice(this.taskList.indexOf(this.taskList[task]), 1)
            };
        };

        // remove task from the gui
        document.getElementById('tasksInProgress').removeChild(document.getElementById(id));
    };

    // used to remove all tasks fromt he taskList when a project is deleted
    cleanTasklistFromRemovedProejctTasks(projectId) {

        let _localtaskList = [];

        // remove task from the taskList
        for (let task = 0; task < this.taskList.length; ++task) {
            if (this.taskList[task].project != projectId) {
                _localtaskList.push(this.taskList[task]);
            };
        };

        // update tasklist
        this.taskList = _localtaskList;
    };
}

