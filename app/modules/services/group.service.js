/**
 * Created by linh6_000 on 07/05/2016.
 */
(function () {
    'use strict';
    angular.module('services')
        .factory('groupService', groupService);

    groupService.$inject = ['$log', '$http', '$q'];

    function groupService($log, $http, $q) {
        return {
            creategroup: creategroup,
            deletegroup: deletegroup,
            showgroupInClass: showgroupInClass,
            addUserTogroup: addUserTogroup,
            userLeavegroup: userLeavegroup,
            getgroupDetail: getgroupDetail,
            editgroup: editgroup,
            getMyGroup: getMyGroup,
            getNotEnrollGroup:getNotEnrollGroup
        }
        function creategroup(class_id, opts) {
            return $http({
                url: 'http://localhost:8080/classes/' + class_id + '/groups',
                data: opts,
                method: 'POST'

            })
        }

        function deletegroup(group_id) {
            return $http({
                url: 'http://localhost:8080/groups/' + group_id + '/removeGroup',
                method: 'DELETE'
            })
        }

        function showgroupInClass(class_id) {
            return $http({
                url: 'http://localhost:8080/classes/' + class_id + '/groups',
                method: 'GET'
            })
        }

        function addUserTogroup(group_id) {
            return $http({
                url: 'http://localhost:8080/groups/' + group_id + '/user',
                method: 'POST'
            })
        }

        function userLeavegroup(group_id) {
            return $http({
                url: 'http://localhost:8080/groups/' + group_id + '/removeUser',
                method: 'DELETE'
            })
        }

        function getgroupDetail(group_id) {
            return $http({
                url: 'http://localhost:8080/groups/' + group_id + '/user',
                method: 'GET'
            })
        }

        function editgroup(group_id) {
            return $http({
                url: 'http://localhost:8080/groups/' + group_id,
                method: 'PUT'
            })
        }
        
        function getMyGroup(classId) {
            return $http({
                url:'http://localhost:8080/classes/'+classId +'/groups/EnrollGroup',
                method: 'GET'
            })
        }
        
        function getNotEnrollGroup(classId) {
            return $http({
                url: 'http://localhost:8080/classes/'+classId +'/groups/notEnrollGroup',
                method: 'GET'
            })
        }
    }
}())