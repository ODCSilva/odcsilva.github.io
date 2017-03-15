app.controller("TabController", function($scope, $state) {
	$scope.$state = $state;
	$scope.sections = [
		{
			name: "Home",
			icon_name: "fa fa-home",
			sref: "home",
			template: 'views/about.html'
		},
		{
			name: "Skills",
			icon_name: "fa fa-code",
			sref: "skills",
			template: 'views/skills.html'
		},
		{
			name: "Projects",
			icon_name: "fa fa-cogs",
			sref: "projects",
			template: 'views/projects.html'
		},
		{
			name: "Experience & Education",
			icon_name: "fa fa-graduation-cap",
			sref: "experience",
			template: 'views/experience.html'
		},
		{
			name: "Contact",
			icon_name: "fa fa-address-card-o",
			sref: "contact",
			template: 'views/contact.html'
		}
	];
});
