'use strict';
angular.module('app')
    .factory('clinicalFactory', ['$http',
  function ($http) {
      var urlBase = 'app/json/clinicalServiceData.json';

      var clinicService = {};

      clinicService.getClinicalServices = function () {

          return $http.get(urlBase);

      };
      return clinicService;
  }]);