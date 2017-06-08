'use strict';

angular
  .module('robots')
  .factory('RobotsFactory', function(RobotsData, $q) {
    // Set some pagination defaults.
    var page = 0;
    var pageSize = 10;

    // A local array for storing robots.
    var robots = [];

    var factory = {
      getRobots: getRobots,
      getNextRobots: getNextRobots,
      getRobotById: getRobotById
    };
    return factory;

    ////////////////

    function getRobots() {
      page = 0;
      return _fetchRobots(true);
    }

    function getNextRobots() {
      // Increment the page counter, and fetch robots.
      page++;
      return _fetchRobots();
    }

    function getRobotById(id) {
      // Find a robot in the robots array, by ID.
      var robot = null;

      var i, len = robots.length;
      for(i = 0; i < len; i++) {
        if(robots[i].objectId === id) {
          robot = robots[i];
          break;
        }
      }

      return robot;
    }

    function _fetchRobots(overwrite) {
      // Return a promise from the function.
      return $q(function(resolve) {
        setTimeout(function() {
          if(overwrite) {
            // Overwrite the in-memory robots.
            robots = [];
          }

          var start = page * pageSize;
          var end = start + pageSize;

          var results = RobotsData.slice(start, end);
          results.forEach(function(r) {
            robots.push(r);
          });

          // Resolve the promise with the robots
          resolve({
            robots: robots,
            hasMore: results.length === pageSize
          });
        }, 500);
      });
    }
  });