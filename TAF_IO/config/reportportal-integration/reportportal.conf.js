
const conf = {
    reportPortalClientConfig: { // report portal settings
      token: '1f8933a6-e25e-4746-8589-361605f0005a',
      endpoint: 'http://localhost:8080/api/v1',
      launch: 'superadmin_TEST_EXAMPLE',
      project: 'superadmin_personal',
      mode: 'DEFAULT',
      debug: false,
      description: "Launch description text",
      attributes: [{key:"tag", value: "foo"}],
      headers: {"foo": "bar"}, // optional headers for internal http client
    },
    reportSeleniumCommands: true, // add selenium commands to log
    seleniumCommandsLogLevel: 'error', // log level for selenium commands
    autoAttachScreenshots: false, // automatically add screenshots
    screenshotsLogLevel: 'info', // log level for screenshots
    parseTagsFromTestTitle: false, // parse strings like `@foo` from titles and add to Report Portal
    cucumberNestedSteps: false, // report cucumber steps as Report Portal steps
    autoAttachCucumberFeatureToScenario: false, // requires cucumberNestedSteps to be true for use
    sanitizeErrorMessages: true, // strip color ascii characters from error stacktrace
    sauceLabOptions : {
      enabled: true, // automatically add SauseLab ID to rp tags.
      sldc: "eu" // automatically add SauseLab region to rp tags.
    }
  };

module.exports = conf;