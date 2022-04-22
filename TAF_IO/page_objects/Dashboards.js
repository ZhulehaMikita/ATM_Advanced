const BasePage = require('./Base_page');

class Dashboards extends BasePage {
    constructor(){
        super();
        this.url = this.url + '/#default_personal/dashboard';
        this['All dashboards title'] = 'span[title="All Dashboards"]';
        this['Search input field'] = '.inputSearch__input--3e4db';
        this['Dashboard table header'] = '.headerCell__sorting-asc--21pSA';
        this['Add new dashboard central button'] = '.emptyDashboards__empty-dashboard-content--RZbNx button';
        this['Add new dashboard top right button'] = '.pageLayout__page-header--1Eh9w button';
        this['Default active button'] = '.dashboardPageToolbar__active-table--17uQ-';
        this['First part of message'] = '.emptyDashboards__empty-dashboard-headline--vhQK6';
        this['Second part of message'] = '.emptyDashboards__empty-dashboard-text--1MiEz';
    }
}

module.exports = Dashboards;