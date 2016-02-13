(function () {
    'use strict';

    angular.module('fairytale.styleSheet', [])
        .controller('styleSheetController', styleSheetController);

    function styleSheetController () {
        var vm = this;

        vm.colors = {
            purples: {
                ultralight: '#f9f7fc',
                light: '#ebe5f5',
                medium: '#cfbfe7',
                // dark: '#501171',
                mediumdark: '#a587d2',
                dark: '#57348b',
                ultradark: '#1d112e'
            }
        };

        vm.fontDemoText = 'Timothy Martin and Anastacia Davis';
        vm.fontDemoSize = 40;
        vm.fonts = [
            'new_walt',
            'nk_mono',
            'youre_invited_regular',
            'youre_invited_heavy',
            'great_vibes_regular',
            'mardian'
        ];
    }

})();
