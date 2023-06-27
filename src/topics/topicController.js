const MongoClient = require("../db/mongoClient");

class TopicController {
  constructor(url) {
    this.mongoClient = new MongoClient(url);
  }
  async getTopics() {
    try {
      await this.mongoClient.connect();
      const data = `[{"name":".NET","subCategories":[{"name":"ASP.NET","subCategories":[{"name":"MVC","subCategories":[],"topics":[{"name":"Authentication & Authorization"},{"name":"Logging"},{"name":"Routing"},{"name":"Architcture"}]},{"name":"Web API","subCategories":[],"topics":[{"name":"Authentication & Authorization"},{"name":"Logging"},{"name":"Routing"},{"name":"Architcture"}]}],"topics":[{"name":"Session Management"}]},{"name":"ASP.NET Core","subCategories":[],"topics":[{"name":"Architecture"},{"name":"Session Management"}]},{"name":"Entity Framework","subCategories":[],"topics":[{"name":"Architcture"}]},{"name":"Entity Framework Core","subCategories":[],"topics":[{"name":"Architcture"}]}],"topics":[{"name":".NET Architecture"}]}]`;
      return data;
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = TopicController;
