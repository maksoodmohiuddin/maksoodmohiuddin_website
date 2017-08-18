(function () {
    'use strict';

    var mLabModule = angular.module('maksoodMohiuddin.mLabModule', [
        'ui.router'
    ]);

    mLabModule.config(['$stateProvider', function ($stateProvider) {

        $stateProvider.state('mLab', {
            url: '/mLab',
            views: {
                "main": {
                    controller: 'mLabController',
                    templateUrl: '/App/views/mLab/mLab.tpl.html'
                }
            },
            resolve: {},
            data: {
                pageTitle: 'mLab'
            }
        });

        $stateProvider.state('colorthestates', {
            url: '/mLab/ColorTheStates',
            views: {
                "main": {
                    controller: 'mLabColorTheStatesController',
                    templateUrl: '/App/views/mLab/mLab.colorthestates.tpl.html'
                }
            },
            resolve: {},
            data: {
                pageTitle: 'ColorTheStates'
            }
        });

        $stateProvider.state('privacypolicy', {
            url: '/mLab/privacypolicy',
            views: {
                "main": {
                    controller: 'mLabPrivacyPolicyController',
                    templateUrl: '/App/views/mLab/mLab.privacypolicy.tpl.html'
                }
            },
            resolve: {},
            data: {
                pageTitle: 'PrivacyPolicy'
            }
        });

    }]);

})();