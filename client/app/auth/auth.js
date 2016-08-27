// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('shortly.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};

  $scope.signin = function () {
    Auth.signin($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
        $scope.text = 'Username or Password Invalid.';
      });
  };

  $scope.signup = function () {
    Auth.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.signout = Auth.signout;

  $scope.text = 'Enter username and password.';

  $scope.validate = function(cb) {
    var un = $scope.user.username;
    var pw = $scope.user.password;
    if (un.length < 3 || pw.length < 3) {
      $scope.text = 'Username or password needs to have more than 3 characters.';
    } else {
      cb();
    }
  };
});
