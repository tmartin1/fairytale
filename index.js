(function () {
    'use strict';

    angular.module('fairytale', [
            'ngAnimate',
            'ui.router',
            'ui.bootstrap',
            'fairytale.home',
            'fairytale.events'
        ])
        .config(routerConfig);

    function routerConfig ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: './views/home/home.html',
                controller: 'homeController',
                controllerAs: 'vm'
            })
            .state('events', {
                url: '/events',
                templateUrl: './views/events/events.html',
                controller: 'eventsController',
                controllerAs: 'vm'
            });
    }

})();
