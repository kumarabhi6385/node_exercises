const mongoose = require("mongoose");
const nodeSchema = require("../db/mongo/nodeSchema");
const { ObjectId } = require("bson");
const Category = mongoose.model("Category", nodeSchema);

class CategoryService {
  constructor(url) {}
  async getCategories() {
    try {
      const data = await Category.find().sort({ path: 1 });
      return data;
    } catch (err) {
      throw new Error(err);
    }
  }
  async getCategory(path) {
    try {
      const regexPath = new RegExp(`^${path}`);
      const nodePath = `/,.NET,.NET Framework,/`;
      const data = await Category.find({ path: { $regex: regexPath } });
      return data;
    } catch (err) {
      throw new Error(err);
    }
  }
  async updateCategory(category) {
    try {
      const node = await Category.findOne({ _id: ObjectId(category._id) });
      if (node) {
        node.name = category.name;
        await Category.updateOne(
          { _id: ObjectId(category._id) },
          { $set: node }
        );
      } else throw new Error("Not found");
    } catch (err) {
      throw new Error(err);
    }
  }
  async createCategory(category) {
    let newPath;
    if (category.path) newPath = `${category.path}/`;
    else newPath = category.path;
    const newCategory = new Category({ name: category.name, path: newPath });
    await newCategory.save();
    return newCategory;
  }
  async deleteCategoryandDescendants(id) {
    const node = await Category.findOne({ _id: new ObjectId(id) });
    if (!node) return;

    const childIds = node.children || [];
    await Category.deleteOne({ _id: new ObjectId(id) });

    for (const childId of childIds) {
      await deleteCategoryandDescendants(childId);
    }
  }
}

module.exports = CategoryService;
