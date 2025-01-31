const express = require("express");
const cors = require("cors");
const app = express();

const logger = require("./logger");
const diaryRouter = require("./routers/diary");

//Middleware
app.use(cors());
app.use(logger);
app.use(express.json()); // to acces the json data in the body

app.use("/posts", diaryRouter);

module.exports = app;