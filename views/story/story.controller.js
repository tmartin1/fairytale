(function () {
    'use strict';

    angular.module('fairytale.story', [])
        .controller('storyController', storyController);

    function storyController () {
        var vm = this;

        vm.title =  'story';
    }

})();
