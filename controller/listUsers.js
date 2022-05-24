// Get an array of Objects from JSON data
var app = angular.module('usersManagement', []);
app.service('listUsers')
app.controller("listUsers", function ($scope, usersService, $rootScope) {
   $rootScope.loading = true;
   $scope.getUsers = usersService.getAllUsers().then(function (user) {
      $scope.users = user;
      $rootScope.loading = false;
   });
});
