const mongoose = require("mongoose");

const schema = mongoose.Schema;

const commentaireSchema = new schema({
  user_id: { type: String },
  user_img:String,
  product_id:String,
  name: { type: String },
  lastname: { type: String },
  date: { type: Date },
  content: { type: String },
  repondre: { type: String },
});

const Commentaire = mongoose.model("Commentaire", commentaireSchema);
module.exports = Commentaire;
