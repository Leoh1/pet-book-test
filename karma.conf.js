// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

process.env.CHROME_BIN = require('puppeteer').executablePath()
//process.env.NO_PROXY = 'localhost, 0.0.0.0/4201, 0.0.0.0/9876'; process.env.no_proxy = 'localhost, 0.0.0.0/4201, 0.0.0.0/9876';
module.exports = function (config) {
  config.set({
    basePath: '',
    browsers: ['ChromeHeadless'],
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-junit-reporter')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, './coverage'),
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    reporters: ['junit', 'progress', 'kjhtml'],
    junitReporter: {
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    /*customLaunchers: {
      ChromeHeadlessCI: {
          base: 'ChromeHeadless',
          flags: ['--no-sandbox']
      }
    },*/
    singleRun: false,
    restartOnFileChange: true
  });
};
