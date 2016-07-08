(function () {
    angular.module('signup')
        .controller('SignUpCtrl',['$scope','signupService','$location',function ($scope,signupService,$location) {
            $scope.signup = function () {
               var request = {
                   username: $scope.signup.username,
                   password: $scope.signup.password,
                   role: $scope.signup.role
               }
            signupService.signup(request)
                .then(function(response){
                    $scope.data = {title: response.data.username};
                    $location.path('/login');
                },function (error, data) {
                    $scope.data = {title: 'failure'}
                })
            }

        }])
}());