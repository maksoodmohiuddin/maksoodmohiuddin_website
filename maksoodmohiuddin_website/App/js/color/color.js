(function () {
    'use strict';

    var colorModule = angular.module('maksoodMohiuddin.colorModule', [
        'ui.router'
    ]);

    colorModule.config(['$stateProvider', function ($stateProvider) {

        $stateProvider.state('color', {
            url: '/color',
            views: {
                "main": {
                    controller: 'colorController',
                    templateUrl: '/App/views/color/color.tpl.html'
                }
            },
            resolve: {},
            data: {
                pageTitle: 'Color'
            }
        });

    }]);

})();