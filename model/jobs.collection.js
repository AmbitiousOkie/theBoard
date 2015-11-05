Jobs = new Mongo.Collection("jobs");

// Only allows edits to the Mongo collection "jobs" if the userId and job.owner match
Jobs.allow({
  insert: function (userId, job) {
    return userId && job.owner === userId;
  },
  update: function (userId, job, fields, modifier) {
    return userId && job.owner === userId;
  },
  remove: function (userId, job) {
    return userId && job.owner === userId;
  }
});