const express = require("express");

// --- create an app
const app = express();

app.get("/", (req, res) => {
  res.send({ hello: "express" });
});

app.get("/about", (req, res) => {
  res.send("<h1>This is about</h1>");
});

// --- mount middleware to serve static files e.g. html\image inside public file
app.use(express.static(__dirname + "/public"));

// --- listen for requests on this port
app.listen(3000);
