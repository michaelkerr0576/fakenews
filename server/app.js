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
  .catch((err) => console.log(err));

// Middleware
app.use(bodyParser.json());

// Use routes to handle API requests
app.use("/articles", articlesRoutes);

module.exports = app;
