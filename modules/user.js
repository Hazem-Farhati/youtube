const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema({
  name: { type: String, required: true },

  lastname: { type: String, required: true },
  email: String,
  password: String,
  image: { type: String ,default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIZZZcfFeMiHPbuND7zck8rlcn6epFAnvuGBELtiSpQd2SP5HjGlSusp8fCfgr6NNQfUE&usqp=CAU" },

  date: Date,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
