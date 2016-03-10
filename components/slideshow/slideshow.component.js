(function () {
    'use strict';

    angular.module('fairytale.component.slideshow', [])
        .component('ftSlideshow', {
            templateUrl: './components/slideshow/slideshow.html',
            controller: slideshowController
        })
        .service('SlideshowService', slideshowService);

    function slideshowController () {
        var vm = this;
    }

    function slideshowService ($uibModal) {
        return {
            start: start
        };

        // Start slideshow.
        function start (pics, index) {
            var pic = pics[index || 0] || {};

            $uibModal.open({
                animation: false,
                // templateUrl: './components/slideshow/slideshow.html',
                template: '<ft-picture picture="pic"></ft-picture>',
                //
                // template: ['<div class="zoomedPic">',
                //     '<h2 data-ng-if="pic.title">' + pic.title + '</h2>',
                //     '<img src="./assets/pics-of-us/' + pic.src + '.jpg"></img>',
                //     '<br><br>',
                //     '<p>' + pic.date + '</p>',
                //     '<p data-ng-if="pic.caption">' + pic.caption + '</p>',
                //     '</div>'].join(),
                controller: 'storyController',
                size: 'lg'
            });
        }
    }

})();
