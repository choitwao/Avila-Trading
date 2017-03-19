(function(angular) {

  'use strict';

  angular.module('avila.home').controller('avila.home.HomeController', HomeController);
  HomeController.$inject = ['$stateParams','avila.common.LanguageConstant'];

  function HomeController($stateParams, LanguageConstant) {

    var vm = this;
    vm.$onInit = init;

    function init() {
      vm.lang = $stateParams.lang || 'en';
      vm.languageSource = LanguageConstant[vm.lang.toUpperCase()];
    }

  }

})(angular);
