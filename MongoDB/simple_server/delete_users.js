const mongo = require("mongodb");
const dev = require("./dev");
const constants = require("./constants");

const mongoClient = mongo.MongoClient;

const deleteHandler =  (err, result) => {
  if (err) throw err;
  console.log(`${result.deletedCount} document was deleted`);
}

const connectHandler = (err, db) => {
  if (err) throw err;

  const dbObject = db.db(dev.dbName);
  const userCollection = dbObject.collection(constants.usersCollection);
  
  userCollection.deleteOne({ id: 1 },deleteHandler);
  userCollection.deleteOne({ id: 2 },deleteHandler);

  db.close();
};

mongoClient.connect(
  dev.mongoDbUrl,
  { useNewUrlParser: true },
  connectHandler
);
