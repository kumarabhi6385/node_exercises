const express = require("express");
const TopicService = require("./topicService");

const topicService = new TopicService();

const router = express.Router();

router.get("/", async (req, res) => {
  //const data = await topicService.getTopics();
  res.json({ msg: "success" });
});

router.post("/", async (req, res, next) => {
  try {
    const data = await topicService.addCategory({
      name: req.body.name,
      parent: req.body.parent,
    });
    res.json(data);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
