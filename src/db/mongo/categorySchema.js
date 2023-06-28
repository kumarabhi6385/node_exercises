const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: String,
  parent: String,
});

module.exports = categorySchema;
