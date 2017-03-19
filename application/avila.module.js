(function(angular) {

  'use strict';

  angular.module('avila', [
    'ui.router',
    'ui.bootstrap',
    'ngResource',
    'ngSanitize',
    'ngStorage',
    'ngAnimate',
    'avila.common',
    'avila.header',
    'avila.home'
  ]);

})(angular);
