(function () {
    'use strict';

    angular.module('fairytale.summaryDirective', [])
        .directive('summary', summaryDirective);

    function summaryDirective () {
        return {
            restrict: 'EA',
            templateUrl: 'components/summary/summary.html',
            scope: {
                person: '='
            },
            controller: summaryController,
            controllerAs: 'vm',
            bindToController: true
        };

        function summaryController () {
            var vm = this;
        }
    }

})();
