class Category {
  constructor(name) {
    this.name = name;
    this.subCategories = [];
    this.topics = [];
  }
  addSubCategory(category) {
    if (category && category.name) {
      this.subCategories.push(category);
    }
  }
  addTopics(topic) {
    if (topic && topic.name) {
      this.topics.push(topic);
    }
  }
}

module.exports = Category;
