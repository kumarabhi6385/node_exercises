import mongoose from "mongoose";
import topicSchema from "./topicSchema.js";
import { ObjectId } from "bson";

const Topic = mongoose.model("Topic", topicSchema);

class TopicController {
  constructor() {}
  async addOrUpdateTopic(item) {
    const category_id = new ObjectId(item.category_id);
    let topic;
    topic = await Topic.findOne({ category_id });
    if (!topic) {
      topic = new Topic({
        category_id,
        queries: item.queries,
      });
    } else {
      let queries = topic.queries.concat(item.queries);
      topic.queries = [...new Set(queries)];
    }
    topic.save();
    return topic;
  }
  async getTopic(category_id) {
    const topic = await Topic.findOne({ category_id });
    return topic;
  }
  async getTopics() {
    const topics = await Topic.find({});
    return topics;
  }
  async deleteTopic(id) {
    const node = await Topic.findOne({ _id: new ObjectId(id) });
    if (!node) return;
    await Category.deleteOne({ _id: new ObjectId(id) });
  }
}

export default TopicController;
