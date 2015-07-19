var db = require('../db.js');

module.exports.Artist = {

  create : function(postObj, callback){
    db.create('artists', postObj, function (data) {
      callback( data );
    });
  },

  find : function(id, callback){
    db.find('artists', id, function (data) {
      callback( data[0] );
    });
  },

  update : function(id, postObj, callback){
   db.update('artists', postObj, id, function (data) {
     callback( data );
   });
  },

  delete : function(id, callback){
    db.delete('artists', req.params.id, function (data) {
      callback( data );
    });
  },

  all : function(callback){
    db.all('artists', function (data) {
      callback( data );
    });
  },

  getWithPaintings : function( id, callback){
    db.find('artists', id, function (artistData) {
      db.findRelations('paintings', 'artist_id', id, function (paintingsData) {
        var artistObj = {
          artist: artistData[0],
          paintings: paintingsData
        };

        callback( artistObj );
      });
    });
  }
};
