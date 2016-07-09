(function () {
    angular.module('post')
        .controller('postCtrl', ['$scope', 'postService',
            '$rootScope', '$location', '$routeParams', '$route',
            function ($scope, postService, $rootScope, $location, $routeParams, $route) {
                $scope.postId = $routeParams.postId;

                $scope.editPost = function (post_id) {
                    var request = {
                        postContent: $scope.editContent
                    }
                    console.log(post_id);
                    postService.editPost(post_id, request)
                        .then(function (response) {
                                console.log("edit succ");
                            }, function (error, data) {
                            }
                        )
                }
                postService.showDetailPostInClass($scope.postId)
                    .then(function (response) {
                        $scope.postContent = response.data.postContent;
                        $scope.postId = response.data.postId;

                    }),
                    function (error) {
                        console.log("error get detail");
                    }
            }
        ])
}())