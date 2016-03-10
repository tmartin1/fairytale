(function () {
    'use strict';

    angular.module('fairytale.component.picture', [])
        .component('ftPicture', {
            templateUrl: './components/picture/picture.html',
            bindings: {
                picture: '<'
            }
        });
})();
