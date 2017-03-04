app.controller("SidenavController", function($scope, $mdSidenav) {
	$scope.openRightMenu = function() {
	  $mdSidenav('right').toggle();
	};
});
