
var Liquor = require('../models/liquor.js').Liquor;

module.exports.controller = function(app) {

  //User INDEX PAGE
  app.get('/liquors', function (req, res) {
    Liquor.all(function( data ){
      res.render('liquorsIndex', { liquors : data } );
    });
  });

  //user - NEW
  app.get('/liquors/new', function (req, res) {
    res.render('liquorNew');
  });

  //user- SHOW
  app.get("/liquors/:id", function (req, res) {
    Liquor.getWithLiquors( req.params.id, function(liquorObj){
      res.render('liquorShow', liquorObj);
    });
  });

  //user - CREATE
  app.post("/liquors", function (req, res){
    Liquor.create(req.body, function (data) {
      res.redirect('/liquors');
    });
  });

  //user - EDIT
  app.get('/liquors/edit/:id', function (req, res) {
    Liquor.find( req.params.id, function (data) {
      res.render('liquorEdit', data[0]);
    });
  });

  //user - UPDATE
  app.put("/liquors/:id", function (req, res) {
   Liquor.update(req.params.id, req.body, function (data) {
     res.redirect('liquors/' + req.params.id);
   });
  });

  //user - DELETE
  app.delete("/liquors/:id", function (req, res) {
   Liquor.delete( req.params.id, function (data) {
    res.redirect('liquors');
   });
  });
};
