'use strict';
angular.module('app')
    .factory('FeedbackFactory', ['$http',
  function ($http) {
      var urlBase = 'app/json/feedbackQuestions.json';

      var feedbackService = {};

      feedbackService.getFeedbackQuestions = function () {

          return $http.get(urlBase);

      };
      return feedbackService;
  }]);