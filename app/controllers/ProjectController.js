app.controller("ProjectController", function ($scope, $mdDialog, $mdMedia, LanguageService) {
	$scope.$mdMedia = $mdMedia;
	$scope.showDialog = showDialog;
	$scope.projects = [
		{
			name: "Maze Solver",
			description: "A console application that solves ASCII mazes from text files using stacks.",
			languages: [LanguageService.cpp],
			platforms: "Windows",
			screenshots: [
				{ src: "assets/img/projects/maze-solver/1.jpg"},
				{ src: "assets/img/projects/maze-solver/2.jpg"}
			],
			github: "https://github.com/ODCSilva/Maze-Solver",
		},
		{
			name: "Note2",
			description: "A web app that allows you to create, read, update, and delete notes using the Microsoft's OneNote REST API.",
			languages: [LanguageService.html5, LanguageService.css3, LanguageService.js, LanguageService.jquery],
			platforms: "Web",
			screenshots: [
				{ src: "assets/img/projects/note2/1.jpg"}
			],
			github: "https://github.com/ODCSilva/Note2",
			demo: "demos/note2/"
		},
		{
			name: "KinSHIFT",
			description: "KinSHIFT is a fitness-oriented social media app for Android that I worked on with Almighty Software Company.",
			languages: [LanguageService.java],
			platforms: "Android",
			screenshots: [
				{ src: "assets/img/projects/kinSHIFT/1.jpg"},
				{ src: "assets/img/projects/kinSHIFT/2.jpg"},
				{ src: "assets/img/projects/kinSHIFT/3.jpg"},
				{ src: "assets/img/projects/kinSHIFT/4.png"}
			]
		},
		{
			name: "Zombie Sim",
			description: "Conway's Game of Life meets the zombie apocalypse in this console-based zombie vs human simulation.",
			languages: [LanguageService.cpp],
			platforms: "Windows",
			screenshots: [
				{ src: "assets/img/projects/zombiesim/1.jpg"},
				{ src: "assets/img/projects/zombiesim/2.jpg"},
			],
			github: "https://github.com/ODCSilva/Zombie-Sim"
		},
		{
			name: "Line Editor",
			description: "A console-based line editor that uses linked lists to "
			+ "read and store a file buffer. Changes made are store in an output file specified in the command-line arguments.",
			languages: [LanguageService.cpp],
			platforms: "Windows",
			screenshots: [
				{ src: "assets/img/projects/lineeditor/1.jpg"},
				{ src: "assets/img/projects/lineeditor/2.jpg"}
			],
			github: "https://github.com/ODCSilva/Line-Editor/"
		},
		{
			name: "Commute Planner",
			description: "A web app that uses Google Map's direction API to calculate steps, commute time, and distance between two points. Uses XML as response data.",
			languages: [LanguageService.html5, LanguageService.js],
			platforms: "Web",
			screenshots: [
				{ src: "assets/img/projects/commute-planner/1.jpg"},
				{ src: "assets/img/projects/commute-planner/2.jpg"}
			],
			github: "https://github.com/ODCSilva/Commute-Planner/"
		},
		{
			name: "Star Trivia",
			description: "I built this Android app as part of an assigment to genrate quizzes out of a text file. Wrong answers needed to be randomized, as well as the order they were presented in. The question order was also ranzomized.",
			languages: [LanguageService.java],
			platforms: "Android",
			screenshots: [
				{ src: "assets/img/projects/star-trivia/1.jpg"},
				{ src: "assets/img/projects/star-trivia/2.jpg"},
				{ src: "assets/img/projects/star-trivia/3.jpg"},
				{ src: "assets/img/projects/star-trivia/4.jpg"},
				{ src: "assets/img/projects/star-trivia/5.jpg"}
			],
			github: "https://github.com/ODCSilva/StarTrivia/"
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
});
