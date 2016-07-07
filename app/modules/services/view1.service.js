
(function () {
    'use strict';

    angular
        .module('services')
        .factory('view1Service', view1Service);

    view1Service.$inject = ['$log', '$http', '$q'];

    function view1Service($log, $http, $q) {

        return {
            getSomeJson: getSomeJson,
         //   login : login
        };

        /////////////////

        function getSomeJson(opts) {
            return $http({
                url: 'http://jsonplaceholder.typicode.com/posts/1',
                method: 'get'
            })
        }
        //
        // function login(opts) {
        //     return $http({
        //         url: 'http://localhost:8080/login',
        //         method: 'POST',
        //         data: opts
        //
        //     })
        // }
    }
})();
