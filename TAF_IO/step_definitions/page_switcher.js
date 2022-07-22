const pages = require('../page_objects/Pages');

class PageSwitcher {
    constructor(){
        this.state = {};
    }

    setState(pageName){
        this.state = pages[pageName];
    }

    getState(){
        this.state.project = this.project;
        return this.state;
    }

    getUrl() {
        return this.state.url;
    }

    getElement(elementName){
        return this.state[elementName];
    }

    setProject(project){
        this.project = project;
    }
}

module.exports = new PageSwitcher (); 
