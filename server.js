require("dotenv").config();
const http = require("http");
const uuid = require("uuid");
const {
  parseUrl,
  validateUrl,
  SEPARATOR,
  ENDPOINTS,
  SEARCH_ENDPOINT,
  HEADERS,
  HELLO_MESSAGE,
} = require("./src/utils");
const { sendMessage, routeHandler } = require("./src/routeHandlers");

const PORT = process.env.PORT || 3000;

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const { id, parseId } = parseUrl(url.pathname, SEARCH_ENDPOINT, SEPARATOR);
    const urlForValidity = parseId || url.pathname;
    const validUrl = validateUrl(urlForValidity);

    // ROOT
    if (url.pathname === ENDPOINTS.ROOT) {
      sendMessage(res, 200, HEADERS.textHtml, HELLO_MESSAGE);
    }

    // Validation id
    if (parseId === ENDPOINTS.PERSONID) {
      const validId = uuid.validate(id);
      if (!validId) {
        sendMessage(
          res,
          400,
          HEADERS.textHtml,
          "id is not valid, use uuid format"
        );
      }
    }

    // Validation url
    if (!validUrl) {
      sendMessage(res, 404, HEADERS.textHtml, "<h1>404 PAGE</h1>");
    }

    await routeHandler(req, res, id, parseId);
  } catch (err) {
    sendMessage(
      res,
      500,
      HEADERS.textHtml,
      `Ooops something wrong. Error message ${err.message} `
    );
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
