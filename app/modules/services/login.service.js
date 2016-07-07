(function(){
    'use strict';
    
    angular.module('services')
        .factory('loginService',loginService);
    
     loginService.$inject = ['$log', '$http', '$q'];
    
    function loginService($log, $http, $q) {
        return{
            login: login
        }
        function login(opts) {
            return $http({
                url: 'http://localhost:8080/login',
                method: 'POST',
                data: opts
        
            })
        }
    }
}())