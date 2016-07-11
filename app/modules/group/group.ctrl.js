(function () {
    angular.module('group')
        .controller('groupCtrl', ['$scope', 'groupService', '$rootScope',
            '$location', '$routeParams', '$route', 'postService', 'initDataPost', 'commentService',
            function ($scope, groupService, $rootScope,
                      $location, $routeParams, $route, postService, initDataPost, commentService) {
            
                $scope.postss = initDataPost;
                $scope.groupId = $routeParams.groupId;
                $scope.newPostInGroup = '';
                $scope.posts = [];
                $scope.comments = [];
                $scope.newCommentInGroup={};

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
         
                $scope.showPostContent = function (postId) {
                    $scope.postVal=true;
                    postService.showDetailPostInClass(postId)
                        .then(
                            function(response){
                                $scope.postContent = response.data.postContent;
                                $scope.postId=response.data.postId;
                                $scope.username = response.data.userDTO1.username;
                            },
                            function (error) {
                                console.log("error get post content");
                            }
                        )
                    commentService.getComment(postId)
                        .then(function (response) {
                            $scope.comments = response.data.commentDTOs;
                            $scope.postContent = response.data.postContent;
                           // $scope.username = response.data.commentDTOs.userDTO1.username;
                        }),
                        function (error) {
                            console.log("error get detail")
                        }
                }
                $scope.createComment = function (postId) {
                    console.log($scope.newCommentInGroup.commentContent);
                    $scope.commentDTO = {
                        commentContent: $scope.newCommentInGroup.commentContent
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
                $scope.editComment = function (comment) {
                    console.log(comment.commentContent);
                    commentService.editComment(comment)
                        .then(function (response) {
                                console.log("edit succ");
                            }, function (error, data) {
                            }
                        )
                }
                $scope.userLeavegroup = function (groupId) {
                    groupService.userLeavegroup(groupId)
                        .then(
                            function (response) {
                                window.history.back();
                                console.log("leave success");
                            },
                            function (error) {
                                console.log("leave err");
                            })
                }

            }])
}())