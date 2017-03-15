app.controller("LanguageController", function ($scope, $mdMedia, LanguageService) {
	$scope.$mdMedia = $mdMedia;
	$scope.languages = LanguageService.all();
});
