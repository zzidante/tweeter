"use strict";

const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

MongoClient.connect(MONGODB_URI, (err, db) => {

  console.log(`Connected to mongodb: ${MONGODB_URI}`);

  // Mongo 'Find' all the tweets.
  db.collection("tweets").find({}, (err, results) => {

      // we can iterate on the CURSOR to get results, one at a time
    console.log("for each item YIELDED by cursor");
    results.each((err, item) => console.log(" ", item));
  })
  db.close();
});
