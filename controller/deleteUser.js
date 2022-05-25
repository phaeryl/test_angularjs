app.controller("deleteUser", function ($scope, usersService, $routeParams, $rootScope, $location)
{
    $scope.title = "Informations utilisateur";
    $rootScope.loading = true;
    $scope.getSingleUser = usersService.getSingleUser($routeParams.id).then(function (user)
    {
        $scope.user = user;
        $rootScope.loading = false;
    });

    $scope.deleteUser = function ()
    {
        let message = confirm('Voulez-vous vraiment supprimer cet utilisateur?');
        if (message)
        {
            $rootScope.loading = true;
            usersService.deleteUser($routeParams.id).then(function ()
            {
                $location.url("/home");
                $rootScope.loading = false;
            });
        }
    };
});