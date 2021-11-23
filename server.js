require("dotenv").config();
const http = require("http");
const uuid = require("uuid");
const { parseUrl, ENDPOINT, SEPARATOR } = require("./src/utils");
const {
  getAllPersons,
  getPerson,
  postPerson,
  putPerson,
  deletePerson,
} = require("./src/routeHandlers");

const PORT = process.env.PORT || 3000;

const mockUser = {
  name: "Ivan",
  age: "44",
  hobbies: ["drochit"],
};

const mockUser2 = {
  name: "Ivan",
  age: "18",
  hobbies: ["wowka"],
};

const server = http.createServer((req, res) => {
  const reqUrl = req.url;
  const personId = parseUrl(reqUrl, ENDPOINT, SEPARATOR);
  const validId = uuid.validate(personId) ? personId : false;

  switch (req.method) {
    case "GET":
      if (req.url === "/") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end("<h1>Hello, World!</h1>");
      } else if (req.url === "/person") {
        const json = JSON.stringify(getAllPersons());
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(json);
      } else if (req.url === `/person/${validId}`) {
        const json2 = JSON.stringify(getPerson("66666"));
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(json2);
      } else {
        res.statusCode = 502;
        res.setHeader("Content-Type", "text/html");
        res.end("<h1>404 Page</h1>");
      }

      break;
    case "POST":
      if (reqUrl === "/person") {
        const json3 = JSON.stringify(postPerson(mockUser));
        res.statusCode = 201;
        res.setHeader("Content-Type", "application/json");
        res.end(json3);
      } else {
        res.statusCode = 502;
        res.setHeader("Content-Type", "text/html");
        res.end("<h1>404 Page</h1>");
      }
      break;
    case "PUT":
      if (reqUrl === `/person/${validId}`) {
        const json4 = JSON.stringify(putPerson(mockUser2));
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(json4);
      } else {
        res.statusCode = 502;
        res.setHeader("Content-Type", "text/html");
        res.end("<h1>404 Page</h1>");
      }
      break;
    case "DELETE":
      if (reqUrl === `/person/${validId}`) {
        const json = JSON.stringify(deletePerson(validId));
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(json);
      } else {
        res.statusCode = 502;
        res.setHeader("Content-Type", "text/html");
        res.end("<h1>404 Page</h1>");
      }
      break;
    default:
      res.statusCode = 502;
      res.setHeader("Content-Type", "text/html");
      res.end("<h1>404 Page</h1>");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
