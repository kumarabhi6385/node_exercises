import CategoryController from "./categoryController.js";

const routes = (app) => {
  const controller = new CategoryController();

  app
    .route("/category")
    // This API is used to get all categories
    .get(async (req, res) => {
      const data = await controller.getCategories();
      res.json(data);
    })
    // This API is used to delete category
    .delete(async (req, res, next) => {
      try {
        const id = req.body._id;
        await controller.deleteCategoryandDescendants(id);
        res.json(id);
      } catch (err) {
        return next(err);
      }
    })
    // This API is used to create category
    .post(async (req, res, next) => {
      try {
        const category = req.body;
        const data = await controller.createCategory(category);
        res.json(data);
      } catch (err) {
        return next(err);
      }
    })
    // This API is used to update category name
    .put(async (req, res, next) => {
      try {
        const category = req.body;
        const node = await controller.updateCategory(category);
        res.json(node);
      } catch (err) {
        return next(err);
      }
    });

  app
    .route("/category/:path")
    // This API is used to get category and its sub categories
    .get(async (req, res) => {
      const path = req.params.path;
      const data = await controller.getCategory(path);
      res.json(data);
    });
};

export default routes;
