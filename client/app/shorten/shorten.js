angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  // Your code here
  $scope.link = {};

  var auth = Auth.isAuth();
  console.log(auth);
  if (!auth) {
    $location.path('/signin'); 
  }
  
  $scope.addLink = Links.addOne;

  $scope.isAuth = Auth.isAuth;
  // $scope.addLink = function(link) {
  //   return Links.addOne(link);
  // };
});
