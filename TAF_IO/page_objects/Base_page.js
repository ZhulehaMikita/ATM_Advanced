const params = require('../step_definitions/data/parameters.json');
const args = require('../config/arguments');
//const args = {env: 'local'};
class BasePage {
    
    constructor(){
        this._url = params[args.env];
        this['Dashboards link'] = "//*[text()='Dashboards']/ancestor::div[@class ='sidebarButton__sidebar-nav-btn--1prEO']";
        this['Launches link'] = "//*[text()='Launches']/ancestor::div[@class ='sidebarButton__sidebar-nav-btn--1prEO']";
    }

    openPage(){
        return browser.url(this.url);
    }

}

module.exports = BasePage;
