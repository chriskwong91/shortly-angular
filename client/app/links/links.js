angular.module('shortly.links', [])

.controller('LinksController', function ($scope, links, Links, Auth, $location) {
  var auth = Auth.isAuth();
  if (!auth) {
    $location.path('/signin'); 
  }
  $scope.data = {};

  $scope.data.links = links;

})
.directive('shortenedLink', function() {
  return {
    template: '<a href="{{link.baseUrl}}/{{link.code}}">{{link.baseUrl}}/{{link.code}}</a>'
  };
});
