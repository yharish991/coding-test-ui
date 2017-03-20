userApp.factory('users', function ($q, $http, REST_URL) {
  function createUser(user) {
    var deferred = $q.defer();

    $http.post(REST_URL.backendUrl + 'users', user).success(function (data) {
      deferred.resolve(data.data.attributes.userProfile);
    }).error(function (error) {
      deferred.reject(error);
    });
    return deferred.promise;
  }

  return {
    createUser: createUser
  };
});
