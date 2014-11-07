'use strict';

angular.module('konstasite')
  .controller('CategoryCtrl', function ($scope, $state) {
  	$scope.data = $state.$current.data;
    var names = [{ city: "Lake City" },{ city: "Fresno" },{ city: "Powder Springs" },{ city: "Lindale" },{ city: "Oklahoma City" },{ city: "Cheektowaga" },{ city: "Ferndale" },{ city: "Blacksburg" },{ city: "Fort Bragg" },{ city: "Woonsocket" },{ city: "Clayton" },{ city: "Bloomingdale" },{ city: "Smithers" },{ city: "Arlington" },{ city: "Grand Forks" },{ city: "Rawlins" },{ city: "Laredo" },{ city: "Hudsonville" },{ city: "Orlando" },{ city: "Stoneham" },{ city: "Billerica" },{ city: "Bradenton" },{ city: "Rancho Cucamonga" },{ city: "Prince George" },{ city: "Wilmington" },{ city: "Wabash" },{ city: "Sacramento" },{ city: "Emmaus" },{ city: "Rosenberg" },{ city: "Seekonk" },{ city: "North Providence"}];
  	$scope.category = {
  		title: $scope.data.title,
  		images: []
  	};
  	if ($state.current.name == "portraits") {
  		$scope.category.body = "Portraits and other stuff";
  	} else {
  		$scope.category.body = "I'm adventure guy. I do adventure.";
  	}
    names.forEach(function(city){
      var x = Math.floor(Math.random()*200)+300;
      var y = Math.floor(Math.random()*200)+300;
      x = x - x%10;
      y = y - y%10;
      $scope.category.images.push({project: city.city, src:"http://lorempixel.com/"+x+"/"+y, alt: "Adventure project"});
      
    });

    $scope.goProject = function (projectid) {
    	// body...
    	$state.go("project", {id: projectid});
    }
  });
