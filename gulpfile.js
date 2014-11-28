var gulp = require("gulp");
var amdOptimize = require("amd-optimize");
var concat = require('gulp-concat');



var through = require('through2');
var path = require('path');

var optimizeWorker = through.obj(function (file, enc, cb) {

  var ext = path.extname(file.path),
    name = path.basename(file.path, ext);

  var stream = gulp.src("src/**/*.js")
    .pipe(amdOptimize("workers/" + name))
    .pipe(concat(name + ext))
    .pipe(gulp.dest("build/workers"));

  return cb(null, stream);

});

gulp.task('default', function () {

  return gulp.src("src/workers/*.js")
    .pipe(optimizeWorker)

});