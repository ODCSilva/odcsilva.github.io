app.controller("SkillController", function($scope) {
	$scope.skillCategories = [
		{
			name: "Databases",
			skills: [{
				name: "MySQL",
				icon_name: "devicon-mysql-plain colored colored"
			},{
				name: "Oracle",
				icon_name: "devicon-oracle-original colored"
			}]
		},{
			name: "Frameworks",
			skills: [{
				name: "AngularJS",
				icon_name: "devicon-angularjs-plain colored"
			},{
				name: "Bootstrap",
				icon_name: "devicon-bootstrap-plain colored"
			},{
				name: "Laravel",
				icon_name: "devicon-laravel-plain colored"
			}]
		},{
			name: "Graphic Design",
			skills: [{
				name: "Adobe Photoshop",
				icon_name: "devicon-photoshop-plain colored"
			},{
				name: "Adobe Illustrator",
				icon_name: "devicon-illustrator-plain colored"
			}]
		},{
			name: "Operating Systems",
			skills: [{
				name: "Android",
				icon_name: "devicon-android-plain colored"
			},{
				name: "Debian",
				icon_name: "devicon-debian-plain colored"
			},{
				name: "Linux",
				icon_name: "devicon-linux-plain"
			},{
				name: "Ubuntu",
				icon_name: "devicon-ubuntu-plain colored"
			},{
				name: "Windows",
				icon_name: "devicon-windows8-original colored"
			}]
		},{
			name: "Development Platforms",
			skills: [{
				name: "Android",
				icon_name: "devicon-android-plain colored"
			},{
				name: "Linux",
				icon_name: "devicon-linux-plain colored"
			},{
				name: "Windows",
				icon_name: "devicon-windows8-original colored"
			}]
		},{
			name: "Version Control",
			skills: [{
				name: "Bitbucket",
				icon_name: "devicon-bitbucket-plain colored"
			},{
				name: "Git",
				icon_name: "devicon-git-plain colored"
			},{
				name: "GitHub",
				icon_name: "devicon-github-plain colored"
			}]
		}
	];
});
