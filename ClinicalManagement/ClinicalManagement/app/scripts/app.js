var mainApp = angular.module('app', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'controllers', 'services', 'directives']);

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
mainApp.controller('mainController', function ($scope, $location, $anchorScroll) {
    $scope.items = [
      {path: '/home', title: 'home'},
      {path: '/about', title: 'about us'},
      {path: '/services', title: 'our services'},
      {path: '/feedback', title: 'feedback'},
      {path: '/contact', title: 'contact us'}
    ];
    $scope.isActive = function(item) {
        if (item.path == $location.path()) {
            return true;
        }
        return false;
    };
    //angular.element(document).ready(function () {
    //    $("#element").introLoader();
    //});
    $scope.gotoTop = function () {
        $location.hash('slider');
        $anchorScroll();
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