(function(angular) {

  'use strict';

  angular.module('avila').config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

      $stateProvider.state('avila', {
        abstract: true,
        views: {
          'header': {
            component: 'headerComponent'
          }
        }
      });

      $stateProvider.state('avila.home', {
        url: '/',
        views: {
          'main@': {
            component: 'homeComponent'
          }
        }
      });

      $urlRouterProvider.otherwise('/');

    }
  ]);

})(angular);
