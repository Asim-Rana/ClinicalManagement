var controllers = angular.module('controllers' , []);
controllers.controller('HomeController', ['$scope', function ($scope) {
    $scope.message = "hello  from home controller";

}]);