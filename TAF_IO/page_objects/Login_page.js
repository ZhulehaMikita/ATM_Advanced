const BasePage = require('./Base_page');

class LoginPage extends BasePage {
    constructor(){
        super();
        this['Login field'] = '.loginForm__login-field--2NeYx .inputOutside__input--1Sg9p';
        this['Password field'] = '.loginForm__password-field--2IH1A .inputOutside__input--1Sg9p';
        this['Login button'] = 'button[type="submit"]';
        this['Login page section'] = '.pageBlockContainer__page-block-container--2K6rq';
    }

    get url(){
        return this._url + '/#login';
    }
}

module.exports =  LoginPage;
