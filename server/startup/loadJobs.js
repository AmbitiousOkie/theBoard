Meteor.startup(function () {
	if (Jobs.find().count() === 0) {
		var jobs = [
	      {
	        'company': 'Oseberg',
	        'position': 'Meteor/Angular designer.'
	      },
	      {
	        'company': 'Nodecraft',
	        'position': 'Dev Ops Duder'
	      },
	      {
	        'company': 'Tailwind',
	        'position': 'PHP job here'
	      }
	    ];

	    for  (var i = 0; i < jobs.length; i++)
	    	Jobs.insert(jobs[i]);
	}
});