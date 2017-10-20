"use strict";

// Basic express setup:

const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();
const {MongoClient} = require("mongodb");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const MONGODB_URI = "mongodb://localhost:27017/tweeter";  
const mongoClient = MongoClient.connect(MONGODB_URI, (err, db) => {

  const DataHelpers = require("./lib/data-helpers.js")(db);

  const tweetsRoutes = require("./routes/tweets")(DataHelpers);
  app.use("/tweets", tweetsRoutes);   // Mount the tweets routes at the "/tweets" path prefix:
  
  });

  app.listen(PORT, () => {
    console.log("Example app listening on port " + PORT); 
  // db.close();
});





