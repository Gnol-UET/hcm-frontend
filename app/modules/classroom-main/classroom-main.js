angular.module('classroom-main', ['ngRoute', 'services'])

    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/classroom-main', {
                templateUrl: 'modules/classroom-main/classroom-main.html',
                controller: 'classroomMainCtrl',
                resolve : {
                    initialData : ['classroomService',function(classroomService){
                        return classroomService.getMyClassrooms()
                            .then(function(response){
                                return response.data;
                            });
                    }]
                    
                }
            })
        
    }]);