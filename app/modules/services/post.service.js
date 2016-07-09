(function () {
    'use strict';

    angular.module('services')
        .factory('postService', postService);

    postService.$inject = ['$log', '$http', '$q'];

    function postService($log, $http, $q) {
        return {
            createPostInClass: createPostInClass,
            createPostInGroup: createPostInGroup,
            getAllPostInClass: getAllPostInClass,
            getAllPostInGroup: getAllPostInGroup,
            showDetailPostInClass: showDetailPostInClass,
            editPost: editPost,
            deletePost: deletePost
        }
        function createPostInClass(class_id, opts) {
            return $http({
                url: 'http://localhost:8080/classes/' + class_id + ' /posts',
                method: 'POST',
                data: opts
            })
        }

        function createPostInGroup(group_id, opts) {
            return $http({
                url: 'http://localhost:8080/groups/' + group_id + ' /posts',
                method: 'POST',
                data: opts
            })
        }

        function getAllPostInClass(class_id) {
            return $http({
                url: 'http://localhost:8080/classes/' + class_id + '/posts',
                method: 'GET',
            })
        }

        function getAllPostInGroup(group_id) {
            return $http({
                url: 'http://localhost:8080/groups/' + group_id + '/posts',
                method: 'GET',
            })
        }

        function showDetailPostInClass(post_id) {
            return $http({
                url: 'http://localhost:8080/posts/' + post_id,
                method: 'GET',
            })
        }

        function editPost(postId, opts) {
            return $http({
                url: 'http://localhost:8080/posts/' + postId,
                data: opts,
                method: 'PUT',
            })
        }

        function deletePost(post_id) {
            return $http({
                url: 'http://localhost:8080/posts/' + post_id,
                method: 'DELETE',
            })
        }
    }
}())