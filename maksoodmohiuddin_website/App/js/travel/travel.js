(function () {
    'use strict';

    var travelModule = angular.module('maksoodMohiuddin.travelModule', [
        'ui.router'
    ]);

    travelModule.config(['$stateProvider', function ($stateProvider) {

        $stateProvider.state('travel', {
            url: '/travel',
            views: {
                "main": {
                    controller: 'travelController',
                    templateUrl: '/App/views/travel/travel.tpl.html'
                }
            },
            resolve: {},
            data: {
                pageTitle: 'travel'
            }
        });

    }]);

})();