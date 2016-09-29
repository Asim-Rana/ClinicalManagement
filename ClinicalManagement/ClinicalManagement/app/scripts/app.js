var mainApp = angular.module('app', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'bootstrapLightbox', 'ngResource']);

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


