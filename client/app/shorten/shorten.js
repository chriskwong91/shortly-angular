angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = Links.addOne;
  // $scope.addLink = function(link) {
  //   return Links.addOne(link);
  // };
});
