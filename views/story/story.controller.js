(function () {
    'use strict';

    angular.module('fairytale.story', [])
        .controller('storyController', storyController);

    function storyController (photoService) {
        var vm = this;
        vm.zoomIn = photoService.zoomIn;

        vm.storyPics = photoService.getPics([0,1]);
    }

})();
