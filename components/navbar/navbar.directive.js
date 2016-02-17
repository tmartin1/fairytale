(function () {
    'use strict';

    angular.module('fairytale.navbarDirective', [])
        .directive('navbar', navbarDirective);

    function navbarDirective () {
        return {
            restrict: 'E',
            templateUrl: 'components/navbar/navbar.html',
            controller: navbarController,
            controllerAs: 'vm'
        };

        function navbarController ($rootScope) {
            var vm = this;

            // Open/close mobile nav menu.
            vm.toggleMobileNavMenu = function (cmd) {
                console.log('toggling');
                if (cmd === 'close') {
                    vm.mobileMenuOpen = false;
                } else {
                    vm.mobileMenuOpen = !vm.mobileMenuOpen;
                }
            };

            // Toggle body text between the fancy font and plain font.
            vm.togglePlainfont = function () {
                $rootScope.viewConfig.plainfont = !$rootScope.viewConfig.plainfont;
            };
        }
    }

})();
