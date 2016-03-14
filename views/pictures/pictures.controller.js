(function () {
    'use strict';

    angular.module('fairytale.pictures', [])
        .controller('picturesController', picturesController);

    function picturesController ($rootScope, PhotoService, SlideshowService) {
        var vm = this;
        vm.pics = PhotoService.getPics();

        vm.slideshow = function (pic, index) {
            // SlideshowService.start(vm, vm.pics, index);
            //
            pic.active = true; //
            vm.slideshowActive = true; //
            $rootScope.viewConfig.scrollLock = true; //
        };

        vm.closeSlideshow = function () {
            vm.slideshowActive = false; //
            $rootScope.viewConfig.scrollLock = false; //
        };

        // Maximize slideshow image size... in a shitty hacky way...
        // var scaled = 0;
        // function scalePics () {
        //     scaled++;
        //     var pics = angular.element('img');
        //     angular.forEach(pics, function (pic) {
        //         pic = angular.element(pic);
        //         if (pic.hasClass('slideshow-image')) {
        //             var height = pic[0].naturalHeight;
        //             var width = pic[0].naturalWidth;
        //             var layout = height > width ? 'portrait' : 'landscape';
        //             pic.addClass(layout);
        //             if ((height === 0 || width === 0) && scaled < 5) {
        //                 $timeout(scalePics, 1000);
        //             }
        //         }
        //     });
        // }
        // $timeout(scalePics, 1000);
    }

})();
