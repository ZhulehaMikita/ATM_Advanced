const { When, Then } = require('@wdio/cucumber-framework');
const pageSwitcher = require('./page_switcher');
const credentials = require('../step_definitions/data/credentials.json');
const { expect } = require('chai');
const logger  = require("../config/logger.config.js");

When('The page is loaded as {string} user', async function (user){
    pageSwitcher.setState('Login');
    pageSwitcher.getState().openPage();
    await $(pageSwitcher.getElement('Login page section')).waitForExist({ timeout: 5000 });
    await $(pageSwitcher.getElement('Login field')).setValue(credentials[user].login);
    await $(pageSwitcher.getElement('Password field')).setValue(credentials[user].password);
    await $(pageSwitcher.getElement('Login button')).click();
    logger.info(`"${user}" user has been logged in successfully`);
});

When('the {string} page is switched to', function(value){
    pageSwitcher.setState(value);
    pageSwitcher.getState().openPage();
    logger.info(`"${value}" page is switched to`);
});

Then('{string} page should be opened', async function (value){
    await browser.pause(1000);
    pageSwitcher.setState(value);
    expect(await browser.getUrl()).to.be.equal(pageSwitcher.getUrl());
    logger.info(`"${value}" page is opened`);
});

Then('{string} should contain {string} text', async function(title, value){
    await $(pageSwitcher.getElement(title)).waitForExist({ timeout: 5000 });
    expect(await $(pageSwitcher.getElement(title)).getText()).to.be.equal(value);
    logger.info(`"${title}" element contains "${value}" text`);
});

Then('{string} should be disabled', async function(value){
    await $(pageSwitcher.getElement(value)).waitForExist({ timeout: 5000 });
    expect(await $(pageSwitcher.getElement(value)).isEnabled()).to.equal(false);
    logger.info(`"${value}" is disabled`);
});

Then('Elements of {string} are equal to:', async function(value, title){
    let arr1 = await $$(pageSwitcher.getElement(value)).map(el => el.getText());
    let arr2 = [].concat.apply([], title.rawTable);
    expect(arr1).to.deep.equal(arr2);
    logger.info(`Elements of "${arr1}" are equal to "${arr2}"`);
});

Then('the {string} element should be visible', async function(value){
    await $(pageSwitcher.getElement(value)).waitForExist({ timeout: 5000 });
    expect(await $(pageSwitcher.getElement(value)).isDisplayed()).to.be.equal(true);
    logger.info(`"${value}" element is visible`);
});