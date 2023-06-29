const mongoose = require("mongoose");

const nodeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: false,
    index: {
      unique: true,
      partialFilterExpression: { facebookid: { $type: "string" } },
    },
    default: null,
  },
});

module.exports = nodeSchema;
