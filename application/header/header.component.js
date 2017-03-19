(function(angular) {

    'use strict';

    angular.module('avila.header').component('headerComponent', {
        controller: 'avila.header.HeaderController',
        controllerAs: 'vm',
        templateUrl: 'header/header.template.html'
    });

})(angular);
