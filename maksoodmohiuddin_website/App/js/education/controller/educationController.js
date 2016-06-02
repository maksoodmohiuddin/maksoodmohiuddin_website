(function () {
    'use strict';

    var educationModule = angular.module('maksoodMohiuddin.educationModule');

    educationModule.controller('educationController', ['$scope', '$state', '$location', '$window',
    function ($scope, $state, $location, $window) {
        $scope.home = function () {
            $state.go('home');
        };
    }]);
})();
