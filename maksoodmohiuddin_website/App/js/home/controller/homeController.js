(function () {
    'use strict';

    var homeModule = angular.module('maksoodMohiuddin.homeModule');

    homeModule.controller('homeController', ['$scope', '$state', '$location', '$window',
    function ($scope, $state, $location, $window) {

        var init = function () {

        };
       
        $scope.lady = function () {
            $window.open('https://www.chifranciscan.org/PhysicianDetails.aspx?physicianID=821077', '_blank');
        };

        $scope.work = function () {
            $window.open('https://www.capitaloneinvesting.com/', '_blank');
        };

        $scope.school = function () {
            $window.open('http://www.omscs.gatech.edu/', '_blank');
        };

        init();
    }]);
})();
