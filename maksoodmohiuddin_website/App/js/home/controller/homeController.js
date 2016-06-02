(function () {
    'use strict';

    var homeModule = angular.module('maksoodMohiuddin.homeModule');

    homeModule.controller('homeController', ['$scope', '$state', '$location', '$window',
    function ($scope, $state, $location, $window) {

        var init = function () {

        };

        $scope.experience = function () {
            $state.go('experience');            
        };

        $scope.education = function () {
            $state.go('education');
        };

        $scope.github = function () {
            $window.open('https://github.com/maksoodmohiuddin', '_blank');
        };

        $scope.travel = function () {
            $state.go('travel');
        };

        $scope.resume = function () {
            $state.go('resume');
        };

        $scope.home = function () {
            $state.go('home');
        };        

        init();
    }]);
})();
