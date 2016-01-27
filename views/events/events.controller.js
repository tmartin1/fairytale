(function () {
    'use strict';

    angular.module('fairytale.events', [])
        .controller('eventsController', eventsController);

    function eventsController () {
        var vm = this;

        vm.title =  'events';
    }

})();
