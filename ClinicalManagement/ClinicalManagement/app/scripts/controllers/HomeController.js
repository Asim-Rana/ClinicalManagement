var controllers = angular.module('controllers' , []);
controllers.controller('HomeController', ['$scope', '$http', 'clinicalService', 'DoctorService', function ($scope, $http, clinicalService , DoctorService) {

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

    clinicalService.query(function (outputServices) {
        angular.forEach(outputServices, function (service) {
            tempServices.push(service);
        });

        $scope.services = tempServices;
    });
    DoctorService.getDoctors()
            .success(function (docs) {
                $scope.doctors = docs;
                $scope.status = true;
            })
            .error(function (error) {
                $scope.status = false;
            });
    
    $scope.$on('$viewContentLoaded', function () {

        //back top animantion
        //$('#back-top a[href*="#"]:not([href="#"])').click(function () {
        //    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        //        var target = $(this.hash);
        //        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        //        if (target.length) {
        //            $('html, body').animate({
        //                scrollTop: target.offset().top
        //            }, 1000);
        //            return false;
        //        }
        //    }
        //});
    });
}]);