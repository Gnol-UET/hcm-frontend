(function () {
    angular.module('comment')
        .controller('commentListCtrl', ['$scope', 'commentService', '$rootScope', '$location', '$routeParams', '$route',
            function ($scope, commentService, $rootScope, $location, $routeParams, $route) {

                $scope.postId = $routeParams.postId;
                $scope.postContent;
                $scope.comments;
                // $scope.comments = [];
                $scope.getComment = function (postId) {

                    commentService.getComment(postId)
                        .then(function (response) {
                            $scope.comments = response.data.commentDTOs;
                            $scope.postContent = response.data.postContent;
                            // $scope.comments.length = 0;
                            // $scope.comments.splice.apply($scope.comments, [0, response.data.commentDTOs.length].concat(response.data.commentDTOs))
                        }),
                        function (error) {
                            console.log("error get detail")
                        }
                }; 

                $scope.addComment = function (postId) {
                    $scope.commentDTO={
                        commentContent: $scope.comment
                    }
                    commentService.addComment(postId, $scope.commentDTO)
                        .then(
                            function (response) {
                                $scope.comments.push(response.data);
                                console.log(response);
                            },
                            function (error, data) {
                                console.log("add comment err");
                            })
                }

            }])
}())