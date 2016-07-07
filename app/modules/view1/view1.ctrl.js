'use strict';

angular.module('view1')
    .controller('View1Ctrl', ['$scope', 'view1Service','$rootScope', 'username', function ($scope, view1Service,$rootScope, username) {
    
        $scope.username = username;
        $scope.tokenAuth = $rootScope.tokenAuth;

        
    $scope.getData = function () {
        view1Service.getSomeJson()
            .then(
                function (data) {
                $scope.data = data.data;
            },
            function (error) {
                $scope.data = {title : 'failure'};
            });
    };

    $scope.login = function() {
        view1Service.login({username:'tu1', password:'1'})
            .then(
                function (response) {
                    $scope.data = {title: response.data.token};
                },
                function (error, data) {
                    $scope.data = {title : 'failure'};
                });
    }
}]);