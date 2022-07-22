let login = require('./utils/functions.js');
const pageSwitcher = require('../step_definitions/page_switcher');
const credentials = require('../step_definitions/data/credentials.json');
const logger  = require("../config/logger.config.js");
const {expect} = require("chai");
const {arrayOfHeaderTitles, test} = require('./utils/data.js');


describe('Verification of test with single data', () => {

    beforeEach(async () => {
        return login('default');
    });

    it('Verification of the table header on launch pannel', async function ()  {
        pageSwitcher.setState('Launches');
        await $(pageSwitcher.getElement('Launches link')).click();
        await $(pageSwitcher.getElement('Table header')).waitForExist({ timeout: 5000 });
        let values = await $$(pageSwitcher.getElement('Table header collection')).map(el => el.getText());
        expect(values).to.deep.equal(arrayOfHeaderTitles);
        logger.info(`"Table header" for all test runs pannel is verified`);
    });

});

describe('Verification of data driven test', () => {

    test.forEach( (el, index) => {
        it(`Verify table header for each test run №${index+1}`, async ()=> {
            await login('default');
            pageSwitcher.setState('Launches');
            await $(pageSwitcher.getElement('Launches link')).click();
            await $(el).click();
            await $(pageSwitcher.getElement('Table header')).waitForExist({ timeout: 5000 });
            let values = await $$(pageSwitcher.getElement('Table header collection')).map(el => el.getText());     
            expect(values).to.deep.equal(arrayOfHeaderTitles);
            logger.info(`"Table header" for test run №${index + 1} is verified`);
        });
    });

});