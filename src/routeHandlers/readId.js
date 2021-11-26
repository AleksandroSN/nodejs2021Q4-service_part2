const { sendMessage } = require("./sendMessage");
const { Controller } = require("./controller");
const { HEADERS } = require("../utils");

const readId = async (_, res, personId) => {
  try {
    const data = await Controller.getPerson(personId);
    const json = JSON.stringify(data);
    sendMessage(res, 200, HEADERS.json, json);
  } catch (error) {
    sendMessage(res, 404, HEADERS.textHtml, error.message);
  }
};

module.exports = {
  readId,
};
