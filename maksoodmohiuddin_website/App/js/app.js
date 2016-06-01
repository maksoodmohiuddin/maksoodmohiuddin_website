(function () {
    'use strict';

    /* App Module */
    var maksoodMohiuddinApp = angular.module('maksoodMohiuddin', [
        'ui.router',             
        'maksoodMohiuddin.homeModule',
        'maksoodMohiuddin.aydinModule',
        'maksoodMohiuddin.resumeModule',
        'maksoodMohiuddin.experienceModule',
        'maksoodMohiuddin.travelModule',
        'maksoodMohiuddin.educationModule'        
    ]);

    maksoodMohiuddinApp.run(['$state', '$rootScope',
    function ($state, $rootScope) {
        // go to default view of the app 
        $state.go('home');
    }]);

    maksoodMohiuddinApp.config(['$stateProvider', '$locationProvider', '$httpProvider', '$compileProvider',
    function ($stateProvider, $locationProvider, $httpProvider, $compileProvider) {

        $locationProvider.html5Mode(true);       

    }]);

})();

