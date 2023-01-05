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
        return appHeader;
    }

    createAppBody() {
        let appBody = document.createElement('div');
        return appBody;
    }

    createAppFooter() {
        let appFooter = document.createElement('footer');
        return appFooter;
    }



}