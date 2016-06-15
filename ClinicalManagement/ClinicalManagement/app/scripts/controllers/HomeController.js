var controllers = angular.module('controllers' , []);
controllers.controller('HomeController', ['$scope', function ($scope) {
    $scope.message = "hello  from home controller";
    $scope.services = [{ title: 'heart checkup', detail: 'Lorem ipsum dolor sit amet.', image: 'app/images/service-icons/service-1.png' , replaceImage: 'app/images/service-icons/service-1w.png' },
    { title: 'dental care', detail: 'Lorem ipsum dolor sit amet.', image: 'app/images/service-icons/service-2.png' , replaceImage: 'app/images/service-icons/service-2w.png'},
    { title: 'ear treatment', detail: 'Lorem ipsum dolor sit amet.', image: 'app/images/service-icons/service-3.png' , replaceImage: 'app/images/service-icons/service-3w.png'},
    { title: 'emergency care', detail: 'Lorem ipsum dolor sit amet.', image: 'app/images/service-icons/service-4.png' , replaceImage: 'app/images/service-icons/service-4w.png'},
    { title: 'gen treatment', detail: 'Lorem ipsum dolor sit amet.', image: 'app/images/service-icons/service-5.png' , replaceImage: 'app/images/service-icons/service-5w.png'},
    { title: 'DNA testing', detail: 'Lorem ipsum dolor sit amet.', image: 'app/images/service-icons/service-6.png' , replaceImage: 'app/images/service-icons/service-6w.png'}];
    
    
    $scope.$on('$viewContentLoaded', function () {

        //active nav
        //var pgurl = window.location.href.substr(window.location.href
        //    .lastIndexOf("/") + 1);
        //$(".navbar-default .navbar-nav>li>a").each(function () {
        //    if ($(this).attr("href") == pgurl || $(this).attr("href") == '')
        //        $(this).addClass("active");
        //});
        // fixed header
        //$(window).scroll(function () {

        //    var scroll_nav = $(window).scrollTop();

        //    if (scroll_nav >= 20) {
        //        $("#logo a img").css({
        //            "padding": "0px"
        //        });
        //        $(".navbar-nav>li>a").css({
        //            "padding-top": "20px",
        //            "padding-bottom": "20px"
        //        });
        //        $(".navbar-toggle").css({
        //            "margin-top": "10px"
        //        });
        //    } else {
        //        $("#logo a img").css({
        //            "padding": "10px 0"
        //        });
        //        $(".navbar-nav>li>a").css({
        //            "padding-top": "29px",
        //            "padding-bottom": "29px"
        //        });
        //        $(".navbar-toggle").css({
        //            "margin-top": "20px"
        //        });
        //    }
        //});

        //service section
        //$(".single-service").mouseover(function () {
        //    $(this).find("h3").css({
        //        "color": "#fff"
        //    });
        //    $(".single-service p").css({
        //        "color": "#000"
        //    });
        //    $(this).find("span").stop().addClass("span-hover");
        //});
        //$(".single-service").mouseout(function () {
        //    $(this).find("h3").css({
        //        "color": "#2B96CC"
        //    });
        //    $(".single-service p").css({
        //        "color": "#707070"
        //    });
        //    $(this).find("span").stop().removeClass("span-hover");
        //});

        //owl carousel for team section
        var owl = $("#team-slide");

        owl.owlCarousel({
            navigation: true,
            pagination: false,
            items: 3

        });

        //owl carousel for about section
        $("#about-content").owlCarousel({

            navigation: true,
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true,
            items: 1,

        });


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