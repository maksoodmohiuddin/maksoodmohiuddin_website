(function () {
    'use strict';

    var educationModule = angular.module('maksoodMohiuddin.educationModule', [
        'ui.router'
    ]);

    educationModule.config(['$stateProvider', function ($stateProvider) {

        $stateProvider.state('education', {
            url: '/education',
            views: {
                "main": {
                    controller: 'educationController',
                    templateUrl: '/App/views/education/education.tpl.html'
                }
            },
            resolve: {},
            data: {
                pageTitle: 'education'
            }
        });

    }]);

})();