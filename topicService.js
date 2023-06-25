const Category = require("./category");
const Topic = require("./topic");

// .NET
const category1 = new Category(".NET");
const category2 = new Category("ASP.NET");
const category3 = new Category("ASP.NET Core");
const category4 = new Category("Entity Framework");
const category5 = new Category("Entity Framework Core");

category1.addSubCategory(category2);
category1.addSubCategory(category3);
category1.addSubCategory(category4);
category1.addSubCategory(category5);

const category6 = new Category("MVC");
const category7 = new Category("Web API");

category2.addSubCategory(category6);
category2.addSubCategory(category7);

const topic1 = new Topic(".NET Architecture");
category1.addTopics(topic1);

const topic2 = new Topic("Session Management");
category2.addTopics(topic2);

const topic3 = new Topic("Authentication & Authorization");
category6.addTopics(topic3);
category7.addTopics(topic3);

const topic4 = new Topic("Logging");
category6.addTopics(topic4);
category7.addTopics(topic4);

const topic5 = new Topic("Routing");
category6.addTopics(topic5);
category7.addTopics(topic5);

const topic6 = new Topic("Architcture");
category6.addTopics(topic6);
category7.addTopics(topic6);
category4.addTopics(topic6);
category5.addTopics(topic6);

function GetTopics() {
  const categories = [];
  categories.push(category1);
  return categories;
}

function GetTopicsExpression(category) {
  let htmlData = `<li><span class="caret">${category.name}</span>`;
  htmlData += `<ul class="nested">`;
  if (category.topics.length > 0) {
    category.topics.forEach((element) => {
      htmlData += `<li>${element.name}</li>`;
    });
  }
  if (category.subCategories.length > 0) {
    category.subCategories.forEach((subcategory) => {
      htmlData += GetTopicsExpression(subcategory);
    });
  }
  htmlData += `</ul>`;
  htmlData += `</li>`;
  return htmlData;
}

module.exports = {
  getData: function () {
    const categories = [];
    categories.push(category1);
    return categories;
  },
  getDataInHTML: function () {
    const data = GetTopics();
    let htmlData = `<ul id="myUL">`;
    data.forEach((category) => {
      htmlData += GetTopicsExpression(category);
    });
    htmlData += `</ul>`;
    return htmlData;
  },
};
