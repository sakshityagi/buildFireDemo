'use strict';

angular.module('BuildFireDemoApp')
  .controller('RegistrationController', function ($scope, RegisterUser) {
    $scope.register = function () {
      RegisterUser.signUp({email : $scope.email, password : $scope.password}, function (response) {
        //Apply check on "response.statusCode" for specific implementations like on success or on error.
        alert(response.message);
      });
    }
  });