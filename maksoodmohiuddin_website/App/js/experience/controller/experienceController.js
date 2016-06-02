(function () {
    'use strict';

    var experienceModule = angular.module('maksoodMohiuddin.experienceModule');

    experienceModule.controller('experienceController', ['$scope', '$state', '$location', '$window',
    function ($scope, $state, $location, $window) {
        $scope.home = function () {
            $state.go('home');
        };
    }]);
})();
