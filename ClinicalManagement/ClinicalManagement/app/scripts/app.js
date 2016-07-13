var mainApp = angular.module('app', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'bootstrapLightbox', 'controllers', 'factories', 'directives']);

mainApp.config([
    '$routeProvider',
    function ($routeProvider) {
        
        $routeProvider.
            when('/home', {
                templateUrl : 'app/views/home.html',
                controller: 'HomeController'
            })

            .when('/about', {
                templateUrl: 'app/views/about.html',
                controller: 'AboutController'
            })
            .when('/services', {
                templateUrl: 'app/views/services.html',
                controller: 'ServiceController'
            })

            .when('/contact', {
                templateUrl: 'app/views/contact.html',
                controller: 'ContactController'
            })
            .when('/feedback', {
                templateUrl: 'app/views/feedback.html',
                controller: 'FeedbackController'
            })
            .otherwise({
                redirectTo: '/home'
            });
        }
]);
mainApp.controller('MainController', function ($scope, $location, $window, anchorSmoothScroll) {

    //$scope.pageLoaded = true;
    $scope.items = [
      { path: '/home', title: 'home' },
      { path: '/about', title: 'about us' },
      { path: '/services', title: 'our services' },
      { path: '/feedback', title: 'feedback' },
      { path: '/contact', title: 'contact us' }
    ];
    $scope.isActive = function (item) {
        if (item.path == $location.path()) {
            return true;
        }
        return false;
    };
    //angular.element(document).ready(function () {
    //    $scope.pageLoaded = false;
    //});

    $scope.gotoElement = function (eID) {
        // set the location.hash to the id of
        // the element you wish to scroll to.
        //$location.hash('back');

        // call $anchorScroll()
        anchorSmoothScroll.scrollTo(eID);
        //$scope.gotoTop = function () {
        //    $window.scrollTo(0, 0);
        //};
    };

});

mainApp.directive('scrollNav', function ($window) {
    return function (scope, element, attrs) {
        angular.element($window).bind("scroll", function () {
            if (this.pageYOffset >= 20) {
                scope.scrollDown = true;
                scope.removePadding = {
                    "padding": "0px"
                }
            } else {
                scope.scrollDown = false;
                scope.removePadding = {
                    "padding": "10px 0"
                }
            }
            scope.$apply();
        });
    };
});
mainApp.service('anchorSmoothScroll', function () {

    this.scrollTo = function (eID) {

        var startY = currentYPosition();
        var stopY = elmYPosition(eID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY); return;
        }
        var speed = Math.round(distance / 10);
        if (speed >= 20) speed = 20;
        var step = Math.round(distance / 70);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for (var i = startY; i < stopY; i += step) {
                setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
            } return;
        }
        for (var i = startY; i > stopY; i -= step) {
            setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
        }

        function currentYPosition() {
            // Firefox, Chrome, Opera, Safari
            if (self.pageYOffset) return self.pageYOffset;
            // Internet Explorer 6 - standards mode
            if (document.documentElement && document.documentElement.scrollTop)
                return document.documentElement.scrollTop;
            // Internet Explorer 6, 7 and 8
            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
        }

        function elmYPosition(eID) {
            var elm = document.getElementById(eID);
            var y = elm.offsetTop;
            var node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            } return y;
        }

    };

});