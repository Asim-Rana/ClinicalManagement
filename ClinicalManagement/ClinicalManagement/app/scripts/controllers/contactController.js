'use strict';
angular.module('app')
    .controller('ContactController', ['$scope', function ($scope) {
    
        var mapOptions = {
            zoom: 15,
            center: new google.maps.LatLng(31.54894, 74.27870),
            mapTypeId: google.maps.MapTypeId.TERRAIN
        }

        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        var createMarker = function () {

            var marker = new google.maps.Marker({
                map: $scope.map,
                position: new google.maps.LatLng(31.54894, 74.27870),
                title: "Medihere"
            });

        }
        createMarker();
}]);