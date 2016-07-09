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
    'classroom',
    'classroomDetail',
    'services',
    'group',
    'comment',
    'services',
    'group',
    'post',
    'xeditable',
    'classroom-main'

]).config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
    $routeProvider.otherwise({redirectTo: '/login'});

    $httpProvider.defaults.headers.get = {'Content-Type': 'application/json'};
    $httpProvider.defaults.headers.common = {'Content-Type': 'application/json'};
    $httpProvider.defaults.headers.post = {'Content-Type': 'application/json'};
    $httpProvider.defaults.headers.put = {'Content-Type': 'application/json'};
    $httpProvider.defaults.headers.patch = {'Content-Type': 'application/json'};
    $httpProvider.interceptors.push('httpRequestInterceptor');
}]);
