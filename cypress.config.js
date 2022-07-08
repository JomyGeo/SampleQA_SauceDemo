const { defineConfig } = require('cypress')

const webpackPreprocessor = require('@cypress/webpack-preprocessor');
//const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");


async function setupNodeEvents(on, config) {

  await preprocessor.addCucumberPreprocessorPlugin(on, config);

   const options = {
    webpackOptions: {
      module: {
        rules: [
          {
            test: /\.feature$/,
            use: [
              {
                loader: '@badeball/cypress-cucumber-preprocessor/webpack',
                options: config,
              },
            ],
          },
        ],
      },
    },

  };

  on('file:preprocessor', webpackPreprocessor(options));  
  require("./cypress/plugins/index.js")(on, config);

  return config;
}
 




module.exports = defineConfig({
  viewportWidth: 1366,
  viewportHeight: 768,
  projectId: '68fk4m',
  chromeWebSecurity: false,
  parseSpecialCharSequences: false,
  defaultCommandTimeout: 50000,
  pageLoadTimeout: 150000,
  requestTimeout: 190000,
  responseTimeout: 190000,
  failOnStatusCode: false,
  numTestsKeptInMemory: 0,
  video: false,
  videoCompression: 32,
  videoUploadOnPasses: false,
  filterSpecs : true,
  env: {
 
    fusionURL: 'https://www.saucedemo.com/',
    Fusion_UserName: 'standard_user',
    Fusion_Password: 'secret_sauce',
    },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
     setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config),
      on('task', {
        failed: require('cypress-failed-log/src/failed')(),
      })
    },
   
    supportFile: false,
    setupNodeEvents,
    experimentalSessionAndOrigin: false,
    specPattern: 'cypress/e2e/**/**/*.{feature,features}',
  },
  
  setupNodeEvents,
})
