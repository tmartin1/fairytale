(function () {
    'use strict';

    angular.module('fairytale.home', [])
        .controller('homeController', homeController);

    function homeController () {
        var vm = this;

        vm.title =  'Home';
    }

})();
