var controllers = angular.module('controllers' , []);
controllers.controller('HomeController', ['$scope', '$http', 'clinicalService', 'DoctorService', function ($scope, $http, clinicalService , DoctorService) {

    $scope.message = "hello  from home controller";
    
    var tempServices = [];
    var docList = [];
    clinicalService.query(function (outputServices) {
        angular.forEach(outputServices, function (service) {
            tempServices.push(service);
        });

        $scope.services = tempServices;
    });
    DoctorService.query(function (doctors) {
        angular.forEach(doctors, function (doctor) {
            docList.push(doctor);
        });

        $scope.doctors = docList;
    });
    
    $scope.$on('$viewContentLoaded', function () {

        //owl carousel for team section
        //var owl = $("#team-slide");

        //owl.owlCarousel({
        //    navigation: true,
        //    pagination: false,
        //    items: 3

        //});

        //owl carousel for about section
        //$("#about-content").owlCarousel({

        //    navigation: true,
        //    slideSpeed: 300,
        //    paginationSpeed: 400,
        //    singleItem: true,
        //    items: 1,

        //});


        //panel
        function toggleChevron(e) {
            $(e.target)
                .prev('.faq-heading')
                .find("i.indicator")
                .toggleClass('glyphicon-plus glyphicon-minus');
        }
        $('.panel-group').on('hidden.bs.collapse', toggleChevron);
        $('.panel-group').on('shown.bs.collapse', toggleChevron);

        //back top animantion
        $('#back-top a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });



        // Date picker
        $("#datepicker").datepicker();
    });
}]);