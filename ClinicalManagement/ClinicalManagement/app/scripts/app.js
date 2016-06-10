var mainApp = angular.module('mainApp', ['ngRoute', 'clinicControllers']);

mainApp.config([
    '$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl : 'views/home.html',
                controller  : 'mainController'
            })

            .when('/about', {
                templateUrl: 'views/about.html',
                controller  : 'aboutController'
            })
            .when('/services', {
                templateUrl: 'views/services.html',
                controller: 'serviceController'
            })

            .when('/appointment', {
                templateUrl: 'views/appointment.html',
                controller: 'appointmentController'
            })

            .when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'contactController'
            })

            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'loginController'
            })

            .when('/signup', {
                templateUrl: 'views/signup.html',
                controller: 'signupController'
            })

            .otherwise({
                redirectTo: '/'
            });
        }
]);