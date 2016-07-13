var clinicalFactories = angular.module('factories', ['ngResource']);
clinicalFactories.factory('clinicalFactory', ['$http',
  function ($http) {
      var urlBase = 'app/json/clinicalServiceData.json';

      var clinicService = {};

      clinicService.getClinicalServices = function () {

          return $http.get(urlBase);

      };
      return clinicService;
  }]);