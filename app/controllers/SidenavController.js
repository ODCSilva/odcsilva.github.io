app.controller("SidenavController", function($scope, $mdSidenav) {
	$scope.links = [
		{
			name: "Home",
			icon_name: "fa fa-home",
			sref: "home"
		},
		{
			name: "Skills",
			icon_name: "fa fa-code",
			sref: "skills"
		},
		{
			name: "Projects",
			icon_name: "fa fa-cogs",
			sref: "projects"
		},
		{
			name: "Experience",
			icon_name: "fa fa-graduation-cap",
			sref: "experience"
		},
		{
			name: "Contact",
			icon_name: "fa fa-address-card-o",
			sref: "contact"
		}
	];

	$scope.openRightMenu = function() {
		$mdSidenav('right').toggle();
	};
});
