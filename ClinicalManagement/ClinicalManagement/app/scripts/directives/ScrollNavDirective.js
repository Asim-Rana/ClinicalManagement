'use strict';
angular.module('app')
    .directive('scrollNav', function ($window) {
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