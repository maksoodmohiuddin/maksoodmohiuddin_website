﻿(function () {
    'use strict';

    /* App Module */
    var maksoodMohiuddinApp = angular.module('maksoodMohiuddin', [
        'ui.router',             
        'maksoodMohiuddin.homeModule',
        'maksoodMohiuddin.aydinModule',
        'maksoodMohiuddin.sophiaModule',
        'maksoodMohiuddin.resumeModule',
        'maksoodMohiuddin.experienceModule',
        'maksoodMohiuddin.travelModule',
        'maksoodMohiuddin.educationModule',
        'maksoodMohiuddin.mLabModule',
    ]);


    maksoodMohiuddinApp.run(['$state', '$rootScope', '$window', 
    function ($state, $rootScope, $window) {
        // go to default view of the app 
        $state.go('home');

        $rootScope.$on("$stateChangeSuccess", function (event, currentState, previousState) {
            $window.scrollTo(0, 0);
        });

        $rootScope.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        // for naviagation         
        $rootScope.experience = function () {
            $state.go('experience');
        };

        $rootScope.education = function () {
            $state.go('education');
        };

        $rootScope.travel = function () {
            $state.go('travel');
        };

        $rootScope.resume = function () {
            $state.go('resume');
        };

        $rootScope.home = function () {
            $state.go('home');
        };

        $rootScope.aydin = function () {
            $state.go('aydin');
        };

        $rootScope.sophia = function () {
            $state.go('sophia');
        };

        $rootScope.mLab = function () {
            $state.go('mLab');
        };

        $rootScope.colorTheStates = function () {
            $state.go('mLab.colorthestates');
        };
    }]);

    maksoodMohiuddinApp.config(['$stateProvider', '$locationProvider', '$httpProvider', '$compileProvider',
    function ($stateProvider, $locationProvider, $httpProvider, $compileProvider) {

        $locationProvider.html5Mode(true);       

    }]);

})();

