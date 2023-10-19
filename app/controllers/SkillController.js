app.controller("SkillController", function($scope, $mdMedia) {
    $scope.$mdMedia = $mdMedia;
	$scope.skillCategories = [
		{
			name: "Databases",
			icon: "fa fa-database",
			skills: [
				{ name: "MySQL" },
				{ name: "MariaDB"},
				{ name: "Oracle"},
				{ name: "MS Access"},
			]
		},{
			name: "Frameworks",
			icon: "fa fa-cubes",
			skills: [
				{ name: "AngularJS" },
				{ name: "Bootstrap" },
				{ name: "Laravel" }
			]
		},{
			name: "Graphics Design",
			icon: "fa fa-image",
			skills: [
				{ name: "Adobe Photoshop" },
				{ name: "Adobe Illustrator" },
				{ name: "3DS Max"},
				{ name: "SketchUp" }
			]
		},{
			name: "IDEs & Editors",
			icon: "fa fa-file-code-o",
			skills: [
				{ name: "Android Studio" },
				{ name: "Visual Studio" },
				{ name: "Visual Studio Code" },
				{ name: "Eclipse" },
				{ name: "Atom" },
				{ name: "JetBrains Suite" },
				{ name: "Brackets" }
			]
		},{
			name: "Operating Systems",
			icon: "fa fa-desktop",
			skills: [
				{ name: "Android" },
				{ name: "Debian" },
				{ name: "Linux" },
				{ name: "Ubuntu" },
				{ name: "Windows" }
			]
		},{
			name: "Development Platforms",
			icon: "fa fa-terminal",
			skills: [
				{ name: "Android" },
				{ name: "Linux" },
				{ name: "Windows" }
			]
		},{
			name: "Version Control",
			icon: "fa fa-code-fork",
			skills: [
				{ name: "Bitbucket" },
				{ name: "Git" },
				{ name: "GitHub" },
				{ name: "Team Foundation Server"}
			]
		},{
			name: "Programing & Scripting Languages",
			icon: "fa fa-code",
			skills: [
				{ name: "Kotlin" },
				{ name: "C++" },
				{ name: "C#" },
				{ name: "CSS3" },
				{ name: "HTML5" },
				{ name: "Java" },
				{ name: "JavaScript" },
				{ name: "jQuery" },
				{ name: "JSON" },
				{ name: "PHP" },
				{ name: "Python" },
				{ name: "XML" }
			]
		},{
			name: "Project Management",
			icon: "fa fa-refresh",
			skills: [
				{ name: "SCRUM" },
				{ name: "Agile Design" },
				{ name: "UML" },
				{ name: "Database Design and Administration" },
				{ name: "Unit Testing" }
			]
		},{
			name: "Development Tools/Misc",
			icon: "fa fa-wrench",
			skills: [
				{ name: "Node.js" },
				{ name: "Gulp.js" }
			]
		},{
			name: "Other Skills",
			icon: "fa fa-paint-brush",
			skills: [
				{ name: "Bilingual (English/Spanish)"}
			]
		}
	];
});
