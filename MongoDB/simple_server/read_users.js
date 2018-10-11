const mongo = require("mongodb");
const dev = require("./dev");
const constants = require("./constants");

const mongoClient = mongo.MongoClient;

const connectHandler = (err, db) => {
  if (err) throw err;

  const dbObject = db.db(dev.dbName);
  const userCollection = dbObject.collection(constants.usersCollection);
  userCollection.find({}, (err, cursor) => {
    if (err) throw err;
    console.log(`documents from collection : ${constants.usersCollection}`);
    cursor.forEach(elem => {
      console.log(elem);
    });
  });

  db.close();
};

mongoClient.connect(
  dev.mongoDbUrl,
  { useNewUrlParser: true },
  connectHandler
);
