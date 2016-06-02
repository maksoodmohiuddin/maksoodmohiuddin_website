(function () {
    'use strict';

    var aydinModule = angular.module('maksoodMohiuddin.aydinModule');

    aydinModule.controller('aydinController', ['$scope', '$state', '$location', '$window',
    function ($scope, $state, $location, $window) {

        $scope.home = function () {
            $window.open('/home', '_self');
        };
              
    }]);
})();
