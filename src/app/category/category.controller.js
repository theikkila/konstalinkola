'use strict';

angular.module('konstasite')
  .controller('CategoryCtrl', function ($scope, $state) {
  	$scope.data = $state.$current.data;
  	$scope.category = {
  		title: $scope.data.title,
  		images: []
  	};
  	if ($state.current.name == "portraits") {
  		$scope.category.body = "Portraits and other illegal shit";
  	} else {
  		$scope.category.body = "I'm adventure guy. I do adventure.";
  	}
  	for (var i = 10 - 1; i >= 0; i--) {
      var x = Math.floor(Math.random()*200)+300;
      var y = Math.floor(Math.random()*200)+300;
      x = x - x%10;
      y = y - y%10;
      $scope.category.images.push({project: "project-"+Math.floor(Math.random()*10000), src:"http://fpoimg.com/"+x+"x"+y+"?text="+$scope.category.title+" project", alt: "Konsta Linkola"});
    };
    $scope.goProject = function (projectid) {
    	// body...
    	$state.go("project", {id: projectid});
    }
  });
