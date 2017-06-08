'use strict';

angular
  .module('robots')
  .controller('RobotController', function($scope, $stateParams, RobotsFactory) {
    $scope.robot = RobotsFactory.getRobotById($stateParams.id);
  });