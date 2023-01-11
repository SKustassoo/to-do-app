export class Manipulator {

    mainAppFrameBuilder(activeProjectTitle, activeProjectId) {
        // get body for app layout 
        let mainAppLayout = document.body;
        
        // create header element
        mainAppLayout.appendChild(this.createAppHeader());

        // create body for app layout
        mainAppLayout.appendChild(this.createAppBody(activeProjectTitle, activeProjectId));

       return mainAppLayout;
    }
    

    createAppHeader() {
        let appHeader = document.createElement('header');

        const headerLogo = document.createElement('div');
        headerLogo.setAttribute('id','logo');
        headerLogo.innerHTML = 'NewTodo';

        appHeader.appendChild(headerLogo);

        return appHeader;
    }


    generateId() {
        return Date.now();
    };

    createAppBody(activeProjectTitle, activeProjectId) {
        let appBody = document.createElement('div');
        appBody.setAttribute('id','body');

        // lefit sidebar
        const bodyLeftSideBar = document.createElement('div');
        bodyLeftSideBar.setAttribute('id','leftSideBar');
        bodyLeftSideBar.setAttribute('class','dp01');

        // Left sidebar button area
        const buttonArea = document.createElement('div');
        buttonArea.setAttribute('id','buttonArea');


        const dateAreaTitle = document.createElement('h1');
        dateAreaTitle.innerHTML = "Tasks by dates";

        bodyLeftSideBar.appendChild(dateAreaTitle);

        buttonArea.appendChild(this.createButton('ALL', 'allButton'));
        buttonArea.appendChild(this.createButton('TODAY', 'todayButton'));
        buttonArea.appendChild(this.createButton('THIS WEEK', 'thisWeekButton'));
        bodyLeftSideBar.appendChild(buttonArea);

        // Left side bar project area
        const projectArea = document.createElement('div');
        projectArea.setAttribute('id','projects');

        const projectAreaTitle = document.createElement('h1');
        projectAreaTitle.innerHTML = "Projects";
        bodyLeftSideBar.appendChild(projectAreaTitle);

        projectArea.appendChild(this.createButton("Add new Project","addProject"));
        bodyLeftSideBar.appendChild(projectArea);


        // body right side area
        const bodyRightSideArea = document.createElement('div');
        bodyRightSideArea.setAttribute('id','bodyRightSideArea');
        bodyRightSideArea.setAttribute('class','dp01');
        

        const localDiv = document.createElement('div');
        localDiv.setAttribute('id', 'tasksInProgress');

        const taskAreaTitle = document.createElement('h1');
        taskAreaTitle.innerHTML = activeProjectTitle;
        taskAreaTitle.setAttribute('data-activeProjectId', activeProjectId);
        taskAreaTitle.setAttribute('id', "activeProjectTitle");
        bodyRightSideArea.appendChild(taskAreaTitle);
        bodyRightSideArea.appendChild(localDiv);

        bodyRightSideArea.appendChild(this.createButton("Add new task","addTaskButton"));

        // Append both side elements elements
        appBody.appendChild(bodyLeftSideBar);
        appBody.appendChild(bodyRightSideArea);

        return appBody;
    }

    // button factory function
    createButton(name, id) {
        const localButton = document.createElement('button');
        localButton.setAttribute('class','dashboardButton');
        localButton.classList.add('dp02');
        localButton.setAttribute('id', id);
        localButton.innerHTML = name;

        return localButton;
    }

    // task factory function
    createTask(id, content, date, project) {
        const localTask = document.createElement('div');
        localTask.setAttribute('class', 'taskRow');
        localTask.classList.add('dp02');
        localTask.setAttribute('data-project', project);
        localTask.setAttribute('id', id);

        const iconDiv = document.createElement('div');
        const localIcon = document.createElement('i');
        localIcon.setAttribute('class','fa-regular');
        localIcon.classList.add('fa-circle');
        iconDiv.appendChild(localIcon);
        localTask.appendChild(iconDiv);

        const localContent = document.createElement('p');
        localContent.innerHTML = content;
        localTask.appendChild(localContent);

        const localDate = document.createElement('p');
        localDate.innerHTML = date;
        localTask.appendChild(localDate);

        return localTask;
    }

    // project factory function
    createProject(name, id) {
        const localProject = document.createElement('div');
        localProject.setAttribute('class', 'projectRow');
        localProject.classList.add('dp02');
        localProject.setAttribute('id', id);

        const localContent = document.createElement('p');
        localContent.innerHTML = name;
        localProject.appendChild(localContent);

        const closeDiv = document.createElement('div');
        localProject.appendChild(closeDiv);

        const closeIcon = document.createElement('i');
        closeIcon.setAttribute('class','fa-solid');
        closeIcon.classList.add('fa-xmark');
        closeDiv.appendChild(closeIcon);

        return localProject;
    }

    // form temaplate for adding new projects
    createProjectForm() {
        const projectFormArea = document.createElement('div');
        projectFormArea.setAttribute('class', 'projectFormArea');
        projectFormArea.setAttribute('id', 'projectFormArea');
        projectFormArea.classList.add('dp02');
        projectFormArea.classList.add('formCard');

        const projectForm = document.createElement('form');
        projectForm.setAttribute('id', 'projectForm');
        const projectNameArea = document.createElement('input');
        projectNameArea.setAttribute('id', 'projectFormnameArea')
        projectForm.appendChild(projectNameArea);

        const acceptButton = this.createButton("Create new", "AcceptButton");
        const cancelButton = this.createButton("Cancel","CancelButton");

        projectForm.appendChild(acceptButton);
        projectForm.appendChild(cancelButton);
        projectFormArea.appendChild(projectForm);

        return projectFormArea;

    }

    // task temaplate for adding new projects
    createTaskForm() {
        const taskFormArea = document.createElement('div');
        taskFormArea.setAttribute('class', 'taskFormArea');
        taskFormArea.setAttribute('id', 'taskFormArea');
        taskFormArea.classList.add('dp02');
        taskFormArea.classList.add('formCard');


        const taskForm = document.createElement('form');
        taskForm.setAttribute('id', 'taskForm');
        // field to ask for task text content
        const taskNameArea = document.createElement('input');
        taskForm.appendChild(taskNameArea);

        // field to ask for task date
        const taskDateArea = document.createElement('input');
        taskDateArea.setAttribute('type', 'date');
        taskForm.appendChild(taskDateArea);

        const acceptButton = this.createButton("Create new","AcceptButton");
        const cancelButton = this.createButton("Cancel","CancelButton");

        taskForm.appendChild(acceptButton);
        taskForm.appendChild(cancelButton);

        taskFormArea.appendChild(taskForm);

        return taskFormArea;

    }



}

