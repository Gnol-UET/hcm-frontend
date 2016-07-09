(function(){
    'use strict';

    angular.module('services')
        .factory('commentService',commentService);

    commentService.$inject = ['$log', '$http', '$q'];

    function commentService($log, $http, $q) {
        return{
            getComment : getComment,
            addComment : addComment,
            editComment: editComment,
            deleteComment : deleteComment
        }
        function getComment(postId) {
            return $http({
                url: 'http://localhost:8080/posts/' + postId ,
                method: 'GET'
            })
        }
        function addComment(postId,opts) {
            return $http({
                url: 'http://localhost:8080/posts/'+ postId +'/comments',
                method: 'POST',
                data: opts
            })
        }
        function editComment(opts) {
            return $http({
                url: 'http://localhost:8080/comments/'+ opts.id ,
                method: 'PUT',
                data: opts
            })
        }
        function deleteComment(commentId) {
            return $http({
                url: 'http://localhost:8080/comments/'+commentId ,
                method: 'DELETE'
            })
        }
    }
}())