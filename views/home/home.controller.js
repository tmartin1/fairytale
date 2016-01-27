angular.module('app.home', [])
    .controller('homeController', homeController);

function homeController () {
    var vm = this;

    this.title =  'Home';
}
