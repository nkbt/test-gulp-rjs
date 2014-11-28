define(['./something'], function(something) {

  return function() {
    return ['core/stuff', something()];
  }
});