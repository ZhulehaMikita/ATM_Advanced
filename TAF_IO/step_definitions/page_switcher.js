const pages = require('../page_objects/Pages');

class PageSwitcher {
    constructor(){
        this.currentPageState = {};
    }

    setState(pageName){
        this.state = pages[pageName];
    }

    getState(){
        return this.state;
    }

    getUrl() {
        return this.state.url;
    }

    getElement(elementName){
        return this.state[elementName];
    }
}

module.exports = new PageSwitcher (); 