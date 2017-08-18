(function () {
    'use strict';

    var mLabModule = angular.module('maksoodMohiuddin.mLabModule');

    mLabModule.controller('mLabController', ['$scope', '$state', '$location', '$window',
    function ($scope, $state, $location, $window) {

        $scope.mLab = function () {
            $state.go('mLab');
        };

        $scope.github = function () {
            $window.open('https://github.com/maksoodmohiuddin', '_blank');
        };

        $scope.colorTheStates = function () {
            $state.go('colorthestates');
        };

        $scope.privacyPolicy = function () {
            $state.go('privacypolicy');
        };
       
    }]);
})();