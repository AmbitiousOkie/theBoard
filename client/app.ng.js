 angular.module('theBoard', ['angular-meteor', 'ui.router']);

   angular.module('theBoard').config(function($urlRouterProvider, $stateProvider, $locationProvider){
 
      $locationProvider.html5Mode(true);
 
      $stateProvider
        .state('jobs', {
          url: '/jobs',
          templateUrl: 'client/jobs-list.ng.html',
          controller: 'jobsListCtrl'
        })
        .state('partyDetails', {
          url: '/jobs/:partyId',
          templateUrl: 'client/job-details.ng.html',
          controller: 'jobDetailsCtrl'
        });
 
      $urlRouterProvider.otherwise("/jobs");
    });
 
  angular.module('theBoard').controller('jobsListCtrl', function ($scope, $meteor) {
    $scope.jobs = $meteor.collection(Jobs);

    $scope.remove = function(job){
      $scope.jobs.remove(job);
    };

  });

  angular.module("theBoard").controller("jobDetailsCtrl", function($scope, $stateParams) {
    $scope.partyId = $stateParams.partyId;
  });