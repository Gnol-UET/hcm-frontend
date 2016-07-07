'use strict';

// Declare app level module which depends on views, and components
angular.module('services', []);
//
angular.module('myApp', [
    'ngRoute',
    'view1',
    'view2',
    'login',
    'signup',
    'xeditable',
    'group',
    'classroom',
    'classroomDetail',
    'services'
]).config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
    $routeProvider.otherwise({redirectTo: '/login'});

    $httpProvider.defaults.headers.get = {'Content-Type': 'application/json'};
    $httpProvider.defaults.headers.common = {'Content-Type': 'application/json'};
    $httpProvider.defaults.headers.post = {'Content-Type': 'application/json'};
    $httpProvider.defaults.headers.put = {'Content-Type': 'application/json'};
    $httpProvider.defaults.headers.patch = {'Content-Type': 'application/json'};
    $httpProvider.interceptors.push('httpRequestInterceptor');
}]).run(function(editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});
