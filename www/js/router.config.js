'use strict';

angular
  .module('robots')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('feedState', {
        url: '/robots',
        templateUrl: 'html/feed.html',
        controller: 'FeedController'
      })
      .state('robotState', {
        url: '/robots/:id',
        templateUrl: 'robot.html',
        controller: 'Robot'
      });

    $urlRouterProvider.otherwise('robots');
  });