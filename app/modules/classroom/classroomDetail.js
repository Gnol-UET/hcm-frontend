angular.module('classroomDetail', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {

        $routeProvider
            .when('/classroom/:classId',{
                templateUrl: 'modules/classroom/classroom_detail.html',
                controller:  'ClassroomDetailCtrl',
                resolve : {
                    initialData : ['groupService' ,'$route',function(groupService, $route){
                        var paramValue = $route.current.params.classId;
                        console.log( paramValue);
                        return groupService.showgroupInClass(paramValue)
                            .then(function(response){
                                return response.data;
                            });
                    }]
                }
            })

    }]);