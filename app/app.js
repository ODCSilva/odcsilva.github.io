var app = angular.module("MyPortfolio", ['ngMaterial','ngRoute','ngAnimate'])
.config(function($mdThemingProvider, $routeProvider) {

	$mdThemingProvider.theme('default')
	.primaryPalette('orange')
	.accentPalette('orange')
	.backgroundPalette('grey', {
		'default':'900'
	})
	.dark();

	$routeProvider
	.when('/', {
		selectedIndex: 0
	})
	.when('/skills', {
		selectedIndex: 1
	})
	.when('/projects', {
		selectedIndex: 1
	})
	.when('/resume', {
		selectedIndex: 1
	})
	.when('/contact', {
		selectedIndex: 1
	})
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
.controller("TabController", function($scope, $location) {
	$scope.selectedIndex = 0;

	$scope.$watch('selectedIndex', function(newIndex, oldIndex) {
		switch(newIndex) {
			case 0:
				$location.url('/');
				break;
			case 1:
				$location.url('/skills');
				break;
			case 2:
				$location.url('/projects');
				break;
			case 3:
				$location.url('/resume');
				break;
			case 4:
				$location.url('/contact');
				break;
		}
	});

	$scope.sections = [
		{
			name: "About",
			icon_name: "fa-user",
			icon_set: "fa",
			src: "views/about.html"
		},
		{
			name: "Programming Languages & Skills",
			icon_name: "fa-code",
			icon_set: "fa",
			src: "views/languages.html"
		},
		{
			name: "Projects",
			icon_name: "fa-cogs",
			icon_set: "fa",
			src: "views/project.html"
		},
		{
			name: "Resume",
			icon_name: "fa-file-text-o ",
			icon_set: "fa",
			src: "views/resume.html"
		},
		{
			name: "Contact",
			icon_name: "fa-address-card-o",
			icon_set: "fa",
		    src: "views/contact.html"
		}
	];
})
.controller("LanguageController", function ($scope) {

	$scope.languages = [
		{
			name: "C++",
			icon_name: "devicon-cplusplus-plain colored"
		},{
			name: "C#",
			icon_name: "devicon-csharp-plain colored"
		},{
			name: "CSS3",
			icon_name: "devicon-css3-plain-wordmark colored"
		},{
			name: "HTML5",
			icon_name: "devicon-html5-plain-wordmark colored"
		},{
			name: "Java",
			icon_name: "devicon-java-plain colored"
		},{
			name: "JavaScript",
			icon_name: "devicon-javascript-plain colored"
		},{
			name: "jQuery",
			icon_name: "devicon-jquery-plain colored"
		},{
			name: "PHP",
			icon_name: "devicon-php-plain colored"
		},{
			name: "Python",
			icon_name: "devicon-python-plain colored"
		}
	];
})
.controller("JobController", function($scope) {
	$scope.jobs = [
		{
			title: "Programmer",
			company: "Almighty Software Company",
			dates: "March 2016 - Present",
			location: "Halifax, Nova Scotia",
			bullets: [
				{text: "Oversaw development of Android based project"},
				{text: "Contributed to both source code and user interface design"},
				{text: "Managed, coordinated, and communicated with the rest of the team to ensure project objectives were being met"},
				{text: "Participated in daily SCRUM meetings to assess progress and keep project in focus"},
				{text: "Participated in the development of technical specification for Android app"},
				{text: "Designed data models for Android app backend"},
				{text: "Adhered to high software quality standard"}
			]
		},{
			title: "Laptop Tech Support",
			company: "Convergys Corp.",
			dates: "March 2009 – September 2010",
			location: "Dartmouth, Nova Scotia",
			bullets: [
				{text: "Assisted customers with their mobile service issues and coordinated with other departments"
				+"to resolve customer issues when first-call resolution was not possible"},
				{text: "Provided Tier 3 to customer of AT&T Laptop Connect service"}
			]
		}
	];
});
