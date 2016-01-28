(function () {
    'use strict';

    angular.module('fairytale.events', [])
        .controller('eventsController', eventsController);

    function eventsController () {
        var vm = this;

        vm.events = [{
            title: 'Wedding Ceremony',
            time: '7:00 PM',
            date: moment('20160625').format('MMMM Do YYYY'),
            address: {
                street: '4401 Floridian Way',
                city: 'Lake Buena Vista, Orlando',
                state: 'FL',
                zip: '32830'
            }
        }, {
            title: 'Wedding Reception',
            time: '8:30 PM',
            date: moment('20160625').format('MMMM Do YYYY'),
            address: {
                street: '2101 Boardwalk Resort Ballroom',
                city: 'Orlando',
                state: 'FL',
                zip: '32830'
            }
        }]
    }

})();
