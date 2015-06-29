'use strict';

angular.module('BuildFireDemoApp')
    .factory('UserApi', ['$resource', function ($resource) {
        return $resource('/user', {}, {
            'signUp': {method: 'POST'}
        });
    }]);
