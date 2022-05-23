const Dashboards = require('./Dashboards');
const LoginPage = require('./Login_page');

class Pages {
    constructor(){
        this['Login'] = new LoginPage();
        this['Dashboards'] = new Dashboards();
    }
}

module.exports = new Pages (); 
