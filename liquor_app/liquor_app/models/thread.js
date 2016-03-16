var db = require('../db.js');

module.exports.Thread = {

  create : function(postObj, callback){
    db.create('threads', postObj, function (data) {
      callback( data );
    });
  },

  find : function(id, callback){
    db.find('threads', id, function (data) {
      callback( data[0] );
    });
  },

  update : function(id, postObj, callback){
   db.update('threads', postObj, id, function (data) {
     callback( data );
   });
  },

  delete : function(id, callback){
    db.delete('threads', req.params.id, function (data) {
      callback( data );
    });
  },

  all : function(callback){
    db.all('threads', function (data) {
      callback( data );
    });
  },

  getWithLiquors : function( id, callback){
    db.find('threads', id, function (threadData) {
      db.findRelations('liquors', 'user_id', threadData[0].user_id, function (liquorData) {
        db.findRelations('users','id', threadData[0].user_id,function (userData){
        var threadObj = {
          thread: threadData[0],
          liquor: liquorData[0],
          user : userData[0]
        };
        console.log(threadObj);
        callback( threadObj );
        });
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
// }





};
