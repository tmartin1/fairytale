(function () {
    'use strict';

    angular.module('fairytale.pictures', [])
        .controller('picturesController', picturesController);

    function picturesController ($rootScope) {
        var vm = this;

        vm.pics = new Array(21);

        vm.engagement = [{
            title: 'Pic',
            ref: '...'
        }];

        vm.wedding;

        vm.slideshow = function (index) {
            console.log('starting slideshow');
            vm.slideshowActive = true;
            $rootScope.viewConfig.scrollLock = true;
        };

        vm.closeSlideshow = function () {
            vm.slideshowActive = false;
            $rootScope.viewConfig.scrollLock = false;
        };
    }

})();
