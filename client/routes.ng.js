angular.module('theBoard').config(function ($urlRouterProvider, $stateProvider, $locationProvider){

  $locationProvider.html5Mode(true);

  $stateProvider
    .state('jobs', {
      url: '/jobs',
      templateUrl: 'client/jobs/views/jobs-list.ng.html',
      controller: 'JobsListCtrl'
    })
    .state('jobDetails', {
      url: '/job/:jobId',
      templateUrl: 'client/jobs/views/job-details.ng.html',
      controller: 'JobDetailsCtrl'
    });

  $urlRouterProvider.otherwise("/jobs");
});