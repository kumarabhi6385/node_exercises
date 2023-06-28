const app = require("./app");
const config = require("../config");
const mongoose = require("mongoose");

mongoose
  .connect(config.mongourl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Connect to Mongo DB : ${config.mongourl}`);
    app.listen(config.port, (err) => {
      if (err) {
        console.log(err);
        process.exit(1);
      }
      console.log(config.port);
      console.log(`Server is running on localhost on port ${config.port}`);
    });
  })
  .catch((err) => {
    console.log(`Failed to connect to Mongo DB : ${err}`);
  });
