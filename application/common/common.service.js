(function(angular) {

  'use strict';

  angular.module('avila.common').service('avila.common.CommonService', CommonService);
  CommonService.$inject = ['$window'];

  function CommonService($window) {
    var svc = this;
    svc.setPageTitle = setPageTitle;

    function setPageTitle(title) {
      $window.document.title = title;
    }

  }

})(angular);
