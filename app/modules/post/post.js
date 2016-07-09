angular.module('post', ['ngRoute', 'services'])

    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/post/:postId', {
                templateUrl: 'modules/post/post.html',
                controller: 'postCtrl'
            });
    }]);