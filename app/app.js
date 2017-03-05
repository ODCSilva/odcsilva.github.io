var app = angular.module("MyPortfolio", ['ngMaterial'])
.config(function($mdThemingProvider) {
	$mdThemingProvider.theme('default')
	.primaryPalette('orange')
	.accentPalette('orange')
	.backgroundPalette('grey', {
		'default':'900'
	})
	.dark();
});
