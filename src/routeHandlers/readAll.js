const { HEADERS } = require("../utils");
const { sendMessage } = require("./sendMessage");
const { Controller } = require("./controller");

const readAll = async (_, res) => {
  const data = await Controller.getAllPerson();
  const json = JSON.stringify(data);
  sendMessage(res, 200, HEADERS.json, json);
};

module.exports = {
  readAll,
};
