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

    maksoodMohiuddinApp.run(['$state', '$rootScope', '$window', 
    function ($state, $rootScope, $window) {
        // go to default view of the app 
        $state.go('home');

        $rootScope.$on("$stateChangeSuccess", function (event, currentState, previousState) {
            $window.scrollTo(0, 0);
        });
    }]);

    maksoodMohiuddinApp.config(['$stateProvider', '$locationProvider', '$httpProvider', '$compileProvider',
    function ($stateProvider, $locationProvider, $httpProvider, $compileProvider) {

        $locationProvider.html5Mode(true);       

    }]);

})();

