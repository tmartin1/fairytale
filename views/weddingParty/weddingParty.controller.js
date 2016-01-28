(function () {
    'use strict';

    angular.module('fairytale.weddingParty', [])
        .controller('weddingPartyController', weddingPartyController);

    function weddingPartyController () {
        var vm = this;

        vm.bridesmaids = [{
            name: '',
            pic: '',
            bio: ''
        }];

        vm.groomsmen = [{
            name: '',
            pic: '',
            bio: ''
        }];
    }

})();
