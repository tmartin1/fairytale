(function () {
    'use strict';

    angular.module('fairytale.component.picture', [])
        .component('ftPicture', {
            templateUrl: './components/picture/picture.html',
            bindings: {
                picture: '<',
                position: '@',
                zoom: '<'
            },
            controller: ftPictureController
        });

    function ftPictureController (PhotoService) {
        var vm = this;
        vm.zoomIn = vm.zoom === false ? angular.noop : PhotoService.zoomIn;

        // If picture is just a string, set it to the picture src.
        if (angular.isString(vm.picture)) {
            vm.picture = {
                src: vm.picture
            };
        }
    }

})();
