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
            summary: './views/travel/components/pop_century.txt',
            pics: ['pop_1.jpg', 'pop_2.jpg', 'pop_3.jpg', 'pop_4.jpg', 'pop_5.jpg', 'pop_6.jpg'],
            map: 'pop_century_map.gif',
            googleMap: $sce.trustAsResourceUrl(
                'https://www.google.com/maps/d/embed?mid=zS-bmhXF4Uzc.klRtaBRvW-NE'),
            currentView: 'pics',
            linkName: 'disneyworld.disney.go.com/resorts/pop-century-resort',
            link: 'https://disneyworld.disney.go.com/resorts/pop-century-resort/',
            resortArea: 'Wide World of Sports',
            address: ['1050 Century Drive', 'Lake Buena Vista, FL 32830'],
            phone: '(407) 938-4000'
        }, {
            title: 'Port Orleans - Riverside',
            summary: './views/travel/components/port_orleans.txt',
            pics: ['orleans_1.jpg', 'orleans_2.jpg', 'orleans_3.jpg', 'orleans_4.jpg',
                'orleans_5.jpg', 'orleans_6.jpg', 'orleans_7.jpg', 'orleans_8.jpg'],
            map: 'pop_century_map.gif',
            googleMap: $sce.trustAsResourceUrl(
                'https://www.google.com/maps/d/embed?mid=zS-bmhXF4Uzc.kWTLkPqMCYn0'),
            currentView: 'pics',
            linkName: 'disneyworld.disney.go.com/resorts/port-orleans-resort-riverside',
            link: 'https://disneyworld.disney.go.com/resorts/port-orleans-resort-riverside/',
            resortArea: 'Disney Springs',
            address: ['1251 Riverside Drive', 'Lake Buena Vista, FL 32830'],
            phone: '(407) 934-6000'
        }, {
            title: 'Boardwalk',
            summary: './views/travel/components/boardwalk.txt',
            pics: ['boardwalk_1.jpg', 'boardwalk_2.jpg', 'boardwalk_3.jpg', 'boardwalk_4.jpg',
                'boardwalk_5.jpg', 'boardwalk_6.jpg', 'boardwalk_7.jpg', 'boardwalk_8.jpg'],
            map: 'boardwalk_map.jpg',
            googleMap: $sce.trustAsResourceUrl(
                'https://www.google.com/maps/d/embed?mid=zS-bmhXF4Uzc.ks1ZSntKwEuE'),
            currentView: 'pics',
            linkName: 'disneyworld.disney.go.com/resorts/boardwalk-inn',
            link: 'https://disneyworld.disney.go.com/resorts/boardwalk-inn/',
            resortArea: 'EPCOT',
            address: ['2101 North Epcot Resorts Boulevard', 'Lake Buena Vista, FL 32830'],
            phone: '(407) 939-6200'
        }];
    }

})();
