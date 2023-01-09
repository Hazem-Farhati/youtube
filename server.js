const express = require("express");
const cors = require("cors");
const app = express();

const db_connect = require("./db_connect");
require("dotenv").config;
db_connect();
port = process.env.port;
app.use(express.json());
app.use(cors());
app.use("/user", require("./routes/user"));

app.use("/product", require("./routes/product"));
app.use("/commentaire", require("./routes/commentaire"));
app.use("/repondrecommentaire", require("./routes/repondreCommentaire"));


app.listen(port, (error) =>
  error ? console.log(error) : console.log("server is connected")
);
