'use strict';
angular.module('app')
    .factory('ReviewsFactory', ['$http',
  function ($http) {
      var urlBase = 'app/json/reviewsData.json';

      var reviewsService = {};

      reviewsService.getReviews = function () {

          return $http.get(urlBase);

      };
      return reviewsService;
  }]);