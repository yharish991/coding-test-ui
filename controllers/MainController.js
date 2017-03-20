/* eslint no-param-reassign: 0 */
/* eslint indent: 0 */
userApp.controller('MainController', function (
    $scope,
		users
  ) {
	function clearForm() {
		$scope.user.firstName = '';
		$scope.user.lastName = '';
		$scope.user.company = '';
		$scope.user.address = '';
		$scope.newUserForm.$setPristine();
	}

  $scope.createUser = function (isValid) {
		var user = {};
		if (isValid) {
			user = {
				firstName: $scope.user.firstName,
				lastName: $scope.user.lastName,
				company: $scope.user.company,
				address: $scope.user.address
			};
			users.createUser(user)
			.then(function (data) {
				$scope.userProfile = data;
				clearForm();
			}, function (reason) {
				console.log('Failed to create user because' + reason);
			});
		}
  };
});
