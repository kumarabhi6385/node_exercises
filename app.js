const express = require("express");
require("dotenv").config();
const config = require(process.env.CONFIG_PATH);
const topicRoutes = require("./routes/topics/topics");

const app = express();

// After below line body parser is no longer required.
// we can use express inbuilt feature.
app.use(express.json());

app.use(express.static("./public"));
// Set home page to serve static html file
app.use("/", express.static("./public/html"));

app.use((req, res, next) => {
  req.config = config;
  next();
});

// Register the routes here
app.use("/topics", topicRoutes);

// return page not found error
app.use((req, res) => {
  res.status(404).sendFile("error.html", { root: "./public/html" });
});

// return page not found error
app.use((err, req, res, next) => {
  console.log("In middleware");
  if (err) {
    console.log(err);
    res.status(500).sendFile("error.html", { root: "./public/html" });
  }
  return next();
});

// Export the app
module.exports = app;
