"use strict";

const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

MongoClient.connect(MONGODB_URI, (err, db) => {

  console.log(`Connected to mongodb: ${MONGODB_URI}`);

  // Mongo 'Find' all the tweets chaining find and convertion.
  db.collection("tweets").find().toArray((err, results) => {
    console.log("results array: ", results);
  })
  db.close();
});
