(function(angular) {

    'use strict';

    angular.module('avila.common').filter('lang', lang);

    function lang() {

        return function(language, langSource) {
            return langSource[language];
        };

    }

})(angular);
