if (Meteor.isClient) {
  angular.module('theBoard', ['angular-meteor', 'ui.router']);

  angular.module('theBoard').config(function($urlRouterProvider, $stateProvider, $locationProvider){

      $locationProvider.html5Mode(true);

      $stateProvider
        .state('jobs', {
          url: '/jobs',
          templateUrl: 'client/jobs-list.ng.html',
          controller: 'JobsListCtrl'
        })
        .state('jobDetails', {
          url: '/jobs/:jobId',
          templateUrl: 'client/job-details.ng.html',
          controller: 'JobDetailsCtrl'
        });

      $urlRouterProvider.otherwise("/jobs");
    });
  
  angular.module('theBoard').controller('JobsListCtrl', function ($scope, $meteor) {
    $scope.jobs = $meteor.collection(Jobs);

    $scope.remove = function(job){
      $scope.jobs.remove(job);
    };

    $scope.removeAll = function(){
      $scope.jobs.remove();
    };
  });

  angular.module("theBoard").controller("JobDetailsCtrl", function($scope, $stateParams, $meteor) {
    $scope.job = $meteor.object(Jobs, $stateParams.jobId, false);

    $scope.save = function() {
      $scope.job.save().then(function(numberOfDocs){
        console.log('save success doc affected ', numberOfDocs);
      }, function(error){
        console.log('save error', error);
      });
    };

    $scope.reset = function() {
      $scope.job.reset();
    };

    $scope.debug = function() {
      console.log($scope.job.name);
    }
  });
}