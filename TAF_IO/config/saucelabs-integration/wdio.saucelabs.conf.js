const {config} = require('../wdio.conf.js');
const defaultBrowserSauceOptions = {
    build: `WDIO CucumberJS: Sauce Labs Desktop Web build-${new Date().getTime()}`,
    screenResolution: '1920x1080',
};

config.user = "oauth-zhulehamikita-4a55c";
config.key = "d8ddf5b1-f2a6-42a1-b41c-8ab0529e0c94";
config.region = "eu";

config.capabilities = [

    {
        browserName: 'chrome',
        platformName: 'Windows 10',
        browserVersion: 'latest',
        'sauce:options': {
            build: `WDIO CucumberJS: Sauce Labs Desktop Web build-${new Date().getTime()}`,
            screenResolution: '1920x1080',
        },
    },
    {
        browserName: 'firefox',
        platformName: 'Windows 10',
        browserVersion: 'latest',
        'sauce:options': {
            build: `WDIO CucumberJS: Sauce Labs Desktop Web build-${new Date().getTime()}`,
            screenResolution: '1920x1080',
        }
    }
];

let index =  config.services.indexOf('chromedriver');
config.services.splice(index, 1);
config.services = config.services.concat('sauce');

exports.config = config;