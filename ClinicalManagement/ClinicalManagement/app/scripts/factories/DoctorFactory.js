﻿//clinicalServices.factory('DoctorService', ['$resource',
//  function ($resource) {
//      return $resource('app/json/doctorsData.json', {}, {
//          query: { method: 'GET', params: {}, isArray: true }
//      });
//  }]);

'use strict';
angular.module('app')
    .factory('DoctorFactory', ['$http',
  function ($http) 
  {   
      var urlBase = 'app/json/doctorsData.json';

      var doctorService = {};

      doctorService.getDoctors = function () {

          return $http.get(urlBase);

      };
      return doctorService;
  }]);