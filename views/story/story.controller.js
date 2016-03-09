(function () {
    'use strict';

    angular.module('fairytale.story', [])
        .controller('storyController', storyController);

    function storyController (photoService) {
        var vm = this;
        vm.zoomIn = photoService.zoomIn;

        vm.storyPics = photoService.getPics([0, 1, 14, 17, 26, 29, 39, 46, 47, 48]);
    }

})();
