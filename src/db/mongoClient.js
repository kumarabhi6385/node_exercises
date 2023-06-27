const mongoose = require("mongoose");

class MongoClient {
  constructor(url) {
    this.url = url;
  }
  async connect() {
    try {
      const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      };
      await mongoose.connect(this.url, connectionParams);
    } catch (err) {
      throw new Error(err);
    }
  }
  async disconnect() {
    try {
      await mongoose.disconnect();
    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = MongoClient;
