(function () {
    'use strict';

    angular.module('fairytale.component.bio', [])
        .component('ftBio', {
            templateUrl: './components/bio/bio.html',
            bindings: {
                person: '<',
                border: '<',
                customclass: '<'
            }
        });
})();
