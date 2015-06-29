'use strict';

angular.module('BuildFireDemoApp')
  .controller('RegistrationController', function ($scope, UserApi) {
    $scope.register = function () {
        UserApi.signUp({email : $scope.email, password : $scope.password}, function (response) {
        // See "response.statusCode" for specific implementations on different status codes.
        alert(response.message);
      });
    }
  });