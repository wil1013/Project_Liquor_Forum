var db = require('../db.js');

module.exports.User = {

  create : function(postObj, callback){
    db.create('users', postObj, function (data) {
      callback( data );
    });
  },

  find : function(id, callback){
    db.find('users', id, function (data) {
      callback( data[0] );
    });
  },

  update : function(id, postObj, callback){
   db.update('users', postObj, id, function (data) {
     callback( data );
   });
  },

  delete : function(id, callback){
    db.delete('users', req.params.id, function (data) {
      callback( data );
    });
  },

  all : function(callback){
    db.all('users', function (data) {
      callback( data );
    });
  },

  getWithLiquors : function( id, callback){
    db.find('users', id, function (userData) {
      db.findRelations('liquors', 'user_id', id, function (liquorData) {
        var userObj = {
          user: userData[0],
          liquors: liquorData
        };

        callback( userObj );
      });
    });
  }
// getWithThreads : function( id, callback){
//     db.find('users', id, function (userData) {
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
