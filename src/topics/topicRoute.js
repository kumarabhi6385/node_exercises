const express = require("express");
const TopicService = require("./topicService");

const topicService = new TopicService();

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await topicService.getTopics();
  res.json(data);
});

router.post("/", async (req, res, next) => {
  try {
    const data = await topicService.addTopics({
      name: req.body.name,
      category: req.body.category,
    });
    res.json(data);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
