angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth, $location) {
  var auth = Auth.isAuth();
  if (!auth) {
    $location.path('/signin'); 
  }

  $scope.data = {};

  Links.getAll().then(function(links) {
    $scope.data.links = links;
  });

});
