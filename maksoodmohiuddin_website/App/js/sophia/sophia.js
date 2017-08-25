(function () {
    'use strict';

    var sophiaModule = angular.module('maksoodMohiuddin.sophiaModule', [
        'ui.router'
    ]);

    sophiaModule.config(['$stateProvider', function ($stateProvider) {

        $stateProvider.state('sophia', {
            url: '/sophia',
            views: {
                "main": {
                    controller: 'sophiaController',
                    templateUrl: '/App/views/sophia/sophia.tpl.html'
                }
            },
            resolve: {},
            data: {
                pageTitle: 'Aydin'
            }
        });

    }]);

})();