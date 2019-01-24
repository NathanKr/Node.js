console.log("app is loading");

const mongoose = require("./db/mongoose"); // --- this line is a MUST
const express = require("express");
const { ObjectID } = require("mongodb");

// --- used to get isolated body under
const bodyParser = require("body-parser");

const { User } = require("./db/models/user"); // --- model of user
const { Note } = require("./db/models/note"); // --- model of note

const port = process.env.PORT || 3000;

const app = express();

// used for json inside body ?
app.use(bodyParser.json());

// --- PATCH /notes/5c459ecd9d804918d8c3a363
app.patch("/notes/:id", (req, res) => {
  const id = req.params.id;
  if (!ObjectID.isValid(id)) {
    // --- id not valid
    res.sendStatus(404);
  } else {
    const updatedNote = req.body;
    Note.findOneAndUpdate({ _id: id }, { $set: updatedNote })
      .then(origNote => {
        if (!origNote) {
          // --- id not found
          res.sendStatus(404);
        } else {
          res.send({ origNote });
        }
      })
      .catch(err => res.status(400).send(err)); // --- return not dound
  }
});

// --- DELETE /notes/5c459ecd9d804918d8c3a363
app.delete("/notes/:id", (req, res) => {
  const id = req.params.id;
  if (!ObjectID.isValid(id)) {
    // --- id not valid
    res.sendStatus(404);
  } else {
    Note.findOneAndDelete({ _id: id })
      .then(note => {
        if (!note) {
          // --- id not found
          res.sendStatus(404);
        } else {
          res.send({ note });
        }
      })
      .catch(err => res.status(400).send(err)); // --- return not dound
  }
});

// --- GET /notes/5c3dace372de8b3b9c863c93
app.get("/notes/:id", (req, res) => {
  const id = req.params.id;
  if (!ObjectID.isValid(id)) {
    // --- id not valid
    res.sendStatus(404);
  } else {
    Note.findById(id)
      .then(note => {
        if (!note) {
          // --- id not found
          res.sendStatus(404);
        } else {
          res.send({ note });
        }
      }) // --- client get object which is more readable
      .catch(err => res.status(400).send(err)); // --- return not dound
  }
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
