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
const id = "5c45a3773174551534473d91"; 

Note.findOneAndUpdate({_id:id},{ $set: { text: 'text is updated 2' }})
  .then(origNote => console.log(`note is updated : ${origNote}`))
  .catch(err => console.log("err"));

mongoose.connect(
  dev.mongoDbUrl,
  { useNewUrlParser: true }
);
