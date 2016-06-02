(function () {
    'use strict';

    var homeModule = angular.module('maksoodMohiuddin.homeModule');

    homeModule.controller('homeController', ['$scope', '$state', '$location', '$window',
    function ($scope, $state, $location, $window) {

        var init = function () {

        };

        $scope.experience = function () {
            $window.open('http://maksoodmohiuddin.com/experience', '_self');
        };

        $scope.education = function () {
            $window.open('http://maksoodmohiuddin.com/education', '_self');
        };

        $scope.github = function () {
            $window.open('https://github.com/maksoodmohiuddin', '_blank');
        };

        $scope.travel = function () {
            $window.open('http://maksoodmohiuddin.com/travel', '_self');
        };

        $scope.resume = function () {
            $window.open('http://maksoodmohiuddin.com/resume', '_self');
        };

        $scope.home = function () {
            $window.open('http://maksoodmohiuddin.com/home', '_self');
        };        

        init();
    }]);
})();
