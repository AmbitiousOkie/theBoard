  angular.module('theBoard').controller('JobsListCtrl', function ($scope, $meteor) {
    $scope.jobs = $meteor.collection(Jobs);

    $scope.remove = function(job){
      $scope.jobs.splice($scope.jobs.indexOf(job), 1);
    };

    $scope.removeAll = function(){
      $scope.jobs.remove();
    };
  });