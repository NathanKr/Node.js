const constants = require("./constants");
const mongo = require("mongodb");
const dev = require("./dev");

const mongoClient = mongo.MongoClient;

const connectedDb = mongoClient.connect(
  dev.mongoDbUrl,
  { useNewUrlParser: true }
);

const insertUserHandler = (err, res) => {
  if (err) throw err;

  console.log("insert is success");
};

connectedDb
  .then(db => {
    const dbObject = db.db(dev.dbName);
    const usersCollection = dbObject.collection(constants.usersCollection);
    usersCollection.insertOne(
      { name: "Nathan", age: 55 , loaction : 'Haifa , Israel' },
      insertUserHandler
    );

    db.close();
  })
  .catch(err => {
    throw err;
  });
