/*
const express = require("express");
const app = require("./app");
require("dotenv").config();

app.listen(config.server.port, config.server.host, (err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(
    `Server is running on ${config.server.port}: ${server.address().port}`
  );
});
*/
const express = require("express");
const app = require("./app");

const PORT = 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
