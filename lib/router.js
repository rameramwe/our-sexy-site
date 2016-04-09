Router.configure({
      layoutTemplate:'layout'
});
Router.map( function(){
  //posts route
  this.route('home',{
    path:'/',
    template:'home'

  });
  //about route
  this.route('impressum' );
  //about profile
  this.route('profile' );
  this.route('myprofile' );
  this.route('students' );
  this.route('posts' );
  this.route('pubUser' );

  // given the url: "/post/5?q=s#hashFrag"
  Router.route('/:_id', function () {



     this.render('pubUser');



  });
});
