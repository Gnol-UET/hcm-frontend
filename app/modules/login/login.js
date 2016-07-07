angular.module('login', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        
        $routeProvider.when('/login', {
            templateUrl: 'modules/login/login.html',
            controller: 'LoginCtrl'
        });
    }]);