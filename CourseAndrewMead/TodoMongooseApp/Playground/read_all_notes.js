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

Note
  .find({}) 
  .then(notes => console.log(notes))
  .catch(err => console.log("err"));

mongoose.connect(
  dev.mongoDbUrl,
  { useNewUrlParser: true }
);
