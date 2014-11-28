## What I expect 

```
(function () {define('core/something',[],function() {

  return function() {
    return 'something';
  }
});
define('core/stuff',['core/something'], function(something) {

  return function() {
    return ['core/stuff', something()];
  }
});
define('workers/worker',['core/stuff'], function(stuff) {

  return function() {
    return ['workers/worker', stuff()];
  }

});
}());
```

## Gulp, FAIL

Config:
```
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
```

Result

```
(function () {define('../core/something',[],function() {

  return function() {
    return 'something';
  }
});
define('../core/stuff',['./something'], function(something) {

  return function() {
    return ['core/stuff', something()];
  }
});
define('worker',['../core/stuff'], function(stuff) {

  return function() {
    return ['workers/worker', stuff()];
  }

});
}());
```

## r.js FAIL

```bash
r.js -o baseUrl=src name=workers/worker out=build/workers/worker.js optimize=none
```

I am getting something better, but still broken

```
define('core/something',[],function() {

  return function() {
    return 'something';
  }
});
define('core/stuff',['./something'], function(something) {

  return function() {
    return ['core/stuff', something()];
  }
});
define('workers/worker',['../core/stuff'], function(stuff) {

  return function() {
    return ['workers/worker', stuff()];
  }

});
```
