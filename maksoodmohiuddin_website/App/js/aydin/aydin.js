(function () {
    'use strict';

    var aydinModule = angular.module('maksoodMohiuddin.aydinModule', [
        'ui.router'
    ]);

    aydinModule.config(['$stateProvider', function ($stateProvider) {

        $stateProvider.state('aydin', {
            url: '/aydin',
            views: {
                "main": {
                    controller: 'aydinController',
                    templateUrl: '/App/views/aydin/aydin.tpl.html'
                }
            },
            resolve: {},
            data: {
                pageTitle: 'Aydin'
            }
        });

    }]);

})();