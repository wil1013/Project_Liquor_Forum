var Painting = require('../models/painting.js').Painting;

module.exports.controller = function(app) {

  // PAINTINGS INDEX PAGE
  app.get('/paintings', function (req, res) {
    Painting.all(function (data) {
      res.render('paintingsIndex', {paintings : data})
    });
  });

  //Paintings - NEW
  app.get('/paintings/new', function (req, res) {
    Artist.all(function( data ){
      res.render('paintingsNew', { artists : data } );
    });
  });

  //Painting - SHOW
  app.get("/paintings/:id", function (req, res) {
    Painting.findWithArtist( req.params.id, function(data){
      res.render('paintingsShow', data);
    });
  });

  //Painting - EDIT
  app.get('/paintings/edit/:id', function (req, res) {

    Painting.findWithArtist( req.params.id, function(data){
      res.render('paintingsEdit', data)
    });
  });

  //Painting - UPDATE
  app.put('/paintings/:id', function (req, res) {
    Painting.update('paintings', req.body, function (data) {
      res.redirect('/paintings/' + req.params.id)
    });
  });

  //Painting - DELETE
  app.delete("/paintings/:id", function (req, res) {
   Painting.delete('paintings', req.params.id, function (data) {
    res.redirect('/paintings');
   });
  })
}
