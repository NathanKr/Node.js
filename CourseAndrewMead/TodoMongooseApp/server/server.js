console.log("app is loading");

const mongoose = require("./db/mongoose");
const express = require("express");
const bodyParser = require("body-parser");

const { User } = require("./db/models/user"); // --- model of user
const { Note } = require("./db/models/note"); // --- model of note

const port = 3000;

const app = express();
app.use(bodyParser.json());

app.post("/notes", (req, res) => {
  console.log("recived post", req);
});

app.listen(port, () => {
  console.log(`listening on port : ${port}`);
});
