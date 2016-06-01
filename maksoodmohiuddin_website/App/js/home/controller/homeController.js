(function () {
    'use strict';

    var homeModule = angular.module('maksoodMohiuddin.homeModule');

    homeModule.controller('homeController', ['$scope', '$state', '$location', '$window', 
    function ($scope, $state, $location, $window) {

        var init = function () {
           
        };               
       
        $scope.experience = function () {
            $window.open('/experience', '_blank');
        };

        $scope.education = function () {
            $window.open('/education', '_blank');
        };

        $scope.github = function () {
            $window.open('https://github.com/maksoodmohiuddin', '_blank');
        };

        $scope.travel = function () {
            $window.open('/travel', '_blank');
        };
        
        $scope.resume = function () {                                
            $window.open('/resume', '_blank');            
        };
       
        init();
    }]);
})();
