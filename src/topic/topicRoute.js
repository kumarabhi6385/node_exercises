import TopicController from "./topicController.js";

const routes = (app) => {
  const controller = new TopicController();
  app
    .route("/topic")
    .get(async (req, res, next) => {
      try {
        const data = await controller.getTopics();
        res.json(data);
      } catch (err) {
        return next(err);
      }
    })
    .post(async (req, res, next) => {
      try {
        const topic = req.body;
        const data = await controller.addOrUpdateTopic(topic);
        res.json(data);
      } catch (err) {
        return next(err);
      }
    })
    .delete(async (req, res, next) => {
      try {
        const id = req.body._id;
        await controller.deleteTopic(id);
        res.json(id);
      } catch (err) {
        return next(err);
      }
    });
  app.route("/topic/:id").get(async (req, res, next) => {
    try {
      const category_id = req.params.id;
      const data = await controller.getTopic(category_id);
      res.json(data);
    } catch (err) {
      return next(err);
    }
  });
};

export default routes;
