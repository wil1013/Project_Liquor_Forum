var db = require('../db.js');

module.exports.Liquor = {

  create : function(postObj, callback){
    db.create('liquors', postObj, function (data) {
      callback( data );
    });
  },

  find : function(id, callback){
    db.find('liquors', id, function (data) {
      callback( data[0] );
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
    db.find('liquors', id, function (userData) {
      db.findRelations('users', 'id', id, function (liquorData) {
        var liquorObj = {
          user: userData[0],
          liquors: liquorData
        };

        callback( liquorObj );
      });
    });
  }
// getWithThreads : function( id, callback){
//     db.find('liquors', id, function (userData) {
//       db.findRelations('threads', 'user_id', id, function (threadData) {
//         var userObj = {
//           user: userData[0],
//           threads: threadData
//         };

//         callback( userObj );
//       });
//     });
// 	}
};
