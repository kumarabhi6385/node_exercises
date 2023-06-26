const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
  it("should serve static file", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
  });
});
