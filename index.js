(function () {
    'use strict';

    angular.module('fairytale', [
            'ngAnimate',
            'ngTouch',
            'ui.router',
            'ui.bootstrap',
            'fairytale.navbarDirective',
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
        .run(run)
        .controller('mainController', mainController);

    function routerConfig ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('home');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: './views/home/home.html',
                controller: 'homeController',
                controllerAs: 'vm',
                data: { title: 'Home' }
            })
            .state('events', {
                url: '/events',
                templateUrl: './views/events/events.html',
                controller: 'eventsController',
                controllerAs: 'vm',
                data: { title: 'Events' }
            })
            .state('story', {
                url: '/our-story',
                templateUrl: './views/story/story.html',
                controller: 'storyController',
                controllerAs: 'vm',
                data: { title: 'Our Story' }
            })
            .state('weddingParty', {
                url: '/wedding-party',
                templateUrl: './views/weddingParty/weddingParty.html',
                controller: 'weddingPartyController',
                controllerAs: 'vm',
                data: { title: 'Wedding Party' }
            })
            .state('travel', {
                url: '/travel-and-accomodations',
                templateUrl: './views/travel/travel.html',
                controller: 'travelController',
                controllerAs: 'vm',
                data: { title: 'Travel & Accommodations' }
            })
            .state('pictures', {
                url: '/pictures',
                templateUrl: './views/pictures/pictures.html',
                controller: 'picturesController',
                controllerAs: 'vm',
                data: { title: 'Pictures' }
            })
            .state('registry', {
                url: '/registry',
                templateUrl: './views/registry/registry.html',
                controller: 'registryController',
                controllerAs: 'vm',
                data: { title: 'Gift Registry' }
            })
            .state('styleSheet', {
                url: '/style-sheet',
                templateUrl: './views/styleSheet/styleSheet.html',
                controller: 'styleSheetController',
                controllerAs: 'vm'
            });
    }

    function run ($rootScope, $state) {
        // Determine current device.
        var ua = navigator.userAgent;
        $rootScope.isMobile = ua.match(/Android|iPhone|iPad|iPod|IEMobile|BlackBerry|Opera Mini/i);

        var backgroundImg = $rootScope.isMobile ? 'dalrek_painting_mobile' : 'dalrek_painting_lr';
        $rootScope.backgroundSrc = './images/' + backgroundImg + '.jpg';

        var body = angular.element('body');
        // If device is not mobile, disable swipe events.
        if (!$rootScope.isMobile) {
            body.removeAttr('data-ng-swipe-left');
            body.removeAttr('data-ng-swipe-right');
        }

        // Expose and define exposed/navable states.
        $rootScope.$state = $state;
        var states = $state.get().map(function (state, index) {
            return state.name;
        });
        $rootScope.states = states.slice(1, states.length - 1);

        // Define state transition animation.
        $rootScope.uiViewAnimation = 'fade-in';
        // $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState) {
        //     var current = $rootScope.states.indexOf(fromState.name);
        //     if (current === -1) {
        //         $rootScope.uiViewAnimation = 'fade-in';
        //     } else {
        //         var target = $rootScope.states.indexOf(toState.name);
        //         var direction = target > current ? 'left' : 'right';
        //         $rootScope.uiViewAnimation = 'slide slide-' + direction;
        //     }
        // });

        // User view config settings.
        $rootScope.viewConfig = {
            plainfont: false
        };
    }

    function mainController ($rootScope, $state) {
        var vm = this;
        vm.leftSwipe = leftSwipe;
        vm.rightSwipe = rightSwipe;

        function leftSwipe (event) {
            event.preventDefault();
            var current = $rootScope.states.indexOf($state.current.name);
            var next = $rootScope.states[current + 1];
            if (next) {
                $state.go(next);
            }
        }

        function rightSwipe (event) {
            event.preventDefault();
            var current = $rootScope.states.indexOf($state.current.name);
            if (current > 0) {
                $state.go($rootScope.states[current - 1]);
            }
        }
    }

})();
