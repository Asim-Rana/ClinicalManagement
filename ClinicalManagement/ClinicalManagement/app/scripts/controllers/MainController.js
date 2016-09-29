'use strict';
angular.module('app')
    .controller('MainController', ['$scope', '$location', '$window', 'anchorSmoothScroll', function ($scope, $location, $window, anchorSmoothScroll) {

    //$scope.pageLoaded = true;
    $scope.items = [
      { path: '/home', title: 'home' },
      { path: '/about', title: 'about us' },
      { path: '/services', title: 'patient education' },
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

}]);