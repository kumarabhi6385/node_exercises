const { ObjectId } = require("bson");
const { Schema } = require("mongoose");

const TopicSchema = new Schema({
  category_id: {
    type: ObjectId,
    required: true,
  },
  queries: [String],
});

module.exports = TopicSchema;
