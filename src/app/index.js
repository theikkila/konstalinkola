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
        data: {title: "Adventure"},
        templateUrl: 'app/category/category.html',
    	controller: 'CategoryCtrl'
    });
    sp.state('portraits', {
        url: '/portraits',
        data: {title: "Portraits"},
        templateUrl: 'app/category/category.html',
    	controller: 'CategoryCtrl'
    });
    sp.state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html',
    	controller: 'AboutCtrl'
    });
    sp.state('contact', {
        url: '/contact',
        templateUrl: 'app/contact/contact.html',
    	controller: 'ContactCtrl'
    });
    sp.state('project', {
        url: '/project/:id',
        templateUrl: 'app/project/project.html',
        controller: 'ProjectCtrl'
    });
    $urlRouterProvider.otherwise('/');
  })
;
