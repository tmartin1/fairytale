(function () {
    'use strict';

    angular.module('fairytale.story', [])
        .controller('storyController', storyController);

    function storyController ($log, $uibModal) {
        var vm = this;
        vm.zoomIn = zoomIn;

        vm.storyPics = [{
            src: '1.jpg',
            title: 'Independence Day',
            date: moment('20050704').format('LL'),
            caption: ['Looking as ridiculous as ever, before Tim and Ben tried to make \'home-made',
                'napalm\' by melting styrofoam into gasoline... that will be sure to impress this',
                'attractive female.'].join(' ')
        }, {
            src: '2.jpg',
            title: 'Our First Picture as a Couple',
            date: moment('20050817').format('LL'),
            caption: ['Well, we didn\'t \'officially\' decide that was our first date until a few',
                'days after the fact (I still say Thai Ginger counts).'].join()
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
