console.log("app is loading");

const notes = require("./notes");
const _ = require("lodash"); // --- common name for lodash
const argv = require("yargs").argv;

console.log(argv)

const command = argv.mode;

switch (command) {
  case "read":
    notes.getNote(argv.title);
    break;

  case "add":
    notes.addNote(argv.title, argv.body);
    break;

  case "remove":
    notes.removeNote(argv.title);
    break;

  case "list":
    notes.getAllNotes();
    break;

  default:
    console.log("command not recognized");
}
