(function () {
    'use strict';

    angular.module('fairytale.component.navbar', [])
        .component('navbar', {
            templateUrl: './components/navbar/navbar.html',
            controller: navbarController
        });

    function navbarController ($rootScope, $state) {
        var vm = this;
        vm.states = $state.get();
        vm.fairydust = true;

        // Open/close mobile nav menu.
        vm.toggleMobileNavMenu = function (cmd) {
            vm.mobileMenuOpen = cmd === 'close' ? false : !vm.mobileMenuOpen;
        };

        // Toggle body text between the fancy font and plain font.
        vm.togglePlainfont = function () {
            $rootScope.viewConfig.plainfont = !$rootScope.viewConfig.plainfont;
        };

        // Doesn't actually turn off anything.
        vm.turnOffFairyDust = function () {
            vm.fairydust = true;
            console.log('TODO: Fairydust everywhere + notification that fairydust can\'t be ' +
                'turned off (obviously).');
        };
    }

})();
