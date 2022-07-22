
const pageSwitcher = require('../../step_definitions/page_switcher');
const credentials = require('../../step_definitions/data/credentials.json');
const logger  = require("../../config/logger.config.js");

async function login(user){
    pageSwitcher.setState('Login');
    pageSwitcher.getState().openPage();
    await $(pageSwitcher.getElement('Login page section')).waitForExist({ timeout: 5000 });
    await $(pageSwitcher.getElement('Login field')).setValue(credentials[user].login);
    await $(pageSwitcher.getElement('Password field')).setValue(credentials[user].password);
    await $(pageSwitcher.getElement('Login button')).click();
    logger.info(`"${user}" user has been logged in successfully`);
}

module.exports = login;