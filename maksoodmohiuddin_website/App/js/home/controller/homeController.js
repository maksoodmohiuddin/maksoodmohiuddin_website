(function () {
    'use strict';

    var homeModule = angular.module('maksoodMohiuddin.homeModule');

    homeModule.controller('homeController', ['$scope', '$state', '$location', '$window',
    function ($scope, $state, $location, $window) {

        var init = function () {

        };
       
        $scope.lady = function () {
            $window.open('https://www.linkedin.com/in/navdeepmangat/', '_blank');
        };

        $scope.work = function () {
            $window.open('https://www.accenture.com/', '_blank');
        };

        $scope.school = function () {
            $window.open('http://www.omscs.gatech.edu/', '_blank');
        };

        $scope.mlab = function () {
            $state.go('mLab');
        };

        $scope.aydin = function () {
            $state.go('aydin');
        };

        $scope.sophia = function () {
            $state.go('sophia');
        };

        init();
    }]);
})();
