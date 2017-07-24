(function () {
    'use strict';

    var colorModule = angular.module('maksoodMohiuddin.colorModule');

    colorModule.controller('colorController', ['$scope', '$state', '$location', '$window',
    function ($scope, $state, $location, $window) {

        $scope.home = function () {
            $state.go('home');
        };

    }]);
})();