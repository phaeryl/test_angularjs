app.controller("updateUser", function ($scope, usersService, $routeParams, $rootScope) {
    $scope.title = "Informations utilisateur";
    $rootScope.loading = true;
    $scope.getSingleUser = usersService.getSingleUser($routeParams.id).then(function (user) {
        $scope.user = user;
        $scope.firstName = user.firstName;
        $scope.lastName = user.lastName;
        $scope.email = user.email;
        $scope.createdAt = user.createdAt;
        $rootScope.loading = false;
    });
    
    $scope.updateUser = function () {
        let message = confirm('Voulez-vous vraiment modifier cet utilisateur?');
        if (message) {
            $rootScope.loading = true;
            usersService.updateUser($routeParams.id, $scope.firstName, $scope.lastName,$scope.email, $scope.createdAt).then(function () {
                $scope.updateMessage = "L'utilisateur a bien été mis à jour.";
                $rootScope.loading = false;
            }), function(){
                $scope.errorMessage = "Mise à jour échouée. Veuillez essayer à nouveau.";

            };
        }
    };
});