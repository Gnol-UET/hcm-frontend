(function () {
    angular.module('classroom-main')
        .controller('classroomMainCtrl', ['$scope', 'classroomService', '$rootScope', '$location', 'initialData', '$route',
            function ($scope, classroomService, $rootScope, $location, initialData, $route) {

                $scope.classrooms = initialData.classRoomDTOs;
                $scope.role = initialData.role;
                
                function checkRole() {
                    $scope.isStudent = false;
                    if ( localStorage['role'] == 'STUDENT'){
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
                if( localStorage['role'] == 'STUDENT'){
                    classroomService.getNotEnrollClassrooms()
                        .then(
                            function (response) {
                                $scope.otherClassrooms = response.data
                            },
                            function (error) {
                                console.log("leave err");
                            })
                }

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
                                $scope.users = response.data.userDTO1s;
                            },
                            function (error) {
                                console.log("error get detail");
                            })
                }
                $scope.addClassroom = function () {
                    var request = {
                        className: $scope.classroom.className
                    };
                    classroomService.addClassroom(request)
                        .then(
                            function (response) {
                                $scope.classrooms.push(response.data);
                                console.log(response);
                            },
                            function (error, data) {
                                console.log("add class err");
                            })
                }
            }])
}());