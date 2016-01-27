angular
    .module('app', [
        'ngAnimate',
        'ui.router',
        'ui.bootstrap',
        'homeController'
    ])
    .config(routerConfig);

function routerConfig ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './views/home/home.html',
            controller: 'homeController',
            controllerAs: 'vm'
        });
}
