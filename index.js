(function () {
    'use strict';

    angular.module('fairytale', [
            'ngAnimate',
            'ui.router',
            'ui.bootstrap',
            'fairytale.summaryDirective',
            'fairytale.home',
            'fairytale.events',
            'fairytale.pictures',
            'fairytale.registry',
            'fairytale.story',
            'fairytale.travel',
            'fairytale.weddingParty',
            'fairytale.styleSheet'
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
            })
            .state('pictures', {
                url: '/pictures',
                templateUrl: './views/pictures/pictures.html',
                controller: 'picturesController',
                controllerAs: 'vm'
            })
            .state('registry', {
                url: '/registry',
                templateUrl: './views/registry/registry.html',
                controller: 'registryController',
                controllerAs: 'vm'
            })
            .state('story', {
                url: '/our-story',
                templateUrl: './views/story/story.html',
                controller: 'storyController',
                controllerAs: 'vm'
            })
            .state('travel', {
                url: '/travel-and-accomodations',
                templateUrl: './views/travel/travel.html',
                controller: 'travelController',
                controllerAs: 'vm'
            })
            .state('weddingParty', {
                url: '/wedding-party',
                templateUrl: './views/weddingParty/weddingParty.html',
                controller: 'weddingPartyController',
                controllerAs: 'vm'
            })
            .state('styleSheet', {
                url: '/style-sheet',
                templateUrl: './views/styleSheet/styleSheet.html',
                controller: 'styleSheetController',
                controllerAs: 'vm'
            });
    }

})();
