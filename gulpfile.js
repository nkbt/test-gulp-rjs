var gulp = require("gulp");
var amdOptimize = require("amd-optimize");
var concat = require('gulp-concat');


gulp.task("workers:first", function () {

  return gulp.src("src/**/*.js")
    // Traces all modules and outputs them in the correct order.
    .pipe(amdOptimize("workers/first"))
    .pipe(concat("first.js"))
    .pipe(gulp.dest("build/workers"));

});

gulp.task("workers:second", function () {

  return gulp.src("src/**/*.js")
    // Traces all modules and outputs them in the correct order.
    .pipe(amdOptimize("workers/second"))
    .pipe(concat("second.js"))
    .pipe(gulp.dest("build/workers"));

});

gulp.task("default", ['workers:first', 'workers:second']);
