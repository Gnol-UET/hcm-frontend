angular.module('classroom', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {

        $routeProvider
            .when('/classroom', {
                templateUrl: 'modules/classroom/classroom.html',
                controller: 'classroomCtrl',
                resolve : {
                    initialData : ['classroomService',function(classroomService){
                        return classroomService.getClassrooms()
                            .then(function(response){
                                return response.data;
                            });
                    }]
                }
            })
        
            // .when('/classroom/:classId',{
            //     templateUrl: 'modules/classroom/classroom_detail.html',
            //     controller: 'ClassroomDetailCtrl'
            // })
        
    }]);

