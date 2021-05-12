const express = require("express");
const connectDb = require("./utils/db");
const bootcamp = require("./route/bootcamp");
//initializing the express function
const app = express();
const dotenv = require("dotenv");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//destructuring the dotenv parameter
const { PORT } = process.env;
// PORT = 5000;

//configuring the dotenv
dotenv.config({ path: "./config/dotenv.env" });

//initializing the mongodb
connectDb();

//mediaware and exported route
app.use("/api/bootcamps", bootcamp);

const port = process.env.PORT || PORT;

app.listen(port, () => console.log(`server connected at port ${port}`));
