Template.myprofile.helpers({

  UserImages: function () {
    Meteor.users.find().fetch();
    return UserImages.find(); // Where Images is an FS.Collection instance
  }
});
