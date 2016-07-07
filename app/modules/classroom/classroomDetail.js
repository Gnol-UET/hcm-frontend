angular.module('classroomDetail', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {

        $routeProvider
            .when('/classroom/:classId',{
                templateUrl: 'modules/classroom/classroom_detail.html',
                controller:  'ClassroomDetailCtrl'
            })

    }]);