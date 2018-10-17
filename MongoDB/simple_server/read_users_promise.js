const mongo = require("mongodb");
const dev = require("./dev");
const constants = require("./constants");

const mongoClient = mongo.MongoClient;

const connectedDb = mongoClient.connect(
  dev.mongoDbUrl,
  { useNewUrlParser: true }
);

connectedDb
  .then(db => {
    console.log("connected to db");
    const dbObject = db.db(dev.dbName);
    const userCollection = dbObject.collection(constants.usersCollection);
    const cursor = userCollection.find({});
    cursor
      .toArray()
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        throw err;
      });
    db.close();
  })
  .catch(err => {
    throw err;
  });
