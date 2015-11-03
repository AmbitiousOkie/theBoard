 angular.module('theBoard', ['angular-meteor']);
 
  angular.module('theBoard').controller('jobListCtrl', function ($scope) {
    $scope.jobs = [
      {
        'name': 'Kris',
        'description': 'Meteor/Angular.'
      },
      {
        'name': 'Austin',
        'description': 'Dev Ops'
      },
      {
        'name': 'OKCoder',
        'description': 'Button Pusher'
      }
    ];
  });