angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  // Your code here
  var auth = Auth.isAuth();
  if (!auth) {
    $location.path('/signin'); 
  }

  $scope.link = {};

  //$scope.addLink = Links.addOne;

  $scope.addLink = function() {
    if ($scope.link.url.includes('http://')) {
      return Links.addOne($scope.link);  
    }
    return;
  };

  $scope.text = 'Enter a link';

  $scope.validate = function() {
    if ($scope.link.url === '') {
      $scope.text = 'Enter a link';
    } else if (!$scope.link.url.includes('http://')) {
      $scope.text = 'Invalid link. Requires "http".';
    } else {
      $scope.text = '';
    }
  };

});
