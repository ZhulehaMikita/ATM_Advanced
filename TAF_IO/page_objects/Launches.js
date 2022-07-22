const BasePage = require('./Base_page');

class Launches extends BasePage {
    constructor(){
        super();
        this['Table header collection'] = '.headerCell__with-filter--3TwIL';
        this['Table header'] = '.gridHeader__grid-header--3qdVQ';
    }

    get url(){
        return this._url + '/' + this.project + '/launches';
    }
}

module.exports = Launches;