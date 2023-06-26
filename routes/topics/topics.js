const express = require("express");

const TopicService = require("../../services/topicService");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const topicService = new TopicService(req.config.dataFilePath);
    res.json(await topicService.getTopics());
    return next();
  } catch (err) {
    return next(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const topicService = new TopicService(req.config.dataFilePath);
    const data = await topicService.addTopics({
      categoryName: req.body.categoryName,
      topicName: req.body.topicName,
    });
    res.json(data);
  } catch (err) {}
});

module.exports = router;
