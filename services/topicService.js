const fs = require("fs");

class TopicService {
  constructor(filepath) {
    this.filepath = filepath;
  }
  async getTopics() {
    const topicsStreamData = await fs.promises.readFile(this.filepath);
    const topics = JSON.parse(topicsStreamData);
    return topics;
  }

  addTopicItem(category, topicsData) {
    if (category.name === topicsData.categoryName) {
      if (!category.topics.find((item) => item.name === topicsData.topicName))
        category.topics.push({
          name: topicsData.topicName,
        });
    } else if (category.subCategories.length > 0)
      category.subCategories.forEach((element) => {
        this.addTopicItem(element, topicsData);
      });
  }

  async addTopics(topicsData) {
    const data = await this.getTopics();
    data.forEach((item) => {
      this.addTopicItem(item, topicsData);
    });
    return data;
  }
}

module.exports = TopicService;
