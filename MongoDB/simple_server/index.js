const mongo = require("mongodb");
const dev = require("./dev");

const mongoClient = mongo.MongoClient;
const connectHandler = (err, db) => {
  if (err) throw err;
  console.log("Database connect ok !");
  db.close();
};

mongoClient.connect(
  dev.mongoDbUri,
  { useNewUrlParser: true },
  connectHandler
);
