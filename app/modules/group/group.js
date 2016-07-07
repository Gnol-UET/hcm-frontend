angular.module('group', ['ngRoute', 'services'])

    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/group/:groupId', {
                templateUrl: 'modules/group/group.html',
                controller: 'groupCtrl'
            });
    }]);