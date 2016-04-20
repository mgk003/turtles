'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'myApp.auth',
  'ui.router',
  'myApp.myprofile'
]).config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home/home.html'
      //controller: 'MainCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'authentication/login.html',
      controller: 'LoginController',
      controllerAs: "loginctrl"
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'authentication/signup.html',
      controller: 'SignupController',
      controllerAs: "signup"
    })
    .state('myprofile', {
      url: '/myprofile',
      templateUrl: 'myProfile/myprofile.html',
      controller: 'myProfileController',
      bindToController:true,
      controllerAs: "myProfile"
    });
  $urlRouterProvider.otherwise('home');
}]);