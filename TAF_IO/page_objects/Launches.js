const BasePage = require('./Base_page');

class Launches extends BasePage {
    constructor(){
        super();
        this.url = this.url + '/#default_personal/dashboard';
        this['Table header collection'] = '.headerCell__with-filter--3TwIL';
        this['Table header'] = '.gridHeader__grid-header--3qdVQ';
    }
}

module.exports = Launches;