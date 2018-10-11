const mongo = require("mongodb");
const dev = require("./dev");

const mongoClient = mongo.MongoClient;
const connectHandler = (err, db) => {
  if (err) throw err;
  console.log("Database connect ok !"); // --- ok if database is all ready created e.g. in mlab
  db.close();
};

mongoClient.connect(
  dev.mongoDbUrl,
  { useNewUrlParser: true },
  connectHandler
);
