var gulp = require('gulp');
var rjs = require('gulp-r');


gulp.task('default', function () {
  return gulp
    .src('src/workers/worker.js')
    .pipe(rjs({
      baseUrl: __dirname + '/src/workers',
      wrap: true,
      useStrict: true,
      optimize: 'none'
    }))
    .pipe(gulp.dest('build/workers'));
});

