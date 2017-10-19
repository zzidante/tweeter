"use strict";

const {MongoClient} = require("mongodb");
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

MongoClient.connect(MONGODB_URI, (err, db) => {

  console.log(`Connected to mongodb: ${MONGODB_URI}`);

  function getTweets(callback) {
    db.collection("tweets").find().toArray(callback);
  }
                      // It can be invoked later -  
                      // when passed to another scope, it still has 
                      // closure over db so it'll work

  getTweets((err, tweets) => {
    console.log("Logging each tweet: "); // <<<
    for (let tweet of tweets) {
      console.log("Hey" + tweet); // <<<
    };
    db.close();
  });
  // remember to put the closing connection to database after the logic function.

});
