(function () {
    'use strict';

    angular.module('fairytale.pictures', [])
        .controller('picturesController', picturesController);

    function picturesController () {
        var vm = this;

        vm.pics = new Array(21);

        vm.engagement = [{
            title: 'Pic',
            ref: '...'
        }];

        vm.wedding;
    }

})();
