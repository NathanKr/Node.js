const mongo = require("mongodb");
const dev = require("./dev");
const constants = require("./constants");

const mongoClient = mongo.MongoClient;

const insertHandler = (err,res) => {
    if (err) throw err;

    console.log('insert document is success');
}

const connectHandler = (err, db) => {
  if (err) throw err;

  const dbObject = db.db(dev.dbName);
  const userCollection = dbObject.collection(constants.usersCollection);
    userCollection.insertOne({id:1 , name : 'Nathan' , age : 55}, insertHandler);
    userCollection.insertOne({id:2 , name : 'Nitzan' , age : 27}, insertHandler);
  db.close();
};

mongoClient.connect(
  dev.mongoDbUrl,
  { useNewUrlParser: true },
  connectHandler
);
