 angular.module('theBoard', ['angular-meteor']);
 
  angular.module('theBoard').controller('jobListCtrl', function ($scope, $meteor) {
    $scope.jobs = $meteor.collection(Jobs);

    $scope.remove = function(job){
      $scope.jobs.remove(job);
    };
  });