'use strict';

module.exports = ['$stateProvider', '$urlRouterProvider', routerConfig];

function routerConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('', '/join#singup');
  $urlRouterProvider.when('/', '/join#signup');
  $urlRouterProvider.when('/signup', '/join#signup');
  $urlRouterProvider.when('/login', '/join#login');
}
// look a like components, but its route
var states = [
  {
    name: 'home',
    url: '/home',
    template: require('../view/home/home.html'),
    controller: 'HomeController',
    controllerAs: 'homeCtrl'
  },
  {
    name: 'landing',
    url: '/join',
    template: require('../view/landing/landing'),
    controller: 'LandingController',
    controllerAs: 'landingCtrl'
  }
];

states.forEach( state => {
  $stateProvider.state(state);
});

