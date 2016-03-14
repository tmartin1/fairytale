(function () {
    'use strict';

    angular.module('fairytale.component.slideshow', [])
        .component('ftSlideshow', {
            templateUrl: './components/slideshow/slideshow.html',
            controller: slideshowController,
            bindings: {
                pics: '=',
                start: '='
            }
        })
        .service('SlideshowService', slideshowService);

    function slideshowController () {
        console.log('slideshow!');
        console.log(this.pics);
        console.log(this.start);
    }

    function slideshowService ($uibModal) {
        return {
            start: start
        };

        // Start slideshow.
        function start (controller, pics, index) {
            var pic = pics[index || 0] || {};
            pic.active = true;

            $uibModal.open({
                animation: false,
                template: ['<div class="zoomedPic">',
                    '<ft-slideshow pics="vm.pics" start="vm.start"></ft-slideshow>',
                    '</div>'].join(),
                controller: controller,
                controllerAs: 'vm',
                windowTopClass: 'slideshow',
                controller: function () {
                    this.pics = pics;
                    this.start = index;
                },
                controllerAs: 'vm',
                bindToController: true,
                size: 'lg'
            });
        }
    }

})();
