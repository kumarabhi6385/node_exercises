const express = require("express");
const path = require("path");
const categoryRoute = require("./category/categoryRoute");
const topicRoute = require("./topic/topicRoute");

const app = express();

// After below line body parser is no longer required.
// we can use express inbuilt feature.
app.use(express.json());

app.use(express.static(path.resolve(__dirname, "./client")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/html/index.html"));
});

app.use("/category", categoryRoute);
app.use("/topic", topicRoute);

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
