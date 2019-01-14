const mongo = require("mongodb");
const dev = require("./dev");
const constants = require("./constants");

const mongoClient = mongo.MongoClient;

const insertUserHandler = (err, res) => {
  if (err) throw err;

  console.log("insert is success");
  console.log(`_id time stamp from _id : ${res.ops[0]._id.getTimestamp()}`);
};

const connectHandler = (err, db) => {
  if (err) throw err;

  const dbObject = db.db(dev.dbName);
  const userCollection = dbObject.collection(constants.usersCollection);
  userCollection.insertOne(
    { id: 1, name: "Nathan", age: 55 },
    insertUserHandler
  );
  userCollection.insertOne(
    { id: 2, name: "Nitzan", age: 27 },
    insertUserHandler
  );
  db.close();
};

mongoClient.connect(
  dev.mongoDbUrl,
  { useNewUrlParser: true },
  connectHandler
);
