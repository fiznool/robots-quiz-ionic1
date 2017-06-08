'use strict';

angular
  .module('robots')
  .controller('FeedController', function(RobotsFactory, $scope, $ionicLoading) {
    $scope.load = function() {
      $ionicLoading.show({
        template: '<ion-spinner icon="lines"></ion-spinner>'
      });
      RobotsFactory
        .getRobots()
        .then(function(response) {
          robotsLoaded(response);
          $ionicLoading.hide();
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