app.controller("userController", function($scope, UserF) {
  $scope.users = [];
  UserF.getUsers()
    .then(function(res) {
      $scope.users = res.data.data;
    })
});
