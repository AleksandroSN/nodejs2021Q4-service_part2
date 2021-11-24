const SEARCH_ENDPOINT = "person";
const SEPARATOR = "/";
const REQKEYS = {
  name: "name",
  age: "age",
  hobbies: "hobbies",
};

const ENDPOINTS = {
  ROOT: "/",
  PERSON: "/person",
};

const CRUD = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

const HEADERS = {
  textHtml: { "Content-Type": "text/html" },
  json: { "Content-Type": "application/json" },
};

const HELLO_MESSAGE = "<h1>Hello, Student! Feel at home</h1>";

module.exports = {
  SEARCH_ENDPOINT,
  SEPARATOR,
  REQKEYS,
  ENDPOINTS,
  CRUD,
  HEADERS,
  HELLO_MESSAGE,
};
