(function () {
    'use strict';

    angular.module('fairytale.summaryDirective', [])
        .directive('summary', summaryDirective);

    function summaryDirective () {
        return {
            restrict: 'E',
            templateUrl: 'components/summary/summary.html',
            scope: {
                person: '=',
                border: '='
            },
            controller: summaryController,
            controllerAs: 'vm'
        };

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
    }

})();
