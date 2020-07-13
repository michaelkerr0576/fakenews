const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Routes to handle API requests
const articlesRoutes = require("./api/routes/articles");

// Mongo URI
const mongoURI =
  process.env.MONGO_ATLAS_USER +
  process.env.MONGO_ATLAS_PW +
  process.env.MONGO_ATLAS_CLUSTER;

// Create mongo connection
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log("MongoDB NOT Connected... " + err));

// Middleware
app.use(bodyParser.json());

// CORS -- course correction for client
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // gives access to any client
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization" // append to incoming request
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET"); // limit API access
    return res.status(200).json({});
  }
  next();
});


// Use routes to handle API requests
app.use("/articles", articlesRoutes);

module.exports = app;
