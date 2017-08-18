(function () {
    'use strict';

    var mLabModule = angular.module('maksoodMohiuddin.mLabModule');

    mLabModule.controller('mLabPrivacyPolicyController', ['$scope', '$state', '$location', '$window',
    function ($scope, $state, $location, $window) {

        $scope.mLab = function () {
            $state.go('mLab');
        };

    }]);
})();