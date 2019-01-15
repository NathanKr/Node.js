const mongo = require("mongodb");
const dev = require("./dev");
const constants = require("./constants");

const {MongoClient , ObjectID} = mongo;

const objectId = new ObjectID('5bbf4990d492032f00525fdc');

const connectedDb = MongoClient.connect(
  dev.mongoDbUrl,
  { useNewUrlParser: true }
);

connectedDb
  .then(db => {
    console.log("connected to db");
    const dbObject = db.db(dev.dbName);
    const userCollection = dbObject.collection(constants.usersCollection);
    const cursor = userCollection.find({_id:objectId});
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


 