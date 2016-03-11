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
        function start (pics, index) {
            var pic = pics[index || 0] || {};
            pic.active = true;

            $uibModal.open({
                animation: false,
                template: ['<div class="zoomedPic">',
                    '<ft-slideshow pics="vm.pics" start="vm.start"></ft-slideshow>',
                    '</div>'].join(),
                //
                // template: ['<div class="zoomedPic">',
                //     '<h2 data-ng-if="pic.title">' + pic.title + '</h2>',
                //     '<img src="./assets/pics-of-us/' + pic.src + '.jpg"></img>',
                //     '<br><br>',
                //     '<p>' + pic.date + '</p>',
                //     '<p data-ng-if="pic.caption">' + pic.caption + '</p>',
                //     '</div>'].join(),
                // controller: 'storyController',
                // controller: slideshowController,
                // controllerAs: '$ctrl',
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
