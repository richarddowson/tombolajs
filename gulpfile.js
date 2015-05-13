var gulp = require("gulp");
var jshint = require("gulp-jshint");
var jshintStylish = require("jshint-stylish");
var karma = require("karma").server;
var source = require("vinyl-source-stream");
var browserify = require("browserify");
var watchify = require("watchify");
var reactify = require("reactify");
var streamify = require("gulp-streamify");
var uglify = require("gulp-uglify");
var htmlreplace = require("gulp-html-replace");
var less = require("gulp-less");
var cssminify = require("gulp-minify-css");
var rename = require("gulp-rename");

var path = {
  HTML: "app/index.html",
  MINIFIED_OUT: "app.min.js",
  OUT: "app.js",
  DEST_BUILD: "build",
  DEST_DIST: "dist",
  ENTRY_POINT: "./app/app.jsx",
  LESS: "app/styles.less",
  LESS_OUT: "styles.css",
  MINIFIED_LESS_OUT: "styles.min.css"
};

gulp.task("lint", function(){
  return gulp.src("app/**/*.js")
    .pipe(jshint())
    .pipe(jshint.reporter(jshintStylish));
});

gulp.task("test", function (done) {
  karma.start({
    configFile: __dirname + "/karma.conf.js",
    singleRun: true
  }, done);
});

gulp.task("tdd", function (done) {
  karma.start({
    configFile: __dirname + "/karma.conf.js"
  }, done);
});

gulp.task("copy", function(){
  gulp.src(path.HTML)
    .pipe(gulp.dest(path.DEST_BUILD));
});

gulp.task("watch", function() {
  gulp.watch(path.HTML, ["copy"]);

  gulp.watch("app/**/*.less", function(){
    gulp.src(path.LESS)
      .pipe(less())
      .pipe(gulp.dest(path.DEST_BUILD));
  });

  var watcher  = watchify(browserify({
    entries: [path.ENTRY_POINT],
    transform: [reactify],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
  }));

  return watcher.on("update", function () {
    watcher.bundle()
      .pipe(source(path.OUT))
      .pipe(gulp.dest(path.DEST_BUILD))
    console.log("Updated");
    })
    .bundle()
    .pipe(source(path.OUT))
    .pipe(gulp.dest(path.DEST_BUILD));
});

gulp.task("build-dev", function(){
  gulp.src(path.HTML)
    .pipe(gulp.dest(path.DEST_BUILD));

  gulp.src(path.LESS)
    .pipe(less())
    .pipe(gulp.dest(path.DEST_BUILD));

  browserify({
    entries: [path.ENTRY_POINT],
    transform: [reactify],
    debug: true
  })
    .bundle()
    .pipe(source(path.OUT))
    .pipe(gulp.dest(path.DEST_BUILD));
});

gulp.task("build-prod", function(){
  gulp.src(path.HTML)
    .pipe(htmlreplace({
      "js": path.MINIFIED_OUT,
      "css": path.MINIFIED_LESS_OUT
    }))
    .pipe(gulp.dest(path.DEST_DIST));

  gulp.src(path.LESS)
    .pipe(less())
    .pipe(cssminify())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest(path.DEST_DIST));

  browserify({
    entries: [path.ENTRY_POINT],
    transform: [reactify]
  })
  .bundle()
  .pipe(source(path.MINIFIED_OUT))
  .pipe(streamify(uglify(path.MINIFIED_OUT)))
  .pipe(gulp.dest(path.DEST_DIST));
});

