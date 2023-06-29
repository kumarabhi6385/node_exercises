const express = require("express");
const TopicService = require("./topicService");

const topicService = new TopicService();

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const data = await topicService.getTopics();
    res.json(data);
  } catch (err) {
    return next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const category_id = req.params.id;
    const data = await topicService.getTopic(category_id);
    res.json(data);
  } catch (err) {
    return next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const topic = req.body;
    const data = await topicService.addOrUpdateTopic(topic);
    res.json(data);
  } catch (err) {
    return next(err);
  }
});

router.delete("/", async (req, res, next) => {
  try {
    const id = req.body._id;
    await topicService.deleteTopic(id);
    res.json(id);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
