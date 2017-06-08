'use strict';

angular
  .module('robots')
  .controller('RobotController', function($scope, $stateParams, RobotsFactory, $cordovaInAppBrowser) {
    $scope.robot = RobotsFactory.getRobotById($stateParams.id);

    $scope.showFilm = function() {
      $cordovaInAppBrowser.open($scope.robot.filmUrl, '_blank');
    };
  });