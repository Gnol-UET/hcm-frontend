(function () {
    angular.module('signup')
        .controller('SignUpCtrl',['$scope','signupService',function ($scope,signupService) {
            $scope.signup = function () {
               var request = {
                   username: $scope.signup.username,
                   password: $scope.signup.password,
                   role: $scope.signup.role
               }
            signupService.signup(request)
                .then(function(response){
                    $scope.data = {title: response.data.username};
                },function (error, data) {
                    $scope.data = {title: 'failure'}
                })
            }

        }])
}());