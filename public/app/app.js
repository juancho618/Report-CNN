let app = angular.module('reportApp', ['ngMaterial', 'hljs', 'infinite-scroll', 'ngAnimate']);

app.filter('range', function() {
    return function(input, total, size) {
      total = parseInt(total/size);
      for (var i=0; i<total; i++) {
        input.push(i);
      }  
      return input;
    };
  });
  app.filter('floor', function() {
    return (input) => Math.floor(input);
  });



  