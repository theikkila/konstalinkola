'use strict';

angular.module('konstasite')
  .controller('MainCtrl', function ($scope) {
   $scope.images = [];
    for (var i = 10 - 1; i >= 0; i--) {
      var x = Math.floor(Math.random()*200)+300;
      var y = Math.floor(Math.random()*200)+300;
      x = x - x%10;
      y = y - y%10;

      //var x = 350;
      //var y = 250;
      $scope.images.push({src:"http://fpoimg.com/"+x+"x"+y+"?text=Konsta Linkola", alt: "Konsta Linkola"});
    };
  });
