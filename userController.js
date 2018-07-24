let angular = window.angular;
let app = angular.module('RandomApp');

/**
 * Controls the user
 * @param $scope
 * @param UserF
 */
let userController = ($scope, UserF) => {
  $scope.users = [];
  UserF.getUsers().then(res => $scope.users = res.data.data);
};
userController.$inject = ['$scope', 'UserFactory'];

app.controller('userController', userController);
