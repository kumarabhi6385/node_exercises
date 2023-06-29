import config from "../config";
import mongoose from "mongoose";

describe("Mongo DB Conenction", () => {
  test("Mong DB Connection should be done successfully", async () => {
    await expect(
      mongoose.connect(config.mongourl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    ).resolves.not.toThrow();
  });
});
