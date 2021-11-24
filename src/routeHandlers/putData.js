const { Controller } = require("./controller");
const { HEADERS } = require("../utils");
const { reqData } = require("./reqData");
const { sendMessage } = require("./sendMessage");

const putData = async (req, res, personId) => {
  const chunk = await reqData(req);
  const body = JSON.parse(chunk);
  const data = await Controller.putPerson(personId, body);
  const json = JSON.stringify(data);
  sendMessage(res, 200, HEADERS.json, json);
};

module.exports = {
  putData,
};
