const mongo = require("mongodb");
const dev = require("./dev");

const mongoClient = mongo.MongoClient;

const connectedDb = mongoClient.connect(
  dev.mongoDbUrl,
  { useNewUrlParser: true }
);

connectedDb
  .then(db => {
    console.log("Database connect ok !!!"); // --- ok if database is all ready created e.g. in mlab
    db.close();
  })
  .catch(err => {
    throw err;
  });
