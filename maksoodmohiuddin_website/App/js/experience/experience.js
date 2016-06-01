(function () {
    'use strict';

    var experienceModule = angular.module('maksoodMohiuddin.experienceModule', [
        'ui.router'
    ]);

    experienceModule.config(['$stateProvider', function ($stateProvider) {

        $stateProvider.state('experience', {
            url: '/experience',
            views: {
                "main": {
                    controller: 'experienceController',
                    templateUrl: '/App/views/experience/experience.tpl.html'
                }
            },
            resolve: {},
            data: {
                pageTitle: 'Experience'
            }
        });

    }]);

})();

