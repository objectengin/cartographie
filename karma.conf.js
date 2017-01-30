var webpackConfig = require('./config/webpack.test');

module.exports = function (config) {
  var _config = {
    basePath: '',

    frameworks: ['jasmine'],

    files: [
      {pattern: './config/karma-test-shim.js', watched: false}
    ],

    preprocessors: {
      './config/karma-test-shim.js': ['coverage', 'webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    webpackServer: {
      noInfo: true
    },

    reporters: [ 'mocha', 'coverage', 'remap-coverage'],
    coverageReporter: {
      type: 'in-memory'
    },

    remapCoverageReporter: {
      'text-summary': null,
      json: './report/coverage.json',
      html: './report/html',
      cobertura: './coverage/cobertura.xml'
    },
    //plugins: ['karma-coverage', 'karma-remap-coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_TRACE,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true
  };

  config.set(_config);
};