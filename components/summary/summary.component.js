(function () {
    'use strict';

    angular.module('fairytale.component.summary', [])
        .component('summary', {
            templateUrl: './components/summary/summary.html',
            bindings: {
                person: '=',
                border: '=',
                customclass: '='
            }
        });
})();
