Template.pubUser.helpers({
  someHelper: function() {
    var controller = Router.current();
    // return the _id parameter or whatever
    return controller.params._id;
  }
});
