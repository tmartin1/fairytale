(function () {
    'use strict';

    angular.module('fairytale', [
            'ngAnimate',
            'ngTouch',
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
        .config(routerConfig)
        .run(init)
        .controller('mainController', mainController);

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
            .state('story', {
                url: '/our-story',
                templateUrl: './views/story/story.html',
                controller: 'storyController',
                controllerAs: 'vm'
            })
            .state('weddingParty', {
                url: '/wedding-party',
                templateUrl: './views/weddingParty/weddingParty.html',
                controller: 'weddingPartyController',
                controllerAs: 'vm'
            })
            .state('travel', {
                url: '/travel-and-accomodations',
                templateUrl: './views/travel/travel.html',
                controller: 'travelController',
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
            .state('styleSheet', {
                url: '/style-sheet',
                templateUrl: './views/styleSheet/styleSheet.html',
                controller: 'styleSheetController',
                controllerAs: 'vm'
            });
    }

    function init ($rootScope, $state) {
        $rootScope.states = $state.get().map(function (state) {
            return state.name;
        });
        $rootScope.states.shift();
        $rootScope.states.pop();
        console.log($rootScope.states);
    }

    function mainController ($rootScope, $state) {
        var vm = this;

        vm.leftSwipe = leftSwipe;
        vm.rightSwipe = rightSwipe;
        $rootScope.slideAnimation = 'fade-in';

        function leftSwipe () {
            var current = $rootScope.states.indexOf($state.current.name);
            var next = $rootScope.states[current + 1];
            if (next) {
                $rootScope.slideAnimation = 'slide slide-left';
                $state.go(next);
            }
        };

        function rightSwipe () {
            var current = $rootScope.states.indexOf($state.current.name);
            if (current > 0) {
                $rootScope.slideAnimation = 'slide slide-right';
                $state.go($rootScope.states[current - 1]);
            }
        };
    }

})();
