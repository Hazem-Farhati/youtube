const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema({
  name: { type: String, required: true },

  lastname: { type: String, required: true },
  email: String,
  password: String,
  image: { type: String },

  date: Date,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
