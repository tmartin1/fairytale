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
        var states = $state.get().map(function (state, index) {
            return state.name;
        });
        $rootScope.states = states.slice(1, states.length - 1);

        $rootScope.slideAnimation = 'fade-in';
        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState) {
            var current = $rootScope.states.indexOf(fromState.name);
            var target = $rootScope.states.indexOf(toState.name);
            var direction = target > current ? 'left' : 'right';
            $rootScope.slideAnimation = 'slide-' + direction;
        });
    }

    function mainController ($rootScope, $state) {
        var vm = this;
        vm.leftSwipe = leftSwipe;
        vm.rightSwipe = rightSwipe;

        function leftSwipe () {
            var current = $rootScope.states.indexOf($state.current.name);
            var next = $rootScope.states[current + 1];
            if (next) {
                $state.go(next);
            }
        }

        function rightSwipe () {
            var current = $rootScope.states.indexOf($state.current.name);
            if (current > 0) {
                $state.go($rootScope.states[current - 1]);
            }
        }
    }

})();
