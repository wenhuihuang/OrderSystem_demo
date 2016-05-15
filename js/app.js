angular.module('orderSystem', ['ionic', 'orderSystem.controllers', 'orderSystem.directives', 'orderSystem.services'])


.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider

		.state('app', {
		url: '/app',
		abstract: true,
		templateUrl: 'templates/home.html',
		controller: 'AppCtrl'
	})

	.state('home', {
			url: '/home',
			templateUrl: 'templates/home.html',
			controller: 'HomeCtrl'
		})
		.state('test', {
			url: '/test',
			templateUrl: 'templates/test.html'
		})

	$urlRouterProvider.otherwise('/home');
})