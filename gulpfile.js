var gulp = require("gulp");
var jshint = require("gulp-jshint");
var jshintStylish = require("jshint-stylish");
var karma = require('karma').server;

gulp.task("lint", function(){
  return gulp.src("app/**/*.js")
    .pipe(jshint())
    .pipe(jshint.reporter(jshintStylish));
});

gulp.task('test', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);
});

gulp.task('tdd', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js'
  }, done);
});



