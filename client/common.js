Meteor.startup(function () {
   AccountsEntry.config({
     homeRoute: '/',
     dashboardRoute: '/',
     passwordSignupFields:'USERNAME_AND_EMAIL',
     waitEmailVerification: false
   });
   Accounts.ui.config({
     passwordSignupFields: 'USERNAME_AND_EMAIL'
   });
 });
 var userList =[""]   ;
 var usernamesList=[""];

 Template.registerHelper('howeveryoulike', function ( ){

 var userCursor= Meteor.users.find().fetch();
   var i=0;
   userCursor.forEach(function (whatever ) {

       userList[i] =UserImages.findOne({username:whatever.username}).image;
       usernamesList[i]=whatever.username;
       i++;

     });

      return userCursor;


 });

 Template.registerHelper('getProfileImg', function (userId){
   var imgUrl=UserImages.findOne({userId:userId}).image;
   return imgUrl ;
 });

 Template.registerHelper('getUserName', function ( ){
   var shit=Meteor.user().username;
   return shit ;
 });
 Template.registerHelper('getProfileImgs', function ( ){
   var imgUrl=UserImages.findOne({username:Meteor.user().username}).image;
   return imgUrl ;
 });
 Template.registerHelper('getProfileImgss', function (username ){
   var imgUrl=UserImages.findOne({username:username}).image;
   return imgUrl ;
 });
 Template.registerHelper('getUserNameId', function ( ){

   return idss ;
 });



  var shit=Meteor.user().username;

 var imageLocs ='/cfs/files/profileImages/'+shit;
