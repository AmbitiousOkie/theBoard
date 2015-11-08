  angular.module("theBoard").controller("JobEditCtrl", function($scope, $stateParams, $meteor) {
    $scope.job = $meteor.object(Jobs, $stateParams.jobId, false);
    $scope.jobs = $meteor.collection(Jobs).subscribe('jobs');

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
      console.log($scope.job);
    }

    $scope.remove = function(job){
      $scope.jobs.splice($scope.jobs.indexOf(job), 1);
    };


  
});