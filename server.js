require("dotenv").config();
const http = require("http");
const uuid = require("uuid");
const {
  parseUrl,
  SEPARATOR,
  ENDPOINTS,
  SEARCH_ENDPOINT,
  CRUD,
  HEADERS,
  HELLO_MESSAGE,
} = require("./src/utils");
const {
  sendMessage,
  readAll,
  readId,
  putData,
  postData,
  deleteData,
} = require("./src/routeHandlers");

const PORT = process.env.PORT || 3000;

const server = http.createServer(async (req, res) => {
  try {
    const reqUrl = req.url;
    const personId = parseUrl(reqUrl, SEARCH_ENDPOINT, SEPARATOR);
    const validId = uuid.validate(personId);

    // ROOT
    if (reqUrl === ENDPOINTS.ROOT && req.method === CRUD.GET) {
      sendMessage(res, 200, HEADERS.textHtml, HELLO_MESSAGE);
    }

    // /person
    if (reqUrl === ENDPOINTS.PERSON && req.method === CRUD.GET) {
      await readAll(res);
    }
    if (reqUrl === ENDPOINTS.PERSON && req.method === CRUD.POST) {
      try {
        await postData(req, res);
      } catch (error) {
        sendMessage(res, 400, HEADERS.textHtml, error.message);
      }
    }

    // /person/:d
    if (reqUrl === `${ENDPOINTS.PERSON}/${personId}`) {
      if (!validId) {
        sendMessage(
          res,
          400,
          HEADERS.textHtml,
          "id is not valid, use uuid format"
        );
      }
    }

    if (
      reqUrl === `${ENDPOINTS.PERSON}/${personId}` &&
      req.method === CRUD.GET
    ) {
      try {
        await readId(res, personId);
      } catch (error) {
        sendMessage(res, 404, HEADERS.textHtml, error.message);
      }
    }

    if (
      reqUrl === `${ENDPOINTS.PERSON}/${personId}` &&
      req.method === CRUD.PUT
    ) {
      try {
        await putData(req, res, personId);
      } catch (error) {
        sendMessage(res, 404, HEADERS.textHtml, error.message);
      }
    }

    if (
      reqUrl === `${ENDPOINTS.PERSON}/${personId}` &&
      req.method === CRUD.DELETE
    ) {
      try {
        await deleteData(res, personId);
      } catch (error) {
        sendMessage(res, 404, HEADERS.textHtml, error.message);
      }
    }
  } catch (err) {
    sendMessage(res, 500, HEADERS.textHtml, "Ooops something wrong");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
