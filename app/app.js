var app = angular.module("MyPortfolio", ['ngMaterial','ngRoute','ngAnimate'])
.config(function($mdThemingProvider, $routeProvider) {

	$mdThemingProvider.theme('default')
	.primaryPalette('orange')
	.accentPalette('orange')
	.backgroundPalette('grey', {
		'default':'900'
	}).dark();

	$routeProvider
	.when('/', {
		selectedIndex: 0
	})
	.when('/skills', {
		selectedIndex: 1
	})
	.when('/projects', {
		selectedIndex: 2
	})
	.when('/resume', {
		selectedIndex: 3
	})
	.when('/contact', {
		selectedIndex: 4
	})
})
.service('LanguageService', function() {
	return {
		cpp: {
			name: "C++",
			icon_name: "devicon-cplusplus-plain colored"
		},
		csharp: {
			name: "C#",
			icon_name: "devicon-csharp-plain colored"
		},
		css3: {
			name: "CSS3",
			icon_name: "devicon-css3-plain-wordmark colored"
		},
		html5: {
			name: "HTML5",
			icon_name: "devicon-html5-plain-wordmark colored"
		},
		java: {
			name: "Java",
			icon_name: "devicon-java-plain colored"
		},
		js: {
			name: "JavaScript",
			icon_name: "devicon-javascript-plain colored"
		},
		jquery: {
			name: "jQuery",
			icon_name: "devicon-jquery-plain colored"
		},
		php: {
			name: "PHP",
			icon_name: "devicon-php-plain colored"
		},
		python: {
			name: "Python",
			icon_name: "devicon-python-plain colored"
		},
		all: function() {
			return [
				this.cpp,
				this.csharp,
				this.css3,
				this.html5,
				this.js,
				this.java,
				this.jquery,
				this.php,
				this.python
			];
		}
	};
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
.controller("TabController", function($rootScope, $scope, $location) {
	$scope.selectedIndex = $rootScope.selectedIndex;

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
			icon_name: "fa fa-user",
			src: "views/about.html"
		},
		{
			name: "Skills",
			icon_name: "fa fa-code",
			src: "views/languages.html"
		},
		{
			name: "Projects",
			icon_name: "fa fa-cogs",
			src: "views/project.html"
		},
		{
			name: "Experience & Education",
			icon_name: "fa fa-graduation-cap",
			src: "views/resume.html"
		},
		{
			name: "Contact",
			icon_name: "fa fa-address-card-o",
			src: "views/contact.html"
		}
	];
})
.controller("LanguageController", ['$scope', '$mdMedia', 'LanguageService',
function ($scope, $mdMedia, LanguageService) {
	$scope.$mdMedia = $mdMedia;
	$scope.languages = LanguageService.all();
}])
.controller("ExperienceController", ['$scope', '$mdMedia', function ($scope, $mdMedia) {
	$scope.$mdMedia = $mdMedia;
	$scope.jobs = [
		{
			title: "Programmer",
			company: "Almighty Software Company",
			dates: "March 2016 - Present",
			location: "Halifax, Nova Scotia",
			duties: [
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
			duties: [
				{text: "Provided Tier 3 to customer of AT&T Laptop Connect service"},
				{text: "Assisted customers with their mobile service issues and coordinated with other departments"
				+"to resolve customer issues when first-call resolution was not possible"}
			]
		},{
			title: "ADSL Support Technician (Tier 3)",
			company: "Coqui.net Corporation",
			dates: "March 2002 – July 2005",
			location: "Guaynabo, Puerto Rico, Unites States",
			duties: [
				{text: "Answered incoming calls from ADSL clients and assisted them during the troubleshooting process"},
				{text: "Interacted and coordinated with relevant departments to resolve customer issues"},
				{text: "Created and updated trouble tickets in order to track of problem status"}
			]
		},{
			title: "Sales Floor Associate",
			company: "Walmart Corp",
			dates: "April 1999 - Janurary 2002",
			location: "Bayamon, Puerto Rico, Unites States",
			duties: [
				{ text:" Greeted customers and determined their needs and wants"},
				{ text:" Discussed type, quality and number of merchandise required for purchase"},
				{ text:" Recommended merchandise based on individual requirements"},
				{ text:" Advised customers on utilization and care of merchandise"},
				{ text:" Provided advice to clients regarding particular products or services"},
				{ text:" Explained the use and advantage of merchandise to customers"},
				{ text:" Answered customers’ queries and concerns"},
				{ text:" Showed the live working of merchandise"},
				{ text:" Assisted in display of merchandise"}
			]
		}
	];

	$scope.education = [
		{
			program: "Diploma in Information Technology, Programming Concentration",
			dates: "September 2015 - Present",
			institution: "Nova Scotia Community College",
			location: "Institute of Technology, Halifax, NS",
			achievments: [
				{ text: "Graduating summer 2017"},
				{ text: "Maintained high academic standards throughout the entirety of the program"}
			],
			courses: [
				{ name: "Intro Windows Administration", code: "OSYS 1200" },
				{ name: "Technical Communications", code: "COMM 1100" },
				{ name: "Introduction to Networking", code: "NETW 1100" },
				{ name: "Intro to Programming - Python", code: "PROG 1102" },
				{ name: "Website Development", code: "WEBD 1000" },
				{ name: "Introduction to Databases", code: "DBAS 1001" },
				{ name: "Human Relations", code: "INFT 1300" },
				{ name: "Operating Systems - Unix", code: "OSYS 1000" },
				{ name: "User Interface Design & Dev", code: "APPD 1001" },
				{ name: "Database Development I", code: "DBAS 1100" },
				{ name: "Intro Obj Oriented Programming", code: "PROG 1400" },
				{ name: "Hardware", code: "HDWR 1100" },
				{ name: "Project Management", code: "INFT 2100" },
				{ name: "Web Application Development 1", code: "INET 2005" },
				{ name: "Programming C++", code: "PROG 2100" },
				{ name: "J2EE Development", code: "WEBD 3102" },
				{ name: "Professional Development", code: "INFT 2000" },
				{ name: "Mobile Application Development", code: "APPD 2000" },
				{ name: "Data Structures", code: "PROG 2400"},
				{ name: "Advanced OOP", code: "PROG 2200"},
				{ name: "Rich Internet Applications", code: "WEBD 2000"},
				{ name: "Windows Programming - C#", code: "PROG 2500"},
				{ name: "Development Process Controls", code: "INFT 4001"},
				{ name: "Programming Capstone", code: "INFT 3000"}
			]
		},
		{
			program: "Adult Learning Program",
			dates: "February 2014 - May 2015",
			institution: "Nova Scotia Community College",
			location: "Akerley Campus, Halifax, NS",
			achievments: [
				{ text: "Graduated with Honours with an average of 98%"},
				{ text: "Received Academic Achievement and Commitment to Learning awards"}
			]
		},
		{
			program: "High School",
			dates: "A long time ago...",
			institution: "Luis Pales Matos High School",
			location: "Bayamón, Puerto Rico, United States",
		}
	];
}])
.controller("ProjectController", ['$scope', '$mdDialog', '$mdMedia', 'LanguageService',
function ($scope, $mdDialog, $mdMedia, LanguageService) {
	$scope.$mdMedia = $mdMedia;
	$scope.showDialog = showDialog;
	$scope.projects = [
		{
			name: "Maze Solver",
			description: "A C++ console application that solves ASCII mazes from text files using stacks.",
			languages: LanguageService.cpp,
			platforms: "Windows",
			screenshots: [
				{ src: "assets/img/projects/maze-solver/1.jpg"},
				{ src: "assets/img/projects/maze-solver/2.jpg"}
			],
			github: "https://github.com/ODCSilva/Maze-Solver",
		}
	];

	function showDialog($event, $img) {

		var parentEl = angular.element(document.body);
		$mdDialog.show({
			parent: parentEl,
			targetEvent: $event,
			templateUrl: "views/templates/projdialog.templ.html",
			locals: {
				img: $img
			},
			controller: DialogController,
			clickOutsideToClose:true
		});

		function DialogController($scope, $mdDialog, img) {
			$scope.img = img;
			$scope.closeDialog = function() {
				$mdDialog.hide();
			}
		}
	}

}]);
