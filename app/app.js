var app = angular.module("MyPortfolio", ['ngMaterial'])
.config(function($mdThemingProvider) {

	$mdThemingProvider.theme('default')
	.primaryPalette('orange')
	.accentPalette('orange')
	.backgroundPalette('grey', {
		'default':'900'
	})
	.dark();
})
.controller("SectionController", function($scope) {
	$scope.sections = [
		{
			name: "About",
			icon_name: "fa-user",
			icon_set: "fa",
			contents: "Hello"
		},
		{
			name: "Programming Languages",
			icon_name: "fa-code",
			icon_set: "fa",
			contents: "Hello"
		},
		{
			name: "Projects",
			icon_name: "fa-cogs",
			icon_set: "fa"
		},
		{
			name: "Skills",
			icon_name: "fa-wrench",
			icon_set: "fa"
		},
		{
			name: "Resume",
			icon_name: "fa-file-text-o ",
			icon_set: "fa"
		},
		{
			name: "Contact",
			icon_name: "fa-address-card-o",
			icon_set: "fa"
		}
	];
})
.controller("SidenavController", function($scope, $mdSidenav) {
	$scope.links = [
		{
			name: "About",
			icon_name: "fa-user",
			icon_set: "fa",
			contents: "Hello"
		},
		{
			name: "Programming Languages",
			icon_name: "fa-code",
			icon_set: "fa",
			contents: "Hello"
		},
		{
			name: "Projects",
			icon_name: "fa-cogs",
			icon_set: "fa"
		},
		{
			name: "Skills",
			icon_name: "fa-wrench",
			icon_set: "fa"
		},
		{
			name: "Resume",
			icon_name: "fa-file-text-o ",
			icon_set: "fa"
		},
		{
			name: "Contact",
			icon_name: "fa-address-card-o",
			icon_set: "fa"
		}
	];

	$scope.openRightMenu = function() {
		$mdSidenav('right').toggle();
	};
})
.controller("TabController", function($scope) {

	$scope.sections = [
		{
			name: "About",
			icon_name: "fa-user",
			icon_set: "fa",
			src: "about.html"
		},
		{
			name: "Programming Languages",
			icon_name: "fa-code",
			icon_set: "fa",
			src: "languages.html"
		},
		{
			name: "Projects",
			icon_name: "fa-cogs",
			icon_set: "fa",
			src: "languages.html"
		},
		{
			name: "Skills",
			icon_name: "fa-wrench",
			icon_set: "fa",
			src: "languages.html"
		},
		{
			name: "Resume",
			icon_name: "fa-file-text-o ",
			icon_set: "fa",
			src: "languages.html"
		},
		{
			name: "Contact",
			icon_name: "fa-address-card-o",
			icon_set: "fa",
		    src: "languages.html"
		}
	];
})
.controller("LanguageController", function ($scope) {

	$scope.languages = [
		{
			name: "C++",
			icon_name: "devicon-cplusplus-plain"
		},{
			name: "C#",
			icon_name: "devicon-csharp-plain"
		},{
			name: "CSS3",
			icon_name: "devicon-css3-plain-wordmark"
		},{
			name: "HTML5",
			icon_name: "devicon-html5-plain-wordmark"
		},{
			name: "Java",
			icon_name: "devicon-java-plain"
		},{
			name: "JavaScript",
			icon_name: "devicon-javascript-plain"
		},{
			name: "jQuery",
			icon_name: "devicon-jquery-plain"
		},{
			name: "PHP",
			icon_name: "devicon-php-plain"
		},{
			name: "Python",
			icon_name: "devicon-python-plain"
		}
	];
});
