(function () {
    angular.module('group')
        .controller('groupCtrl', ['$scope', 'groupService', '$rootScope',
            '$location', '$routeParams', '$route', 'postService',
            function ($scope, groupService, $rootScope,
                      $location, $routeParams, $route, postService) {
                // if (localStorage['User-Data']){
                //     $location.path('/classroom-main');
                // }else {
                //     $location.path('/login');
                // }
                $scope.groupId = $routeParams.groupId;
                $scope.newPostInGroup = '';
                $scope.posts = [];


                groupService.getgroupDetail($scope.groupId)
                    .then(function (response) {
                        $scope.groupName = response.data.groupName;
                        $scope.groupId = response.data.groupId;
                    }),
                    function (error) {
                        console.log("error get detail")
                    }

                $scope.createPost = function (groupId) {
                    var request = {
                        postContent: $scope.newPostInGroup
                    }
                    postService.createPostInGroup(groupId, request)
                        .then(function (response) {
                            $scope.postss.push(response.data);
                            console.log("DONE");
                        }, function (error, data) {

                        })

                }
                

                postService.getAllPostInGroup($scope.groupId)
                    .then(function (response) {
                        $scope.posts = response.data;
                    })

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
                $scope.deletePostGroup = function (post) {
                    console.log(post.postId);
                    postService.deletePost(post.postId)
                        .then(function (response) {
                            console.log("edit succ");
                        }, function (error, data) {

                        })
                }
                // $scope.showPostContent = function (postId) {
                //     $location.path('posts/' + postId);
                // }


            }])
}())