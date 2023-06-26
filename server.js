const express = require("express");
require("dotenv").config();

const indexRoute = require("./routes/index");
const topicRoutes = require("./routes/topics/topics");

const config = require(process.env.CONFIG_PATH);

const app = express();

// pass the configuration to all routes using middleware
app.use((req, res, next) => {
  req.config = config;
  next();
});

// After below line body parser is no longer required.
// we can use express inbuilt feature.
app.use(express.json());

// Register the routes here
app.use("/topics", topicRoutes);
// index route is defined in the last purposely as in that file
// middleware is defined which return page not found if request
// doesn't match with any argument.
app.use("/", indexRoute);

const server = app.listen(config.server.port, config.server.host, (err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(
    `Server is running on ${config.server.port}: ${server.address().port}`
  );
});
