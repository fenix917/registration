exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
	host: 'localhost',
        port: 4444,
	    url: 'http://testmylogin.ml/',
	    smartWait: 5000,
            browser: "chrome",
            restart: true,
            deprecationWarnings: false,
windowSize: "maximize" 
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codecepts',
  translation: 'ru-RU',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}
