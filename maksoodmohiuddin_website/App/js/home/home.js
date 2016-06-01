(function () {
    'use strict';

    var homeModule = angular.module('maksoodMohiuddin.homeModule', [
        'ui.router'        
    ]);

    homeModule.config(['$stateProvider', function ($stateProvider) {

        $stateProvider.state('home', {
            url: '/home',
            views: {
                "main": {
                    controller: 'homeController',
                    templateUrl: '/App/views/home/home.tpl.html'
                }
            },
            resolve: {},
            data: {
                pageTitle: 'Home'
            }
        });

    }]);

})();