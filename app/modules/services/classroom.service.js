(function(){
    'use strict';

    angular.module('services')
        .factory('classroomService',classroomService);

    classroomService.$inject = ['$log', '$http', '$q'];

    function classroomService($log, $http, $q) {
        return{
            getClassrooms: getClassrooms,
            addClassroom: addClassroom,
            deleteClassroom : deleteClassroom,
            addStudentToClass: addStudentToClass,
            deleteStudentFromClass : deleteStudentFromClass,
            getClassDetail: getClassDetail,
            

        }
        function getClassrooms() {
            return $http({
                url: 'http://localhost:8080/allclasses',
                method: 'GET'
            })
        }
        
        function addClassroom(opts) {
            return $http({
                url: 'http://localhost:8080/classes',
                method: 'POST',
                data: opts
            })
        }
        function deleteClassroom(classId) {
            return $http({
                url: 'http://localhost:8080/classes/'+ classId,
                method : 'DELETE'
            })
        }
        function addStudentToClass(classId) {
            return $http({
                url: 'http://localhost:8080/classes/'+ classId,
                method : 'POST'
            })
        }
        function deleteStudentFromClass(classId) {
            return $http({
                url: 'http://localhost:8080/classes/'+classId+'/remove',
                method: 'DELETE'
            })
        }
        function getClassDetail(classId) {
            return $http({
                url: 'http://localhost:8080/classes/'+classId,
                method: 'GET'
            })
        }

    }
}())