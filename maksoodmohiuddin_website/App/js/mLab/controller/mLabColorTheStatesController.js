(function () {
    'use strict';

    var mLabModule = angular.module('maksoodMohiuddin.mLabModule');

    mLabModule.controller('mLabColorTheStatesController', ['$scope', '$state', '$location', '$window',
    function ($scope, $state, $location, $window) {

        $scope.mLab = function () {
            $state.go('mLab');
        };

    }]);
})();