const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

mongoose.connect(
  "mongodb+srv://fredchien:admin123@cluster0-oiaya.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);

app.use(cors());
app.use(express.json());
app.use(require("./routes"));

app.listen(3333);
