const { sendMessage } = require("./sendMessage");
const { Controller } = require("./controller");
const { HEADERS } = require("../utils");

const deleteData = async (res, personId) => {
  const data = await Controller.deletePerson(personId);
  const json = JSON.stringify(data);
  sendMessage(res, 200, HEADERS.json, json);
};

module.exports = {
  deleteData,
};
