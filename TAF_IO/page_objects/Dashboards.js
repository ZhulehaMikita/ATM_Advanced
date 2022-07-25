const BasePage = require('./Base_page');

class Dashboards extends BasePage {
    constructor(){
        super();
        this['All dashboards title'] = 'span[title="All Dashboards"]';
        this['Search input field'] = '.inputSearch__input--3e4db';
        this['Dashboard table header'] = '.headerCell__sorting-asc--21pSA';
        this['Add new dashboard central button'] = '.emptyDashboards__empty-dashboard-content--RZbNx button';
        this['Add new dashboard top right button'] = '.pageLayout__page-header--1Eh9w button';
        this['Default active button'] = '.dashboardPageToolbar__active-table--17uQ-';
        this['First part of message'] = '.emptyDashboards__empty-dashboard-headline--vhQK6';
        this['Second part of message'] = '.emptyDashboards__empty-dashboard-text--1MiEz';
        this['First dashboard'] = 'a.dashboardTable__name--1sWJs';
        this['First widget'] = '.react-draggable:nth-child(1)';
        this['Second widget'] = '.react-draggable:nth-child(4)';
        this['Resizing option'] = '.react-draggable:nth-child(1) .react-resizable-handle';
        this['First widget content'] = '.react-draggable:nth-child(1) div.c3 svg';
        this['Scrollable window element'] = '.scrollWrapper__with-footer--25_wC';
        this['Add new dashboard popup'] = '.modalLayout__modal-window--2CP8n';
        this['Add new dashboard title'] = '.modalHeader__modal-title--2ph9G';
        this['Dashboard name field'] = '.input__input--3DC8i';
        this['Dashboard description field'] = '.inputTextArea__input-text-area--71Pxq';
        this['Widget name field'] = '.input__input--3DC8i';
        this['Widget description field'] = '.inputTextArea__input-text-area--71Pxq';
        this['Active off button'] = '.inputBigSwitcher__slider--1dQsG';
        this['Add button'] = '.bigButton__big-button--ivY7j=Add';
        this['Next step button first'] = '.wizardControlsSection__button--1hxmV';
        this['Next step button second'] = '.wizardControlsSection__button--1hxmV:nth-child(2)';
        this['Demo filter button'] = '.inputRadio__toggler--1-jGS';
        this['Dashboard buttons'] = 'span.ghostButton__text--eUa9T';
        this['Dashboard breadcrumb'] = '.pageBreadcrumbs__page-breadcrumbs-item--1GzrN:nth-child(2)';
        this['Add new widget button'] = "//*[@class='dashboardItemPage__buttons-block---uDIb']//*[text() = 'Add new widget']";
        this['Launch statics chart widget radiobutton'] = '.widgetTypeItem__widget-type-item--17_3G:nth-child(2) span.inputRadio__toggler--1-jGS';
        this['Launches duration chart widget radiobutton'] ='.widgetTypeItem__widget-type-item--17_3G:nth-child(4) span.inputRadio__toggler--1-jGS';
        this['Launch statics chart widget title'] = '.react-grid-item:nth-child(1) .widgetHeader__widget-name-block--7fZoV';
        this['Launches duration chart widget title'] = '.react-grid-item:nth-child(1) .widgetHeader__widget-name-block--7fZoV';
        this['Delete icon'] = '.icon__icon-delete--1jIHF';
        this['Delete button'] = '.modalFooter__button-container--2RXFR:nth-child(2)';
    }

    get url(){
        return this._url + '/' + this.project + '/dashboard';
    }
}

module.exports = Dashboards;