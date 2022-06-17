const Dashboards = require('./Dashboards');
const LoginPage = require('./Login_page');
const Launches = require('./Launches');

class Pages {
    constructor(){
        this['Login'] = new LoginPage();
        this['Dashboards'] = new Dashboards();
        this['Launches'] = new Launches();
    }
}

module.exports = new Pages (); 
