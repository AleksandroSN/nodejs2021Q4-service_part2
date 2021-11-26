const { httpRequest } = require("./httpRequest");
const { requestData } = require("./requestData");
const { requestOptions } = require("./requestOptions");
const { clearDb } = require("./clearDb");

describe("Scenario 1", () => {
  beforeAll(() => {
    return clearDb();
  });

  let id = "";
  it("should return 'hello message'", async () => {
    const request = await httpRequest(requestOptions.root);
    const { body } = await request;
    expect(body).toBe("<h1>Hello, Student! Feel at home</h1>");
  });
  it("should return empty array", async () => {
    const request = await httpRequest(requestOptions.getAll);
    const { body, statusCode } = await request;
    expect(body).toBe("[]");
    expect(statusCode).toBe(200);
  });
  it("should return new object", async () => {
    const request = await httpRequest(
      requestOptions.post,
      requestData.postData
    );
    const { body, statusCode } = await request;
    const exp = JSON.parse(body);
    id = exp.id;
    expect(exp).toHaveProperty("name", "Vasya");
    expect(statusCode).toBe(201);
  });
  it("should return object on id", async () => {
    const options = requestOptions.getId(id);
    const request = await httpRequest(options);
    const { body, statusCode } = await request;
    const exp = JSON.parse(body);
    expect(exp).toHaveProperty("name", "Vasya");
    expect(statusCode).toBe(200);
  });
  it("should update object on id", async () => {
    const options = requestOptions.put(id);
    const request = await httpRequest(options, requestData.putData);
    const { body, statusCode } = await request;
    const exp = JSON.parse(body);
    expect(exp).toHaveProperty("name", "Petya");
    expect(statusCode).toBe(200);
  });
  it("should delete object on id", async () => {
    const options = requestOptions.delete(id);
    const request = await httpRequest(options);
    const { statusCode } = await request;
    expect(statusCode).toBe(204);
  });
  it("should return wrong message", async () => {
    const options = requestOptions.getId(id);
    const request = await httpRequest(options);
    const { body, statusCode } = await request;
    expect(statusCode).toBe(404);
    expect(body).toBe("Person is not found");
  });
});
