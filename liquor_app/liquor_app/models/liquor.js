var db = require('../db.js');

module.exports.Liquor = {

  create : function(postObj, callback){
    db.create('liquors', postObj, function (data) {
      callback( data );
    });
  },

  find : function(id, callback){
    db.find('liquors', id, function (data) {
      callback( data );
    });
  },

  update : function(id, postObj, callback){
   db.update('liquors', postObj, id, function (data) {
     callback( data );
   });
  },

  delete : function(id, callback){
    db.delete('liquors', req.params.id, function (data) {
      callback( data );
    });
  },

  all : function(callback){
    db.all('liquors', function (data) {
      callback( data );
    });
  },

  getWithLiquors : function( id, callback){
    db.find('liquors', id, function (liquorData) {
      db.findRelations('users','id', liquorData[0].user_id, function (userData) {
        var liquorObj = {
          user: userData[0], //[0]
          liquor: liquorData[0]
        };

        callback( liquorObj );
      });
    });
  }
};