var app = angular.module('usersManagement', ['ngRoute']);
app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');
  }]);
app.config(function ($routeProvider) {
    
    $routeProvider
    .when('/home',
    {
        templateUrl: 'partials/listUsers.html',
        controller: 'listUsers'
    })
    .when('/delete/:id',
    {
        templateUrl: 'partials/deleteUser.html',
        controller: "deleteUser"
    })
    .when('/edit/:id',
    {
        templateUrl: 'partials/updateUser.html',
        controller: "updateUser"
    })
    .when('/add',
    {
        templateUrl: 'partials/insertUser.html',
        controller: "insertUser"
    })
    .otherwise(
        {
            redirectTo: '/home'
        }
    )
})