import app from "./app.js";
import config from "../config.js";
import mongoose from "mongoose";

const log = config.logger;

mongoose
  .connect(config.mongourl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    log.info(`Connect to Mongo DB : ${config.mongourl}`);
    app.listen(config.port, (err) => {
      if (err) {
        log.info(err);
        process.exit(1);
      }
      log.info(config.port);
      log.info(`Server is running on localhost on port ${config.port}`);
    });
  })
  .catch((err) => {
    log.info(`Failed to connect to Mongo DB : ${err}`);
  });
