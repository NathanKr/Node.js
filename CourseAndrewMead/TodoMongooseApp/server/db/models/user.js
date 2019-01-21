const mongoose = require("mongoose");
const constants = require("../../../constants");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: { type: String, trim: true, required: true },
    password: { type: String, trim: true, required: true }
  },
  { collection: constants.usersCollection }
);

const User = mongoose.model("User", userSchema);

module.exports = { User };
