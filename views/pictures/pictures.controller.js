(function () {
    'use strict';

    angular.module('fairytale.pictures', [])
        .controller('picturesController', picturesController);

    function picturesController ($rootScope, $timeout) {
        var vm = this;

        var picCount = 21;
        vm.pics = new Array(picCount);
        for (var i = 0; i < picCount; i++) {
            vm.pics[i] = {
                index: i,
                active: i === 0 ? true : false
            };
        }

        vm.slideshow = function (index) {
            vm.pics[index].active = true;
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
            scaled++;
            var pics = angular.element('img');
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
        // $timeout(scalePics, 1000);
    }

})();
