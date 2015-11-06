Meteor.publish("jobs", function () {
  return Jobs.find({
    $or:[
      {'public': true},
      {$and:[
        {owner: this.userId},
        {owner: {$exists: true}}
      ]}
  ]});
});