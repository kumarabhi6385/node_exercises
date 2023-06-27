const MongoClient = require("../src/db/mongoClient");
const config = require("../config");

let client;
beforeAll(() => {
  client = new MongoClient(config.mongourl);
});
afterAll(async () => {});

describe("Mongo DB Conenction", () => {
  test("Mong DB Connection should be done successfully", async () => {
    await expect(client.connect()).resolves.not.toThrow();
  });
  test("Mong DB Disconnection should be done successfully", async () => {
    await expect(client.disconnect()).resolves.not.toThrow();
  });
});
