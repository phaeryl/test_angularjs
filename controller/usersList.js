// Get an array of Objects from JSON data
var app = angular.module('usersManagement', []);
app.controller("usersList", function ($scope, $http) {
   var url = "https://628775c4e9494df61b396535.mockapi.io/users/";

   $http.get(url).then(function (response) {

      $scope.users = response.data;

   });
   $scope.getUserData = function (userId) {
      if (userId > 0) {
         $http.get(url + userId).then(function (response) {
            $scope.user = response.data;


         }).catch(function onError(error) {
            console.log(error)
         })
      }

      if (userId == 0) {
         $scope.user = undefined;
      }

      $scope.deleteUser = function () {
         console.log(userId)
         $http.delete(url + userId).then(function () {
            console.log("Suppression effectuée")
            $http.get(url).then(function (response) {

                  $scope.users = response.data;
               }),
               function () {

                  console.log("Suppression échouée");
               }
         })
      };

      $scope.sendRequest = function (userId) {
         if (userId >= 1) {
            //Updating data values with input values
            $scope.user.firstName = document.getElementById('userFirstName').value;
            $scope.user.lastName = document.getElementById('userLastName').value;
            $scope.user.email = document.getElementById('userEmail').value;
            //$scope.user.createdAt = document.getElementById('userCreatedAt').value
            console.log($scope.user);

            let data = JSON.stringify($scope.user);

            //Updating ressource

            $http.put(url + userId, data).then(function () {
               console.log("Modification effectuée.");
               $http.get(url).then(function (response) {

                  $scope.users = response.data;


               })
            })
         }

         //Insert data

         if (userId == undefined) {

            // Get current date to mysql format
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            let yyyy = today.getFullYear();
            today = yyyy + '-' + mm + '-' + dd;

            const firstNameValue = document.getElementById('userFirstName').value;
            const lastNameValue = document.getElementById('userLastName').value;
            const emailValue = document.getElementById('userEmail').value;
            const createdAtValue = today;



            const user = {
               firstName: firstNameValue,
               lastName: lastNameValue,
               email: emailValue,
               createdAt: createdAtValue
            };
            const data = JSON.stringify(user);
            $http.post(url, data)
            $http.post(url, data).then(function () {
               console.log("Insertion effectuée");
               $http.get(url).then(function (response) {

                  $scope.users = response.data;

               });
            }, function () {
               console.error("Erreur")
            });


         }

      }




   };
})