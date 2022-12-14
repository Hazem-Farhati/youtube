const mongoose = require("mongoose");
require("dotenv").config();
DB_URI=process.env.DB_URI;
const db_connect = async () => {
  try {
    const result = await mongoose.connect(DB_URI);
    console.log("database is connected");
  } catch (error) {
    console.log(error);
  }
};
module.exports = db_connect;
