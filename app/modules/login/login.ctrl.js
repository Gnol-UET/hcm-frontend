(function () {
    angular.module('login')
        .controller('LoginCtrl',['$scope','loginService','$rootScope','$location',
            function ($scope,loginService,$rootScope, $location) {

                if (localStorage['User-Data']){
                    $location.path('/classroom-main');
                }else {
                    $location.path('/login');
                }
                $scope.login = function () {
                    var request = {
                        username: $scope.login.username,
                        password: $scope.login.password
                    };
                    loginService.login(request)
                        .then(function(response){
                            $rootScope.loggedIn = true;
                            console.log("loginSuccess");
                            console.log($rootScope.loggedIn);
                            $scope.displayName = {title: response.data.fullName};
                            $rootScope.tokenAuth = response.data.token;
                            $rootScope.username = response.data.fullName;
                            localStorage.setItem('User-Data',response.data.token);
                            localStorage.setItem('username',response.data.username);
                            localStorage.setItem('role',response.data.role);
                           
                            $rootScope.username = localStorage['username'];
                            $rootScope.tokenAuth = localStorage['User-Data'];

                            $location.path('/classroom-main');
                        },function (error, data) {
                            $scope.data = {title: 'failure'}
                        })
                }
            
        }])
}());