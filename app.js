/* eslint indent: 0 */  // --> OFF
// create the module and name it userApp
var userApp = angular.module('userApp', ['ngRoute']);

// configure our routes
userApp.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/home.html',
		controller: 'MainController'
	})
	.otherwise({
		templateUrl: 'views/home.html',
		controller: 'MainController'
	});
});
