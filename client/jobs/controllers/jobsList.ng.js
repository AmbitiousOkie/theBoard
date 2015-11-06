  angular.module('theBoard').controller('JobsListCtrl', function ($scope, $meteor) {
    $scope.jobs = $meteor.collection(Jobs).subscribe('jobs');

    var loggedIn = true;

    $scope.remove = function(job){
    	if ($scope.currentUser == $scope.job.owner) {
      		$scope.jobs.splice($scope.jobs.indexOf(job), 1);
      	}
    };

    $scope.debug = function(job) {
    	console.log('currentUser is ' + $scope.currentUser + '\n');
    	console.log('job owner is ' + $job.owner + '\n');
    }

  });