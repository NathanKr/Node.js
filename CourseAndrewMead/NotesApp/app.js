//console.log("app is loading");

const notes = require("./notes");
const _ = require("lodash"); // --- common name for lodash
const yargs = require("yargs");
const argv = yargs.argv;

const writeUsage = () => {
  console.log(
    "\nUsage :\n\n" +
      "--mode : read | add | remove | update | list \n" +
      "--title : relevent to add , read , remove , update \n" +
      "--body : relevant to add , update \n\n" +
      "for example : node app.js --mode remove --title t1\n\n"
  );
};


  const command = argv.mode;

  switch (command) {
    case "read":
      const note = notes.getNote(argv.title);
      if (note) {
        console.log(`body : ${note.body}`);
      } else {
        console.log("note does not exist");
      }

      break;

    case "add":
      if (notes.addNote(argv.title, argv.body)) {
        console.log("Note was added");
      } else {
        console.log("Note was not added , it allready exist");
      }
      break;

    case "remove":
      if (notes.removeNote(argv.title)) {
        console.log("Note was removed");
      } else {
        console.log("note does not exist");
      }
      break;

    case "update":
      if (notes.updateNote(argv.title, argv.body)) {
        console.log("Note was updated");
      } else {
        console.log("Note was not updated , it does not exist");
      }
      break;

    case "list":
      notes.getAllNotes().forEach(note => {
        console.log(`title : ${note.title} , body : ${note.body}`);
      });
    
      break;

    default:
      console.log("command --mode not recognized");
      writeUsage();
  }
