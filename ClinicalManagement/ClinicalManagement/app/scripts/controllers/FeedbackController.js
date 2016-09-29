'use strict';
angular.module('app')
    .controller('FeedbackController', ['$scope', 'FeedbackFactory', function ($scope, FeedbackFactory) {
    FeedbackFactory.getFeedbackQuestions()
            .success(function (ques) {
                $scope.feedbackQuestions = ques;
            })
            .error(function (error) {
            });
}]);