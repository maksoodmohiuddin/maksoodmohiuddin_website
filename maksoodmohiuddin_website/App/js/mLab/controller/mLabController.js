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

        $scope.downloadApple = function () {
            $window.open('https://itunes.apple.com/us/app/colorthestates/id1273085414?mt=8', '_blank');
        };

        $scope.downloadGoogle = function () {
            $window.open('https://play.google.com/store/apps/details?id=com.maksoodmohiuddin.colorthestates', '_blank');
        };

    }]);
})();