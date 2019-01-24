console.log("app is loading");

const mongoose = require("./db/mongoose"); // --- this line is a MUST
const express = require("express");

// --- used to get isolated body under
const bodyParser = require("body-parser");

const { User } = require("./db/models/user"); // --- model of user
const { Note } = require("./db/models/note"); // --- model of note

const port = 3000;

const app = express();

// used for json inside body ?
app.use(bodyParser.json());

// --- GET /notes/5c3dace372de8b3b9c863c93
app.get("/notes/:id", (req, res) => {
  Note.findById(req.params.id)
    .then(note => {
      if(!note){
        res.sendStatus(404)
      }
      else{
        res.send({ note });
      }
    }) // --- client get object which is more readable
    .catch(err => res.status(400).send(err)); // --- return not dound
});

// --- GET /notes
app.get("/notes", (req, res) => {
  Note.find({})
    .then(notes => res.send({ notes })) // --- client get object which is more readable
    .catch(err => res.status(404).send(err)); // --- return not dound
});

// --- POST /notes
app.post("/notes", (req, res) => {
  const { text, completed } = req.body;
  const newNote = new Note({ text, completed });
  newNote
    .save()
    // --- send the object back including mongoDB object id
    .then(doc => res.send(doc))
    /*
     --- in most cases its client problem so send 400 (but what if its DB problem?)
     --- status and error is sent back to client 
     --- error can include mongoose validation error
     */
    .catch(err => res.status(400).send(err));
});

app.listen(port, () => {
  console.log(`listening on port : ${port}`);
});
