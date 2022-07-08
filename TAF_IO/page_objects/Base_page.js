const params = require('../step_definitions/data/parameters.json');
//const args = require('../config/arguments');
const args = {env: 'local'};
class BasePage {
    
    constructor(){
        this.url = params[args.env];
        this['Launches link'] = '=Launches';
    }

    openPage(){
        return browser.url(this.url);
    }

}

module.exports = BasePage;
