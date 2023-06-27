const express = require("express");
const app = require("./app");
require("dotenv").config();
const config = require(process.env.CONFIG_PATH);

const server = app.listen(config.server.port, config.server.host, (err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(
    `Server is running on ${config.server.host}: ${server.address().port}`
  );
});
