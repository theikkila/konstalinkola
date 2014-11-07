'use strict';

angular.module('konstasite')
  .controller('ProjectCtrl', function ($scope, $stateParams) {
   $scope.project = $stateParams.id;
   $scope.images = [];
    for (var i = 10 - 1; i >= 0; i--) {
      var x = Math.floor(Math.random()*200)+300;
      var y = Math.floor(Math.random()*200)+300;
      x = x - x%10;
      y = y - y%10;
      $scope.images.push({src:"http://lorempixel.com/"+x+"/"+y, alt: $stateParams.id});
    };
  });
