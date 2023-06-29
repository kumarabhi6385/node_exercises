import express from "express";
import CategoryService from "./categoryService.js";

const categoryService = new CategoryService();

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await categoryService.getCategories();
  res.json(data);
});

router.get("/:path", async (req, res) => {
  const path = req.params.path;
  const data = await categoryService.getCategory(path);
  res.json(data);
});

router.delete("/", async (req, res, next) => {
  try {
    const id = req.body._id;
    await categoryService.deleteCategoryandDescendants(id);
    res.json(id);
  } catch (err) {
    return next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const category = req.body;
    const data = await categoryService.createCategory(category);
    res.json(data);
  } catch (err) {
    return next(err);
  }
});

router.put("/", async (req, res, next) => {
  try {
    const category = req.body;
    const node = await categoryService.updateCategory(category);
    res.json(node);
  } catch (err) {
    return next(err);
  }
});

export default router;
