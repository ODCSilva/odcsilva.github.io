app.controller("SectionController", function($scope) {
	$scope.sections = [
		{
			name: "About",
			icon_name: "fa-user",
			icon_set: "fa"
		},
		{
			name: "Programming Languages",
			icon_name: "fa-code",
			icon_set: "fa"
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
});
