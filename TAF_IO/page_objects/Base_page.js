const params = require('../step_definitions/data/parameters.json');
const args = require('../config/arguments');

class BasePage {
    
    constructor(){
        this.url = params[args.env];
    };

    openPage(){
        return browser.url(this.url);
    }
}

module.exports = BasePage;