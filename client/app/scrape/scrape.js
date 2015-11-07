'use strict';

angular.module('slackChallengeApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/scrape', {
        templateUrl: 'app/scrape/scrape.html',
        controller: 'ScrapeCtrl'
      });
  });
