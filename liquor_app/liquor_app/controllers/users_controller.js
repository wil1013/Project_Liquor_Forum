///////////
var User = require('../models/user.js').User;

module.exports.controller = function(app) {

 //User Login / Start Session

 app.post('/login', function(req,res){
  User.findByColumn('users', 'name', req.body.name, function(data){
    console.log('this is the data', data);
    if (req.body.password_digest == data[0].password_digest){
      req.session.signed_in_user_id = data[0].id;
      req.session.signed_in_username = data[0].username;
      console.log(req.session);
        var sessionData ={
          user_id: req.session.signed_in_user_id,
          username: req.session.signed_in_username
        };
      res.render('loggedIn',data);
    } else {
      res.redirect('/');
  }
});
});

  // User INDEX PAGE
 
  app.get('/users', function (req, res) {
    User.all(function( data ){
      res.render('userIndex', { users : data } );
    });
  });

  // User JSON for Maps
  app.get('/getUsersForMap', function (req, res) {
    User.all(function (data) {
      res.send(data);
    });
  });


  //user - NEW
  app.get('/users/new', function (req, res) {
    res.render('userNew');
  });

  //user- SHOW
  app.get("/users/:id", function (req, res) {
    User.getWithPaintings( req.params.id, function(userObj){
      res.render('userShow', userObj);
    });
  });

  //user - CREATE
  app.post("/users", function (req, res){
    User.create(req.body, function (data) {
      res.redirect('/');
    });
  });

  //user - EDIT
  app.get('/users/edit/:id', function (req, res) {
    User.find( req.params.id, function (data) {
      res.render('userEdit', data[0]);
    });
  });

  //user - UPDATE
  app.put("/users/:id", function (req, res) {
   User.update(req.params.id, req.body, function (data) {
     res.redirect('/users/' + req.params.id);
   });
  });

  //user - DELETE
  app.delete("/users/:id", function (req, res) {
   User.delete( req.params.id, function (data) {
    res.redirect('/users');
   });
  });
};
