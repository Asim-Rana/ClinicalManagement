﻿'use strict';
angular.module('app')
    .controller('ServiceController', ['$scope', function ($scope) {
    $scope.message = "hello  from service controller";
}]);