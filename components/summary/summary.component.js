(function () {
    'use strict';

    angular.module('fairytale.component.summary', [])
        .component('summary', {
            templateUrl: 'components/summary/summary.html',
            bindings: {
                person: '=',
                border: '=',
                customclass: '='
            },
            controller: summaryController,
            controllerAs: 'vm'
        });

    function summaryController () {
        var vm = this;
        vm.bioUrl = bioUrl;
        vm.picUrl = picUrl;

        function bioUrl (person) {
            return './views/weddingParty/bios/' + person + '.txt';
        }

        function picUrl (person) {
            return './views/weddingParty/pics/' + person + '.jpeg';
        }
    }

})();
