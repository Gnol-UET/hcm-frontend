(function () {
    angular.module('signup', ['ngRoute'])

        .config(['$routeProvider', function($routeProvider) {

            $routeProvider.when('/signup', {
                templateUrl: 'modules/signup/signup.html',
                controller: 'SignUpCtrl'
            });
        }]);
}())