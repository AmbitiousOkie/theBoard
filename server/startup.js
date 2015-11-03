Meteor.startup(function () {
	if (Jobs.find().count() === 0) {
		var jobs = [
	      {
	        'name': 'Oseberg',
	        'description': 'Meteor/Angular designer.'
	      },
	      {
	        'name': 'Nodecraft',
	        'description': 'Dev Ops Duder'
	      },
	      {
	        'name': 'Tailwind',
	        'description': 'PHP job here'
	      }
	    ];

	    for  (var i = 0; i < jobs.length; i++)
	    	Jobs.insert(jobs[i]);
	}
});