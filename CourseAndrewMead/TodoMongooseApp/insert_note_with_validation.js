console.log("app is loading");

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dev = require("./dev");
const constants = require("./constants");

const noteSchema = new Schema(
  {
    text: { type: String, trim: true, minlength: 1 },
    completed: { type: Boolean, required: true }
  },
  { collection: constants.notesCollection }
);
const Note = mongoose.model("Note", noteSchema);
const newNote = new Note({ text: " noteTrimed ", completed: true });

newNote
  .save()
  .then(() => console.log("note was saved successfully"))
  .catch(() => console.log("error : note was not saved"));

mongoose.connect(
  dev.mongoDbUrl,
  { useNewUrlParser: true }
);
