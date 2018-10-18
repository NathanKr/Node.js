const mongo = require("mongodb");
const dev = require("./dev");
const constants = require("./constants");

const mongoClient = mongo.MongoClient;

const insertBooksHandler = (err, res) => {
  if (err) throw err;

  console.log("insert is success");
};

const connectHandler = (err, db) => {
  if (err) throw err;

  const dbObject = db.db(dev.dbName);
  const books = [
    { name: "Bible", pages: 123 },
    { name: "Harry Potter", pages: 435 }
  ];
  const bookCollection = dbObject.collection(constants.booksCollection);
  bookCollection.insertOne({ details: books }, insertBooksHandler);
  db.close();
};

mongoClient.connect(
  dev.mongoDbUrl,
  { useNewUrlParser: true },
  connectHandler
);
