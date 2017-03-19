(function(angular) {

    'use strict';

    angular.module('avila.header').controller('avila.header.HeaderController', HeaderController);
    HeaderController.$inject = ['$stateParams','avila.common.LanguageConstant'];

    function HeaderController($stateParams, LanguageConstant) {

        var vm = this;
        vm.$onInit = init;

        function init() {
            vm.lang = $stateParams.lang || 'en';
            vm.languageSource = LanguageConstant[vm.lang.toUpperCase()];
        }

    }

})(angular);
