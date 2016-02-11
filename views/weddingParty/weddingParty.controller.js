(function () {
    'use strict';

    angular.module('fairytale.weddingParty', [])
        .controller('weddingPartyController', weddingPartyController);

    function weddingPartyController () {
        var vm = this;

        vm.bridesmaids = [{
            name: 'Aralyn Davis',
            title: 'Maid of Honor',
            asset: 'aralyn'
        }, {
            name: 'Karen Chan',
            title: 'Maid of Honor',
            asset: 'karen'
        }, {
            name: 'Amy Crutchfield',
            title: 'Bridesmaid',
            asset: 'amy'
        }, {
            name: 'Jacquie Pinkerton',
            title: 'Bridesmaid',
            asset: 'jacquie'
        }, {
            name: 'Annie Gianunzio',
            title: 'Bridesmaid',
            asset: 'annie'
        }, {
            name: 'Chelsea Farmsworth',
            title: 'Bridesmaid',
            asset: 'chelsea'
        }, {
            name: 'Amy Holliday',
            title: 'Bridesmaid',
            asset: 'holliday'
        }];

        vm.groomsmen = [{
            name: 'Alexander Martin',
            title: 'Best Man • Brother • Sage • Guardian',
            asset: 'alex'
        }, {
            name: 'Nicholas Martin',
            title: 'Best Man • Brother • Inspiration • Telepathic Taboo Partner • ADC',
            asset: 'nick'
        }, {
            name: 'Christophe Van Elewyck',
            title: 'Groomsman • Muse • Spiritual Life Coach',
            asset: 'christophe'
        }, {
            name: 'Elliott Thoreby',
            title: 'Groomsman • Pioneer • Brewmaster • Jedi',
            asset: 'elliott'
        }, {
            name: 'Josh Powell',
            title: 'Groomsman • Role Model • Jiminy Cricket • Long Lost Akali Hyper-Carry',
            asset: 'josh'
        }, {
            name: 'Tim Harris',
            title: 'Groomsman • Confidant • Tim Harris • Horn of Mercury',
            asset: 'tim'
        }, {
            name: 'Dalrek Davis',
            title: 'Groomsman • Brother to Be • Master of the Arts • AMF',
            asset: 'dalrek'
        }];
    }

})();
