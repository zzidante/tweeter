"use strict";

const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.log("Failed to connect");
    throw err;
  }

  // connection to test-tweets db starts here
    // any program logic needing to use the connection
    // needs to be invoked in here. 
  console.log(`Connected to mongodb: ${MONGODB_URI}`);
  db.close();
});

