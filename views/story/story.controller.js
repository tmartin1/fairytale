(function () {
    'use strict';

    angular.module('fairytale.story', [])
        .controller('storyController', storyController);

    function storyController (PhotoService) {
        var vm = this;
        vm.storyPics = PhotoService.getPics([0, 1, 14, 17, 26, 29, 39, 46, 47, 48]);
    }

})();
