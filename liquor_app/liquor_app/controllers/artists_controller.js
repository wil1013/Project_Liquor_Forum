var Artist = require('../models/artist.js').Artist;

module.exports.controller = function(app) {

  // ARTIST INDEX PAGE
  app.get('/artists', function (req, res) {
    Artist.all(function( data ){
      res.render('artistIndex', { artists : data } );
    });
  });

  //Artist - NEW
  app.get('/artists/new', function (req, res) {
    res.render('artistNew');
  });

  //Artist- SHOW
  app.get("/artists/:id", function (req, res) {
    Artist.getWithPaintings( req.params.id, function(artistObj){
      res.render('artistShow', artistObj);
    });
  });

  //Artist - CREATE
  app.post("/artists", function (req, res) { 
    Artist.create(req.body, function (data) {
      res.redirect('/artists');
    });
  });

  //Artist - EDIT
  app.get('/artists/edit/:id', function (req, res) {
    Artist.find( req.params.id, function (data) {
      res.render('artistEdit', data[0]);
    });
  });

  //Artist - UPDATE
  app.put("/artists/:id", function (req, res) {
   Artist.update(req.params.id, req.body, function (data) {
     res.redirect('/artists/' + req.params.id)
   })
  })

  //Artist - DELETE
  app.delete("/artists/:id", function (req, res) {
   Artist.delete( req.params.id, function (data) {
    res.redirect('/artists');
   });
  })
}
