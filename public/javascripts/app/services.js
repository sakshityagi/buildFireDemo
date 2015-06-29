'use strict';

angular.module('BuildFireDemoApp')
  .factory('RegisterUser', ['$resource', function ($resource) {
    return $resource('/user/register', {
    }, {
      'signUp': { method: 'POST' }
    });
  }]);
