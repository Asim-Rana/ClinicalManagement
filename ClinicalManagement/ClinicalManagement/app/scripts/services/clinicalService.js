var clinicalServices = angular.module('services', ['ngResource']);
clinicalServices.factory('clinicalService', ['$resource',
  function ($resource) {
      return $resource('app/json/clinicalServiceData.json', {}, {
          query: { method: 'GET', params: {}, isArray: true }
      });
  }]);