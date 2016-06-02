(function () {
    'use strict';

    var travelModule = angular.module('maksoodMohiuddin.travelModule');

    travelModule.controller('travelController', ['$scope', '$state', '$location', '$window',
    function ($scope, $state, $location, $window) {
        $scope.home = function () {
            $window.open('/home', '_self');
        };
    }]);
})();
