const express = require("express");
const http = require("http");
const app = require("./app");

// Handle production build
if (process.env.NODE_ENV === "production") {
  console.log("HERE");
  // Static folder
  app.use(express.static(__dirname + "../client/build"));
  // Handle single page app
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "../client/build/index.html"));
  console.log("HERE");
}

//TEMPORY UNTIL BACKEND IS HOOKED UP
app.use(express.static("../client/build"));

const port = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(port, () => console.log(`Server started on port ${port}`));
