app.factory("UserF", function($http) {
  const UserF = {};
  UserF.getUsers = function() {
      return $http({
          method: 'GET',
          url: 'https://www.reqres.in/api/users',
      })
  };
  return UserF;
});
