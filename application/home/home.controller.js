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
      vm.intro = [
        {
          title: 'Our Primary Goal',
          description: 'To satisfy the growing Chinese demand for quality food products that Canada is world renown for, by best representing Canadian food producers in efficiently marketing Canadian products to the needs of Chinese consumers.',
          image: 'goal.jpg'
        },
        {
          title: 'Our Competitive Advantage',
          description: 'Best demonstrated by our capacity to communicate fluently in Mandarin, Cantonese, English and French which fully covers the languages of both Chinese buyers and Canadian sellers. This language capability allows us to eliminate any potential misunderstanding language barriers usually cause and avoids wasting time and money for all parties.',
          image: 'competitive.jpg'
        },
        {
          title: 'Our main strength',
          description: 'the deep knowledge and experience in the food industry of both Western and Asian cuisine. This permits us to be pioneers in promoting Canadian seafood to fulfill the culinary demand of the Chinese consumer. Avila Trading Ltd. has a sole core purpose to become a household name of being a reliable and strong bridge for Canadian and Chinese businesses to complete seamless and successful trade. Avila Trading Ltd. has received formal mandates from Canadian seafood and Non-GMO soybeans producers to assist and conduct business within the Chinese markets.',
          image: 'strength.jpg'
        }
      ];
    }

  }

})(angular);
