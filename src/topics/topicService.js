const mongoose = require("mongoose");
const topicSchema = require("../db/mongo/topicSchema");
const categorySchema = require("../db/mongo/categorySchema");
const Topic = mongoose.model("Topic", topicSchema);
const Category = mongoose.model("Category", categorySchema);

class TopicController {
  constructor(url) {}
  async getTopics() {
    try {
      const data = `[{"name":".NET","subCategories":[{"name":"ASP.NET","subCategories":[{"name":"MVC","subCategories":[],"topics":[{"name":"Authentication & Authorization"},{"name":"Logging"},{"name":"Routing"},{"name":"Architcture"}]},{"name":"Web API","subCategories":[],"topics":[{"name":"Authentication & Authorization"},{"name":"Logging"},{"name":"Routing"},{"name":"Architcture"}]}],"topics":[{"name":"Session Management"}]},{"name":"ASP.NET Core","subCategories":[],"topics":[{"name":"Architecture"},{"name":"Session Management"}]},{"name":"Entity Framework","subCategories":[],"topics":[{"name":"Architcture"}]},{"name":"Entity Framework Core","subCategories":[],"topics":[{"name":"Architcture"}]}],"topics":[{"name":".NET Architecture"}]}]`;
      return data;
    } catch (err) {
      throw new Error(err);
    }
  }
  async addTopics(item) {
    try {
      const topic = new Topic({
        name: item.name,
        category: item.category,
      });
      await topic.save();
      return topic;
    } catch (err) {
      throw new Error(err);
    }
  }
  async addCategory(item) {
    try {
      const category = new Category({
        name: item.name,
        parent: item.parent,
      });
      await category.save();
      return category;
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = TopicController;
