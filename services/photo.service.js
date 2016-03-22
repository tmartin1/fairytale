(function () {
    'use strict';

    angular.module('fairytale.service.photo', [])
        .service('PhotoService', photoService);

    function photoService ($uibModal) {
        var pics = [
            {
                src: '2005-07-04',
                title: 'Independence Day',
                // date: moment('20050704').format('LL'),
                caption: ['Looking as ridiculous as ever, before Tim and Ben tried to make ',
                    '\'home-made napalm\' by melting styrofoam into gasoline... that will be sure',
                    'to impress this attractive female.'].join(' ')
            }, {
                src: '2005-08-17',
                title: 'Our First Picture as a Couple',
                // date: moment('20050817').format('LL'),
                caption: ['Well, we didn\'t \'officially\' decide that was our first date until a',
                    'few days after the fact (I still say Thai Ginger counts).'].join()
            }, {
                src: '2006-05-10'
            }, {
                src: '2006-05-26'
            }, {
                src: '2006-10-28'
            }, {
                src: '2007-06-17'
            }, {
                src: '2007-06-18-1'
            }, {
                src: '2007-06-18-2'
            }, {
                src: '2007-06-18-3'
            }, {
                src: '2007-06-19'
            }, {
                src: '2007-12-14'
            }, {
                src: '2008-04-03'
            }, {
                src: '2008-04-16'
            }, {
                src: '2008-06-23'
            }, {
                src: '2008-08-17'
            }, {
                src: '2009-03-17'
            }, {
                src: '2009-04-14'
            }, {
                src: '2009-06-13'
            }, {
                src: '2009-06-27'
            }, {
                src: '2009-11-07'
            }, {
                src: '2010-04-15'
            }, {
                src: '2010-04-17-1'
            }, {
                src: '2010-04-17-2'
            }, {
                src: '2011-06-11'
            }, {
                src: '2011-06-28-1'
            }, {
                src: '2011-06-28-2'
            }, {
                src: '2011-08-12'
            }, {
                src: '2011-08-13-1'
            }, {
                src: '2011-08-13-2'
            }, {
                src: '2011-08-13-3'
            }, {
                src: '2011-11-28'
            }, {
                src: '2011-12-31-1'
            }, {
                src: '2011-12-31-2'
            }, {
                src: '2012-05-20'
            }, {
                src: '2012-09-06-1'
            }, {
                src: '2012-09-06-2'
            }, {
                src: '2012-09-06-3'
            }, {
                src: '2012-09-06-4'
            }, {
                src: '2012-09-06-5'
            }, {
                src: '2012-09-06-6'
            }, {
                src: '2012-09-06-7'
            }, {
                src: '2013-02-15-1'
            }, {
                src: '2013-02-15-2'
            }, {
                src: '2013-08-13'
            }, {
                src: '2013-12-07'
            }, {
                src: '2014-05-10'
            }, {
                src: '2014-10-25'
            }, {
                src: '2015-04-19'
            }, {
                title: 'Winning',
                src: '2015-10-17',
                caption: ['Ok, so we\'ve been on this ride a ton before- and I never win. Except',
                    'this time when I hit some magic hidden target or something and got 100,000',
                    'bonus points just before the end. It was stupendous.'].join(' ')
            }, {
                src: '2015-10-18'
            }, {
                src: '2015-12-13-1'
            }
        ];

        _setDates();

        return {
            getPics: getPics,
            zoomIn: zoomIn
        };

        function getPics (index) {
            if (!index) {
                return pics;
            } else if (angular.isNumber(index)) {
                return pics[index];
            } else if (angular.isArray(index)) {
                return index.map(function (target) {
                    return pics[target];
                });
            }
        }

        function zoomIn (pic) {
            pic = pic || {};
            var modalInstance = $uibModal.open({
                animation: false,
                template: ['<div class="zoomedPic">',
                    '<center class="slideshow-slide" >',
                    '<ft-picture picture="$ctrl.pic" zoom="false" position="center">',
                    '</ft-picture>',
                    '</center>',
                    '</div>'].join(),
                controller: function () {
                    this.pic = pic;
                },
                controllerAs: '$ctrl',
                size: 'lg'
            });
        }

        function _setDates () {
            angular.forEach(pics, function (pic) {
                var name = pic.src.split('-').slice(0, 3);
                pic.date = new Date(name.join());
            });
        }
    }

})();
