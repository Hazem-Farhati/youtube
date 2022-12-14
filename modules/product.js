const mongoose = require("mongoose");

const schema = mongoose.Schema;

const productSchema = new schema({
  title: { type: String },
  desc: { type: String},
  video: String ,
  date: Date,
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
