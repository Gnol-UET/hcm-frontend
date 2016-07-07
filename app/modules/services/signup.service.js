(function(){
    'use strict';

    angular.module('services')
        .factory('signupService',signupService);

    signupService.$inject = ['$log', '$http', '$q'];

    function signupService($log, $http, $q) {
        return{
            signup: signup
        }
        function signup(opts) {
            return $http({
                url: 'http://localhost:8080/signup',
                method: 'POST',
                data: opts

            })
        }

    }
}())