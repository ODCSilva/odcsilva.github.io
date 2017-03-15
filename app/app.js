var app = angular.module("MyPortfolio", ['ngMaterial','ui.router'])
.config(function($mdThemingProvider, $stateProvider, $urlRouterProvider) {

	$mdThemingProvider.theme('default')
	.primaryPalette('orange')
	.accentPalette('orange')
	.backgroundPalette('grey', {
		'default':'900'
	}).dark();

	$urlRouterProvider.otherwise("/");

	$stateProvider
	.state('home', {
		url: '/'
	})
	.state('skills', {
		url: '/skills'
	})
	.state('projects', {
		url: '/projects'
	})
	.state('experience', {
		url: '/experience'
	})
	.state('contact', {
		url: '/contact'
	});
});
