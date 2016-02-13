(function () {
    'use strict';

    angular.module('fairytale.navbarDirective', [])
        .directive('navbar', navbarDirective);

    function navbarDirective () {
        return {
            restrict: 'E',
            templateUrl: 'components/navbar/navbar.html',
            // scope: {
            //     person: '=',
            //     border: '='
            // },
            controller: navbarController,
            controllerAs: 'vm'
        };

        function navbarController ($rootScope) {
            var vm = this;

            vm.togglePlainfont = togglePlainfont;

            function togglePlainfont () {
                $rootScope.viewConfig.plainfont = !$rootScope.viewConfig.plainfont;
            }
        }
    }

})();
