const { sendMessage } = require("./sendMessage");
const { Controller } = require("./controller");
const { HEADERS } = require("../utils");

const readId = async (res, personId) => {
  const data = await Controller.getPerson(personId);
  const json = JSON.stringify(data);
  sendMessage(res, 200, HEADERS.json, json);
};

module.exports = {
  readId,
};
