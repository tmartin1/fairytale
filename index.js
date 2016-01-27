angular.module('app', [
        'ngAnimate',
        'ui.router',
        'ui.bootstrap',
        'moment',
        'homeController'
    ])
    .config(routerConfig);

function routerConfig ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './views/home/home.html',
            controller: 'homeController',
            controllerAs: 'vm'
        });
}
