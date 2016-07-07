/**
 * Created by thihdao on 4/30/2016.
 */
angular.module('view1', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view1/:username', {
            templateUrl: 'modules/view1/view1.html',
            controller: 'View1Ctrl',
            resolve: {
                username: function($route){
                    return $route.current.params.username;
                }
            }
        });
    }]);