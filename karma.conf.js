module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['browserify', 'jasmine'],
    files: [
      'app/**/*.spec.js'
    ],
    preprocessors: {
      'app/**/*.js': ['browserify']
    },
    browserify: {
      debug: true,
      transform: []
    },
    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-bro'
    ]
  });
};