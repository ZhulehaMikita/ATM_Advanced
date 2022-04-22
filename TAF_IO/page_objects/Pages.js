const Dashboards = require('./Dashboards');
const Login_page = require('./Login_page');

class Pages {
    constructor(){
        this['Login'] = new Login_page();
        this['Dashboards'] = new Dashboards();
    }
}

module.exports = new Pages (); 