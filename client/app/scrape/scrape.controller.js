'use strict';

angular.module('slackChallengeApp')
  .controller('ScrapeCtrl', function ($scope, $http) {
    $scope.urlSubmit = function(user) {
      $scope.tags = [];
      $http.post('/api/scraper', {url: user.url}).success(function(data) {
        $scope.tags = data.tagsCounter;
        $scope.html = data.html;
      });
    };
  });
