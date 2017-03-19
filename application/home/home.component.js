(function(angular) {

  'use strict';

  angular.module('avila.home').component('homeComponent', {
    controller: 'avila.home.HomeController',
    controllerAs: 'vm',
    templateUrl: 'home/home.template.html'
  });

})(angular);
