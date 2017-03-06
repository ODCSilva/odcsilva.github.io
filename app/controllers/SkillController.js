app.controller("SkillController", function($scope) {
	$scope.skillCategories = [
		{
			name: "Databases",
			skills: [{
				name: "MySQL",
				icon_name: "devicon-mysql-plain-wordmark"
			},{
				name: "Oracle",
				icon_name: "devicon-oracle-original"
			}]
		},{
			name: "Frameworks",
			skills: [{
				name: "AngularJS",
				icon_name: "devicon-angularjs-plain"
			},{
				name: "Bootstrap",
				icon_name: "devicon-bootstrap-plain-wordmark"
			},{
				name: "Laravel",
				icon_name: "devicon-laravel-plain-wordmark"
			}]
		},{
			name: "Operating Systems",
			skills: [{
				name: "Android",
				icon_name: "devicon-android-plain"
			},{
				name: "Debian",
				icon_name: "devicon-debian-plain"
			},{
				name: "Linux",
				icon_name: "devicon-linux-plain"
			},{
				name: "Ubuntu",
				icon_name: "devicon-ubuntu-plain"
			},{
				name: "Windows",
				icon_name: "devicon-windows8-original"
			}]
		},{
			name: "Platforms",
			skills: [{
				name: "Android",
				icon_name: "devicon-android-plain"
			},{
				name: "Linux",
				icon_name: "devicon-linux-plain"
			},{
				name: "Windows",
				icon_name: "devicon-windows8-original"
			}]
		},{
			name: "Version Control",
			skills: [{
				name: "Bitbucket",
				icon_name: "devicon-bitbucket-plain-wordmark"
			},{
				name: "Git",
				icon_name: "devicon-git-plain"
			},{
				name: "GitHub",
				icon_name: "devicon-github-plain"
			}]
		}
]
});
