'use strict';

angular.module('slackChallengeApp')
  .controller('ScrapeCtrl', function ($scope, $http) {
    $scope.urlSubmit = function(user) {
      $scope.tags = [];
      $http.post('/api/scraper', {url: user.url}).success(function(tags) {
        $scope.tags = tags;
      });
    };
  });
