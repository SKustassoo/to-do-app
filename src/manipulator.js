export class Manipulator {

    mainAppFrameBuilder() {
        // get body for app layout 
        let mainAppLayout = document.body;
        
        // create header element
        mainAppLayout.appendChild(this.createAppHeader());

        // create body for app layout
        mainAppLayout.appendChild(this.createAppBody());

        // create footer element
        mainAppLayout.appendChild(this.createAppFooter());

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

    createAppBody() {
        let appBody = document.createElement('div');
        appBody.setAttribute('id','body');

        // lefit sidebar
        const bodyLeftSideBar = document.createElement('div');
        bodyLeftSideBar.setAttribute('id','leftSideBar');

        // Left sidebar button area
        const buttonArea = document.createElement('div');
        buttonArea.setAttribute('id','buttonArea');

        const dasboardButton = document.createElement('button');
        dasboardButton.setAttribute('class','dasboardButton');
        dasboardButton.innerHTML = 'Dasboard';
        buttonArea.appendChild(dasboardButton);

        const todayButton = document.createElement('button');
        todayButton.setAttribute('class','dasboardButton');
        todayButton.innerHTML = 'Today';
        buttonArea.appendChild(todayButton);

        const thisWeekButton = document.createElement('button');
        thisWeekButton.setAttribute('class','dasboardButton');
        thisWeekButton.innerHTML = 'This week';
        buttonArea.appendChild(thisWeekButton);

        bodyLeftSideBar.appendChild(buttonArea);

        // Left side bar project area
        const projectArea = document.createElement('div');
        projectArea.setAttribute('id','projects');

        const projectAreaTitle = document.createElement('h1');
        projectAreaTitle.innerHTML = "Projects";



        projectArea.appendChild(projectAreaTitle);


        bodyLeftSideBar.appendChild(projectArea);

        // body right side area
        const bodyRightSideArea = document.createElement('div');
        bodyRightSideArea.setAttribute('id','bodyRightSideArea');

        const taskAreaTitle = document.createElement('h1');
        taskAreaTitle.innerHTML = "Title";
        bodyRightSideArea.appendChild(taskAreaTitle);


        // Append final elements
        appBody.appendChild(bodyLeftSideBar);
        appBody.appendChild(bodyRightSideArea);


        return appBody;
    }

    createAppFooter() {
        let appFooter = document.createElement('footer');
        return appFooter;
    }



}