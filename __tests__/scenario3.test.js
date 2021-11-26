const { httpRequest } = require("./httpRequest");
const { requestData } = require("./requestData");
const { requestOptions } = require("./requestOptions");
const { clearDb } = require("./clearDb");

describe("Scenario 3", () => {
  beforeAll(() => {
    return clearDb();
  });

  let id = "";
  it("should return new object", async () => {
    const request = await httpRequest(
      requestOptions.post,
      requestData.postData
    );
    const { body, statusCode } = await request;
    const exp = JSON.parse(body);
    id = exp.id;
    expect(exp).toHaveProperty("age", "33");
    expect(statusCode).toBe(201);
  });
  it("should update object on id", async () => {
    const options = requestOptions.put(id);
    const request = await httpRequest(options, requestData.putData);
    const { body, statusCode } = await request;
    const exp = JSON.parse(body);
    expect(exp).toHaveProperty("name", "Petya");
    expect(statusCode).toBe(200);
  });
  it("should return new object", async () => {
    const request = await httpRequest(
      requestOptions.post,
      requestData.postData2
    );
    const { body, statusCode } = await request;
    const exp = JSON.parse(body);
    id = exp.id;
    expect(exp).toHaveProperty("age", "18");
    expect(statusCode).toBe(201);
  });
  it("should return new object", async () => {
    const request = await httpRequest(
      requestOptions.post,
      requestData.postData3
    );
    const { body, statusCode } = await request;
    const exp = JSON.parse(body);
    id = exp.id;
    expect(exp).toHaveProperty("age", "22");
    expect(statusCode).toBe(201);
  });
  it("should return array with 3 objects", async () => {
    const request = await httpRequest(requestOptions.getAll);
    const { body, statusCode } = await request;
    const exp = JSON.parse(body);
    expect(exp.length).toBe(3);
    expect(statusCode).toBe(200);
  });
  it("should return object on id", async () => {
    const options = requestOptions.delete(id);
    const request = await httpRequest(options);
    const { statusCode } = await request;
    expect(statusCode).toBe(204);
  });
  it("should return array with 2 objects", async () => {
    const request = await httpRequest(requestOptions.getAll);
    const { body, statusCode } = await request;
    const exp = JSON.parse(body);
    expect(exp.length).toBe(2);
    expect(statusCode).toBe(200);
  });
});
