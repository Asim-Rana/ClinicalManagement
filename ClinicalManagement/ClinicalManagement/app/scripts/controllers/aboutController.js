'use strict';
angular.module('app')
    .controller('AboutController', ['$scope', 'DoctorFactory', 'clinicalFactory' , 'Lightbox' , function ($scope, DoctorFactory, clinicalFactory, Lightbox) {
    DoctorFactory.getDoctors()
            .success(function (docs) {
                $scope.doctors = docs;
                $scope.status = true;
            })
            .error(function (error) {
                $scope.status = false;
            });
    clinicalFactory.getClinicalServices()
            .success(function (servs) {
                $scope.services = servs;
                $scope.servicesStatus = true;
            })
            .error(function (error) {
                $scope.servicesStatus = false;
            });
    $scope.images = [
    'app/images/clinic1.jpg',
    'app/images/clinic2.jpg',
    'app/images/clinic3.jpg',
    'app/images/clinic4.jpg',
    'app/images/clinic5.jpg',
    'app/images/clinic6.jpg'
    ];
    $scope.openLightboxModal = function (index) {
        Lightbox.openModal($scope.images, index);
    };
}]);
