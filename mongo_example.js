"use strict";

const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.log("Failed to connect");
    throw err;
  }
  console.log(`Connected to mongodb: ${MONGODB_URI}`);

  // Mongo 'Find' all the tweets.
  db.collection("tweets").find({}, (err, result) => {

    // so much data
    console.log("find result ", result);
    console.log("type of find result: ", typeof result);
  })
  db.close();
});

// a cursor is an object that will give you one item at a time (if you want).
    // more memory efficient but less convienient than an array