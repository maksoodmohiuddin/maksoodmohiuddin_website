(function () {
    'use strict';

    var resumeModule = angular.module('maksoodMohiuddin.resumeModule');

    resumeModule.controller('resumeController', ['$scope', '$state', '$location', '$window',
    function ($scope, $state, $location, $window) {
        $scope.home = function () {
            $window.open('/home', '_self');
        };
    }]);
})();
