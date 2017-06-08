'use strict';

angular
  .module('robots')
  .controller('RobotController', function($scope, $stateParams, RobotsFactory) {
    $scope.tobor = RobotsFactory.getRobotById($stateParams.id);
  });