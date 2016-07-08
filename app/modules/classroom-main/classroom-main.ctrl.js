(function () {
    angular.module('classroom-main')
        .controller('classroomMainCtrl', ['$scope', 'classroomService', '$rootScope', '$location', 'initialData', '$route',
            function ($scope, classroomService, $rootScope, $location, initialData, $route) {

                
                $scope.classrooms = initialData.classRoomDTOs;
                $scope.role = initialData.role;
                
                function checkRole() {
                    $scope.isStudent = false;
                    if ($scope.role == 'STUDENT'){
                        $scope.isStudent = true;
                    }else{
                        $scope.isStudent = false;
                    }
                   
                }
                checkRole();
                
                $scope.joinIn = function (classId) {
                    $location.path('/classroom/' + classId);
                }
                $scope.otherClassrooms =[]; //not enroll classes
                classroomService.getNotEnrollClassrooms()
                    .then(
                        function (response) {
                            $scope.otherClassrooms = response.data
                        },
                        function (error) {
                            console.log("leave err");
                        })
                $scope.addStudentToClass = function (classId) {

                    classroomService.addStudentToClass(classId)
                        .then(
                            function (response) {
                                console.log("enroll success");

                                $location.path('/classroom/' + classId);
                            },
                            function (error) {

                            })
                }
               
                $scope.detailVal = false;
                $scope.showClassDetail = function (classId) {
                    $scope.detailVal = true;
                    classroomService.getClassDetail(classId)
                        .then(
                            function (response) {
                                $scope.className = response.data.className;
                                $scope.classId = response.data.classId;
                            },
                            function (error) {
                                console.log("error get detail");
                            })
                }
            }])
}());