(function () {
    'use strict';

    var resumeModule = angular.module('maksoodMohiuddin.resumeModule', [
        'ui.router'
    ]);

    resumeModule.config(['$stateProvider', function ($stateProvider) {

        $stateProvider.state('resume', {
            url: '/resume',
            views: {
                "main": {
                    controller: 'resumeController',
                    templateUrl: '/App/views/resume/resume.tpl.html'
                }
            },
            resolve: {},
            data: {
                pageTitle: 'Resume'
            }
        });

    }]);

})();