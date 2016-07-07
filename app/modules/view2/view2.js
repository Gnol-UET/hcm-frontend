/**
 * Created by thihdao on 4/30/2016.
 */
angular.module('view2', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'modules/view2/view2.html',
            controller: 'View2Ctrl'
        });
    }])