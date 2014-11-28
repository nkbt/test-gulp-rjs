define(['../core/unused', '../core/something'], function(unused, something) {

  return function() {
    return ['workers/second', unused(), something()];
  }

});