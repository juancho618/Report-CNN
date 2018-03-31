let app = angular.module('reportApp', ['ngMaterial', 'hljs']);
app.filter('range', function() {
    return function(input, total) {
      total = parseInt(total/64);
      for (var i=0; i<total; i++) {
        input.push(i);
      }  
      return input;
    };
  });
  app.filter('floor', function() {
    return (input) => Math.floor(input);
  });