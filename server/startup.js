Meteor.startup(function () {
	if (Jobs.find().count() === 0) {
		var jobs = [
	      {
	        'name': 'Kris',
	        'description': 'Meteor/Angular.'
	      },
	      {
	        'name': 'Austin',
	        'description': 'Dev Ops'
	      },
	      {
	        'name': 'Phil',
	        'description': 'Professional Button Pusher'
	      }
	    ];

	    for  (var i = 0; i < jobs.length; i++)
	    	Jobs.insert(jobs[i]);
	}
});