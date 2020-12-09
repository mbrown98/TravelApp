const app = require("./server");
const supertest = require("supertest");
const request = supertest(app);
import regeneratorRuntime from "regenerator-runtime";

it("Gets the test endpoint", async (done) => {
  const res = await request.get("/test");
  expect(res.status).toBe(200);
  expect(res.body.working).toBeTruthy();

  done();
});
