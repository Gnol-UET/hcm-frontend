(function () {
    angular.module('classroomDetail')
        .controller('ClassroomDetailCtrl', ['initDataPost','postService','commentService', '$scope', 'classroomService', '$rootScope', '$location', '$route',
            '$routeParams', 'groupService',
            function (initDataPost,postService,commentService, $scope, classroomService, $rootScope, $location, $route, $routeParams, groupService) {
                $scope.postss = initDataPost; //muon dung nut
                $scope.newPostInClass = '';
                $scope.editContent = '';
                $scope.groups = [];
                $scope.otherGroups=[];
                $scope.myGroups=[];
                $scope.comments = [];
                $scope.newCommentInClass={};
                $scope.classId = $routeParams.classId;
                $scope.postVal = false;
                $scope.addUserTogroup = addUserTogroup;

                $scope.setSelected = setSelected;
                $scope.setPost = setPost;

                function checkRole() {
                    $scope.isStudent = false;
                    if ( localStorage['role'] == 'STUDENT'){
                        $scope.isStudent = true;
                    }else{
                        $scope.isStudent = false;
                    }
                }
                checkRole();

                console.log($scope.classId);
                if (!$scope.isStudent) {
                    groupService.showgroupInClass($scope.classId)
                        .then(function (response) {
                            $scope.groups = response.data;
                        }, function (error, data) {

                        })
                }
                if (localStorage['role'] == 'STUDENT'){
                    groupService.getMyGroup($scope.classId)
                        .then(function (response) {
                            $scope.myGroups = response.data;
                            console.log(response.data);
                        }, function (error, data) {

                        })
                }
                if (localStorage['role'] == 'STUDENT'){
                    groupService.getNotEnrollGroup($scope.classId)
                        .then(function (response) {
                            $scope.otherGroups = response.data;
                        }, function (error, data) {

                        })
                }
                if (!$scope.isStudent){
                    $scope.createGroup = function (class_id) {
                        var request = {
                            groupName: $scope.group.groupName
                        };
                        groupService.creategroup(class_id, request)
                            .then(
                                function (response) {
                                    $scope.groups.push(response.data);
                                    console.log(response);
                                },
                                function (error, data) {
                                    console.log("add group err");
                                })
                    }
                }


                function addUserTogroup(group_id) {
                    groupService.addUserTogroup(group_id)
                        .then(
                            function (response) {
                                console.log("enroll success");
                                $location.path('/group/' + group_id);
                            }
                        )
                }

                function setSelected(group) {
                    $scope.selectedData = group;
                }

                function setPost(post) {
                    $scope.selecPost = post;
                }
                
                $scope.createPost = function (classId) {
                    console.log($scope.newPostInClass);
                    var request = {
                        postContent: $scope.newPostInClass
                    }
                    postService.createPostInClass(classId, request)
                        .then(function (response) {
                            $scope.postss.push(response.data);
                            console.log("Done");
                        }, function (error, data) {

                        })

                }
                $scope.userLeavegroup = function (group_id) {
                    groupService.userLeavegroup(group_id)
                        .then(
                            function (response) {
                                console.log("leave success");
                            },
                            function (error) {
                                console.log("leave err");
                            })
                }

                $scope.deletePostClass = function (post) {
                    console.log(post.postId);
                    postService.deletePost(post.postId)
                        .then(function (response) {
                            console.log("edit succ");
                        }, function (error, data) {

                        })
                }
                $scope.routeToPost = function (postId) {
                    postService.showDetailPostInClass(postId)
                        .then(function (response) {
                            $location.path('/post/' + postId);
                        })

                }
                $scope.showPostContent = function (postId) {
                    $scope.postVal=true;
                    postService.showDetailPostInClass(postId)
                        .then(
                            function(response){
                                $scope.postContent = response.data.postContent;
                                $scope.postId=response.data.postId;
                            },
                            function (error) {
                                console.log("error get post content");
                            }
                        )
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

                }


                $scope.createComment = function (postId) {
                    $scope.postVal=true;
                    console.log($scope.newCommentInClass.commentContent);
                    $scope.commentDTO = {
                        commentContent: $scope.newCommentInClass.commentContent
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
                    console.log(comment);
                    console.log(comment.commentContent);
                    commentService.editComment(comment)
                        .then(function (response) {
                                console.log("edit succ");
                            }, function (error, data) {
                            }
                        )
                }
                $scope.editPost = function (post_id) {
                    var request = {
                        postContent: $scope.editContent
                    }
                    console.log(post_id);
                    console.log(request);
                    postService.editPost(post_id, request)
                        .then(function (response) {
                                console.log("edit succ");
                            }, function (error, data) {
                            }
                        )
                }
                // $scope.joinInGroup = function (groupId) {
                //     $location.path('')
                // }
            }])
}())
