(function () {
    'use strict';

    var homeModule = angular.module('maksoodMohiuddin.homeModule');

    homeModule.controller('homeController', ['$scope', '$state', '$location', '$window',
    function ($scope, $state, $location, $window) {

        var init = function () {

        };

        $scope.experience = function () {
            $window.open('/experience', '_self');
        };

        $scope.education = function () {
            $window.open('/education', '_self');
        };

        $scope.github = function () {
            $window.open('https://github.com/maksoodmohiuddin', '_blank');
        };

        $scope.travel = function () {
            $window.open('/travel', '_self');
        };

        $scope.resume = function () {
            $window.open('/resume', '_self');
        };

        $scope.home = function () {
            $window.open('/home', '_self');
        };        

        init();
    }]);
})();
