'use strict';

angular.module('bookcoachApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'mobile-angular-ui',
    'angularMoment'
  ])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);

  })
  .run(function(amMoment) {
    amMoment.changeLocale('zh-CN');
  });
