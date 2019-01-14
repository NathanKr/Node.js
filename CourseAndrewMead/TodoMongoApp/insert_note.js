const constants = require("./constants");
const mongo = require("mongodb");
const dev = require("./dev");

const mongoClient = mongo.MongoClient;

const connectedDb = mongoClient.connect(
  dev.mongoDbUrl,
  { useNewUrlParser: true }
);

const insertNoteHandler = (err, res) => {
  if (err) throw err;

  console.log("insert is success");
};

connectedDb
  .then(db => {
    const dbObject = db.db(dev.dbName);
    const notesCollection = dbObject.collection(constants.notesCollection);
    notesCollection.insertOne(
      { text: "note1", completed: false },
      insertNoteHandler
    );

    db.close();
  })
  .catch(err => {
    throw err;
  });
