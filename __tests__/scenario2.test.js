const { httpRequest } = require("./httpRequest");
const { requestData } = require("./requestData");
const { requestOptions } = require("./requestOptions");
const { clearDb } = require("./clearDb");

describe("Scenario 2", () => {
  beforeAll(async() => {
    await clearDb();
  });
  it("should return 400 and error message", async () => {
    const options = requestOptions.getId("sdfdsfdsf-sfdsf22");
    const request = await httpRequest(options);
    const { body, statusCode } = await request;
    expect(body).toBe("id is not valid, use uuid format");
    expect(statusCode).toBe(400);
  });
  it("should return 404 and error message", async () => {
    const options = requestOptions.getId(
      "3c9e2318-b33b-4d68-961c-708fddf838a2"
    );
    const request = await httpRequest(options);
    const { body, statusCode } = await request;
    expect(body).toBe("Person is not found");
    expect(statusCode).toBe(404);
  });
  it("should return new object", async () => {
    const request = await httpRequest(
      requestOptions.post,
      requestData.postData2
    );
    const { body, statusCode } = await request;
    const exp = JSON.parse(body);
    expect(exp).toHaveProperty("name", "Vladimir");
    expect(statusCode).toBe(201);
  });
  it("should return 400 and error message", async () => {
    const request = await httpRequest(
      requestOptions.post,
      requestData.wrongData
    );
    const { body, statusCode } = await request;
    expect(body).toBe("Body is invalid, use only 'name, age, hobbies' args");
    expect(statusCode).toBe(400);
  });
  it("should update object on id", async () => {
    const options = requestOptions.put("sdfdsfdsf-sfdsf22");
    const request = await httpRequest(options, requestData.putData);
    const { body, statusCode } = await request;
    expect(body).toBe("id is not valid, use uuid format");
    expect(statusCode).toBe(400);
  });
  it("should update object on id", async () => {
    const options = requestOptions.put("3c9e2318-b33b-4d68-961c-708fddf838a2");
    const request = await httpRequest(options, requestData.putData);
    const { body, statusCode } = await request;
    expect(body).toBe("Person not found");
    expect(statusCode).toBe(404);
  });
  it("should update object on id", async () => {
    const options = requestOptions.delete("sdfdsfdsf-sfdsf22");
    const request = await httpRequest(options, requestData.putData);
    const { body, statusCode } = await request;
    expect(body).toBe("id is not valid, use uuid format");
    expect(statusCode).toBe(400);
  });
  it("should update object on id", async () => {
    const options = requestOptions.delete(
      "3c9e2318-b33b-4d68-961c-708fddf838a2"
    );
    const request = await httpRequest(options, requestData.putData);
    const { body, statusCode } = await request;
    expect(body).toBe("Person not found");
    expect(statusCode).toBe(404);
  });
});
