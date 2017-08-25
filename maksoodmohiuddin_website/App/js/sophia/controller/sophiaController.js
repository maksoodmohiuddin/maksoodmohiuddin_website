(function () {
    'use strict';

    var sophiaModule = angular.module('maksoodMohiuddin.sophiaModule');

    sophiaModule.controller('sophiaController', ['$scope', '$state', '$location', '$window',
    function ($scope, $state, $location, $window) {

        $scope.home = function () {
            $state.go('home');
        };

    }]);
})();
