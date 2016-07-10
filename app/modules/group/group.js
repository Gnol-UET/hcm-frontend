angular.module('group', ['ngRoute', 'services'])

    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/group/:groupId', {
                templateUrl: 'modules/group/group.html',
                controller: 'groupCtrl',
                resolve : {
                    initDataPost:['postService',"$route", function (postService,$route) {
                        var paramValue = $route.current.params.groupId;
                        return postService.getAllPostInGroup(paramValue)
                            .then(function(response){
                                return response.data;
                            });
                    }

                    ]

                }
            });
    }]);