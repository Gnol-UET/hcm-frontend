angular.module('classroomDetail', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {

        $routeProvider
            .when('/classroom/:classId',{
                templateUrl: 'modules/classroom/classroom_detail.html',
                controller:  'ClassroomDetailCtrl'
            })
            .when('/posts/:postId',{
                templateUrl: 'modules/comment/comment.html',
                controller:  'commentListCtrl'
            })
    }]);