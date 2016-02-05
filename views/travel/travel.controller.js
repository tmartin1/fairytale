(function () {
    'use strict';

    angular.module('fairytale.travel', [])
        .controller('travelController', travelController);

    function travelController () {
        var vm = this;
        // vm.currentView = currentView;

        vm.tabs = [{
            name: 'hotels',
            label: 'Hotels',
            url: './views/travel/tabs/hotels.html'
        }, {
            name: 'gettingAround',
            label: 'Getting Around',
            url: './views/travel/tabs/gettingAround.html'
        }, {
            name: 'parks',
            label: 'Disney World!',
            url: './views/travel/tabs/parks.html'
        }];

        vm.currentTab = vm.tabs[0];

        // function currentView () {
        //     return vm.tabs[vm.currentTab];
        // }
    }

})();
