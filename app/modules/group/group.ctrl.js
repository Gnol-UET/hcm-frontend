(function () {
    angular.module('group')
        .controller('groupCtrl', ['$scope', 'groupService', '$rootScope', '$location', '$routeParams', '$route',
            function ($scope, groupService, $rootScope, $location, $routeParams, $route) {

                $scope.groupId = $routeParams.groupId;

                $scope.getgroupDetail = function (groupId) {

                    groupService.getgroupDetail(groupId)
                        .then(function (response) {
                            $scope.groupName = response.data.groupName;
                            $scope.groupId = response.data.groupId;
                        }),
                        function (error) {
                            console.log("error get detail")
                        }
                }
            }])
}())