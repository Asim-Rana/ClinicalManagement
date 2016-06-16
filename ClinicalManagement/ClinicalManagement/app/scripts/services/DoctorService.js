clinicalServices.factory('DoctorService', ['$resource',
  function ($resource) {
      return $resource('app/json/doctorsData.json', {}, {
          query: { method: 'GET', params: {}, isArray: true }
      });
  }]);