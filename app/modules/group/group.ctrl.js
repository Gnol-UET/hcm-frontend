(function () {
    angular.module('group')
        .controller('groupCtrl', ['$scope', 'groupService', '$rootScope', '$location', '$routeParams', '$route', 'postService',
            function ($scope, groupService, $rootScope, $location, $routeParams, $route, postService) {

                $scope.groupId = $routeParams.groupId;
                $scope.newPostInGroup = '';
                $scope.posts = [];

                $scope.getgroupDetail = function (groupId) {

                    groupService.getgroupDetail(groupId)
                        .then(function (response) {
                            $scope.groupName = response.data.groupName;
                            $scope.groupId = response.data.groupId;
                        }),
                        function (error) {
                            console.log("error get detail")
                        }
                }
                $scope.createPost = function (groupId) {
                    var request = {
                        postContent: $scope.newPostInGroup
                    }
                    postService.createPostInGroup(groupId, request)
                        .then(function (response) {
                            console.log("DONE");
                        }, function (error, data) {

                        })

                }
                $scope.getAllPostInGroup = function (groupId) {
                    postService.getAllPostInGroup(groupId)
                        .then(function (response) {
                            $scope.posts = response.data;
                        })
                }
                $scope.editPost = function (post) {
                    console.log(post.postContent);
                    postService.editPost(post)
                        .then(function (response) {
                            console.log("Edit done");
                        }, function (error, data) {

                        })
                }
                $scope.deletePostGroup = function (post) {
                    console.log(post.postId);
                    postService.deletePost(post.postId)
                        .then(function (response) {
                            console.log("edit succ");
                        }, function (error, data) {

                        })
                }


            }])
}())