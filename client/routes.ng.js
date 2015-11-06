// angular.module("theBoard").run(function ($rootScope, $state) {
//   $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
//     // We can catch the error thrown when the $requireUser promise is rejected
//     // and redirect the user back to the main page
//     if (error === 'AUTH_REQUIRED') {
//       $state.go('jobs');
//     }
//   });
// });

angular.module('theBoard').config(function ($urlRouterProvider, $stateProvider, $locationProvider){

  $locationProvider.html5Mode(true);

  $stateProvider
    .state('jobs', {
      url: '/jobs',
      templateUrl: 'client/jobs/views/jobs-list.ng.html',
      controller: 'JobsListCtrl'
      }
    )
    .state('jobDetails', {
      url: '/job/:jobId',
      templateUrl: 'client/jobs/views/job-details.ng.html',
      controller: 'JobDetailsCtrl'
    })
    .state('post', {
      url: '/post',
      templateUrl: 'client/jobs/views/job-post.ng.html',
      controller: 'JobPostCtrl',
      resolve: {
        "currentUser": function ($meteor) {
          return $meteor.requireUser();
        }
      }
    })
    ;

  $urlRouterProvider.otherwise("/jobs");
});