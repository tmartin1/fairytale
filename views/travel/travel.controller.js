(function () {
    'use strict';

    angular.module('fairytale.travel', [])
        .controller('travelController', travelController);

    function travelController ($sce) {
        var vm = this;

        vm.tabs = [{
            name: 'hotels',
            label: 'Hotels',
            url: './views/travel/tabs/hotels.html'
        }, {
            name: 'gettingAround',
            label: 'Getting Around',
            url: './views/travel/tabs/gettingAround.html'
        }, {
            name: 'parks',
            label: 'Disney World!',
            url: './views/travel/tabs/parks.html'
        }];

        vm.currentTab = vm.tabs[0];

        vm.hotels = [{
            title: 'Pop Century',
            summary: ['Set 1.7 miles from Disney\'s Hollywood Studios, this nostalgic resort',
            'highlights pop culture from the 1950s through the 1990s, including iconic toys,',
            'fashions and dances. Basic rooms offer free WiFi and in-room safes; upgraded rooms',
            'feature pool and courtyard views. Amenities include 3 pools (1 with water jets and',
            'another shaped like a bowling pin), a food court, a video arcade and complimentary',
            'outdoor movies. Free transport is offered to the Disney theme parks and the airport.',
            'Childcare services, locker rentals and 24-hour laundry facilities are available',
            '(surcharge).'].join(' '),
            pics: ['pop_1.jpg', 'pop_2.jpg', 'pop_3.jpg', 'pop_4.jpg', 'pop_5.jpg', 'pop_6.jpg'],
            map: './images/pop_century_map.jpg',
            googleMap: $sce.trustAsResourceUrl(
                'https://www.google.com/maps/d/embed?mid=zS-bmhXF4Uzc.klRtaBRvW-NE'),
            currentView: 'pics'
        }, {
            title: 'Port Orleans - Riverside',
            summary: '',
            pics: [''],
            map: '',
            googleMap: $sce.trustAsResourceUrl(
                'https://www.google.com/maps/d/embed?mid=zS-bmhXF4Uzc.kWTLkPqMCYn0'),
            currentView: 'pics'
        }, {
            title: 'Boardwalk',
            summary: '',
            pics: [''],
            map: '',
            googleMap: $sce.trustAsResourceUrl(
                'https://www.google.com/maps/d/embed?mid=zS-bmhXF4Uzc.ks1ZSntKwEuE'),
            currentView: 'pics'
        }];
    }

})();
