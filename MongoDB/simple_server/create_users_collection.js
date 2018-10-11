const mongo = require("mongodb");
const dev = require("./dev");
const constants = require("./constants");

const mongoClient = mongo.MongoClient;

const createCollectionHandler = (err, res) => {
  if (err) throw err;
  console.log('collection created');
}

const connectHandler = (err, db) => {
  if (err) throw err;
  const dbObject = db.db(dev.dbName);

  dbObject.createCollection(
    constants.usersCollection,
    createCollectionHandler
  );
  db.close();
};

mongoClient.connect(
  dev.mongoDbUrl,
  { useNewUrlParser: true },
  connectHandler
);
