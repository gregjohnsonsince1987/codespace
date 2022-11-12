process.env.CHROME_BIN = require('puppeteer').executablePath()

module.exports = function(config)  
 {  
  config.set({  
    basePath: '',  
    frameworks: ['jasmine'],  
    files: [  
    'tests/**/*Spec.js'  
    ],  
    exclude: [  
    ],  
    preprocessors: {},  
    reporters: ['progress'],  
    port: 9876,  
    colors: true,  
    logLevel: config.LOG_INFO,  
    autoWatch: true,  
    browsers: ['Chrome',  'Chrome_without_security', 'Firefox'],  
    captureTimeout: 60000,  
    singleRun: false,
    // you can define custom flags
    customLaunchers: {
      Chrome_without_security: {
        base: 'Chrome',
        flags: ['--disable-web-security', '--disable-site-isolation-trials']
      }
    }
  });  
};  