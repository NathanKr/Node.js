const mongoose = require("mongoose");
const constants = require("../../../constants");
const { Schema } = mongoose;

const noteSchema = new Schema(
  {
    text: { type: String, trim: true, minlength: 1, required: true },
    completed: { type: Boolean, default: false }
  },
  { collection: constants.notesCollection }
);

const Note = mongoose.model("Note", noteSchema);

module.exports = { Note };
