//this will handle all errors within the routes that are not caught by joi validation(express-async-errors)
require("express-async-errors");
const error = require("./middleware/error");
const express = require("express");
const connectDb = require("./utils/db");
const bootcamp = require("./route/bootcamp");
const dotenv = require("dotenv");
//initializing the express function
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//destructuring the dotenv parameter
const { PORT } = process.env;

//configuring the dotenv
dotenv.config({ path: "./config/dotenv.env" });

process.on("uncaughtException", (err, req, res) => {
  res.status(500).send(err.message);
  console.log(err.message);
  process.exit(1);
});

//initializing the mongodb
connectDb();

//mediaware and exported route
app.use("/api/bootcamps", bootcamp);
app.get("/", (req, res) => {
  res.json({
    name: "sam",
    message:
      "please go through the readme file for the various end point as instructed thank you",
  });
});
app.use(error);
const port = process.env.PORT || PORT;

app.listen(port, () => console.log(`server connected at port ${port}`));
