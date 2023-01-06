

export class Manipulator {

    mainAppFrameBuilder() {
        // get body for app layout 
        let mainAppLayout = document.body;
        
        // create header element
        mainAppLayout.appendChild(this.createAppHeader());

        // create body for app layout
        mainAppLayout.appendChild(this.createAppBody());

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

    createAppBody() {
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
        projectArea.appendChild(projectAreaTitle);
        projectArea.appendChild(this.createProject('My project',  this.generateId()));
        projectArea.appendChild(this.createProject('My project2',  this.generateId()));
        projectArea.appendChild(this.createButton("Add new Project","addProject"));
        bodyLeftSideBar.appendChild(projectArea);


        // body right side area
        const bodyRightSideArea = document.createElement('div');
        bodyRightSideArea.setAttribute('id','bodyRightSideArea');
        bodyRightSideArea.setAttribute('class','dp01');
        

        const localDiv = document.createElement('div');
        localDiv.setAttribute('class', 'tasksInProgress');

        const taskAreaTitle = document.createElement('h1');
        taskAreaTitle.innerHTML = "Title";
        bodyRightSideArea.appendChild(taskAreaTitle);
        bodyRightSideArea.appendChild(localDiv);

        bodyRightSideArea.appendChild(this.createButton("Add new task"));





        // Append final elements
        appBody.appendChild(bodyLeftSideBar);
        appBody.appendChild(bodyRightSideArea);


        return appBody;
    }

    createButton(name, id) {
        const localButton = document.createElement('button');
        localButton.setAttribute('class','dashboardButton');
        localButton.classList.add('dp02');
        localButton.setAttribute('id', id);
        localButton.innerHTML = name;

        return localButton;
    }

    createTask(content, date, project) {
        const localTask = document.createElement('div');
        localTask.setAttribute('class', 'taskRow');
        localTask.classList.add('dp02');
        localTask.setAttribute('data', project);

        const localIcon = document.createElement('i');
        localIcon.setAttribute('class','fa-regular');
        localIcon.classList.add('fa-circle');
        localTask.appendChild(localIcon);

        const localContent = document.createElement('p');
        localContent.innerHTML = content;
        localTask.appendChild(localContent);

        const localDate = document.createElement('p');
        localDate.innerHTML = date;
        localTask.appendChild(localDate);

        return localTask;
    }

    createProject(name, id) {
        const localProject = document.createElement('div');
        localProject.setAttribute('class', 'projectRow');
        localProject.classList.add('dp02');
        localProject.setAttribute('id', id);

        const localIcon = document.createElement('i');
        localIcon.setAttribute('class','fa-solid');
        localIcon.classList.add('fa-diagram-project');
        localProject.appendChild(localIcon);

        const localContent = document.createElement('p');
        localContent.innerHTML = name;
        localProject.appendChild(localContent);

        const closeIcon = document.createElement('i');
        closeIcon.setAttribute('class','fa-solid');
        closeIcon.classList.add('fa-xmark');
        localProject.appendChild(closeIcon);

        return localProject;
    }
}

