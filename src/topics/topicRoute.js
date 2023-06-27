const express = require("express");
const config = require("../../config");
const TopicService = require("./topicController");

const topicService = new TopicService(config.mongourl);

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await topicService.getTopics();
  res.json(data);
});

module.exports = router;
