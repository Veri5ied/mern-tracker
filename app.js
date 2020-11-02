const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoutes = require("./routes/user");
const app = express();

dotenv.config();

mongoose
  .connect(
    `mongodb+srv://${process.env.db_username}:${process.env.db_password}@cluster0.iugyx.mongodb.net/test?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Mongodb Atlas connected successfully");
  })
  .catch((error) => {
    console.log("Unable to connect to Mongodb Atlas");
    console.log(error);
  });

app.use(cors());
app.use(express.json());
app.use("/api/auth", userRoutes);

module.exports = app;
