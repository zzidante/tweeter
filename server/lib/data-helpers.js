"use strict";

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {
                                                // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
        db.collection("tweets").insertOne(newTweet, callback);  
    },
                                      // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {
      db.collection("tweets").find().toArray((err, result) => {
        callback(null, result.sort((a, b) => b.created_at - a.created_at));
      });
    }
  };
}





// db.collection("tweets").find().sort()({created_at: -1}).toArray(callback);    // Finn's code

// collection.insert(thingsWeWantToInsert, function(err, result) {
  // can do a function like console.log here
// })


// collection.find().toArray(function (err, result){
  // if (result.length) {

//   } else {
//     no matches
//   }
// })

// function getTweets(callback) {
//   db.collection("tweets").find().toArray(callback);
// }

// getTweets((err, tweets) => {
//   for (let tweet of tweets) {
//     return tweet; 
//   };