app.directive('jobExperience', function() {
	return {
		restrict: 'E',
		scope: {
			job: '='
		},
		templateUrl: "app/directives/jobExperience.html"
	};
});
