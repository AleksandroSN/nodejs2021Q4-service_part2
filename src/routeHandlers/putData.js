const { Controller } = require("./controller");
const { HEADERS } = require("../utils");
const { reqData } = require("./reqData");
const { sendMessage } = require("./sendMessage");

const putData = async (req, res, personId) => {
  try {
    const chunk = await reqData(req);
    const body = JSON.parse(chunk);
    const data = await Controller.putPerson(personId, body);
    const json = JSON.stringify(data);
    sendMessage(res, 200, HEADERS.json, json);
  } catch (error) {
    if (error.message.match("Person")) {
      sendMessage(res, 404, HEADERS.textHtml, error.message);
      return;
    }
    sendMessage(res, 400, HEADERS.textHtml, error.message);
  }
};

module.exports = {
  putData,
};
