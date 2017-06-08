'use strict';

angular
  .module('robots')
  .controller('FeedController', function(RobotsFactory, $scope) {
    $scope.load = function() {
      RobotsFactory
        .getRobots()
        .then(function(response) {
          robotsLoaded(response);
        });
    };

    $scope.loadNext = function() {
      RobotsFactory
        .getNextRobots()
        .then(function(response) {
          robotsLoaded(response);
          $scope.$broadcast('scroll.infiniteScrollComplete');
        });
    };

    function robotsLoaded(response) {
      console.log('Robots loaded:', response.robots);
      $scope.robots = response.robots;
      $scope.hasMoreRobots = response.hasMore;
    }

    $scope.load();
  });