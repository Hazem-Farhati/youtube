const mongoose = require("mongoose");

const schema = mongoose.Schema;

const repondreCommentaireSchema = new schema({
  user_id: { type: String },
  user_img: String,
  product_id: String,
  name: { type: String },
  lastname: { type: String },
  date: { type: Date },
  repondre_content: { type: String },
});

const RepondreCommentaire = mongoose.model("RepondreCommentaire", repondreCommentaireSchema);
module.exports = RepondreCommentaire;
