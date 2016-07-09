(function () {
    angular.module('classroomDetail')
        .controller('ClassroomDetailCtrl', ['postService', '$scope', 'classroomService', '$rootScope', '$location', '$route', '$routeParams', 'groupService',
            function (postService, $scope, classroomService, $rootScope, $location, $route, $routeParams, groupService) {

                $scope.newPostInClass = '';
                $scope.editContent = '';

                $scope.groups = [];

                $scope.classId = $routeParams.classId;

                $scope.addUserTogroup = addUserTogroup;

                $scope.setSelected = setSelected;


                console.log($scope.classId);
                groupService.showgroupInClass($scope.classId)
                    .then(function (response) {
                        $scope.groups = response.data;
                    }, function (error, data) {

                    })

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

                postService.getAllPostInClass($scope.classId)
                    .then(function (response) {
                        $scope.posts = response.data;
                    }, function (error, data) {

                    })


                $scope.createPost = function (classId) {
                    var request = {
                        postContent: $scope.newPostInClass
                    }
                    postService.createPostInClass(classId, request)
                        .then(function (response) {
                            //
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

                $scope.showPostContent = function(postId){
                    $location.path('posts/' + postId);
                }
            }])
}())
