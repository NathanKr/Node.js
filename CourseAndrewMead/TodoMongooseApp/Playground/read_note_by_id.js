console.log("app is loading");

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dev = require("../dev");
const constants = require("../constants");

const noteSchema = new Schema(
  { text: String, completed: Boolean },
  { collection: constants.notesCollection }
);
const Note = mongoose.model("Note", noteSchema);
const id='5c3dace372de8b3b9c863c93';// --- make sure it exist

Note
  .find({_id : id})
  .then(note => console.log(note))
  .catch(err => console.log("err"));

mongoose.connect(
  dev.mongoDbUrl,
  { useNewUrlParser: true }
);
