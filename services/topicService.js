const fs = require("fs");
const { promisify } = require("util");
const writeFileAsync = promisify(fs.writeFile);

class TopicService {
  constructor(filepath) {
    this.filepath = filepath;
  }
  async getTopics() {
    const topicsStreamData = await fs.promises.readFile(this.filepath);
    const topics = JSON.parse(topicsStreamData);
    return topics;
  }

  async #addTopicItem(category, topicsData) {
    return new Promise((resolve, reject) => {
      try {
        if (category.name === topicsData.categoryName) {
          if (
            !category.topics.find((item) => item.name === topicsData.topicName)
          )
            category.topics.push({
              name: topicsData.topicName,
            });
        } else if (category.subCategories.length > 0)
          category.subCategories.forEach(async (element) => {
            await this.#addTopicItem(element, topicsData);
          });
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  }

  async addTopics(topicsData) {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await this.getTopics();
        data.forEach(async (item) => {
          await this.#addTopicItem(item, topicsData);
        });
        await writeFileAsync(this.filepath, JSON.stringify(data));
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });

    return data;
  }
}

module.exports = TopicService;
