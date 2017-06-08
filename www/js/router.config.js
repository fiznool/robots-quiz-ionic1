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
        templateUrl: 'html/robot.html',
        controller: 'RobotController'
      });

    $urlRouterProvider.otherwise('robots');
  });