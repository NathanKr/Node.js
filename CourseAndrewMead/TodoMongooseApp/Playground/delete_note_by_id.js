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
const id = "5c45a62a6c05162d84f5ab26"; // --- invoke first read_all_notes.js to see which id exist 

Note.findOneAndDelete({"_id" : id})
  .then(result => console.log(`note is removed : ${result}`))
  .catch(err => console.log("err"));

mongoose.connect(
  dev.mongoDbUrl,
  { useNewUrlParser: true }
);
