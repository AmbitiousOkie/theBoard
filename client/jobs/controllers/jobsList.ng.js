  angular.module('theBoard').controller('JobsListCtrl', function ($scope, $meteor) {
    $scope.jobs = $meteor.collection(Jobs).subscribe('jobs');

    var loggedIn = true;
  });