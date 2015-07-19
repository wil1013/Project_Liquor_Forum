
var User = require('../models/user.js').User;

module.exports.controller = function(app) {

  // User INDEX PAGE
  // app.get('/users', function (req, res) {
  //   User.all(function( data ){
  //     res.render('userIndex', { users : data } );
  //   });
  // });

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
     res.redirect('/users/' + req.params.id)
   });
  })

  //user - DELETE
  app.delete("/users/:id", function (req, res) {
   User.delete( req.params.id, function (data) {
    res.redirect('/users');
   });
  })
}
