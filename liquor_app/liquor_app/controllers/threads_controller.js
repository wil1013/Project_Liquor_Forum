///////////
var Thread = require('../models/thread.js').Thread;

module.exports.controller = function(app) {

 //thread Login / Start Session

  // thread INDEX PAGE
 
  app.get('/threads', function (req, res) {
    Thread.all(function( data ){
      res.render('threadIndex', { threads : data } );
    });
  });


  //thread - NEW
  app.get('/threads/new', function (req, res) {
    res.render('threadNew');
  });

  //thread- SHOW
  app.get("/threads/:id", function (req, res) {
    Thread.getWithLiquors( req.params.id, function(threadObj){
      res.render('threadShow', threadObj);
    });
  });

  //thread - CREATE
  app.post("/threads", function (req, res){
    Thread.create(req.body, function (data) {
      res.redirect('/threads');
    });
  });

  //thread - EDIT
  app.get('/threads/edit/:id', function (req, res) {
    Thread.find( req.params.id, function (data) {
      res.render('threadEdit', data[0]);
    });
  });

  //thread - UPDATE
  app.put("/threads/:id", function (req, res) {
   Thread.update(req.params.id, req.body, function (data) {
     res.redirect('/threads/' + req.params.id);
   });
  });

  //thread - DELETE
  app.delete("/threads/:id", function (req, res) {
   Thread.delete( req.params.id, function (data) {
    res.redirect('/threads');
   });
  });
};
