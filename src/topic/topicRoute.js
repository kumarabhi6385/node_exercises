import TopicController from "./topicController.js";
// This is middleware used for authentication and authorization
import { loginRequired } from "../middleware/authorization.js";

const routes = (app) => {
  const controller = new TopicController();
  app
    .route("/topic")
    // This API is used to get all topics of all categories
    .get(loginRequired, controller.getTopics)
    // This API is used to add or update topics
    .post(loginRequired, controller.addOrUpdateTopic)
    // This API is used to delete topics of specific category
    .delete(loginRequired, controller.deleteTopic);
  app
    .route("/topic/:id")
    // This API is used to get details of specific category
    .get(controller.getTopic);
};

export default routes;
