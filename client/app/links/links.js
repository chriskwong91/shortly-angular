angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth, $location) {
  // Your code here
  $scope.data = {};
  // Auth.signout();

  var auth = Auth.isAuth();
  console.log(auth);
  if (!auth) {
    $location.path('/signin'); 
  }

  Links.getAll().then(function(links) {
    $scope.data.links = links;
  });

  $scope.isAuth = Auth.isAuth;

});
