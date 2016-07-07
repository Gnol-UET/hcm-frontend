(function(){
    'use strict';

    angular.module('services')
        .factory('commentService',commentService);

    commentService.$inject = ['$log', '$http', '$q'];

    function commentService($log, $http, $q) {
        return{
            addComment : addComment,
            editComment: editComment,
            deleteComment : deleteComment
            
        }
        function addComment(postId,opts) {
            return $http({
                url: 'http://localhost:8080/posts/'+ postId +'/comments',
                method: 'POST',
                data: opts
            })
        }
        function editComment(commentId, opts) {
            return $http({
                url: 'http://localhost:8080/comments/'+commentId , 
                method: 'POST',
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