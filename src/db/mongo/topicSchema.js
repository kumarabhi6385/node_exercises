const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema({
  name: String,
  category: String,
});

module.exports = topicSchema;
