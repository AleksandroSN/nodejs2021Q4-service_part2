require("dotenv").config();
const http = require("http");
const uuid = require("uuid");
const { parseUrl, ENDPOINT, SEPARATOR } = require("./src/utils");
const { Controller } = require("./src/routeHandlers");

const PORT = process.env.PORT || 3000;

const ROOT_ENDPOINT = "/";
const PERSON_ENDPOINT = "/person";

const CRUD = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

// eslint-disable-next-line prettier/prettier
const {
  getPerson,
  getAllPerson,
  postPerson,
  putPerson,
  deletePerson
} = new Controller();

const server = http.createServer(async (req, res) => {
  try {
    const reqUrl = req.url;
    const personId = parseUrl(reqUrl, ENDPOINT, SEPARATOR);
    const validId = uuid.validate(personId);

    switch (reqUrl) {
      case ROOT_ENDPOINT:
        if (req.method === CRUD.GET) {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end("<h1>Hello, Student! Feel at home</h1>");
        }
        break;
      case PERSON_ENDPOINT:
        if (req.method === CRUD.GET) {
          const data = await getAllPerson();
          const json = JSON.stringify(data);
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.end(json);
        }
        if (req.method === CRUD.POST) {
          req.on("data", async (data) => {
            try {
              const body = JSON.parse(data);
              const result = await postPerson(body);
              const json = JSON.stringify(result);
              res.statusCode = 201;
              res.setHeader("Content-Type", "application/json");
              res.end(json);
            } catch (err) {
              res.statusCode = 400;
              res.end(err.message);
            }
          });
        }
        break;
      case `${PERSON_ENDPOINT}/${personId}`:
        if (!validId) {
          res.statusCode = 400;
          res.end("id is not valid, use uuid format");
        }
        if (req.method === CRUD.GET) {
          try {
            const data = await getPerson(personId);
            const json = JSON.stringify(data);
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.end(json);
          } catch (error) {
            res.statusCode = 404;
            res.end(error.message);
          }
        }
        if (req.method === CRUD.PUT) {
          req.on("data", async (chunk) => {
            const body = JSON.parse(chunk);
            const data = await putPerson(personId, body);
            const json = JSON.stringify(data);
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.end(json);
          });
        }
        if (req.method === CRUD.DELETE) {
          const data = await deletePerson(personId);
          const json = JSON.stringify(data);
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.end(json);
        }
        break;
      default:
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/html");
        res.end("<h1>404 Page</h1>");
    }
  } catch (err) {
    res.writeHead(500, { "Content-Type": "text/html" });
    res.end("Ooops something wrong");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
