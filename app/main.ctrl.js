(function () {
    angular.module('myApp')
        .controller('mainCtrl',['$scope','$rootScope','$location',
            function ($scope,$rootScope,$location) {
                
                $rootScope.loggedIn = false;
                if (localStorage['User-Data']){
                    console.log("main");
                    $rootScope.loggedIn = true;
                    $rootScope.username =  localStorage['username'];
                  
                }else {
                    console.log($rootScope.loggedIn);
                    $rootScope.loggedIn = false;
                    $location.path('/login');
                }
                $scope.logOut = function () {
                    localStorage.clear();
                    $scope.loggedIn = false;
                    $location.path('/login');

                }

            }])
}());