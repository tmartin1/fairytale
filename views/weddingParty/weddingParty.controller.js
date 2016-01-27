(function () {
    'use strict';

    angular.module('fairytale.weddingParty', [])
        .controller('weddingPartyController', weddingPartyController);

    function weddingPartyController () {
        var vm = this;

        vm.title =  'weddingParty';
    }

})();
