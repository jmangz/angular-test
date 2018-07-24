let angular = window.angular;
let app = angular.module('RandomApp');

/**
 * A User factory which gets the user list
 * @param $http
 */

let userFactory = $http => {
  let UserF = {};
  UserF.getUsers = () => $http({
    method: 'GET',
    url: 'https://www.reqres.in/api/users'
  });
  return UserF;
};
app.factory('UserF', userFactory);
