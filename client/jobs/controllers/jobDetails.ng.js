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
      console.log($scope.job.company);
    }
  
});