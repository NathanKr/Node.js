const mongoose = require("mongoose");
const dev = require("../../dev");

mongoose.connect(
  dev.mongoDbUrl,
  { useNewUrlParser: true }
);

console.log("mongoose connect");

module.exports = { mongoose };
