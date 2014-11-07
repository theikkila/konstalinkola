'use strict';

angular.module('konstasite')
  .controller('MainCtrl', function ($scope) {
   $scope.images = [];
   var tmp = [];
    for (var i = 10 - 1; i >= 0; i--) {
      var x = Math.floor(Math.random()*300)+400;
      var y = Math.floor(Math.random()*300)+400;
      x = x - x%10;
      y = y - y%10;
      tmp.push({width: y, height: x, src:"http://fillmurray.com/"+x+"/"+y+"?text=Konsta Linkola", alt: "Konsta Linkola"});
      if (tmp.length >= 10) {
        //tmp.push({src:"http://fpoimg.com/1600x400?text=ISO ja LEVEE", alt: "Konsta Linkola", class: "large"});
        $scope.images = tmp;
      };
    };
  });
