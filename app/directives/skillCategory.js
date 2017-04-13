app.directive('skillCategory', function() {
	return {
		restrict: 'E',
		scope: {
			category: '='
		},
		templateUrl: "app/directives/skillCategory.html"
	};
});
