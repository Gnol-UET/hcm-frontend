(function () {
    angular.module('classroom')
        .controller('classroomCtrl', ['$scope', 'classroomService', '$rootScope', '$location', 'initialData', '$route',
            function ($scope, classroomService, $rootScope, $location, initialData, $route) {
                //  console.log("class");
                //$rootScope.loggedIn =true;

                $scope.classrooms = [];
                $scope.classrooms = initialData;

                $scope.teacher = false;
                if (localStorage['role'] == 'TEACHER') {
                    $scope.teacher = true;
                } else {
                    $scope.teacher = false;
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
                $scope.deleteClassroom = function (classId) {
                    classroomService.deleteClassroom(classId)
                        .then(
                            function (response) {
                                var index = $scope.classrooms.indexOf(classId);
                                $scope.classrooms.splice(index, 1);
                            },
                            function (error) {

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
                $scope.deleteStudentFromClass = function (classId) {
                    classroomService.deleteStudentFromClass(classId)
                        .then(
                            function (response) {
                                console.log("leave success");
                            },
                            function (error) {
                                console.log("leave err");
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