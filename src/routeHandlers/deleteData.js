const { sendMessage } = require("./sendMessage");
const { Controller } = require("./controller");
const { HEADERS } = require("../utils");

const deleteData = async (_, res, personId) => {
  try {
    const data = await Controller.deletePerson(personId);
    const json = JSON.stringify(data);
    sendMessage(res, 204, HEADERS.json, json);
  } catch (error) {
    sendMessage(res, 404, HEADERS.textHtml, error.message);
  }
};

module.exports = {
  deleteData,
};
