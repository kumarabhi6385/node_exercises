const express = require("express");
const path = require("path");
const topicRoute = require("./topics/topicRoute");
//require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
//const config = require(process.env.CONFIG_PATH);

const app = express();

//app.config = config;

// After below line body parser is no longer required.
// we can use express inbuilt feature.
app.use(express.json());

app.use(express.static(path.resolve(__dirname, "./client")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/html/index.html"));
});

app.use("/topics", topicRoute);

// return page not found error
app.use((req, res) => {
  res.status(404).sendFile(path.resolve(__dirname, "./client/html/error.html"));
});

// return page not found error
app.use((err, req, res, next) => {
  console.log("In middleware");
  if (err) {
    console.log(err);
    res
      .status(500)
      .sendFile(path.resolve(__dirname, "./client/html/error.html"));
  }
  return next();
});

module.exports = app;
