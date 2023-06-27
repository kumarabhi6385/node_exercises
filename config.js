const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

const config = {
  port: 3000,
  mongourl: process.env.MONGO_DB_URL,
};

module.exports = config;
