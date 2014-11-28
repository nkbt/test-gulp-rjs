define(['../core/stuff'], function(stuff) {

  return function() {
    return ['workers/worker', stuff()];
  }

});