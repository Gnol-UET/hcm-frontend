angular.module('comment', ['ngRoute', 'services'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/posts/:postId',{
            templateUrl: 'modules/comment/comment.html',
            controller: 'commentListCtrl'
        })
    }
    ])