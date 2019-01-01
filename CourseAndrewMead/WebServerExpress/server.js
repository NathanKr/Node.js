const express = require("express");

// --- create an app
const app = express();

app.get("/", (req, res) => {
  res.send({hello : "express"});
});

app.get("/about", (req, res) => {
  res.send("<h1>This is about</h1>");
});

app.get("*", (req, res) => {
  res.send("Not found");
});


// --- listen for requests on this port
app.listen(3000);
