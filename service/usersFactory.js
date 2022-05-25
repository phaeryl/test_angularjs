app.factory("usersService", function ($http) {
    let usersService = {};

    // Get all users data 
    usersService.getAllUsers = function () {
        let promise = $http({
                method: 'GET',
                url: "https://628775c4e9494df61b396535.mockapi.io/users/"
            })
            .then(function (response) {
                return response.data;
            });
        return promise;
    };

    // Get one user data
    usersService.getSingleUser = function (userId) {
        let promise = $http({
                method: 'GET',
                url: "https://628775c4e9494df61b396535.mockapi.io/users/" + userId
            })
            .then(function (response) {
                return response.data;
            });
        return promise;
    };

    // Insert (post) user data
    usersService.insertUser = function (firstName, lastName, email, today) {
        let userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            createdAt: today
        };

        let promise = $http({
                method: 'POST',
                url: "https://628775c4e9494df61b396535.mockapi.io/users/",
                data : userData
            })
            .then(function (response) {
                return response.data;
            });
        return promise;
    };

        // Uodate (put) user data
        usersService.updateUser = function (userId, firstName, lastName, email, createdAt) {
            let userData = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                createdAt: createdAt
            };
    
            let promise = $http({
                    method: 'PUT',
                    url: "https://628775c4e9494df61b396535.mockapi.io/users/" + userId,
                    data : userData
                })
                .then(function() {
                });
            return promise;
        };

        // Delete one user data
    usersService.deleteUser = function (userId) {
        let promise = $http({
                method: 'DELETE',
                url: "https://628775c4e9494df61b396535.mockapi.io/users/" + userId
            })
            .then(function (response) {
                return response.data;
            });
        return promise;
    };
        return usersService;
});