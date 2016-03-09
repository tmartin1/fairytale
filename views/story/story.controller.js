(function () {
    'use strict';

    angular.module('fairytale.story', [])
        .controller('storyController', storyController);

    function storyController ($log, $uibModal) {
        var vm = this;
        vm.zoomIn = zoomIn;

        vm.storyPics = [{
            src: '1.jpg',
            title: 'Our First Picture',
            date: moment('20050817').format('LL'),
            caption: 'Totes adorbs.'
        }];

        function zoomIn (pic) {
            console.log('zoom zoom');

            var modalInstance = $uibModal.open({
                animation: false,
                template: '<div class="zoomedPic">' +
                    '<h2>' + pic.title + '</h2>' +
                    '<img src="./pics-of-us/' + pic.src + '"></img>' +
                    '<br><br>' +
                    '<p>' + pic.date + '</p>' +
                    '<p>' + pic.caption + '</p>' +
                    '</div>',
                controller: 'storyController',
                size: 'lg',
                resolve: {
                    // items: function () {
                    //     return $scope.items;
                    // }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                // $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };
    }

})();
