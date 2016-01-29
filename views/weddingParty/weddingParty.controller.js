(function () {
    'use strict';

    angular.module('fairytale.weddingParty', [])
        .controller('weddingPartyController', weddingPartyController);

    function weddingPartyController () {
        var vm = this;

        vm.bridesmaids = [{
            name: 'Aralyn Davis',
            title: 'Maid of Honor',
            bio: 'aralyn.txt',
            pic: ''
        }, {
            name: 'Karen Chan',
            title: 'Maid of Honor',
            bio: 'karen.txt',
            pic: ''
        }, {
            name: 'Amy Crutchfield',
            title: 'Bridesmaid',
            bio: 'amy.txt',
            pic: ''
        }, {
            name: 'Jacquie Pinkerton',
            title: 'Bridesmaid',
            bio: 'jacquie.txt',
            pic: ''
        }, {
            name: 'Annie Gianunzio',
            title: 'Bridesmaid',
            bio: 'annie.txt',
            pic: ''
        }, {
            name: 'Chelsea Farmsworth',
            title: 'Bridesmaid',
            bio: 'chelsea.txt',
            pic: ''
        }, {
            name: 'Amy Holliday',
            title: 'Bridesmaid',
            bio: 'holliday.txt',
            pic: ''
        }];

        vm.groomsmen = [{
            name: 'Alexander Martin',
            title: 'Best Man, Older Brother, Sage, Guardian',
            bio: 'alex.txt',
            pic: 'https://lh3.googleusercontent.com/-vZjz3lNj8ko/VqmGqqQ5BPI/AAAAAAAABSU/mHxU662FOgE/s912-Ic42/alex-2.JPG'
        }, {
            name: 'Nicholas Martin',
            title: 'Best Man, Younger Brother, Inspiration, Unparallelled Taboo Partner, ADC',
            bio: 'nick.txt',
            pic: 'https://lh3.googleusercontent.com/-MYns_vrNPv4/VqmGwgQESJI/AAAAAAAABTs/ZjdU34cvdRQ/s640-Ic42/nick.jpg'
        }, {
            name: 'Christophe Van Elewyck',
            title: 'Groomsman, Muse, Spiritual Life Coach',
            bio: 'christophe.txt',
            pic: ''
        }, {
            name: 'Elliott Thoreby',
            title: 'Groomsman, Pioneer, Brewmaster, Jedi',
            bio: 'elliott.txt',
            pic: ''
        }, {
            name: 'Josh Powell',
            title: 'Groomsman, Role Model, Jiminy Cricket, Long Lost Akali Hyper-Carry',
            bio: 'josh.txt',
            pic: ''
        }, {
            name: 'Tim Harris',
            title: 'Groomsman, Confidant, Tim Harris, Horn of Mercury',
            bio: 'tim.txt',
            pic: ''
        }, {
            name: 'Dalrek Davis',
            title: 'Groomsman, Brother to Be, Master of the Arts, AMF',
            bio: 'dalrek.txt',
            pic: ''
        }];

        vm.bioUrl = function bioUrl (target) {
            return './views/weddingParty/bios/' + target;
        };
    }

})();
