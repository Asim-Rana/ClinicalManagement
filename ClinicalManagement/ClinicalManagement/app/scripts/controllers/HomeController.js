'use strict';
angular.module('app')
    .controller('HomeController', ['$scope', '$http', 'clinicalFactory', 'DoctorFactory', 'ReviewsFactory', function ($scope, $http, clinicalFactory, DoctorFactory, ReviewsFactory) {

    $scope.slides = [
    {id:0 , image: 'app/images/slide.jpg', description: 'Image 00', title: 'Welcome to Medihere center', detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ipsa quod maxime laudantium cum sapiente.', read: '#' },
    { id: 1, image: 'app/images/slide1.jpg', description: 'Image 01', title: 'We Care About You', detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ipsa quod maxime laudantium cum sapiente.', read: '#' },
    { id: 2, image: 'app/images/slide2.jpg', description: 'Image 02', title: 'We Promise Best Services', detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ipsa quod maxime laudantium cum sapiente.', read: '#' },
    { id: 3, image: 'app/images/slide3.jpg', description: 'Image 03', title: 'Health Is Divine', detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ipsa quod maxime laudantium cum sapiente.', read: '#' }
    ];
    
    $scope.myInterval = 5000;
    $scope.active = 0;
    var tempServices = [];
    var docList = [];
    
    $scope.dateOptions = {
        dateDisabled: disabled,
        formatYear: 'yy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 1
    };
    $scope.open2 = function () {
        $scope.popup2.opened = true;
    };
    function disabled(data) {
        var date = data.date,
          mode = data.mode;
        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    }
    $scope.popup2 = {
        opened: false
    };

    clinicalFactory.getClinicalServices()
            .success(function (servs) {
                $scope.services = servs;
                $scope.servicesStatus = true;
            })
            .error(function (error) {
                $scope.servicesStatus = false;
            });
    DoctorFactory.getDoctors()
            .success(function (docs) {
                $scope.doctors = docs;
                $scope.status = true;
            })
            .error(function (error) {
                $scope.status = false;
            });
    ReviewsFactory.getReviews()
            .success(function (review) {
                $scope.reviews = review;
                $scope.reviewStatus = true;
            })
            .error(function (error) {
                $scope.reviewStatus = false;
            });
    $scope.Gender = ["Male", "Female", "Child", "Other"];
    $scope.phoneRegex = '^(\\+92)\\d{3}\\d{7}$';
}]);