const mongo = require("mongodb");
const dev = require("./dev");
const constants = require("./constants");

const mongoClient = mongo.MongoClient;

const connectHandler = (err, db) => {
  if (err) throw err;

  const dbObject = db.db(dev.dbName);
  const userCollection = dbObject.collection(constants.usersCollection);
  const query = { id: 1 };
  const newValues = { $set: { name: "Nath" } };
  userCollection.updateOne(query, newValues, (err, result) => {
    if (err) throw err;
    console.log(`${result.modifiedCount} documents updated`);
  });

  db.close();
};

mongoClient.connect(
  dev.mongoDbUrl,
  { useNewUrlParser: true },
  connectHandler
);
