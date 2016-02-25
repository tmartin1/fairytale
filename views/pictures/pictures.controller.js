(function () {
    'use strict';

    angular.module('fairytale.pictures', [])
        .controller('picturesController', picturesController);

    function picturesController ($rootScope, $timeout) {
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

        // Maximize slideshow image size... in a shitty hacky way...
        var scaled = 0;
        function scalePics () {
            console.log('scaling images');
            var pics = angular.element('img');
            scaled++;
            angular.forEach(pics, function (pic) {
                pic = angular.element(pic);
                if (pic.hasClass('slideshow-image')) {
                    var height = pic[0].naturalHeight;
                    var width = pic[0].naturalWidth;
                    var layout = height > width ? 'portrait' : 'landscape';
                    pic.addClass(layout);
                    if ((height === 0 || width === 0) && scaled < 5) {
                        $timeout(scalePics, 1000);
                    }
                }
            });
        }
        $timeout(scalePics, 1000);
    }

})();
