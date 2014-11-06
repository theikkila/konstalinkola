'use strict';

angular.module('konstasite', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'wu.masonry'])
  .config(function ($stateProvider, $urlRouterProvider) {
    var sp = $stateProvider;
    sp.state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
    	controller: 'MainCtrl'
    });
    sp.state('adventure', {
        url: '/adventure',
        templateUrl: 'app/category/category.html',
    	controller: 'CategoryCtrl'
    });
    sp.state('portraits', {
        url: '/portraits',
        templateUrl: 'app/category/category.html',
    	controller: 'CategoryCtrl'
    });
    sp.state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html',
    	controller: 'AboutCtrl'
    });
    sp.state('contact', {
        url: '/',
        templateUrl: 'app/contact/contact.html',
    	controller: 'ContactCtrl'
    });
    $urlRouterProvider.otherwise('/');
  })
;
