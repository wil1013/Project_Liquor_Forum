var db = require('../db.js');

module.exports.Painting = {

  create : function(postObj, callback){
    db.create('paintings', postObj, function (data) {
      callback( data );
    });
  },

  find : function(id, callback){
    db.find('paintings', id, function (data) {
      callback( data[0] );
    });
  },

  findWithArtist : function(id, callback){
    db.find('paintings', id, function (painting) {
      db.find('artists', painting[0].id, function (artist) {
        var data = {
          artist: artist[0], 
          painting: painting[0]
        };
        callback(data);
      });
    });
  },

  update : function(id, postObj, callback){
   db.update('paintings', postObj, id, function (data) {
     callback( data );
   })
  },

  delete : function(id, callback){
    db.delete('paintings', req.params.id, function (data) {
      callback( data );
    });
  },

  all : function(callback){
    db.all('paintings', function (data) {
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
  },
}
