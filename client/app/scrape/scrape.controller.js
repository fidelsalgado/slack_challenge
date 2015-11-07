'use strict';

angular.module('slackChallengeApp')
  .controller('ScrapeCtrl', function ($scope, $http) {
    $scope.tags = [];
    $http.post('/api/scraper', {url: 'http://google.com'}).success(function(tags) {
      $scope.tags = tags;
    });
  });
