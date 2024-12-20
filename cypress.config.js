const { allureCypress } = require("allure-cypress/reporter");
const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  env: { ...process.env },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      return config;
    },
    specPattern: 'cypress/e2e/*.tests.{js, jsx, ts, tsx, feature, features, spec}'
  },
});
